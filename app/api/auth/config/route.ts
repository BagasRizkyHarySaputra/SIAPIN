import { NextResponse } from "next/server";

/**
 * GET /api/auth/config — info konfigurasi auth utk UI (popup login).
 * Dipakai utk menentukan apakah tombol "Lanjut dengan Google" perlu muncul
 * (hanya bila GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET sudah diisi di .env).
 */
export async function GET() {
  return NextResponse.json({
    data: {
      googleEnabled: Boolean(
        process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ),
      mailMode: process.env.RESEND_API_KEY ? "resend" : "simulasi",
    },
  });
}
