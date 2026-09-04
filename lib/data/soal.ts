"use client";

/** Bank soal dummy untuk halaman pengerjaan (20 soal / paket).
 *  Q5 = soal Pak Budi persis seperti screenshot. Sisanya soal pendek
 *  orisinal (SMP) dengan jawaban + pembahasan yang sudah dicek. */

export interface SoalSeg {
  t: string;
  b?: boolean;
}

export interface Pilihan {
  key: "A" | "B" | "C" | "D";
  text: string;
}

export interface BankSoal {
  no: number;
  stimulus: string[];
  prompt: SoalSeg[];
  options: Pilihan[];
  answer: "A" | "B" | "C" | "D";
  explanationTitle: string;
  explanation: SoalSeg[][];
}

const S = (t: string): SoalSeg[] => [{ t }];
const B = (t: string): SoalSeg => ({ t, b: true });
const P = (t: string): SoalSeg => ({ t });

export const BANK_SOAL: BankSoal[] = [
  {
    no: 1,
    stimulus: [],
    prompt: S("Hasil dari 12 + 15 × 2 adalah …."),
    options: [
      { key: "A", text: "54" },
      { key: "B", text: "42" },
      { key: "C", text: "44" },
      { key: "D", text: "40" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Dahulukan perkalian:")],
      [B("15 × 2 = 30")],
      [P("Kemudian jumlahkan:")],
      [B("12 + 30 = 42")],
    ],
  },
  {
    no: 2,
    stimulus: [],
    prompt: S("KPK dari 6 dan 8 adalah …."),
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "48" },
      { key: "C", text: "12" },
      { key: "D", text: "36" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kelipatan 6: 6, 12, 18, 24, …")],
      [P("Kelipatan 8: 8, 16, 24, …")],
      [B("KPK = 24")],
    ],
  },
  {
    no: 3,
    stimulus: [],
    prompt: S("Hasil dari 3/4 + 1/2 adalah …."),
    options: [
      { key: "A", text: "4/6" },
      { key: "B", text: "1" },
      { key: "C", text: "5/4" },
      { key: "D", text: "3/6" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Samakan penyebut: 1/2 = 2/4.")],
      [B("3/4 + 2/4 = 5/4")],
    ],
  },
  {
    no: 4,
    stimulus: [],
    prompt: S("Luas persegi dengan sisi 9 cm adalah …."),
    options: [
      { key: "A", text: "36 cm²" },
      { key: "B", text: "72 cm²" },
      { key: "C", text: "81 cm²" },
      { key: "D", text: "90 cm²" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [[P("Luas persegi = sisi × sisi.")], [B("9 × 9 = 81 cm²")]],
  },
  {
    no: 5,
    stimulus: [
      "Pak Budi memiliki sebidang tanah berbentuk persegi panjang dengan panjang 20 meter dan lebar 12 meter. Di bagian dalam tanah tersebut akan dibuat taman berbentuk persegi dengan panjang sisi 8 meter. Sisa tanah akan digunakan untuk area jalan dan tempat duduk.",
    ],
    prompt: [
      P("Luas tanah yang "),
      B("tidak digunakan"),
      P(" sebagai taman adalah …."),
    ],
    options: [
      { key: "A", text: "176 m²" },
      { key: "B", text: "184 m²" },
      { key: "C", text: "192 m²" },
      { key: "D", text: "208 m²" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Luas tanah berbentuk persegi panjang:")],
      [B("20×12=240 m²")],
      [P("Luas taman berbentuk persegi:")],
      [B("8×8=64 m²")],
      [P("Maka, luas tanah yang tidak digunakan sebagai taman:")],
      [B("240−64=176 m²")],
      [P("Jadi, jawaban yang benar adalah "), B("A. 176 m².")],
    ],
  },
  {
    no: 6,
    stimulus: [],
    prompt: S("20% dari 150 adalah …."),
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "25" },
      { key: "C", text: "30" },
      { key: "D", text: "35" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [[B("20/100 × 150 = 30")]],
  },
  {
    no: 7,
    stimulus: [],
    prompt: S("FPB dari 12 dan 18 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "9" },
      { key: "C", text: "3" },
      { key: "D", text: "36" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Faktor 12: 1, 2, 3, 4, 6, 12.")],
      [P("Faktor 18: 1, 2, 3, 6, 9, 18.")],
      [B("FPB = 6")],
    ],
  },
  {
    no: 8,
    stimulus: [],
    prompt: S("Suhu −5°C naik 12°C menjadi …."),
    options: [
      { key: "A", text: "7°C" },
      { key: "B", text: "−17°C" },
      { key: "C", text: "17°C" },
      { key: "D", text: "−7°C" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [[B("−5 + 12 = 7°C")]],
  },
  {
    no: 9,
    stimulus: [],
    prompt: S("Keliling lingkaran berdiameter 14 cm (π = 22/7) adalah …."),
    options: [
      { key: "A", text: "44 cm" },
      { key: "B", text: "88 cm" },
      { key: "C", text: "154 cm" },
      { key: "D", text: "66 cm" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Keliling = π × d.")],
      [B("22/7 × 14 = 44 cm")],
    ],
  },
  {
    no: 10,
    stimulus: [],
    prompt: S("Hasil dari 2³ + 3² adalah …."),
    options: [
      { key: "A", text: "35" },
      { key: "B", text: "17" },
      { key: "C", text: "13" },
      { key: "D", text: "25" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [[B("8 + 9 = 17")]],
  },
  {
    no: 11,
    stimulus: [],
    prompt: S("Rata-rata dari 4, 6, 8, dan 10 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "9" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [[B("(4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7")]],
  },
  {
    no: 12,
    stimulus: [],
    prompt: S("5 lusin + 2 kodi sama dengan … buah."),
    options: [
      { key: "A", text: "84" },
      { key: "B", text: "100" },
      { key: "C", text: "120" },
      { key: "D", text: "96" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("1 lusin = 12 buah, 1 kodi = 20 buah.")],
      [B("5×12 + 2×20 = 60 + 40 = 100")],
    ],
  },
  {
    no: 13,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi x + 7 = 15 adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "8" },
      { key: "C", text: "22" },
      { key: "D", text: "9" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [[B("x = 15 − 7 = 8")]],
  },
  {
    no: 14,
    stimulus: [],
    prompt: S("Hasil dari 0,75 + 1/4 adalah …."),
    options: [
      { key: "A", text: "0,8" },
      { key: "B", text: "1" },
      { key: "C", text: "1,25" },
      { key: "D", text: "0,5" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [[B("0,75 + 0,25 = 1")]],
  },
  {
    no: 15,
    stimulus: [],
    prompt: S("Volume kubus dengan rusuk 5 cm adalah …."),
    options: [
      { key: "A", text: "25 cm³" },
      { key: "B", text: "75 cm³" },
      { key: "C", text: "125 cm³" },
      { key: "D", text: "150 cm³" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [[B("5³ = 5 × 5 × 5 = 125 cm³")]],
  },
  {
    no: 16,
    stimulus: [],
    prompt: S("Jarak 120 km ditempuh dalam 2 jam. Kecepatannya adalah …."),
    options: [
      { key: "A", text: "50 km/jam" },
      { key: "B", text: "55 km/jam" },
      { key: "C", text: "60 km/jam" },
      { key: "D", text: "240 km/jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [[B("120 ÷ 2 = 60 km/jam")]],
  },
  {
    no: 17,
    stimulus: [],
    prompt: S("Harga baju Rp50.000 diskon 10%. Harga bayarnya adalah …."),
    options: [
      { key: "A", text: "Rp40.000" },
      { key: "B", text: "Rp45.000" },
      { key: "C", text: "Rp5.000" },
      { key: "D", text: "Rp55.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B("Diskon = 10% × 50.000 = 5.000")],
      [B("Bayar = 50.000 − 5.000 = 45.000")],
    ],
  },
  {
    no: 18,
    stimulus: [],
    prompt: S("Besar sudut siku-siku adalah …."),
    options: [
      { key: "A", text: "45°" },
      { key: "B", text: "60°" },
      { key: "C", text: "90°" },
      { key: "D", text: "180°" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [[P("Sudut siku-siku besarnya 90°.")]],
  },
  {
    no: 19,
    stimulus: [],
    prompt: S("Hasil dari 7² − 4² adalah …."),
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "33" },
      { key: "C", text: "65" },
      { key: "D", text: "17" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [[B("49 − 16 = 33")]],
  },
  {
    no: 20,
    stimulus: [],
    prompt: S("Ibu membeli 2 kg gula @Rp18.000 dan 1 kg telur Rp26.000. Total belanja ibu adalah …."),
    options: [
      { key: "A", text: "Rp60.000" },
      { key: "B", text: "Rp62.000" },
      { key: "C", text: "Rp44.000" },
      { key: "D", text: "Rp70.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [[B("2×18.000 + 26.000 = 36.000 + 26.000 = 62.000")]],
  },
];
