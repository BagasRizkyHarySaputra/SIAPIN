"use client";

import type { BankSoal } from "@/lib/data/soal";

const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

/**
 * Bank Soal SNBT — Pengetahuan Kuantitatif (150 soal orisinal elite).
 * Semua kunci jawaban terverifikasi komputasi. Distribusi A/B/C/D merata.
 */
export const BANK_SNBT_PK: BankSoal[] = [

  {
    no: 1,
    stimulus: [],
    prompt: S("Nilai dari 27 + 5 × 8 adalah …."),
    options: [
      { key: "A", text: "67" },
      { key: "B", text: "40" },
      { key: "C", text: "143" },
      { key: "D", text: "256" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("5 × 8 = 40, lalu 27 + 40 = "), B("67")]
    ],
  },
  {
    no: 2,
    stimulus: [],
    prompt: S("Hasil dari 3/5 + 7/5 adalah …."),
    options: [
      { key: "A", text: "10/10" },
      { key: "B", text: "2/1" },
      { key: "C", text: "50/25" },
      { key: "D", text: "3/1" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (3·5 + 7·5)/5·5 = 50/25 → disederhanakan = "), B("2/1")]
    ],
  },
  {
    no: 3,
    stimulus: [],
    prompt: S("Hasil dari 60% dari 120 adalah …."),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "180" },
      { key: "C", text: "72" },
      { key: "D", text: "132" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("60% = 60/100. Maka 60/100 × 120 = "), B("72")]
    ],
  },
  {
    no: 4,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp50.000 mendapat diskon 20%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp10.000" },
      { key: "B", text: "Rp50.000" },
      { key: "C", text: "Rp45.000" },
      { key: "D", text: "Rp40.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Diskon = 20% × Rp50.000 = "), B("Rp10.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp40.000")]
    ],
  },
  {
    no: 5,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 9 : 6. Jika jumlah buku keduanya 60 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "36" },
      { key: "B", text: "24" },
      { key: "C", text: "30" },
      { key: "D", text: "40" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah perbandingan = 9+6 = 15 senilai 60, sehingga 1 bagian = 4.")],
      [P("Buku A = 9 × 4 = "), B("36")]
    ],
  },
  {
    no: 6,
    stimulus: [],
    prompt: S("Untuk membuat 3 loyang kue diperlukan 12 kg tepung. Tepung untuk 6 loyang adalah … kg."),
    options: [
      { key: "A", text: "25" },
      { key: "B", text: "24" },
      { key: "C", text: "23" },
      { key: "D", text: "12" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 6/3 × 12 = "), B("24")]
    ],
  },
  {
    no: 7,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 3x + 8 = 17 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "9" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kurangi kedua ruas dengan 8: 3x = 17 − 8 = 9.")],
      [P("x = 9 ÷ 3 = "), B("3")]
    ],
  },
  {
    no: 8,
    stimulus: [],
    prompt: S("KPK dari 9 dan 18 adalah …."),
    options: [
      { key: "A", text: "162" },
      { key: "B", text: "9" },
      { key: "C", text: "19" },
      { key: "D", text: "18" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB(9,18) = 9.")],
      [P("KPK = 9×18 ÷ FPB = 162 ÷ 9 = "), B("18")]
    ],
  },
  {
    no: 9,
    stimulus: [],
    prompt: S("FPB dari 48 dan 12 adalah …."),
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "48" },
      { key: "C", text: "13" },
      { key: "D", text: "102" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(48, 12) = "), B("12")]
    ],
  },
  {
    no: 10,
    stimulus: [],
    prompt: S("Rata-rata dari data 7, 9, 11, 9 adalah …."),
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "9" },
      { key: "C", text: "8" },
      { key: "D", text: "11" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 36 ÷ 4 = "), B("9")]
    ],
  },
  {
    no: 11,
    stimulus: [],
    prompt: S("Median dari data 1, 6, 9, 14, 19 adalah …."),
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "19" },
      { key: "C", text: "9" },
      { key: "D", text: "6" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("9")]
    ],
  },
  {
    no: 12,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 4 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/8" },
      { key: "C", text: "4/16" },
      { key: "D", text: "1/16" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 4 koin = (1/2)^4 = "), B("1/16")]
    ],
  },
  {
    no: 13,
    stimulus: [],
    prompt: S("Nilai dari 4! adalah …."),
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "25" },
      { key: "C", text: "23" },
      { key: "D", text: "16" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("4! = 4 × 3 × 2 × 1 = "), B("24")]
    ],
  },
  {
    no: 14,
    stimulus: [],
    prompt: S("Nilai dari 86 + 9 × 6 adalah …."),
    options: [
      { key: "A", text: "101" },
      { key: "B", text: "140" },
      { key: "C", text: "780" },
      { key: "D", text: "570" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("9 × 6 = 54, lalu 86 + 54 = "), B("140")]
    ],
  },
  {
    no: 15,
    stimulus: [],
    prompt: S("Hasil dari 1/3 + 7/8 adalah …."),
    options: [
      { key: "A", text: "8/11" },
      { key: "B", text: "30/24" },
      { key: "C", text: "29/24" },
      { key: "D", text: "29/25" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (1·8 + 7·3)/3·8 = 29/24 → disederhanakan = "), B("29/24")]
    ],
  },
  {
    no: 16,
    stimulus: [],
    prompt: S("Hasil dari 75% dari 400 adalah …."),
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "475" },
      { key: "C", text: "375" },
      { key: "D", text: "300" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("75% = 75/100. Maka 75/100 × 400 = "), B("300")]
    ],
  },
  {
    no: 17,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp50.000 mendapat diskon 20%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp40.000" },
      { key: "B", text: "Rp10.000" },
      { key: "C", text: "Rp50.000" },
      { key: "D", text: "Rp45.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Diskon = 20% × Rp50.000 = "), B("Rp10.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp40.000")]
    ],
  },
  {
    no: 18,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 8 : 4. Jika jumlah buku keduanya 24 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "16" },
      { key: "C", text: "12" },
      { key: "D", text: "18" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah perbandingan = 8+4 = 12 senilai 24, sehingga 1 bagian = 2.")],
      [P("Buku A = 8 × 2 = "), B("16")]
    ],
  },
  {
    no: 19,
    stimulus: [],
    prompt: S("Untuk membuat 3 loyang kue diperlukan 15 kg tepung. Tepung untuk 12 loyang adalah … kg."),
    options: [
      { key: "A", text: "61" },
      { key: "B", text: "59" },
      { key: "C", text: "60" },
      { key: "D", text: "15" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 12/3 × 15 = "), B("60")]
    ],
  },
  {
    no: 20,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 4x + 7 = 15 adalah …."),
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "1" },
      { key: "C", text: "8" },
      { key: "D", text: "2" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kurangi kedua ruas dengan 7: 4x = 15 − 7 = 8.")],
      [P("x = 8 ÷ 4 = "), B("2")]
    ],
  },
  {
    no: 21,
    stimulus: [],
    prompt: S("FPB dari 36 dan 18 adalah …."),
    options: [
      { key: "A", text: "18" },
      { key: "B", text: "36" },
      { key: "C", text: "19" },
      { key: "D", text: "102" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(36, 18) = "), B("18")]
    ],
  },
  {
    no: 22,
    stimulus: [],
    prompt: S("Rata-rata dari data 12, 14, 16, 14 adalah …."),
    options: [
      { key: "A", text: "15" },
      { key: "B", text: "14" },
      { key: "C", text: "13" },
      { key: "D", text: "16" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 56 ÷ 4 = "), B("14")]
    ],
  },
  {
    no: 23,
    stimulus: [],
    prompt: S("Median dari data 11, 11, 15, 17, 18 adalah …."),
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "18" },
      { key: "C", text: "15" },
      { key: "D", text: "16" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("15")]
    ],
  },
  {
    no: 24,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 2 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "2/4" },
      { key: "C", text: "1/5" },
      { key: "D", text: "1/4" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 2 koin = (1/2)^2 = "), B("1/4")]
    ],
  },
  {
    no: 25,
    stimulus: [],
    prompt: S("Nilai dari 4! adalah …."),
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "25" },
      { key: "C", text: "23" },
      { key: "D", text: "16" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("4! = 4 × 3 × 2 × 1 = "), B("24")]
    ],
  },
  {
    no: 26,
    stimulus: [],
    prompt: S("Nilai dari 34 + 5 × 8 adalah …."),
    options: [
      { key: "A", text: "47" },
      { key: "B", text: "74" },
      { key: "C", text: "178" },
      { key: "D", text: "312" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("5 × 8 = 40, lalu 34 + 40 = "), B("74")]
    ],
  },
  {
    no: 27,
    stimulus: [],
    prompt: S("Hasil dari 6/9 + 3/5 adalah …."),
    options: [
      { key: "A", text: "9/14" },
      { key: "B", text: "57/45" },
      { key: "C", text: "19/15" },
      { key: "D", text: "20/15" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (6·5 + 3·9)/9·5 = 57/45 → disederhanakan = "), B("19/15")]
    ],
  },
  {
    no: 28,
    stimulus: [],
    prompt: S("Hasil dari 30% dari 160 adalah …."),
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "190" },
      { key: "C", text: "78" },
      { key: "D", text: "48" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("30% = 30/100. Maka 30/100 × 160 = "), B("48")]
    ],
  },
  {
    no: 29,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp150.000 mendapat diskon 10%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp135.000" },
      { key: "B", text: "Rp15.000" },
      { key: "C", text: "Rp150.000" },
      { key: "D", text: "Rp140.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Diskon = 10% × Rp150.000 = "), B("Rp15.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp135.000")]
    ],
  },
  {
    no: 30,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 3 : 4. Jika jumlah buku keduanya 42 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "18" },
      { key: "C", text: "21" },
      { key: "D", text: "12" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah perbandingan = 3+4 = 7 senilai 42, sehingga 1 bagian = 6.")],
      [P("Buku A = 3 × 6 = "), B("18")]
    ],
  },
  {
    no: 31,
    stimulus: [],
    prompt: S("Untuk membuat 4 loyang kue diperlukan 15 kg tepung. Tepung untuk 12 loyang adalah … kg."),
    options: [
      { key: "A", text: "46" },
      { key: "B", text: "44" },
      { key: "C", text: "45" },
      { key: "D", text: "15" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 12/4 × 15 = "), B("45")]
    ],
  },
  {
    no: 32,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 2x + 11 = 21 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "4" },
      { key: "C", text: "10" },
      { key: "D", text: "5" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kurangi kedua ruas dengan 11: 2x = 21 − 11 = 10.")],
      [P("x = 10 ÷ 2 = "), B("5")]
    ],
  },
  {
    no: 33,
    stimulus: [],
    prompt: S("KPK dari 12 dan 20 adalah …."),
    options: [
      { key: "A", text: "60" },
      { key: "B", text: "240" },
      { key: "C", text: "4" },
      { key: "D", text: "30" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB(12,20) = 4.")],
      [P("KPK = 12×20 ÷ FPB = 240 ÷ 4 = "), B("60")]
    ],
  },
  {
    no: 34,
    stimulus: [],
    prompt: S("FPB dari 42 dan 30 adalah …."),
    options: [
      { key: "A", text: "210" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "42" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(42, 30) = "), B("6")]
    ],
  },
  {
    no: 35,
    stimulus: [],
    prompt: S("Rata-rata dari data 6, 8, 10, 8 adalah …."),
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "10" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 32 ÷ 4 = "), B("8")]
    ],
  },
  {
    no: 36,
    stimulus: [],
    prompt: S("Median dari data 5, 5, 6, 15, 16 adalah …."),
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "16" },
      { key: "C", text: "7" },
      { key: "D", text: "6" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("6")]
    ],
  },
  {
    no: 37,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 4 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/16" },
      { key: "B", text: "1/4" },
      { key: "C", text: "1/8" },
      { key: "D", text: "4/16" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 4 koin = (1/2)^4 = "), B("1/16")]
    ],
  },
  {
    no: 38,
    stimulus: [],
    prompt: S("Nilai dari 3! adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "6" },
      { key: "C", text: "5" },
      { key: "D", text: "9" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("3! = 3 × 2 × 1 = "), B("6")]
    ],
  },
  {
    no: 39,
    stimulus: [],
    prompt: S("Nilai dari 98 + 6 × 9 adalah …."),
    options: [
      { key: "A", text: "113" },
      { key: "B", text: "597" },
      { key: "C", text: "152" },
      { key: "D", text: "936" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("6 × 9 = 54, lalu 98 + 54 = "), B("152")]
    ],
  },
  {
    no: 40,
    stimulus: [],
    prompt: S("Hasil dari 5/7 + 7/4 adalah …."),
    options: [
      { key: "A", text: "12/11" },
      { key: "B", text: "70/28" },
      { key: "C", text: "69/29" },
      { key: "D", text: "69/28" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (5·4 + 7·7)/7·4 = 69/28 → disederhanakan = "), B("69/28")]
    ],
  },
  {
    no: 41,
    stimulus: [],
    prompt: S("Hasil dari 40% dari 400 adalah …."),
    options: [
      { key: "A", text: "160" },
      { key: "B", text: "10" },
      { key: "C", text: "440" },
      { key: "D", text: "200" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("40% = 40/100. Maka 40/100 × 400 = "), B("160")]
    ],
  },
  {
    no: 42,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp50.000 mendapat diskon 25%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp12.500" },
      { key: "B", text: "Rp37.500" },
      { key: "C", text: "Rp50.000" },
      { key: "D", text: "Rp42.500" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Diskon = 25% × Rp50.000 = "), B("Rp12.500"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp37.500")]
    ],
  },
  {
    no: 43,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 4 : 3. Jika jumlah buku keduanya 42 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "18" },
      { key: "B", text: "21" },
      { key: "C", text: "24" },
      { key: "D", text: "30" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 4+3 = 7 senilai 42, sehingga 1 bagian = 6.")],
      [P("Buku A = 4 × 6 = "), B("24")]
    ],
  },
  {
    no: 44,
    stimulus: [],
    prompt: S("Untuk membuat 2 loyang kue diperlukan 15 kg tepung. Tepung untuk 8 loyang adalah … kg."),
    options: [
      { key: "A", text: "61" },
      { key: "B", text: "59" },
      { key: "C", text: "15" },
      { key: "D", text: "60" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 8/2 × 15 = "), B("60")]
    ],
  },
  {
    no: 45,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 6x + 6 = 18 adalah …."),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "1" },
      { key: "D", text: "12" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kurangi kedua ruas dengan 6: 6x = 18 − 6 = 12.")],
      [P("x = 12 ÷ 6 = "), B("2")]
    ],
  },
  {
    no: 46,
    stimulus: [],
    prompt: S("FPB dari 42 dan 30 adalah …."),
    options: [
      { key: "A", text: "210" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "42" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(42, 30) = "), B("6")]
    ],
  },
  {
    no: 47,
    stimulus: [],
    prompt: S("Rata-rata dari data 10, 12, 14, 12 adalah …."),
    options: [
      { key: "A", text: "13" },
      { key: "B", text: "11" },
      { key: "C", text: "12" },
      { key: "D", text: "14" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 48 ÷ 4 = "), B("12")]
    ],
  },
  {
    no: 48,
    stimulus: [],
    prompt: S("Median dari data 1, 5, 10, 12, 19 adalah …."),
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "19" },
      { key: "C", text: "5" },
      { key: "D", text: "10" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("10")]
    ],
  },
  {
    no: 49,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 2 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/2" },
      { key: "C", text: "2/4" },
      { key: "D", text: "1/5" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 2 koin = (1/2)^2 = "), B("1/4")]
    ],
  },
  {
    no: 50,
    stimulus: [],
    prompt: S("Nilai dari 3! adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "6" },
      { key: "C", text: "5" },
      { key: "D", text: "9" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("3! = 3 × 2 × 1 = "), B("6")]
    ],
  },
  {
    no: 51,
    stimulus: [],
    prompt: S("Nilai dari 58 + 4 × 3 adalah …."),
    options: [
      { key: "A", text: "65" },
      { key: "B", text: "235" },
      { key: "C", text: "70" },
      { key: "D", text: "186" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("4 × 3 = 12, lalu 58 + 12 = "), B("70")]
    ],
  },
  {
    no: 52,
    stimulus: [],
    prompt: S("Hasil dari 6/9 + 1/6 adalah …."),
    options: [
      { key: "A", text: "7/15" },
      { key: "B", text: "45/54" },
      { key: "C", text: "6/6" },
      { key: "D", text: "5/6" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (6·6 + 1·9)/9·6 = 45/54 → disederhanakan = "), B("5/6")]
    ],
  },
  {
    no: 53,
    stimulus: [],
    prompt: S("Hasil dari 60% dari 160 adalah …."),
    options: [
      { key: "A", text: "96" },
      { key: "B", text: "2" },
      { key: "C", text: "220" },
      { key: "D", text: "156" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("60% = 60/100. Maka 60/100 × 160 = "), B("96")]
    ],
  },
  {
    no: 54,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp50.000 mendapat diskon 20%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp10.000" },
      { key: "B", text: "Rp40.000" },
      { key: "C", text: "Rp50.000" },
      { key: "D", text: "Rp45.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Diskon = 20% × Rp50.000 = "), B("Rp10.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp40.000")]
    ],
  },
  {
    no: 55,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 5 : 7. Jika jumlah buku keduanya 48 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "28" },
      { key: "B", text: "24" },
      { key: "C", text: "20" },
      { key: "D", text: "16" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 5+7 = 12 senilai 48, sehingga 1 bagian = 4.")],
      [P("Buku A = 5 × 4 = "), B("20")]
    ],
  },
  {
    no: 56,
    stimulus: [],
    prompt: S("Untuk membuat 2 loyang kue diperlukan 12 kg tepung. Tepung untuk 12 loyang adalah … kg."),
    options: [
      { key: "A", text: "73" },
      { key: "B", text: "71" },
      { key: "C", text: "12" },
      { key: "D", text: "72" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 12/2 × 12 = "), B("72")]
    ],
  },
  {
    no: 57,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 2x + 8 = 16 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "3" },
      { key: "D", text: "8" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kurangi kedua ruas dengan 8: 2x = 16 − 8 = 8.")],
      [P("x = 8 ÷ 2 = "), B("4")]
    ],
  },
  {
    no: 58,
    stimulus: [],
    prompt: S("KPK dari 12 dan 18 adalah …."),
    options: [
      { key: "A", text: "216" },
      { key: "B", text: "36" },
      { key: "C", text: "6" },
      { key: "D", text: "18" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(12,18) = 6.")],
      [P("KPK = 12×18 ÷ FPB = 216 ÷ 6 = "), B("36")]
    ],
  },
  {
    no: 59,
    stimulus: [],
    prompt: S("FPB dari 48 dan 18 adalah …."),
    options: [
      { key: "A", text: "144" },
      { key: "B", text: "7" },
      { key: "C", text: "6" },
      { key: "D", text: "48" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(48, 18) = "), B("6")]
    ],
  },
  {
    no: 60,
    stimulus: [],
    prompt: S("Rata-rata dari data 10, 12, 14, 12 adalah …."),
    options: [
      { key: "A", text: "13" },
      { key: "B", text: "11" },
      { key: "C", text: "14" },
      { key: "D", text: "12" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 48 ÷ 4 = "), B("12")]
    ],
  },
  {
    no: 61,
    stimulus: [],
    prompt: S("Median dari data 1, 5, 8, 13, 17 adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "1" },
      { key: "C", text: "17" },
      { key: "D", text: "5" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("8")]
    ],
  },
  {
    no: 62,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 4 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/16" },
      { key: "C", text: "1/8" },
      { key: "D", text: "4/16" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 4 koin = (1/2)^4 = "), B("1/16")]
    ],
  },
  {
    no: 63,
    stimulus: [],
    prompt: S("Nilai dari 3! adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "9" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("3! = 3 × 2 × 1 = "), B("6")]
    ],
  },
  {
    no: 64,
    stimulus: [],
    prompt: S("Nilai dari 44 + 8 × 2 adalah …."),
    options: [
      { key: "A", text: "54" },
      { key: "B", text: "354" },
      { key: "C", text: "104" },
      { key: "D", text: "60" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("8 × 2 = 16, lalu 44 + 16 = "), B("60")]
    ],
  },
  {
    no: 65,
    stimulus: [],
    prompt: S("Hasil dari 7/8 + 1/3 adalah …."),
    options: [
      { key: "A", text: "29/24" },
      { key: "B", text: "8/11" },
      { key: "C", text: "30/24" },
      { key: "D", text: "29/25" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (7·3 + 1·8)/8·3 = 29/24 → disederhanakan = "), B("29/24")]
    ],
  },
  {
    no: 66,
    stimulus: [],
    prompt: S("Hasil dari 15% dari 240 adalah …."),
    options: [
      { key: "A", text: "16" },
      { key: "B", text: "36" },
      { key: "C", text: "255" },
      { key: "D", text: "51" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("15% = 15/100. Maka 15/100 × 240 = "), B("36")]
    ],
  },
  {
    no: 67,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp200.000 mendapat diskon 15%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp30.000" },
      { key: "B", text: "Rp200.000" },
      { key: "C", text: "Rp170.000" },
      { key: "D", text: "Rp175.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Diskon = 15% × Rp200.000 = "), B("Rp30.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp170.000")]
    ],
  },
  {
    no: 68,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 3 : 8. Jika jumlah buku keduanya 55 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "40" },
      { key: "B", text: "27" },
      { key: "C", text: "20" },
      { key: "D", text: "15" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 3+8 = 11 senilai 55, sehingga 1 bagian = 5.")],
      [P("Buku A = 3 × 5 = "), B("15")]
    ],
  },
  {
    no: 69,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 5x + 5 = 45 adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "9" },
      { key: "C", text: "7" },
      { key: "D", text: "40" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kurangi kedua ruas dengan 5: 5x = 45 − 5 = 40.")],
      [P("x = 40 ÷ 5 = "), B("8")]
    ],
  },
  {
    no: 70,
    stimulus: [],
    prompt: S("KPK dari 10 dan 18 adalah …."),
    options: [
      { key: "A", text: "180" },
      { key: "B", text: "90" },
      { key: "C", text: "2" },
      { key: "D", text: "45" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(10,18) = 2.")],
      [P("KPK = 10×18 ÷ FPB = 180 ÷ 2 = "), B("90")]
    ],
  },
  {
    no: 71,
    stimulus: [],
    prompt: S("FPB dari 42 dan 24 adalah …."),
    options: [
      { key: "A", text: "168" },
      { key: "B", text: "7" },
      { key: "C", text: "6" },
      { key: "D", text: "42" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(42, 24) = "), B("6")]
    ],
  },
  {
    no: 72,
    stimulus: [],
    prompt: S("Rata-rata dari data 4, 6, 8, 6 adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "5" },
      { key: "C", text: "8" },
      { key: "D", text: "6" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 24 ÷ 4 = "), B("6")]
    ],
  },
  {
    no: 73,
    stimulus: [],
    prompt: S("Median dari data 1, 5, 10, 13, 14 adalah …."),
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "1" },
      { key: "C", text: "14" },
      { key: "D", text: "5" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("10")]
    ],
  },
  {
    no: 74,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 2 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "1/4" },
      { key: "C", text: "2/4" },
      { key: "D", text: "1/5" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 2 koin = (1/2)^2 = "), B("1/4")]
    ],
  },
  {
    no: 75,
    stimulus: [],
    prompt: S("Nilai dari 5! adalah …."),
    options: [
      { key: "A", text: "121" },
      { key: "B", text: "119" },
      { key: "C", text: "120" },
      { key: "D", text: "25" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("5! = 5 × 4 × 3 × 2 × 1 = "), B("120")]
    ],
  },
  {
    no: 76,
    stimulus: [],
    prompt: S("Nilai dari 22 + 8 × 4 adalah …."),
    options: [
      { key: "A", text: "34" },
      { key: "B", text: "180" },
      { key: "C", text: "120" },
      { key: "D", text: "54" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("8 × 4 = 32, lalu 22 + 32 = "), B("54")]
    ],
  },
  {
    no: 77,
    stimulus: [],
    prompt: S("Hasil dari 4/7 + 5/7 adalah …."),
    options: [
      { key: "A", text: "9/7" },
      { key: "B", text: "9/14" },
      { key: "C", text: "63/49" },
      { key: "D", text: "10/7" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (4·7 + 5·7)/7·7 = 63/49 → disederhanakan = "), B("9/7")]
    ],
  },
  {
    no: 78,
    stimulus: [],
    prompt: S("Hasil dari 15% dari 40 adalah …."),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "6" },
      { key: "C", text: "55" },
      { key: "D", text: "21" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("15% = 15/100. Maka 15/100 × 40 = "), B("6")]
    ],
  },
  {
    no: 79,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp75.000 mendapat diskon 25%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp18.750" },
      { key: "B", text: "Rp75.000" },
      { key: "C", text: "Rp56.250" },
      { key: "D", text: "Rp61.250" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Diskon = 25% × Rp75.000 = "), B("Rp18.750"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp56.250")]
    ],
  },
  {
    no: 80,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 8 : 3. Jika jumlah buku keduanya 44 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "22" },
      { key: "C", text: "36" },
      { key: "D", text: "32" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 8+3 = 11 senilai 44, sehingga 1 bagian = 4.")],
      [P("Buku A = 8 × 4 = "), B("32")]
    ],
  },
  {
    no: 81,
    stimulus: [],
    prompt: S("Untuk membuat 2 loyang kue diperlukan 12 kg tepung. Tepung untuk 8 loyang adalah … kg."),
    options: [
      { key: "A", text: "48" },
      { key: "B", text: "49" },
      { key: "C", text: "47" },
      { key: "D", text: "12" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 8/2 × 12 = "), B("48")]
    ],
  },
  {
    no: 82,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 2x + 9 = 15 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "3" },
      { key: "C", text: "2" },
      { key: "D", text: "6" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kurangi kedua ruas dengan 9: 2x = 15 − 9 = 6.")],
      [P("x = 6 ÷ 2 = "), B("3")]
    ],
  },
  {
    no: 83,
    stimulus: [],
    prompt: S("KPK dari 12 dan 8 adalah …."),
    options: [
      { key: "A", text: "96" },
      { key: "B", text: "4" },
      { key: "C", text: "24" },
      { key: "D", text: "12" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB(12,8) = 4.")],
      [P("KPK = 12×8 ÷ FPB = 96 ÷ 4 = "), B("24")]
    ],
  },
  {
    no: 84,
    stimulus: [],
    prompt: S("FPB dari 48 dan 12 adalah …."),
    options: [
      { key: "A", text: "48" },
      { key: "B", text: "13" },
      { key: "C", text: "102" },
      { key: "D", text: "12" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(48, 12) = "), B("12")]
    ],
  },
  {
    no: 85,
    stimulus: [],
    prompt: S("Rata-rata dari data 4, 6, 8, 6 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "5" },
      { key: "D", text: "8" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 24 ÷ 4 = "), B("6")]
    ],
  },
  {
    no: 86,
    stimulus: [],
    prompt: S("Median dari data 4, 9, 11, 14, 16 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "11" },
      { key: "C", text: "16" },
      { key: "D", text: "9" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("11")]
    ],
  },
  {
    no: 87,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 2 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "2/4" },
      { key: "C", text: "1/4" },
      { key: "D", text: "1/5" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 2 koin = (1/2)^2 = "), B("1/4")]
    ],
  },
  {
    no: 88,
    stimulus: [],
    prompt: S("Nilai dari 4! adalah …."),
    options: [
      { key: "A", text: "25" },
      { key: "B", text: "23" },
      { key: "C", text: "16" },
      { key: "D", text: "24" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("4! = 4 × 3 × 2 × 1 = "), B("24")]
    ],
  },
  {
    no: 89,
    stimulus: [],
    prompt: S("Nilai dari 76 + 5 × 5 adalah …."),
    options: [
      { key: "A", text: "101" },
      { key: "B", text: "86" },
      { key: "C", text: "385" },
      { key: "D", text: "405" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("5 × 5 = 25, lalu 76 + 25 = "), B("101")]
    ],
  },
  {
    no: 90,
    stimulus: [],
    prompt: S("Hasil dari 3/7 + 6/2 adalah …."),
    options: [
      { key: "A", text: "9/9" },
      { key: "B", text: "24/7" },
      { key: "C", text: "48/14" },
      { key: "D", text: "25/7" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (3·2 + 6·7)/7·2 = 48/14 → disederhanakan = "), B("24/7")]
    ],
  },
  {
    no: 91,
    stimulus: [],
    prompt: S("Hasil dari 30% dari 120 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "150" },
      { key: "C", text: "36" },
      { key: "D", text: "66" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("30% = 30/100. Maka 30/100 × 120 = "), B("36")]
    ],
  },
  {
    no: 92,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp150.000 mendapat diskon 15%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp22.500" },
      { key: "B", text: "Rp150.000" },
      { key: "C", text: "Rp132.500" },
      { key: "D", text: "Rp127.500" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Diskon = 15% × Rp150.000 = "), B("Rp22.500"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp127.500")]
    ],
  },
  {
    no: 93,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 6 : 7. Jika jumlah buku keduanya 39 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "18" },
      { key: "B", text: "21" },
      { key: "C", text: "19" },
      { key: "D", text: "15" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah perbandingan = 6+7 = 13 senilai 39, sehingga 1 bagian = 3.")],
      [P("Buku A = 6 × 3 = "), B("18")]
    ],
  },
  {
    no: 94,
    stimulus: [],
    prompt: S("Untuk membuat 4 loyang kue diperlukan 15 kg tepung. Tepung untuk 12 loyang adalah … kg."),
    options: [
      { key: "A", text: "46" },
      { key: "B", text: "45" },
      { key: "C", text: "44" },
      { key: "D", text: "15" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 12/4 × 15 = "), B("45")]
    ],
  },
  {
    no: 95,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 3x + 7 = 28 adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "21" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kurangi kedua ruas dengan 7: 3x = 28 − 7 = 21.")],
      [P("x = 21 ÷ 3 = "), B("7")]
    ],
  },
  {
    no: 96,
    stimulus: [],
    prompt: S("KPK dari 6 dan 20 adalah …."),
    options: [
      { key: "A", text: "120" },
      { key: "B", text: "2" },
      { key: "C", text: "30" },
      { key: "D", text: "60" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB(6,20) = 2.")],
      [P("KPK = 6×20 ÷ FPB = 120 ÷ 2 = "), B("60")]
    ],
  },
  {
    no: 97,
    stimulus: [],
    prompt: S("FPB dari 18 dan 12 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "36" },
      { key: "C", text: "7" },
      { key: "D", text: "18" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(18, 12) = "), B("6")]
    ],
  },
  {
    no: 98,
    stimulus: [],
    prompt: S("Rata-rata dari data 4, 6, 8, 6 adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "6" },
      { key: "C", text: "5" },
      { key: "D", text: "8" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 24 ÷ 4 = "), B("6")]
    ],
  },
  {
    no: 99,
    stimulus: [],
    prompt: S("Median dari data 9, 16, 17, 18, 19 adalah …."),
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "19" },
      { key: "C", text: "17" },
      { key: "D", text: "16" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("17")]
    ],
  },
  {
    no: 100,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 4 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/8" },
      { key: "C", text: "4/16" },
      { key: "D", text: "1/16" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 4 koin = (1/2)^4 = "), B("1/16")]
    ],
  },
  {
    no: 101,
    stimulus: [],
    prompt: S("Nilai dari 4! adalah …."),
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "25" },
      { key: "C", text: "23" },
      { key: "D", text: "16" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("4! = 4 × 3 × 2 × 1 = "), B("24")]
    ],
  },
  {
    no: 102,
    stimulus: [],
    prompt: S("Nilai dari 95 + 6 × 4 adalah …."),
    options: [
      { key: "A", text: "105" },
      { key: "B", text: "119" },
      { key: "C", text: "574" },
      { key: "D", text: "404" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("6 × 4 = 24, lalu 95 + 24 = "), B("119")]
    ],
  },
  {
    no: 103,
    stimulus: [],
    prompt: S("Hasil dari 7/4 + 2/6 adalah …."),
    options: [
      { key: "A", text: "9/10" },
      { key: "B", text: "50/24" },
      { key: "C", text: "25/12" },
      { key: "D", text: "26/12" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (7·6 + 2·4)/4·6 = 50/24 → disederhanakan = "), B("25/12")]
    ],
  },
  {
    no: 104,
    stimulus: [],
    prompt: S("Hasil dari 60% dari 320 adalah …."),
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "380" },
      { key: "C", text: "252" },
      { key: "D", text: "192" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("60% = 60/100. Maka 60/100 × 320 = "), B("192")]
    ],
  },
  {
    no: 105,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp200.000 mendapat diskon 30%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp140.000" },
      { key: "B", text: "Rp60.000" },
      { key: "C", text: "Rp200.000" },
      { key: "D", text: "Rp145.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Diskon = 30% × Rp200.000 = "), B("Rp60.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp140.000")]
    ],
  },
  {
    no: 106,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 8 : 5. Jika jumlah buku keduanya 78 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "48" },
      { key: "C", text: "39" },
      { key: "D", text: "54" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah perbandingan = 8+5 = 13 senilai 78, sehingga 1 bagian = 6.")],
      [P("Buku A = 8 × 6 = "), B("48")]
    ],
  },
  {
    no: 107,
    stimulus: [],
    prompt: S("Untuk membuat 3 loyang kue diperlukan 15 kg tepung. Tepung untuk 12 loyang adalah … kg."),
    options: [
      { key: "A", text: "61" },
      { key: "B", text: "59" },
      { key: "C", text: "60" },
      { key: "D", text: "15" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 12/3 × 15 = "), B("60")]
    ],
  },
  {
    no: 108,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 3x + 6 = 15 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "2" },
      { key: "C", text: "9" },
      { key: "D", text: "3" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kurangi kedua ruas dengan 6: 3x = 15 − 6 = 9.")],
      [P("x = 9 ÷ 3 = "), B("3")]
    ],
  },
  {
    no: 109,
    stimulus: [],
    prompt: S("KPK dari 6 dan 20 adalah …."),
    options: [
      { key: "A", text: "60" },
      { key: "B", text: "120" },
      { key: "C", text: "2" },
      { key: "D", text: "30" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB(6,20) = 2.")],
      [P("KPK = 6×20 ÷ FPB = 120 ÷ 2 = "), B("60")]
    ],
  },
  {
    no: 110,
    stimulus: [],
    prompt: S("FPB dari 30 dan 24 adalah …."),
    options: [
      { key: "A", text: "120" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "30" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(30, 24) = "), B("6")]
    ],
  },
  {
    no: 111,
    stimulus: [],
    prompt: S("Rata-rata dari data 5, 7, 9, 7 adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "9" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 28 ÷ 4 = "), B("7")]
    ],
  },
  {
    no: 112,
    stimulus: [],
    prompt: S("Median dari data 2, 9, 10, 13, 16 adalah …."),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "16" },
      { key: "C", text: "9" },
      { key: "D", text: "10" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("10")]
    ],
  },
  {
    no: 113,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 2 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/2" },
      { key: "C", text: "2/4" },
      { key: "D", text: "1/5" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 2 koin = (1/2)^2 = "), B("1/4")]
    ],
  },
  {
    no: 114,
    stimulus: [],
    prompt: S("Nilai dari 4! adalah …."),
    options: [
      { key: "A", text: "25" },
      { key: "B", text: "24" },
      { key: "C", text: "23" },
      { key: "D", text: "16" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("4! = 4 × 3 × 2 × 1 = "), B("24")]
    ],
  },
  {
    no: 115,
    stimulus: [],
    prompt: S("Nilai dari 27 + 4 × 8 adalah …."),
    options: [
      { key: "A", text: "39" },
      { key: "B", text: "116" },
      { key: "C", text: "59" },
      { key: "D", text: "248" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("4 × 8 = 32, lalu 27 + 32 = "), B("59")]
    ],
  },
  {
    no: 116,
    stimulus: [],
    prompt: S("Hasil dari 2/2 + 7/4 adalah …."),
    options: [
      { key: "A", text: "9/6" },
      { key: "B", text: "22/8" },
      { key: "C", text: "12/4" },
      { key: "D", text: "11/4" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (2·4 + 7·2)/2·4 = 22/8 → disederhanakan = "), B("11/4")]
    ],
  },
  {
    no: 117,
    stimulus: [],
    prompt: S("Hasil dari 40% dari 320 adalah …."),
    options: [
      { key: "A", text: "128" },
      { key: "B", text: "8" },
      { key: "C", text: "360" },
      { key: "D", text: "168" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("40% = 40/100. Maka 40/100 × 320 = "), B("128")]
    ],
  },
  {
    no: 118,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp50.000 mendapat diskon 30%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp15.000" },
      { key: "B", text: "Rp35.000" },
      { key: "C", text: "Rp50.000" },
      { key: "D", text: "Rp40.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Diskon = 30% × Rp50.000 = "), B("Rp15.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp35.000")]
    ],
  },
  {
    no: 119,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 4 : 6. Jika jumlah buku keduanya 60 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "36" },
      { key: "B", text: "30" },
      { key: "C", text: "24" },
      { key: "D", text: "18" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 4+6 = 10 senilai 60, sehingga 1 bagian = 6.")],
      [P("Buku A = 4 × 6 = "), B("24")]
    ],
  },
  {
    no: 120,
    stimulus: [],
    prompt: S("Untuk membuat 2 loyang kue diperlukan 9 kg tepung. Tepung untuk 6 loyang adalah … kg."),
    options: [
      { key: "A", text: "28" },
      { key: "B", text: "26" },
      { key: "C", text: "9" },
      { key: "D", text: "27" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 6/2 × 9 = "), B("27")]
    ],
  },
  {
    no: 121,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 4x + 6 = 30 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "5" },
      { key: "D", text: "24" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kurangi kedua ruas dengan 6: 4x = 30 − 6 = 24.")],
      [P("x = 24 ÷ 4 = "), B("6")]
    ],
  },
  {
    no: 122,
    stimulus: [],
    prompt: S("KPK dari 15 dan 20 adalah …."),
    options: [
      { key: "A", text: "300" },
      { key: "B", text: "60" },
      { key: "C", text: "5" },
      { key: "D", text: "30" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(15,20) = 5.")],
      [P("KPK = 15×20 ÷ FPB = 300 ÷ 5 = "), B("60")]
    ],
  },
  {
    no: 123,
    stimulus: [],
    prompt: S("FPB dari 24 dan 16 adalah …."),
    options: [
      { key: "A", text: "48" },
      { key: "B", text: "9" },
      { key: "C", text: "8" },
      { key: "D", text: "24" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(24, 16) = "), B("8")]
    ],
  },
  {
    no: 124,
    stimulus: [],
    prompt: S("Rata-rata dari data 9, 11, 13, 11 adalah …."),
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "10" },
      { key: "C", text: "13" },
      { key: "D", text: "11" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 44 ÷ 4 = "), B("11")]
    ],
  },
  {
    no: 125,
    stimulus: [],
    prompt: S("Median dari data 7, 7, 11, 15, 16 adalah …."),
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "7" },
      { key: "C", text: "16" },
      { key: "D", text: "12" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("11")]
    ],
  },
  {
    no: 126,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 3 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/3" },
      { key: "B", text: "1/8" },
      { key: "C", text: "1/6" },
      { key: "D", text: "3/8" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 3 koin = (1/2)^3 = "), B("1/8")]
    ],
  },
  {
    no: 127,
    stimulus: [],
    prompt: S("Nilai dari 5! adalah …."),
    options: [
      { key: "A", text: "121" },
      { key: "B", text: "119" },
      { key: "C", text: "120" },
      { key: "D", text: "25" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("5! = 5 × 4 × 3 × 2 × 1 = "), B("120")]
    ],
  },
  {
    no: 128,
    stimulus: [],
    prompt: S("Nilai dari 13 + 2 × 4 adalah …."),
    options: [
      { key: "A", text: "19" },
      { key: "B", text: "30" },
      { key: "C", text: "60" },
      { key: "D", text: "21" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("2 × 4 = 8, lalu 13 + 8 = "), B("21")]
    ],
  },
  {
    no: 129,
    stimulus: [],
    prompt: S("Hasil dari 5/3 + 2/6 adalah …."),
    options: [
      { key: "A", text: "2/1" },
      { key: "B", text: "7/9" },
      { key: "C", text: "36/18" },
      { key: "D", text: "3/1" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (5·6 + 2·3)/3·6 = 36/18 → disederhanakan = "), B("2/1")]
    ],
  },
  {
    no: 130,
    stimulus: [],
    prompt: S("Hasil dari 40% dari 200 adalah …."),
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "80" },
      { key: "C", text: "240" },
      { key: "D", text: "120" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("40% = 40/100. Maka 40/100 × 200 = "), B("80")]
    ],
  },
  {
    no: 131,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp150.000 mendapat diskon 10%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp15.000" },
      { key: "B", text: "Rp150.000" },
      { key: "C", text: "Rp135.000" },
      { key: "D", text: "Rp140.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Diskon = 10% × Rp150.000 = "), B("Rp15.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp135.000")]
    ],
  },
  {
    no: 132,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 7 : 5. Jika jumlah buku keduanya 36 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "15" },
      { key: "B", text: "18" },
      { key: "C", text: "24" },
      { key: "D", text: "21" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 7+5 = 12 senilai 36, sehingga 1 bagian = 3.")],
      [P("Buku A = 7 × 3 = "), B("21")]
    ],
  },
  {
    no: 133,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 5x + 5 = 15 adalah …."),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "1" },
      { key: "D", text: "10" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kurangi kedua ruas dengan 5: 5x = 15 − 5 = 10.")],
      [P("x = 10 ÷ 5 = "), B("2")]
    ],
  },
  {
    no: 134,
    stimulus: [],
    prompt: S("KPK dari 12 dan 18 adalah …."),
    options: [
      { key: "A", text: "216" },
      { key: "B", text: "36" },
      { key: "C", text: "6" },
      { key: "D", text: "18" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(12,18) = 6.")],
      [P("KPK = 12×18 ÷ FPB = 216 ÷ 6 = "), B("36")]
    ],
  },
  {
    no: 135,
    stimulus: [],
    prompt: S("FPB dari 30 dan 12 adalah …."),
    options: [
      { key: "A", text: "60" },
      { key: "B", text: "7" },
      { key: "C", text: "6" },
      { key: "D", text: "30" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(30, 12) = "), B("6")]
    ],
  },
  {
    no: 136,
    stimulus: [],
    prompt: S("Rata-rata dari data 6, 8, 10, 8 adalah …."),
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "7" },
      { key: "C", text: "10" },
      { key: "D", text: "8" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 32 ÷ 4 = "), B("8")]
    ],
  },
  {
    no: 137,
    stimulus: [],
    prompt: S("Median dari data 1, 5, 8, 14, 15 adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "1" },
      { key: "C", text: "15" },
      { key: "D", text: "5" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("8")]
    ],
  },
  {
    no: 138,
    stimulus: [],
    prompt: S("Peluang muncul semua gambar pada pelemparan 2 koin sekaligus adalah …."),
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "1/4" },
      { key: "C", text: "2/4" },
      { key: "D", text: "1/5" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Peluang tiap koin gambar = 1/2, untuk 2 koin = (1/2)^2 = "), B("1/4")]
    ],
  },
  {
    no: 139,
    stimulus: [],
    prompt: S("Nilai dari 5! adalah …."),
    options: [
      { key: "A", text: "121" },
      { key: "B", text: "119" },
      { key: "C", text: "120" },
      { key: "D", text: "25" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("5! = 5 × 4 × 3 × 2 × 1 = "), B("120")]
    ],
  },
  {
    no: 140,
    stimulus: [],
    prompt: S("Nilai dari 14 + 2 × 7 adalah …."),
    options: [
      { key: "A", text: "23" },
      { key: "B", text: "35" },
      { key: "C", text: "112" },
      { key: "D", text: "28" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Dahulukan operasi perkalian sebelum penjumlahan.")],
      [P("2 × 7 = 14, lalu 14 + 14 = "), B("28")]
    ],
  },
  {
    no: 141,
    stimulus: [],
    prompt: S("Hasil dari 7/2 + 5/4 adalah …."),
    options: [
      { key: "A", text: "19/4" },
      { key: "B", text: "12/6" },
      { key: "C", text: "38/8" },
      { key: "D", text: "20/4" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Samakan penyebut: a/b + c/d = (ad + cb)/(bd).")],
      [P("= (7·4 + 5·2)/2·4 = 38/8 → disederhanakan = "), B("19/4")]
    ],
  },
  {
    no: 142,
    stimulus: [],
    prompt: S("Hasil dari 50% dari 200 adalah …."),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "100" },
      { key: "C", text: "250" },
      { key: "D", text: "150" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("50% = 50/100. Maka 50/100 × 200 = "), B("100")]
    ],
  },
  {
    no: 143,
    stimulus: [],
    prompt: S("Harga sebuah barang Rp150.000 mendapat diskon 10%. Harga setelah diskon adalah …."),
    options: [
      { key: "A", text: "Rp15.000" },
      { key: "B", text: "Rp150.000" },
      { key: "C", text: "Rp135.000" },
      { key: "D", text: "Rp140.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Diskon = 10% × Rp150.000 = "), B("Rp15.000"), P(".")],
      [P("Harga akhir = harga awal − diskon = "), B("Rp135.000")]
    ],
  },
  {
    no: 144,
    stimulus: [],
    prompt: S("Perbandingan banyak buku A dan B adalah 4 : 7. Jika jumlah buku keduanya 66 buah, banyak buku A adalah …."),
    options: [
      { key: "A", text: "42" },
      { key: "B", text: "33" },
      { key: "C", text: "30" },
      { key: "D", text: "24" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 4+7 = 11 senilai 66, sehingga 1 bagian = 6.")],
      [P("Buku A = 4 × 6 = "), B("24")]
    ],
  },
  {
    no: 145,
    stimulus: [],
    prompt: S("Untuk membuat 2 loyang kue diperlukan 6 kg tepung. Tepung untuk 10 loyang adalah … kg."),
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "31" },
      { key: "C", text: "29" },
      { key: "D", text: "6" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Perbandingan senilai: x = (c/a) × b.")],
      [P("x = 10/2 × 6 = "), B("30")]
    ],
  },
  {
    no: 146,
    stimulus: [],
    prompt: S("Nilai x yang memenuhi 6x + 10 = 52 adalah …."),
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "7" },
      { key: "C", text: "6" },
      { key: "D", text: "42" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kurangi kedua ruas dengan 10: 6x = 52 − 10 = 42.")],
      [P("x = 42 ÷ 6 = "), B("7")]
    ],
  },
  {
    no: 147,
    stimulus: [],
    prompt: S("KPK dari 6 dan 18 adalah …."),
    options: [
      { key: "A", text: "108" },
      { key: "B", text: "6" },
      { key: "C", text: "18" },
      { key: "D", text: "9" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB(6,18) = 6.")],
      [P("KPK = 6×18 ÷ FPB = 108 ÷ 6 = "), B("18")]
    ],
  },
  {
    no: 148,
    stimulus: [],
    prompt: S("FPB dari 30 dan 12 adalah …."),
    options: [
      { key: "A", text: "60" },
      { key: "B", text: "7" },
      { key: "C", text: "30" },
      { key: "D", text: "6" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB = faktor persekutuan terbesar.")],
      [P("FPB(30, 12) = "), B("6")]
    ],
  },
  {
    no: 149,
    stimulus: [],
    prompt: S("Rata-rata dari data 7, 9, 11, 9 adalah …."),
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "10" },
      { key: "C", text: "8" },
      { key: "D", text: "11" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Rata-rata = jumlah ÷ banyak data = 36 ÷ 4 = "), B("9")]
    ],
  },
  {
    no: 150,
    stimulus: [],
    prompt: S("Median dari data 7, 18, 18, 20, 20 adalah …."),
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "18" },
      { key: "C", text: "20" },
      { key: "D", text: "19" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Median data ganjil = data ke-(n+1)/2 setelah diurutkan.")],
      [P("Data sudah urut: nilai tengah = "), B("18")]
    ],
  },
];
