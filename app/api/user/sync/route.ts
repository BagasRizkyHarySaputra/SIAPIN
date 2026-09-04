import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * POST /api/user/sync — upsert user by email (dipanggil saat login/register
 * dari mock auth localStorage). Memastikan user UI selalu punya baris di DB
 * sehingga riwayat & diagnostik tersimpan per-user.
 * Body: { email, name?, avatar?, phone? }
 */
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

    return NextResponse.json({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
