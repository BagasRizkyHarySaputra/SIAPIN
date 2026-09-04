import { NextResponse } from "next/server";
import { leaderboardRepo } from "@/lib/repo/leaderboard";

/** GET /api/leaderboard?mode=snbt&top=10 — daftar peringkat per mode (podium & rows). */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const top = Math.min(Number(searchParams.get("top") ?? 10) || 10, 50);
  const mode = toMode(searchParams.get("mode") ?? "snbt");
  try {
    const rows = await leaderboardRepo.topByMode(mode, top);
    return NextResponse.json({ data: rows });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

function toMode(slug: string): "TKA_SMP" | "TKA_SMA" | "SNBT" {
  if (slug === "tka-smp") return "TKA_SMP";
  if (slug === "tka-sma") return "TKA_SMA";
  return "SNBT";
}
