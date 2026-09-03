"use client";

import { useId, useRef, useState } from "react";
import { cq } from "@/lib/cq";

/** Pagination: 7 card max per page. Total pages = ceil(TEACHERS.length / PAGE_SIZE). */
const PAGE_SIZE = 7;

/** Data 13 guru — 3 asli Figma + 10 dummy. */
const TEACHERS = [
  {
    id: "pudjo",
    name: "Mr. Pudjo",
    subject: "Matematika  - SNBT - TKA",
    siswa: "(130 Siswa)",
    bg: "#e3aec2",
    shadow: "#d77d9f",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 1, 0.5] as number[], // 4 gold + 1 half
  },
  {
    id: "nisa",
    name: "Miss. Nisa",
    subject: "Kimia - TKA SMA",
    siswa: "(100 Siswa)",
    bg: "#c9cef4",
    shadow: "#939ded",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 0] as number[], // 4 gold + 1 gray
  },
  {
    id: "nur",
    name: "Miss. Nur",
    subject: "Fisika - SNBT - TKA",
    siswa: "(70 Siswa)",
    bg: "#cfedc0",
    shadow: "#aae38d",
    avatar: "/visual/bimble/guru-nur.png",
    stars: [1, 1, 1, 0, 0] as number[], // 3 gold + 2 gray
  },
  {
    id: "budi",
    name: "Mr. Budi",
    subject: "Matematika - TKA SMA",
    siswa: "(85 Siswa)",
    bg: "#e3aec2",
    shadow: "#d77d9f",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 1, 0] as number[],
  },
  {
    id: "sari",
    name: "Miss. Sari",
    subject: "Biologi - SNBT",
    siswa: "(95 Siswa)",
    bg: "#c9cef4",
    shadow: "#939ded",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 0.5] as number[],
  },
  {
    id: "agus",
    name: "Mr. Agus",
    subject: "Fisika - TKA SMA",
    siswa: "(60 Siswa)",
    bg: "#cfedc0",
    shadow: "#aae38d",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 0, 0] as number[],
  },
  {
    id: "dewi",
    name: "Miss. Dewi",
    subject: "B. Inggris - SNBT",
    siswa: "(110 Siswa)",
    bg: "#e3aec2",
    shadow: "#d77d9f",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 1] as number[],
  },
  {
    id: "rian",
    name: "Mr. Rian",
    subject: "Ekonomi - TKA SMA",
    siswa: "(75 Siswa)",
    bg: "#c9cef4",
    shadow: "#939ded",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 0.5, 0] as number[],
  },
  {
    id: "putri",
    name: "Miss. Putri",
    subject: "Kimia - SNBT",
    siswa: "(120 Siswa)",
    bg: "#cfedc0",
    shadow: "#aae38d",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 0.5] as number[],
  },
  {
    id: "dimas",
    name: "Mr. Dimas",
    subject: "B. Indonesia - TKA SMP",
    siswa: "(65 Siswa)",
    bg: "#e3aec2",
    shadow: "#d77d9f",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 0, 0] as number[],
  },
  {
    id: "ayu",
    name: "Miss. Ayu",
    subject: "Matematika - SNBT",
    siswa: "(90 Siswa)",
    bg: "#c9cef4",
    shadow: "#939ded",
    avatar: "/visual/bimble/guru-nur.png",
    stars: [1, 1, 1, 1, 0] as number[],
  },
  {
    id: "fajar",
    name: "Mr. Fajar",
    subject: "Sejarah - TKA SMA",
    siswa: "(55 Siswa)",
    bg: "#cfedc0",
    shadow: "#aae38d",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 0.5, 0, 0] as number[],
  },
  {
    id: "intan",
    name: "Miss. Intan",
    subject: "PKN - SNBT",
    siswa: "(80 Siswa)",
    bg: "#e3aec2",
    shadow: "#d77d9f",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 0] as number[],
  },
];

function Star({ value, gradId }: { value: number; gradId: string }) {
  return (
    <svg viewBox="0 0 18 17" style={{ width: cq(23.4), height: cq(22.1) }} aria-hidden>
      {value === 0.5 && (
        <defs>
          <linearGradient id={gradId}>
            <stop offset="50%" stopColor="#ffc500" />
            <stop offset="50%" stopColor="#e0e8f1" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M9 1.2l2.1 4.5 4.9.6-3.6 3.4.9 4.8L9 12.2l-4.3 2.3.9-4.8L2 6.3l4.9-.6L9 1.2z"
        fill={value === 1 ? "#ffc500" : value === 0.5 ? `url(#${gradId})` : "#e0e8f1"}
      />
    </svg>
  );
}

/** Satu kartu guru — 1:1 dari grup 'profile guru' (Rectangle 83 + image 27 + teks). */
function TeacherCard({
  t,
  active,
  onSelect,
}: {
  t: (typeof TEACHERS)[number];
  active?: boolean;
  onSelect?: (id: string) => void;
}) {
  const gradId = useId().replace(/:/g, "");
  // Fallback HP: sebagian browser mobile (mis. Firefox) gagal synthesize
  // click setelah tap → tangani langsung di pointerup. Track posisi awal utk
  // membedakan tap (buka popup) vs scroll (jangan buka). Karena onSelect
  // bersifat toggle, click sintetik yang menyusul di-suppress (anti dobel).
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  return (
    <button
      type="button"
      onClick={() => {
        if (suppressClick.current) {
          suppressClick.current = false;
          return;
        }
        onSelect?.(t.id);
      }}
      onPointerDown={(e) => {
        touchStart.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={(e) => {
        if (e.pointerType !== "touch") return;
        const s = touchStart.current;
        const dist = s
          ? Math.hypot(e.clientX - s.x, e.clientY - s.y)
          : Infinity;
        if (dist <= 10) {
          suppressClick.current = true;
          onSelect?.(t.id);
        }
        touchStart.current = null;
      }}
      onPointerCancel={() => {
        touchStart.current = null;
      }}
      className="flex items-center rounded-[5.56cqw] text-left transition hover:brightness-[0.92] active:brightness-[0.85]"
      style={{
        width: "100%",
        height: cq(209),
        minHeight: cq(209),
        backgroundColor: t.bg,
        borderRadius: cq(80),
        boxShadow: `0 ${cq(4)} ${cq(4)} ${t.shadow}`,
        paddingLeft: cq(55),
        paddingRight: cq(64),
        cursor: "pointer",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
        transition:
          "width 0.3s ease, transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
        outline: active ? `${cq(2)} solid rgba(28,20,81,0.45)` : "none",
        ...(active ? { transform: "scale(1.01)" } : {}),
      }}
    >
      {/* Avatar — crop 124x124; lingkaran foto di tengah, pojok = warna kartu (di-clip) */}
      <div
        className="shrink-0 overflow-hidden rounded-full"
        style={{ width: cq(124), height: cq(124) }}
      >
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Teks nama / mapel / rating */}
      <div className="flex min-w-0 flex-col justify-center" style={{ marginLeft: cq(72.8) }}>
        <span
          className="truncate font-bold"
          style={{ fontSize: cq(41.6), color: "#1c1451", lineHeight: 1.26 }}
        >
          {t.name}
        </span>
        <span
          className="mt-[0.455cqw] truncate font-bold"
          style={{ fontSize: cq(26), color: "#1c1451", lineHeight: 1.26 }}
        >
          {t.subject}
        </span>
        <div className="mt-[0.715cqw] flex items-center">
          <div className="flex items-center" style={{ gap: cq(5.2) }}>
            {t.stars.map((v, i) => (
              <Star key={i} value={v} gradId={`${gradId}-s${i}`} />
            ))}
          </div>
          <span
            className="font-bold"
            style={{ fontSize: cq(26), color: "#7e7e7e", marginLeft: cq(13) }}
          >
            {t.siswa}
          </span>
        </div>
      </div>
    </button>
  );
}

export type BimbleTeacher = (typeof TEACHERS)[number];

/** Nomor halaman: 1 … N, dengan "…" kalau halamannya banyak (mis. 1 … 10). */
function getPageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  for (let i = 0; i < sorted.length; i++) {
    out.push(sorted[i]);
    if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] > 1) out.push("…");
  }
  return out;
}

/** Daftar kartu guru + pagination — 7 max per page, panah kiri/kanan putih. */
export function GuruCards({
  activeId,
  onSelect,
  pageSize = PAGE_SIZE,
  onPageChange,
}: {
  activeId?: string | null;
  onSelect?: (id: string) => void;
  pageSize?: number;
  onPageChange?: () => void;
}) {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.max(1, Math.ceil(TEACHERS.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const visible = TEACHERS.slice(start, start + pageSize);
  const numbers = getPageNumbers(safePage, totalPages);

  /** Panah kanan → load 7 card lanjutan (replace), kiri → sebaliknya. */
  function goTo(p: number) {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === safePage) return;
    // Tanpa auto-scroll: scrollIntoView membuat pagination & halaman
    // "melompat" langsung. Biarkan posisi user tetap; daftar kartu berganti
    // dengan animasi ringan (`.bimble-page-enter`).
    setPage(next);
    onPageChange?.();
  }

  const navBtn: React.CSSProperties = {
    width: cq(84),
    height: cq(84),
    minWidth: 44,
    minHeight: 44,
    flexShrink: 0,
    borderRadius: 9999,
    backgroundColor: "#ffffff",
    border: `${cq(3)} solid #c9cef4`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    touchAction: "manipulation",
    position: "relative",
    zIndex: 10,
  };

  return (
    <div>
      <div ref={topRef} style={{ scrollMarginTop: cq(24) }} />
      <div
        key={`page-${safePage}`}
        className="bimble-page-enter flex flex-col"
        style={{
          gap: cq(34),
          // Jaga tinggi minimum = 7 kartu + 6 gap, supaya saat halaman 2
          // (6 kartu) pagination tidak melompat naik.
          minHeight: `calc(${cq(209)} * ${PAGE_SIZE} + ${cq(34)} * ${PAGE_SIZE - 1})`,
        }}
      >
        {visible.map((t) => (
          <TeacherCard
            key={t.id}
            t={t}
            active={activeId === t.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div
          className="flex items-center justify-center"
          style={{
            gap: `max(${cq(18)}, 16px)`,
            marginTop: cq(72),
            marginBottom: cq(8),
            position: "relative",
            zIndex: 10,
            flexWrap: "nowrap",
          }}
        >
          {/* panah kiri */}
          <button
            type="button"
            aria-label="Halaman sebelumnya"
            disabled={safePage === 1}
            onClick={() => goTo(safePage - 1)}
            onPointerUp={(e) => {
              // Fallback HP: sebagian browser mobile (mis. Firefox) gagal
              // synthesize click setelah tap → tangani langsung di pointerup.
              if (e.pointerType === "touch" && safePage > 1) goTo(safePage - 1);
            }}
            style={{
              ...navBtn,
              opacity: safePage === 1 ? 0.4 : 1,
              cursor: safePage === 1 ? "not-allowed" : "pointer",
            }}
            className="bimble-nav-btn"
          >
            <svg
              viewBox="0 0 16 16"
              style={{ width: cq(45), height: cq(45) }}
              fill="none"
              stroke="#1c1451"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M10 3L5 8l5 5" />
            </svg>
          </button>

          {/* nomor halaman dalam 1 div putih */}
          <div
            className="flex items-center"
            style={{
              gap: `max(${cq(16)}, 12px)`,
              flexShrink: 0,
              backgroundColor: "#ffffff",
              border: `${cq(3)} solid #c9cef4`,
              borderRadius: 9999,
              paddingInline: `max(${cq(28)}, 14px)`,
              height: cq(84),
              minHeight: 44,
            }}
          >
            {numbers.map((n, i) =>
              n === "…" ? (
                <span
                  key={`ellipsis-${i}`}
                  className="font-bold"
                  style={{ fontSize: cq(36), color: "#7e7e7e" }}
                >
                  …
                </span>
              ) : (
                <button
                  key={n}
                  type="button"
                  onClick={() => goTo(n)}
                  onPointerUp={(e) => {
                    if (e.pointerType === "touch") goTo(n);
                  }}
                  aria-current={n === safePage ? "page" : undefined}
                  aria-label={`Halaman ${n}`}
                  style={{
                    minWidth: `max(${cq(64)}, 40px)`,
                    minHeight: `max(${cq(64)}, 40px)`,
                    height: cq(64),
                    flexShrink: 0,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingInline: cq(8),
                    color: n === safePage ? "#ffffff" : "#1c1451",
                    backgroundColor: n === safePage ? "#1c1451" : undefined,
                    border: "none",
                    fontSize: cq(54),
                    fontWeight: 700,
                    lineHeight: 1,
                    cursor: "pointer",
                    touchAction: "manipulation",
                  }}
                  className="bimble-page-btn"
                >
                  {n}
                </button>
              ),
            )}
          </div>

          {/* panah kanan */}
          <button
            type="button"
            aria-label="Halaman berikutnya"
            disabled={safePage === totalPages}
            onClick={() => goTo(safePage + 1)}
            onPointerUp={(e) => {
              if (e.pointerType === "touch" && safePage < totalPages)
                goTo(safePage + 1);
            }}
            style={{
              ...navBtn,
              opacity: safePage === totalPages ? 0.4 : 1,
              cursor: safePage === totalPages ? "not-allowed" : "pointer",
            }}
            className="bimble-nav-btn"
          >
            <svg
              viewBox="0 0 16 16"
              style={{ width: cq(45), height: cq(45) }}
              fill="none"
              stroke="#1c1451"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

/** Area putih atas: heading, pill motivasi, search, dropdown, maskot. */
export function BimbleSection() {
  return (
    <section className="w-full">
      {/* Heading + subtitle (kiri) & pill motivasi (kanan, sejajar subtitle) */}
      <h1
        className="font-bold"
        style={{ fontSize: cq(64), color: "#1c1451", lineHeight: 1.26 }}
      >
        Bimbel / Guru
      </h1>
      <div
        className="flex items-center justify-between"
        style={{ marginTop: cq(34) }}
      >
        <p
          className="font-bold"
          style={{ fontSize: cq(32), color: "#1c1451", lineHeight: 1.26 }}
        >
          Temukan guru yang tepat untukmu
        </p>
        {/* Pill hijau motivasi (Group 15) */}
        <div
          className="flex shrink-0 items-center"
          style={{
            backgroundColor: "#e0f0cf",
            border: `${cq(1.3)} solid #688d37`,
            borderRadius: cq(19.5),
            height: cq(50),
            paddingInline: cq(23.4),
          }}
        >
          <span
            className="whitespace-nowrap font-normal"
            style={{ fontSize: cq(20.8), color: "rgba(28, 20, 81, 0.8)", lineHeight: 1.26 }}
          >
            Ayo tingkatkan dan jangan mudah menyerah!
          </span>
        </div>
      </div>

      {/* Search + dropdown (kiri) & maskot (kanan) */}
      <div
        className="flex items-start justify-between"
        style={{ marginTop: cq(47) }}
      >
        <div className="flex flex-col" style={{ width: cq(724) }}>
          {/* Search box */}
          <div
            className="flex items-center rounded-full bg-white"
            style={{
              width: "100%",
              height: cq(82),
              border: `${cq(2)} solid #cfb1ed`,
              borderRadius: cq(50),
              paddingInline: cq(34),
            }}
          >
            <svg
              viewBox="0 0 32 32"
              style={{ width: cq(32), height: cq(32), flexShrink: 0 }}
              fill="none"
              stroke="#454545"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
            >
              <circle cx="14" cy="14" r="9" />
              <path d="M21 21l6 6" />
            </svg>
            <span
              className="ml-[1.2cqw] truncate font-medium"
              style={{ fontSize: cq(32), color: "#454545", lineHeight: 1.26 }}
            >
              Cari Guru / Mata Pelajaran
            </span>
          </div>

          {/* Dropdown Semua Mapel */}
          <div
            className="mt-[2.4cqw] flex items-center justify-between rounded-[1.11cqw] bg-white"
            style={{
              width: cq(317),
              height: cq(82),
              border: `${cq(2)} solid #c9cef4`,
              borderRadius: cq(16),
              paddingInline: cq(28),
            }}
          >
            <span
              className="font-bold"
              style={{ fontSize: cq(32), color: "#1c1451", lineHeight: 1.26 }}
            >
              Semua Mapel
            </span>
            <svg
              viewBox="0 0 20 10"
              style={{ width: cq(20), height: cq(10), flexShrink: 0 }}
              fill="none"
              stroke="#000"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M1 1l9 8 9-8" />
            </svg>
          </div>
        </div>

        {/* Maskot (Rectangle Maskot 1) — PNG berlatar putih, menyatu di area putih */}
        <img
          src="/visual/bimble/maskot-bimble.png"
          alt="Maskot SIAPIN"
          style={{ width: cq(203), height: cq(207), objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
