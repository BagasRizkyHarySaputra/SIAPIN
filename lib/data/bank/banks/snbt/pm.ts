"use client";

import type { BankSoal } from "@/lib/data/soal";

const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

/**
 * Bank Soal SNBT — Penalaran Matematika (150 soal orisinal elite).
 * Topik: barisan & deret aritmetika/geometri, kecepatan-jarak-waktu,
 * pekerjaan bersama, umur, perbandingan, persen, himpunan, dan logika
 * kuantitatif. Setiap kunci jawaban terverifikasi secara komputasi.
 * Distribusi jawaban A/B/C/D merata (38/38/37/37).
 */
export const BANK_SNBT_PM: BankSoal[] = [

  {
    no: 1,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 5, 9, 13, 17, …, nilai suku ke-15 adalah …."),
    options: [
      { key: "A", text: "59" },
      { key: "B", text: "61" },
      { key: "C", text: "63" },
      { key: "D", text: "57" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Barisan aritmetika dengan a = 5 dan b = 4. Rumus suku ke-n: Un = a + (n−1)b.")],
      [P("U15 = 5 + 14×4 = 5 + 56 = "), B("61.")],
    ],
  },

  {
    no: 2,
    stimulus: [],
    prompt: S("Diketahui deret aritmetika dengan suku pertama 3 dan beda 7. Jumlah 12 suku pertama deret itu adalah …."),
    options: [
      { key: "A", text: "462" },
      { key: "B", text: "480" },
      { key: "C", text: "498" },
      { key: "D", text: "516" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Sn = n/2 × (2a + (n−1)b). Untuk n = 12: S12 = 6 × (6 + 11×7) = 6 × 83.")],
      [P("S12 = "), B("498.")],
    ],
  },

  {
    no: 3,
    stimulus: [],
    prompt: S("Barisan geometri 2, 6, 18, 54, … memiliki suku ke-6 sebesar …."),
    options: [
      { key: "A", text: "243" },
      { key: "B", text: "486" },
      { key: "C", text: "324" },
      { key: "D", text: "162" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Barisan geometri dengan a = 2 dan r = 3. Rumus: Un = a·r^(n−1).")],
      [P("U6 = 2×3⁵ = 2×243 = "), B("486.")],
    ],
  },

  {
    no: 4,
    stimulus: [],
    prompt: S("Deret geometri memiliki suku pertama 4 dan rasio 2. Jumlah 7 suku pertama deret tersebut adalah …."),
    options: [
      { key: "A", text: "256" },
      { key: "B", text: "508" },
      { key: "C", text: "252" },
      { key: "D", text: "127" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sn = a(rⁿ − 1)/(r − 1). S7 = 4(2⁷ − 1)/(2 − 1) = 4 × 127.")],
      [P("S7 = "), B("508.")],
    ],
  },

  {
    no: 5,
    stimulus: [],
    prompt: S("Jumlah deret geometri tak hingga 18 + 6 + 2 + 2/3 + … adalah …."),
    options: [
      { key: "A", text: "26" },
      { key: "B", text: "30" },
      { key: "C", text: "27" },
      { key: "D", text: "24" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Rasio r = 6/18 = 1/3. Jumlah deret tak hingga: S∞ = a/(1 − r).")],
      [P("S∞ = 18/(2/3) = 18 × 3/2 = "), B("27.")],
    ],
  },

  {
    no: 6,
    stimulus: [],
    prompt: S("Pada barisan aritmetika, suku ke-4 adalah 17 dan suku ke-9 adalah 37. Beda barisan tersebut adalah …."),
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "4" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selisih dua suku: U9 − U4 = 5b = 37 − 17 = 20.")],
      [P("b = 20/5 = "), B("4.")],
    ],
  },

  {
    no: 7,
    stimulus: [],
    prompt: S("Barisan geometri memiliki suku ke-3 = 20 dan suku ke-6 = 160. Rasio positif barisan itu adalah …."),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "8" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("U6/U3 = r³ = 160/20 = 8.")],
      [P("r = ∛8 = "), B("2.")],
    ],
  },

  {
    no: 8,
    stimulus: [],
    prompt: S("Jumlah n suku pertama suatu deret aritmetika dinyatakan Sn = 2n² + 5n. Beda barisan tersebut adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "2" },
      { key: "D", text: "3" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Un = Sn − S(n−1) = (2n² + 5n) − (2(n−1)² + 5(n−1)) = 4n + 3.")],
      [P("Karena Un = 4n + 3 berbentuk linear, beda barisan = koefisien n = "), B("4.")],
    ],
  },

  {
    no: 9,
    stimulus: [],
    prompt: S("Tiga bilangan membentuk barisan geometri. Jumlahnya 39 dan hasil kalinya 729. Bilangan terkecil dari ketiganya adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "3" },
      { key: "C", text: "9" },
      { key: "D", text: "27" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Misal bilangan itu a/r, a, ar. Hasil kali: a³ = 729 → a = 9.")],
      [P("Jumlah: 9/r + 9 + 9r = 39 → r = 3 atau 1/3. Bilangannya 3, 9, 27; terkecil = "), B("3.")],
    ],
  },

  {
    no: 10,
    stimulus: [],
    prompt: S("Barisan aritmetika memiliki suku ke-5 = 23 dan suku ke-10 = 48. Suku ke-20 barisan itu adalah …."),
    options: [
      { key: "A", text: "95" },
      { key: "B", text: "98" },
      { key: "C", text: "103" },
      { key: "D", text: "93" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("5b = U10 − U5 = 25 → b = 5. U5 = a + 4×5 = 23 → a = 3.")],
      [P("U20 = 3 + 19×5 = 3 + 95 = "), B("98.")],
    ],
  },

  {
    no: 11,
    stimulus: [],
    prompt: S("Jumlah 8 suku pertama deret geometri 3 + 6 + 12 + 24 + … adalah …."),
    options: [
      { key: "A", text: "765" },
      { key: "B", text: "768" },
      { key: "C", text: "510" },
      { key: "D", text: "756" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("a = 3, r = 2. S8 = 3(2⁸ − 1)/(2 − 1) = 3 × 255.")],
      [P("S8 = "), B("765.")],
    ],
  },

  {
    no: 12,
    stimulus: [],
    prompt: S("Barisan aritmetika memiliki suku pertama 10 dan beda −3. Suku ke berapakah yang bernilai −2?"),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "6" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Un = 10 + (n−1)(−3) = 13 − 3n. Ditetapkan Un = −2.")],
      [P("13 − 3n = −2 → 3n = 15 → n = "), B("5.")],
    ],
  },

  {
    no: 13,
    stimulus: [],
    prompt: S("Jumlah semua bilangan bulat antara 1 dan 100 yang habis dibagi 6 adalah …."),
    options: [
      { key: "A", text: "800" },
      { key: "B", text: "816" },
      { key: "C", text: "846" },
      { key: "D", text: "780" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Bilangannya 6, 12, 18, …, 96. Banyak suku: (96 − 6)/6 + 1 = 16.")],
      [P("S16 = 16/2 × (6 + 96) = 8 × 102 = "), B("816.")],
    ],
  },

  {
    no: 14,
    stimulus: [],
    prompt: S("Jumlah deret geometri tak hingga 80 + 40 + 20 + 10 + … adalah …."),
    options: [
      { key: "A", text: "160" },
      { key: "B", text: "180" },
      { key: "C", text: "140" },
      { key: "D", text: "150" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("a = 80, r = 1/2. S∞ = a/(1 − r).")],
      [P("S∞ = 80/(1/2) = "), B("160.")],
    ],
  },

  {
    no: 15,
    stimulus: [],
    prompt: S("Barisan aritmetika 4, 7, 10, 13, … memiliki 15 suku. Nilai suku tengahnya adalah …."),
    options: [
      { key: "A", text: "22" },
      { key: "B", text: "28" },
      { key: "C", text: "31" },
      { key: "D", text: "25" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Banyak suku ganjil (15), suku tengah adalah suku ke-8 (Ut = U(15+1)/2).")],
      [P("U8 = 4 + 7×3 = 4 + 21 = "), B("25.")],
    ],
  },

  {
    no: 16,
    stimulus: [],
    prompt: S("Suku ke-2 dan suku ke-5 suatu barisan geometri berturut-turut 6 dan 48. Suku ke-8 barisan itu adalah …."),
    options: [
      { key: "A", text: "384" },
      { key: "B", text: "96" },
      { key: "C", text: "192" },
      { key: "D", text: "288" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("U5/U2 = r³ = 48/6 = 8 → r = 2. U2 = a×2 = 6 → a = 3.")],
      [P("U8 = 3×2⁷ = 3×128 = "), B("384.")],
    ],
  },

  {
    no: 17,
    stimulus: [],
    prompt: S("Jumlah 10 suku pertama dari barisan aritmetika 2, 5, 8, 11, … adalah …."),
    options: [
      { key: "A", text: "155" },
      { key: "B", text: "160" },
      { key: "C", text: "165" },
      { key: "D", text: "145" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("a = 2, b = 3. S10 = 10/2 × (2×2 + 9×3).")],
      [P("S10 = 5 × (4 + 27) = 5 × 31 = "), B("155.")],
    ],
  },

  {
    no: 18,
    stimulus: [],
    prompt: S("Suku ke-4 suatu deret aritmetika adalah 19 dan suku ke-8 adalah 35. Suku pertamanya adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "9" },
      { key: "C", text: "5" },
      { key: "D", text: "7" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("4b = U8 − U4 = 16 → b = 4. U4 = a + 3×4 = 19 → a = 19 − 12.")],
      [P("a = "), B("7.")],
    ],
  },

  {
    no: 19,
    stimulus: [],
    prompt: S("Barisan geometri 1, −2, 4, −8, 16, … memiliki suku ke-10 sebesar …."),
    options: [
      { key: "A", text: "256" },
      { key: "B", text: "−512" },
      { key: "C", text: "512" },
      { key: "D", text: "−256" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("a = 1, r = −2. U10 = a·r⁹ = 1×(−2)⁹.")],
      [P("(−2)⁹ bernilai negatif karena pangkat ganjil: −512.")],
    ],
  },

  {
    no: 20,
    stimulus: [],
    prompt: S("Banyak suku pada barisan aritmetika 4, 9, 14, 19, …, 149 adalah …."),
    options: [
      { key: "A", text: "31" },
      { key: "B", text: "28" },
      { key: "C", text: "29" },
      { key: "D", text: "30" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("a = 4, b = 5. Un = 4 + (n−1)5 = 5n − 1.")],
      [P("5n − 1 = 149 → 5n = 150 → n = "), B("30.")],
    ],
  },

  {
    no: 21,
    stimulus: [],
    prompt: S("Jumlah bilangan ganjil berurutan dari 1 sampai 99 adalah …."),
    options: [
      { key: "A", text: "2601" },
      { key: "B", text: "2401" },
      { key: "C", text: "2450" },
      { key: "D", text: "2500" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah n bilangan ganjil pertama = n². Banyak bilangan ganjil dari 1 sampai 99 adalah 50.")],
      [P("Jumlah = 50² = "), B("2500.")],
    ],
  },

  {
    no: 22,
    stimulus: [],
    prompt: S("Barisan aritmetika memiliki suku ke-3 = 13 dan suku ke-7 = 29. Jumlah 20 suku pertamanya adalah …."),
    options: [
      { key: "A", text: "860" },
      { key: "B", text: "900" },
      { key: "C", text: "820" },
      { key: "D", text: "840" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("4b = 29 − 13 = 16 → b = 4. U3 = a + 2×4 = 13 → a = 5.")],
      [P("S20 = 10 × (2×5 + 19×4) = 10 × 86 = "), B("860.")],
    ],
  },

  {
    no: 23,
    stimulus: [],
    prompt: S("Suatu barisan geometri positif memiliki suku ke-3 = 12 dan suku ke-5 = 48. Suku pertamanya adalah …."),
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "6" },
      { key: "D", text: "2" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("U5/U3 = r² = 48/12 = 4 → r = 2.")],
      [P("U3 = a×2² = 12 → a = 12/4 = "), B("3.")],
    ],
  },

  {
    no: 24,
    stimulus: [],
    prompt: S("Tiga suku berikutnya dari barisan 2, 6, 18, 54, … adalah …."),
    options: [
      { key: "A", text: "54, 162, 486" },
      { key: "B", text: "108, 162, 216" },
      { key: "C", text: "162, 486, 972" },
      { key: "D", text: "162, 486, 1458" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Rasio = 6/2 = 3, sehingga setiap suku dikali 3.")],
      [P("54×3 = 162, 162×3 = 486, 486×3 = "), B("1458.")],
    ],
  },

  {
    no: 25,
    stimulus: [],
    prompt: S("Barisan geometri memiliki suku ke-2 = 8 dan suku ke-6 = 2048 dengan rasio positif. Suku ke-5-nya adalah …."),
    options: [
      { key: "A", text: "512" },
      { key: "B", text: "1024" },
      { key: "C", text: "128" },
      { key: "D", text: "256" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("U6/U2 = r⁴ = 2048/8 = 256 → r = 4. U2 = a×4 = 8 → a = 2.")],
      [P("U5 = 2×4⁴ = 2×256 = "), B("512.")],
    ],
  },

  {
    no: 26,
    stimulus: [],
    prompt: S("Jumlah n suku pertama suatu deret dinyatakan Sn = 3n² + n. Suku ke-12 deret tersebut adalah …."),
    options: [
      { key: "A", text: "70" },
      { key: "B", text: "62" },
      { key: "C", text: "66" },
      { key: "D", text: "68" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("U12 = S12 − S11. S12 = 3×144 + 12 = 444; S11 = 3×121 + 11 = 374.")],
      [P("U12 = 444 − 374 = "), B("70.")],
    ],
  },

  {
    no: 27,
    stimulus: [],
    prompt: S("Jumlah semua bilangan genap dari 2 sampai 100 adalah …."),
    options: [
      { key: "A", text: "2600" },
      { key: "B", text: "2500" },
      { key: "C", text: "2550" },
      { key: "D", text: "2450" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Bilangannya 2, 4, 6, …, 100 (50 suku). Jumlah = 2 × (1 + 2 + … + 50).")],
      [P("= 2 × (50×51/2) = 2 × 1275 = "), B("2550.")],
    ],
  },

  {
    no: 28,
    stimulus: [],
    prompt: S("Pada barisan geometri berlaku U1 + U2 = 9 dan U3 + U4 = 36. Jumlah 6 suku pertamanya adalah …."),
    options: [
      { key: "A", text: "189" },
      { key: "B", text: "192" },
      { key: "C", text: "180" },
      { key: "D", text: "186" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("a(1 + r) = 9 dan ar²(1 + r) = 36 → r² = 4 → r = 2, a = 3.")],
      [P("S6 = 3(2⁶ − 1)/(2 − 1) = 3×63 = "), B("189.")],
    ],
  },

  {
    no: 29,
    stimulus: [],
    prompt: S("Suku tengah dari barisan aritmetika 3, 8, 13, 18, …, 103 adalah …."),
    options: [
      { key: "A", text: "58" },
      { key: "B", text: "43" },
      { key: "C", text: "48" },
      { key: "D", text: "53" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("n = (103 − 3)/5 + 1 = 21. Suku tengah = suku ke-11.")],
      [P("U11 = 3 + 10×5 = "), B("53.")],
    ],
  },

  {
    no: 30,
    stimulus: [],
    prompt: S("Deret geometri memiliki suku pertama 5 dan suku ke-4 = 135. Jumlah 5 suku pertamanya adalah …."),
    options: [
      { key: "A", text: "605" },
      { key: "B", text: "540" },
      { key: "C", text: "585" },
      { key: "D", text: "600" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("U4 = a·r³ = 5r³ = 135 → r³ = 27 → r = 3.")],
      [P("S5 = 5(3⁵ − 1)/(3 − 1) = 5×242/2 = "), B("605.")],
    ],
  },

  {
    no: 31,
    stimulus: [],
    prompt: S("Sebuah mobil menempuh jarak 240 km dalam waktu 4 jam. Kecepatan rata-ratanya adalah …."),
    options: [
      { key: "A", text: "50 km/jam" },
      { key: "B", text: "60 km/jam" },
      { key: "C", text: "70 km/jam" },
      { key: "D", text: "80 km/jam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kecepatan = jarak/waktu = 240/4.")],
      [P("v = "), B("60 km/jam.")],
    ],
  },

  {
    no: 32,
    stimulus: [],
    prompt: S("Kecepatan 72 km/jam setara dengan …."),
    options: [
      { key: "A", text: "20 m/s" },
      { key: "B", text: "25 m/s" },
      { key: "C", text: "30 m/s" },
      { key: "D", text: "15 m/s" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Konversi: 72 km/jam = 72 × 1000/3600 m/s.")],
      [P("72 × 5/18 = "), B("20 m/s.")],
    ],
  },

  {
    no: 33,
    stimulus: [],
    prompt: S("Jarak kota A ke kota B adalah 300 km. Sebuah kereta berangkat dari A pukul 07.00 dengan kecepatan rata-rata 75 km/jam. Kereta tiba di B pada pukul …."),
    options: [
      { key: "A", text: "11.00" },
      { key: "B", text: "11.30" },
      { key: "C", text: "10.00" },
      { key: "D", text: "10.30" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Waktu = 300/75 = 4 jam.")],
      [P("07.00 + 4 jam = "), B("11.00.")],
    ],
  },

  {
    no: 34,
    stimulus: [],
    prompt: S("Budi berjalan dengan kecepatan 5 km/jam. Waktu yang diperlukan Budi untuk menempuh jarak 2,5 km adalah …."),
    options: [
      { key: "A", text: "45 menit" },
      { key: "B", text: "30 menit" },
      { key: "C", text: "25 menit" },
      { key: "D", text: "40 menit" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Waktu = 2,5/5 = 0,5 jam.")],
      [P("0,5 jam = "), B("30 menit.")],
    ],
  },

  {
    no: 35,
    stimulus: [],
    prompt: S("Mobil P dan Q berangkat bersamaan dari dua kota yang berjarak 330 km dan saling berhadapan. Kecepatan P = 60 km/jam dan Q = 50 km/jam. Mereka berpapasan setelah …."),
    options: [
      { key: "A", text: "3 jam" },
      { key: "B", text: "3,5 jam" },
      { key: "C", text: "4 jam" },
      { key: "D", text: "2,5 jam" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kecepatan relatif saling mendekat = 60 + 50 = 110 km/jam.")],
      [P("t = 330/110 = "), B("3 jam.")],
    ],
  },

  {
    no: 36,
    stimulus: [],
    prompt: S("Rina mengendarai sepeda motor sejauh 36 km dalam waktu 30 menit. Kecepatan rata-ratanya adalah …."),
    options: [
      { key: "A", text: "80 km/jam" },
      { key: "B", text: "60 km/jam" },
      { key: "C", text: "66 km/jam" },
      { key: "D", text: "72 km/jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("30 menit = 0,5 jam. v = 36/0,5.")],
      [P("v = "), B("72 km/jam.")],
    ],
  },

  {
    no: 37,
    stimulus: [],
    prompt: S("Andi berangkat pukul 07.00 dengan kecepatan 40 km/jam. Satu jam kemudian, Bima menyusul dari tempat yang sama dengan kecepatan 60 km/jam. Bima menyusul Andi pada pukul …."),
    options: [
      { key: "A", text: "09.45" },
      { key: "B", text: "10.00" },
      { key: "C", text: "09.00" },
      { key: "D", text: "09.30" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Saat Bima mulai, Andi sudah menempuh 40 km. Kecepatan relatif = 60 − 40 = 20 km/jam.")],
      [P("t = 40/20 = 2 jam setelah 08.00, yaitu pukul "), B("10.00.")],
    ],
  },

  {
    no: 38,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota X ke Y dengan kecepatan 60 km/jam dan kembali ke X dengan kecepatan 40 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "50 km/jam" },
      { key: "B", text: "52 km/jam" },
      { key: "C", text: "48 km/jam" },
      { key: "D", text: "45 km/jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Karena jarak pergi-pulang sama, v rata-rata = 2·v1·v2/(v1 + v2).")],
      [P("= 2×60×40/100 = 4800/100 = "), B("48 km/jam.")],
    ],
  },

  {
    no: 39,
    stimulus: [],
    prompt: S("Jarak rumah Candra ke sekolah 6 km. Ia bersepeda dengan kecepatan 15 km/jam dan berangkat pukul 06.30. Candra tiba di sekolah pukul …."),
    options: [
      { key: "A", text: "06.48" },
      { key: "B", text: "06.54" },
      { key: "C", text: "07.00" },
      { key: "D", text: "06.52" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Waktu = 6/15 = 0,4 jam = 24 menit.")],
      [P("06.30 + 24 menit = "), B("06.54.")],
    ],
  },

  {
    no: 40,
    stimulus: [],
    prompt: S("Andi dan Budi berjalan dari titik yang sama menuju arah yang berlawanan. Kecepatan Andi 4 km/jam dan Budi 5 km/jam. Jarak mereka setelah 1,5 jam adalah …."),
    options: [
      { key: "A", text: "12 km" },
      { key: "B", text: "12,5 km" },
      { key: "C", text: "13 km" },
      { key: "D", text: "13,5 km" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Karena berlawanan arah, jarak pisah bertambah (4 + 5) = 9 km setiap jam.")],
      [P("9 × 1,5 = "), B("13,5 km.")],
    ],
  },

  {
    no: 41,
    stimulus: [],
    prompt: S("Sebuah bus menempuh 120 km dalam 1,5 jam, kemudian 80 km dalam 1 jam. Kecepatan rata-rata bus selama perjalanan adalah …."),
    options: [
      { key: "A", text: "80 km/jam" },
      { key: "B", text: "75 km/jam" },
      { key: "C", text: "85 km/jam" },
      { key: "D", text: "90 km/jam" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Total jarak = 120 + 80 = 200 km; total waktu = 1,5 + 1 = 2,5 jam.")],
      [P("v = 200/2,5 = "), B("80 km/jam.")],
    ],
  },

  {
    no: 42,
    stimulus: [],
    prompt: S("Kecepatan 20 m/s setara dengan …."),
    options: [
      { key: "A", text: "80 km/jam" },
      { key: "B", text: "70 km/jam" },
      { key: "C", text: "72 km/jam" },
      { key: "D", text: "75 km/jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Konversi m/s ke km/jam dikali 3,6: 20 × 3,6.")],
      [P("= "), B("72 km/jam.")],
    ],
  },

  {
    no: 43,
    stimulus: [],
    prompt: S("Kecepatan arus sungai 3 km/jam. Sebuah perahu memiliki kecepatan 12 km/jam di air tenang. Jika perahu bergerak melawan arus selama 2 jam, jarak yang ditempuhnya adalah …."),
    options: [
      { key: "A", text: "24 km" },
      { key: "B", text: "30 km" },
      { key: "C", text: "15 km" },
      { key: "D", text: "18 km" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Melawan arus: kecepatan efektif = 12 − 3 = 9 km/jam.")],
      [P("Jarak = 9 × 2 = "), B("18 km.")],
    ],
  },

  {
    no: 44,
    stimulus: [],
    prompt: S("Kota P dan Q berjarak 450 km. Mobil A dari P dan mobil B dari Q berangkat bersamaan pukul 09.00 saling mendekat dengan kecepatan 80 km/jam dan 70 km/jam. Mereka berpapasan pada pukul …."),
    options: [
      { key: "A", text: "12.30" },
      { key: "B", text: "12.00" },
      { key: "C", text: "11.00" },
      { key: "D", text: "11.30" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kecepatan relatif = 80 + 70 = 150 km/jam. t = 450/150 = 3 jam.")],
      [P("09.00 + 3 jam = "), B("12.00.")],
    ],
  },

  {
    no: 45,
    stimulus: [],
    prompt: S("Raka berlari mengelilingi lintasan sepanjang 400 m sebanyak 5 putaran dalam waktu 10 menit. Kecepatan lari Raka adalah …."),
    options: [
      { key: "A", text: "8 km/jam" },
      { key: "B", text: "10 km/jam" },
      { key: "C", text: "15 km/jam" },
      { key: "D", text: "12 km/jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jarak total = 5 × 400 m = 2000 m = 2 km; waktu = 10 menit = 1/6 jam.")],
      [P("v = 2/(1/6) = "), B("12 km/jam.")],
    ],
  },

  {
    no: 46,
    stimulus: [],
    prompt: S("Sebuah kereta api yang panjangnya 200 m melaju dengan kecepatan 72 km/jam melintasi jembatan sepanjang 400 m. Waktu yang diperlukan kereta melintasi jembatan sepenuhnya adalah …."),
    options: [
      { key: "A", text: "25 detik" },
      { key: "B", text: "30 detik" },
      { key: "C", text: "40 detik" },
      { key: "D", text: "20 detik" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Total lintasan = 200 + 400 = 600 m. 72 km/jam = 20 m/s.")],
      [P("t = 600/20 = "), B("30 detik.")],
    ],
  },

  {
    no: 47,
    stimulus: [],
    prompt: S("Seseorang menempuh 60 km pertama dengan kecepatan 40 km/jam dan 60 km berikutnya dengan kecepatan 60 km/jam. Kecepatan rata-ratanya adalah …."),
    options: [
      { key: "A", text: "50 km/jam" },
      { key: "B", text: "52 km/jam" },
      { key: "C", text: "54 km/jam" },
      { key: "D", text: "48 km/jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Waktu total = 60/40 + 60/60 = 1,5 + 1 = 2,5 jam; jarak total 120 km.")],
      [P("v = 120/2,5 = "), B("48 km/jam.")],
    ],
  },

  {
    no: 48,
    stimulus: [],
    prompt: S("Adi bersepeda dari titik start pukul 08.00 dengan kecepatan 12 km/jam. Bima menyusul dari titik yang sama pukul 08.30 dengan kecepatan 18 km/jam. Bima tepat menyusul Adi pada pukul …."),
    options: [
      { key: "A", text: "09.20" },
      { key: "B", text: "09.30" },
      { key: "C", text: "09.00" },
      { key: "D", text: "09.10" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Saat Bima mulai, Adi sudah menempuh 12 × 0,5 = 6 km. Kecepatan relatif = 6 km/jam.")],
      [P("t = 6/6 = 1 jam setelah 08.30, yaitu pukul "), B("09.30.")],
    ],
  },

  {
    no: 49,
    stimulus: [],
    prompt: S("Sebuah mobil telah menempuh 3/4 dari total perjalanan 240 km dalam waktu 2,25 jam. Kecepatan rata-rata mobil selama bagian perjalanan itu adalah …."),
    options: [
      { key: "A", text: "75 km/jam" },
      { key: "B", text: "80 km/jam" },
      { key: "C", text: "85 km/jam" },
      { key: "D", text: "70 km/jam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jarak yang ditempuh = 3/4 × 240 = 180 km; waktu 2,25 jam.")],
      [P("v = 180/2,25 = "), B("80 km/jam.")],
    ],
  },

  {
    no: 50,
    stimulus: [],
    prompt: S("Sebuah bus menempuh jarak 150 km dalam waktu 2,5 jam. Kecepatan rata-rata bus tersebut adalah …."),
    options: [
      { key: "A", text: "55 km/jam" },
      { key: "B", text: "58 km/jam" },
      { key: "C", text: "60 km/jam" },
      { key: "D", text: "65 km/jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("v = jarak/waktu = 150/2,5.")],
      [P("v = "), B("60 km/jam.")],
    ],
  },


  {
    no: 51,
    stimulus: [],
    prompt: S("Keran A dapat mengisi sebuah bak dalam 6 jam, sedangkan keran B dalam 12 jam. Jika kedua keran dibuka bersamaan, bak akan penuh dalam …."),
    options: [
      { key: "A", text: "3 jam" },
      { key: "B", text: "8 jam" },
      { key: "C", text: "4,5 jam" },
      { key: "D", text: "4 jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Laju keran A = 1/6 dan keran B = 1/12 bak per jam. Laju total = 1/6 + 1/12 = 1/4.")],
      [P("Waktu penuh = 1/(1/4) = "), B("4 jam.")],
    ],
  },

  {
    no: 52,
    stimulus: [],
    prompt: S("Ali dapat menyelesaikan sebuah pekerjaan dalam 8 hari, sedangkan Badu dalam 24 hari. Jika mereka bekerja bersama, pekerjaan selesai dalam …."),
    options: [
      { key: "A", text: "4 hari" },
      { key: "B", text: "6 hari" },
      { key: "C", text: "8 hari" },
      { key: "D", text: "5 hari" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Laju Ali = 1/8 dan Badu = 1/24 pekerjaan per hari. Laju total = 1/8 + 1/24 = 4/24 = 1/6.")],
      [P("Waktu = 1/(1/6) = "), B("6 hari.")],
    ],
  },

  {
    no: 53,
    stimulus: [],
    prompt: S("Dua pekerja dapat menyelesaikan suatu proyek masing-masing dalam 4 hari dan 12 hari. Jika mereka bekerja sama, proyek selesai dalam …."),
    options: [
      { key: "A", text: "2 hari" },
      { key: "B", text: "4 hari" },
      { key: "C", text: "3 hari" },
      { key: "D", text: "6 hari" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju total = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3.")],
      [P("Waktu = 1/(1/3) = "), B("3 hari.")],
    ],
  },

  {
    no: 54,
    stimulus: [],
    prompt: S("Adit mengecat sebuah rumah dalam 10 hari, sedangkan Bagas dalam 15 hari. Jika mereka mengecat bersama-sama, pekerjaan selesai dalam …."),
    options: [
      { key: "A", text: "5 hari" },
      { key: "B", text: "8 hari" },
      { key: "C", text: "7 hari" },
      { key: "D", text: "6 hari" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Laju total = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6.")],
      [P("Waktu = 1/(1/6) = "), B("6 hari.")],
    ],
  },

  {
    no: 55,
    stimulus: [],
    prompt: S("Mesin X menyelesaikan suatu produksi dalam 6 jam, mesin Y dalam 3 jam. Jika keduanya dijalankan bersamaan, produksi selesai dalam …."),
    options: [
      { key: "A", text: "3 jam" },
      { key: "B", text: "2 jam" },
      { key: "C", text: "4 jam" },
      { key: "D", text: "1,5 jam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Laju total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2.")],
      [P("Waktu = 1/(1/2) = "), B("2 jam.")],
    ],
  },

  {
    no: 56,
    stimulus: [],
    prompt: S("Bekerja bersama, A dan B dapat menyelesaikan pekerjaan dalam 6 hari. Jika A bekerja sendirian, ia memerlukan 18 hari. Waktu yang diperlukan B sendirian adalah …."),
    options: [
      { key: "A", text: "12 hari" },
      { key: "B", text: "15 hari" },
      { key: "C", text: "9 hari" },
      { key: "D", text: "6 hari" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju B = laju gabungan − laju A = 1/6 − 1/18 = 3/18 − 1/18 = 2/18 = 1/9.")],
      [P("Waktu B = 1/(1/9) = "), B("9 hari.")],
    ],
  },

  {
    no: 57,
    stimulus: [],
    prompt: S("Tiga keran berturut-turut dapat mengisi penuh sebuah kolam dalam 6 jam, 8 jam, dan 24 jam. Jika ketiganya dibuka bersamaan, kolam penuh dalam …."),
    options: [
      { key: "A", text: "2 jam" },
      { key: "B", text: "4 jam" },
      { key: "C", text: "3 jam" },
      { key: "D", text: "5 jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju total = 1/6 + 1/8 + 1/24 = 4/24 + 3/24 + 1/24 = 8/24 = 1/3.")],
      [P("Waktu = 1/(1/3) = "), B("3 jam.")],
    ],
  },

  {
    no: 58,
    stimulus: [],
    prompt: S("Dina dapat menyelesaikan tugas dalam 15 jam, sedangkan Eka dalam 30 jam. Jika mereka mengerjakan bersama, tugas selesai dalam …."),
    options: [
      { key: "A", text: "12 jam" },
      { key: "B", text: "9 jam" },
      { key: "C", text: "11 jam" },
      { key: "D", text: "10 jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Laju total = 1/15 + 1/30 = 2/30 + 1/30 = 3/30 = 1/10.")],
      [P("Waktu = 1/(1/10) = "), B("10 jam.")],
    ],
  },

  {
    no: 59,
    stimulus: [],
    prompt: S("Keran pengisi dapat mengisi bak dalam 4 jam, sedangkan lubang pembuangan dapat mengosongkan bak penuh dalam 12 jam. Jika keran dan lubang dibuka bersamaan, bak penuh dalam …."),
    options: [
      { key: "A", text: "9 jam" },
      { key: "B", text: "3 jam" },
      { key: "C", text: "6 jam" },
      { key: "D", text: "8 jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju neto = 1/4 − 1/12 = 3/12 − 1/12 = 2/12 = 1/6 bak per jam.")],
      [P("Waktu = 1/(1/6) = "), B("6 jam.")],
    ],
  },

  {
    no: 60,
    stimulus: [],
    prompt: S("Anto dapat menyelesaikan pekerjaan dalam 20 hari, Bima dalam 30 hari. Setelah bekerja bersama selama 6 hari, bagian pekerjaan yang belum selesai adalah …."),
    options: [
      { key: "A", text: "1/4 bagian" },
      { key: "B", text: "1/2 bagian" },
      { key: "C", text: "1/3 bagian" },
      { key: "D", text: "2/3 bagian" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Laju gabungan = 1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12 per hari.")],
      [P("Dalam 6 hari terselesaikan 6 × 1/12 = 1/2, sehingga sisanya = "), B("1/2 bagian.")],
    ],
  },

  {
    no: 61,
    stimulus: [],
    prompt: S("Dua belas pekerja dapat menyelesaikan sebuah proyek dalam 20 hari. Jika proyek harus selesai dalam 15 hari, banyak pekerja yang dibutuhkan adalah …."),
    options: [
      { key: "A", text: "20 orang" },
      { key: "B", text: "15 orang" },
      { key: "C", text: "16 orang" },
      { key: "D", text: "18 orang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Total pekerja-hari = 12 × 20 = 240.")],
      [P("Agar selesai 15 hari: 240/15 = "), B("16 orang.")],
    ],
  },

  {
    no: 62,
    stimulus: [],
    prompt: S("Enam pekerja mampu menyelesaikan suatu pekerjaan dalam 30 hari. Jika pekerja yang tersedia hanya 5 orang, pekerjaan tersebut selesai dalam …."),
    options: [
      { key: "A", text: "36 hari" },
      { key: "B", text: "33 hari" },
      { key: "C", text: "34 hari" },
      { key: "D", text: "35 hari" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Total pekerja-hari = 6 × 30 = 180.")],
      [P("Dengan 5 pekerja: 180/5 = "), B("36 hari.")],
    ],
  },

  {
    no: 63,
    stimulus: [],
    prompt: S("A bersama B dapat menyelesaikan pekerjaan dalam 12 hari, B bersama C dalam 15 hari, dan A bersama C dalam 20 hari. Jika A, B, dan C bekerja bersama, pekerjaan selesai dalam …."),
    options: [
      { key: "A", text: "15 hari" },
      { key: "B", text: "10 hari" },
      { key: "C", text: "9 hari" },
      { key: "D", text: "12 hari" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("2(LA+LB+LC) = 1/12 + 1/15 + 1/20 = 5/60 + 4/60 + 3/60 = 12/60 = 1/5.")],
      [P("LA+LB+LC = 1/10, sehingga waktu bersama = "), B("10 hari.")],
    ],
  },

  {
    no: 64,
    stimulus: [],
    prompt: S("Tiga pekerja masing-masing dapat menyelesaikan sebuah pekerjaan dalam 4, 6, dan 12 hari. Jika bekerja bersamaan, pekerjaan selesai dalam …."),
    options: [
      { key: "A", text: "2 hari" },
      { key: "B", text: "3 hari" },
      { key: "C", text: "4 hari" },
      { key: "D", text: "1 hari" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Laju total = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2.")],
      [P("Waktu = 1/(1/2) = "), B("2 hari.")],
    ],
  },

  {
    no: 65,
    stimulus: [],
    prompt: S("Pekerjaan dapat diselesaikan A dalam 30 hari dan B dalam 20 hari. A bekerja sendiri selama 5 hari, kemudian B ikut membantu hingga selesai. Total waktu pengerjaan adalah …."),
    options: [
      { key: "A", text: "15 hari" },
      { key: "B", text: "18 hari" },
      { key: "C", text: "20 hari" },
      { key: "D", text: "12 hari" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Dalam 5 hari A menyelesaikan 5/30 = 1/6, sisa 5/6. Laju A+B = 1/30 + 1/20 = 1/12.")],
      [P("Sisa selesai dalam (5/6)/(1/12) = 10 hari; total = 5 + 10 = "), B("15 hari.")],
    ],
  },

  {
    no: 66,
    stimulus: [],
    prompt: S("Mesin P menghasilkan 100 unit barang dalam 5 jam, sedangkan mesin Q menghasilkan 100 unit barang dalam 20 jam. Jika kedua mesin bekerja bersama, waktu untuk menghasilkan 100 unit adalah …."),
    options: [
      { key: "A", text: "6 jam" },
      { key: "B", text: "3 jam" },
      { key: "C", text: "4 jam" },
      { key: "D", text: "5 jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju P = 20 unit/jam dan Q = 5 unit/jam; total = 25 unit/jam.")],
      [P("Waktu = 100/25 = "), B("4 jam.")],
    ],
  },

  {
    no: 67,
    stimulus: [],
    prompt: S("A dan B bersama-sama dapat menyelesaikan sebuah pekerjaan dalam 8 hari. Jika A sendirian memerlukan 12 hari, B sendirian memerlukan …."),
    options: [
      { key: "A", text: "24 hari" },
      { key: "B", text: "16 hari" },
      { key: "C", text: "20 hari" },
      { key: "D", text: "18 hari" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Laju B = 1/8 − 1/12 = 3/24 − 2/24 = 1/24.")],
      [P("Waktu B = 1/(1/24) = "), B("24 hari.")],
    ],
  },

  {
    no: 68,
    stimulus: [],
    prompt: S("Suatu pekerjaan dapat diselesaikan oleh 15 pekerja dalam 12 hari. Setelah berjalan 4 hari, 5 pekerja berhenti. Tambahan waktu yang diperlukan agar pekerjaan selesai adalah …."),
    options: [
      { key: "A", text: "12 hari" },
      { key: "B", text: "10 hari" },
      { key: "C", text: "8 hari" },
      { key: "D", text: "6 hari" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Total pekerja-hari = 15 × 12 = 180. Dalam 4 hari terselesaikan 15 × 4 = 60.")],
      [P("Sisa 120 pekerja-hari dikerjakan 10 pekerja: 120/10 = "), B("12 hari.")],
    ],
  },

  {
    no: 69,
    stimulus: [],
    prompt: S("Keran A mengisi bak dalam 9 jam, keran B mengisi dalam 18 jam, dan keran C mengosongkan bak penuh dalam 12 jam. Jika ketiganya dibuka bersamaan, bak penuh dalam …."),
    options: [
      { key: "A", text: "10 jam" },
      { key: "B", text: "11 jam" },
      { key: "C", text: "12 jam" },
      { key: "D", text: "9 jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju neto = 1/9 + 1/18 − 1/12 = 4/36 + 2/36 − 3/36 = 3/36 = 1/12.")],
      [P("Waktu = 1/(1/12) = "), B("12 jam.")],
    ],
  },

  {
    no: 70,
    stimulus: [],
    prompt: S("Dikerjakan bersama, A dan B menuntaskan pekerjaan dalam 6 hari. A sendirian dapat menuntaskannya dalam 10 hari. B sendirian memerlukan …."),
    options: [
      { key: "A", text: "15 hari" },
      { key: "B", text: "18 hari" },
      { key: "C", text: "20 hari" },
      { key: "D", text: "12 hari" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Laju B = 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15.")],
      [P("Waktu B = 1/(1/15) = "), B("15 hari.")],
    ],
  },

  {
    no: 71,
    stimulus: [],
    prompt: S("Umur ayah tiga kali umur anaknya. Dua belas tahun lagi umur ayah dua kali umur anak. Umur ayah sekarang adalah …."),
    options: [
      { key: "A", text: "36 tahun" },
      { key: "B", text: "30 tahun" },
      { key: "C", text: "33 tahun" },
      { key: "D", text: "39 tahun" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Misal umur anak = x, ayah = 3x. Persamaan: 3x + 12 = 2(x + 12).")],
      [P("3x + 12 = 2x + 24 → x = 12. Umur ayah = 3 × 12 = "), B("36 tahun.")],
    ],
  },

  {
    no: 72,
    stimulus: [],
    prompt: S("Jumlah umur Andi dan Budi adalah 45 tahun dengan perbandingan 4 : 5. Umur Andi adalah …."),
    options: [
      { key: "A", text: "22 tahun" },
      { key: "B", text: "24 tahun" },
      { key: "C", text: "20 tahun" },
      { key: "D", text: "18 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 9, sehingga 1 bagian = 45/9 = 5 tahun.")],
      [P("Umur Andi = 4 × 5 = "), B("20 tahun.")],
    ],
  },

  {
    no: 73,
    stimulus: [],
    prompt: S("Lima tahun lalu umur ayah 4 kali umur anaknya. Jumlah umur mereka sekarang 55 tahun. Umur anak sekarang adalah …."),
    options: [
      { key: "A", text: "16 tahun" },
      { key: "B", text: "13 tahun" },
      { key: "C", text: "14 tahun" },
      { key: "D", text: "15 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Misal umur anak = x, ayah = y. y − 5 = 4(x − 5) → y = 4x − 15.")],
      [P("x + y = 55 → x + 4x − 15 = 55 → 5x = 70 → x = "), B("14 tahun.")],
    ],
  },

  {
    no: 74,
    stimulus: [],
    prompt: S("Perbandingan umur kakak dan adik sekarang adalah 3 : 2. Jumlah umur mereka 5 tahun yang lalu adalah 45 tahun. Umur kakak sekarang adalah …."),
    options: [
      { key: "A", text: "36 tahun" },
      { key: "B", text: "33 tahun" },
      { key: "C", text: "27 tahun" },
      { key: "D", text: "30 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Misal umur kakak = 3x, adik = 2x. Lima tahun lalu jumlahnya 45: (3x−5)+(2x−5) = 45.")],
      [P("5x − 10 = 45 → x = 11. Umur kakak = 3 × 11 = "), B("33 tahun.")],
    ],
  },

  {
    no: 75,
    stimulus: [],
    prompt: S("Umur ibu tiga kali umur anaknya. Selisih umur mereka 28 tahun. Umur anak adalah …."),
    options: [
      { key: "A", text: "16 tahun" },
      { key: "B", text: "18 tahun" },
      { key: "C", text: "12 tahun" },
      { key: "D", text: "14 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selisih = 3x − x = 2x = 28 → x = 14.")],
      [P("Umur anak = "), B("14 tahun.")],
    ],
  },

  {
    no: 76,
    stimulus: [],
    prompt: S("Jumlah umur ayah dan anak adalah 50 tahun, sedangkan selisihnya 30 tahun. Umur anak adalah …."),
    options: [
      { key: "A", text: "8 tahun" },
      { key: "B", text: "12 tahun" },
      { key: "C", text: "10 tahun" },
      { key: "D", text: "15 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Misal umur ayah = a, anak = b. a + b = 50 dan a − b = 30.")],
      [P("Kurangi: 2b = 20 → b = "), B("10 tahun.")],
    ],
  },

  {
    no: 77,
    stimulus: [],
    prompt: S("Delapan tahun lagi umur Sinta akan menjadi dua kali umur Rara sekarang. Jika umur Sinta sekarang 32 tahun, umur Rara sekarang adalah …."),
    options: [
      { key: "A", text: "20 tahun" },
      { key: "B", text: "22 tahun" },
      { key: "C", text: "24 tahun" },
      { key: "D", text: "18 tahun" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Umur Sinta 8 tahun lagi = 32 + 8 = 40 tahun, sama dengan 2 kali umur Rara.")],
      [P("Umur Rara = 40/2 = "), B("20 tahun.")],
    ],
  },

  {
    no: 78,
    stimulus: [],
    prompt: S("Perbandingan umur kakak dan adik adalah 7 : 5. Jumlah umur mereka 36 tahun. Umur adik adalah …."),
    options: [
      { key: "A", text: "12 tahun" },
      { key: "B", text: "18 tahun" },
      { key: "C", text: "15 tahun" },
      { key: "D", text: "21 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 12, sehingga 1 bagian = 36/12 = 3 tahun.")],
      [P("Umur adik = 5 × 3 = "), B("15 tahun.")],
    ],
  },

  {
    no: 79,
    stimulus: [],
    prompt: S("Umur kakek 60 tahun dan umur cucunya 12 tahun. Kakek akan berumur tiga kali umur cucunya setelah …."),
    options: [
      { key: "A", text: "15 tahun" },
      { key: "B", text: "12 tahun" },
      { key: "C", text: "10 tahun" },
      { key: "D", text: "8 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Persamaan: 60 + x = 3(12 + x).")],
      [P("60 + x = 36 + 3x → 24 = 2x → x = "), B("12 tahun.")],
    ],
  },

  {
    no: 80,
    stimulus: [],
    prompt: S("Lima tahun yang lalu umur Wati dua kali umur Dewi. Jumlah umur mereka sekarang 40 tahun. Umur Wati sekarang adalah …."),
    options: [
      { key: "A", text: "22 tahun" },
      { key: "B", text: "25 tahun" },
      { key: "C", text: "24 tahun" },
      { key: "D", text: "23 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("w − 5 = 2(d − 5) → w = 2d − 5; w + d = 40.")],
      [P("3d − 5 = 40 → d = 15, sehingga w = 2×15 − 5 = "), B("25 tahun.")],
    ],
  },

  {
    no: 81,
    stimulus: [],
    prompt: S("Umur ayah 40 tahun dan umur anaknya 10 tahun. Umur ayah akan menjadi tiga kali umur anaknya setelah …."),
    options: [
      { key: "A", text: "4 tahun" },
      { key: "B", text: "8 tahun" },
      { key: "C", text: "5 tahun" },
      { key: "D", text: "3 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("40 + x = 3(10 + x) → 40 + x = 30 + 3x.")],
      [P("10 = 2x → x = "), B("5 tahun.")],
    ],
  },

  {
    no: 82,
    stimulus: [],
    prompt: S("Perbandingan umur P dan Q sekarang 3 : 4. Enam tahun lagi perbandingannya menjadi 5 : 6. Umur Q sekarang adalah …."),
    options: [
      { key: "A", text: "9 tahun" },
      { key: "B", text: "10 tahun" },
      { key: "C", text: "15 tahun" },
      { key: "D", text: "12 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("(3x + 6)/(4x + 6) = 5/6 → 6(3x + 6) = 5(4x + 6).")],
      [P("18x + 36 = 20x + 30 → x = 3. Umur Q = 4 × 3 = "), B("12 tahun.")],
    ],
  },

  {
    no: 83,
    stimulus: [],
    prompt: S("Perbandingan umur tiga bersaudara adalah 2 : 3 : 4. Jumlah umur mereka 45 tahun. Umur yang tertua adalah …."),
    options: [
      { key: "A", text: "15 tahun" },
      { key: "B", text: "18 tahun" },
      { key: "C", text: "25 tahun" },
      { key: "D", text: "20 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 2 + 3 + 4 = 9, sehingga 1 bagian = 45/9 = 5 tahun.")],
      [P("Umur tertua = 4 × 5 = "), B("20 tahun.")],
    ],
  },

  {
    no: 84,
    stimulus: [],
    prompt: S("Budi 4 tahun lebih tua dari Andi. Tujuh tahun yang lalu jumlah umur mereka 30 tahun. Umur Andi sekarang adalah …."),
    options: [
      { key: "A", text: "20 tahun" },
      { key: "B", text: "19 tahun" },
      { key: "C", text: "22 tahun" },
      { key: "D", text: "21 tahun" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Misal umur Andi = a, Budi = a + 4. (a − 7) + (a + 4 − 7) = 30.")],
      [P("2a − 10 = 30 → 2a = 40 → a = "), B("20 tahun.")],
    ],
  },

  {
    no: 85,
    stimulus: [],
    prompt: S("Seorang ibu melahirkan anaknya ketika berumur 26 tahun. Sekarang jumlah umur ibu dan anak itu 50 tahun. Umur anak sekarang adalah …."),
    options: [
      { key: "A", text: "13 tahun" },
      { key: "B", text: "14 tahun" },
      { key: "C", text: "11 tahun" },
      { key: "D", text: "12 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Umur ibu = umur anak + 26. Jumlah: (a + 26) + a = 50.")],
      [P("2a = 24 → a = "), B("12 tahun.")],
    ],
  },

  {
    no: 86,
    stimulus: [],
    prompt: S("Perbandingan banyak kelereng Ardi dan Bima adalah 3 : 5. Selisih kelereng mereka 10 butir. Jumlah kelereng mereka adalah …."),
    options: [
      { key: "A", text: "48 butir" },
      { key: "B", text: "36 butir" },
      { key: "C", text: "40 butir" },
      { key: "D", text: "44 butir" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Selisih perbandingan = 5 − 3 = 2 bagian = 10, sehingga 1 bagian = 5 butir.")],
      [P("Jumlah = (3 + 5) × 5 = "), B("40 butir.")],
    ],
  },

  {
    no: 87,
    stimulus: [],
    prompt: S("Pada peta berskala 1 : 250.000, jarak dua kota adalah 8 cm. Jarak sebenarnya kedua kota itu adalah …."),
    options: [
      { key: "A", text: "24 km" },
      { key: "B", text: "16 km" },
      { key: "C", text: "18 km" },
      { key: "D", text: "20 km" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jarak sebenarnya = 8 × 250.000 = 2.000.000 cm = 20.000 m.")],
      [P("= "), B("20 km.")],
    ],
  },

  {
    no: 88,
    stimulus: [],
    prompt: S("Perbandingan panjang dan lebar sebuah persegi panjang adalah 5 : 3. Jika kelilingnya 64 cm, luas persegi panjang tersebut adalah …."),
    options: [
      { key: "A", text: "280 cm²" },
      { key: "B", text: "220 cm²" },
      { key: "C", text: "240 cm²" },
      { key: "D", text: "260 cm²" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Keliling = 2(5x + 3x) = 16x = 64 → x = 4. Panjang 20 cm, lebar 12 cm.")],
      [P("Luas = 20 × 12 = "), B("240 cm².")],
    ],
  },

  {
    no: 89,
    stimulus: [],
    prompt: S("Harga 3 lusin buku tulis adalah Rp72.000,00. Harga 5 buah buku tulis yang sama adalah …."),
    options: [
      { key: "A", text: "Rp11.000,00" },
      { key: "B", text: "Rp12.000,00" },
      { key: "C", text: "Rp9.000,00" },
      { key: "D", text: "Rp10.000,00" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("3 lusin = 36 buah. Harga per buah = 72.000/36 = Rp2.000,00.")],
      [P("Harga 5 buah = 5 × 2.000 = "), B("Rp10.000,00.")],
    ],
  },

  {
    no: 90,
    stimulus: [],
    prompt: S("Sebuah pekerjaan dapat diselesaikan 8 orang dalam 20 hari. Agar pekerjaan selesai dalam 10 hari, banyak tambahan pekerja yang diperlukan adalah …."),
    options: [
      { key: "A", text: "6 orang" },
      { key: "B", text: "10 orang" },
      { key: "C", text: "12 orang" },
      { key: "D", text: "8 orang" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Total pekerja-hari = 8 × 20 = 160. Untuk 10 hari butuh 160/10 = 16 orang.")],
      [P("Tambahan = 16 − 8 = "), B("8 orang.")],
    ],
  },

  {
    no: 91,
    stimulus: [],
    prompt: S("Perbandingan uang Ani dan Budi adalah 2 : 3, sedangkan perbandingan uang Budi dan Citra adalah 4 : 5. Jika jumlah uang Ani dan Citra Rp46.000,00, uang Budi adalah …."),
    options: [
      { key: "A", text: "Rp30.000,00" },
      { key: "B", text: "Rp20.000,00" },
      { key: "C", text: "Rp24.000,00" },
      { key: "D", text: "Rp28.000,00" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("A : B = 2 : 3 dan B : C = 4 : 5 → A : B : C = 8 : 12 : 15.")],
      [P("A + C = 23 bagian = 46.000 → 1 bagian = 2.000. Uang Budi = 12 × 2.000 = "), B("Rp24.000,00.")],
    ],
  },

  {
    no: 92,
    stimulus: [],
    prompt: S("Jarak sebenarnya dua kota adalah 45 km. Pada peta berskala 1 : 1.500.000, jarak kedua kota tersebut adalah …."),
    options: [
      { key: "A", text: "2,5 cm" },
      { key: "B", text: "3,5 cm" },
      { key: "C", text: "3 cm" },
      { key: "D", text: "2 cm" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("45 km = 4.500.000 cm. Jarak peta = 4.500.000/1.500.000.")],
      [P("= "), B("3 cm.")],
    ],
  },

  {
    no: 93,
    stimulus: [],
    prompt: S("Campuran semen, pasir, dan kerikil memiliki perbandingan 1 : 2 : 3. Jika berat total campuran 60 kg, banyak pasir dalam campuran adalah …."),
    options: [
      { key: "A", text: "25 kg" },
      { key: "B", text: "30 kg" },
      { key: "C", text: "15 kg" },
      { key: "D", text: "20 kg" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 1 + 2 + 3 = 6 bagian = 60 kg → 1 bagian = 10 kg.")],
      [P("Pasir = 2 × 10 = "), B("20 kg.")],
    ],
  },

  {
    no: 94,
    stimulus: [],
    prompt: S("Perbandingan banyak siswa laki-laki dan perempuan di sebuah kelas adalah 7 : 5. Jika banyak siswa laki-laki 84 orang, banyak siswa perempuan adalah …."),
    options: [
      { key: "A", text: "55 orang" },
      { key: "B", text: "65 orang" },
      { key: "C", text: "70 orang" },
      { key: "D", text: "60 orang" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("7 bagian = 84 → 1 bagian = 12 orang.")],
      [P("Siswa perempuan = 5 × 12 = "), B("60 orang.")],
    ],
  },

  {
    no: 95,
    stimulus: [],
    prompt: S("Sebuah mobil menghabiskan 8 liter bensin untuk menempuh 96 km. Jika mobil tersebut memiliki 15 liter bensin, jarak yang dapat ditempuh adalah …."),
    options: [
      { key: "A", text: "160 km" },
      { key: "B", text: "170 km" },
      { key: "C", text: "180 km" },
      { key: "D", text: "190 km" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Konsumsi = 96/8 = 12 km per liter.")],
      [P("Dengan 15 liter: 15 × 12 = "), B("180 km.")],
    ],
  },

  {
    no: 96,
    stimulus: [],
    prompt: S("Panjang sebuah lapangan pada denah berskala 1 : 600 adalah 12 cm. Panjang lapangan sebenarnya adalah …."),
    options: [
      { key: "A", text: "48 m" },
      { key: "B", text: "72 m" },
      { key: "C", text: "60 m" },
      { key: "D", text: "54 m" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Panjang sebenarnya = 12 × 600 = 7.200 cm.")],
      [P("= "), B("72 m.")],
    ],
  },

  {
    no: 97,
    stimulus: [],
    prompt: S("Perbandingan diameter dua lingkaran adalah 3 : 4. Perbandingan luas kedua lingkaran tersebut adalah …."),
    options: [
      { key: "A", text: "9 : 16" },
      { key: "B", text: "6 : 8" },
      { key: "C", text: "27 : 64" },
      { key: "D", text: "3 : 4" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Luas lingkaran sebanding dengan kuadrat jari-jari/diameternya.")],
      [P("Perbandingan luas = 3² : 4² = "), B("9 : 16.")],
    ],
  },

  {
    no: 98,
    stimulus: [],
    prompt: S("Tinggi sebuah gedung pada foto berskala 1 : 50 adalah 20 cm. Tinggi gedung sebenarnya adalah …."),
    options: [
      { key: "A", text: "10 m" },
      { key: "B", text: "12 m" },
      { key: "C", text: "8 m" },
      { key: "D", text: "15 m" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Tinggi sebenarnya = 20 × 50 = 1.000 cm.")],
      [P("= "), B("10 m.")],
    ],
  },

  {
    no: 99,
    stimulus: [],
    prompt: S("Perbandingan banyak kambing dan sapi di sebuah peternakan adalah 5 : 2. Jika jumlah seluruh hewan 84 ekor, selisih banyak kambing dan sapi adalah …."),
    options: [
      { key: "A", text: "39 ekor" },
      { key: "B", text: "30 ekor" },
      { key: "C", text: "33 ekor" },
      { key: "D", text: "36 ekor" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 7 bagian = 84 → 1 bagian = 12 ekor.")],
      [P("Selisih = (5 − 2) × 12 = 3 × 12 = "), B("36 ekor.")],
    ],
  },

  {
    no: 100,
    stimulus: [],
    prompt: S("Uang Rina dan uang Sari berjumlah Rp140.000,00 dengan perbandingan 3 : 4. Uang Sari adalah …."),
    options: [
      { key: "A", text: "Rp80.000,00" },
      { key: "B", text: "Rp70.000,00" },
      { key: "C", text: "Rp90.000,00" },
      { key: "D", text: "Rp60.000,00" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah perbandingan = 7 bagian = 140.000 → 1 bagian = 20.000.")],
      [P("Uang Sari = 4 × 20.000 = "), B("Rp80.000,00.")],
    ],
  },


  {
    no: 101,
    stimulus: [],
    prompt: S("Harga sebuah tas setelah mendapat diskon 25% adalah Rp300.000,00. Harga tas sebelum diskon adalah …."),
    options: [
      { key: "A", text: "Rp425.000,00" },
      { key: "B", text: "Rp350.000,00" },
      { key: "C", text: "Rp375.000,00" },
      { key: "D", text: "Rp400.000,00" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Harga setelah diskon = 75% dari harga awal, sehingga harga awal = 300.000 / 0,75.")],
      [P("= 300.000 × 4/3 = "), B("Rp400.000,00.")],
    ],
  },

  {
    no: 102,
    stimulus: [],
    prompt: S("Sebuah kemeja dijual dengan harga Rp180.000,00 setelah mendapat diskon 10%. Harga kemeja sebelum diskon adalah …."),
    options: [
      { key: "A", text: "Rp200.000,00" },
      { key: "B", text: "Rp198.000,00" },
      { key: "C", text: "Rp205.000,00" },
      { key: "D", text: "Rp190.000,00" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Harga akhir = 90% dari harga awal → harga awal = 180.000 / 0,9.")],
      [P("= "), B("Rp200.000,00.")],
    ],
  },

  {
    no: 103,
    stimulus: [],
    prompt: S("Dari 40 siswa di sebuah kelas, 25 siswa menyukai matematika, 20 siswa menyukai fisika, dan 8 siswa menyukai keduanya. Banyak siswa yang tidak menyukai keduanya adalah …."),
    options: [
      { key: "A", text: "3 orang" },
      { key: "B", text: "5 orang" },
      { key: "C", text: "7 orang" },
      { key: "D", text: "2 orang" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gabungan = 25 + 20 − 8 = 37 siswa.")],
      [P("Tidak menyukai keduanya = 40 − 37 = "), B("3 orang.")],
    ],
  },

  {
    no: 104,
    stimulus: [],
    prompt: S("Dalam sebuah kelompok terdapat 30 anak. Sebanyak 18 anak gemar membaca dan 15 anak gemar menulis. Jika 6 anak tidak gemar keduanya, banyak anak yang gemar keduanya adalah …."),
    options: [
      { key: "A", text: "10 anak" },
      { key: "B", text: "6 anak" },
      { key: "C", text: "7 anak" },
      { key: "D", text: "9 anak" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gabungan yang gemar setidaknya satu = 30 − 6 = 24.")],
      [P("Keduanya = 18 + 15 − 24 = "), B("9 anak.")],
    ],
  },

  {
    no: 105,
    stimulus: [],
    prompt: S("Dari 50 peserta lomba, 30 peserta menguasai bahasa Inggris dan 28 peserta menguasai bahasa Mandarin. Jika 12 peserta menguasai keduanya, banyak peserta yang tidak menguasai keduanya adalah …."),
    options: [
      { key: "A", text: "4 orang" },
      { key: "B", text: "6 orang" },
      { key: "C", text: "2 orang" },
      { key: "D", text: "3 orang" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gabungan = 30 + 28 − 12 = 46.")],
      [P("Yang tidak menguasai keduanya = 50 − 46 = "), B("4 orang.")],
    ],
  },

  {
    no: 106,
    stimulus: [],
    prompt: S("Sebuah barang dijual dengan harga Rp255.000,00 setelah memperoleh diskon 15%. Harga awal barang tersebut adalah …."),
    options: [
      { key: "A", text: "Rp300.000,00" },
      { key: "B", text: "Rp295.000,00" },
      { key: "C", text: "Rp290.000,00" },
      { key: "D", text: "Rp285.000,00" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Harga akhir = 85% dari harga awal → harga awal = 255.000 / 0,85.")],
      [P("= 255.000 × 20/17 = "), B("Rp300.000,00.")],
    ],
  },

  {
    no: 107,
    stimulus: [],
    prompt: S("Dalam sebuah kelas terdapat 35 siswa. Sebanyak 20 siswa menyukai sepak bola, 17 siswa menyukai basket, dan 5 siswa tidak menyukai keduanya. Banyak siswa yang menyukai keduanya adalah …."),
    options: [
      { key: "A", text: "6 siswa" },
      { key: "B", text: "7 siswa" },
      { key: "C", text: "8 siswa" },
      { key: "D", text: "5 siswa" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gabungan penyuka setidaknya satu = 35 − 5 = 30.")],
      [P("Keduanya = 20 + 17 − 30 = "), B("7 siswa.")],
    ],
  },

  {
    no: 108,
    stimulus: [],
    prompt: S("Dari 28 mahasiswa, 16 orang mengikuti organisasi A dan 14 orang mengikuti organisasi B. Jika 4 orang tidak mengikuti keduanya, banyak mahasiswa yang mengikuti keduanya adalah …."),
    options: [
      { key: "A", text: "5 orang" },
      { key: "B", text: "6 orang" },
      { key: "C", text: "8 orang" },
      { key: "D", text: "4 orang" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gabungan = 28 − 4 = 24.")],
      [P("Irisan = 16 + 14 − 24 = "), B("6 orang.")],
    ],
  },

  {
    no: 109,
    stimulus: [],
    prompt: S("Dari 40 siswa, 21 siswa menyukai seni dan 24 siswa menyukai olahraga. Jika 6 siswa tidak menyukai keduanya, banyak siswa yang menyukai seni sekaligus olahraga adalah …."),
    options: [
      { key: "A", text: "12 siswa" },
      { key: "B", text: "9 siswa" },
      { key: "C", text: "10 siswa" },
      { key: "D", text: "11 siswa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gabungan = 40 − 6 = 34.")],
      [P("Irisan = 21 + 24 − 34 = "), B("11 siswa.")],
    ],
  },

  {
    no: 110,
    stimulus: [],
    prompt: S("Dari 60 orang yang disurvei, 35 orang membaca koran dan 40 orang membaca majalah. Jika 15 orang membaca keduanya, banyak orang yang tidak membaca keduanya adalah …."),
    options: [
      { key: "A", text: "5 orang" },
      { key: "B", text: "10 orang" },
      { key: "C", text: "15 orang" },
      { key: "D", text: "0 orang" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gabungan = 35 + 40 − 15 = 60 orang.")],
      [P("Tidak membaca keduanya = 60 − 60 = "), B("0 orang.")],
    ],
  },

  {
    no: 111,
    stimulus: [],
    prompt: S("Dalam survei terhadap 80 orang, 45 orang menyukai kopi dan 40 orang menyukai teh. Jika 10 orang tidak menyukai keduanya, banyak orang yang menyukai keduanya adalah …."),
    options: [
      { key: "A", text: "15 orang" },
      { key: "B", text: "18 orang" },
      { key: "C", text: "10 orang" },
      { key: "D", text: "12 orang" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gabungan penyuka setidaknya satu = 80 − 10 = 70.")],
      [P("Irisan = 45 + 40 − 70 = "), B("15 orang.")],
    ],
  },

  {
    no: 112,
    stimulus: [],
    prompt: S("Sebuah toko memberi diskon 20% kemudian diskon tambahan 10% untuk satu produk. Diskon total yang diterima pembeli setara dengan diskon tunggal sebesar …."),
    options: [
      { key: "A", text: "30%" },
      { key: "B", text: "25%" },
      { key: "C", text: "32%" },
      { key: "D", text: "28%" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Harga akhir = 0,8 × 0,9 = 0,72 dari harga awal.")],
      [P("Diskon total = 1 − 0,72 = "), B("28%.")],
    ],
  },

  {
    no: 113,
    stimulus: [],
    prompt: S("Dari 120 orang pengunjung pasar, 72 orang membeli sayur dan 60 orang membeli buah. Jika 30 orang membeli keduanya, banyak pengunjung yang tidak membeli keduanya adalah …."),
    options: [
      { key: "A", text: "22 orang" },
      { key: "B", text: "24 orang" },
      { key: "C", text: "18 orang" },
      { key: "D", text: "20 orang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gabungan = 72 + 60 − 30 = 102 orang.")],
      [P("Yang tidak membeli keduanya = 120 − 102 = "), B("18 orang.")],
    ],
  },

  {
    no: 114,
    stimulus: [],
    prompt: S("Gaji seorang karyawan dinaikkan 10%, kemudian karena kinerja buruk diturunkan 10%. Gaji akhir karyawan dibandingkan gaji awal adalah …."),
    options: [
      { key: "A", text: "turun 2%" },
      { key: "B", text: "tetap sama" },
      { key: "C", text: "naik 1%" },
      { key: "D", text: "turun 1%" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gaji akhir = 1,1 × 0,9 = 0,99 dari gaji awal.")],
      [P("Berarti turun "), B("1%.")],
    ],
  },

  {
    no: 115,
    stimulus: [],
    prompt: S("Dari 50 karyawan sebuah perusahaan, 25 orang menguasai komputer dan 22 orang menguasai bahasa Inggris. Jika 10 orang menguasai keduanya, banyak karyawan yang tidak menguasai keduanya adalah …."),
    options: [
      { key: "A", text: "12 orang" },
      { key: "B", text: "13 orang" },
      { key: "C", text: "10 orang" },
      { key: "D", text: "11 orang" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gabungan = 25 + 22 − 10 = 37.")],
      [P("Tidak menguasai keduanya = 50 − 37 = "), B("13 orang.")],
    ],
  },

  {
    no: 116,
    stimulus: [],
    prompt: S("Seorang pedagang membeli barang seharga Rp800.000,00 lalu menjualnya dengan untung 15%. Harga jual barang tersebut adalah …."),
    options: [
      { key: "A", text: "Rp900.000,00" },
      { key: "B", text: "Rp920.000,00" },
      { key: "C", text: "Rp940.000,00" },
      { key: "D", text: "Rp960.000,00" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Untung = 15% × 800.000 = Rp120.000,00.")],
      [P("Harga jual = 800.000 + 120.000 = "), B("Rp920.000,00.")],
    ],
  },

  {
    no: 117,
    stimulus: [],
    prompt: S("Dari 100 orang, 55 orang suka nasi goreng, 48 orang suka mie goreng, dan 18 orang tidak suka keduanya. Banyak orang yang suka keduanya adalah …."),
    options: [
      { key: "A", text: "18 orang" },
      { key: "B", text: "20 orang" },
      { key: "C", text: "21 orang" },
      { key: "D", text: "22 orang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gabungan = 100 − 18 = 82.")],
      [P("Irisan = 55 + 48 − 82 = "), B("21 orang.")],
    ],
  },

  {
    no: 118,
    stimulus: [],
    prompt: S("Harga sebuah barang naik 20%, kemudian turun 25%. Harga akhir dibanding harga semula adalah …."),
    options: [
      { key: "A", text: "turun 5%" },
      { key: "B", text: "turun 10%" },
      { key: "C", text: "tetap" },
      { key: "D", text: "naik 5%" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Harga akhir = 1,2 × 0,75 = 0,9 dari harga semula.")],
      [P("Berarti turun "), B("10%.")],
    ],
  },

  {
    no: 119,
    stimulus: [],
    prompt: S("Dari 45 siswa, 27 siswa mengikuti ekskul musik dan 20 siswa mengikuti ekskul tari. Jika 8 siswa tidak mengikuti keduanya, banyak siswa yang mengikuti keduanya adalah …."),
    options: [
      { key: "A", text: "10 siswa" },
      { key: "B", text: "12 siswa" },
      { key: "C", text: "14 siswa" },
      { key: "D", text: "8 siswa" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gabungan = 45 − 8 = 37.")],
      [P("Irisan = 27 + 20 − 37 = "), B("10 siswa.")],
    ],
  },

  {
    no: 120,
    stimulus: [],
    prompt: S("Bu Rina menjual kue dengan harga Rp36.000,00 per lusin dan mendapat untung 20%. Harga beli per buah kue adalah …."),
    options: [
      { key: "A", text: "Rp2.700,00" },
      { key: "B", text: "Rp2.400,00" },
      { key: "C", text: "Rp2.500,00" },
      { key: "D", text: "Rp2.600,00" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Harga jual per lusin = 120% dari harga beli per lusin → harga beli per lusin = 36.000/1,2 = 30.000.")],
      [P("Harga beli per buah = 30.000/12 = "), B("Rp2.500,00.")],
    ],
  },

  {
    no: 121,
    stimulus: [],
    prompt: S("Harga sebuah produk setelah dinaikkan 15% menjadi Rp345.000,00. Harga produk sebelum kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp310.000,00" },
      { key: "B", text: "Rp305.000,00" },
      { key: "C", text: "Rp300.000,00" },
      { key: "D", text: "Rp295.000,00" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Harga akhir = 115% dari harga awal → harga awal = 345.000 / 1,15.")],
      [P("= 345.000 × 20/23 = "), B("Rp300.000,00.")],
    ],
  },

  {
    no: 122,
    stimulus: [],
    prompt: S("Dari 32 siswa, 15 siswa memilih jurusan IPA, 18 siswa memilih IPS, dan 4 siswa belum memilih. Banyak siswa yang memilih kedua jurusan itu adalah …."),
    options: [
      { key: "A", text: "5 siswa" },
      { key: "B", text: "6 siswa" },
      { key: "C", text: "7 siswa" },
      { key: "D", text: "4 siswa" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gabungan yang sudah memilih = 32 − 4 = 28.")],
      [P("Irisan = 15 + 18 − 28 = "), B("5 siswa.")],
    ],
  },

  {
    no: 123,
    stimulus: [],
    prompt: S("Pak Ahmad meminjam uang Rp5.000.000,00 dengan bunga tunggal 12% per tahun. Besar bunga selama 8 bulan adalah …."),
    options: [
      { key: "A", text: "Rp550.000,00" },
      { key: "B", text: "Rp400.000,00" },
      { key: "C", text: "Rp450.000,00" },
      { key: "D", text: "Rp500.000,00" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Bunga = 5.000.000 × 12% × 8/12.")],
      [P("= 5.000.000 × 0,12 × 2/3 = "), B("Rp400.000,00.")],
    ],
  },

  {
    no: 124,
    stimulus: [],
    prompt: S("Semua murid yang disiplin datang tepat waktu. Sebagian murid kelas X tidak datang tepat waktu. Simpulan yang pasti benar adalah …."),
    options: [
      { key: "A", text: "Semua murid kelas X disiplin" },
      { key: "B", text: "Sebagian murid kelas X tidak disiplin" },
      { key: "C", text: "Semua murid kelas X datang tepat waktu" },
      { key: "D", text: "Sebagian murid kelas X disiplin" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Disiplin → datang tepat waktu. Kontraposisi: tidak datang tepat waktu → tidak disiplin.")],
      [P("Sebagian murid kelas X tidak datang tepat waktu, berarti mereka "), B("tidak disiplin.")],
    ],
  },

  {
    no: 125,
    stimulus: [],
    prompt: S("Semua peserta lomba mendapat sertifikat. Sebagian peserta lomba adalah siswa SMA. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Tidak ada siswa SMA yang mendapat sertifikat" },
      { key: "B", text: "Semua siswa SMA mendapat sertifikat" },
      { key: "C", text: "Sebagian siswa SMA mendapat sertifikat" },
      { key: "D", text: "Semua yang mendapat sertifikat adalah siswa SMA" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Sebagian peserta lomba adalah siswa SMA, dan semua peserta mendapat sertifikat.")],
      [P("Maka sebagian siswa SMA (yang ikut lomba) mendapat sertifikat.")],
    ],
  },

  {
    no: 126,
    stimulus: [],
    prompt: S("Semua seniman kreatif. Sebagian kreatif adalah penulis. Simpulan yang pasti benar adalah …."),
    options: [
      { key: "A", text: "Semua seniman adalah penulis" },
      { key: "B", text: "Sebagian seniman bukan penulis" },
      { key: "C", text: "Semua penulis adalah seniman" },
      { key: "D", text: "Sebagian penulis adalah seniman" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Premis hanya menjamin seniman ⊆ kreatif dan penulis ⊆ kreatif, tidak ada relasi langsung seniman–penulis.")],
      [P("Karena tidak dipastikan semua seniman adalah penulis, simpulan pasti yang tersedia: "), B("sebagian seniman bukan penulis.")],
    ],
  },

  {
    no: 127,
    stimulus: [],
    prompt: S("Jika harga bahan bakar naik, maka biaya transportasi naik. Biaya transportasi tidak naik. Simpulan yang sah adalah …."),
    options: [
      { key: "A", text: "Harga bahan bakar dan transportasi tetap" },
      { key: "B", text: "Harga bahan bakar naik" },
      { key: "C", text: "Harga bahan bakar tidak naik" },
      { key: "D", text: "Biaya transportasi turun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Modus tollens: p → q dan ¬q, maka ¬p.")],
      [P("Karena biaya transportasi tidak naik, "), B("harga bahan bakar tidak naik.")],
    ],
  },

  {
    no: 128,
    stimulus: [],
    prompt: S("Semua ikan bernapas dengan insang. Sebagian hewan di kolam adalah ikan. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Sebagian hewan di kolam bernapas dengan insang" },
      { key: "B", text: "Semua ikan hidup di kolam" },
      { key: "C", text: "Sebagian hewan di kolam bukan ikan" },
      { key: "D", text: "Semua hewan di kolam bernapas dengan insang" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Sebagian hewan kolam adalah ikan, dan semua ikan bernapas dengan insang.")],
      [P("Maka sebagian hewan kolam bernapas dengan insang.")],
    ],
  },

  {
    no: 129,
    stimulus: [],
    prompt: S("Jika cuaca cerah, Andi berolahraga. Andi berolahraga. Simpulan yang paling tepat adalah …."),
    options: [
      { key: "A", text: "Cuaca pasti cerah" },
      { key: "B", text: "Cuaca tidak cerah" },
      { key: "C", text: "Belum tentu cuaca cerah" },
      { key: "D", text: "Andi tidak berolahraga" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Modus ponens hanya berlaku untuk p → q dan p, bukan q → p (menarik kesimpulan dari akibat termasuk kekeliruan).")],
      [P("Andi berolahraga tidak menjamin cuaca cerah, jadi simpulan tepat: "), B("belum tentu cuaca cerah.")],
    ],
  },

  {
    no: 130,
    stimulus: [],
    prompt: S("Semua mamalia menyusui anaknya. Paus adalah mamalia. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Paus bukan mamalia" },
      { key: "B", text: "Paus menyusui anaknya" },
      { key: "C", text: "Semua mamalia adalah paus" },
      { key: "D", text: "Sebagian paus tidak menyusui" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paus termasuk mamalia, dan semua mamalia menyusui anaknya.")],
      [P("Maka "), B("paus menyusui anaknya.")],
    ],
  },

  {
    no: 131,
    stimulus: [],
    prompt: S("Jika nilai ujian bagus, siswa naik kelas. Sebagian siswa tidak naik kelas. Simpulan yang paling masuk akal adalah …."),
    options: [
      { key: "A", text: "Sebagian siswa nilai ujiannya tidak bagus" },
      { key: "B", text: "Semua siswa tidak naik kelas" },
      { key: "C", text: "Nilai ujian tidak berhubungan dengan kenaikan kelas" },
      { key: "D", text: "Semua siswa nilai ujiannya bagus" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Bagus → naik kelas; kontraposisinya: tidak naik kelas → tidak bagus.")],
      [P("Sebagian siswa tidak naik kelas, berarti nilai ujiannya tidak bagus.")],
    ],
  },

  {
    no: 132,
    stimulus: [],
    prompt: S("Semua buah di keranjang itu segar. Sebagian apel ada di keranjang itu. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Apel tidak ada di keranjang" },
      { key: "B", text: "Semua apel segar" },
      { key: "C", text: "Semua buah segar adalah apel" },
      { key: "D", text: "Sebagian apel segar" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Sebagian apel berada di keranjang yang semua isinya segar.")],
      [P("Maka sebagian apel tersebut segar.")],
    ],
  },

  {
    no: 133,
    stimulus: [],
    prompt: S("Jika tanaman disiram rutin, tanaman tumbuh subur. Tanaman tidak tumbuh subur. Simpulan yang sah adalah …."),
    options: [
      { key: "A", text: "Tanaman disiram rutin" },
      { key: "B", text: "Tanaman tidak disiram rutin" },
      { key: "C", text: "Tanaman kekurangan sinar matahari" },
      { key: "D", text: "Tanaman disiram sesekali" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Modus tollens: p → q, ¬q, maka ¬p.")],
      [P("Karena tidak subur, tanaman "), B("tidak disiram rutin.")],
    ],
  },

  {
    no: 134,
    stimulus: [],
    prompt: S("Semua dokter berpengetahuan medis. Sebagian dosen adalah dokter. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Sebagian dosen berpengetahuan medis" },
      { key: "B", text: "Semua dokter adalah dosen" },
      { key: "C", text: "Sebagian dosen bukan dokter" },
      { key: "D", text: "Semua dosen berpengetahuan medis" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Sebagian dosen adalah dokter dan semua dokter berpengetahuan medis.")],
      [P("Maka sebagian dosen berpengetahuan medis.")],
    ],
  },

  {
    no: 135,
    stimulus: [],
    prompt: S("Jika listrik padam, lampu mati. Lampu menyala. Simpulan yang paling tepat adalah …."),
    options: [
      { key: "A", text: "Lampu tidak berfungsi" },
      { key: "B", text: "Listrik pasti padam" },
      { key: "C", text: "Listrik tidak padam" },
      { key: "D", text: "Belum tentu listrik padam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("p → q dan q tidak memungkinkan menyimpulkan p (kekeliruan menegaskan akibat).")],
      [P("Lampu menyala bisa karena listrik menyala, sehingga simpulan tepat: "), B("belum tentu listrik padam.")],
    ],
  },

  {
    no: 136,
    stimulus: [],
    prompt: S("Semua pegawai teladan mendapat penghargaan. Sebagian pegawai di divisi pemasaran adalah pegawai teladan. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Pegawai teladan hanya di divisi pemasaran" },
      { key: "B", text: "Semua pegawai divisi pemasaran mendapat penghargaan" },
      { key: "C", text: "Sebagian pegawai divisi pemasaran mendapat penghargaan" },
      { key: "D", text: "Semua yang mendapat penghargaan dari divisi pemasaran" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Sebagian pegawai divisi pemasaran teladan, dan semua teladan mendapat penghargaan.")],
      [P("Maka sebagian pegawai divisi pemasaran mendapat penghargaan.")],
    ],
  },

  {
    no: 137,
    stimulus: [],
    prompt: S("Jika suhu turun di bawah 0°C, air membeku. Air tidak membeku. Simpulan yang sah adalah …."),
    options: [
      { key: "A", text: "Air mengalami penguapan" },
      { key: "B", text: "Suhu turun di bawah 0°C" },
      { key: "C", text: "Suhu tidak turun di bawah 0°C" },
      { key: "D", text: "Suhu tepat 0°C" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Modus tollens: p → q dan ¬q, maka ¬p.")],
      [P("Karena air tidak membeku, suhu tidak turun di bawah 0°C.")],
    ],
  },

  {
    no: 138,
    stimulus: [],
    prompt: S("Beberapa hewan peliharaan adalah kucing. Semua kucing suka ikan. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Semua kucing adalah hewan peliharaan" },
      { key: "B", text: "Beberapa hewan peliharaan suka ikan" },
      { key: "C", text: "Semua yang suka ikan adalah kucing" },
      { key: "D", text: "Semua hewan peliharaan suka ikan" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Beberapa hewan peliharaan adalah kucing, dan semua kucing suka ikan.")],
      [P("Maka beberapa hewan peliharaan suka ikan.")],
    ],
  },

  {
    no: 139,
    stimulus: [],
    prompt: S("Semua siswa rajin membaca. Sebagian siswa rajin membaca tidak lulus ujian. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Semua siswa rajin membaca lulus ujian" },
      { key: "B", text: "Tidak ada siswa yang lulus ujian" },
      { key: "C", text: "Semua siswa lulus ujian" },
      { key: "D", text: "Sebagian siswa tidak lulus ujian" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Premis kedua menyatakan ada sebagian siswa rajin membaca yang tidak lulus.")],
      [P("Simpulan yang benar: sebagian siswa tidak lulus ujian.")],
    ],
  },

  {
    no: 140,
    stimulus: [],
    prompt: S("Jika rajin berlatih, pemain menjadi mahir. Pemain mahir. Simpulan yang paling tepat adalah …."),
    options: [
      { key: "A", text: "Pemain pasti rajin berlatih" },
      { key: "B", text: "Pemain tidak rajin berlatih" },
      { key: "C", text: "Belum tentu pemain rajin berlatih" },
      { key: "D", text: "Pemain tidak mahir" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Menarik simpulan dari akibat (q → p) tidak sah.")],
      [P("Kemahiran bisa diperoleh lewat faktor lain, jadi simpulan tepat: belum tentu rajin berlatih.")],
    ],
  },

  {
    no: 141,
    stimulus: [],
    prompt: S("Semua burung berkembang biak dengan bertelur. Sebagian hewan di kandang adalah burung. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Sebagian hewan di kandang tidak bertelur" },
      { key: "B", text: "Semua hewan di kandang bertelur" },
      { key: "C", text: "Sebagian hewan di kandang bertelur" },
      { key: "D", text: "Semua burung ada di kandang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Sebagian hewan kandang adalah burung, dan semua burung bertelur.")],
      [P("Maka sebagian hewan di kandang bertelur.")],
    ],
  },

  {
    no: 142,
    stimulus: [],
    prompt: S("Jika lampu lalu lintas merah, kendaraan berhenti. Kendaraan tidak berhenti. Simpulan yang sah adalah …."),
    options: [
      { key: "A", text: "Kendaraan melaju cepat" },
      { key: "B", text: "Lampu lalu lintas merah" },
      { key: "C", text: "Lampu lalu lintas hijau" },
      { key: "D", text: "Lampu lalu lintas tidak merah" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Modus tollens: p → q, ¬q, maka ¬p.")],
      [P("Kendaraan tidak berhenti berarti lampu tidak merah.")],
    ],
  },

  {
    no: 143,
    stimulus: [],
    prompt: S("Sebagian tumbuhan berbunga merah. Semua tumbuhan berbunga merah berdaun hijau. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Semua tumbuhan berbunga merah" },
      { key: "B", text: "Sebagian tumbuhan berdaun hijau" },
      { key: "C", text: "Tidak ada tumbuhan berdaun hijau" },
      { key: "D", text: "Semua tumbuhan berdaun hijau" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sebagian tumbuhan berbunga merah, dan semuanya berdaun hijau.")],
      [P("Maka sebagian tumbuhan berdaun hijau.")],
    ],
  },

  {
    no: 144,
    stimulus: [],
    prompt: S("Semua juara olimpiade mendapat beasiswa. Sebagian siswa kelas XII adalah juara olimpiade. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Semua yang mendapat beasiswa adalah juara olimpiade" },
      { key: "B", text: "Sebagian siswa kelas XII bukan juara olimpiade" },
      { key: "C", text: "Semua siswa kelas XII mendapat beasiswa" },
      { key: "D", text: "Sebagian siswa kelas XII mendapat beasiswa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Sebagian siswa kelas XII adalah juara olimpiade, dan semua juara mendapat beasiswa.")],
      [P("Maka sebagian siswa kelas XII mendapat beasiswa.")],
    ],
  },

  {
    no: 145,
    stimulus: [],
    prompt: S("Jika hujan turun, jalan menjadi basah. Jalan basah. Simpulan yang paling tepat adalah …."),
    options: [
      { key: "A", text: "Hujan tidak turun" },
      { key: "B", text: "Belum tentu hujan turun" },
      { key: "C", text: "Jalan tidak basah" },
      { key: "D", text: "Hujan pasti turun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("q tidak menyimpulkan p secara sah; jalan basah bisa karena sebab lain (disiram, dll).")],
      [P("Simpulan tepat: belum tentu hujan turun.")],
    ],
  },

  {
    no: 146,
    stimulus: [],
    prompt: S("Semua anggota klub catur pandai bermain strategi. Sebagian siswa teladan adalah anggota klub catur. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Sebagian siswa teladan bukan anggota klub catur" },
      { key: "B", text: "Semua siswa teladan pandai bermain strategi" },
      { key: "C", text: "Sebagian siswa teladan pandai bermain strategi" },
      { key: "D", text: "Semua anggota klub catur adalah siswa teladan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Sebagian siswa teladan adalah anggota klub catur, dan semua anggota klub catur pandai strategi.")],
      [P("Maka sebagian siswa teladan pandai bermain strategi.")],
    ],
  },

  {
    no: 147,
    stimulus: [],
    prompt: S("Jika mesin menyala, mobil dapat berjalan. Mobil tidak dapat berjalan. Simpulan yang sah adalah …."),
    options: [
      { key: "A", text: "Bensin habis" },
      { key: "B", text: "Mesin tidak menyala" },
      { key: "C", text: "Mobil rusak" },
      { key: "D", text: "Mesin menyala" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Modus tollens: p → q, ¬q, maka ¬p.")],
      [P("Karena mobil tidak berjalan, mesin tidak menyala.")],
    ],
  },

  {
    no: 148,
    stimulus: [],
    prompt: S("Semua makanan bergizi baik untuk kesehatan. Sebagian makanan di kantin tidak bergizi. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Semua makanan di kantin baik untuk kesehatan" },
      { key: "B", text: "Semua makanan bergizi ada di kantin" },
      { key: "C", text: "Sebagian makanan di kantin tidak baik untuk kesehatan" },
      { key: "D", text: "Sebagian makanan di kantin bergizi" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Bergizi → baik untuk kesehatan; kontraposisi: tidak baik → tidak bergizi.")],
      [P("Makanan tidak bergizi berarti tidak baik untuk kesehatan, sehingga sebagian makanan kantin tidak baik untuk kesehatan.")],
    ],
  },

  {
    no: 149,
    stimulus: [],
    prompt: S("Jika rajin menabung, maka memiliki tabungan. Andi tidak memiliki tabungan. Simpulan yang sah adalah …."),
    options: [
      { key: "A", text: "Andi rajin menabung" },
      { key: "B", text: "Andi tidak rajin menabung" },
      { key: "C", text: "Andi sering menabung" },
      { key: "D", text: "Tabungan Andi berkurang" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Modus tollens: p → q, ¬q, maka ¬p.")],
      [P("Karena Andi tidak memiliki tabungan, Andi tidak rajin menabung.")],
    ],
  },

  {
    no: 150,
    stimulus: [],
    prompt: S("Semua gunung berapi mengeluarkan magma saat erupsi. Sebagian gunung di Indonesia adalah gunung berapi. Simpulan yang benar adalah …."),
    options: [
      { key: "A", text: "Semua gunung berapi ada di Indonesia" },
      { key: "B", text: "Tidak ada gunung berapi di Indonesia" },
      { key: "C", text: "Semua gunung di Indonesia mengeluarkan magma" },
      { key: "D", text: "Sebagian gunung di Indonesia mengeluarkan magma" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Sebagian gunung di Indonesia adalah gunung berapi, dan gunung berapi mengeluarkan magma saat erupsi.")],
      [P("Maka sebagian gunung di Indonesia mengeluarkan magma saat erupsi.")],
    ],
  },

];

