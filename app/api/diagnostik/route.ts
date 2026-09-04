import { NextResponse } from "next/server";
import { riwayatRepo } from "@/lib/repo/riwayat";
import { prisma } from "@/lib/db";

/**
 * GET /api/diagnostik?email=... — data diagnostik AI + grafik per user.
 *
 * Menghitung dari RIWAYAT PENGERJAAN nyata user:
 *  - progress per mode (tka-smp/tka-sma/snbt): % benar kumulatif
 *  - akurasi & jumlah sesi
 *  - breakdown per subtes (untuk radar chart / grafik diagnostic)
 *  - AiDiagnostic (skor TKA SMP/SMA/SNBT) — dihitung dari riwayat, fallback ke DB
 *  - data PTN (input nilai terakhir) untuk estimasi peluang
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    if (!email) {
      return NextResponse.json({ error: "email wajib" }, { status: 400 });
    }

    const lower = email.trim().toLowerCase();
    const riwayat = await riwayatRepo.listByEmail(lower);

    // ---- agregasi per mode ----
    const perMode: Record<
      string,
      { benar: number; salah: number; total: number; sesi: number }
    > = {};
    const perSubtes: Record<
      string,
      { benar: number; total: number; sesi: number }
    > = {};
    // perSubtesByMode: key "mode" -> { subtes: { benar, total, sesi } }
    // Dipakai radar chart agar subtes dari mode berbeda tidak tercampur
    // (mis. "matematika" ada di TKA SMA & TKA SMP).
    const perSubtesByMode: Record<
      string,
      Record<string, { benar: number; total: number; sesi: number }>
    > = {};
    let totalBenar = 0;
    let totalSoal = 0;
    let totalSesi = riwayat.length;

    for (const r of riwayat) {
      const m = r.mode ?? "unknown";
      const s = r.subtes ?? r.mode ?? "unknown";
      perMode[m] = perMode[m] ?? { benar: 0, salah: 0, total: 0, sesi: 0 };
      perMode[m].benar += r.benar;
      perMode[m].salah += r.salah;
      perMode[m].total += r.total;
      perMode[m].sesi += 1;

      perSubtes[s] = perSubtes[s] ?? { benar: 0, total: 0, sesi: 0 };
      perSubtes[s].benar += r.benar;
      perSubtes[s].total += r.total;
      perSubtes[s].sesi += 1;

      perSubtesByMode[m] = perSubtesByMode[m] ?? {};
      perSubtesByMode[m][s] = perSubtesByMode[m][s] ?? {
        benar: 0,
        total: 0,
        sesi: 0,
      };
      perSubtesByMode[m][s].benar += r.benar;
      perSubtesByMode[m][s].total += r.total;
      perSubtesByMode[m][s].sesi += 1;

      totalBenar += r.benar;
      totalSoal += r.total;
    }

    const pct = (b: number, t: number) => (t > 0 ? Math.round((b / t) * 100) : 0);

    const progress = {
      tkaSmp: pct(perMode["tka-smp"]?.benar ?? 0, perMode["tka-smp"]?.total ?? 0),
      tkaSma: pct(perMode["tka-sma"]?.benar ?? 0, perMode["tka-sma"]?.total ?? 0),
      snbt: pct(perMode["snbt"]?.benar ?? 0, perMode["snbt"]?.total ?? 0),
    };

    // ---- Ambil data user & AiDiagnostic DB (bila ada) & input nilai terakhir ----
    const user = await prisma.user.findUnique({ where: { email: lower } });
    let aiDb = null;
    let inputNilai = null;
    let profile = null;
    if (user) {
      aiDb = await prisma.aiDiagnostic.findUnique({ where: { userId: user.id } });
      inputNilai = await prisma.inputNilai.findFirst({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
      });
      profile = await prisma.userProfile.findUnique({ where: { userId: user.id } });
    }

    return NextResponse.json({
      data: {
        email: lower,
        nama: user?.name ?? profile?.namaLengkap ?? null,
        ringkasan: {
          totalSesi,
          totalSoal,
          totalBenar,
          akurasi: pct(totalBenar, totalSoal),
          tkaSmp: perMode["tka-smp"] ?? { benar: 0, salah: 0, total: 0, sesi: 0 },
          tkaSma: perMode["tka-sma"] ?? { benar: 0, salah: 0, total: 0, sesi: 0 },
          snbt: perMode["snbt"] ?? { benar: 0, salah: 0, total: 0, sesi: 0 },
        },
        progress,
        perSubtes,
        perSubtesByMode,
        aiDiagnostic: aiDb
          ? {
              tkaSmp: aiDb.tkaSmp,
              tkaSma: aiDb.tkaSma,
              snbt: aiDb.snbt,
              progressTkaSmp: aiDb.progressTkaSmp,
              progressTkaSma: aiDb.progressTkaSma,
              progressSnbt: aiDb.progressSnbt,
            }
          : null,
        profile: profile
          ? {
              namaLengkap: profile.namaLengkap,
              streakDays: profile.streakDays,
              totalSoal: profile.totalSoal,
              akurasi: profile.akurasi,
            }
          : null,
        inputNilai: inputNilai
          ? {
              nilaiTkaSmp: inputNilai.nilaiTkaSmp,
              nilaiTkaSma: inputNilai.nilaiTkaSma,
              nilaiSnbt: inputNilai.nilaiSnbt,
              hasil: inputNilai.hasil,
            }
          : null,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
