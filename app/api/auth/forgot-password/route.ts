import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateToken, baseUrl, sendMail, mailTemplate } from "@/lib/mail";

/**
 * POST /api/auth/forgot-password { email }
 * Kirim link reset password ke email (atau mode simulasi: kembalikan link).
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (typeof body?.email === "string" ? body.email : "")
      .trim()
      .toLowerCase();
    if (!email) {
      return NextResponse.json({ error: "Email wajib diisi." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    // Jangan bocorkan apakah email terdaftar — balas sukses meski tak ada.
    if (!user || !user.password) {
      // Tetap sukses (anti-enumeration). Mode simulasi: tanpa link.
      return NextResponse.json({ data: { sent: true } });
    }

    const token = generateToken();
    const exp = new Date(Date.now() + 60 * 60 * 1000); // 1 jam
    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: token, resetTokenExp: exp },
    });

    const url = `${baseUrl()}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;
    const html = mailTemplate(
      "Atur Ulang Password SIAPIN",
      `<p>Halo <b>${user.name}</b>!</p>
       <p>Kami menerima permintaan untuk mengatur ulang password akun SIAPIN kamu.
       Klik tombol di bawah untuk membuat password baru:</p>`,
      url,
      "Atur Ulang Password"
    );
    const mail = await sendMail({ to: email, subject: "Atur Ulang Password SIAPIN", html, url });

    return NextResponse.json({
      data: {
        sent: true,
        mailMode: mail.mode,
        ...(mail.mode === "simulasi" ? { simUrl: mail.url } : {}),
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
