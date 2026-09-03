import type { Mode, ModeSlug } from "@/lib/types";

export const modes: Mode[] = [
  {
    slug: "snbt",
    name: "SNBT",
    tagline: "Seleksi Nasional Berdasarkan Tes",
    description:
      "Ujian berbasis komputer untuk masuk PTN. Terdiri dari Tes Potensi Skolastik (TPS) dan literasi.",
    color: "#df5b97",
    subtests: [
      {
        slug: "pm",
        name: "Penalaran Matematika",
        short: "PM",
        description: "Kemampuan penalaran berbasis masalah matematis.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#df5b97",
      },
      {
        slug: "ppu",
        name: "Pengetahuan & Pemahaman Umum",
        short: "PPU",
        description: "Pemahaman wacana dan pengetahuan umum.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#5858b8",
      },
      {
        slug: "pbm",
        name: "Pemahaman Bacaan & Menulis",
        short: "PBM",
        description: "Kemampuan memahami dan menganalisis bacaan.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#688d37",
      },
      {
        slug: "pk",
        name: "Pengetahuan Kuantitatif",
        short: "PK",
        description: "Penguasaan matematika dasar, aljabar, dan geometri.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#ff7324",
      },
      {
        slug: "lbi",
        name: "Literasi Bahasa Indonesia",
        short: "LBI",
        description: "Kemampuan memahami dan menggunakan bahasa Indonesia.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#ffce51",
      },
      {
        slug: "lbe",
        name: "Literasi Bahasa Inggris",
        short: "LBE",
        description: "Kemampuan membaca dan memahami teks bahasa Inggris.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#c207af",
      },
    ],
  },
  {
    slug: "tka-sma",
    name: "TKA SMA",
    tagline: "Tes Kompetensi Akademik SMA",
    description:
      "Ujian berbasis komputer dengan materi Saintek (Matematika, Fisika, Kimia, Biologi) dan Soshum.",
    color: "#5858b8",
    subtests: [
      {
        slug: "matematika",
        name: "Matematika",
        short: "MTK",
        description: "Matematika tingkat SMA (Saintek & Soshum).",
        questionCount: 10,
        durationMinutes: 10,
        color: "#5858b8",
      },
      {
        slug: "fisika",
        name: "Fisika",
        short: "FIS",
        description: "Fisika tingkat SMA (Saintek).",
        questionCount: 10,
        durationMinutes: 10,
        color: "#df5b97",
      },
      {
        slug: "kimia",
        name: "Kimia",
        short: "KIM",
        description: "Kimia tingkat SMA (Saintek).",
        questionCount: 10,
        durationMinutes: 10,
        color: "#688d37",
      },
      {
        slug: "biologi",
        name: "Biologi",
        short: "BIO",
        description: "Biologi tingkat SMA (Saintek).",
        questionCount: 10,
        durationMinutes: 10,
        color: "#ff7324",
      },
      {
        slug: "ekonomi",
        name: "Ekonomi",
        short: "EKO",
        description: "Ekonomi tingkat SMA (Soshum).",
        questionCount: 10,
        durationMinutes: 10,
        color: "#ffce51",
      },
    ],
  },
  {
    slug: "tka-smp",
    name: "TKA SMP",
    tagline: "Tes Kompetensi Akademik SMP",
    description:
      "Tes kemampuan akademik tingkat SMP: Matematika, IPA, dan Bahasa Inggris.",
    color: "#688d37",
    subtests: [
      {
        slug: "matematika",
        name: "Matematika",
        short: "MTK",
        description: "Matematika tingkat SMP.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#688d37",
      },
      {
        slug: "ipa",
        name: "IPA",
        short: "IPA",
        description: "Ilmu Pengetahuan Alam tingkat SMP.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#df5b97",
      },
      {
        slug: "b-inggris",
        name: "Bahasa Inggris",
        short: "BIG",
        description: "Bahasa Inggris tingkat SMP.",
        questionCount: 10,
        durationMinutes: 10,
        color: "#5858b8",
      },
    ],
  },
];

export const modeBySlug = (slug: string | undefined): Mode | undefined =>
  modes.find((m) => m.slug === slug);

export const getSubtest = (modeSlug: ModeSlug, subSlug: string) =>
  modeBySlug(modeSlug)?.subtests.find((s) => s.slug === subSlug);
