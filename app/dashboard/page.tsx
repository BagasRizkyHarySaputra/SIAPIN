"use client";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/features/dashboard/hero";
import { PilihanMapel } from "@/components/features/dashboard/pilihan-mapel";
import { AiDiagnostic } from "@/components/features/dashboard/ai-diagnostic";
import { PilihPtn } from "@/components/features/dashboard/pilih-ptn";
import { ReviewWeb } from "@/components/features/dashboard/review-web";
import { cqm } from "@/lib/cq";

export default function DashboardPage() {
  return (
    <main className="min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* White sheet — max 1440 (Figma artboard), centered; <1440 full-bleed.
          Konten di-inset 147px kiri/kanan mengikuti Figma (container x147–1313).
          Desktop --pm:1 → 1:1 persis Figma; HP --pm:2 → proporsional. */}
      <div
        className="dashboard-scope relative mx-auto w-full max-w-[1440px] bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(147),
          paddingBottom: cqm(120),
        }}
      >
        {/* Hero */}
        <HeroSection />

        {/* Pilihan mapel */}
        <div style={{ marginTop: cqm(98) }}>
          <PilihanMapel />
        </div>

        {/* AI Diagnostic — lavender band full-bleed (Rectangle 160) */}
        <div
          className="relative"
          style={{
            backgroundColor: "#f5eafb",
            marginTop: cqm(98),
            marginInline: `calc(${cqm(147)} * -1)`,
            paddingTop: cqm(50),
            paddingBottom: cqm(50),
            paddingInline: cqm(147),
          }}
        >
          <AiDiagnostic />
        </div>

        {/* Pilih PTN */}
        <div style={{ marginTop: cqm(60) }}>
          <PilihPtn />
        </div>

        {/* Review */}
        <div style={{ marginTop: cqm(115) }}>
          <ReviewWeb />
        </div>
      </div>
    </main>
  );
}
