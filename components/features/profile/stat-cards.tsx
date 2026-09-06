"use client";

import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";

const CARD_META = [
  { label: "Streak Belajar", valueColor: "#b6744f", cardBg: "#fff6bf", border: "#b6744f", icon: "/visual/profile/stat-streak.png" },
  { label: "Total Soal", valueColor: "#16a9dd", cardBg: "#cbecff", border: "#16a9dd", icon: "/visual/profile/stat-soal.png" },
  { label: "Akurasi", valueColor: "#49b482", cardBg: "#e9ffdb", border: "#49b482", icon: "/visual/profile/stat-akurasi.png" },
];

export function StatCards() {
  const { user } = useAuth();
  const s = user?.stats;
  const values = [
    s?.streak ?? "-",
    s?.totalSoal ?? "-",
    s?.akurasi ?? "-",
  ];

  return (
    <div className="grid w-full grid-cols-2 desk:grid-cols-3" style={{ gap: cqm(40) }}>
      {CARD_META.map((meta, i) => (
        <div
          key={meta.label}
          className={`flex min-w-0 flex-col items-center justify-center py-[calc(2.7778cqw*var(--pm,1))] desk:flex-row desk:justify-start desk:py-0${i === 2 ? " col-span-2 desk:col-span-1" : ""}`}
          style={{
            minHeight: cqm(170),
            borderRadius: cqm(20),
            backgroundColor: meta.cardBg,
            border: `${cqm(2)} solid ${meta.border}`,
            boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08), 0 ${cqm(5)} 0 ${meta.border}`,
            paddingLeft: cqm(35),
            paddingRight: cqm(24),
          }}
        >
          <img
            src={meta.icon}
            alt={meta.label}
            className="shrink-0"
            style={{ width: cqm(100), height: cqm(100), borderRadius: "50%" }}
          />
          <div
            className="flex min-w-0 flex-col items-center text-center mt-[calc(1.6667cqw*var(--pm,1))] desk:ml-[2.6389cqw] desk:mt-0 desk:items-start desk:text-left"
            style={{ gap: cqm(8) }}
          >
            <p
              className="font-bold"
              style={{
                fontSize: cqm(24),
                lineHeight: 1.25,
                color: "#454545",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              {meta.label}
            </p>
            <p
              className="font-bold"
              style={{ fontSize: cqm(24), lineHeight: 1.25, color: meta.valueColor }}
            >
              {values[i]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

