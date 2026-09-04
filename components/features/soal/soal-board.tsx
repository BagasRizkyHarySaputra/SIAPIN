"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cqm } from "@/lib/cq";
import type { Mode } from "@/lib/types";
import { SoalPopup } from "./soal-popup";

/** Palet pill SNBT 1:1 dari Figma (frame 299-1225). */
const SNBT_PILLS: Record<string, { text: string; bg: string }> = {
  pm: { text: "#7046aa", bg: "#ebcfff" },
  ppu: { text: "#16a9dd", bg: "#cbecff" },
  pbm: { text: "#49b482", bg: "#e9ffdb" },
  pk: { text: "#e3983d", bg: "#ffdba7" },
  lbi: { text: "#f7d416", bg: "#fff6bf" },
  lbe: { text: "#fe8b4c", bg: "#ffd4c4" },
};

/** Accent -> pastel (campur putih 78%) untuk pill mode selain SNBT. */
function pastel(hex: string, t = 0.78): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const m = (v: number) => Math.round(v + (255 - v) * t);
  return `rgb(${m(r)}, ${m(g)}, ${m(b)})`;
}

/** hex (#rrggbb) -> rgba string dengan alpha tertentu. */
function withAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Teks yang terbaca di atas bg aksen (putih, kecuali aksen terang → navy). */
function inkOn(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return L > 0.6 ? "#1c1451" : "#ffffff";
}

function pillStyle(modeSlug: string, accent: string) {
  if (modeSlug === "snbt") {
    const p = SNBT_PILLS[accent];
    if (p) return p;
  }
  return { text: accent, bg: pastel(accent) };
}

/** 8 paket drill dummy — skor 0 (belum dikerjakan). */
const PACKETS = Array.from({ length: 8 }, (_, i) => ({
  no: i + 1,
  skor: 0,
}));

function RetryIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: cqm(20), height: cqm(20) }}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

export function SoalBoard({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [packet, setPacket] = useState(1);

  // Tema kartu paket mengikuti pill mapel yang aktif (semua mode).
  const activeSub = mode.subtests[selected] ?? mode.subtests[0];
  const theme = pillStyle(
    mode.slug,
    mode.slug === "snbt" ? activeSub.slug : activeSub.color,
  );
  const accent = theme.text;

  function openPacket(no: number) {
    setPacket(no);
    setPopupOpen(true);
  }

  return (
    <div className="w-full">
      {/* Judul mode — SMP/SMA/SNBT mengikuti card dashboard yang ditekan */}
      <h1
        className="font-bold"
        style={{ fontSize: cqm(36), color: "#1c1451", lineHeight: 1.25, margin: 0 }}
      >
        {mode.name}
      </h1>

      {/* Pill subtes */}
      <div
        className="flex flex-wrap"
        style={{ marginTop: cqm(33), columnGap: cqm(47), rowGap: cqm(24) }}
      >
        {mode.subtests.map((s, i) => {
          const p = pillStyle(
            mode.slug,
            mode.slug === "snbt" ? s.slug : s.color,
          );
          const isActive = i === selected;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setSelected(i)}
              className="shrink-0 cursor-pointer transition hover:brightness-[0.96]"
              style={{
                width: cqm(143),
                height: cqm(42),
                borderRadius: cqm(10),
                backgroundColor: p.bg,
                color: p.text,
                fontSize: cqm(24),
                fontWeight: 700,
                border: "none",
                fontFamily: "inherit",
                outline: isActive ? `${cqm(2)} solid ${p.text}` : "none",
                outlineOffset: cqm(2),
              }}
            >
              {s.short}
            </button>
          );
        })}
      </div>

      {/* Grid paket soal — 4 kolom desktop, maks 2 kolom di HP */}
      <div
        className="grid grid-cols-2 justify-items-center md:grid-cols-4"
        style={{ marginTop: cqm(49), columnGap: cqm(28), rowGap: cqm(58) }}
      >
        {PACKETS.map((c) => (
          <div
            key={c.no}
            onClick={() => openPacket(c.no)}
            className="cursor-pointer transition hover:brightness-[0.98]"
            style={{
              position: "relative",
              width: cqm(302),
              height: cqm(212),
              borderRadius: cqm(20),
              backgroundColor: theme.bg,
              border: `${cqm(2)} solid ${accent}`,
              boxShadow: `0 ${cqm(4)} ${cqm(12)} rgba(28, 20, 81, 0.08)`,
            }}
          >
            {/* nomor paket */}
            <span
              className="font-bold"
              style={{
                position: "absolute",
                right: cqm(15),
                top: cqm(8),
                fontSize: cqm(96),
                lineHeight: 1,
                color: accent,
              }}
            >
              {c.no}
            </span>

            {/* skor */}
            <span
              className="font-bold"
              style={{
                position: "absolute",
                left: cqm(49),
                top: cqm(130),
                fontSize: cqm(32),
                lineHeight: 1.1,
                color: accent,
              }}
            >
              {c.skor}
            </span>
            <span
              className="font-bold"
              style={{
                position: "absolute",
                left: cqm(32),
                top: cqm(169),
                fontSize: cqm(24),
                lineHeight: 1.1,
                color: withAlpha(accent, 0.65),
              }}
            >
              Skor
            </span>

            {/* tombol Mulai */}
            <button
              type="button"
              onClick={() => openPacket(c.no)}
              className="cursor-pointer transition hover:brightness-[0.96]"
              style={{
                position: "absolute",
                left: cqm(167),
                top: cqm(161),
                width: cqm(84),
                height: cqm(30),
                borderRadius: cqm(20),
                backgroundColor: accent,
                border: `${cqm(2)} solid ${accent}`,
                color: inkOn(accent),
                fontSize: cqm(16),
                fontWeight: 700,
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Mulai
            </button>

            {/* ikon ulangi */}
            <button
              type="button"
              aria-label="Ulangi"
              className="cursor-pointer transition hover:brightness-[0.96]"
              style={{
                position: "absolute",
                left: cqm(258),
                top: cqm(166),
                background: "none",
                border: "none",
                padding: 0,
                display: "flex",
              }}
            >
              <RetryIcon color={accent} />
            </button>
          </div>
        ))}
      </div>

      {/* Popup kesiapan — judul mengikuti pill subtes yang aktif */}
      {popupOpen && (
        <SoalPopup
          title={mode.subtests[selected]?.name ?? mode.name}
          onClose={() => setPopupOpen(false)}
          onPick={(tipe) =>
            router.push(`/soal/${mode.slug}/pengerjaan/${activeSub.slug}/${packet}/${tipe}`)
          }
        />
      )}
    </div>
  );
}
