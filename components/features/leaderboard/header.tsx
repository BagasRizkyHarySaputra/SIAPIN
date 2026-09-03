"use client";

import { useState } from "react";
import { cqm } from "@/lib/cq";

const TABS = ["TKA SMP", "TKA SMA", "SNBT"];

export function LeaderboardHeader() {
  const [active, setActive] = useState(2); // SNBT aktif sesuai desain

  return (
    <div
      className="flex w-full flex-col md:flex-row md:items-center md:justify-between"
      style={{
        gap: cqm(32),
      }}
    >
      {/* tab base — pill outline #1c1451, segmen aktif solid #2a235c */}
      <div
        className="w-full md:w-[42.6389cqw] md:shrink-0"
        style={{
          position: "relative",
          display: "flex",
          height: cqm(82),
          borderRadius: cqm(50),
          border: `${cqm(3)} solid #1c1451`,
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
                fontSize: cqm(24),
                fontWeight: 700,
                borderRadius: cqm(50),
                border: "none",
                fontFamily: "inherit",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* dropdown Bulan Ini — kanan atas (full-width di HP) */}
      <div
        className="w-full md:w-[18.6111cqw] md:shrink-0"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: cqm(57),
          borderRadius: cqm(16),
          border: `${cqm(2)} solid rgba(0,0,0,0.45)`,
          backgroundColor: "#ffffff",
          paddingInline: cqm(31),
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: cqm(20),
            fontWeight: 500,
            color: "rgba(28,20,81,0.8)",
          }}
        >
          Bulan Ini
        </span>
        {/* chevron Vector 14 */}
        <svg
          viewBox="0 0 20 12"
          style={{ flexShrink: 0, width: cqm(20), height: cqm(12) }}
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
