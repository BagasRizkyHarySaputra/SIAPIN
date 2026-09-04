"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { cqm } from "@/lib/cq";
import { modes } from "@/lib/data/modes";
import { useIsDesktop } from "@/lib/use-media-query";

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
  const isDesktop = useIsDesktop();

  const ordered = figmaOrder
    .map((slug) => modes.find((m) => m.slug === slug))
    .filter(Boolean) as typeof modes;

  // DESKTOP (≥768px): gap antar kartu dipangkas setengah (71 = 142/2) dan
  // border menyusut mengikuti kartu: lebar dihitung eksplisit =
  // 3×lebar kartu + 2×gap + 2×padding + 2×border, supaya pas & tidak ada
  // ruang kosong besar. (fit-content tidak dipakai: di sini ia mengabaikan
  // gap & padding sehingga kartu overflow keluar border.)
  // MOBILE (<768px): gap 40 + padding 24 — kartu ~81px, judul muat 1 baris.
  const gap = isDesktop ? cqm(71) : cqm(16);
  const paddingInline = isDesktop ? cqm(71) : cqm(12);
  const cardWidth = isDesktop ? cqm(235) : undefined;
  // border 2px kiri+kanan ikut dijumlah agar border pas membungkus (box-sizing: border-box)
  const outerWidth = isDesktop
    ? `calc((${cqm(235)} * 3) + (${gap} * 2) + (${paddingInline} * 2) + 4px)`
    : "100%";

  return (
    <section className="mapel-scope relative flex w-full items-center justify-center">
      <div
        className="flex flex-row items-center rounded-[calc(4.86cqw*var(--ds,1))]"
        style={{
          borderStyle: "solid",
          borderWidth: cqm(2),
          borderColor: "rgba(108, 99, 99, 0.5)",
          gap,
          paddingBlock: cqm(16),
          paddingInline,
          width: outerWidth,
          justifyContent: isDesktop ? "center" : "space-between",
        }}
      >
        {ordered.map((m) => {
          const s = cardStyle[m.slug] ?? cardStyle.snbt;
          return (
            <div
              key={m.slug}
              onClick={() => router.push(`/soal/${m.slug}`)}
              className="flex max-w-none cursor-pointer flex-col items-center rounded-[calc(1.4cqw*var(--ds,1))] transition hover:brightness-[0.97]"
              style={{
                width: "100%",
                maxWidth: cardWidth,
                flex: isDesktop ? "0 0 auto" : "1 1 0%",
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
