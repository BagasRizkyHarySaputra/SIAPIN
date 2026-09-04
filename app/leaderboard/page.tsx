import { Navbar } from "@/components/layout/navbar";
import { LeaderboardHeader } from "@/components/features/leaderboard/header";
import { Podium, type PodiumPerson } from "@/components/features/leaderboard/podium";
import { LeaderboardRows, type LeaderboardRow } from "@/components/features/leaderboard/rows";
import { prisma } from "@/lib/db";
import { cqm } from "@/lib/cq";

/** Styling podium per peringkat (1:1 Figma — sama dengan PODIUM statis di komponen). */
const PODIUM_STYLE: Record<number, Omit<PodiumPerson, "rank" | "name" | "points" | "avatar">> = {
  1: { bodyColor: "#cbecff", capColor: "#456e7d", ringColor: "#5858b8", bodyH: 500, bodyTop: 48, avatarTop: 101, nameY: 293, pillY: 336 },
  2: { bodyColor: "#fff6bf", capColor: "#a8a381", ringColor: "#f7d416", bodyH: 392, bodyTop: 47, avatarTop: 121, nameY: 292, pillY: 335 },
  3: { bodyColor: "#ffe4ed", capColor: "#a05971", ringColor: "#e0659e", bodyH: 313, bodyTop: 48, avatarTop: 83, nameY: 247, pillY: 290 },
};

const MODE_ENUM = {
  "tka-smp": "TKA_SMP",
  "tka-sma": "TKA_SMA",
  snbt: "SNBT",
} as const;

type ModeSlug = keyof typeof MODE_ENUM;

function toModeSlug(s: string | undefined): ModeSlug {
  return s === "tka-smp" || s === "tka-sma" ? s : "snbt";
}

export default async function LeaderboardPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const sp = await searchParams;
  const modeSlug = toModeSlug(sp.mode);
  const mode = MODE_ENUM[modeSlug];

  let podium: PodiumPerson[] = [];
  let rows: LeaderboardRow[] = [];

  try {
    const all = await prisma.leaderboard.findMany({
      where: { mode },
      orderBy: { peringkat: "asc" },
      include: { user: { include: { profile: true } } },
    });

    const top3 = all.slice(0, 3);
    podium = top3.map((lb, i) => {
      const rank = (i === 0 ? 2 : i === 1 ? 1 : 3) as 1 | 2 | 3;
      const s = PODIUM_STYLE[rank];
      return {
        rank,
        name: lb.user.name,
        points: `${(lb.totalPoin / 1000).toFixed(1).replace(/\.0$/, "")}K poin`,
        avatar: `/visual/leaderboard/podium-${i + 1}.png`,
        ...s,
      };
    });

    const avatarByRank = ["row-1.png", "row-2.png", "row-3.png", "row-4.png", "row-5.png", "row-6.png", "row-7.png"];
    const shadowPattern = [true, false, false, true, false, true, false];
    rows = all.slice(3, 10).map((lb, i) => {
      const acc = lb.user.profile?.akurasi;
      return {
        rank: String(i + 4),
        name: lb.user.name,
        accuracy: `${(acc ?? 0).toFixed(2).replace(/\.?0+$/, "")}%`,
        points: `${(lb.totalPoin / 1000).toFixed(1).replace(/\.0$/, "")}k poin`,
        avatar: `/visual/leaderboard/${avatarByRank[i] ?? "row-7.png"}`,
        shadow: shadowPattern[i] ?? false,
      };
    });
  } catch {
    // db bermasalah → fallback: komponen render pakai data statis default-nya
  }

  return (
    <main className="leaderboard-scope min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* white sheet (Rectangle 159) — radius atas 70, full 100% lebar layar */}
      <div
        className="relative mx-auto w-full bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
        }}
      >
        <div style={{ paddingInline: cqm(52), paddingTop: cqm(50) }}>
          {/* heading Leaderboard (y246 → 50 dari sheet top 196) */}
          <h1
            className="font-bold"
            style={{
              fontSize: cqm(64),
              color: "#1c1451",
              lineHeight: 1.27,
              margin: 0,
            }}
          >
            Leaderboard
          </h1>

          {/* tab mapel + dropdown Bulan Ini (y367 → 40 setelah heading) */}
          <div style={{ marginTop: cqm(40) }}>
            <LeaderboardHeader mode={modeSlug} />
          </div>

          {/* podium top 3 (y548 → 99 setelah tabs) */}
          <div style={{ marginTop: cqm(99) }}>
            <Podium items={podium} />
          </div>
        </div>
      </div>

      {/* baris peringkat — di mint, di bawah white sheet (row1 y1156 = 60 setelah podium bottom) */}
      <div
        className="mx-auto w-full"
        style={{ paddingInline: cqm(52), marginTop: cqm(60), paddingBottom: cqm(83) }}
      >
        <LeaderboardRows items={rows} />
      </div>
    </main>
  );
}
