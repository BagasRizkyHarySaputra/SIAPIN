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

      {/* white rounded container (Rectangle 159) */}
      <div
        className="dashboard-scope relative mx-auto w-full max-w-[1440px] bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(84),
          paddingBottom: cqm(120),
        }}
      >
        <HeroSection />

        {/* mapel section */}
        <div className="mt-[1cqw]">
          <PilihanMapel />
        </div>

        {/* AI Diagnostic — lavender band behind (Rectangle 160) */}
        <div
          className="relative"
          style={{
            backgroundColor: "#f5eafb",
            marginTop: cqm(40),
            marginInline: `calc(${cqm(84)} * -1)`,
            paddingTop: cqm(80),
            paddingBottom: cqm(90),
            paddingInline: cqm(84),
          }}
        >
          <AiDiagnostic />
        </div>

        {/* PILIH PTN */}
        <div style={{ marginTop: cqm(90) }}>
          <PilihPtn />
        </div>

        {/* Review */}
        <div style={{ marginTop: cqm(40) }}>
          <ReviewWeb />
        </div>
      </div>
    </main>
  );
}
