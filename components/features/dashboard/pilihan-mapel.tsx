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

export function PilihanMapel() {
  const router = useRouter();

  return (
    <section
      className="mapel-scope relative flex w-full items-center justify-center rounded-[calc(4.86cqw*var(--ds,1))]"
      style={{
        paddingBlock: cqm(72),
      }}
    >
      {/* outer container — selalu 1 baris 3 kartu (HP + desktop) */}
      <div
        className="flex w-full flex-row items-center justify-between rounded-[calc(4.86cqw*var(--ds,1))] px-[calc(1.5cqw*var(--ds,1))] py-[calc(4.8cqw*var(--ds,1))] md:px-[calc(3.3cqw*var(--ds,1))]"
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
              onClick={() => router.push(`/soal/${m.slug}`)}
              className="flex max-w-none flex-1 cursor-pointer flex-col items-center justify-between rounded-[calc(1.4cqw*var(--ds,1))] transition hover:brightness-[0.97] md:max-w-[calc(18.0556cqw*var(--pm,1))] md:flex-none"
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
                onClick={(e) => e.stopPropagation()}
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
