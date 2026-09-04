import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * POST /api/user/sync — upsert user by email (dipanggil saat login/register
 * dari mock auth localStorage). Memastikan user UI selalu punya baris di DB
 * sehingga riwayat & diagnostik tersimpan per-user.
 *
 * Sekaligus menghitung STREAK harian dari login:
 *  - login tiap hari        → streakDays + 1
 *  - login di hari yang sama → streakDays tetap (tidak dobel)
 *  - ada hari terlewat       → reset ke 1
 * Body: { email, name?, avatar?, phone? }
 */

/** Tanggal kalender (Asia/Jakarta) → "YYYY-MM-DD". */
function dayKey(d: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

/** Selisih hari kalender antar dua key "YYYY-MM-DD" (b - a). */
function diffDays(aKey: string, bKey: string): number {
  const a = Date.parse(`${aKey}T00:00:00Z`);
  const b = Date.parse(`${bKey}T00:00:00Z`);
  return Math.round((b - a) / 86_400_000);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const emailRaw = body?.email;
    if (!emailRaw || typeof emailRaw !== "string") {
      return NextResponse.json({ error: "email wajib" }, { status: 400 });
    }
    const email = emailRaw.trim().toLowerCase();
    const name =
      (typeof body?.name === "string" && body.name.trim()) ||
      email.split("@")[0].replace(/[^a-zA-Z0-9 ]/g, " ").trim() ||
      "Siswa";

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        ...(typeof body?.avatar === "string" ? { avatar: body.avatar } : {}),
        ...(typeof body?.phone === "string" ? { phone: body.phone } : {}),
      },
      create: {
        email,
        name,
        password: "mock",
        role: "SISWA",
        ...(typeof body?.avatar === "string" ? { avatar: body.avatar } : {}),
        ...(typeof body?.phone === "string" ? { phone: body.phone } : {}),
      },
    });

    // ---- hitung & simpan streak harian di UserProfile ----
    const now = new Date();
    const today = dayKey(now);
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
    });

    let streak = 1;
    if (profile?.lastLoginAt) {
      const last = dayKey(profile.lastLoginAt);
      if (last === today) {
        // sudah login hari ini — pertahankan (jangan dobel hitung)
        streak = Math.max(1, profile.streakDays);
      } else {
        const gap = diffDays(last, today);
        streak = gap === 1 ? (profile.streakDays || 0) + 1 : 1;
      }
    }
    // streak minimal 1 saat login (hari pertama = streak 1)
    if (!profile) streak = 1;

    await prisma.userProfile.upsert({
      where: { userId: user.id },
      update: { streakDays: streak, lastLoginAt: now },
      create: { userId: user.id, streakDays: streak, lastLoginAt: now },
    });

    return NextResponse.json({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        phone: user.phone,
        role: user.role,
        streakDays: streak,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
