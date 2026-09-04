"use client";

import { useEffect, useRef, useState } from "react";
import { cqm } from "@/lib/cq";

const TABS = [
  { label: "TKA SMP", slug: "tka-smp" },
  { label: "TKA SMA", slug: "tka-sma" },
  { label: "SNBT", slug: "snbt" },
];

const PERIODS = ["Bulan Ini", "Bulan Lalu", "3 Bulan Terakhir", "Tahun Ini"];

export function LeaderboardHeader({
  mode = "snbt",
}: {
  mode?: "tka-smp" | "tka-sma" | "snbt";
}) {
  const activeIdx = Math.max(
    0,
    TABS.findIndex((t) => t.slug === mode)
  );
  const [open, setOpen] = useState(false);
  const [period, setPeriod] = useState(PERIODS[0]);
  const rootRef = useRef<HTMLDivElement>(null);

  // tutup dropdown kalau klik di luar
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function goMode(slug: string) {
    if (slug === mode) return;
    const url = new URL(window.location.href);
    url.searchParams.set("mode", slug);
    window.location.href = url.toString();
  }

  return (
    <div
      className="flex w-full flex-col md:flex-row md:items-center md:justify-between"
      style={{
        gap: cqm(32),
      }}
    >
      {/* tab base — pill outline #1c1451, segmen aktif solid #2a235c */}
      <div
        className="w-full md:w-[calc(42.6389cqw*var(--pm,1))] md:shrink-0"
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
          const isActive = i === activeIdx;
          return (
            <button
              key={t.slug}
              onClick={() => goMode(t.slug)}
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
              {t.label}
            </button>
          );
        })}
      </div>

      {/* dropdown periode — kanan atas (full-width di HP) */}
      <div
        ref={rootRef}
        className="w-full md:w-[calc(18.6111cqw*var(--pm,1))] md:shrink-0"
        style={{ position: "relative", zIndex: 30 }}
      >
        <div
          onClick={() => setOpen((v) => !v)}
          style={{
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
            {period}
          </span>
          {/* chevron — putar saat terbuka */}
          <svg
            viewBox="0 0 20 12"
            style={{
              flexShrink: 0,
              width: cqm(20),
              height: cqm(12),
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
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

        {/* daftar pilihan */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: cqm(66),
              left: 0,
              right: 0,
              backgroundColor: "#ffffff",
              borderRadius: cqm(16),
              border: `${cqm(2)} solid rgba(0,0,0,0.15)`,
              boxShadow: `0 ${cqm(12)} ${cqm(30)} rgba(0,0,0,0.12)`,
              padding: cqm(6),
            }}
          >
            {PERIODS.map((p) => {
              const sel = p === period;
              return (
                <button
                  key={p}
                  onClick={() => {
                    setPeriod(p);
                    setOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: `${cqm(10)} ${cqm(14)}`,
                    borderRadius: cqm(10),
                    border: "none",
                    cursor: "pointer",
                    background: sel ? "#dbe9ea" : "transparent",
                    color: "#1c1451",
                    fontSize: cqm(18),
                    fontWeight: sel ? 700 : 500,
                    fontFamily: "inherit",
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
