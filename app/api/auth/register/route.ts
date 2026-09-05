import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { generateToken, baseUrl, sendMail, mailTemplate, isMailActive } from "@/lib/mail";

/**
 * POST /api/auth/register
 * Daftar akun baru (email + password).
 *
 * - Password di-hash bcrypt, disimpan ke DB User.
 * - Email verifikasi dikirim (atau mode simulasi: link dikembalikan utk
 *   ditampilkan di UI bila RESEND_API_KEY kosong).
 * - User BELUM bisa login sampai email diverifikasi (lihat authorize Credentials:
 *   hanya user dgn emailVerified != null yang boleh login).
 * Body: { name, email, password }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (typeof body?.name === "string" ? body.name : "").trim();
    const email = (typeof body?.email === "string" ? body.email : "")
      .trim()
      .toLowerCase();
    const password =
      typeof body?.password === "string" ? body.password : "";

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Nama, email, dan password wajib diisi." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password minimal 6 karakter." },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Email sudah terdaftar. Silakan login." },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);
    const token = generateToken();
    const exp = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 jam

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashed,
        role: "SISWA",
        verifyToken: token,
        verifyTokenExp: exp,
      },
    });

    // Buat UserProfile awal (streak 0) supaya konsisten dgn user lain.
    await prisma.userProfile.create({
      data: { userId: user.id, streakDays: 0 },
    });

    // ---- Kirim email verifikasi (atau mode simulasi) ----
    const url = `${baseUrl()}/verify-email?token=${token}&email=${encodeURIComponent(email)}`;
    const html = mailTemplate(
      "Verifikasi Email SIAPIN",
      `<p>Halo <b>${name}</b>!</p>
       <p>Terima kasih sudah mendaftar di SIAPIN. Klik tombol di bawah untuk memverifikasi
       alamat email kamu dan mengaktifkan akunmu:</p>`,
      url,
      "Verifikasi Email"
    );
    const mail = await sendMail({
      to: email,
      subject: "Verifikasi Email SIAPIN",
      html,
      url,
    });

    return NextResponse.json({
      data: {
        email: user.email,
        name: user.name,
        verified: false,
        mailMode: mail.mode,
        // Mode simulasi: tampilkan link di UI supaya alur bisa dites offline.
        ...(mail.mode === "simulasi" ? { simUrl: mail.url } : {}),
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
