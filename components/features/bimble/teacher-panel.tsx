"use client";

import { cq } from "@/lib/cq";

/**
 * Panel profil guru ("PROFILE GURU OPEN", frame 333-1055).
 *
 * Panel didesain Figma pada kanvas 520px (Rectangle 84 = 520×815). Semua ukuran
 * di dalam panel memakai container-query unit berbasis 520 (helper `pq`), dengan
 * `container-type: inline-size` pada root panel. Hasilnya:
 *  - Desktop: parent selebar cq(520) → isi panel 1:1 dengan Figma.
 *  - Mobile : parent selebar 100% → isi panel ikut membesar proporsional,
 *             tetap terbaca (tidak mengecil seperti cqw berbasis viewport).
 */

const PANEL_W = 520;

/** Figma px (dalam kanvas panel 520) → % dari lebar panel (container query). */
function pq(px: number): string {
  return `${((px / PANEL_W) * 100).toFixed(4)}cqw`;
}

/** Tipe guru — selaras dengan TEACHERS di bimble-section. */
export type Teacher = {
  id: string;
  name: string;
  shortName: string;
  subject: string;
  siswa: string;
  bg: string;
  avatar: string;
  stars: number[];
  /** field khusus panel */
  role: string;
  rating: string;
  mengajar: string;
  pengalaman: string;
  tentang: string;
  reviews: { bg: string; avatar: string; user: string; text: string }[];
  headerImg?: string; // foto header utuh (Pudjo); undefined → komposisi HTML
};

export const TEACHER_PANEL_DATA: Record<string, Teacher> = {
  pudjo: {
    id: "pudjo",
    name: "Mr. Pudjo",
    shortName: "Mr Pudjo",
    subject: "Matematika - SNBT - TKA",
    siswa: "(130 Siswa)",
    bg: "#e3aec2",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 1, 0.5],
    role: "Guru Matematika",
    rating: "4.9",
    mengajar: "Mengajar : Matematika - SNBT - TKA",
    pengalaman: "Pengalaman : 5 Tahun",
    tentang:
      "Saya pengajar matematika dengan pendalaman konsep dan latihan soal terdahulu. Soal SNBT & TKA",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/review-amel.png",
        user: "@amelcantik",
        text: "“Mr. Pudjo mengajarnya sangat asik...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/review-bagas.png",
        user: "@bagasgtg",
        text: "“Mr. Pudjo biasa mengajar dgn metode...”",
      },
    ],
    headerImg: "/visual/bimble/guru-pudjo-header.png",
  },
  nisa: {
    id: "nisa",
    name: "Miss. Nisa",
    shortName: "Miss Nisa",
    subject: "Kimia - TKA SMA",
    siswa: "(100 Siswa)",
    bg: "#c9cef4",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 0],
    role: "Guru Kimia",
    rating: "4.0",
    mengajar: "Mengajar : Kimia - TKA SMA",
    pengalaman: "Pengalaman : 3 Tahun",
    tentang:
      "Saya mengajar kimia dengan pendekatan konsep yang mudah dipahami, dilengkapi latihan soal bertingkat. Soal TKA SMA",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@citraa",
        text: "“Miss Nisa sabar banget jelasin...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@rizkyy",
        text: "“Penjelasannya detail & mudah...”",
      },
    ],
  },
  nur: {
    id: "nur",
    name: "Miss. Nur",
    shortName: "Miss Nur",
    subject: "Fisika - SNBT - TKA",
    siswa: "(70 Siswa)",
    bg: "#cfedc0",
    avatar: "/visual/bimble/guru-nur.png",
    stars: [1, 1, 1, 0, 0],
    role: "Guru Fisika",
    rating: "3.0",
    mengajar: "Mengajar : Fisika - SNBT - TKA",
    pengalaman: "Pengalaman : 2 Tahun",
    tentang:
      "Saya mengajar fisika dengan banyak visualisasi dan contoh soal aplikasi sehari-hari. Soal SNBT & TKA",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nur.png",
        user: "@dinda",
        text: "“Belajar fisika jadi nggak...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nur.png",
        user: "@farhan",
        text: "“Miss Nur asik & jelas banget...”",
      },
    ],
  },
};

/** Header panel — Mr. Pudjo pakai foto utuh (1:1 Figma); guru lain komposisi HTML. */
function PanelHeader({ t }: { t: Teacher }) {
  if (t.headerImg) {
    return (
      <div
        className="overflow-hidden"
        style={{ width: "100%", height: pq(298), borderRadius: pq(16) }}
      >
        <img
          src={t.headerImg}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }
  return (
    <div
      className="relative flex items-center overflow-hidden"
      style={{
        width: "100%",
        height: pq(298),
        borderRadius: pq(16),
        backgroundColor: t.bg,
      }}
    >
      {/* avatar besar */}
      <div
        className="shrink-0 overflow-hidden rounded-full"
        style={{
          width: pq(170),
          height: pq(170),
          marginLeft: pq(46),
          border: `${pq(3)} solid rgba(255,255,255,0.85)`,
          boxShadow: `0 ${pq(4)} ${pq(12)} rgba(0,0,0,0.12)`,
        }}
      >
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* teks nama / role / rating (konsisten dgn overlay foto Pudjo) */}
      <div className="flex min-w-0 flex-col" style={{ marginLeft: pq(36) }}>
        <span
          className="truncate font-bold"
          style={{ fontSize: pq(40), color: "#1c1451", lineHeight: 1.15 }}
        >
          {t.shortName}
        </span>
        <span
          className="truncate font-semibold"
          style={{ fontSize: pq(22), color: "#1c1451", lineHeight: 1.3, marginTop: pq(6) }}
        >
          {t.role}
        </span>
        <div className="flex items-center" style={{ marginTop: pq(12) }}>
          <svg viewBox="0 0 18 17" style={{ width: pq(20), height: pq(19) }} aria-hidden>
            <path
              d="M9 1.2l2.1 4.5 4.9.6-3.6 3.4.9 4.8L9 12.2l-4.3 2.3.9-4.8L2 6.3l4.9-.6L9 1.2z"
              fill="#ffc500"
            />
          </svg>
          <span
            className="font-bold"
            style={{ fontSize: pq(24), color: "#1c1451", marginLeft: pq(8) }}
          >
            {t.rating}
          </span>
          <span
            className="truncate font-semibold"
            style={{ fontSize: pq(18), color: "rgba(28,20,81,0.7)", marginLeft: pq(10) }}
          >
            {t.siswa}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Panel detail guru — 1:1 grup 'PROFILE GURU OPEN' (Rectangle 84, 520×815).
 * Root panel = container query inline-size; isi memakai pq() berbasis 520.
 */
export function TeacherPanel({ t, onClose }: { t: Teacher; onClose?: () => void }) {
  return (
    <div
      className="relative w-full"
      style={{
        containerType: "inline-size",
        backgroundColor: "#fffefe",
        borderRadius: pq(16),
        boxShadow: `0 ${pq(4)} ${pq(4)} rgba(0,0,0,0.15)`,
        overflow: "hidden",
      }}
    >
      {/* foto header */}
      <PanelHeader t={t} />

      {/* konten putih */}
      <div style={{ padding: `${pq(25)} ${pq(46)} ${pq(32)}` }}>
        {/* Profile Mengajar */}
        <h3
          className="font-bold"
          style={{ fontSize: pq(32), color: "#1c1451", lineHeight: 1.26 }}
        >
          Profile Mengajar
        </h3>
        <p
          className="font-semibold"
          style={{ fontSize: pq(16), color: "#1c1451", lineHeight: 1.26, marginTop: pq(14) }}
        >
          {t.mengajar}
        </p>
        <p
          className="font-semibold"
          style={{ fontSize: pq(16), color: "#1c1451", lineHeight: 1.26, marginTop: pq(7) }}
        >
          {t.pengalaman}
        </p>

        {/* Tentang Guru */}
        <h3
          className="font-bold"
          style={{ fontSize: pq(32), color: "#1c1451", lineHeight: 1.26, marginTop: pq(28) }}
        >
          Tentang Guru
        </h3>
        <p
          className="font-semibold"
          style={{
            fontSize: pq(16),
            color: "#1c1451",
            lineHeight: 1.26,
            marginTop: pq(14),
            maxWidth: pq(371),
          }}
        >
          {t.tentang}
        </p>

        {/* Review Siswa */}
        <h3
          className="font-bold"
          style={{ fontSize: pq(32), color: "#1c1451", lineHeight: 1.26, marginTop: pq(28) }}
        >
          Review Siswa
        </h3>
        <div className="flex" style={{ gap: pq(40), marginTop: pq(20) }}>
          {t.reviews.map((r, i) => (
            <div
              key={i}
              className="relative flex items-center"
              style={{
                width: pq(194),
                height: pq(53),
                backgroundColor: r.bg,
                borderRadius: pq(7),
                boxShadow: `0 ${pq(4)} ${pq(4)} rgba(0,0,0,0.12)`,
                paddingLeft: pq(12),
              }}
            >
              <img
                src={r.avatar}
                alt={r.user}
                style={{
                  width: pq(26),
                  height: pq(26),
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="flex min-w-0 flex-col" style={{ marginLeft: pq(9) }}>
                <span
                  className="truncate font-bold"
                  style={{ fontSize: pq(9), color: "#1c1451", lineHeight: 1.26 }}
                >
                  {r.user}
                </span>
                <span
                  className="truncate font-normal"
                  style={{ fontSize: pq(7), color: "#1c1451", lineHeight: 1.26 }}
                >
                  {r.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Hubungi Guru */}
        <button
          type="button"
          className="flex items-center justify-center"
          style={{
            width: pq(388),
            height: pq(53),
            marginTop: pq(24),
            marginLeft: pq(22),
            backgroundColor: "#cfedbf",
            border: `${pq(2)} solid #688d37`,
            borderRadius: pq(50),
            boxShadow: `0 ${pq(4)} ${pq(4)} rgba(0,0,0,0.12)`,
            gap: pq(10),
            cursor: "pointer",
            touchAction: "manipulation",
          }}
        >
          <img
            src="/visual/bimble/wa-icon.png"
            alt="WhatsApp"
            style={{ width: pq(32), height: pq(32), objectFit: "contain" }}
          />
          <span className="font-bold" style={{ fontSize: pq(20), color: "#688d37", lineHeight: 1.26 }}>
            Hubungi Guru
          </span>
        </button>
      </div>

      {/* tombol tutup kecil (opsional — tidak ada di Figma, untuk UX kembali ke normal) */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute flex items-center justify-center"
          style={{
            top: pq(12),
            right: pq(12),
            width: pq(34),
            height: pq(34),
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            cursor: "pointer",
            zIndex: 5,
            border: `${pq(1)} solid rgba(0,0,0,0.15)`,
            touchAction: "manipulation",
          }}
        >
          <svg
            viewBox="0 0 14 14"
            style={{ width: pq(16), height: pq(16) }}
            stroke="#1c1451"
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
            aria-hidden
          >
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>
      )}
    </div>
  );
}
