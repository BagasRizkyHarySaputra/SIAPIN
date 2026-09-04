"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/features/dashboard/hero";
import { PilihanMapel } from "@/components/features/dashboard/pilihan-mapel";
import { AiDiagnostic } from "@/components/features/dashboard/ai-diagnostic";
import { PilihPtn } from "@/components/features/dashboard/pilih-ptn";
import { PtnPopup, type PtnData } from "@/components/features/dashboard/ptn-popup";
import { PtnResult } from "@/components/features/dashboard/ptn-result";
import { ReviewWeb } from "@/components/features/dashboard/review-web";
import { LoginGate } from "@/components/features/dashboard/login-gate";
import { cqm } from "@/lib/cq";

export default function DashboardPage() {
  const [ptnOpen, setPtnOpen] = useState(false);
  const [ptn, setPtn] = useState<PtnData | null>(null);

  return (
    <LoginGate>
      <main className="min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* white rounded container (Rectangle 159) */}
      <div
        className="dashboard-scope relative mx-auto w-full bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(52),
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
            marginInline: `calc(${cqm(52)} * -1)`,
            paddingTop: cqm(80),
            paddingBottom: cqm(90),
            paddingInline: cqm(52),
          }}
        >
          <AiDiagnostic />
        </div>

        {/* PILIH PTN */}
        <div style={{ marginTop: cqm(90) }}>
          <PilihPtn onOpen={() => setPtnOpen(true)} />
        </div>

        {/* Hasil estimasi peluang — muncul setelah Simpan */}
        {ptn && (
          <div style={{ marginTop: cqm(60) }}>
            <PtnResult data={ptn} onEdit={() => setPtnOpen(true)} />
          </div>
        )}

        {/* Review */}
        <div style={{ marginTop: cqm(40) }}>
          <ReviewWeb />
        </div>
      </div>

      {/* popup input nilai */}
      {ptnOpen && (
        <PtnPopup
          initial={ptn}
          onClose={() => setPtnOpen(false)}
          onSave={(d) => {
            setPtn(d);
            setPtnOpen(false);
          }}
        />
      )}
      </main>
    </LoginGate>
  );
}
