"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import {
  BimbleSection,
  GuruCards,
} from "@/components/features/bimble/bimble-section";
import {
  TEACHER_PANEL_DATA,
  TeacherPanel,
} from "@/components/features/bimble/teacher-panel";
import { cq } from "@/lib/cq";

export default function BimblePage() {
  // null = state normal (frame 333-496); terisi = state "click" (frame 333-1055)
  const [selected, setSelected] = useState<string | null>(null);
  const active = selected ? TEACHER_PANEL_DATA[selected] : undefined;

  const handleSelect = (id: string) => setSelected(id === selected ? null : id);
  const close = () => setSelected(null);

  return (
    <main
      className="flex min-h-screen w-full flex-col bg-[#dbe9ea]"
      style={{ minHeight: "100dvh", containerType: "inline-size" }}
    >
      <Navbar />

      {/* white rounded container (Rectangle 159) */}
      <div
        className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col bg-white"
        style={{
          borderTopLeftRadius: cq(70),
          borderTopRightRadius: cq(70),
          paddingInline: cq(84),
        }}
      >
        {/* Rectangle 159 top (y=196) → heading (y=246) = 50px */}
        <div style={{ paddingTop: cq(50) }}>
          <BimbleSection />
        </div>

        {/* lavender band (Rectangle 160) — full-bleed, dengan hairline atas #b5b0b0 */}
        <div
          className="relative flex-1"
          style={{
            backgroundColor: "#f5eafb",
            borderTop: `${cq(1)} solid #b5b0b0`,
            marginTop: cq(34),
            marginInline: `calc(${cq(84)} * -1)`,
            paddingTop: cq(61),
            paddingBottom: cq(73),
            paddingInline: cq(84),
          }}
        >
          {/*
            SATU struktur untuk desktop & HP — layout diatur CSS murni
            (.bimble-area di globals.css). Tidak ada branching JSX berbasis
            media-query → tidak ada hydration mismatch → klik/state selalu jalan.

            - Desktop (≥768px): .bimble-area--active = row → kartu menyempit
              (51.25cqw ≈ 738) di kiri + panel (36.11cqw ≈ 520) di kanan (1:1 Figma).
            - HP (<768px): panel detail disisipkan tepat di bawah kartu aktif
              (panelNode → .bimble-mobile-panel), menimpa kartu di bawahnya;
              .bimble-panel kanan disembunyikan.
          */}
          <div
            className={active ? "bimble-area bimble-area--active" : "bimble-area"}
          >
            <div className="bimble-cards">
              <GuruCards
                activeId={selected}
                onSelect={handleSelect}
                onPageChange={close}
                panelNode={
                  active ? (
                    <TeacherPanel t={active} onClose={close} />
                  ) : undefined
                }
              />
            </div>
            {active && (
              <div className="bimble-panel">
                <TeacherPanel t={active} onClose={close} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
