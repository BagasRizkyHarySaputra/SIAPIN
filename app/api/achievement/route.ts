import { NextResponse } from "next/server";
import { achievementRepo } from "@/lib/repo/leaderboard";

/** GET /api/achievement?userId=xxx — achievement user (terbuka/terkunci). */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  try {
    const list = await achievementRepo.list();
    if (userId) {
      const unlocked = await achievementRepo.unlockedBy(userId);
      const unlockedSet = new Set(unlocked.map((u) => u.achievementId));
      return NextResponse.json({
        data: list.map((a) => ({ ...a, unlocked: unlockedSet.has(a.id) })),
      });
    }
    return NextResponse.json({ data: list });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
