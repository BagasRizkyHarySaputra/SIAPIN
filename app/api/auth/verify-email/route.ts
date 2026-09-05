import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * GET /api/auth/verify-email?token=...&email=...
 * Memverifikasi email user (set emailVerified, hapus token).
 * Dipanggil dari halaman /verify-email.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token") ?? "";
    const emailRaw = searchParams.get("email") ?? "";
    const email = emailRaw.trim().toLowerCase();

    if (!token || !email) {
      return NextResponse.json({ error: "Tautan tidak lengkap." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.verifyToken || user.verifyToken !== token) {
      return NextResponse.json({ error: "Tautan verifikasi tidak valid." }, { status: 400 });
    }
    if (user.verifyTokenExp && user.verifyTokenExp < new Date()) {
      return NextResponse.json({ error: "Tautan verifikasi sudah kedaluwarsa." }, { status: 410 });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        verifyToken: null,
        verifyTokenExp: null,
      },
    });

    return NextResponse.json({ data: { email: user.email, verified: true } });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
