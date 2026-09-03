"use client";

import { Navbar } from "@/components/layout/navbar";
import { LeaderboardHeader } from "@/components/features/leaderboard/header";
import { Podium } from "@/components/features/leaderboard/podium";
import { LeaderboardRows } from "@/components/features/leaderboard/rows";
import { cq } from "@/lib/cq";

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* white sheet (Rectangle 159) — radius atas 70, full-bleed */}
      <div
        className="relative mx-auto w-full max-w-[1440px] bg-white"
        style={{
          borderTopLeftRadius: cq(70),
          borderTopRightRadius: cq(70),
        }}
      >
        <div style={{ paddingInline: cq(84), paddingTop: cq(50) }}>
          {/* heading Leaderboard (y246 → 50 dari sheet top 196) */}
          <h1
            className="font-bold"
            style={{
              fontSize: cq(64),
              color: "#1c1451",
              lineHeight: 1.27,
              margin: 0,
            }}
          >
            Leaderboard
          </h1>

          {/* tab mapel + dropdown Bulan Ini (y367 → 40 setelah heading) */}
          <div style={{ marginTop: cq(40) }}>
            <LeaderboardHeader />
          </div>

          {/* podium top 3 (y548 → 99 setelah tabs) */}
          <div style={{ marginTop: cq(99) }}>
            <Podium />
          </div>
        </div>
      </div>

      {/* baris peringkat — di mint, di bawah white sheet (row1 y1156 = 60 setelah podium bottom) */}
      <div
        className="mx-auto w-full max-w-[1440px]"
        style={{ paddingInline: cq(84), marginTop: cq(60), paddingBottom: cq(83) }}
      >
        <LeaderboardRows />
      </div>
    </main>
  );
}
