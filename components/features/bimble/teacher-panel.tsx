"use client";

import { cq } from "@/lib/cq";

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
      "Saya pengajar kimia yang fokus pada pemahaman konsep reaksi dan stoikiometri. Latihan soal per bab untuk persiapan TKA.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@dewiayu",
        text: "“Miss Nisa jelasin kimia jadi gampang...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@rafi10",
        text: "“Belajarnya seru dan banyak latihan...”",
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
    pengalaman: "Pengalaman : 4 Tahun",
    tentang:
      "Saya pengajar fisika dengan pendekatan visual dan eksperimen sederhana. Membahas soal SNBT & TKA secara bertahap.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nur.png",
        user: "@salsabila",
        text: "“Miss Nur sabar banget ngajarin fisika...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nur.png",
        user: "@dimasptr",
        text: "“Rumus fisika jadi masuk akal...”",
      },
    ],
  },
};

function Stars({ t }: { t: Teacher }) {
  return (
    <div className="flex items-center" style={{ gap: cq(2) }}>
      {t.stars.map((v, i) => (
        <svg
          key={i}
          viewBox="0 0 18 17"
          style={{ width: cq(18), height: cq(17) }}
          aria-hidden
        >
          <path
            d="M9 1.2l2.1 4.5 4.9.6-3.6 3.4.9 4.8L9 12.2l-4.3 2.3.9-4.8L2 6.3l4.9-.6L9 1.2z"
            fill={v === 1 ? "#ffc500" : v === 0.5 ? "#ffc500" : "#e0e8f1"}
            opacity={v === 0.5 ? 0.5 : 1}
          />
        </svg>
      ))}
    </div>
  );
}

/** Header panel — Mr. Pudjo pakai foto utuh (1:1 Figma); guru lain komposisi HTML. */
function PanelHeader({ t }: { t: Teacher }) {
  if (t.headerImg) {
    return (
      <div
        className="overflow-hidden"
        style={{ width: "100%", height: cq(298), borderRadius: cq(16) }}
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
      className="relative overflow-hidden flex items-center"
      style={{ width: "100%", height: cq(298), borderRadius: cq(16), backgroundColor: t.bg }}
    >
      {/* avatar besar */}
      <div
        className="overflow-hidden rounded-full shrink-0"
        style={{
          width: cq(170),
          height: cq(170),
          marginLeft: cq(46),
          border: `${cq(3)} solid rgba(255,255,255,0.85)`,
          boxShadow: `0 ${cq(4)} ${cq(12)} rgba(0,0,0,0.12)`,
        }}
      >
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* teks nama / role / rating di kanan (konsisten dgn overlay foto Pudjo) */}
      <div className="min-w-0 flex flex-col" style={{ marginLeft: cq(36) }}>
        <span className="font-bold" style={{ fontSize: cq(40), color: "#1c1451", lineHeight: 1.15 }}>
          {t.shortName}
        </span>
        <span className="font-semibold" style={{ fontSize: cq(22), color: "#1c1451", lineHeight: 1.3, marginTop: cq(6) }}>
          {t.role}
        </span>
        <div className="flex items-center" style={{ marginTop: cq(12) }}>
          <svg viewBox="0 0 18 17" style={{ width: cq(20), height: cq(19) }} aria-hidden>
            <path
              d="M9 1.2l2.1 4.5 4.9.6-3.6 3.4.9 4.8L9 12.2l-4.3 2.3.9-4.8L2 6.3l4.9-.6L9 1.2z"
              fill="#ffc500"
            />
          </svg>
          <span className="font-bold" style={{ fontSize: cq(24), color: "#1c1451", marginLeft: cq(8) }}>
            {t.rating}
          </span>
          <span className="font-semibold" style={{ fontSize: cq(18), color: "rgba(28,20,81,0.7)", marginLeft: cq(10) }}>
            {t.siswa}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Panel detail guru — 1:1 grup 'PROFILE GURU OPEN' (Rectangle 84, 520×815). */
export function TeacherPanel({ t, onClose }: { t: Teacher; onClose?: () => void }) {
  return (
    <div
      className="relative shrink-0"
      style={{
        width: cq(520),
        backgroundColor: "#fffefe",
        borderRadius: cq(16),
        boxShadow: `0 ${cq(4)} ${cq(4)} rgba(0,0,0,0.15)`,
        overflow: "hidden",
      }}
    >
      {/* foto header */}
      <PanelHeader t={t} />

      {/* konten putih */}
      <div style={{ padding: `${cq(25)} ${cq(46)} ${cq(32)}` }}>
        {/* Profile Mengajar */}
        <h3 className="font-bold" style={{ fontSize: cq(32), color: "#1c1451", lineHeight: 1.26 }}>
          Profile Mengajar
        </h3>
        <p className="font-semibold" style={{ fontSize: cq(16), color: "#1c1451", lineHeight: 1.26, marginTop: cq(14) }}>
          {t.mengajar}
        </p>
        <p className="font-semibold" style={{ fontSize: cq(16), color: "#1c1451", lineHeight: 1.26, marginTop: cq(7) }}>
          {t.pengalaman}
        </p>

        {/* Tentang Guru */}
        <h3 className="font-bold" style={{ fontSize: cq(32), color: "#1c1451", lineHeight: 1.26, marginTop: cq(28) }}>
          Tentang Guru
        </h3>
        <p className="font-semibold" style={{ fontSize: cq(16), color: "#1c1451", lineHeight: 1.26, marginTop: cq(14), maxWidth: cq(371) }}>
          {t.tentang}
        </p>

        {/* Review Siswa */}
        <h3 className="font-bold" style={{ fontSize: cq(32), color: "#1c1451", lineHeight: 1.26, marginTop: cq(28) }}>
          Review Siswa
        </h3>
        <div className="flex" style={{ gap: cq(40), marginTop: cq(20) }}>
          {t.reviews.map((r, i) => (
            <div
              key={i}
              className="relative flex items-center"
              style={{
                width: cq(194),
                height: cq(53),
                backgroundColor: r.bg,
                borderRadius: cq(7),
                boxShadow: `0 ${cq(4)} ${cq(4)} rgba(0,0,0,0.12)`,
                paddingLeft: cq(12),
              }}
            >
              <img
                src={r.avatar}
                alt={r.user}
                style={{
                  width: cq(26),
                  height: cq(26),
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="flex min-w-0 flex-col" style={{ marginLeft: cq(9) }}>
                <span className="truncate font-bold" style={{ fontSize: cq(9), color: "#1c1451", lineHeight: 1.26 }}>
                  {r.user}
                </span>
                <span className="truncate font-normal" style={{ fontSize: cq(7), color: "#1c1451", lineHeight: 1.26 }}>
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
            width: cq(388),
            height: cq(53),
            marginTop: cq(24),
            marginLeft: cq(22),
            backgroundColor: "#cfedbf",
            border: `${cq(2)} solid #688d37`,
            borderRadius: cq(50),
            boxShadow: `0 ${cq(4)} ${cq(4)} rgba(0,0,0,0.12)`,
            gap: cq(10),
            cursor: "pointer",
          }}
        >
          <img
            src="/visual/bimble/wa-icon.png"
            alt="WhatsApp"
            style={{ width: cq(32), height: cq(32), objectFit: "contain" }}
          />
          <span className="font-bold" style={{ fontSize: cq(20), color: "#688d37", lineHeight: 1.26 }}>
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
            top: cq(12),
            right: cq(12),
            width: cq(34),
            height: cq(34),
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            cursor: "pointer",
            zIndex: 5,
            border: `${cq(1)} solid rgba(0,0,0,0.15)`,
          }}
        >
          <svg viewBox="0 0 14 14" style={{ width: cq(16), height: cq(16) }} stroke="#1c1451" strokeWidth={2} strokeLinecap="round" fill="none" aria-hidden>
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>
      )}
    </div>
  );
}
