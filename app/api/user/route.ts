import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * DELETE /api/user — hapus akun user beserta SEMUA data terkait dari database.
 * Body: { email }
 *
 * Aman: seluruh relasi user (UserProfile, AiDiagnostic, InputNilai,
 * RiwayatPengerjaan, Leaderboard, UserAchievement) memakai onDelete: Cascade,
 * jadi cukup `prisma.user.delete` — Prisma otomatis menghapus data turunannya.
 */
export async function DELETE(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const emailRaw = body?.email;
    if (!emailRaw || typeof emailRaw !== "string") {
      return NextResponse.json({ error: "email wajib" }, { status: 400 });
    }
    const email = emailRaw.trim().toLowerCase();

    // Cek user ada — kalau tidak ada, anggap sukses (idempotent).
    const existing = await prisma.user.findUnique({ where: { email } });
    if (!existing) {
      return NextResponse.json({ deleted: false });
    }

    await prisma.user.delete({ where: { email } });

    return NextResponse.json({ deleted: true });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }
}
