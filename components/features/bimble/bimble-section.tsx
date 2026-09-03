"use client";

import { useId } from "react";
import { cq } from "@/lib/cq";

/** Data 3 guru — 1:1 dari Figma BIMBLE (frame 333-496). */
const TEACHERS = [
  {
    name: "Mr. Pudjo",
    subject: "Matematika  - SNBT - TKA",
    siswa: "(130 Siswa)",
    bg: "#e3aec2",
    avatar: "/visual/bimble/guru-pudjo.png",
    stars: [1, 1, 1, 1, 0.5], // 4 gold + 1 half
  },
  {
    name: "Miss. Nisa",
    subject: "Kimia - TKA SMA",
    siswa: "(100 Siswa)",
    bg: "#c9cef4",
    avatar: "/visual/bimble/guru-nisa.png",
    stars: [1, 1, 1, 1, 0], // 4 gold + 1 gray
  },
  {
    name: "Miss. Nur",
    subject: "Fisika - SNBT - TKA",
    siswa: "(70 Siswa)",
    bg: "#cfedc0",
    avatar: "/visual/bimble/guru-nur.png",
    stars: [1, 1, 1, 0, 0], // 3 gold + 2 gray
  },
];

function Star({ value, gradId }: { value: number; gradId: string }) {
  return (
    <svg viewBox="0 0 18 17" style={{ width: cq(18), height: cq(17) }} aria-hidden>
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
function TeacherCard({ t }: { t: (typeof TEACHERS)[number] }) {
  const gradId = useId().replace(/:/g, "");
  return (
    <div
      className="flex items-center rounded-[5.56cqw]"
      style={{
        width: "100%",
        height: cq(209),
        backgroundColor: t.bg,
        borderRadius: cq(80),
        boxShadow: `0 ${cq(4)} ${cq(4)} rgba(108, 99, 99, 0.35)`,
        paddingLeft: cq(55),
        paddingRight: cq(64),
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
      <div className="flex min-w-0 flex-col justify-center" style={{ marginLeft: cq(56) }}>
        <span
          className="truncate font-bold"
          style={{ fontSize: cq(32), color: "#1c1451", lineHeight: 1.26 }}
        >
          {t.name}
        </span>
        <span
          className="mt-[0.35cqw] truncate font-bold"
          style={{ fontSize: cq(20), color: "#1c1451", lineHeight: 1.26 }}
        >
          {t.subject}
        </span>
        <div className="mt-[0.55cqw] flex items-center">
          <div className="flex items-center" style={{ gap: cq(4) }}>
            {t.stars.map((v, i) => (
              <Star key={i} value={v} gradId={`${gradId}-s${i}`} />
            ))}
          </div>
          <span
            className="font-bold"
            style={{ fontSize: cq(20), color: "#7e7e7e", marginLeft: cq(10) }}
          >
            {t.siswa}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Daftar 3 kartu guru — dirender di atas band lavender (Rectangle 160). */
export function GuruCards() {
  return (
    <div className="flex flex-col" style={{ gap: cq(34) }}>
      {TEACHERS.map((t) => (
        <TeacherCard key={t.name} t={t} />
      ))}
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
            border: `${cq(1)} solid #688d37`,
            borderRadius: cq(15),
            height: cq(35),
            paddingInline: cq(18),
          }}
        >
          <span
            className="whitespace-nowrap font-normal"
            style={{ fontSize: cq(16), color: "rgba(28, 20, 81, 0.8)", lineHeight: 1.26 }}
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
