"use client";

import { useState } from "react";
import { cq } from "@/lib/cq";

const TABS = ["TKA SMP", "TKA SMA", "SNBT"];

export function LeaderboardHeader() {
  const [active, setActive] = useState(2); // SNBT aktif sesuai desain

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* tab base — pill outline #1c1451, segmen aktif solid #2a235c */}
      <div
        style={{
          position: "relative",
          display: "flex",
          width: cq(614),
          height: cq(82),
          borderRadius: cq(50),
          border: `${cq(3)} solid #1c1451`,
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        {TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: isActive ? "#2a235c" : "transparent",
                color: isActive ? "#ffffff" : "#1c1451",
                fontSize: cq(24),
                fontWeight: 700,
                borderRadius: cq(50),
                border: "none",
                fontFamily: "inherit",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* dropdown Bulan Ini — kanan atas */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: cq(268),
          height: cq(57),
          borderRadius: cq(16),
          border: `${cq(2)} solid rgba(0,0,0,0.45)`,
          backgroundColor: "#ffffff",
          paddingInline: cq(31),
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: cq(20),
            fontWeight: 500,
            color: "rgba(28,20,81,0.8)",
          }}
        >
          Bulan Ini
        </span>
        {/* chevron Vector 14 */}
        <svg
          width={cq(20)}
          height={cq(12)}
          viewBox="0 0 20 12"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M1 1 L10 10 L19 1"
            fill="none"
            stroke="#1c1451"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
