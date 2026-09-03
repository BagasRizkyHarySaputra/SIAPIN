import type { Guru } from "@/lib/types";

export const gurus: Guru[] = [
  {
    id: "mr-pudjo",
    title: "Mr. Pudjo",
    name: "Pudjo Wibisono",
    subject: "Matematika",
    modes: ["SNBT", "TKA"],
    students: 130,
    experienceYears: 5,
    rating: 4.9,
    bio: "Matematika - SNBT - TKA",
    about:
      "Saya pengajar matematika dengan pendekatan konsep dan latihan soal terstruktur. Soal SNBT & TKA selalu saya bedah sampai paham akar masalahnya, bukan sekadar hafalan rumus.",
    reviews: [
      {
        author: "Amel",
        handle: "@amelcantik",
        rating: 5,
        text: "Mr. Pudjo mengajarnya sangat asik dan sabar. Awalnya aku benci matematika, sekarang malah jadi mapel favorit!",
      },
      {
        author: "Bagas",
        handle: "@bagasgtg",
        rating: 5,
        text: "Mr. Pudjo biasa mengajar dengan metode latihan soal terus-menerus, jadi pas ujian terasa familiar. Recommended banget!",
      },
    ],
    avatarColor: "#5858b8",
    avatarEmoji: "🧑‍🏫",
  },
  {
    id: "miss-nisa",
    title: "Miss. Nisa",
    name: "Nisa Rahmawati",
    subject: "Kimia",
    modes: ["TKA SMA"],
    students: 100,
    experienceYears: 3,
    rating: 4.8,
    bio: "Kimia - TKA SMA",
    about:
      "Kimia itu soal pola. Di kelas saya, setiap babak dipecah jadi konsep mini + trik mengerjakan cepat, supaya adik-adik tidak takut dengan hitungan.",
    reviews: [
      {
        author: "Citra",
        handle: "@citraaaaa",
        rating: 5,
        text: "Penjelasan Miss Nisa super jelas, apalagi bagian stoikiometri yang biasanya bikin pusing jadi gampang.",
      },
    ],
    avatarColor: "#df5b97",
    avatarEmoji: "👩‍🏫",
  },
  {
    id: "miss-nur",
    title: "Miss. Nur",
    name: "Nur Aini",
    subject: "Fisika",
    modes: ["SNBT", "TKA"],
    students: 70,
    experienceYears: 4,
    rating: 4.7,
    bio: "Fisika - SNBT - TKA",
    about:
      "Fisika itu bahasa alam. Saya bantu adik-adik menerjemahkan soal cerita menjadi rumus yang tepat, lengkap dengan tips menghemat waktu.",
    reviews: [
      {
        author: "Dewi",
        handle: "@dewipuspita",
        rating: 4,
        text: "Seru dan banyak analoginya. Kadang cepat banget tapi bisa diulang lewat rekaman kelas.",
      },
    ],
    avatarColor: "#688d37",
    avatarEmoji: "👩‍🏫",
  },
  {
    id: "mr-bowo",
    title: "Mr. Bowo",
    name: "Bowo Santoso",
    subject: "Bahasa Inggris",
    modes: ["SNBT"],
    students: 85,
    experienceYears: 6,
    rating: 4.9,
    bio: "B. Inggris - SNBT (Literasi)",
    about:
      "Literasi Bahasa Inggris bukan hafalan vocab. Saya ajarkan strategi reading cepat: scanning, skimming, dan membaca pertanyaan lebih dulu.",
    reviews: [
      {
        author: "Raka",
        handle: "@rakapradana",
        rating: 5,
        text: "Skor TOEFL-style reading gue naik drastis setelah ikut kelas Mr. Bowo. Tekniknya practical banget.",
      },
    ],
    avatarColor: "#ff7324",
    avatarEmoji: "🧑‍🏫",
  },
  {
    id: "miss-dea",
    title: "Miss. Dea",
    name: "Dea Anindya",
    subject: "Biologi",
    modes: ["TKA SMA"],
    students: 60,
    experienceYears: 2,
    rating: 4.6,
    bio: "Biologi - TKA SMA",
    about:
      "Biologi identik hafalan, tapi kalau paham konsepnya jadi jauh lebih ringan. Kelas saya penuh mind-map dan kuis singkat.",
    reviews: [],
    avatarColor: "#ffce51",
    avatarEmoji: "👩‍🏫",
  },
];

export const guruById = (id: string) => gurus.find((g) => g.id === id);
