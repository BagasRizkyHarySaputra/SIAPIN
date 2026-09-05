import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

/**
 * POST /api/auth/reset-password { token, email, password }
 * Set password baru setelah user mengklik link reset.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (typeof body?.email === "string" ? body.email : "")
      .trim()
      .toLowerCase();
    const token = typeof body?.token === "string" ? body.token : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (!email || !token || !password) {
      return NextResponse.json({ error: "Data tidak lengkap." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password minimal 6 karakter." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.resetToken || user.resetToken !== token) {
      return NextResponse.json({ error: "Tautan reset tidak valid." }, { status: 400 });
    }
    if (user.resetTokenExp && user.resetTokenExp < new Date()) {
      return NextResponse.json({ error: "Tautan reset sudah kedaluwarsa." }, { status: 410 });
    }

    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashed,
        resetToken: null,
        resetTokenExp: null,
        // Reset sukses → anggap email sudah diverifikasi (pemilik email terbukti).
        emailVerified: user.emailVerified ?? new Date(),
      },
    });

    return NextResponse.json({ data: { reset: true } });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
