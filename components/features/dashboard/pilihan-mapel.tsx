"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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

/**
 * Urutan kartu mengikuti Figma (kiri → kanan): TKA SMP, TKA SMA, SNBT.
 * modes[] global urut snbt/sma/smp — hanya tampilan yang diurutkan ulang.
 */
const figmaOrder = ["tka-smp", "tka-sma", "snbt"];

export function PilihanMapel() {
  const router = useRouter();

  const ordered = figmaOrder
    .map((slug) => modes.find((m) => m.slug === slug))
    .filter(Boolean) as typeof modes;

  return (
    <section className="mapel-scope relative flex w-full items-center justify-center">
      {/* outer container — selalu 1 baris 3 kartu (HP + desktop) */}
      <div
        className="flex w-full flex-row items-center justify-between rounded-[calc(4.86cqw*var(--ds,1))]"
        style={{
          borderStyle: "solid",
          borderWidth: cqm(2),
          borderColor: "rgba(108, 99, 99, 0.5)",
          gap: cqm(142),
          paddingBlock: cqm(16),
          paddingInline: cqm(90),
        }}
      >
        {ordered.map((m) => {
          const s = cardStyle[m.slug] ?? cardStyle.snbt;
          return (
            <div
              key={m.slug}
              onClick={() => router.push(`/soal/${m.slug}`)}
              className="flex max-w-none flex-1 cursor-pointer flex-col items-center rounded-[calc(1.4cqw*var(--ds,1))] transition hover:brightness-[0.97] md:max-w-[calc(16.3194cqw*var(--pm,1))] md:flex-none"
              style={{
                width: "100%",
                height: cqm(313),
                backgroundColor: s.bg,
                borderStyle: "solid",
                borderWidth: cqm(1),
                borderColor: withAlpha(s.border, 0.5),
                boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28, 20, 81, 0.1), 0 ${cqm(2)} ${cqm(6)} rgba(28, 20, 81, 0.06)`,
                paddingTop: cqm(128),
              }}
            >
              <span
                className="text-center font-bold leading-[1.2]"
                style={{ fontSize: cqm(36), color: s.text }}
              >
                {m.name}
              </span>
              <Link
                href={`/soal/${m.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="mt-[calc(6.1806cqw*var(--ds,1))] flex items-center justify-center rounded-full font-bold text-white transition-opacity hover:opacity-90"
                style={{
                  width: cqm(101),
                  height: cqm(30),
                  backgroundColor: s.btn,
                  fontSize: cqm(15),
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
