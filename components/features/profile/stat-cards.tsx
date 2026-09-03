"use client";

import { cq } from "@/lib/cq";

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
    <div className="flex w-full" style={{ gap: cq(40) }}>
      {STATS.map((s) => (
        <div
          key={s.label}
          className="relative"
          style={{
            width: cq(404),
            height: cq(170),
            borderRadius: cq(20),
            backgroundColor: s.cardBg,
            border: `${cq(2)} solid ${s.border}`,
            boxShadow: `0 ${cq(4)} ${cq(16)} rgba(28,20,81,0.08)`,
          }}
        >
          {/* icon dalam lingkaran (crop 100x100) */}
          <img
            src={s.icon}
            alt={s.label}
            style={{
              position: "absolute",
              left: cq(35), // area icon 100px: streak x108 → 108-73 = 35
              top: "50%",
              transform: "translateY(-50%)",
              width: cq(100),
              height: cq(100),
              borderRadius: "50%",
            }}
          />
          {/* judul */}
          <p
            className="font-bold"
            style={{
              position: "absolute",
              left: cq(173), // 246-73
              top: cq(51), // 524-473
              fontSize: cq(24),
              lineHeight: 1.25,
              color: "#454545",
            }}
          >
            {s.label}
          </p>
          {/* nilai */}
          <p
            className="font-bold"
            style={{
              position: "absolute",
              left: cq(173),
              top: cq(89), // 562-473
              fontSize: cq(24),
              lineHeight: 1.25,
              color: s.valueColor,
            }}
          >
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}
