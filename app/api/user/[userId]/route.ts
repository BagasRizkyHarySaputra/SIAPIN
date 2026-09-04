import { NextResponse } from "next/server";
import { userRepo } from "@/lib/repo/user";

/**
 * GET /api/user/[userId] — profil lengkap user:
 * profil, AI diagnostic, leaderboard, achievement, input nilai terakhir, riwayat.
 */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ userId: string }> }
) {
  const { userId } = await ctx.params;
  try {
    const profile = await userRepo.getFullProfile(userId);
    if (!profile) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }
    return NextResponse.json({ data: profile });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
