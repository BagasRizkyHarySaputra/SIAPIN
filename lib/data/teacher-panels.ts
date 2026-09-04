/**
 * Data panel profil guru — LENGKAP untuk 13 guru kartu /bimble.
 *
 * Dibangun dari `TEACHERS` (data kartu) + detail panel per guru (role, rating,
 * pengalaman, tentang, review). Satu sumber kebenaran yang dipakai oleh:
 *  - `teacher-panel.tsx` (UI popup) — re-export TEACHER_PANEL_DATA
 *  - `prisma/seed.ts` (db)          — isi kolom Guru.panelData (JSON)
 *  - `app/bimble/page.tsx` (server) — fallback kalau db kosong
 */
import { TEACHERS } from "./teachers";

/** Satu kartu review siswa di panel. */
export type PanelReview = {
  bg: string;
  avatar: string;
  user: string;
  text: string;
};

/** Data panel guru (1:1 grup PROFILE GURU OPEN di teacher-panel.tsx). */
export type Teacher = {
  id: string;
  name: string;
  shortName: string;
  subject: string;
  siswa: string;
  bg: string;
  avatar: string;
  stars: number[];
  role: string;
  rating: string;
  mengajar: string;
  pengalaman: string;
  tentang: string;
  reviews: PanelReview[];
  /** foto header utuh (Pudjo); undefined → komposisi HTML avatar+nama */
  headerImg?: string;
};

/** Normalisasi spasi ganda (data kartu pudjo punya 2 spasi sebelum " - "). */
function norm(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

/** Gelar + nama depan → "Mr Pudjo" / "Miss Nisa" (pola panel asli). */
function shortNameFrom(name: string): string {
  const [gelar, ...rest] = name.split(" ");
  return `${gelar.replace(".", "")} ${rest[0] ?? ""}`.trim();
}

/** Mapel pertama dari subject → "Guru Matematika", "Guru B. Inggris", dst. */
function roleFrom(subject: string): string {
  const mapel = norm(subject).split(" - ")[0];
  return `Guru ${mapel}`;
}

/** Rating string dari array bintang (sum, 1 desimal). */
function ratingFromStars(stars: number[]): string {
  const s = stars.reduce((a, b) => a + b, 0);
  return s.toFixed(1);
}

/** Detail panel per guru — selain yang bisa diturunkan dari data kartu. */
const DETAIL: Record<
  string,
  {
    pengalaman: string;
    tentang: string;
    reviews: PanelReview[];
    rating?: string; // override (contoh: pudjo 4.9 dari Figma, walau bintang 4.5)
    headerImg?: string;
  }
> = {
  pudjo: {
    rating: "4.9",
    pengalaman: "Pengalaman : 5 Tahun",
    tentang:
      "Saya pengajar matematika dengan pendalaman konsep dan latihan soal terdahulu. Soal SNBT & TKA",
    headerImg: "/visual/bimble/guru-pudjo-header.png",
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
  },
  nisa: {
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
  budi: {
    pengalaman: "Pengalaman : 4 Tahun",
    tentang:
      "Saya Mr. Budi, pengajar Matematika SMA. Fokus saya membedah soal TKA SMA tipe HOTS sampai ke akar konsep, plus trik cepat agar waktu ujian lebih hemat.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@rangga",
        text: "“Mr. Budi sabar banget, rumus susah jadi...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@nadiaa",
        text: "“Latihan soalnya nempel terus sama ujian...”",
      },
    ],
  },
  sari: {
    pengalaman: "Pengalaman : 3 Tahun",
    tentang:
      "Saya Miss. Sari, pengajar Biologi. Belajar Biologi jadi seru lewat mind-map, analogi sehari-hari, dan kuis singkat di tiap akhir bab.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@melly",
        text: "“Miss Sari bikin catatan rapi & gampang...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@yudha",
        text: "“Mind map-nya ngebantu banget hafalan...”",
      },
    ],
  },
  agus: {
    pengalaman: "Pengalaman : 2 Tahun",
    tentang:
      "Saya Mr. Agus. Di kelas Fisika saya, setiap rumus dibuktikan lewat percobaan dan contoh soal aplikasi, biar tidak sekadar hafal.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@fikri",
        text: "“Mr. Agus seru, fisika jadi keliatan nyata...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@salsa",
        text: "“Contoh soalnya dekat sama keseharian...”",
      },
    ],
  },
  dewi: {
    pengalaman: "Pengalaman : 5 Tahun",
    tentang:
      "Saya Miss. Dewi, pengajar Bahasa Inggris. Kelas saya melatih reading cepat ala literasi SNBT: scanning, skimming, dan strategi menjawab tanpa membaca seluruh teks.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@rafi",
        text: "“Reading gue jadi cepet banget, thank you...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@intanp",
        text: "“Teknik skimming-nya practical banget...”",
      },
    ],
  },
  rian: {
    pengalaman: "Pengalaman : 3 Tahun",
    tentang:
      "Saya Mr. Rian, pengajar Ekonomi. Materi ekonomi saya kaitkan dengan berita dan kehidupan nyata, plus latihan soal TKA SMA yang beragam.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@bayu",
        text: "“Belajar ekonomi jadi nggak kering...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@cinta",
        text: "“Mr. Rian selalu kasih contoh kekinian...”",
      },
    ],
  },
  putri: {
    pengalaman: "Pengalaman : 2 Tahun",
    tentang:
      "Saya Miss. Putri, pengajar Kimia. Belajar kimia jadi ringan karena tiap konsep saya pecah jadi langkah kecil yang gampang diikuti.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@keisha",
        text: "“Kimia yang tadinya serem jadi enak...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@galih",
        text: "“Step-by-stepnya jelas, cocok buat...”",
      },
    ],
  },
  dimas: {
    pengalaman: "Pengalaman : 4 Tahun",
    tentang:
      "Saya Mr. Dimas, pengajar Bahasa Indonesia. Saya bantu siswa memahami bacaan, menemukan ide pokok, dan menulis dengan struktur yang rapi.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@rara",
        text: "“Mr. Dimas ngajarin nentuin ide pokok...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@david",
        text: "“Menulis jadi lebih terstruktur sekarang...”",
      },
    ],
  },
  ayu: {
    pengalaman: "Pengalaman : 3 Tahun",
    tentang:
      "Saya Miss. Ayu, pengajar Matematika. Pendekatan saya: pahami konsep dulu, baru perbanyak latihan soal SNBT biar cepat dan tepat.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nur.png",
        user: "@tasya",
        text: "“Miss Ayu jelasin pelan-pelan tapi dalem...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nur.png",
        user: "@reza",
        text: "“Latihan soalnya mirip banget sama SNBT...”",
      },
    ],
  },
  fajar: {
    pengalaman: "Pengalaman : 1 Tahun",
    tentang:
      "Saya Mr. Fajar, pengajar Sejarah. Materi sejarah saya sajikan lewat kronologi dan cerita, supaya hafalan terasa seperti membaca novel.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@wulan",
        text: "“Sejarah jadi kayak dengerin cerita...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-pudjo.png",
        user: "@iqbal",
        text: "“Kronologinya rapi, gampang diinget...”",
      },
    ],
  },
  intan: {
    pengalaman: "Pengalaman : 2 Tahun",
    tentang:
      "Saya Miss. Intan, pengajar PKN. Saya bantu siswa memahami konstitusi dan wawasan kebangsaan lewat diskusi dan latihan soal SNBT.",
    reviews: [
      {
        bg: "#e3aec2",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@selvi",
        text: "“Miss Intan bikin PKN jadi nggak bosen...”",
      },
      {
        bg: "#c9cef4",
        avatar: "/visual/bimble/guru-nisa.png",
        user: "@adit",
        text: "“Diskusinya seru & materinya padat...”",
      },
    ],
  },
};

/** Panel lengkap 13 guru — urut mengikuti TEACHERS (desain). */
export const TEACHER_PANELS: Record<string, Teacher> = Object.fromEntries(
  TEACHERS.map((t) => {
    const d = DETAIL[t.id];
    return [
      t.id,
      {
        id: t.id,
        name: t.name,
        shortName: shortNameFrom(t.name),
        subject: norm(t.subject),
        siswa: t.siswa,
        bg: t.bg,
        avatar: t.avatar,
        stars: t.stars,
        role: roleFrom(t.subject),
        rating: d.rating ?? ratingFromStars(t.stars),
        mengajar: `Mengajar : ${norm(t.subject)}`,
        pengalaman: d.pengalaman,
        tentang: d.tentang,
        reviews: d.reviews,
        ...(d.headerImg ? { headerImg: d.headerImg } : {}),
      },
    ];
  })
);
