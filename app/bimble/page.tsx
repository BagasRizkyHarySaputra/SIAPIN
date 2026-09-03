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

  return (
    <main
      className="flex min-h-screen w-full flex-col bg-[#dbe9ea]"
      style={{ minHeight: "100dvh" }}
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
          {active ? (
            /* State klik: kartu menyempit (738) di kiri + panel profil guru di kanan.
               Figma: kartu x64..802, panel x854..1374, gap 52.
               Band padding kiri 84 → marginLeft -20 agar mulai di 64. */
            <div
              className="flex items-start"
              style={{ marginLeft: `calc(${cq(84)} * -1 + ${cq(64)})` }}
            >
              <div className="flex flex-col" style={{ width: cq(738) }}>
                <GuruCards
                  activeId={selected}
                  slim
                  onSelect={(id) => setSelected(id === selected ? null : id)}
                  onPageChange={() => setSelected(null)}
                />
              </div>
              <div style={{ width: cq(52) }} />
              <TeacherPanel t={active} onClose={() => setSelected(null)} />
            </div>
          ) : (
            <GuruCards
              activeId={selected}
              onSelect={(id) => setSelected(id === selected ? null : id)}
              onPageChange={() => setSelected(null)}
            />
          )}
        </div>
      </div>
    </main>
  );
}
