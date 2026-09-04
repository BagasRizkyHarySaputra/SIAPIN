"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cqm } from "@/lib/cq";

/** Pagination: 7 card max per page. Total pages = ceil(TEACHERS.length / PAGE_SIZE). */
const PAGE_SIZE = 7;

/** Data 13 guru — 3 asli Figma + 10 dummy. (export utk fallback di BimbleClient) */
export const TEACHERS = [
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
    <svg viewBox="0 0 18 17" style={{ width: cqm(23.4), height: cqm(22.1) }} aria-hidden>
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
        height: cqm(209),
        minHeight: cqm(209),
        backgroundColor: t.bg,
        borderRadius: cqm(80),
        boxShadow: `0 ${cqm(4)} ${cqm(4)} ${t.shadow}`,
        paddingLeft: cqm(55),
        paddingRight: cqm(64),
        cursor: "pointer",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
        transition:
          "width 0.3s ease, transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
        outline: active ? `${cqm(2)} solid rgba(28,20,81,0.45)` : "none",
        ...(active ? { transform: "scale(1.01)" } : {}),
      }}
    >
      {/* Avatar — crop 124x124; lingkaran foto di tengah, pojok = warna kartu (di-clip) */}
      <div
        className="shrink-0 overflow-hidden rounded-full"
        style={{ width: cqm(124), height: cqm(124) }}
      >
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Teks nama / mapel / rating */}
      <div className="flex min-w-0 flex-col justify-center" style={{ marginLeft: cqm(72.8) }}>
        <span
          className="truncate font-bold"
          style={{ fontSize: cqm(41.6), color: "#1c1451", lineHeight: 1.26 }}
        >
          {t.name}
        </span>
        <span
          className="mt-[0.455cqw] truncate font-bold"
          style={{ fontSize: cqm(26), color: "#1c1451", lineHeight: 1.26 }}
        >
          {t.subject}
        </span>
        <div className="mt-[0.715cqw] flex items-center">
          <div className="flex items-center" style={{ gap: cqm(5.2) }}>
            {t.stars.map((v, i) => (
              <Star key={i} value={v} gradId={`${gradId}-s${i}`} />
            ))}
          </div>
          <span
            className="font-bold"
            style={{ fontSize: cqm(26), color: "#7e7e7e", marginLeft: cqm(13) }}
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
  panelNode,
  teachers,
  closingId,
  emptyState,
}: {
  activeId?: string | null;
  onSelect?: (id: string) => void;
  pageSize?: number;
  onPageChange?: () => void;
  /** Panel detail guru utk HP — disisipkan tepat setelah kartu aktif
      (menimpa kartu di bawahnya). Desktop memakai `.bimble-panel` di kanan. */
  panelNode?: React.ReactNode;
  /** Guru dari database (server component). Kalau kosong, fallback ke TEACHERS statis. */
  teachers?: BimbleTeacher[];
  /** id kartu yang panelnya sedang animasi keluar (tetap render sementara). */
  closingId?: string | null;
  /** Node "tidak ada hasil" — dirender saat `teachers` ada tapi kosong & prop ini diisi.
      Dipakai BimbleClient ketika filter search/mapel tidak mencocokkan guru apa pun. */
  emptyState?: React.ReactNode;
}) {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);
  // Kalau teachers TIDAK di-set sama sekali (undefined) → fallback statis.
  // Kalau teachers di-set (termasuk []) dan ada emptyState → tampilkan emptyState.
  const useFallback = teachers === undefined;
  const list = useFallback ? TEACHERS : teachers;
  const showEmpty = !useFallback && list.length === 0 && !!emptyState;
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const visible = list.slice(start, start + pageSize);
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
    width: cqm(84),
    height: cqm(84),
    minWidth: 44,
    minHeight: 44,
    flexShrink: 0,
    borderRadius: 9999,
    backgroundColor: "#ffffff",
    border: `${cqm(3)} solid #c9cef4`,
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
      <div ref={topRef} style={{ scrollMarginTop: cqm(24) }} />
      <div
        key={`page-${safePage}`}
        className="bimble-page-enter flex flex-col"
        style={{
          gap: cqm(34),
          // Jaga tinggi minimum = 7 kartu + 6 gap, supaya saat halaman 2
          // (6 kartu) pagination tidak melompat naik.
          minHeight: `calc(${cqm(209)} * ${PAGE_SIZE} + ${cqm(34)} * ${PAGE_SIZE - 1})`,
        }}
      >
        {showEmpty && emptyState ? (
          emptyState
        ) : (
          visible.map((t) => {
            const isActive = activeId === t.id;
            return (
              <div
                key={t.id}
                className="relative"
                style={{ zIndex: isActive ? 2 : 1 }}
              >
                <TeacherCard
                  t={t}
                  active={isActive}
                  onSelect={onSelect}
                />
                {/* HP: panel detail ikut flow di bawah kartu aktif,
                    mendorong kartu + pagination ke bawah (lihat .bimble-mobile-panel). */}
                {((isActive || closingId === t.id) && panelNode) && (
                  <div
                    className={`bimble-mobile-panel${closingId === t.id ? " bimble-mobile-closing" : ""}`}
                  >
                    <div className="bimble-mobile-body">{panelNode}</div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {totalPages > 1 && (
        <div
          className="flex items-center justify-center"
          style={{
            gap: `max(${cqm(18)}, 16px)`,
            marginTop: cqm(72),
            marginBottom: cqm(8),
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
              style={{ width: cqm(45), height: cqm(45) }}
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
              gap: `max(${cqm(16)}, 12px)`,
              flexShrink: 0,
              backgroundColor: "#ffffff",
              border: `${cqm(3)} solid #c9cef4`,
              borderRadius: 9999,
              paddingInline: `max(${cqm(28)}, 14px)`,
              height: cqm(84),
              minHeight: 44,
            }}
          >
            {numbers.map((n, i) =>
              n === "…" ? (
                <span
                  key={`ellipsis-${i}`}
                  className="font-bold"
                  style={{ fontSize: cqm(36), color: "#7e7e7e" }}
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
                    minWidth: `max(${cqm(64)}, 40px)`,
                    minHeight: `max(${cqm(64)}, 40px)`,
                    height: cqm(64),
                    flexShrink: 0,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingInline: cqm(8),
                    color: n === safePage ? "#ffffff" : "#1c1451",
                    backgroundColor: n === safePage ? "#1c1451" : undefined,
                    border: "none",
                    fontSize: cqm(54),
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
              style={{ width: cqm(45), height: cqm(45) }}
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

/** Area putih atas: heading, pill motivasi, search, dropdown, maskot.
 *  `query`/`subject` dikontrol dari BimbleClient (filter daftar guru). */
export function BimbleSection({
  query,
  onQueryChange,
  subject,
  onSubjectChange,
  subjects,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  subject: string;
  onSubjectChange: (v: string) => void;
  /** Daftar mapel unik (segmen pertama dari subject guru) utk dropdown — "Semua Mapel" otomatis pertama. */
  subjects: string[];
}) {
  const [open, setOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown saat klik di luar area dropdown.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="w-full">
      {/* Heading + subtitle (kiri) & pill motivasi (kanan, sejajar subtitle) */}
      <h1
        className="font-bold"
        style={{ fontSize: cqm(64), color: "#1c1451", lineHeight: 1.26 }}
      >
        Bimbel / Guru
      </h1>
      <div
        className="flex items-center justify-between"
        style={{ marginTop: cqm(34) }}
      >
        <p
          className="font-bold"
          style={{ fontSize: cqm(32), color: "#1c1451", lineHeight: 1.26 }}
        >
          Temukan guru yang tepat untukmu
        </p>
        {/* Pill hijau motivasi (Group 15) */}
        <div
          className="bimble-pill-scope flex shrink-0 items-center"
          style={{
            backgroundColor: "#e0f0cf",
            border: `${cqm(1.3)} solid #688d37`,
            borderRadius: cqm(19.5),
            height: cqm(50),
            paddingInline: cqm(23.4),
          }}
        >
          <span
            className="whitespace-nowrap font-normal"
            style={{ fontSize: cqm(20.8), color: "rgba(28, 20, 81, 0.8)", lineHeight: 1.26 }}
          >
            Ayo tingkatkan dan jangan mudah menyerah!
          </span>
        </div>
      </div>

      {/* Search + dropdown (kiri) & maskot (kanan) */}
      <div
        className="flex items-start justify-between"
        style={{ marginTop: cqm(47) }}
      >
        <div className="flex flex-col" style={{ width: cqm(724) }}>
          {/* Search box — input teks sungguhan, style identik dengan placeholder */}
          <div
            className="flex items-center rounded-full bg-white"
            style={{
              width: "100%",
              height: cqm(82),
              border: `${cqm(2)} solid #cfb1ed`,
              borderRadius: cqm(50),
              paddingInline: cqm(34),
            }}
          >
            <svg
              viewBox="0 0 32 32"
              style={{ width: cqm(32), height: cqm(32), flexShrink: 0 }}
              fill="none"
              stroke="#454545"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
            >
              <circle cx="14" cy="14" r="9" />
              <path d="M21 21l6 6" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Cari Guru / Mata Pelajaran"
              aria-label="Cari guru atau mata pelajaran"
              className="ml-[1.2cqw] w-full truncate bg-transparent font-medium outline-none"
              style={{
                fontSize: cqm(32),
                color: "#454545",
                lineHeight: 1.26,
                border: "none",
                padding: 0,
              }}
            />
          </div>

          {/* Dropdown Semua Mapel — tombol interaktif (jarak 2.4cqw sama persis dgn asli) */}
          <div
            className="relative mt-[2.4cqw]"
            style={{ width: cqm(317) }}
            ref={ddRef}
          >
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex items-center justify-between rounded-[1.11cqw] bg-white"
              style={{
                width: "100%",
                height: cqm(82),
                border: `${cqm(2)} solid #c9cef4`,
                borderRadius: cqm(16),
                paddingInline: cqm(28),
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              <span
                className="font-bold"
                style={{ fontSize: cqm(32), color: "#1c1451", lineHeight: 1.26 }}
              >
                {subject}
              </span>
              <svg
                viewBox="0 0 20 10"
                style={{
                  width: cqm(20),
                  height: cqm(10),
                  flexShrink: 0,
                  transition: "transform 0.2s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                stroke="#000"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M1 1l9 8 9-8" />
              </svg>
            </button>

            {/* Menu pilihan mapel */}
            {open && (
              <div
                role="listbox"
                aria-label="Pilih mapel"
                className="absolute left-0 top-full z-50 overflow-hidden bg-white"
                style={{
                  width: "100%",
                  marginTop: cqm(10),
                  border: `${cqm(2)} solid #c9cef4`,
                  borderRadius: cqm(16),
                  boxShadow: `0 ${cqm(12)} ${cqm(28)} rgba(28,20,81,0.18)`,
                }}
              >
                {["Semua Mapel", ...subjects].map((s) => {
                  const active = s === subject;
                  return (
                    <button
                      key={s}
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => {
                        onSubjectChange(s);
                        setOpen(false);
                      }}
                      className="block w-full text-left font-medium"
                      style={{
                        fontSize: cqm(26),
                        color: active ? "#ffffff" : "#1c1451",
                        backgroundColor: active ? "#2a235c" : "#ffffff",
                        paddingBlock: cqm(16),
                        paddingInline: cqm(24),
                        cursor: "pointer",
                        fontFamily: "inherit",
                        border: "none",
                      }}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Maskot (Rectangle Maskot 1) — PNG berlatar putih, menyatu di area putih */}
        <img
          src="/visual/bimble/maskot-bimble.png"
          alt="Maskot SIAPIN"
          style={{ width: cqm(203), height: cqm(207), objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
