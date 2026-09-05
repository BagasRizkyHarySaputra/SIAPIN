import crypto from "crypto";

/**
 * Utility email & token untuk SIAPIN.
 *
 * MODE SIMULASI vs KIRIM BENERAN:
 *  - Jika `RESEND_API_KEY` KOSONG → mode simulasi: email TIDAK dikirim.
 *    Link verifikasi/reset dikembalikan ke pemanggil (ditampilkan di UI)
 *    sehingga alur bisa dites offline tanpa bahan apa pun.
 *  - Jika `RESEND_API_KEY` terisi → kirim email beneran via Brevo API
 *    (key disimpan dgn nama RESEND_ demi backward-compat; provider = Brevo).
 */

export function generateToken(bytes = 32): string {
  return crypto.randomBytes(bytes).toString("hex");
}

export function baseUrl(): string {
  return (
    process.env.NEXTAUTH_URL ??
    process.env.AUTH_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000"
  );
}

/** Mode aktif: kirim beneran bila ada API key. */
export function isMailActive(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export interface MailResult {
  ok: boolean;
  mode: "simulasi" | "resend";
  /** Link (mode simulasi: utk ditampilkan; resend: tetap dikirim via email). */
  url?: string;
  to?: string;
  error?: string;
}

/**
 * Kirim email verifikasi / reset password.
 * Provider: Brevo (Sendinblue) — `POST https://api.brevo.com/v3/smtp/email`.
 * Key disimpan di env `RESEND_API_KEY` (nama lama, backward-compat).
 * @param to       email penerima
 * @param subject  subjek
 * @param html     body HTML (sudah berisi link aksi)
 * @param url      link aksi (dipakai utk ditampilkan di mode simulasi)
 */
export async function sendMail(opts: {
  to: string;
  subject: string;
  html: string;
  url: string;
}): Promise<MailResult> {
  const { to, subject, html, url } = opts;
  if (!isMailActive()) {
    // Mode simulasi — jangan kirim apa pun.
    return { ok: true, mode: "simulasi", url, to };
  }

  try {
    const key = process.env.RESEND_API_KEY!;
    // EMAIL_FROM bisa "SIAPIN <de13ugg1ng@gmail.com>" → pecah jadi name + email.
    const fromRaw = process.env.EMAIL_FROM ?? "SIAPIN <de13ugg1ng@gmail.com>";
    const m = fromRaw.match(/^(.*?)\s*<([^>]+)>$/);
    const sender = m
      ? { name: m[1].trim(), email: m[2].trim() }
      : { name: "SIAPIN", email: fromRaw.trim() };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": key,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender,
        to: [{ email: to }],
        subject,
        htmlContent: html,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, mode: "resend", error: text };
    }
    return { ok: true, mode: "resend", to };
  } catch (e) {
    return { ok: false, mode: "resend", error: (e as Error).message };
  }
}

/** Template HTML sederhana utk email. */
export function mailTemplate(title: string, bodyHtml: string, ctaUrl: string, ctaLabel: string): string {
  return `
<!DOCTYPE html>
<html lang="id">
<body style="margin:0;padding:0;background:#f3f0ff;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px;">
    <tr><td align="center">
      <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#4b0a95;padding:20px 24px;">
          <span style="color:#ffffff;font-size:22px;font-weight:bold;">SIAPIN</span>
        </td></tr>
        <tr><td style="padding:28px 24px;">
          <h2 style="margin:0 0 12px;color:#1a1a2e;font-size:18px;">${title}</h2>
          <div style="color:#444;font-size:14px;line-height:1.6;">${bodyHtml}</div>
          <div style="margin:24px 0;text-align:center;">
            <a href="${ctaUrl}" style="background:#4b0a95;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:bold;display:inline-block;">${ctaLabel}</a>
          </div>
          <p style="color:#999;font-size:12px;margin:16px 0 0;border-top:1px solid #eee;padding-top:12px;">
            Jika kamu tidak merasa melakukan permintaan ini, abaikan email ini.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
