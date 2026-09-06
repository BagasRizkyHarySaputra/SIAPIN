import { NextResponse } from "next/server";
import { riwayatRepo } from "@/lib/repo/riwayat";

/**
 * POST /api/riwayat — simpan rekap satu sesi pengerjaan soal.
 * Body: { email, mode, subtes, paketKe, tipe, benar, salah, total, waktu? }
 * User di-upsert by email bila belum ada di DB.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, mode, subtes, paketKe, tipe, benar, salah, total, waktu } =
      body ?? {};

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "email wajib diisi" },
        { status: 400 }
      );
    }
    if (typeof benar !== "number" || typeof total !== "number" || total <= 0) {
      return NextResponse.json(
        { error: "benar & total wajib berupa angka valid" },
        { status: 400 }
      );
    }

    const data = await riwayatRepo.simpan({
      email,
      mode: mode ?? null,
      subtes: subtes ?? null,
      paketKe: paketKe ?? null,
      tipe: tipe ?? null,
      benar,
      salah: typeof salah === "number" ? salah : total - benar,
      total,
      skor: Math.round((benar / total) * 100),
      waktu: typeof waktu === "number" ? waktu : null,
    });

    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }
}

/**
 * GET /api/riwayat?email=...&mode=...&subtes=...
 * Ambil riwayat milik user (opsional filter mode/subtes), terbaru dulu.
 * Dipakai grid paket soal untuk menampilkan skor terakhir tiap paket.
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email") ?? "";
    const mode = url.searchParams.get("mode") ?? undefined;
    const subtes = url.searchParams.get("subtes") ?? undefined;

    if (!email) {
      return NextResponse.json({ error: "email wajib diisi" }, { status: 400 });
    }

    const rows = await riwayatRepo.listByEmail(email);
    const filtered = rows.filter(
      (r) =>
        (!mode || r.mode === mode) &&
        (!subtes || r.subtes === subtes),
    );

    return NextResponse.json({ data: filtered });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }
}
