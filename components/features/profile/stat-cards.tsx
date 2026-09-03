"use client";

import { cqm } from "@/lib/cq";

const STATS = [
  {
    label: "Streak Belajar",
    value: "-",
    valueColor: "#b6744f",
    cardBg: "#fff6bf",
    border: "#b6744f",
    icon: "/visual/profile/stat-streak.png",
  },
  {
    label: "Total Soal",
    value: "-",
    valueColor: "#16a9dd",
    cardBg: "#cbecff",
    border: "#16a9dd",
    icon: "/visual/profile/stat-soal.png",
  },
  {
    label: "Akurasi",
    value: "-",
    valueColor: "#49b482",
    cardBg: "#e9ffdb",
    border: "#49b482",
    icon: "/visual/profile/stat-akurasi.png",
  },
];

export function StatCards() {
  return (
    <div className="grid w-full grid-cols-2 md:grid-cols-3" style={{ gap: cqm(40) }}>
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`flex flex-col items-center justify-center py-[calc(2.7778cqw*var(--pm,1))] md:flex-row md:justify-start md:py-0${i === 2 ? " col-span-2 md:col-span-1" : ""}`}
          style={{
            minHeight: cqm(170),
            borderRadius: cqm(20),
            backgroundColor: s.cardBg,
            border: `${cqm(2)} solid ${s.border}`,
            boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08)`,
            paddingLeft: cqm(35),
            paddingRight: cqm(24),
          }}
        >
          {/* icon dalam lingkaran (crop 100x100) */}
          <img
            src={s.icon}
            alt={s.label}
            className="shrink-0"
            style={{
              width: cqm(100),
              height: cqm(100),
              borderRadius: "50%",
            }}
          />
          {/* judul + nilai — center di HP, kiri di desktop */}
          <div
            className="flex min-w-0 flex-col items-center text-center mt-[calc(1.6667cqw*var(--pm,1))] md:ml-[2.6389cqw] md:mt-0 md:items-start md:text-left"
            style={{ gap: cqm(8) }}
          >
            <p
              className="font-bold"
              style={{
                fontSize: cqm(24),
                lineHeight: 1.25,
                color: "#454545",
                whiteSpace: "nowrap",
              }}
            >
              {s.label}
            </p>
            <p
              className="font-bold"
              style={{
                fontSize: cqm(24),
                lineHeight: 1.25,
                color: s.valueColor,
              }}
            >
              {s.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
