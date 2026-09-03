"use client";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/features/dashboard/hero";
import { PilihanMapel } from "@/components/features/dashboard/pilihan-mapel";
import { AiDiagnostic } from "@/components/features/dashboard/ai-diagnostic";
import { PilihPtn } from "@/components/features/dashboard/pilih-ptn";
import { ReviewWeb } from "@/components/features/dashboard/review-web";
import { cq, cqm } from "@/lib/cq";

export default function DashboardPage() {
  return (
    <main className="min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* Full-bleed white sheet — selebar layar (bukan max 1440), jadi
          background putih terpakai 100% lebar desktop.
          Konten di dalamnya diskalakan 50% khusus desktop via --pm
          (lihat .dashboard-scope di globals.css). */}
      <div
        className="dashboard-scope relative mx-auto w-full bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(84),
          paddingBottom: cqm(120),
        }}
      >
        {/* Hero */}
        <HeroSection />

        {/* mapel section — gap antar div besar TIDAK ikut skala 50%,
            pakai cq() utuh supaya tetap lapang & proporsional. */}
        <div className="mt-[2.5cqw]">
          <PilihanMapel />
        </div>

        {/* AI Diagnostic — lavender band behind (Rectangle 160) */}
        <div
          className="relative"
          style={{
            backgroundColor: "#f5eafb",
            marginTop: cq(150),
            marginInline: `calc(${cqm(84)} * -1)`,
            paddingTop: cq(110),
            paddingBottom: cq(120),
            paddingInline: cqm(84), // sejajar dgn inset sheet
          }}
        >
          <AiDiagnostic />
        </div>

        {/* PILIH PTN */}
        <div style={{ marginTop: cq(170) }}>
          <PilihPtn />
        </div>

        {/* Review */}
        <div style={{ marginTop: cq(150) }}>
          <ReviewWeb />
        </div>
      </div>
    </main>
  );
}
