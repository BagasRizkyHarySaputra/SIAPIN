"use client";

import { Navbar } from "@/components/layout/navbar";
import {
  BimbleSection,
  GuruCards,
} from "@/components/features/bimble/bimble-section";
import { cq } from "@/lib/cq";

export default function BimblePage() {
  return (
    <main className="min-h-screen w-full bg-[#dbe9ea]">
      <Navbar />

      {/* white rounded container (Rectangle 159) */}
      <div
        className="relative mx-auto w-full max-w-[1440px] bg-white"
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
          className="relative"
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
          <GuruCards />
        </div>
      </div>
    </main>
  );
}
