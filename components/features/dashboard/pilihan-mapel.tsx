"use client";

import Link from "next/link";
import { cqm } from "@/lib/cq";
import { modes } from "@/lib/data/modes";

const cardStyle: Record<
  string,
  { bg: string; border: string; text: string; btn: string }
> = {
  "tka-smp": { bg: "#cfedc0", border: "#688d37", text: "#688d37", btn: "#688d37" },
  "tka-sma": { bg: "#c9cef4", border: "#5858b8", text: "#5858b8", btn: "#5858b8" },
  snbt: { bg: "#e3aec2", border: "#df5b97", text: "#df5b97", btn: "#df5b97" },
};

/** hex (#rrggbb) -> rgba string dengan alpha tertentu. */
function withAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function PilihanMapel() {
  return (
    <section
      className="mapel-scope relative flex w-full items-center justify-center rounded-[4.86cqw]"
      style={{
        paddingBlock: cqm(72),
      }}
    >
      {/* outer container — selalu 1 baris 3 kartu (HP + desktop) */}
      <div
        className="flex w-full flex-row items-center justify-between rounded-[4.86cqw] px-[1.5cqw] py-[4.8cqw] md:px-[3.3cqw]"
        style={{
          borderStyle: "solid",
          borderWidth: cqm(2),
          borderColor: "rgba(108, 99, 99, 0.5)",
          gap: cqm(24),
        }}
      >
        {modes.map((m) => {
          const s = cardStyle[m.slug] ?? cardStyle.snbt;
          return (
            <div
              key={m.slug}
              className="flex max-w-none flex-1 flex-col items-center justify-between rounded-[1.4cqw] md:max-w-[calc(18.0556cqw*var(--pm,1))] md:flex-none"
              style={{
                width: "100%",
                height: cqm(380),
                backgroundColor: s.bg,
                borderStyle: "solid",
                borderWidth: cqm(1),
                borderColor: withAlpha(s.border, 0.5),
                boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28, 20, 81, 0.1), 0 ${cqm(2)} ${cqm(6)} rgba(28, 20, 81, 0.06)`,
                paddingTop: cqm(64),
                paddingBottom: cqm(38),
              }}
            >
              <span
                className="text-center font-bold"
                style={{ fontSize: cqm(36), color: s.text }}
              >
                {m.name}
              </span>
              <Link
                href={`/soal/${m.slug}`}
                className="flex items-center justify-center rounded-full font-bold text-white transition-opacity hover:opacity-90"
                style={{
                  width: cqm(101),
                  height: cqm(36),
                  backgroundColor: s.btn,
                  fontSize: cqm(16),
                }}
              >
                Mulai
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
