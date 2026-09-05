import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { encode } from "next-auth/jwt";

/**
 * GET /api/auth/verify-email?token=...&email=...
 * Memverifikasi email user (set emailVerified, hapus token), lalu
 * membuat sesi Auth.js (JWT) langsung — user langsung login — dan
 * mengembalikan JSON sukses. Halaman /verify-email akan mengarahkan
 * ke /dashboard setelah menerima JSON sukses ini.
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

    // Tandai email terverifikasi + hapus token.
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        verifyToken: null,
        verifyTokenExp: null,
      },
    });

    // Buat sesi Auth.js (JWT) agar user LANGSUNG login tanpa perlu password.
    // Nama cookie & salt harus sama persis dengan yang dipakai NextAuth:
    //   https  -> "__Secure-authjs.session-token"
    //   http   -> "authjs.session-token"
    const origin = new URL(req.url).origin;
    const useSecure = origin.startsWith("https:");
    const cookieName = useSecure ? "__Secure-authjs.session-token" : "authjs.session-token";
    const secret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET ?? "";
    if (secret) {
      try {
        const sessionToken = await encode({
          token: {
            sub: user.id,
            name: user.name,
            email: user.email,
            picture: user.image ?? null,
          },
          secret,
          salt: cookieName,
          maxAge: 30 * 24 * 60 * 60, // 30 hari
        });
        const res = NextResponse.json({ data: { email: user.email, verified: true } });
        res.cookies.set(cookieName, sessionToken, {
          httpOnly: true,
          secure: useSecure,
          sameSite: "lax",
          path: "/",
          maxAge: 30 * 24 * 60 * 60,
        });
        return res;
      } catch {
        // Gagal membuat sesi — tetap laporkan sukses verifikasi (user bisa login manual).
        return NextResponse.json({ data: { email: user.email, verified: true } });
      }
    }

    return NextResponse.json({ data: { email: user.email, verified: true } });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
