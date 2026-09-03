"use client";

import { Navbar } from "@/components/layout/navbar";
import { AccountCard } from "@/components/features/profile/account-card";
import { StatCards } from "@/components/features/profile/stat-cards";
import { Achievement } from "@/components/features/profile/achievement";
import { AiAndSettings } from "@/components/features/profile/ai-settings";
import { cqm } from "@/lib/cq";

export default function ProfilePage() {
  return (
    <main className="min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* white sheet (Rectangle 159) — mulai y196; padding kiri 74 (konten desain x73/74) */}
      <div
        className="profile-scope relative mx-auto w-full max-w-[1440px] bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(74),
          paddingTop: cqm(75), // account y271 - sheet y196
          paddingBottom: cqm(83), // sisa putih ke bawah sheet (render PNG terpotong 1435)
        }}
      >
        {/* account card (Rectangle 76) */}
        <AccountCard />

        {/* 3 stat cards: y473 - (271+170) = 32 */}
        <div style={{ marginTop: cqm(32) }}>
          <StatCards />
        </div>

        {/* achievement title: y675 - (473+170) = 32 */}
        <div style={{ marginTop: cqm(32) }}>
          <Achievement />
        </div>

        {/* AI Diagnostic + Lainnya: title y1003 - (740+231) = 32 */}
        <div style={{ marginTop: cqm(32) }}>
          <AiAndSettings />
        </div>
      </div>
    </main>
  );
}
