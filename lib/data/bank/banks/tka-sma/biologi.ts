"use client";

import type { BankSoal, SoalSeg } from "@/lib/data/soal";

const S = (t: string): SoalSeg[] => [{ t }];
const B = (t: string): SoalSeg => ({ t, b: true });
const P = (t: string): SoalSeg => ({ t });

export const BANK_TKA_SMA_BIOLOGI: BankSoal[] = [
  {
    no: 1,
    stimulus: [],
    prompt: S("Sel prokariotik dan sel eukariotik dapat dibedakan berdasarkan ada tidaknya ...."),
    options: [
      { key: "A", text: "dinding sel" },
      { key: "B", text: "membran inti" },
      { key: "C", text: "membran plasma" },
      { key: "D", text: "ribosom" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Ciri pembeda utama prokariot dan eukariot adalah "), B("keberadaan membran inti (karioteka)"), P(".")],
      [P("Prokariot tidak memiliki membran inti, sedangkan eukariot memilikinya.")],
      [P("Dinding sel, membran plasma, dan ribosom "), B("sama-sama dimiliki"), P(" oleh kedua tipe sel.")]
    ],
  },
  {
    no: 2,
    stimulus: [],
    prompt: S("Organel yang berfungsi sebagai tempat berlangsungnya respirasi aerob dan penghasil ATP terbanyak adalah ...."),
    options: [
      { key: "A", text: "kloroplas" },
      { key: "B", text: "ribosom" },
      { key: "C", text: "lisosom" },
      { key: "D", text: "mitokondria" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Mitokondria memiliki "), B("krista"), P(" dan "), B("matriks"), P(" tempat enzim respirasi, serta menghasilkan ATP dalam jumlah besar.")],
      [P("Kloroplas berperan dalam fotosintesis, ribosom dalam sintesis protein, lisosom dalam pencernaan intraseluler.")],
      [P("Jadi jawabannya "), B("mitokondria"), P(".")]
    ],
  },
  {
    no: 3,
    stimulus: [],
    prompt: S("Pada sel tumbuhan, organel yang berperan dalam proses fotosintesis serta mengandung pigmen klorofil adalah ...."),
    options: [
      { key: "A", text: "kloroplas" },
      { key: "B", text: "mitokondria" },
      { key: "C", text: "vakuola" },
      { key: "D", text: "dinding sel" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Kloroplas"), P(" memiliki tilakoid yang tersusun menjadi grana serta mengandung "), B("klorofil"), P(" untuk menangkap cahaya.")],
      [P("Fotosintesis berlangsung di kloroplas; mitokondria untuk respirasi, vakuola untuk menyimpan cadangan, dinding sel untuk pelindung.")]
    ],
  },
  {
    no: 4,
    stimulus: [],
    prompt: S("Struktur sel yang bersifat semipermeabel dan tersusun atas lapisan fosfolipid ganda adalah ...."),
    options: [
      { key: "A", text: "nukleus" },
      { key: "B", text: "sitoplasma" },
      { key: "C", text: "dinding sel" },
      { key: "D", text: "membran plasma" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Membran plasma"), P(" tersusun atas "), B("fosfolipid bilayer"), P(" dengan protein yang tertanam (model mozaik fluida).")],
      [P("Sifat semipermeabel membuat membran hanya meloloskan zat tertentu.")],
      [P("Nukleus adalah organel, sitoplasma adalah cairan sel, dinding sel bersifat permeabel penuh.")]
    ],
  },
  {
    no: 5,
    stimulus: [],
    prompt: S("Berikut ini urutan taksonomi dari tingkat tertinggi ke terendah yang benar adalah ...."),
    options: [
      { key: "A", text: "Kingdom – Kelas – Filum – Ordo – Familia – Genus – Spesies" },
      { key: "B", text: "Spesies – Genus – Familia – Ordo – Kelas – Filum – Kingdom" },
      { key: "C", text: "Kingdom – Divisi – Ordo – Kelas – Familia – Genus – Spesies" },
      { key: "D", text: "Kingdom – Filum – Kelas – Ordo – Familia – Genus – Spesies" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Urutan takson yang benar: "), B("Kingdom → Filum (Divisi) → Kelas → Ordo → Familia → Genus → Spesies"), P(".")],
      [P("Mnemonik yang sering dipakai: *King Philip Came Over For Good Soup*.")],
      [P("Pilihan yang menyusun dari spesies ke kingdom berarti urutan naik (terendah ke tertinggi), bukan turun.")]
    ],
  },
  {
    no: 6,
    stimulus: [],
    prompt: S("Ilmuwan yang pertama kali mencetuskan istilah 'sel' setelah mengamati sayatan gabus dengan mikroskop adalah ...."),
    options: [
      { key: "A", text: "Antonie van Leeuwenhoek" },
      { key: "B", text: "Theodor Schwann" },
      { key: "C", text: "Robert Hooke" },
      { key: "D", text: "Rudolf Virchow" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Robert Hooke"), P(" (1665) mengamati sayatan gabus dan menemukan ruang-ruang kosong yang dinamainya *cellula* (sel).")],
      [P("Leeuwenhoek mengamati mikroorganisme hidup, Schwann merumuskan teori sel untuk hewan, Virchow mencetuskan *omnis cellula e cellula*.")]
    ],
  },
  {
    no: 7,
    stimulus: [],
    prompt: S("Bagian sel saraf yang berfungsi menerima impuls dari sel lain dan menghantarkannya menuju badan sel adalah ...."),
    options: [
      { key: "A", text: "akson" },
      { key: "B", text: "sinapsis" },
      { key: "C", text: "dendrit" },
      { key: "D", text: "neurilema" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Dendrit"), P(" berfungsi "), B("menerima"), P(" impuls dari sel saraf lain dan membawanya ke badan sel.")],
      [P("Akson menghantarkan impuls "), B("meninggalkan"), P(" badan sel menuju sinapsis; sinapsis adalah celah antar neuron.")]
    ],
  },
  {
    no: 8,
    stimulus: [],
    prompt: S("Jaringan tumbuhan yang tersusun atas sel-sel mati dengan dinding sel tebal berlignin dan berfungsi sebagai penguat adalah ...."),
    options: [
      { key: "A", text: "parenkim" },
      { key: "B", text: "sklerenkim" },
      { key: "C", text: "kolenkim" },
      { key: "D", text: "epidermis" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Sklerenkim"), P(" tersusun atas sel mati, berdinding tebal dan mengandung "), B("lignin"), P(", berfungsi menguatkan organ yang sudah dewasa.")],
      [P("Kolenkim juga penguat tetapi selnya masih hidup dan dindingnya belum berlignin; parenkim jaringan dasar; epidermis pelindung.")]
    ],
  },
  {
    no: 9,
    stimulus: [],
    prompt: S("Fungsi darah bagi tubuh manusia yang berkaitan dengan pengaturan suhu adalah ...."),
    options: [
      { key: "A", text: "mendistribusikan panas hasil metabolisme ke seluruh tubuh" },
      { key: "B", text: "mengangkut sisa metabolisme menuju ginjal" },
      { key: "C", text: "membawa oksigen ke seluruh jaringan" },
      { key: "D", text: "melawan bibit penyakit melalui antibodi" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Darah ikut "), B("mengatur suhu tubuh"), P(" dengan mendistribusikan panas hasil metabolisme dari organ dalam ke permukaan tubuh.")],
      [P("Mengangkut sisa metabolisme, oksigen, dan antibodi adalah fungsi darah juga, tetapi "), B("tidak berkaitan dengan termoregulasi"), P(".")]
    ],
  },
  {
    no: 10,
    stimulus: [],
    prompt: S("Enzim bekerja secara spesifik, artinya ...."),
    options: [
      { key: "A", text: "satu enzim dapat bekerja pada semua substrat" },
      { key: "B", text: "enzim hanya bekerja pada suhu sangat tinggi" },
      { key: "C", text: "enzim mempercepat reaksi tanpa substrat" },
      { key: "D", text: "satu enzim hanya bekerja pada satu substrat tertentu" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Spesifitas enzim"), P(" berarti satu enzim hanya mengkatalisis satu jenis substrat/reaksi tertentu, sesuai teori gembok-kunci (*lock and key*) atau *induced fit*.")],
      [P("Suhu sangat tinggi justru dapat "), B("mendenaturasi"), P(" enzim, bukan syarat kerja enzim.")]
    ],
  },
  {
    no: 11,
    stimulus: [],
    prompt: S("Hasil akhir glikolisis untuk setiap satu molekul glukosa adalah ...."),
    options: [
      { key: "A", text: "2 ATP, 2 FADH₂, dan 2 asam piruvat" },
      { key: "B", text: "38 ATP, 2 NADH, dan 2 CO₂" },
      { key: "C", text: "4 ATP, 2 NADH, dan 2 etanol" },
      { key: "D", text: "2 ATP, 2 NADH, dan 2 asam piruvat" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Glikolisis memecah 1 glukosa menjadi "), B("2 asam piruvat"), P(" di sitosol dengan hasil bersih "), B("2 ATP"), P(" dan "), B("2 NADH"), P(".")],
      [P("FADH₂ terbentuk pada siklus Krebs; 38 ATP adalah total respirasi aerob; etanol adalah hasil fermentasi alkohol.")]
    ],
  },
  {
    no: 12,
    stimulus: [],
    prompt: S("Urutan reaksi respirasi aerob yang benar setelah glikolisis adalah ...."),
    options: [
      { key: "A", text: "dekarboksilasi oksidatif – siklus Krebs – transpor elektron" },
      { key: "B", text: "siklus Krebs – dekarboksilasi oksidatif – transpor elektron" },
      { key: "C", text: "transpor elektron – siklus Krebs – dekarboksilasi oksidatif" },
      { key: "D", text: "siklus Krebs – transpor elektron – dekarboksilasi oksidatif" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Urutan respirasi aerob: "), B("glikolisis → dekarboksilasi oksidatif (asam piruvat → asetil KoA) → siklus Krebs → transpor elektron"), P(".")],
      [P("Dekarboksilasi oksidatif terjadi di matriks mitokondria sebelum siklus Krebs.")]
    ],
  },
  {
    no: 13,
    stimulus: [],
    prompt: S("Dalam fotosintesis, reaksi terang berlangsung di bagian kloroplas yang mengandung klorofil, yaitu ...."),
    options: [
      { key: "A", text: "grana (tilakoid)" },
      { key: "B", text: "stroma" },
      { key: "C", text: "membran luar" },
      { key: "D", text: "sitoplasma" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Reaksi terang"), P(" berlangsung di "), B("membran tilakoid (grana)"), P(" karena di sinilah klorofil dan fotosistem berada.")],
      [P("Reaksi gelap (siklus Calvin) berlangsung di "), B("stroma"), P(".")]
    ],
  },
  {
    no: 14,
    stimulus: [],
    prompt: S("Produk reaksi terang fotosintesis yang digunakan pada reaksi gelap adalah ...."),
    options: [
      { key: "A", text: "glukosa dan oksigen" },
      { key: "B", text: "CO₂ dan H₂O" },
      { key: "C", text: "ATP dan NADPH" },
      { key: "D", text: "ATP dan oksigen" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Reaksi terang menghasilkan "), B("ATP"), P(" dan "), B("NADPH"), P(" yang kemudian dipakai reaksi gelap untuk mereduksi CO₂ menjadi glukosa.")],
      [P("Oksigen dilepaskan ke lingkungan, bukan dipakai reaksi gelap.")]
    ],
  },
  {
    no: 15,
    stimulus: [],
    prompt: S("Berikut yang merupakan hasil akhir keseluruhan fotosintesis adalah ...."),
    options: [
      { key: "A", text: "CO₂ dan air" },
      { key: "B", text: "ATP dan NADPH" },
      { key: "C", text: "glukosa dan oksigen" },
      { key: "D", text: "asam piruvat dan CO₂" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Fotosintesis: 6CO₂ + 6H₂O →(cahaya, klorofil)→ "), B("C₆H₁₂O₆ + 6O₂"), P(".")],
      [P("Jadi hasil akhirnya "), B("glukosa dan oksigen"), P(".")]
    ],
  },
  {
    no: 16,
    stimulus: [],
    prompt: S("Tahapan respirasi sel yang menghasilkan ATP paling banyak adalah ...."),
    options: [
      { key: "A", text: "glikolisis" },
      { key: "B", text: "siklus Krebs" },
      { key: "C", text: "transpor elektron" },
      { key: "D", text: "dekarboksilasi oksidatif" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Transpor elektron"), P(" (di membran dalam mitokondria) menghasilkan sekitar "), B("34 ATP"), P(", jauh melebihi glikolisis (2) dan siklus Krebs (2).")],
      [P("Total satu molekul glukosa ≈ "), B("36–38 ATP"), P(".")]
    ],
  },
  {
    no: 17,
    stimulus: [],
    prompt: S("Senyawa kimia pada membran sel yang menyebabkan sel tumbuhan memiliki sifat kaku adalah ...."),
    options: [
      { key: "A", text: "fosfolipid" },
      { key: "B", text: "protein integral" },
      { key: "C", text: "selulosa" },
      { key: "D", text: "glikolipid" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kekakuan sel tumbuhan berasal dari "), B("dinding sel"), P(" yang tersusun atas "), B("selulosa"), P(".")],
      [P("Fosfolipid, protein, dan glikolipid adalah penyusun membran plasma, bukan pemberi sifat kaku.")]
    ],
  },
  {
    no: 18,
    stimulus: [],
    prompt: S("Berikut ini yang bukan merupakan fungsi retikulum endoplasma adalah ...."),
    options: [
      { key: "A", text: "transportasi protein dari ribosom ke badan Golgi" },
      { key: "B", text: "tempat sintesis lemak dan steroid" },
      { key: "C", text: "detoksifikasi obat-obatan pada sel hati" },
      { key: "D", text: "menguraikan zat asing yang masuk ke dalam sel" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Fungsi "), B("menguraikan zat asing / mencerna"), P(" adalah tugas "), B("lisosom"), P(", bukan RE.")],
      [P("RE kasar mengangkut protein, RE halus mensintesis lipid dan berperan dalam detoksifikasi.")]
    ],
  },
  {
    no: 19,
    stimulus: [],
    prompt: S("Perbedaan antara sel hewan dan sel tumbuhan yang benar adalah ...."),
    options: [
      { key: "A", text: "sel tumbuhan tidak memiliki membran inti" },
      { key: "B", text: "sel hewan memiliki kloroplas" },
      { key: "C", text: "sel tumbuhan tidak memiliki mitokondria" },
      { key: "D", text: "sel hewan tidak memiliki dinding sel dan kloroplas" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Sel hewan "), B("tidak memiliki dinding sel, kloroplas, dan vakuola berukuran besar"), P("; sel tumbuhan memilikinya.")],
      [P("Keduanya eukariot sehingga sama-sama bermembran inti dan bermitokondria.")]
    ],
  },
  {
    no: 20,
    stimulus: [],
    prompt: S("Perhatikan ciri-ciri organel berikut.\n(1) Hanya dimiliki sel tumbuhan\n(2) Mengandung pigmen klorofil a dan b\n(3) Tempat reaksi terang dan reaksi gelap\nOrganel yang dimaksud adalah ...."),
    options: [
      { key: "A", text: "kloroplas" },
      { key: "B", text: "mitokondria" },
      { key: "C", text: "vakuola" },
      { key: "D", text: "glioksisom" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kloroplas hanya ada di sel tumbuhan, mengandung "), B("klorofil a dan b"), P(", serta menjadi tempat "), B("reaksi terang (tilakoid)"), P(" dan "), B("reaksi gelap (stroma)"), P(".")],
      [P("Glioksisom mengubah lemak menjadi gula pada perkecambahan; vakuola menyimpan cadangan air.")]
    ],
  }
];
  {
    no: 21,
    stimulus: [],
    prompt: S("Jumlah kromosom sel tubuh (somati) manusia adalah ...."),
    options: [
      { key: "A", text: "23 buah" },
      { key: "B", text: "46 buah (23 pasang)" },
      { key: "C", text: "44 buah (22 pasang)" },
      { key: "D", text: "48 buah (24 pasang)" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sel somatik manusia bersifat diploid (2n) dengan "), B("46 kromosom = 23 pasang"), P(".")],
      [P("Sel kelamin (gamet) bersifat haploid (n) dengan "), B("23 kromosom"), P(".")],
      [P("Autosom berjumlah 44 (22 pasang) dan sepasang sisanya adalah gonosom (kromosom seks).")]
    ],
  },
  {
    no: 22,
    stimulus: [],
    prompt: S("Genotipe yang tersusun atas dua alel berbeda untuk satu sifat disebut ...."),
    options: [
      { key: "A", text: "heterozigot" },
      { key: "B", text: "homozigot dominan" },
      { key: "C", text: "homozigot resesif" },
      { key: "D", text: "hemizigot" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Heterozigot"), P(" = dua alel berbeda (misal Aa); "), B("homozigot"), P(" = dua alel sama (AA atau aa).")],
      [P("Hemizigot dipakai untuk gen pada kromosom X pada laki-laki (XY).")]
    ],
  },
  {
    no: 23,
    stimulus: [],
    prompt: S("Persilangan antara individu bergenotipe Aa dengan aa akan menghasilkan keturunan dengan perbandingan fenotipe ...."),
    options: [
      { key: "A", text: "3 : 1" },
      { key: "B", text: "1 : 2 : 1" },
      { key: "C", text: "2 : 1" },
      { key: "D", text: "1 : 1" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("P: Aa × aa → gamet A, a × a → keturunan "), B("Aa : aa = 1 : 1"), P(".")],
      [P("Jika A dominan penuh, perbandingan fenotipe = "), B("50% dominan : 50% resesif = 1 : 1"), P(".")]
    ],
  },
  {
    no: 24,
    stimulus: [],
    prompt: S("Pada persilangan dihibrid AaBb × AaBb (gen-gen bebas), perbandingan fenotipe F₂ menurut hukum Mendel II adalah ...."),
    options: [
      { key: "A", text: "3 : 1" },
      { key: "B", text: "1 : 2 : 1" },
      { key: "C", text: "9 : 3 : 3 : 1" },
      { key: "D", text: "1 : 1 : 1 : 1" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Dihibrid AaBb × AaBb menghasilkan F₂ dengan perbandingan fenotipe "), B("9 : 3 : 3 : 1"), P(".")],
      [P("Perbandingan 1 : 1 : 1 : 1 muncul pada "), B("test cross"), P(" dihibrid (AaBb × aabb).")]
    ],
  },
  {
    no: 25,
    stimulus: [],
    prompt: S("Bunga Linaria maroccana merah (AAbb) disilangkan dengan putih (aaBB) menghasilkan ungu (AaBb). Jika F₁ disilangkan sesamanya, perbandingan fenotipe F₂ adalah ...."),
    options: [
      { key: "A", text: "12 ungu : 3 merah : 1 putih" },
      { key: "B", text: "9 ungu : 3 merah : 4 putih" },
      { key: "C", text: "9 ungu : 7 putih" },
      { key: "D", text: "9 ungu : 3 merah : 3 putih : 1 putih" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Ini contoh "), B("kriptomeri"), P(": gen A membentuk pigmen antosianin, gen B membuat suasana basa.")],
      [P("AaBb × AaBb → 9 A_B_ (ungu) : 3 A_bb (merah) : 3 aaB_ + 1 aabb (putih) = "), B("9 : 3 : 4"), P(".")]
    ],
  },
  {
    no: 26,
    stimulus: [],
    prompt: S("Peristiwa gen yang menutupi ekspresi gen lain yang bukan alelnya disebut ...."),
    options: [
      { key: "A", text: "kriptomeri" },
      { key: "B", text: "epistasis" },
      { key: "C", text: "polimeri" },
      { key: "D", text: "atavisme" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Epistasis"), P(" = gen yang menutupi ekspresi gen lain yang bukan sealel (misal 9:3:4, 12:3:1, 9:7).")],
      [P("Kriptomeri = gen tersembunyi yang baru tampil jika gen lain dominan; polimeri = efek kumulatif gen ganda.")]
    ],
  },
  {
    no: 27,
    stimulus: [],
    prompt: S("Buta warna merupakan kelainan terpaut kromosom X dan bersifat resesif. Genotipe laki-laki buta warna adalah ...."),
    options: [
      { key: "A", text: "XᴮXᵇ" },
      { key: "B", text: "XᵇXᵇ" },
      { key: "C", text: "XᵇY" },
      { key: "D", text: "XY" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Buta warna terpaut "), B("X resesif"), P(". Laki-laki hanya memiliki satu X sehingga jika X-nya membawa alel b (XᵇY), ia buta warna.")],
      [P("XᴮXᵇ adalah perempuan karier (normal), XᵇXᵇ perempuan buta warna.")]
    ],
  },
  {
    no: 28,
    stimulus: [],
    prompt: S("Jika seorang ayah normal (XᴮY) menikah dengan ibu karier buta warna (XᴮXᵇ), kemungkinan anak laki-lakinya buta warna adalah ...."),
    options: [
      { key: "A", text: "0%" },
      { key: "B", text: "50%" },
      { key: "C", text: "25%" },
      { key: "D", text: "100%" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Ibu karier menghasilkan gamet Xᴮ dan Xᵇ masing-masing 50%.")],
      [P("Anak laki-laki mendapat X dari ibu: "), B("50% XᴮY (normal) : 50% XᵇY (buta warna)"), P(".")]
    ],
  },
  {
    no: 29,
    stimulus: [],
    prompt: S("Golongan darah sistem ABO ditentukan oleh gen dengan tiga alel, yaitu Iᴬ, Iᴮ, dan i. Fenotipe golongan darah AB memiliki genotipe ...."),
    options: [
      { key: "A", text: "IᴬIᴬ" },
      { key: "B", text: "IᴬIᴮ" },
      { key: "C", text: "IᴮIᴮ" },
      { key: "D", text: "Iᴬi" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Alel Iᴬ dan Iᴮ bersifat "), B("kodominan"), P(", sehingga IᴬIᴮ menghasilkan golongan darah "), B("AB"), P(" (kedua antigen diekspresikan).")],
      [P("IᴬIᴬ atau Iᴬi → golongan A; IᴮIᴮ atau Iᴮi → golongan B; ii → golongan O.")]
    ],
  },
  {
    no: 30,
    stimulus: [],
    prompt: S("Pasangan suami istri bergolongan darah A (Iᴬi) dan B (Iᴮi). Kemungkinan anak mereka bergolongan darah O adalah ...."),
    options: [
      { key: "A", text: "25%" },
      { key: "B", text: "0%" },
      { key: "C", text: "50%" },
      { key: "D", text: "75%" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Iᴬi × Iᴮi → gamet Iᴬ, i × Iᴮ, i → keturunan IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), ii (O) masing-masing "), B("25%"), P(".")],
      [P("Jadi peluang anak bergolongan O (ii) = "), B("25%"), P(".")]
    ],
  },
  {
    no: 31,
    stimulus: [],
    prompt: S("Seorang perempuan bergolongan darah Rh⁻ menikah dengan laki-laki Rh⁺ homozigot. Anak pertama mereka ...."),
    options: [
      { key: "A", text: "pasti menderita eritroblastosis fetalis" },
      { key: "B", text: "berisiko mengalami eritroblastosis fetalis pada kehamilan kedua jika anak kedua Rh⁺" },
      { key: "C", text: "tidak mungkin memiliki Rh⁺" },
      { key: "D", text: "selalu lahir dengan anemia berat" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Ibu Rh⁻ yang mengandung janin Rh⁺ dapat membentuk "), B("antibodi anti-Rh"), P(" saat kehamilan pertama.")],
      [P("Antibodi baru menyerang janin Rh⁺ pada "), B("kehamilan kedua"), P(", menyebabkan "), B("eritroblastosis fetalis"), P(".")]
    ],
  },
  {
    no: 32,
    stimulus: [],
    prompt: S("Kariotipe pada sindrom Down (trisomi 21) menunjukkan jumlah kromosom ...."),
    options: [
      { key: "A", text: "47 buah" },
      { key: "B", text: "45 buah" },
      { key: "C", text: "46 buah" },
      { key: "D", text: "48 buah" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Sindrom Down disebabkan "), B("trisomi kromosom 21"), P(", sehingga total kromosom = 46 + 1 = "), B("47 buah"), P(".")],
      [P("Sindrom Turner (XO) = 45; Klinefelter (XXY) = 47 juga tetapi pada gonosom.")]
    ],
  },
  {
    no: 33,
    stimulus: [],
    prompt: S("Mutasi gen yang menyebabkan penggantian satu basa nitrogen pada DNA disebut ...."),
    options: [
      { key: "A", text: "delesi" },
      { key: "B", text: "duplikasi" },
      { key: "C", text: "translokasi" },
      { key: "D", text: "substitusi" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Substitusi"), P(" = penggantian satu/beberapa basa; delesi = hilangnya basa; duplikasi = penggandaan segmen; translokasi = pindahnya segmen ke kromosom nonhomolog.")]
    ],
  },
  {
    no: 34,
    stimulus: [],
    prompt: S("Peristiwa pindah silang (crossing over) terjadi pada tahap ...."),
    options: [
      { key: "A", text: "profase mitosis" },
      { key: "B", text: "metafase II meiosis" },
      { key: "C", text: "profase I meiosis" },
      { key: "D", text: "anafase I meiosis" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Pindah silang"), P(" terjadi pada "), B("profase I"), P(" saat kromosom homolog berpasangan membentuk tetrad dan kiasma.")],
      [P("Pindah silang menyebabkan rekombinasi genetik dan variasi keturunan.")]
    ],
  },
  {
    no: 35,
    stimulus: [],
    prompt: S("Tahap pembelahan sel di mana kromosom berjajar di bidang ekuator adalah ...."),
    options: [
      { key: "A", text: "profase" },
      { key: "B", text: "anafase" },
      { key: "C", text: "metafase" },
      { key: "D", text: "telofase" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Pada "), B("metafase"), P(", sentromer kromosom berjajar pada "), B("bidang ekuator"), P(", dengan benang spindel melekat pada kinetokor.")],
      [P("Anafase: kromatid saudara tertarik ke kutub berlawanan.")]
    ],
  },
  {
    no: 36,
    stimulus: [],
    prompt: S("Pembelahan meiosis bertujuan menghasilkan ...."),
    options: [
      { key: "A", text: "sel kelamin dengan kromosom haploid" },
      { key: "B", text: "sel tubuh dengan kromosom diploid" },
      { key: "C", text: "empat sel anak yang identik dengan induk" },
      { key: "D", text: "dua sel anak yang sama dengan induk" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Meiosis menghasilkan "), B("4 sel anak haploid (n)"), P(" yang digunakan sebagai "), B("gamet"), P(".")],
      [P("Mitosis menghasilkan 2 sel anak diploid yang identik dengan induk.")]
    ],
  },
  {
    no: 37,
    stimulus: [],
    prompt: S("Pada tahap anafase mitosis, yang terjadi adalah ...."),
    options: [
      { key: "A", text: "kromosom homolog berpisah menuju kutub" },
      { key: "B", text: "terbentuk membran inti baru" },
      { key: "C", text: "terjadi pindah silang antar kromosom homolog" },
      { key: "D", text: "kromatid saudara tertarik menuju kutub yang berlawanan" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Pada anafase mitosis, "), B("kromatid saudara"), P(" (hasil replikasi) dipisahkan dan ditarik ke kutub berlawanan.")],
      [P("Pemisahan kromosom homolog terjadi pada "), B("anafase I meiosis"), P("; pindah silang pada profase I.")]
    ],
  },
  {
    no: 38,
    stimulus: [],
    prompt: S("DNA tersusun atas nukleotida yang masing-masing terdiri atas ...."),
    options: [
      { key: "A", text: "gula ribosa, gugus fosfat, dan asam amino" },
      { key: "B", text: "gula deoksiribosa, gugus fosfat, dan basa nitrogen" },
      { key: "C", text: "gula deoksiribosa, asam amino, dan basa nitrogen" },
      { key: "D", text: "gula ribosa, gugus fosfat, dan basa nitrogen" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Satu nukleotida DNA terdiri atas "), B("gula deoksiribosa + gugus fosfat + basa nitrogen"), P(" (A, T, G, C).")],
      [P("RNA memakai gula "), B("ribosa"), P(" dan basa U menggantikan T.")]
    ],
  },
  {
    no: 39,
    stimulus: [],
    prompt: S("Pasangan basa nitrogen yang benar pada DNA adalah ...."),
    options: [
      { key: "A", text: "adenin–sitosin dan guanin–timin" },
      { key: "B", text: "adenin–timin dan guanin–sitosin" },
      { key: "C", text: "adenin–guanin dan timin–sitosin" },
      { key: "D", text: "adenin–urasil dan guanin–sitosin" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Aturan pasangan basa (Chargaff): "), B("A–T"), P(" (2 ikatan hidrogen) dan "), B("G–C"), P(" (3 ikatan hidrogen).")],
      [P("Pasangan A–U hanya ditemukan pada RNA.")]
    ],
  },
  {
    no: 40,
    stimulus: [],
    prompt: S("Peran mRNA dalam sintesis protein adalah ...."),
    options: [
      { key: "A", text: "membawa kode genetik dari DNA di inti ke ribosom" },
      { key: "B", text: "membawa asam amino ke ribosom" },
      { key: "C", text: "menyusun ribosom bersama protein" },
      { key: "D", text: "mengikat antikodon pada tRNA" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("mRNA"), P(" dibentuk melalui transkripsi dan membawa urutan kodon dari DNA di inti menuju ribosom di sitoplasma.")],
      [P("tRNA yang membawa asam amino; rRNA menyusun ribosom.")]
    ],
  },
  {
    no: 41,
    stimulus: [],
    prompt: S("Tingkat keanekaragaman hayati yang ditunjukkan oleh perbedaan warna pada bunga mawar merah, putih, dan pink dalam satu spesies adalah ...."),
    options: [
      { key: "A", text: "keanekaragaman jenis" },
      { key: "B", text: "keanekaragaman ekosistem" },
      { key: "C", text: "keanekaragaman gen" },
      { key: "D", text: "keanekaragaman habitat" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perbedaan fenotipe dalam "), B("satu spesies"), P(" disebabkan variasi genetik → "), B("keanekaragaman gen"), P(".")],
      [P("Keanekaragaman jenis tampak pada banyak spesies; ekosistem pada komunitas di habitat luas.")]
    ],
  },
  {
    no: 42,
    stimulus: [],
    prompt: S("Contoh keanekaragaman hayati tingkat spesies adalah ...."),
    options: [
      { key: "A", text: "kelapa gading, kelapa hibrida, dan kelapa sawit" },
      { key: "B", text: "padi IR64, padi Ciherang, dan padi Mentik" },
      { key: "C", text: "kucing anggora, kucing persia, dan kucing kampung" },
      { key: "D", text: "mangga manalagi, mangga golek, dan mangga arumanis" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kelapa gading, hibrida, dan kelapa sawit adalah "), B("spesies berbeda"), P(" dalam satu famili Arecaceae → keanekaragaman spesies.")],
      [P("Varietas padi, ras kucing, dan kultivar mangga adalah keanekaragaman "), B("gen"), P(" (masih satu spesies).")]
    ],
  },
  {
    no: 43,
    stimulus: [],
    prompt: S("Pelestarian ex situ yang tepat adalah ...."),
    options: [
      { key: "A", text: "pembuatan taman nasional Komodo" },
      { key: "B", text: "penangkaran harimau sumatra di kebun binatang" },
      { key: "C", text: "perlindungan cagar alam Ujung Kulon" },
      { key: "D", text: "penetapan suaka margasatwa untuk badak jawa" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Ex situ"), P(" = pelestarian di luar habitat asli, misal kebun binatang, kebun botani, bank benih.")],
      [P("Taman nasional, cagar alam, dan suaka margasatwa adalah pelestarian "), B("in situ"), P(" (di habitat asli).")]
    ],
  },
  {
    no: 44,
    stimulus: [],
    prompt: S("Ilmuwan yang mengelompokkan makhluk hidup berdasarkan persamaan struktur tubuh dan memperkenalkan sistem binomial nomenklatur adalah ...."),
    options: [
      { key: "A", text: "Charles Darwin" },
      { key: "B", text: "Gregor Mendel" },
      { key: "C", text: "Jean-Baptiste Lamarck" },
      { key: "D", text: "Carolus Linnaeus" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Carolus Linnaeus"), P(" menyusun sistem klasifikasi dan aturan "), B("binomial nomenklatur"), P(" (nama genus + spesies).")],
      [P("Darwin terkenal dengan evolusi seleksi alam; Mendel dengan hukum pewarisan sifat.")]
    ],
  },
  {
    no: 45,
    stimulus: [],
    prompt: S("Penulisan nama ilmiah yang benar menurut binomial nomenklatur untuk padi adalah ...."),
    options: [
      { key: "A", text: "oryza Sativa" },
      { key: "B", text: "Oryza sativa" },
      { key: "C", text: "Oryza Sativa" },
      { key: "D", text: "Oryza sativa L. (dicetak miring semua)" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Aturan binomial: "), B("genus diawali huruf kapital, epitet spesies huruf kecil"), P(", dan ditulis miring atau digarisbawahi.")],
      [P("Oryza sativa (huruf O kapital, sativa kecil) adalah penulisan yang benar; pilihan D salah karena 'L.' tidak dicetak miring.")]
    ],
  },
  {
    no: 46,
    stimulus: [],
    prompt: S("Makhluk hidup yang termasuk kingdom Monera adalah ...."),
    options: [
      { key: "A", text: "bakteri dan archaea" },
      { key: "B", text: "protozoa dan ganggang" },
      { key: "C", text: "jamur dan lumut" },
      { key: "D", text: "virus dan viroid" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kingdom Monera (Procaryotae) berisi organisme "), B("prokariotik"), P(": bakteri (Eubacteria) dan archaea.")],
      [P("Protozoa dan ganggang termasuk Protista; virus bukan makhluk hidup seluler.")]
    ],
  },
  {
    no: 47,
    stimulus: [],
    prompt: S("Ciri utama yang membedakan kingdom Fungi dari kingdom Plantae adalah ...."),
    options: [
      { key: "A", text: "memiliki dinding sel dari selulosa" },
      { key: "B", text: "berklorofil untuk fotosintesis" },
      { key: "C", text: "bersifat heterotrof dan tidak memiliki klorofil" },
      { key: "D", text: "memiliki jaringan pembuluh xilem-floem" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Fungi "), B("heterotrof"), P(" (saprofit/parasit) dan "), B("tidak berklorofil"), P("; dinding selnya dari "), B("kitin"), P(".")],
      [P("Plantae autotrof berklorofil dan berdinding sel selulosa.")]
    ],
  },
  {
    no: 48,
    stimulus: [],
    prompt: S("Berikut ini yang termasuk tumbuhan berbiji terbuka (Gymnospermae) adalah ...."),
    options: [
      { key: "A", text: "mangga, jambu, dan rambutan" },
      { key: "B", text: "padi, jagung, dan tebu" },
      { key: "C", text: "lumut daun dan lumut hati" },
      { key: "D", text: "pinus, melinjo, dan pakis haji" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gymnospermae contohnya "), B("pinus (konifer), melinjo (Gnetum), pakis haji (Cycas)"), P(" — biji tidak tertutup daun buah.")],
      [P("Mangga dan padi termasuk Angiospermae (berbiji tertutup).")]
    ],
  },
  {
    no: 49,
    stimulus: [],
    prompt: S("Tumbuhan lumut (Bryophyta) memiliki ciri ...."),
    options: [
      { key: "A", text: "generasi sporofit lebih dominan daripada gametofit" },
      { key: "B", text: "memiliki akar, batang, dan daun sejati" },
      { key: "C", text: "mengalami pergiliran keturunan dengan generasi gametofit lebih dominan" },
      { key: "D", text: "berkembang biak hanya dengan biji" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Lumut mengalami "), B("metagenesis"), P("; generasi yang dominan adalah "), B("gametofit"), P(" (tumbuhan lumut yang terlihat).")],
      [P("Sporofit dominan terjadi pada tumbuhan paku; lumut tidak punya akar sejati, melainkan rizoid.")]
    ],
  },
  {
    no: 50,
    stimulus: [],
    prompt: S("Ciri khas tumbuhan paku (Pteridophyta) dibanding lumut adalah ...."),
    options: [
      { key: "A", text: "generasi sporofit lebih dominan dan sudah memiliki akar, batang, daun sejati" },
      { key: "B", text: "belum memiliki pembuluh angkut" },
      { key: "C", text: "generasi gametofit lebih dominan" },
      { key: "D", text: "tidak menghasilkan spora" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paku memiliki "), B("sporofit dominan"), P(", sudah berkormus (akar, batang, daun sejati) dan "), B("berpembuluh"), P(".")],
      [P("Paku bereproduksi dengan "), B("spora"), P(" (dihasilkan sporofit).")]
    ],
  },
  {
    no: 51,
    stimulus: [],
    prompt: S("Menurut teori evolusi Lamarck, leher jerapah menjadi panjang karena ...."),
    options: [
      { key: "A", text: "digunakan terus-menerus untuk meraih daun sehingga sifat itu diwariskan" },
      { key: "B", text: "mutasi gen secara acak yang menguntungkan" },
      { key: "C", text: "seleksi alam terhadap variasi panjang leher" },
      { key: "D", text: "perpindahan gen antar populasi jerapah" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Lamarck berpendapat "), B("use and disuse"), P(": organ yang sering digunakan berkembang dan sifat yang diperoleh "), B("diwariskan"), P(".")],
      [P("Penjelasan seleksi alam (variasi + reproduksi diferensial) justru dikemukakan Darwin.")]
    ],
  },
  {
    no: 52,
    stimulus: [],
    prompt: S("Menurut Darwin, mekanisme utama evolusi adalah ...."),
    options: [
      { key: "A", text: "seleksi alam terhadap variasi individu dalam populasi" },
      { key: "B", text: "pewarisan sifat yang diperoleh karena penggunaan organ" },
      { key: "C", text: "perubahan kromosom akibat lingkungan secara langsung" },
      { key: "D", text: "penggunaan dan tidak penggunaan organ tubuh" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Darwin: populasi memiliki "), B("variasi"), P("; individu yang cocok dengan lingkungan "), B("bertahan dan bereproduksi"), P(" (survival of the fittest).")],
      [P("Pilihan pewarisan sifat penggunaan organ adalah gagasan "), B("Lamarck"), P(".")]
    ],
  },
  {
    no: 53,
    stimulus: [],
    prompt: S("Petunjuk evolusi yang menunjukkan adanya homologi organ adalah ...."),
    options: [
      { key: "A", text: "sayap kelelawar dan lengan manusia tersusun dari tulang yang sama" },
      { key: "B", text: "sayap burung dan sayap serangga memiliki fungsi sama" },
      { key: "C", text: "kaki tikus dan kaki kecoa digunakan untuk berlari" },
      { key: "D", text: "mata cumi dan mata manusia memiliki fungsi sama" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Homologi"), P(" = organ dengan asal-usul sama tetapi fungsi berbeda, contoh "), B("sayap kelelawar homolog dengan lengan manusia"), P(".")],
      [P("Sayap burung dan serangga adalah organ "), B("analog"), P(" (fungsi sama, asal berbeda).")]
    ],
  },
  {
    no: 54,
    stimulus: [],
    prompt: S("Organ tubuh yang tersisa dan tidak berfungsi penuh sebagai petunjuk evolusi disebut ...."),
    options: [
      { key: "A", text: "organ homolog" },
      { key: "B", text: "organ analog" },
      { key: "C", text: "fosil hidup" },
      { key: "D", text: "organ vestigial" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Organ vestigial"), P(" adalah organ sisa yang fungsinya mereduksi, misal "), B("usus buntu (appendiks)"), P(" pada manusia.")],
      [P("Contoh lain: tulang ekor, otot penggerak telinga, gigi bungsu.")]
    ],
  },
  {
    no: 55,
    stimulus: [],
    prompt: S("Faktor yang dapat menyebabkan perubahan frekuensi gen dalam populasi (evolusi) adalah ...."),
    options: [
      { key: "A", text: "hanya mutasi gen" },
      { key: "B", text: "mutasi, seleksi alam, migrasi, dan hanyutan genetik" },
      { key: "C", text: "hanya perkawinan acak" },
      { key: "D", text: "hanya lingkungan yang stabil" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Evolusi populasi didorong "), B("mutasi, seleksi alam, migrasi (aliran gen), hanyutan genetik (genetic drift), dan perkawinan tidak acak"), P(".")],
      [P("Lingkungan stabil justru menekan perubahan frekuensi gen.")]
    ],
  },
  {
    no: 56,
    stimulus: [],
    prompt: S("Perbandingan frekuensi genotipe dalam populasi yang berada dalam kesetimbangan Hardy–Weinberg dinyatakan ...."),
    options: [
      { key: "A", text: "p + q = 2" },
      { key: "B", text: "p² − q² = 1" },
      { key: "C", text: "p² + 2pq + q² = 1" },
      { key: "D", text: "2pq = 1" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kesetimbangan Hardy–Weinberg: "), B("p² (AA) + 2pq (Aa) + q² (aa) = 1"), P(" dengan p + q = 1.")],
      [P("Syaratnya: populasi besar, kawin acak, tanpa mutasi/migrasi/seleksi.")]
    ],
  },
  {
    no: 57,
    stimulus: [],
    prompt: S("Dalam populasi 10.000 orang, 100 orang albino (aa). Jumlah individu carrier (Aa) diperkirakan ...."),
    options: [
      { key: "A", text: "900 orang" },
      { key: "B", text: "1.800 orang" },
      { key: "C", text: "3.600 orang" },
      { key: "D", text: "4.800 orang" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("q² = 100/10.000 = 0,01 → q = 0,1 dan p = 0,9.")],
      [P("Frekuensi Aa = 2pq = 2(0,9)(0,1) = 0,18 → "), B("0,18 × 10.000 = 1.800 orang"), P(".")]
    ],
  },
  {
    no: 58,
    stimulus: [],
    prompt: S("Spesiasi yang terjadi karena terhalangnya aliran gen oleh faktor geografis, misalnya terbentuknya lembah atau sungai, disebut ...."),
    options: [
      { key: "A", text: "spesiasi simpatrik" },
      { key: "B", text: "spesiasi parapatrik" },
      { key: "C", text: "adaptasi evolusi" },
      { key: "D", text: "spesiasi allopatrik" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Spesiasi allopatrik"), P(" terjadi karena isolasi "), B("geografis"), P(" sehingga dua populasi terpisah dan berevolusi sendiri.")],
      [P("Simpatrik terjadi dalam wilayah sama tanpa isolasi geografis.")]
    ],
  },
  {
    no: 59,
    stimulus: [],
    prompt: S("Teori asal-usul kehidupan yang menyatakan bahwa makhluk hidup pertama berasal dari reaksi kimia di atmosfer purba yang dipercikkan energi petir disebut ...."),
    options: [
      { key: "A", text: "teori abiogenesis klasik" },
      { key: "B", text: "teori biokimia (Oparin–Haldane)" },
      { key: "C", text: "teori panspermia" },
      { key: "D", text: "teori generatio spontanea" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Oparin–Haldane"), P(": molekul sederhana bereaksi dengan energi (petir/UV) membentuk senyawa organik di lautan purba (*soup primordial*).")],
      [P("Uji Miller–Urey mendukung terbentuknya asam amino dari campuran gas CH₄, NH₃, H₂, H₂O.")]
    ],
  },
  {
    no: 60,
    stimulus: [],
    prompt: S("Eksperimen Stanley Miller membuktikan bahwa ...."),
    options: [
      { key: "A", text: "sel hidup pertama terbentuk langsung di lab" },
      { key: "B", text: "makhluk hidup berasal dari benda mati secara spontan" },
      { key: "C", text: "asam amino dapat terbentuk dari gas-gas atmosfer purba dengan loncatan listrik" },
      { key: "D", text: "DNA dapat terbentuk tanpa energi" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Miller–Urey mensimulasikan atmosfer purba (CH₄, NH₃, H₂, H₂O) dengan "), B("loncatan listrik"), P(" dan menghasilkan "), B("asam amino"), P(".")],
      [P("Ini mendukung tahap awal "), B("evolusi kimia"), P(", bukan terbentuknya sel utuh.")]
    ],
  },
  {
    no: 61,
    stimulus: [],
    prompt: S("Enzim yang dihasilkan lambung dan berfungsi mengubah protein menjadi pepton adalah ...."),
    options: [
      { key: "A", text: "ptialin" },
      { key: "B", text: "renin" },
      { key: "C", text: "pepsin" },
      { key: "D", text: "lipase" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Lambung menghasilkan "), B("pepsin"), P(" (dari pepsinogen oleh HCl) yang mengubah "), B("protein → pepton"), P(".")],
      [P("Ptialin (amilase saliva) mencerna amilum; lipase mencerna lemak; renin mengendapkan kasein susu.")]
    ],
  },
  {
    no: 62,
    stimulus: [],
    prompt: S("Empedu berperan dalam pencernaan lemak dengan cara ...."),
    options: [
      { key: "A", text: "mengubah lemak menjadi asam amino" },
      { key: "B", text: "menghidrolisis lemak menjadi gliserol dan asam lemak" },
      { key: "C", text: "mengemulsi lemak menjadi butiran kecil agar mudah dihidrolisis lipase" },
      { key: "D", text: "menyerap lemak ke dalam pembuluh kil" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Empedu"), P(" tidak mengandung enzim; ia "), B("mengemulsi (mengemulsikan) lemak"), P(" sehingga luas permukaan bertambah bagi kerja lipase.")],
      [P("Hidrolisis lemak dilakukan "), B("lipase"), P("; penyerapan dilakukan vili usus.")]
    ],
  },
  {
    no: 63,
    stimulus: [],
    prompt: S("Urutan saluran pencernaan pada manusia yang benar adalah ...."),
    options: [
      { key: "A", text: "mulut – lambung – esofagus – usus halus – anus – usus besar" },
      { key: "B", text: "mulut – esofagus – usus besar – lambung – usus halus – anus" },
      { key: "C", text: "mulut – esofagus – lambung – usus halus – usus besar – anus" },
      { key: "D", text: "mulut – lambung – usus halus – esofagus – usus besar – anus" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Urutan yang benar: "), B("mulut → esofagus → lambung → usus halus → usus besar → rektum → anus"), P(".")],
      [P("Pencernaan kimiawi terbesar terjadi di "), B("usus halus"), P(".")]
    ],
  },
  {
    no: 64,
    stimulus: [],
    prompt: S("Pembuluh darah yang membawa darah kaya oksigen dari paru-paru menuju jantung adalah ...."),
    options: [
      { key: "A", text: "arteri pulmonalis" },
      { key: "B", text: "vena kava superior" },
      { key: "C", text: "vena pulmonalis" },
      { key: "D", text: "aorta" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Vena pulmonalis"), P(" membawa darah "), B("kaya O₂"), P(" dari paru-paru ke atrium kiri.")],
      [P("Arteri pulmonalis justru membawa darah kaya CO₂ dari jantung ke paru-paru (satu-satunya arteri yang membawa darah tidak murni).")]
    ],
  },
  {
    no: 65,
    stimulus: [],
    prompt: S("Fungsi katup (valvula) bikuspidalis pada jantung adalah ...."),
    options: [
      { key: "A", text: "mencegah aliran balik darah dari ventrikel kiri ke atrium kiri" },
      { key: "B", text: "mencegah aliran balik dari ventrikel kanan ke atrium kanan" },
      { key: "C", text: "menjaga darah tetap mengalir ke paru-paru" },
      { key: "D", text: "memompa darah ke seluruh tubuh" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Katup "), B("bikuspidalis (mitral)"), P(" terletak antara atrium kiri dan ventrikel kiri, mencegah darah kembali ke atrium kiri saat ventrikel berkontraksi.")],
      [P("Katup antara atrium kanan–ventrikel kanan adalah "), B("trikuspidalis"), P(".")]
    ],
  },
  {
    no: 66,
    stimulus: [],
    prompt: S("Urutan peredaran darah kecil (pulmonal) yang benar adalah ...."),
    options: [
      { key: "A", text: "ventrikel kiri – aorta – seluruh tubuh – vena kava – atrium kanan" },
      { key: "B", text: "ventrikel kanan – arteri pulmonalis – paru-paru – vena pulmonalis – atrium kiri" },
      { key: "C", text: "atrium kanan – ventrikel kanan – paru-paru – atrium kiri" },
      { key: "D", text: "ventrikel kiri – arteri pulmonalis – paru-paru – atrium kanan" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Peredaran darah kecil: "), B("ventrikel kanan → arteri pulmonalis → kapiler paru → vena pulmonalis → atrium kiri"), P(".")],
      [P("Peredaran besar: ventrikel kiri → aorta → tubuh → vena kava → atrium kanan.")]
    ],
  },
  {
    no: 67,
    stimulus: [],
    prompt: S("Sel darah putih yang berperan menghasilkan antibodi adalah ...."),
    options: [
      { key: "A", text: "neutrofil" },
      { key: "B", text: "limfosit B" },
      { key: "C", text: "eritrosit" },
      { key: "D", text: "trombosit" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Limfosit B"), P(" berdiferensiasi menjadi sel plasma yang menghasilkan "), B("antibodi"), P(" (kekebalan humoral).")],
      [P("Limfosit T berperan dalam imunitas seluler; neutrofil fagosit; trombosit pembekuan darah.")]
    ],
  },
  {
    no: 68,
    stimulus: [],
    prompt: S("Kelainan berupa menyempitnya pembuluh darah akibat penumpukan lemak (ateroma) disebut ...."),
    options: [
      { key: "A", text: "arteriosklerosis" },
      { key: "B", text: "aterosklerosis" },
      { key: "C", text: "anemia" },
      { key: "D", text: "hemofilia" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Aterosklerosis"), P(" = pengerasan/penyempitan pembuluh oleh plak "), B("ateroma"), P(" (lemak/kolesterol).")],
      [P("Arteriosklerosis = hilangnya elastisitas dinding arteri secara umum; anemia = kekurangan Hb; hemofilia = darah sukar membeku.")]
    ],
  },
  {
    no: 69,
    stimulus: [],
    prompt: S("Pada pernapasan dada, mekanisme inspirasi terjadi karena ...."),
    options: [
      { key: "A", text: "otot diafragma berkontraksi sehingga diafragma mendatar" },
      { key: "B", text: "otot antar tulang rusuk relaksasi sehingga rongga dada mengecil" },
      { key: "C", text: "diafragma melengkung ke atas sehingga tekanan paru meningkat" },
      { key: "D", text: "otot antar tulang rusuk berkontraksi sehingga tulang rusuk terangkat dan volume rongga dada membesar" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Pernapasan dada"), P(": inspirasi → otot antar rusuk ("), B("interkostal eksternal"), P(") berkontraksi, rusuk terangkat, volume dada membesar, tekanan turun, udara masuk.")],
      [P("Pernapasan perut melibatkan kontraksi "), B("diafragma"), P(".")]
    ],
  },
  {
    no: 70,
    stimulus: [],
    prompt: S("Volume udara yang masih dapat dikeluarkan secara maksimal setelah ekspirasi biasa disebut ...."),
    options: [
      { key: "A", text: "volume tidal" },
      { key: "B", text: "volume cadangan ekspirasi" },
      { key: "C", text: "kapasitas vital" },
      { key: "D", text: "volume residu" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Volume cadangan ekspirasi"), P(" = udara ekstra yang dapat dihembuskan setelah ekspirasi normal (±1.500 mL).")],
      [P("Volume tidal = udara pernapasan biasa (±500 mL); residu = udara yang tetap tersisa di paru (±1.000 mL).")]
    ],
  },
  {
    no: 71,
    stimulus: [],
    prompt: S("Pertukaran O₂ dan CO₂ di alveolus terjadi secara ...."),
    options: [
      { key: "A", text: "osmosis" },
      { key: "B", text: "transpor aktif" },
      { key: "C", text: "endositosis" },
      { key: "D", text: "difusi" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Pertukaran gas di alveolus terjadi secara "), B("difusi sederhana"), P(" mengikuti gradien tekanan parsial.")],
      [P("Konsentrasi O₂ alveolus tinggi → berdifusi ke darah; CO₂ darah tinggi → berdifusi ke alveolus.")]
    ],
  },
  {
    no: 72,
    stimulus: [],
    prompt: S("Senyawa yang sebagian besar diangkut darah dalam bentuk HCO₃⁻ adalah ...."),
    options: [
      { key: "A", text: "oksigen" },
      { key: "B", text: "glukosa" },
      { key: "C", text: "urea" },
      { key: "D", text: "karbon dioksida" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Sekitar "), B("70% CO₂"), P(" diangkut sebagai ion "), B("bikarbonat (HCO₃⁻)"), P(" setelah bereaksi dengan air dalam eritrosit (dikatalisis karbonik anhidrase).")],
      [P("O₂ diangkut terutama oleh hemoglobin (oksihemoglobin).")]
    ],
  },
  {
    no: 73,
    stimulus: [],
    prompt: S("Fungsi ginjal yang berkaitan dengan homeostasis tekanan darah adalah ...."),
    options: [
      { key: "A", text: "menghasilkan enzim renin untuk mengaktifkan angiotensin" },
      { key: "B", text: "menyaring urea dari darah" },
      { key: "C", text: "membentuk vitamin D aktif" },
      { key: "D", text: "mengatur konsentrasi glukosa darah" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Ginjal menghasilkan "), B("renin"), P(" yang memicu jalur "), B("renin-angiotensin-aldosteron"), P(" untuk menaikkan tekanan darah.")],
      [P("Menyaring urea dan membentuk vitamin D juga fungsi ginjal, tetapi tidak langsung mengatur tekanan darah.")]
    ],
  },
  {
    no: 74,
    stimulus: [],
    prompt: S("Bagian nefron tempat terjadinya reabsorpsi glukosa dan asam amino secara aktif adalah ...."),
    options: [
      { key: "A", text: "tubulus kontortus distal" },
      { key: "B", text: "tubulus kontortus proksimal" },
      { key: "C", text: "lengkung Henle" },
      { key: "D", text: "kapsula Bowman" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Tubulus kontortus proksimal"), P(" adalah tempat reabsorpsi terbanyak: glukosa, asam amino, ion, dan air secara aktif.")],
      [P("Lengkung Henle mengatur keseimbangan air/garam; tubulus distal untuk sekresi dan pengaturan pH.")]
    ],
  },
  {
    no: 75,
    stimulus: [],
    prompt: S("Urutan proses pembentukan urine yang benar adalah ...."),
    options: [
      { key: "A", text: "reabsorpsi – filtrasi – augmentasi" },
      { key: "B", text: "augmentasi – filtrasi – reabsorpsi" },
      { key: "C", text: "filtrasi – augmentasi – reabsorpsi" },
      { key: "D", text: "filtrasi – reabsorpsi – augmentasi" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Urutan pembentukan urine: "), B("filtrasi"), P(" (glomerulus) → "), B("reabsorpsi"), P(" (tubulus) → "), B("augmentasi"), P(" (sekresi ke tubulus distal).")],
      [P("Filtrasi menghasilkan urine primer; reabsorpsi menghasilkan urine sekunder; augmentasi menghasilkan urine sesungguhnya.")]
    ],
  },
  {
    no: 76,
    stimulus: [],
    prompt: S("Hormon yang berperan meningkatkan reabsorpsi air pada tubulus distal dan duktus kolektivus adalah ...."),
    options: [
      { key: "A", text: "ADH (vasopresin)" },
      { key: "B", text: "aldosteron" },
      { key: "C", text: "insulin" },
      { key: "D", text: "kalsitonin" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("ADH (antidiuretik)"), P(" meningkatkan permeabilitas duktus kolektivus terhadap air sehingga urine pekat.")],
      [P("Aldosteron meningkatkan reabsorpsi Na⁺; insulin menurunkan gula darah.")]
    ],
  },
  {
    no: 77,
    stimulus: [],
    prompt: S("Bagian telinga yang berfungsi sebagai organ keseimbangan adalah ...."),
    options: [
      { key: "A", text: "kanalis semisirkularis dan utrikulus–sakulus" },
      { key: "B", text: "koklea dan organ Korti" },
      { key: "C", text: "gendang telinga dan tulang pendengaran" },
      { key: "D", text: "saluran eustachius" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Kanalis semisirkularis, utrikulus, dan sakulus"), P(" pada telinga dalam berfungsi menjaga "), B("keseimbangan"), P(".")],
      [P("Koklea dan organ Korti berfungsi untuk "), B("pendengaran"), P(".")]
    ],
  },
  {
    no: 78,
    stimulus: [],
    prompt: S("Reseptor pada retina yang berfungsi melihat pada kondisi cahaya redup dan tidak peka warna adalah ...."),
    options: [
      { key: "A", text: "sel kerucut (konus)" },
      { key: "B", text: "sel ganglion" },
      { key: "C", text: "sel batang (basilus)" },
      { key: "D", text: "sel bipolar" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Sel batang"), P(" mengandung rodopsin, peka cahaya redup, menghasilkan penglihatan hitam-putih.")],
      [P("Sel kerucut peka warna dan bekerja pada cahaya terang.")]
    ],
  },
  {
    no: 79,
    stimulus: [],
    prompt: S("Hormon yang dihasilkan kelenjar tiroid dan berfungsi mengatur metabolisme basal adalah ...."),
    options: [
      { key: "A", text: "insulin" },
      { key: "B", text: "adrenalin" },
      { key: "C", text: "kortisol" },
      { key: "D", text: "tiroksin" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kelenjar tiroid menghasilkan "), B("tiroksin (T₄) dan triiodotironin (T₃)"), P(" yang mengatur "), B("metabolisme basal"), P(".")],
      [P("Insulin dari pankreas; adrenalin dari medula adrenal; kortisol dari korteks adrenal.")]
    ],
  },
  {
    no: 80,
    stimulus: [],
    prompt: S("Kekurangan hormon insulin menyebabkan penyakit ...."),
    options: [
      { key: "A", text: "diabetes insipidus" },
      { key: "B", text: "gondok" },
      { key: "C", text: "kretinisme" },
      { key: "D", text: "diabetes melitus" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kekurangan "), B("insulin"), P(" → glukosa tidak dapat masuk sel → "), B("diabetes melitus"), P(" (gula darah tinggi, glukosuria).")],
      [P("Diabetes insipidus akibat kekurangan ADH; gondok akibat kekurangan yodium; kretinisme akibat kekurangan tiroksin pada anak.")]
    ],
  },
  {
    no: 81,
    stimulus: [],
    prompt: S("Berikut ini yang bukan merupakan alat ekskresi pada manusia adalah ...."),
    options: [
      { key: "A", text: "ginjal" },
      { key: "B", text: "paru-paru" },
      { key: "C", text: "kulit" },
      { key: "D", text: "limpa" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Alat ekskresi manusia: "), B("ginjal"), P(" (urine), "), B("paru-paru"), P(" (CO₂ dan H₂O), "), B("kulit"), P(" (keringat), dan "), B("hati"), P(" (empedu).")],
      [B("Limpa"), P(" berperan dalam sistem imun dan perombakan eritrosit tua, "), B("bukan alat ekskresi"), P(".")]
    ],
  },
  {
    no: 82,
    stimulus: [],
    prompt: S("Gangguan pada ginjal di mana terjadi peradangan pada glomerulus akibat infeksi disebut ...."),
    options: [
      { key: "A", text: "nefrosis" },
      { key: "B", text: "pielonefritis" },
      { key: "C", text: "glomerulonefritis" },
      { key: "D", text: "uremia" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Glomerulonefritis"), P(" = peradangan "), B("glomerulus"), P(", sering akibat infeksi streptokokus, menyebabkan darah dan protein masuk urine.")],
      [P("Nefrosis = kebocoran protein; pielonefritis = radang pelvis ginjal; uremia = urea tinggi dalam darah.")]
    ],
  },
  {
    no: 83,
    stimulus: [],
    prompt: S("Bagian neuron yang berfungsi mempercepat hantaran impuls dengan cara melompati nodus Ranvier disebut ...."),
    options: [
      { key: "A", text: "selubung mielin" },
      { key: "B", text: "dendrit" },
      { key: "C", text: "badan sel" },
      { key: "D", text: "neurit" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Selubung mielin"), P(" (dari sel Schwann) bersifat isolator sehingga impuls berjalan "), B("saltatoris"), P(" melompat antar nodus Ranvier → lebih cepat.")],
      [P("Dendrit menerima impuls; neurit (akson) menghantarkan impuls; badan sel pusat metabolisme.")]
    ],
  },
  {
    no: 84,
    stimulus: [],
    prompt: S("Urutan hantaran impuls melalui lengkung refleks yang benar adalah ...."),
    options: [
      { key: "A", text: "reseptor – neuron sensorik – sumsum tulang belakang – neuron motorik – efektor" },
      { key: "B", text: "reseptor – neuron motorik – otak – neuron sensorik – efektor" },
      { key: "C", text: "efektor – neuron sensorik – sumsum – neuron motorik – reseptor" },
      { key: "D", text: "reseptor – interneuron – otak – neuron motorik – efektor" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Lengkung refleks: "), B("reseptor → neuron sensorik → pusat (sumsum tulang belakang) → neuron motorik → efektor"), P(".")],
      [P("Refleks tidak melewati otak sehingga berlangsung cepat.")]
    ],
  },
  {
    no: 85,
    stimulus: [],
    prompt: S("Neurotransmiter yang berperan dalam kontraksi otot rangka di celah sinaps adalah ...."),
    options: [
      { key: "A", text: "adrenalin" },
      { key: "B", text: "asetilkolin" },
      { key: "C", text: "dopamin" },
      { key: "D", text: "GABA" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Asetilkolin"), P(" dilepas neuron motorik di "), B("sinaps neuromuskular"), P(" dan memicu kontraksi otot rangka.")],
      [P("Adrenalin hormon 'lawan-atau-lari'; dopamin terkait kesenangan; GABA inhibitor.")]
    ],
  },
  {
    no: 86,
    stimulus: [],
    prompt: S("Hormon pertumbuhan (GH) yang dihasilkan berlebihan pada masa anak-anak dapat menyebabkan ...."),
    options: [
      { key: "A", text: "akromegali" },
      { key: "B", text: "kretinisme" },
      { key: "C", text: "diabetes insipidus" },
      { key: "D", text: "gigantisme" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kelebihan "), B("GH"), P(" pada anak → "), B("gigantisme"), P(" (tubuh raksasa); pada dewasa → "), B("akromegali"), P(" (tulang muka/tangan membesar).")],
      [P("Kretinisme akibat kekurangan tiroksin pada anak.")]
    ],
  },
  {
    no: 87,
    stimulus: [],
    prompt: S("Bagian otak yang berfungsi mengoordinasikan keseimbangan dan gerakan otot yang halus adalah ...."),
    options: [
      { key: "A", text: "serebrum" },
      { key: "B", text: "medula oblongata" },
      { key: "C", text: "hipotalamus" },
      { key: "D", text: "serebelum" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Serebelum (otak kecil)"), P(" berperan mengoordinasikan keseimbangan, posisi tubuh, dan gerakan halus.")],
      [P("Medula oblongata mengatur denyut jantung dan pernapasan; hipotalamus mengatur suhu dan haus.")]
    ],
  },
  {
    no: 88,
    stimulus: [],
    prompt: S("Kelenjar endokrin yang sering disebut 'master gland' karena mengatur kelenjar lain adalah ...."),
    options: [
      { key: "A", text: "tiroid" },
      { key: "B", text: "anak ginjal" },
      { key: "C", text: "pankreas" },
      { key: "D", text: "hipofisis" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Hipofisis (pituitari)"), P(" menghasilkan hormon tropik yang mengatur kelenjar lain, misal TSH, ACTH, FSH, LH → disebut "), B("master gland"), P(".")],
      [P("Tiroid, adrenal, dan pankreas adalah kelenjar yang diatur hipofisis.")]
    ],
  },
  {
    no: 89,
    stimulus: [],
    prompt: S("Sistem saraf yang bekerja pada saat tubuh beristirahat dan cenderung menenangkan (misal memperlambat denyut jantung) adalah ...."),
    options: [
      { key: "A", text: "saraf simpatik" },
      { key: "B", text: "saraf somatik" },
      { key: "C", text: "saraf parasimpatik" },
      { key: "D", text: "saraf otonom enterik" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Parasimpatik"), P(" bersifat *rest and digest*: memperlambat jantung, meningkatkan gerak pencernaan.")],
      [P("Simpatik bersifat *fight or flight*: mempercepat jantung, melebarkan bronkus.")]
    ],
  },
  {
    no: 90,
    stimulus: [],
    prompt: S("Pada saat terkena cahaya terang, pupil mata akan ...."),
    options: [
      { key: "A", text: "membesar agar cahaya masuk banyak" },
      { key: "B", text: "tetap seperti semula" },
      { key: "C", text: "menutup total selamanya" },
      { key: "D", text: "mengecil (miosis) agar cahaya yang masuk tidak berlebihan" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Cahaya terang memicu refleks "), B("miosis"), P(" (pupil mengecil) melalui saraf parasimpatik.")],
      [P("Pada cahaya redup pupil "), B("melebar (midriasis)"), P(" agar lebih banyak cahaya masuk.")]
    ],
  },
  {
    no: 91,
    stimulus: [],
    prompt: S("Bagian kulit yang berfungsi menghasilkan pigmen dan melindungi dari sinar ultraviolet adalah ...."),
    options: [
      { key: "A", text: "keratinosit" },
      { key: "B", text: "kelenjar keringat" },
      { key: "C", text: "kelenjar sebasea" },
      { key: "D", text: "melanosit" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Melanosit"), P(" di lapisan epidermis menghasilkan "), B("melanin"), P(" yang melindungi kulit dari UV.")],
      [P("Keratinosit menghasilkan keratin; kelenjar keringat/sebasea menghasilkan keringat dan minyak.")]
    ],
  },
  {
    no: 92,
    stimulus: [],
    prompt: S("Hormon yang memicu pengeluaran air susu (let-down reflex) saat bayi menyusu adalah ...."),
    options: [
      { key: "A", text: "oksitosin" },
      { key: "B", text: "prolaktin" },
      { key: "C", text: "estrogen" },
      { key: "D", text: "progesteron" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Oksitosin"), P(" memicu kontraksi sel mioepitelial alveolus sehingga ASI keluar (*let-down reflex*).")],
      [P("Prolaktin merangsang "), B("produksi"), P(" ASI, sedangkan oksitosin mengeluarkannya.")]
    ],
  },
  {
    no: 93,
    stimulus: [],
    prompt: S("Jaringan tumbuhan yang berfungsi mengangkut air dan garam mineral dari akar ke daun adalah ...."),
    options: [
      { key: "A", text: "floem" },
      { key: "B", text: "xilem" },
      { key: "C", text: "kambium" },
      { key: "D", text: "epidermis" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Xilem"), P(" mengangkut "), B("air dan garam mineral"), P(" dari akar ke daun (transpor satu arah ke atas).")],
      [P("Floem mengangkut hasil fotosintesis dari daun ke seluruh tubuh.")]
    ],
  },
  {
    no: 94,
    stimulus: [],
    prompt: S("Air dapat naik dari akar ke daun pada tumbuhan tinggi terutama disebabkan oleh ...."),
    options: [
      { key: "A", text: "hanya tekanan akar" },
      { key: "B", text: "hanya gaya gravitasi" },
      { key: "C", text: "daya isap daun (transpirasi), kapilaritas, dan tekanan akar" },
      { key: "D", text: "aktivitas kambium yang mendorong air" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Naiknya air melibatkan "), B("teori kohesi-adhesi-tegangan"), P(": transpirasi menciptakan tegangan, kohesi antar molekul air, adhesi pada dinding xilem, ditambah "), B("tekanan akar"), P(".")],
      [P("Gravitasi justru melawan kenaikan air.")]
    ],
  },
  {
    no: 95,
    stimulus: [],
    prompt: S("Faktor eksternal yang paling memengaruhi membuka dan menutupnya stomata adalah ...."),
    options: [
      { key: "A", text: "jumlah kloroplas di epidermis" },
      { key: "B", text: "kadar air (turgiditas) sel penjaga" },
      { key: "C", text: "tebalnya kutikula" },
      { key: "D", text: "jumlah stomata per daun" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Stomata membuka jika "), B("sel penjaga turgid"), P(" (banyak air, K⁺ masuk) dan menutup bila kehilangan turgor.")],
      [P("Cahaya, CO₂, dan suhu memengaruhinya lewat perubahan turgor sel penjaga.")]
    ],
  },
  {
    no: 96,
    stimulus: [],
    prompt: S("Gerak tumbuhan yang dipengaruhi rangsang cahaya dan arahnya menuju sumber cahaya disebut ...."),
    options: [
      { key: "A", text: "fototropisme positif" },
      { key: "B", text: "geotropisme positif" },
      { key: "C", text: "fototropisme negatif" },
      { key: "D", text: "hidrotropisme" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Fototropisme positif"), P(" = gerak bagian tumbuhan "), B("menuju cahaya"), P(" (batang).")],
      [P("Akar bersifat geotropisme positif (menuju gravitasi bumi).")]
    ],
  },
  {
    no: 97,
    stimulus: [],
    prompt: S("Hormon tumbuhan yang berperan mempercepat pematangan buah adalah ...."),
    options: [
      { key: "A", text: "auksin" },
      { key: "B", text: "giberelin" },
      { key: "C", text: "etilen" },
      { key: "D", text: "sitokinin" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Etilen (C₂H₄)"), P(" adalah hormon gas yang mempercepat "), B("pematangan buah"), P(" dan penuaan (senescense).")],
      [P("Auksin memacu pemanjangan sel; giberelin memacu pemanjangan batang dan perkecambahan; sitokinin memacu pembelahan sel.")]
    ],
  },
  {
    no: 98,
    stimulus: [],
    prompt: S("Auksin yang terkonsentrasi di sisi yang tidak terkena cahaya menyebabkan ...."),
    options: [
      { key: "A", text: "batang membelok menuju cahaya karena sisi gelap memanjang lebih cepat" },
      { key: "B", text: "batang membelok menjauhi cahaya" },
      { key: "C", text: "akar tumbuh menuju cahaya" },
      { key: "D", text: "daun menggugurkan diri" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Cahaya mendorong auksin berpindah ke "), B("sisi gelap"), P("; sel sisi gelap memanjang lebih cepat sehingga batang "), B("membelok ke arah cahaya"), P(".")],
      [P("Ini mekanisme fototropisme positif pada koleoptil/batang.")]
    ],
  },
  {
    no: 99,
    stimulus: [],
    prompt: S("Peristiwa jatuhnya daun pada tumbuhan tertentu dipengaruhi oleh hormon ...."),
    options: [
      { key: "A", text: "auksin" },
      { key: "B", text: "giberelin" },
      { key: "C", text: "sitokinin" },
      { key: "D", text: "asam absisat" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Asam absisat (ABA)"), P(" menghambat pertumbuhan, menutup stomata saat cekaman, dan memicu "), B("pengguguran daun"), P(" serta dormansi biji.")],
      [P("Sitokinin dan auksin cenderung memperlambat penuaan.")]
    ],
  },
  {
    no: 100,
    stimulus: [],
    prompt: S("Berikut ini yang merupakan ciri tumbuhan C4 adalah ...."),
    options: [
      { key: "A", text: "mengikat CO₂ langsung menjadi senyawa 3C (PGA)" },
      { key: "B", text: "memiliki anatomi daun Kranz dan mengikat CO₂ menjadi asam oksaloasetat (4C)" },
      { key: "C", text: "stomata hanya membuka malam hari" },
      { key: "D", text: "tidak mampu berfotosintesis pada suhu tinggi" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Tumbuhan C4 (mis. jagung, tebu) memiliki "), B("anatomi Kranz"), P("; CO₂ pertama diikat PEP menjadi "), B("oksaloasetat (4C)"), P(".")],
      [P("Tumbuhan CAM (mis. nanas, kaktus) membuka stomata malam hari; C3 membentuk PGA (3C).")]
    ],
  },
  {
    no: 101,
    stimulus: [],
    prompt: S("Tempat terjadinya fertilisasi pada sistem reproduksi wanita adalah ...."),
    options: [
      { key: "A", text: "uterus" },
      { key: "B", text: "tuba fallopi (oviduk)" },
      { key: "C", text: "ovarium" },
      { key: "D", text: "vagina" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Fertilisasi"), P(" (peleburan sperma dan ovum) terjadi di "), B("tuba fallopi (oviduk)"), P(" bagian ampula.")],
      [P("Ovarium menghasilkan ovum; uterus tempat implantasi dan pertumbuhan janin.")]
    ],
  },
  {
    no: 102,
    stimulus: [],
    prompt: S("Proses pelepasan ovum matang dari folikel ovarium disebut ...."),
    options: [
      { key: "A", text: "menstruasi" },
      { key: "B", text: "ovulasi" },
      { key: "C", text: "fertilisasi" },
      { key: "D", text: "implantasi" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Ovulasi"), P(" = pelepasan ovum matang dari folikel de Graaf, biasanya sekitar hari ke-14 siklus 28 hari.")],
      [P("Menstruasi = luruhnya endometrium; implantasi = tertanamnya blastokista di endometrium.")]
    ],
  },
  {
    no: 103,
    stimulus: [],
    prompt: S("Hormon yang merangsang ovulasi dan pembentukan korpus luteum pada wanita adalah ...."),
    options: [
      { key: "A", text: "LH (luteinizing hormone)" },
      { key: "B", text: "FSH" },
      { key: "C", text: "estrogen" },
      { key: "D", text: "progesteron" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("LH"), P(" memicu "), B("ovulasi"), P(" dan mengubah folikel menjadi "), B("korpus luteum"), P(".")],
      [P("FSH memacu pematangan folikel; estrogen dan progesteron diproduksi ovarium/korpus luteum.")]
    ],
  },
  {
    no: 104,
    stimulus: [],
    prompt: S("Pada siklus menstruasi, kadar progesteron tinggi terjadi pada fase ...."),
    options: [
      { key: "A", text: "menstruasi" },
      { key: "B", text: "proliferasi" },
      { key: "C", text: "folikular awal" },
      { key: "D", text: "sekresi (setelah ovulasi)" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Setelah ovulasi, "), B("korpus luteum"), P(" menghasilkan "), B("progesteron"), P(" tinggi pada "), B("fase sekresi"), P(" untuk menebalkan endometrium.")],
      [P("Jika tidak terjadi fertilisasi, korpus luteum berdegenerasi → progesteron turun → menstruasi.")]
    ],
  },
  {
    no: 105,
    stimulus: [],
    prompt: S("Spermatogenesis menghasilkan ...."),
    options: [
      { key: "A", text: "4 spermatid fungsional dari satu spermatogonium" },
      { key: "B", text: "1 ovum dan 3 badan polar dari satu oogonium" },
      { key: "C", text: "2 spermatid dari satu spermatogonium" },
      { key: "D", text: "4 ovum fungsional dari satu oogonium" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Satu "), B("spermatogonium"), P(" melalui meiosis menghasilkan "), B("4 spermatid"), P(" yang berdiferensiasi menjadi sperma fungsional.")],
      [P("Oogenesis menghasilkan 1 ovum fungsional + 3 badan polar.")]
    ],
  },
  {
    no: 106,
    stimulus: [],
    prompt: S("Perbedaan mendasar antara spermatogenesis dan oogenesis adalah ...."),
    options: [
      { key: "A", text: "spermatogenesis terjadi di ovarium" },
      { key: "B", text: "oogenesis menghasilkan 4 sel fungsional" },
      { key: "C", text: "keduanya menghasilkan sel haploid berukuran sama" },
      { key: "D", text: "spermatogenesis menghasilkan 4 sel fungsional, oogenesis menghasilkan 1 ovum fungsional" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Spermatogenesis: 1 sel induk → "), B("4 sperma fungsional"), P("; sitoplasma terbagi merata.")],
      [P("Oogenesis: 1 oogonium → "), B("1 ovum besar fungsional + 3 badan polar"), P(" karena sitoplasma terkonsentrasi pada ovum.")]
    ],
  },
  {
    no: 107,
    stimulus: [],
    prompt: S("Kandungan senyawa pada biji yang digunakan sebagai cadangan makanan adalah ...."),
    options: [
      { key: "A", text: "hanya karbohidrat" },
      { key: "B", text: "karbohidrat, lemak, dan protein" },
      { key: "C", text: "hanya vitamin" },
      { key: "D", text: "asam nukleat dan enzim" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Cadangan makanan biji tersimpan di "), B("kotiledon/endosperma"), P(" dalam bentuk "), B("karbohidrat, lemak, dan protein"), P(".")],
      [P("Asam nukleat bukan cadangan energi.")]
    ],
  },
  {
    no: 108,
    stimulus: [],
    prompt: S("Perkecambahan di mana kotiledon terangkat ke atas permukaan tanah disebut ...."),
    options: [
      { key: "A", text: "epigeal" },
      { key: "B", text: "hipogeal" },
      { key: "C", text: "endogen" },
      { key: "D", text: "vivipar" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Epigeal"), P(": kotiledon dan plumula terangkat ke atas tanah (mis. kacang hijau).")],
      [B("Hipogeal"), P(": kotiledon tetap di dalam tanah, hanya plumula yang muncul (mis. jagung, kacang kapri).")]
    ],
  },
  {
    no: 109,
    stimulus: [],
    prompt: S("Faktor luar yang memengaruhi perkecambahan biji adalah ...."),
    options: [
      { key: "A", text: "hanya gen" },
      { key: "B", text: "hanya hormon auksin" },
      { key: "C", text: "air, suhu, oksigen, dan cahaya" },
      { key: "D", text: "hanya kelembapan udara" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perkecambahan dipengaruhi faktor luar: "), B("air, suhu optimal, oksigen, dan cahaya"), P(", serta faktor dalam (hormon, gen).")],
      [P("Air mengaktifkan enzim; oksigen untuk respirasi.")]
    ],
  },
  {
    no: 110,
    stimulus: [],
    prompt: S("Hormon yang berperan dalam perkecambahan dengan mengaktifkan enzim amilase pada biji adalah ...."),
    options: [
      { key: "A", text: "auksin" },
      { key: "B", text: "giberelin" },
      { key: "C", text: "sitokinin" },
      { key: "D", text: "etilen" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Giberelin"), P(" merangsang aleuron menghasilkan "), B("amilase"), P(" yang memecah pati endosperma menjadi gula untuk pertumbuhan kecambah.")],
      [P("Ini dibuktikan pada percobaan perkecambahan biji padi/gandum.")]
    ],
  },
  {
    no: 111,
    stimulus: [],
    prompt: S("Zat yang dihasilkan serangga betina untuk menarik pasangan disebut ...."),
    options: [
      { key: "A", text: "hormon" },
      { key: "B", text: "enzim" },
      { key: "C", text: "feromon" },
      { key: "D", text: "toksin" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Feromon"), P(" adalah senyawa kimia yang dikeluarkan individu untuk komunikasi/atraksi antar individu, misal menarik lawan jenis.")],
      [P("Hormon bekerja di dalam tubuh sendiri; enzim adalah biokatalis; toksin adalah racun.")]
    ],
  },
  {
    no: 112,
    stimulus: [],
    prompt: S("Berikut ini yang merupakan contoh hewan ovovivipar adalah ...."),
    options: [
      { key: "A", text: "ayam dan bebek" },
      { key: "B", text: "kucing dan anjing" },
      { key: "C", text: "hiu dan kadal tertentu" },
      { key: "D", text: "katak dan ikan mas" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Ovovivipar"), P(": embrio berkembang di dalam telur yang menetas di dalam tubuh induk, contoh beberapa "), B("hiu dan kadal"), P(".")],
      [P("Ayam ovipar (bertelur); kucing vivipar (melahirkan); katak ovipar.")]
    ],
  },
  {
    no: 113,
    stimulus: [],
    prompt: S("Sel darah putih yang pertama kali merespons infeksi dan melakukan fagositosis adalah ...."),
    options: [
      { key: "A", text: "limfosit B" },
      { key: "B", text: "limfosit T" },
      { key: "C", text: "neutrofil" },
      { key: "D", text: "basofil" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Neutrofil"), P(" adalah fagosit pertama yang tiba di lokasi infeksi (terbanyak di darah).")],
      [P("Basofil melepaskan histamin; limfosit berperan imunitas spesifik.")]
    ],
  },
  {
    no: 114,
    stimulus: [],
    prompt: S("Kekebalan yang diperoleh setelah seseorang sembuh dari suatu penyakit disebut ...."),
    options: [
      { key: "A", text: "kekebalan pasif alami" },
      { key: "B", text: "kekebalan aktif alami" },
      { key: "C", text: "kekebalan aktif buatan" },
      { key: "D", text: "kekebalan pasif buatan" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sakit lalu sembuh membuat tubuh membentuk antibodi sendiri → "), B("kekebalan aktif alami"), P(".")],
      [P("Pasif alami: antibodi ibu ke bayi; aktif buatan: vaksinasi; pasif buatan: suntikan antibodi (serum).")]
    ],
  },
  {
    no: 115,
    stimulus: [],
    prompt: S("Vaksinasi merupakan upaya membentuk kekebalan ...."),
    options: [
      { key: "A", text: "aktif buatan" },
      { key: "B", text: "pasif alami" },
      { key: "C", text: "pasif buatan" },
      { key: "D", text: "aktif alami" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Vaksin"), P(" berisi antigen yang dilemahkan → tubuh membuat antibodi sendiri → "), B("kekebalan aktif buatan"), P(".")],
      [P("Suntikan antibodi siap pakai (imunisasi pasif) disebut pasif buatan.")]
    ],
  },
  {
    no: 116,
    stimulus: [],
    prompt: S("Antibodi yang dihasilkan limfosit B dan berperan dalam reaksi alergi adalah ...."),
    options: [
      { key: "A", text: "IgE" },
      { key: "B", text: "IgA" },
      { key: "C", text: "IgM" },
      { key: "D", text: "IgG" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("IgE"), P(" terlibat dalam reaksi "), B("alergi"), P(" dengan memicu pelepasan histamin dari sel mast.")],
      [P("IgG antibodi terbanyak; IgM pertama muncul infeksi; IgA di membran mukosa.")]
    ],
  },
  {
    no: 117,
    stimulus: [],
    prompt: S("Sistem imun menyerang sel tubuh sendiri sehingga menimbulkan kerusakan disebut ...."),
    options: [
      { key: "A", text: "defisiensi imun" },
      { key: "B", text: "hipersensitivitas tipe I" },
      { key: "C", text: "penyakit autoimun" },
      { key: "D", text: "imunosupresi" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Autoimun"), P(" = sistem imun keliru menyerang "), B("jaringan sendiri"), P(", contoh DM tipe 1, lupus, rheumatoid arthritis.")],
      [P("Defisiensi imun = kekurangan respons imun (AIDS); imunosupresi = penekanan imun.")]
    ],
  },
  {
    no: 118,
    stimulus: [],
    prompt: S("HIV menyerang sel darah putih jenis ...."),
    options: [
      { key: "A", text: "eritrosit" },
      { key: "B", text: "trombosit" },
      { key: "C", text: "limfosit T4 (CD4)" },
      { key: "D", text: "neutrofil" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("HIV menginfeksi dan menghancurkan "), B("limfosit T4 (CD4)"), P(" sehingga imunitas seluler runtuh.")],
      [P("Akibatnya penderita rentan infeksi oportunistik (AIDS).")]
    ],
  },
  {
    no: 119,
    stimulus: [],
    prompt: S("Berikut ini yang merupakan pertahanan tubuh nonspesifik eksternal adalah ...."),
    options: [
      { key: "A", text: "antibodi spesifik" },
      { key: "B", text: "sel T sitotoksik" },
      { key: "C", text: "sel memori" },
      { key: "D", text: "kulit, membran mukosa, dan lisozim" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Pertahanan nonspesifik eksternal: "), B("kulit, membran mukosa, lisozim (air mata), asam lambung, silia"), P(".")],
      [P("Antibodi, sel T sitotoksik, dan sel memori adalah pertahanan "), B("spesifik"), P(".")]
    ],
  },
  {
    no: 120,
    stimulus: [],
    prompt: S("Protein antivirus yang dihasilkan sel yang terinfeksi untuk melindungi sel sehat di sekitarnya adalah ...."),
    options: [
      { key: "A", text: "komplemen" },
      { key: "B", text: "interferon" },
      { key: "C", text: "histamin" },
      { key: "D", text: "opsonin" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Interferon"), P(" diproduksi sel yang terinfeksi virus untuk menghambat replikasi virus pada sel sehat di sekitarnya.")],
      [P("Komplemen adalah protein plasma; histamin memicu peradangan.")]
    ],
  },
  {
    no: 121,
    stimulus: [],
    prompt: S("Urutan tingkat organisasi kehidupan dari yang sederhana ke kompleks yang benar adalah ...."),
    options: [
      { key: "A", text: "sel – organ – jaringan – sistem organ – organisme" },
      { key: "B", text: "populasi – individu – komunitas – ekosistem – bioma" },
      { key: "C", text: "sel – jaringan – organ – sistem organ – organisme – populasi – komunitas – ekosistem" },
      { key: "D", text: "jaringan – sel – organ – sistem organ – populasi" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Urutan organisasi: "), B("sel → jaringan → organ → sistem organ → organisme → populasi → komunitas → ekosistem → bioma → biosfer"), P(".")],
      [P("Jaringan tersusun dari sel (bukan sebaliknya), populasi kumpulan individu sejenis.")]
    ],
  },
  {
    no: 122,
    stimulus: [],
    prompt: S("Sekumpulan ikan mas di sebuah kolam merupakan contoh ...."),
    options: [
      { key: "A", text: "komunitas" },
      { key: "B", text: "ekosistem" },
      { key: "C", text: "populasi" },
      { key: "D", text: "individu" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Populasi"), P(" = kumpulan individu "), B("sejenis"), P(" (spesies sama) di tempat dan waktu yang sama → ikan mas di kolam.")],
      [P("Komunitas = kumpulan populasi berbeda di habitat yang sama.")]
    ],
  },
  {
    no: 123,
    stimulus: [],
    prompt: S("Interaksi antara dua spesies di mana satu pihak diuntungkan dan pihak lain tidak diuntungkan maupun dirugikan disebut ...."),
    options: [
      { key: "A", text: "mutualisme" },
      { key: "B", text: "parasitisme" },
      { key: "C", text: "predasi" },
      { key: "D", text: "komensalisme" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Komensalisme"), P(": satu untung, satu netral, contoh anggrek menempel di pohon (anggrek dapat tempat, pohon tak terpengaruh).")],
      [P("Mutualisme: dua-duanya untung; parasitisme: satu untung yang lain rugi.")]
    ],
  },
  {
    no: 124,
    stimulus: [],
    prompt: S("Interaksi antara ikan badut dan anemon laut merupakan contoh ...."),
    options: [
      { key: "A", text: "komensalisme" },
      { key: "B", text: "parasitisme" },
      { key: "C", text: "mutualisme" },
      { key: "D", text: "amensalisme" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Ikan badut mendapat perlindungan dari anemon, anemon mendapat sisa makanan dan pembersihan → "), B("mutualisme"), P(".")],
      [P("Keduanya diuntungkan, bukan hanya satu pihak.")]
    ],
  },
  {
    no: 125,
    stimulus: [],
    prompt: S("Organisme yang menduduki tingkat trofik tertinggi dalam piramida makanan adalah ...."),
    options: [
      { key: "A", text: "konsumen puncak" },
      { key: "B", text: "produsen" },
      { key: "C", text: "konsumen primer" },
      { key: "D", text: "dekomposer" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Konsumen puncak"), P(" menempati trofik tertinggi (misal elang pada rantai padi–tikus–ular–elang).")],
      [P("Produsen di dasar piramida; dekomposer mengurai semua trofik.")]
    ],
  },
  {
    no: 126,
    stimulus: [],
    prompt: S("Dalam suatu rantai makanan, organisme yang mampu menyusun zat organik dari zat anorganik disebut ...."),
    options: [
      { key: "A", text: "konsumen I" },
      { key: "B", text: "produsen" },
      { key: "C", text: "konsumen II" },
      { key: "D", text: "pengurai" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Produsen"), P(" (tumbuhan hijau) menyusun zat organik dari zat anorganik melalui fotosintesis.")],
      [P("Pengurai mengubah zat organik menjadi anorganik kembali.")]
    ],
  },
  {
    no: 127,
    stimulus: [],
    prompt: S("Efisiensi transfer energi antar tingkat trofik rata-rata hanya sekitar ...."),
    options: [
      { key: "A", text: "50%" },
      { key: "B", text: "10%" },
      { key: "C", text: "90%" },
      { key: "D", text: "1%" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Hukum piramida energi: hanya "), B("±10% energi"), P(" yang berpindah ke tingkat trofik berikutnya, sisanya hilang sebagai panas/respirasi.")],
      [P("Ini sebab jumlah trofik terbatas (±4–5 tingkat).")]
    ],
  },
  {
    no: 128,
    stimulus: [],
    prompt: S("Daur biogeokimia yang tidak melalui atmosfer secara signifikan adalah ...."),
    options: [
      { key: "A", text: "daur karbon" },
      { key: "B", text: "daur nitrogen" },
      { key: "C", text: "daur fosfor" },
      { key: "D", text: "daur air" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Daur fosfor"), P(" sepenuhnya melalui litosfer (batuan, tanah, air) dan "), B("tidak melalui atmosfer"), P(".")],
      [P("Karbon, nitrogen, dan air memiliki fase gas di atmosfer.")]
    ],
  },
  {
    no: 129,
    stimulus: [],
    prompt: S("Bakteri Rhizobium yang bersimbiosis dengan akar tanaman kacang-kacangan berperan dalam ...."),
    options: [
      { key: "A", text: "fiksasi nitrogen bebas menjadi amonia" },
      { key: "B", text: "nitrifikasi amonia menjadi nitrat" },
      { key: "C", text: "denitrifikasi nitrat menjadi N₂" },
      { key: "D", text: "penguraian zat organik" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Rhizobium"), P(" pada bintil akar melakukan "), B("fiksasi nitrogen"), P(" (N₂ → NH₃) yang dapat digunakan tumbuhan.")],
      [P("Nitrifikasi dilakukan Nitrosomonas/Nitrobacter; denitrifikasi oleh Pseudomonas denitrificans.")]
    ],
  },
  {
    no: 130,
    stimulus: [],
    prompt: S("Peristiwa meningkatnya konsentrasi zat pencemar pada tiap tingkat trofik disebut ...."),
    options: [
      { key: "A", text: "bioakumulasi" },
      { key: "B", text: "eutrofikasi" },
      { key: "C", text: "biomagnifikasi" },
      { key: "D", text: "bioindikasi" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Biomagnifikasi"), P(" = peningkatan konsentrasi polutan (mis. DDT, merkuri) sepanjang rantai makanan.")],
      [P("Bioakumulasi adalah penimbunan dalam satu organisme; eutrofikasi adalah pengayaan nutrien di perairan.")]
    ],
  },
  {
    no: 131,
    stimulus: [],
    prompt: S("Hujan asam disebabkan oleh ...."),
    options: [
      { key: "A", text: "CO₂ berlebih dari pembakaran fosil" },
      { key: "B", text: "SO₂ dan NOₓ dari pembakaran bahan bakar bereaksi dengan air di atmosfer" },
      { key: "C", text: "CFC yang merusak ozon" },
      { key: "D", text: "partikel debu vulkanik" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Hujan asam"), P(" akibat "), B("SO₂ dan NOₓ"), P(" (dari industri/kendaraan) yang larut dalam air hujan membentuk asam sulfat/nitrat.")],
      [P("CO₂ menyebabkan pemanasan global; CFC menipiskan ozon.")]
    ],
  },
  {
    no: 132,
    stimulus: [],
    prompt: S("Efek rumah kaca yang menyebabkan pemanasan global terutama dipicu oleh peningkatan gas ...."),
    options: [
      { key: "A", text: "O₂ dan N₂" },
      { key: "B", text: "H₂ dan helium" },
      { key: "C", text: "O₃ stratosfer" },
      { key: "D", text: "CO₂ dan metana (CH₄)" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gas rumah kaca utama: "), B("CO₂, CH₄, N₂O, dan CFC"), P("; CO₂ dari pembakaran fosil adalah penyumbang terbesar.")],
      [P("O₂ dan N₂ bukan gas rumah kaca.")]
    ],
  },
  {
    no: 133,
    stimulus: [],
    prompt: S("Berikut ini yang merupakan upaya pelestarian keanekaragaman hayati secara in situ adalah ...."),
    options: [
      { key: "A", text: "membuat taman nasional untuk melindungi habitat asli" },
      { key: "B", text: "menangkarkan hewan langka di kebun binatang" },
      { key: "C", text: "menyimpan benih di bank gen" },
      { key: "D", text: "membudidayakan anggrek di rumah kaca" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("In situ"), P(" = pelestarian di "), B("habitat asli"), P(", misal taman nasional, cagar alam, suaka margasatwa.")],
      [P("Kebun binatang, bank gen, dan rumah kaca adalah pelestarian "), B("ex situ"), P(".")]
    ],
  },
  {
    no: 134,
    stimulus: [],
    prompt: S("Lapisan bumi tempat hidup seluruh makhluk hidup disebut ...."),
    options: [
      { key: "A", text: "litosfer" },
      { key: "B", text: "hidrosfer" },
      { key: "C", text: "atmosfer" },
      { key: "D", text: "biosfer" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Biosfer"), P(" adalah zona kehidupan di bumi yang mencakup bagian litosfer, hidrosfer, dan atmosfer.")],
      [P("Litosfer lapisan batuan; hidrosfer perairan; atmosfer lapisan udara.")]
    ],
  },
  {
    no: 135,
    stimulus: [],
    prompt: S("Contoh penerapan bioteknologi konvensional adalah ...."),
    options: [
      { key: "A", text: "produksi insulin oleh bakteri E. coli rekombinan" },
      { key: "B", text: "pembuatan vaksin DNA" },
      { key: "C", text: "kloning domba Dolly" },
      { key: "D", text: "pembuatan tempe dengan Rhizopus oryzae" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Bioteknologi konvensional memanfaatkan mikroorganisme secara langsung, misal "), B("tempe (Rhizopus oryzae)"), P(", tape, yogurt.")],
      [P("Insulin rekombinan, vaksin DNA, dan kloning termasuk bioteknologi "), B("modern"), P(".")]
    ],
  },
  {
    no: 136,
    stimulus: [],
    prompt: S("Bioteknologi modern yang memanfaatkan bakteri Escherichia coli untuk menghasilkan insulin manusia dilakukan melalui teknik ...."),
    options: [
      { key: "A", text: "rekayasa genetika (DNA rekombinan)" },
      { key: "B", text: "fermentasi sederhana" },
      { key: "C", text: "kultur jaringan" },
      { key: "D", text: "hibridisasi konvensional" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gen insulin manusia disisipkan ke plasmid bakteri melalui "), B("DNA rekombinan"), P(", lalu bakteri menghasilkan insulin.")],
      [P("Ini ciri khas bioteknologi modern/rekayasa genetika.")]
    ],
  },
  {
    no: 137,
    stimulus: [],
    prompt: S("Berikut ini yang merupakan produk bioteknologi modern di bidang pertanian adalah ...."),
    options: [
      { key: "A", text: "pupuk kompos" },
      { key: "B", text: "tempe dan oncom" },
      { key: "C", text: "biogas" },
      { key: "D", text: "tanaman transgenik tahan hama (Bt jagung)" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Tanaman transgenik"), P(" (mis. jagung Bt, padi emas) adalah produk "), B("rekayasa genetika"), P(".")],
      [P("Kompos, tempe, dan biogas adalah produk bioteknologi konvensional.")]
    ],
  },
  {
    no: 138,
    stimulus: [],
    prompt: S("Penerapan bioteknologi untuk memperoleh individu baru dengan sifat sama persis dengan induk tanpa melalui perkawinan disebut ...."),
    options: [
      { key: "A", text: "kloning" },
      { key: "B", text: "mutasi induksi" },
      { key: "C", text: "seleksi alam" },
      { key: "D", text: "hibridoma" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Kloning"), P(" menghasilkan individu identik secara genetik dengan induk, contoh domba Dolly.")],
      [P("Hibridoma adalah fusi sel untuk antibodi monoklonal.")]
    ],
  },
  {
    no: 139,
    stimulus: [],
    prompt: S("Mikroorganisme yang digunakan dalam pembuatan yogurt adalah ...."),
    options: [
      { key: "A", text: "Acetobacter xylinum" },
      { key: "B", text: "Saccharomyces cerevisiae" },
      { key: "C", text: "Lactobacillus bulgaricus dan Streptococcus thermophilus" },
      { key: "D", text: "Penicillium notatum" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Yogurt dibuat dengan fermentasi susu oleh "), B("Lactobacillus bulgaricus"), P(" dan "), B("Streptococcus thermophilus"), P(" yang mengubah laktosa menjadi asam laktat.")],
      [P("Acetobacter xylinum untuk nata de coco; Saccharomyces untuk roti/tape; Penicillium penghasil antibiotik.")]
    ],
  },
  {
    no: 140,
    stimulus: [],
    prompt: S("Produk bioteknologi berupa antibodi monoklonal dihasilkan melalui teknik ...."),
    options: [
      { key: "A", text: "hibridoma (fusi sel mieloma dengan limfosit B)" },
      { key: "B", text: "fermentasi jamur Aspergillus" },
      { key: "C", text: "kultur jaringan tanaman" },
      { key: "D", text: "radiasi mutasi" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Hibridoma"), P(" = fusi sel "), B("limfosit B"), P(" (penghasil antibodi) dengan sel "), B("mieloma"), P(" (membelah abadi) menghasilkan antibodi monoklonal.")],
      [P("Digunakan untuk diagnosis dan terapi (misal tes kehamilan, terapi kanker).")]
    ],
  },
  {
    no: 141,
    stimulus: [],
    prompt: S("Berikut ini yang membedakan virus dari makhluk hidup lain adalah ...."),
    options: [
      { key: "A", text: "virus memiliki ribosom dan dapat mensintesis protein sendiri" },
      { key: "B", text: "virus dapat membelah diri di luar sel inang" },
      { key: "C", text: "virus memiliki sitoplasma dan membran sel" },
      { key: "D", text: "virus tidak memiliki sel dan hanya dapat bereproduksi di dalam sel inang" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Virus bersifat "), B("aseluler"), P(": tidak bermembran, tidak bersitoplasma, hanya memiliki kapsid + asam nukleat, dan "), B("reproduksi obligat di dalam sel inang"), P(" (parasit intraseluler obligat).")],
      [P("Virus tidak dapat bereproduksi di luar sel hidup.")]
    ],
  },
  {
    no: 142,
    stimulus: [],
    prompt: S("Bakteri yang berperan mengubah amonia menjadi nitrit dalam daur nitrogen adalah ...."),
    options: [
      { key: "A", text: "Nitrosomonas" },
      { key: "B", text: "Nitrobacter" },
      { key: "C", text: "Rhizobium" },
      { key: "D", text: "Clostridium" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Nitrosomonas"), P(" mengoksidasi "), B("amonia (NH₃) → nitrit (NO₂⁻)"), P(" pada tahap nitrifikasi.")],
      [P("Nitrobacter mengubah nitrit → nitrat; Rhizobium memfiksasi N₂; Clostridium denitrifikasi.")]
    ],
  },
  {
    no: 143,
    stimulus: [],
    prompt: S("Kelompok Protista mirip tumbuhan yang menghasilkan oksigen terbanyak di bumi adalah ...."),
    options: [
      { key: "A", text: "jamur lendir" },
      { key: "B", text: "diatom (Bacillariophyta)" },
      { key: "C", text: "protozoa" },
      { key: "D", text: "Archaea" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Diatom"), P(" (ganggang kersik) adalah penyumbang utama oksigen dan plankton laut.")],
      [P("Jamur lendir dan protozoa bukan fotosintetik; Archaea prokariot.")]
    ],
  },
  {
    no: 144,
    stimulus: [],
    prompt: S("Plasmodium penyebab malaria ditularkan melalui ...."),
    options: [
      { key: "A", text: "gigitan nyamuk Aedes aegypti" },
      { key: "B", text: "gigitan nyamuk Culex" },
      { key: "C", text: "air yang terkontaminasi" },
      { key: "D", text: "gigitan nyamuk Anopheles betina" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Malaria ditularkan oleh "), B("nyamuk Anopheles betina"), P(" yang membawa Plasmodium.")],
      [P("Aedes aegypti menularkan DBD; Culex menularkan filariasis.")]
    ],
  },
  {
    no: 145,
    stimulus: [],
    prompt: S("Jamur yang berperan dalam pembuatan kecap dan memiliki hifa yang bersekat adalah ...."),
    options: [
      { key: "A", text: "Rhizopus oryzae" },
      { key: "B", text: "Aspergillus oryzae" },
      { key: "C", text: "Penicillium notatum" },
      { key: "D", text: "Saccharomyces cerevisiae" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Aspergillus oryzae"), P(" digunakan dalam fermentasi kedelai menjadi "), B("kecap"), P(" (juga tauco).")],
      [P("Rhizopus oryzae untuk tempe; Penicillium penghasil penisilin; Saccharomyces untuk roti/tape.")]
    ],
  },
  {
    no: 146,
    stimulus: [],
    prompt: S("Berikut ini yang merupakan ciri jamur (Fungi) adalah ...."),
    options: [
      { key: "A", text: "prokariotik, autotrof, dinding sel peptidoglikan" },
      { key: "B", text: "eukariotik, autotrof, mengandung klorofil" },
      { key: "C", text: "eukariotik, heterotrof, dinding sel dari kitin" },
      { key: "D", text: "prokariotik, heterotrof, tanpa dinding sel" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Fungi eukariotik, "), B("heterotrof"), P(" (saprofit/parasit/mutualis), dinding sel "), B("kitin"), P(", tidak berklorofil.")],
      [P("Peptidoglikan adalah dinding sel bakteri; klorofil milik tumbuhan.")]
    ],
  },
  {
    no: 147,
    stimulus: [],
    prompt: S("Bakteri berbentuk batang disebut ...."),
    options: [
      { key: "A", text: "kokus" },
      { key: "B", text: "basil" },
      { key: "C", text: "spirilum" },
      { key: "D", text: "vibrio" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Bakteri bentuk "), B("batang = basil"), P("; bulat = kokus; lengkung koma = vibrio; spiral = spirilum.")],
      [P("Contoh basil: Escherichia coli, Salmonella.")]
    ],
  },
  {
    no: 148,
    stimulus: [],
    prompt: S("Pembuatan tape memanfaatkan jamur ...."),
    options: [
      { key: "A", text: "Saccharomyces cerevisiae" },
      { key: "B", text: "Aspergillus wentii" },
      { key: "C", text: "Penicillium camemberti" },
      { key: "D", text: "Volvariella volvacea" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Saccharomyces cerevisiae"), P(" (ragi) mengubah gula menjadi alkohol dan CO₂ pada fermentasi "), B("tape"), P(" (dan roti).")],
      [P("Aspergillus wentii untuk kecap; Penicillium camemberti untuk keju; Volvariella jamur merdeka (merang).")]
    ],
  },
  {
    no: 149,
    stimulus: [],
    prompt: S("Peranan bakteri dalam pembuatan antibiotik streptomisin berasal dari genus ...."),
    options: [
      { key: "A", text: "Escherichia" },
      { key: "B", text: "Bacillus" },
      { key: "C", text: "Staphylococcus" },
      { key: "D", text: "Streptomyces" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Antibiotik "), B("streptomisin"), P(" dihasilkan "), B("Streptomyces griseus"), P("; banyak antibiotik dari actinomycetes.")],
      [P("Bacillus subtilis menghasilkan basitrasin; E. coli bukan penghasil antibiotik utama.")]
    ],
  },
  {
    no: 150,
    stimulus: [],
    prompt: S("Perhatikan pernyataan berikut.\n(1) Memiliki tubuh buah\n(2) Hifa tidak bersekat (senositik)\n(3) Reproduksi seksual dengan zigospora\nCiri tersebut dimiliki oleh ...."),
    options: [
      { key: "A", text: "Ascomycota" },
      { key: "B", text: "Zygomycota" },
      { key: "C", text: "Basidiomycota" },
      { key: "D", text: "Deuteromycota" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Zygomycota"), P(" (mis. Rhizopus) memiliki hifa "), B("tidak bersekat"), P(", reproduksi seksual membentuk "), B("zigospora"), P(", dan tidak selalu punya tubuh buah.")],
      [P("Ascomycota beraskus, Basidiomycota berbasidium (tubuh buah jelas).")]
    ],
  },
  {
    no: 151,
    stimulus: [],
    prompt: S("Darah yang mengalir pada pembuluh arteri setelah meninggalkan jantung memiliki karakteristik ...."),
    options: [
      { key: "A", text: "tekanan rendah dan berkatup banyak" },
      { key: "B", text: "membawa darah selalu kaya oksigen" },
      { key: "C", text: "tekanan tinggi, dinding tebal elastis, dan membawa darah meninggalkan jantung" },
      { key: "D", text: "aliran darah menuju jantung" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B("Arteri"), P(" membawa darah "), B("meninggalkan jantung"), P(", berdinding tebal elastis, tekanan tinggi, dan tidak berkatup (kecuali di pangkal).")],
      [P("Vena berkatup, tekanan rendah, dan membawa darah menuju jantung.")]
    ],
  },
  {
    no: 152,
    stimulus: [],
    prompt: S("Pada fotosintesis, senyawa yang mengalami reduksi (mengikat H) adalah ...."),
    options: [
      { key: "A", text: "CO₂ menjadi glukosa" },
      { key: "B", text: "H₂O menjadi oksigen" },
      { key: "C", text: "klorofil menjadi klorofil teroksidasi" },
      { key: "D", text: "NADP menjadi NADPH" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Dalam reaksi gelap, "), B("CO₂ direduksi"), P(" menjadi glukosa menggunakan H dari NADPH.")],
      [P("Air teroksidasi (kehilangan elektron) pada reaksi terang; NADP⁺ mengalami reduksi menjadi NADPH.")]
    ],
  },
  {
    no: 153,
    stimulus: [],
    prompt: S("Urutan tahap sintesis protein yang benar adalah ...."),
    options: [
      { key: "A", text: "translasi – transkripsi" },
      { key: "B", text: "transkripsi – translasi" },
      { key: "C", text: "replikasi – transkripsi" },
      { key: "D", text: "translasi – replikasi" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sintesis protein: "), B("transkripsi"), P(" (DNA → mRNA di inti) kemudian "), B("translasi"), P(" (mRNA → protein di ribosom).")],
      [P("Replikasi adalah penggandaan DNA, bukan bagian sintesis protein.")]
    ],
  },
  {
    no: 154,
    stimulus: [],
    prompt: S("Antikodon yang terdapat pada tRNA untuk kodon AUG adalah ...."),
    options: [
      { key: "A", text: "TAC" },
      { key: "B", text: "AUG" },
      { key: "C", text: "UAC" },
      { key: "D", text: "UAG" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Antikodon berpasangan dengan kodon secara komplementer: "), B("AUG → UAC"), P(" (RNA memakai U, bukan T).")],
      [P("Jadi antikodonnya "), B("UAC"), P(".")]
    ],
  },
  {
    no: 155,
    stimulus: [],
    prompt: S("Kelainan karena tubuh tidak mampu membentuk pigmen melanin disebut ...."),
    options: [
      { key: "A", text: "albino" },
      { key: "B", text: "fenilketonuria (PKU)" },
      { key: "C", text: "talasemia" },
      { key: "D", text: "hemofilia" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("Albino"), P(" disebabkan tidak adanya enzim tirosinase sehingga "), B("melanin tidak terbentuk"), P(".")],
      [P("PKU gangguan metabolisme fenilalanin; talasemia kelainan hemoglobin; hemofilia gangguan pembekuan.")]
    ],
  },
  {
    no: 156,
    stimulus: [],
    prompt: S("Jika suatu individu memiliki genotipe AaBb dan gen A dan B berpautan, gamet yang terbentuk tanpa pindah silang adalah ...."),
    options: [
      { key: "A", text: "Ab dan aB" },
      { key: "B", text: "AB, Ab, aB, ab" },
      { key: "C", text: "AB dan ab" },
      { key: "D", text: "hanya AB" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gen berpautan berada pada kromosom sama sehingga diwariskan bersama: gamet "), B("AB dan ab"), P(".")],
      [P("Kombinasi Ab dan aB muncul hanya jika terjadi "), B("pindah silang"), P(".")]
    ],
  },
  {
    no: 157,
    stimulus: [],
    prompt: S("Jaringan meristem pada tumbuhan terdapat di ...."),
    options: [
      { key: "A", text: "daun dan bunga" },
      { key: "B", text: "ujung akar, ujung batang, dan kambium" },
      { key: "C", text: "akar dan buah" },
      { key: "D", text: "xilem dan floem" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Meristem"), P(" adalah jaringan yang aktif membelah, terdapat di "), B("ujung akar, ujung batang (meristem apikal), dan kambium (meristem lateral)"), P(".")],
      [P("Xilem/floem adalah jaringan dewasa (permanen).")]
    ],
  },
  {
    no: 158,
    stimulus: [],
    prompt: S("Tumbuhan kaktus termasuk kelompok tumbuhan CAM. Adaptasi utamanya adalah ...."),
    options: [
      { key: "A", text: "daun lebar untuk fotosintesis maksimal" },
      { key: "B", text: "akar serabut dangkal yang luas" },
      { key: "C", text: "batang tidak berdaging" },
      { key: "D", text: "stomata membuka pada malam hari untuk mengurangi kehilangan air" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Tumbuhan "), B("CAM"), P(" (kaktus, nanas) membuka stomata "), B("malam hari"), P(" saat suhu rendah untuk memfiksasi CO₂, mengurangi transpirasi.")],
      [P("Daun kaktus termodifikasi menjadi duri; batangnya berdaging menyimpan air.")]
    ],
  },
  {
    no: 159,
    stimulus: [],
    prompt: S("Bagian bunga yang berfungsi sebagai alat kelamin jantan adalah ...."),
    options: [
      { key: "A", text: "putik" },
      { key: "B", text: "mahkota" },
      { key: "C", text: "kelopak" },
      { key: "D", text: "benang sari" }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("Benang sari (stamen)"), P(" adalah alat kelamin jantan: menghasilkan serbuk sari.")],
      [P("Putik (pistilum) adalah alat kelamin betina; mahkota dan kelopak adalah perhiasan bunga.")]
    ],
  },
  {
    no: 160,
    stimulus: [],
    prompt: S("Pada percobaan Ingenhousz, gelembung gas yang muncul pada tanaman air yang terkena cahaya adalah ...."),
    options: [
      { key: "A", text: "karbon dioksida (CO₂)" },
      { key: "B", text: "oksigen (O₂)" },
      { key: "C", text: "nitrogen (N₂)" },
      { key: "D", text: "hidrogen (H₂)" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Pada fotosintesis tumbuhan air, gelembung yang dihasilkan adalah "), B("O₂"), P(" dari fotolisis air.")],
      [P("Banyaknya gelembung menunjukkan laju fotosintesis.")]
    ],
  },
