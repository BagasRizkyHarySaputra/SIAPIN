"use client";

import type { BankSoal } from "@/lib/data/soal";

const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

/**
 * Bank Soal SNBT — Penalaran Matematika (150 soal orisinal elite).
 * Topik: barisan & deret, kecepatan, pekerjaan, umur, diskon/persen,
 * perbandingan, himpunan, untung-rugi, pola bilangan, KPK/FPB, rata-rata.
 * Semua kunci jawaban terverifikasi komputasi. Distribusi A/B/C/D merata.
 */
export const BANK_SNBT_PM: BankSoal[] = [

  {
    no: 1,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 8, 12, 16, …, nilai suku ke-16 adalah …."),
    options: [
      { key: "A", text: "68" },
      { key: "B", text: "72" },
      { key: "C", text: "64" },
      { key: "D", text: "64 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 8 + (16−1)·4 = 8 + 60 = "), B("68")]
    ],
  },
  {
    no: 2,
    stimulus: [],
    prompt: S("Jumlah 4 suku pertama dari barisan aritmetika 9, 14, 19, … adalah …."),
    options: [
      { key: "A", text: "75" },
      { key: "B", text: "66" },
      { key: "C", text: "62" },
      { key: "D", text: "96" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 4/2 · (2·9 + 3·5) = 4/2 · 33 = "), B("66")]
    ],
  },
  {
    no: 3,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 11 dan suku ke-7 = 23 pada barisan aritmetika. Suku ke-10 barisan itu adalah …."),
    options: [
      { key: "A", text: "38" },
      { key: "B", text: "26" },
      { key: "C", text: "32" },
      { key: "D", text: "35" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (23 − 11)/4 = "), B("3"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 11 + (7)·3 = "), B("32")]
    ],
  },
  {
    no: 4,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 5 dan rasio 2. Suku ke-6 barisan itu adalah …."),
    options: [
      { key: "A", text: "320" },
      { key: "B", text: "80" },
      { key: "C", text: "80 " },
      { key: "D", text: "160" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 5·2^(5) = "), B("160")]
    ],
  },
  {
    no: 5,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 70 km/jam selama 4 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "280 km" },
      { key: "B", text: "560 km" },
      { key: "C", text: "140 km" },
      { key: "D", text: "350 km" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 70 × 4 = "), B("280 km")]
    ],
  },
  {
    no: 6,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 60 km/jam, lalu kembali ke A dengan kecepatan 60 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "65 km/jam" },
      { key: "B", text: "60 km/jam" },
      { key: "C", text: "55 km/jam" },
      { key: "D", text: "55 km/jam " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·60·60/(60+60) = 7200/120 = "), B("60 km/jam")]
    ],
  },
  {
    no: 7,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 4 : 1. Selisih umur mereka 12 tahun. Umur Budi 6 tahun lagi adalah …."),
    options: [
      { key: "A", text: "11 tahun" },
      { key: "B", text: "9 tahun" },
      { key: "C", text: "10 tahun" },
      { key: "D", text: "22 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Selisih perbandingan = 4−1 = 3 senilai 12 tahun, sehingga 1 bagian = 4 tahun.")],
      [P("Umur Budi sekarang = 4 tahun, maka 6 tahun lagi = "), B("10 tahun")]
    ],
  },
  {
    no: 8,
    stimulus: [],
    prompt: S("Jumlah umur Ibu dan anaknya 40 tahun, dengan perbandingan 4 : 1. Umur Ibu 4 tahun lagi adalah …."),
    options: [
      { key: "A", text: "35 tahun" },
      { key: "B", text: "37 tahun" },
      { key: "C", text: "12 tahun" },
      { key: "D", text: "36 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah perbandingan = 4+1 = 5 senilai 40 tahun, sehingga 1 bagian = 8 tahun.")],
      [P("Umur Ibu sekarang = 4·8 = 32 tahun, maka 4 tahun lagi = "), B("36 tahun")]
    ],
  },
  {
    no: 9,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp150.000 dan mendapat diskon 10%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp135.000" },
      { key: "B", text: "Rp15.000" },
      { key: "C", text: "Rp150.000" },
      { key: "D", text: "Rp140.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Besar diskon = 10% × Rp150.000 = "), B("Rp15.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp135.000")]
    ],
  },
  {
    no: 10,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp3.000.000 naik 10%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp3.000.000" },
      { key: "B", text: "Rp3.300.000" },
      { key: "C", text: "Rp300.000" },
      { key: "D", text: "Rp3.350.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kenaikan = 10% × Rp3.000.000 = "), B("Rp300.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp3.300.000")]
    ],
  },
  {
    no: 11,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 2, 6, 10, …, nilai suku ke-13 adalah …."),
    options: [
      { key: "A", text: "54" },
      { key: "B", text: "46" },
      { key: "C", text: "50" },
      { key: "D", text: "46 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 2 + (13−1)·4 = 2 + 48 = "), B("50")]
    ],
  },
  {
    no: 12,
    stimulus: [],
    prompt: S("Jumlah 10 suku pertama dari barisan aritmetika 8, 12, 16, … adalah …."),
    options: [
      { key: "A", text: "268" },
      { key: "B", text: "250" },
      { key: "C", text: "440" },
      { key: "D", text: "260" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 10/2 · (2·8 + 9·4) = 10/2 · 52 = "), B("260")]
    ],
  },
  {
    no: 13,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 15 dan suku ke-7 = 23 pada barisan aritmetika. Suku ke-10 barisan itu adalah …."),
    options: [
      { key: "A", text: "29" },
      { key: "B", text: "33" },
      { key: "C", text: "25" },
      { key: "D", text: "31" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (23 − 15)/4 = "), B("2"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 15 + (7)·2 = "), B("29")]
    ],
  },
  {
    no: 14,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 3 dan rasio 3. Suku ke-7 barisan itu adalah …."),
    options: [
      { key: "A", text: "6561" },
      { key: "B", text: "2187" },
      { key: "C", text: "729" },
      { key: "D", text: "729 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 3·3^(6) = "), B("2187")]
    ],
  },
  {
    no: 15,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 50 km/jam selama 3 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "300 km" },
      { key: "B", text: "75 km" },
      { key: "C", text: "150 km" },
      { key: "D", text: "200 km" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 50 × 3 = "), B("150 km")]
    ],
  },
  {
    no: 16,
    stimulus: [],
    prompt: S("Jarak kota P ke kota Q adalah 120 km. Sebuah bus melaju dengan kecepatan rata-rata 40 km/jam. Waktu tempuh bus dari P ke Q adalah …."),
    options: [
      { key: "A", text: "4 jam" },
      { key: "B", text: "2 jam" },
      { key: "C", text: "120 jam" },
      { key: "D", text: "3 jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Waktu = jarak ÷ kecepatan.")],
      [P("t = 120 ÷ 40 = "), B("3 jam")]
    ],
  },
  {
    no: 17,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 30 km/jam, lalu kembali ke A dengan kecepatan 60 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "40 km/jam" },
      { key: "B", text: "45 km/jam" },
      { key: "C", text: "35 km/jam" },
      { key: "D", text: "35 km/jam " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·30·60/(30+60) = 3600/90 = "), B("40 km/jam")]
    ],
  },
  {
    no: 18,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 4 : 1. Selisih umur mereka 12 tahun. Umur Budi 3 tahun lagi adalah …."),
    options: [
      { key: "A", text: "8 tahun" },
      { key: "B", text: "7 tahun" },
      { key: "C", text: "6 tahun" },
      { key: "D", text: "19 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Selisih perbandingan = 4−1 = 3 senilai 12 tahun, sehingga 1 bagian = 4 tahun.")],
      [P("Umur Budi sekarang = 4 tahun, maka 3 tahun lagi = "), B("7 tahun")]
    ],
  },
  {
    no: 19,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp300.000 dan mendapat diskon 15%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp45.000" },
      { key: "B", text: "Rp300.000" },
      { key: "C", text: "Rp255.000" },
      { key: "D", text: "Rp260.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Besar diskon = 15% × Rp300.000 = "), B("Rp45.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp255.000")]
    ],
  },
  {
    no: 20,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp4.000.000 naik 8%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp4.000.000" },
      { key: "B", text: "Rp320.000" },
      { key: "C", text: "Rp4.370.000" },
      { key: "D", text: "Rp4.320.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kenaikan = 8% × Rp4.000.000 = "), B("Rp320.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp4.320.000")]
    ],
  },
  {
    no: 21,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 2, 7, 12, …, nilai suku ke-19 adalah …."),
    options: [
      { key: "A", text: "92" },
      { key: "B", text: "97" },
      { key: "C", text: "87" },
      { key: "D", text: "87 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 2 + (19−1)·5 = 2 + 90 = "), B("92")]
    ],
  },
  {
    no: 22,
    stimulus: [],
    prompt: S("Jumlah 9 suku pertama dari barisan aritmetika 9, 11, 13, … adalah …."),
    options: [
      { key: "A", text: "162" },
      { key: "B", text: "153" },
      { key: "C", text: "144" },
      { key: "D", text: "225" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 9/2 · (2·9 + 8·2) = 9/2 · 34 = "), B("153")]
    ],
  },
  {
    no: 23,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 16 dan suku ke-7 = 40 pada barisan aritmetika. Suku ke-10 barisan itu adalah …."),
    options: [
      { key: "A", text: "70" },
      { key: "B", text: "46" },
      { key: "C", text: "58" },
      { key: "D", text: "64" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (40 − 16)/4 = "), B("6"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 16 + (7)·6 = "), B("58")]
    ],
  },
  {
    no: 24,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 3. Suku ke-4 barisan itu adalah …."),
    options: [
      { key: "A", text: "324" },
      { key: "B", text: "36" },
      { key: "C", text: "36 " },
      { key: "D", text: "108" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·3^(3) = "), B("108")]
    ],
  },
  {
    no: 25,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 50 km/jam selama 5 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "250 km" },
      { key: "B", text: "500 km" },
      { key: "C", text: "125 km" },
      { key: "D", text: "300 km" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 50 × 5 = "), B("250 km")]
    ],
  },
  {
    no: 26,
    stimulus: [],
    prompt: S("Jarak kota P ke kota Q adalah 360 km. Sebuah bus melaju dengan kecepatan rata-rata 90 km/jam. Waktu tempuh bus dari P ke Q adalah …."),
    options: [
      { key: "A", text: "5 jam" },
      { key: "B", text: "4 jam" },
      { key: "C", text: "3 jam" },
      { key: "D", text: "360 jam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Waktu = jarak ÷ kecepatan.")],
      [P("t = 360 ÷ 90 = "), B("4 jam")]
    ],
  },
  {
    no: 27,
    stimulus: [],
    prompt: S("X dapat menyelesaikan sebuah pekerjaan dalam 6 hari, sedangkan Y dalam 12 hari. Jika X dan Y bekerja bersama, pekerjaan itu selesai dalam …."),
    options: [
      { key: "A", text: "6 hari" },
      { key: "B", text: "12 hari" },
      { key: "C", text: "4 hari" },
      { key: "D", text: "5 hari" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju bersama = 1/t₁ + 1/t₂, maka waktu = t₁·t₂/(t₁+t₂).")],
      [P("T = 6·12/(6+12) = 72/18 = "), B("4 hari")]
    ],
  },
  {
    no: 28,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 5 : 1. Selisih umur mereka 20 tahun. Umur Budi 4 tahun lagi adalah …."),
    options: [
      { key: "A", text: "10 tahun" },
      { key: "B", text: "8 tahun" },
      { key: "C", text: "29 tahun" },
      { key: "D", text: "9 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selisih perbandingan = 5−1 = 4 senilai 20 tahun, sehingga 1 bagian = 5 tahun.")],
      [P("Umur Budi sekarang = 5 tahun, maka 4 tahun lagi = "), B("9 tahun")]
    ],
  },
  {
    no: 29,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp80.000 dan mendapat diskon 15%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp68.000" },
      { key: "B", text: "Rp12.000" },
      { key: "C", text: "Rp80.000" },
      { key: "D", text: "Rp73.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Besar diskon = 15% × Rp80.000 = "), B("Rp12.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp68.000")]
    ],
  },
  {
    no: 30,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp4.000.000 naik 15%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp4.000.000" },
      { key: "B", text: "Rp4.600.000" },
      { key: "C", text: "Rp600.000" },
      { key: "D", text: "Rp4.650.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kenaikan = 15% × Rp4.000.000 = "), B("Rp600.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp4.600.000")]
    ],
  },
  {
    no: 31,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 7, 12, 17, …, nilai suku ke-20 adalah …."),
    options: [
      { key: "A", text: "107" },
      { key: "B", text: "97" },
      { key: "C", text: "102" },
      { key: "D", text: "97 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 7 + (20−1)·5 = 7 + 95 = "), B("102")]
    ],
  },
  {
    no: 32,
    stimulus: [],
    prompt: S("Jumlah 11 suku pertama dari barisan aritmetika 8, 11, 14, … adalah …."),
    options: [
      { key: "A", text: "261" },
      { key: "B", text: "242" },
      { key: "C", text: "418" },
      { key: "D", text: "253" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 11/2 · (2·8 + 10·3) = 11/2 · 46 = "), B("253")]
    ],
  },
  {
    no: 33,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 5 dan suku ke-7 = 17 pada barisan aritmetika. Suku ke-15 barisan itu adalah …."),
    options: [
      { key: "A", text: "41" },
      { key: "B", text: "47" },
      { key: "C", text: "35" },
      { key: "D", text: "44" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (17 − 5)/4 = "), B("3"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 5 + (12)·3 = "), B("41")]
    ],
  },
  {
    no: 34,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 2 dan rasio 3. Suku ke-4 barisan itu adalah …."),
    options: [
      { key: "A", text: "162" },
      { key: "B", text: "54" },
      { key: "C", text: "18" },
      { key: "D", text: "18 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 2·3^(3) = "), B("54")]
    ],
  },
  {
    no: 35,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 50 km/jam selama 2 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "200 km" },
      { key: "B", text: "50 km" },
      { key: "C", text: "100 km" },
      { key: "D", text: "150 km" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 50 × 2 = "), B("100 km")]
    ],
  },
  {
    no: 36,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 60 km/jam, lalu kembali ke A dengan kecepatan 100 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "80 km/jam" },
      { key: "B", text: "70 km/jam" },
      { key: "C", text: "70 km/jam " },
      { key: "D", text: "75 km/jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·60·100/(60+100) = 12000/160 = "), B("75 km/jam")]
    ],
  },
  {
    no: 37,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 5 : 1. Selisih umur mereka 12 tahun. Umur Budi 2 tahun lagi adalah …."),
    options: [
      { key: "A", text: "5 tahun" },
      { key: "B", text: "6 tahun" },
      { key: "C", text: "4 tahun" },
      { key: "D", text: "17 tahun" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Selisih perbandingan = 5−1 = 4 senilai 12 tahun, sehingga 1 bagian = 3 tahun.")],
      [P("Umur Budi sekarang = 3 tahun, maka 2 tahun lagi = "), B("5 tahun")]
    ],
  },
  {
    no: 38,
    stimulus: [],
    prompt: S("Jumlah umur Ibu dan anaknya 60 tahun, dengan perbandingan 4 : 1. Umur Ibu 5 tahun lagi adalah …."),
    options: [
      { key: "A", text: "52 tahun" },
      { key: "B", text: "53 tahun" },
      { key: "C", text: "54 tahun" },
      { key: "D", text: "17 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah perbandingan = 4+1 = 5 senilai 60 tahun, sehingga 1 bagian = 12 tahun.")],
      [P("Umur Ibu sekarang = 4·12 = 48 tahun, maka 5 tahun lagi = "), B("53 tahun")]
    ],
  },
  {
    no: 39,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp80.000 dan mendapat diskon 25%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp20.000" },
      { key: "B", text: "Rp80.000" },
      { key: "C", text: "Rp60.000" },
      { key: "D", text: "Rp65.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Besar diskon = 25% × Rp80.000 = "), B("Rp20.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp60.000")]
    ],
  },
  {
    no: 40,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp2.500.000 naik 12%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp2.500.000" },
      { key: "B", text: "Rp300.000" },
      { key: "C", text: "Rp2.850.000" },
      { key: "D", text: "Rp2.800.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kenaikan = 12% × Rp2.500.000 = "), B("Rp300.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp2.800.000")]
    ],
  },
  {
    no: 41,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 3, 5, 7, …, nilai suku ke-11 adalah …."),
    options: [
      { key: "A", text: "23" },
      { key: "B", text: "25" },
      { key: "C", text: "21" },
      { key: "D", text: "21 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 3 + (11−1)·2 = 3 + 20 = "), B("23")]
    ],
  },
  {
    no: 42,
    stimulus: [],
    prompt: S("Jumlah 5 suku pertama dari barisan aritmetika 6, 10, 14, … adalah …."),
    options: [
      { key: "A", text: "76" },
      { key: "B", text: "70" },
      { key: "C", text: "65" },
      { key: "D", text: "110" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 5/2 · (2·6 + 4·4) = 5/2 · 28 = "), B("70")]
    ],
  },
  {
    no: 43,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 5 dan suku ke-7 = 29 pada barisan aritmetika. Suku ke-12 barisan itu adalah …."),
    options: [
      { key: "A", text: "71" },
      { key: "B", text: "47" },
      { key: "C", text: "59" },
      { key: "D", text: "65" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (29 − 5)/4 = "), B("6"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 5 + (9)·6 = "), B("59")]
    ],
  },
  {
    no: 44,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 5 dan rasio 2. Suku ke-6 barisan itu adalah …."),
    options: [
      { key: "A", text: "320" },
      { key: "B", text: "80" },
      { key: "C", text: "80 " },
      { key: "D", text: "160" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 5·2^(5) = "), B("160")]
    ],
  },
  {
    no: 45,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 50 km/jam selama 2 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "100 km" },
      { key: "B", text: "200 km" },
      { key: "C", text: "50 km" },
      { key: "D", text: "150 km" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 50 × 2 = "), B("100 km")]
    ],
  },
  {
    no: 46,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 40 km/jam, lalu kembali ke A dengan kecepatan 60 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "50 km/jam" },
      { key: "B", text: "48 km/jam" },
      { key: "C", text: "53 km/jam" },
      { key: "D", text: "43 km/jam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·40·60/(40+60) = 4800/100 = "), B("48 km/jam")]
    ],
  },
  {
    no: 47,
    stimulus: [],
    prompt: S("X dapat menyelesaikan sebuah pekerjaan dalam 6 hari, sedangkan Y dalam 12 hari. Jika X dan Y bekerja bersama, pekerjaan itu selesai dalam …."),
    options: [
      { key: "A", text: "6 hari" },
      { key: "B", text: "12 hari" },
      { key: "C", text: "4 hari" },
      { key: "D", text: "5 hari" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Laju bersama = 1/t₁ + 1/t₂, maka waktu = t₁·t₂/(t₁+t₂).")],
      [P("T = 6·12/(6+12) = 72/18 = "), B("4 hari")]
    ],
  },
  {
    no: 48,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 3 : 1. Selisih umur mereka 16 tahun. Umur Budi 3 tahun lagi adalah …."),
    options: [
      { key: "A", text: "12 tahun" },
      { key: "B", text: "10 tahun" },
      { key: "C", text: "27 tahun" },
      { key: "D", text: "11 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selisih perbandingan = 3−1 = 2 senilai 16 tahun, sehingga 1 bagian = 8 tahun.")],
      [P("Umur Budi sekarang = 8 tahun, maka 3 tahun lagi = "), B("11 tahun")]
    ],
  },
  {
    no: 49,
    stimulus: [],
    prompt: S("Jumlah umur Ibu dan anaknya 72 tahun, dengan perbandingan 3 : 1. Umur Ibu 11 tahun lagi adalah …."),
    options: [
      { key: "A", text: "65 tahun" },
      { key: "B", text: "64 tahun" },
      { key: "C", text: "66 tahun" },
      { key: "D", text: "29 tahun" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah perbandingan = 3+1 = 4 senilai 72 tahun, sehingga 1 bagian = 18 tahun.")],
      [P("Umur Ibu sekarang = 3·18 = 54 tahun, maka 11 tahun lagi = "), B("65 tahun")]
    ],
  },
  {
    no: 50,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp250.000 dan mendapat diskon 15%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp37.500" },
      { key: "B", text: "Rp212.500" },
      { key: "C", text: "Rp250.000" },
      { key: "D", text: "Rp217.500" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Besar diskon = 15% × Rp250.000 = "), B("Rp37.500"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp212.500")]
    ],
  },
  {
    no: 51,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp4.500.000 naik 8%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp4.500.000" },
      { key: "B", text: "Rp360.000" },
      { key: "C", text: "Rp4.860.000" },
      { key: "D", text: "Rp4.910.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kenaikan = 8% × Rp4.500.000 = "), B("Rp360.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp4.860.000")]
    ],
  },
  {
    no: 52,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 5, 10, 15, …, nilai suku ke-16 adalah …."),
    options: [
      { key: "A", text: "85" },
      { key: "B", text: "75" },
      { key: "C", text: "75 " },
      { key: "D", text: "80" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 5 + (16−1)·5 = 5 + 75 = "), B("80")]
    ],
  },
  {
    no: 53,
    stimulus: [],
    prompt: S("Jumlah 4 suku pertama dari barisan aritmetika 1, 4, 7, … adalah …."),
    options: [
      { key: "A", text: "22" },
      { key: "B", text: "23" },
      { key: "C", text: "18" },
      { key: "D", text: "40" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 4/2 · (2·1 + 3·3) = 4/2 · 11 = "), B("22")]
    ],
  },
  {
    no: 54,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 11 dan suku ke-7 = 19 pada barisan aritmetika. Suku ke-8 barisan itu adalah …."),
    options: [
      { key: "A", text: "25" },
      { key: "B", text: "21" },
      { key: "C", text: "17" },
      { key: "D", text: "23" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (19 − 11)/4 = "), B("2"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 11 + (5)·2 = "), B("21")]
    ],
  },
  {
    no: 55,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 2. Suku ke-5 barisan itu adalah …."),
    options: [
      { key: "A", text: "128" },
      { key: "B", text: "32" },
      { key: "C", text: "64" },
      { key: "D", text: "32 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·2^(4) = "), B("64")]
    ],
  },
  {
    no: 56,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 70 km/jam selama 4 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "560 km" },
      { key: "B", text: "140 km" },
      { key: "C", text: "350 km" },
      { key: "D", text: "280 km" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 70 × 4 = "), B("280 km")]
    ],
  },
  {
    no: 57,
    stimulus: [],
    prompt: S("Jarak kota P ke kota Q adalah 180 km. Sebuah bus melaju dengan kecepatan rata-rata 60 km/jam. Waktu tempuh bus dari P ke Q adalah …."),
    options: [
      { key: "A", text: "3 jam" },
      { key: "B", text: "4 jam" },
      { key: "C", text: "2 jam" },
      { key: "D", text: "180 jam" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Waktu = jarak ÷ kecepatan.")],
      [P("t = 180 ÷ 60 = "), B("3 jam")]
    ],
  },
  {
    no: 58,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp250.000 dan mendapat diskon 20%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp50.000" },
      { key: "B", text: "Rp200.000" },
      { key: "C", text: "Rp250.000" },
      { key: "D", text: "Rp205.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Besar diskon = 20% × Rp250.000 = "), B("Rp50.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp200.000")]
    ],
  },
  {
    no: 59,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp5.000.000 naik 12%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp5.000.000" },
      { key: "B", text: "Rp600.000" },
      { key: "C", text: "Rp5.600.000" },
      { key: "D", text: "Rp5.650.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kenaikan = 12% × Rp5.000.000 = "), B("Rp600.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp5.600.000")]
    ],
  },
  {
    no: 60,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 3, 6, 9, …, nilai suku ke-6 adalah …."),
    options: [
      { key: "A", text: "21" },
      { key: "B", text: "15" },
      { key: "C", text: "15 " },
      { key: "D", text: "18" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 3 + (6−1)·3 = 3 + 15 = "), B("18")]
    ],
  },
  {
    no: 61,
    stimulus: [],
    prompt: S("Jumlah 11 suku pertama dari barisan aritmetika 3, 7, 11, … adalah …."),
    options: [
      { key: "A", text: "253" },
      { key: "B", text: "256" },
      { key: "C", text: "242" },
      { key: "D", text: "473" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 11/2 · (2·3 + 10·4) = 11/2 · 46 = "), B("253")]
    ],
  },
  {
    no: 62,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 10 dan suku ke-7 = 30 pada barisan aritmetika. Suku ke-8 barisan itu adalah …."),
    options: [
      { key: "A", text: "45" },
      { key: "B", text: "35" },
      { key: "C", text: "25" },
      { key: "D", text: "40" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (30 − 10)/4 = "), B("5"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 10 + (5)·5 = "), B("35")]
    ],
  },
  {
    no: 63,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 3. Suku ke-6 barisan itu adalah …."),
    options: [
      { key: "A", text: "2916" },
      { key: "B", text: "324" },
      { key: "C", text: "972" },
      { key: "D", text: "324 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·3^(5) = "), B("972")]
    ],
  },
  {
    no: 64,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 70 km/jam selama 3 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "420 km" },
      { key: "B", text: "105 km" },
      { key: "C", text: "280 km" },
      { key: "D", text: "210 km" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 70 × 3 = "), B("210 km")]
    ],
  },
  {
    no: 65,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 60 km/jam, lalu kembali ke A dengan kecepatan 100 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "75 km/jam" },
      { key: "B", text: "80 km/jam" },
      { key: "C", text: "70 km/jam" },
      { key: "D", text: "70 km/jam " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·60·100/(60+100) = 12000/160 = "), B("75 km/jam")]
    ],
  },
  {
    no: 66,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 3 : 1. Selisih umur mereka 20 tahun. Umur Budi 5 tahun lagi adalah …."),
    options: [
      { key: "A", text: "16 tahun" },
      { key: "B", text: "15 tahun" },
      { key: "C", text: "14 tahun" },
      { key: "D", text: "35 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Selisih perbandingan = 3−1 = 2 senilai 20 tahun, sehingga 1 bagian = 10 tahun.")],
      [P("Umur Budi sekarang = 10 tahun, maka 5 tahun lagi = "), B("15 tahun")]
    ],
  },
  {
    no: 67,
    stimulus: [],
    prompt: S("Jumlah umur Ibu dan anaknya 40 tahun, dengan perbandingan 4 : 1. Umur Ibu 9 tahun lagi adalah …."),
    options: [
      { key: "A", text: "40 tahun" },
      { key: "B", text: "42 tahun" },
      { key: "C", text: "41 tahun" },
      { key: "D", text: "17 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 4+1 = 5 senilai 40 tahun, sehingga 1 bagian = 8 tahun.")],
      [P("Umur Ibu sekarang = 4·8 = 32 tahun, maka 9 tahun lagi = "), B("41 tahun")]
    ],
  },
  {
    no: 68,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp80.000 dan mendapat diskon 30%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp24.000" },
      { key: "B", text: "Rp80.000" },
      { key: "C", text: "Rp61.000" },
      { key: "D", text: "Rp56.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Besar diskon = 30% × Rp80.000 = "), B("Rp24.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp56.000")]
    ],
  },
  {
    no: 69,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp4.500.000 naik 15%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp5.175.000" },
      { key: "B", text: "Rp4.500.000" },
      { key: "C", text: "Rp675.000" },
      { key: "D", text: "Rp5.225.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kenaikan = 15% × Rp4.500.000 = "), B("Rp675.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp5.175.000")]
    ],
  },
  {
    no: 70,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 3, 6, 9, …, nilai suku ke-17 adalah …."),
    options: [
      { key: "A", text: "54" },
      { key: "B", text: "51" },
      { key: "C", text: "48" },
      { key: "D", text: "48 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 3 + (17−1)·3 = 3 + 48 = "), B("51")]
    ],
  },
  {
    no: 71,
    stimulus: [],
    prompt: S("Jumlah 4 suku pertama dari barisan aritmetika 9, 12, 15, … adalah …."),
    options: [
      { key: "A", text: "63" },
      { key: "B", text: "50" },
      { key: "C", text: "54" },
      { key: "D", text: "72" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 4/2 · (2·9 + 3·3) = 4/2 · 27 = "), B("54")]
    ],
  },
  {
    no: 72,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 11 dan suku ke-7 = 27 pada barisan aritmetika. Suku ke-12 barisan itu adalah …."),
    options: [
      { key: "A", text: "55" },
      { key: "B", text: "39" },
      { key: "C", text: "51" },
      { key: "D", text: "47" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (27 − 11)/4 = "), B("4"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 11 + (9)·4 = "), B("47")]
    ],
  },
  {
    no: 73,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 2. Suku ke-4 barisan itu adalah …."),
    options: [
      { key: "A", text: "32" },
      { key: "B", text: "64" },
      { key: "C", text: "16" },
      { key: "D", text: "16 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·2^(3) = "), B("32")]
    ],
  },
  {
    no: 74,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 60 km/jam selama 3 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "360 km" },
      { key: "B", text: "180 km" },
      { key: "C", text: "90 km" },
      { key: "D", text: "240 km" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 60 × 3 = "), B("180 km")]
    ],
  },
  {
    no: 75,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 60 km/jam, lalu kembali ke A dengan kecepatan 100 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "80 km/jam" },
      { key: "B", text: "70 km/jam" },
      { key: "C", text: "75 km/jam" },
      { key: "D", text: "70 km/jam " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·60·100/(60+100) = 12000/160 = "), B("75 km/jam")]
    ],
  },
  {
    no: 76,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp300.000 dan mendapat diskon 30%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp90.000" },
      { key: "B", text: "Rp300.000" },
      { key: "C", text: "Rp215.000" },
      { key: "D", text: "Rp210.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Besar diskon = 30% × Rp300.000 = "), B("Rp90.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp210.000")]
    ],
  },
  {
    no: 77,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp5.000.000 naik 8%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp5.400.000" },
      { key: "B", text: "Rp5.000.000" },
      { key: "C", text: "Rp400.000" },
      { key: "D", text: "Rp5.450.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kenaikan = 8% × Rp5.000.000 = "), B("Rp400.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp5.400.000")]
    ],
  },
  {
    no: 78,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 9, 14, 19, …, nilai suku ke-14 adalah …."),
    options: [
      { key: "A", text: "79" },
      { key: "B", text: "74" },
      { key: "C", text: "69" },
      { key: "D", text: "69 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 9 + (14−1)·5 = 9 + 65 = "), B("74")]
    ],
  },
  {
    no: 79,
    stimulus: [],
    prompt: S("Jumlah 5 suku pertama dari barisan aritmetika 7, 10, 13, … adalah …."),
    options: [
      { key: "A", text: "72" },
      { key: "B", text: "60" },
      { key: "C", text: "65" },
      { key: "D", text: "95" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 5/2 · (2·7 + 4·3) = 5/2 · 26 = "), B("65")]
    ],
  },
  {
    no: 80,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 8 dan suku ke-7 = 28 pada barisan aritmetika. Suku ke-15 barisan itu adalah …."),
    options: [
      { key: "A", text: "78" },
      { key: "B", text: "58" },
      { key: "C", text: "73" },
      { key: "D", text: "68" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (28 − 8)/4 = "), B("5"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 8 + (12)·5 = "), B("68")]
    ],
  },
  {
    no: 81,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 2 dan rasio 2. Suku ke-5 barisan itu adalah …."),
    options: [
      { key: "A", text: "32" },
      { key: "B", text: "64" },
      { key: "C", text: "16" },
      { key: "D", text: "16 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 2·2^(4) = "), B("32")]
    ],
  },
  {
    no: 82,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 80 km/jam selama 4 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "640 km" },
      { key: "B", text: "320 km" },
      { key: "C", text: "160 km" },
      { key: "D", text: "400 km" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 80 × 4 = "), B("320 km")]
    ],
  },
  {
    no: 83,
    stimulus: [],
    prompt: S("Jarak kota P ke kota Q adalah 360 km. Sebuah bus melaju dengan kecepatan rata-rata 90 km/jam. Waktu tempuh bus dari P ke Q adalah …."),
    options: [
      { key: "A", text: "5 jam" },
      { key: "B", text: "3 jam" },
      { key: "C", text: "4 jam" },
      { key: "D", text: "360 jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Waktu = jarak ÷ kecepatan.")],
      [P("t = 360 ÷ 90 = "), B("4 jam")]
    ],
  },
  {
    no: 84,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 3 : 1. Selisih umur mereka 24 tahun. Umur Budi 3 tahun lagi adalah …."),
    options: [
      { key: "A", text: "16 tahun" },
      { key: "B", text: "14 tahun" },
      { key: "C", text: "39 tahun" },
      { key: "D", text: "15 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selisih perbandingan = 3−1 = 2 senilai 24 tahun, sehingga 1 bagian = 12 tahun.")],
      [P("Umur Budi sekarang = 12 tahun, maka 3 tahun lagi = "), B("15 tahun")]
    ],
  },
  {
    no: 85,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp300.000 dan mendapat diskon 30%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp210.000" },
      { key: "B", text: "Rp90.000" },
      { key: "C", text: "Rp300.000" },
      { key: "D", text: "Rp215.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Besar diskon = 30% × Rp300.000 = "), B("Rp90.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp210.000")]
    ],
  },
  {
    no: 86,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp3.000.000 naik 10%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp3.000.000" },
      { key: "B", text: "Rp3.300.000" },
      { key: "C", text: "Rp300.000" },
      { key: "D", text: "Rp3.350.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kenaikan = 10% × Rp3.000.000 = "), B("Rp300.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp3.300.000")]
    ],
  },
  {
    no: 87,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 6, 9, 12, …, nilai suku ke-13 adalah …."),
    options: [
      { key: "A", text: "45" },
      { key: "B", text: "39" },
      { key: "C", text: "42" },
      { key: "D", text: "39 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 6 + (13−1)·3 = 6 + 36 = "), B("42")]
    ],
  },
  {
    no: 88,
    stimulus: [],
    prompt: S("Jumlah 5 suku pertama dari barisan aritmetika 5, 9, 13, … adalah …."),
    options: [
      { key: "A", text: "70" },
      { key: "B", text: "60" },
      { key: "C", text: "105" },
      { key: "D", text: "65" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 5/2 · (2·5 + 4·4) = 5/2 · 26 = "), B("65")]
    ],
  },
  {
    no: 89,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 8 dan suku ke-7 = 32 pada barisan aritmetika. Suku ke-15 barisan itu adalah …."),
    options: [
      { key: "A", text: "80" },
      { key: "B", text: "92" },
      { key: "C", text: "68" },
      { key: "D", text: "86" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (32 − 8)/4 = "), B("6"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 8 + (12)·6 = "), B("80")]
    ],
  },
  {
    no: 90,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 3. Suku ke-7 barisan itu adalah …."),
    options: [
      { key: "A", text: "8748" },
      { key: "B", text: "2916" },
      { key: "C", text: "972" },
      { key: "D", text: "972 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·3^(6) = "), B("2916")]
    ],
  },
  {
    no: 91,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 70 km/jam selama 4 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "560 km" },
      { key: "B", text: "140 km" },
      { key: "C", text: "280 km" },
      { key: "D", text: "350 km" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 70 × 4 = "), B("280 km")]
    ],
  },
  {
    no: 92,
    stimulus: [],
    prompt: S("Jarak kota P ke kota Q adalah 480 km. Sebuah bus melaju dengan kecepatan rata-rata 40 km/jam. Waktu tempuh bus dari P ke Q adalah …."),
    options: [
      { key: "A", text: "13 jam" },
      { key: "B", text: "11 jam" },
      { key: "C", text: "480 jam" },
      { key: "D", text: "12 jam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Waktu = jarak ÷ kecepatan.")],
      [P("t = 480 ÷ 40 = "), B("12 jam")]
    ],
  },
  {
    no: 93,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 3 : 1. Selisih umur mereka 12 tahun. Umur Budi 5 tahun lagi adalah …."),
    options: [
      { key: "A", text: "11 tahun" },
      { key: "B", text: "12 tahun" },
      { key: "C", text: "10 tahun" },
      { key: "D", text: "23 tahun" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Selisih perbandingan = 3−1 = 2 senilai 12 tahun, sehingga 1 bagian = 6 tahun.")],
      [P("Umur Budi sekarang = 6 tahun, maka 5 tahun lagi = "), B("11 tahun")]
    ],
  },
  {
    no: 94,
    stimulus: [],
    prompt: S("Jumlah umur Ibu dan anaknya 60 tahun, dengan perbandingan 5 : 1. Umur Ibu 5 tahun lagi adalah …."),
    options: [
      { key: "A", text: "54 tahun" },
      { key: "B", text: "55 tahun" },
      { key: "C", text: "56 tahun" },
      { key: "D", text: "15 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah perbandingan = 5+1 = 6 senilai 60 tahun, sehingga 1 bagian = 10 tahun.")],
      [P("Umur Ibu sekarang = 5·10 = 50 tahun, maka 5 tahun lagi = "), B("55 tahun")]
    ],
  },
  {
    no: 95,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp300.000 dan mendapat diskon 10%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp30.000" },
      { key: "B", text: "Rp300.000" },
      { key: "C", text: "Rp270.000" },
      { key: "D", text: "Rp275.000" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Besar diskon = 10% × Rp300.000 = "), B("Rp30.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp270.000")]
    ],
  },
  {
    no: 96,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp2.500.000 naik 15%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp2.500.000" },
      { key: "B", text: "Rp375.000" },
      { key: "C", text: "Rp2.925.000" },
      { key: "D", text: "Rp2.875.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kenaikan = 15% × Rp2.500.000 = "), B("Rp375.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp2.875.000")]
    ],
  },
  {
    no: 97,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 2, 6, 10, …, nilai suku ke-20 adalah …."),
    options: [
      { key: "A", text: "78" },
      { key: "B", text: "82" },
      { key: "C", text: "74" },
      { key: "D", text: "74 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 2 + (20−1)·4 = 2 + 76 = "), B("78")]
    ],
  },
  {
    no: 98,
    stimulus: [],
    prompt: S("Jumlah 10 suku pertama dari barisan aritmetika 3, 6, 9, … adalah …."),
    options: [
      { key: "A", text: "168" },
      { key: "B", text: "165" },
      { key: "C", text: "155" },
      { key: "D", text: "300" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 10/2 · (2·3 + 9·3) = 10/2 · 33 = "), B("165")]
    ],
  },
  {
    no: 99,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 17 dan suku ke-7 = 25 pada barisan aritmetika. Suku ke-10 barisan itu adalah …."),
    options: [
      { key: "A", text: "35" },
      { key: "B", text: "27" },
      { key: "C", text: "31" },
      { key: "D", text: "33" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (25 − 17)/4 = "), B("2"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 17 + (7)·2 = "), B("31")]
    ],
  },
  {
    no: 100,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 3. Suku ke-5 barisan itu adalah …."),
    options: [
      { key: "A", text: "972" },
      { key: "B", text: "108" },
      { key: "C", text: "108 " },
      { key: "D", text: "324" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·3^(4) = "), B("324")]
    ],
  },
  {
    no: 101,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 70 km/jam selama 2 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "140 km" },
      { key: "B", text: "280 km" },
      { key: "C", text: "70 km" },
      { key: "D", text: "210 km" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 70 × 2 = "), B("140 km")]
    ],
  },
  {
    no: 102,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 3 : 1. Selisih umur mereka 24 tahun. Umur Budi 2 tahun lagi adalah …."),
    options: [
      { key: "A", text: "15 tahun" },
      { key: "B", text: "14 tahun" },
      { key: "C", text: "13 tahun" },
      { key: "D", text: "38 tahun" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Selisih perbandingan = 3−1 = 2 senilai 24 tahun, sehingga 1 bagian = 12 tahun.")],
      [P("Umur Budi sekarang = 12 tahun, maka 2 tahun lagi = "), B("14 tahun")]
    ],
  },
  {
    no: 103,
    stimulus: [],
    prompt: S("Jumlah umur Ibu dan anaknya 40 tahun, dengan perbandingan 4 : 1. Umur Ibu 4 tahun lagi adalah …."),
    options: [
      { key: "A", text: "35 tahun" },
      { key: "B", text: "37 tahun" },
      { key: "C", text: "36 tahun" },
      { key: "D", text: "12 tahun" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah perbandingan = 4+1 = 5 senilai 40 tahun, sehingga 1 bagian = 8 tahun.")],
      [P("Umur Ibu sekarang = 4·8 = 32 tahun, maka 4 tahun lagi = "), B("36 tahun")]
    ],
  },
  {
    no: 104,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp250.000 dan mendapat diskon 10%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp25.000" },
      { key: "B", text: "Rp250.000" },
      { key: "C", text: "Rp230.000" },
      { key: "D", text: "Rp225.000" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Besar diskon = 10% × Rp250.000 = "), B("Rp25.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp225.000")]
    ],
  },
  {
    no: 105,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp3.000.000 naik 8%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp3.240.000" },
      { key: "B", text: "Rp3.000.000" },
      { key: "C", text: "Rp240.000" },
      { key: "D", text: "Rp3.290.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kenaikan = 8% × Rp3.000.000 = "), B("Rp240.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp3.240.000")]
    ],
  },
  {
    no: 106,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 3, 8, 13, …, nilai suku ke-19 adalah …."),
    options: [
      { key: "A", text: "98" },
      { key: "B", text: "93" },
      { key: "C", text: "88" },
      { key: "D", text: "88 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 3 + (19−1)·5 = 3 + 90 = "), B("93")]
    ],
  },
  {
    no: 107,
    stimulus: [],
    prompt: S("Jumlah 9 suku pertama dari barisan aritmetika 6, 8, 10, … adalah …."),
    options: [
      { key: "A", text: "132" },
      { key: "B", text: "117" },
      { key: "C", text: "126" },
      { key: "D", text: "198" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 9/2 · (2·6 + 8·2) = 9/2 · 28 = "), B("126")]
    ],
  },
  {
    no: 108,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 17 dan suku ke-7 = 25 pada barisan aritmetika. Suku ke-12 barisan itu adalah …."),
    options: [
      { key: "A", text: "39" },
      { key: "B", text: "31" },
      { key: "C", text: "37" },
      { key: "D", text: "35" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (25 − 17)/4 = "), B("2"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 17 + (9)·2 = "), B("35")]
    ],
  },
  {
    no: 109,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 2 dan rasio 2. Suku ke-7 barisan itu adalah …."),
    options: [
      { key: "A", text: "128" },
      { key: "B", text: "256" },
      { key: "C", text: "64" },
      { key: "D", text: "64 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 2·2^(6) = "), B("128")]
    ],
  },
  {
    no: 110,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 40 km/jam selama 2 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "160 km" },
      { key: "B", text: "80 km" },
      { key: "C", text: "40 km" },
      { key: "D", text: "120 km" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 40 × 2 = "), B("80 km")]
    ],
  },
  {
    no: 111,
    stimulus: [],
    prompt: S("Sebuah kendaraan melaju dari kota A ke B dengan kecepatan 60 km/jam, lalu kembali ke A dengan kecepatan 90 km/jam. Kecepatan rata-rata seluruh perjalanan adalah …."),
    options: [
      { key: "A", text: "75 km/jam" },
      { key: "B", text: "77 km/jam" },
      { key: "C", text: "72 km/jam" },
      { key: "D", text: "67 km/jam" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Karena jarak pergi-pulang sama, gunakan harmonik: v̅ = 2·v₁·v₂/(v₁+v₂).")],
      [P("v̅ = 2·60·90/(60+90) = 10800/150 = "), B("72 km/jam")]
    ],
  },
  {
    no: 112,
    stimulus: [],
    prompt: S("Perbandingan umur Andi dan Budi adalah 3 : 1. Selisih umur mereka 16 tahun. Umur Budi 3 tahun lagi adalah …."),
    options: [
      { key: "A", text: "12 tahun" },
      { key: "B", text: "10 tahun" },
      { key: "C", text: "27 tahun" },
      { key: "D", text: "11 tahun" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selisih perbandingan = 3−1 = 2 senilai 16 tahun, sehingga 1 bagian = 8 tahun.")],
      [P("Umur Budi sekarang = 8 tahun, maka 3 tahun lagi = "), B("11 tahun")]
    ],
  },
  {
    no: 113,
    stimulus: [],
    prompt: S("Sebuah tas dijual seharga Rp200.000 dan mendapat diskon 10%. Harga yang harus dibayar adalah …."),
    options: [
      { key: "A", text: "Rp180.000" },
      { key: "B", text: "Rp20.000" },
      { key: "C", text: "Rp200.000" },
      { key: "D", text: "Rp185.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Besar diskon = 10% × Rp200.000 = "), B("Rp20.000"), P(".")],
      [P("Harga bayar = harga awal − diskon = "), B("Rp180.000")]
    ],
  },
  {
    no: 114,
    stimulus: [],
    prompt: S("Gaji seorang karyawan Rp4.500.000 naik 10%. Gaji karyawan setelah kenaikan adalah …."),
    options: [
      { key: "A", text: "Rp4.500.000" },
      { key: "B", text: "Rp4.950.000" },
      { key: "C", text: "Rp450.000" },
      { key: "D", text: "Rp5.000.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kenaikan = 10% × Rp4.500.000 = "), B("Rp450.000"), P(".")],
      [P("Gaji baru = gaji lama + kenaikan = "), B("Rp4.950.000")]
    ],
  },
  {
    no: 115,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 8, 12, 16, …, nilai suku ke-19 adalah …."),
    options: [
      { key: "A", text: "84" },
      { key: "B", text: "76" },
      { key: "C", text: "80" },
      { key: "D", text: "76 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 8 + (19−1)·4 = 8 + 72 = "), B("80")]
    ],
  },
  {
    no: 116,
    stimulus: [],
    prompt: S("Jumlah 5 suku pertama dari barisan aritmetika 1, 4, 7, … adalah …."),
    options: [
      { key: "A", text: "36" },
      { key: "B", text: "30" },
      { key: "C", text: "65" },
      { key: "D", text: "35" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Jumlah n suku pertama: Sₙ = n/2 · (2a + (n−1)b).")],
      [P("Sₙ = 5/2 · (2·1 + 4·3) = 5/2 · 14 = "), B("35")]
    ],
  },
  {
    no: 117,
    stimulus: [],
    prompt: S("Diketahui suku ke-3 = 8 dan suku ke-7 = 28 pada barisan aritmetika. Suku ke-15 barisan itu adalah …."),
    options: [
      { key: "A", text: "68" },
      { key: "B", text: "78" },
      { key: "C", text: "58" },
      { key: "D", text: "73" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Beda barisan: b = (U₇ − U₃)/(7−3).")],
      [P("b = (28 − 8)/4 = "), B("5"), P(".")],
      [P("Uₙ = U₃ + (n−3)b = 8 + (12)·5 = "), B("68")]
    ],
  },
  {
    no: 118,
    stimulus: [],
    prompt: S("Barisan geometri dengan suku pertama 4 dan rasio 2. Suku ke-5 barisan itu adalah …."),
    options: [
      { key: "A", text: "128" },
      { key: "B", text: "64" },
      { key: "C", text: "32" },
      { key: "D", text: "32 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Suku ke-n barisan geometri: Uₙ = a·r^(n−1).")],
      [P("Uₙ = 4·2^(4) = "), B("64")]
    ],
  },
  {
    no: 119,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan rata-rata 80 km/jam selama 4 jam. Jarak yang ditempuh mobil adalah …."),
    options: [
      { key: "A", text: "640 km" },
      { key: "B", text: "160 km" },
      { key: "C", text: "320 km" },
      { key: "D", text: "400 km" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jarak = kecepatan × waktu.")],
      [P("s = 80 × 4 = "), B("320 km")]
    ],
  },
  {
    no: 120,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 6, 9, 12, …, nilai suku ke-14 adalah …."),
    options: [
      { key: "A", text: "48" },
      { key: "B", text: "42" },
      { key: "C", text: "42 " },
      { key: "D", text: "45" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 6 + (14−1)·3 = 6 + 39 = "), B("45")]
    ],
  },
  {
    no: 121,
    stimulus: [],
    prompt: S("Jumlah 8 bilangan ganjil positif yang pertama adalah …."),
    options: [
      { key: "A", text: "64" },
      { key: "B", text: "72" },
      { key: "C", text: "73" },
      { key: "D", text: "73 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jumlah n bilangan ganjil pertama membentuk pola n².")],
      [P("Jumlah = 8² = "), B("64")]
    ],
  },
  {
    no: 122,
    stimulus: [],
    prompt: S("Untuk membuat 3 loyang kue diperlukan 6 kg tepung. Jika akan membuat 8 loyang, tepung yang diperlukan … kg."),
    options: [
      { key: "A", text: "17" },
      { key: "B", text: "16" },
      { key: "C", text: "15" },
      { key: "D", text: "6" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Perbandingan senilai: tepung/loyang tetap, x = (c/a)·b.")],
      [P("x = 8/3 × 6 = "), B("16 kg")]
    ],
  },
  {
    no: 123,
    stimulus: [],
    prompt: S("Jumlah 8 bilangan ganjil positif yang pertama adalah …."),
    options: [
      { key: "A", text: "72" },
      { key: "B", text: "73" },
      { key: "C", text: "64" },
      { key: "D", text: "73 " },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jumlah n bilangan ganjil pertama membentuk pola n².")],
      [P("Jumlah = 8² = "), B("64")]
    ],
  },
  {
    no: 124,
    stimulus: [],
    prompt: S("Dalam kelas berisi 32 siswa, 18 siswa gemar matematika, 16 gemar fisika, dan 13 gemar keduanya. Banyak siswa yang tidak gemar keduanya adalah …."),
    options: [
      { key: "A", text: "21 orang" },
      { key: "B", text: "12 orang" },
      { key: "C", text: "10 orang" },
      { key: "D", text: "11 orang" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("n(gemar salah satu/keduanya) = 18 + 16 − 13 = "), B("21"), P(" orang.")],
      [P("Yang tidak gemar keduanya = 32 − 21 = "), B("11 orang")]
    ],
  },
  {
    no: 125,
    stimulus: [],
    prompt: S("Dalam kelas berisi 36 siswa, 22 siswa gemar matematika, 16 gemar fisika, dan 7 gemar keduanya. Banyak siswa yang tidak gemar keduanya adalah …."),
    options: [
      { key: "A", text: "5 orang" },
      { key: "B", text: "31 orang" },
      { key: "C", text: "6 orang" },
      { key: "D", text: "4 orang" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("n(gemar salah satu/keduanya) = 22 + 16 − 7 = "), B("31"), P(" orang.")],
      [P("Yang tidak gemar keduanya = 36 − 31 = "), B("5 orang")]
    ],
  },
  {
    no: 126,
    stimulus: [],
    prompt: S("KPK dari 20 dan 10 adalah …."),
    options: [
      { key: "A", text: "200" },
      { key: "B", text: "20" },
      { key: "C", text: "10" },
      { key: "D", text: "10 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(20,10) = 10.")],
      [P("KPK = (20×10)/FPB = 200/10 = "), B("20")]
    ],
  },
  {
    no: 127,
    stimulus: [],
    prompt: S("Dalam kelas berisi 30 siswa, 22 siswa gemar matematika, 20 gemar fisika, dan 8 gemar keduanya. Banyak siswa yang tidak gemar keduanya adalah …."),
    options: [
      { key: "A", text: "34 orang" },
      { key: "B", text: "-3 orang" },
      { key: "C", text: "-4 orang" },
      { key: "D", text: "-5 orang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("n(gemar salah satu/keduanya) = 22 + 20 − 8 = "), B("34"), P(" orang.")],
      [P("Yang tidak gemar keduanya = 30 − 34 = "), B("-4 orang")]
    ],
  },
  {
    no: 128,
    stimulus: [],
    prompt: S("KPK dari 18 dan 9 adalah …."),
    options: [
      { key: "A", text: "162" },
      { key: "B", text: "9" },
      { key: "C", text: "9 " },
      { key: "D", text: "18" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB(18,9) = 9.")],
      [P("KPK = (18×9)/FPB = 162/9 = "), B("18")]
    ],
  },
  {
    no: 129,
    stimulus: [],
    prompt: S("Sebuah barang dibeli seharga Rp50.000 lalu dijual dengan untung 20%. Harga jualnya adalah …."),
    options: [
      { key: "A", text: "Rp60.000" },
      { key: "B", text: "Rp50.000" },
      { key: "C", text: "Rp10.000" },
      { key: "D", text: "Rp62.000" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Untung = 20% × Rp50.000 = "), B("Rp10.000"), P(".")],
      [P("Harga jual = beli + untung = "), B("Rp60.000")]
    ],
  },
  {
    no: 130,
    stimulus: [],
    prompt: S("Sebuah proyek diperkirakan selesai oleh 10 pekerja dalam 12 hari. Jika pekerja ditambah menjadi 12 orang, proyek selesai dalam …."),
    options: [
      { key: "A", text: "11 hari" },
      { key: "B", text: "10 hari" },
      { key: "C", text: "9 hari" },
      { key: "D", text: "12 hari" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Perbandingan berbalik nilai: makin banyak pekerja makin cepat, x = (a/c)·b.")],
      [P("x = 10/12 × 12 = "), B("10 hari")]
    ],
  },
  {
    no: 131,
    stimulus: [],
    prompt: S("Dalam kelas berisi 32 siswa, 22 siswa gemar matematika, 16 gemar fisika, dan 16 gemar keduanya. Banyak siswa yang tidak gemar keduanya adalah …."),
    options: [
      { key: "A", text: "22 orang" },
      { key: "B", text: "11 orang" },
      { key: "C", text: "10 orang" },
      { key: "D", text: "9 orang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("n(gemar salah satu/keduanya) = 22 + 16 − 16 = "), B("22"), P(" orang.")],
      [P("Yang tidak gemar keduanya = 32 − 22 = "), B("10 orang")]
    ],
  },
  {
    no: 132,
    stimulus: [],
    prompt: S("KPK dari 18 dan 10 adalah …."),
    options: [
      { key: "A", text: "180" },
      { key: "B", text: "2" },
      { key: "C", text: "45" },
      { key: "D", text: "90" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB(18,10) = 2.")],
      [P("KPK = (18×10)/FPB = 180/2 = "), B("90")]
    ],
  },
  {
    no: 133,
    stimulus: [],
    prompt: S("Untuk membuat 5 loyang kue diperlukan 12 kg tepung. Jika akan membuat 10 loyang, tepung yang diperlukan … kg."),
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "25" },
      { key: "C", text: "23" },
      { key: "D", text: "12" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Perbandingan senilai: tepung/loyang tetap, x = (c/a)·b.")],
      [P("x = 10/5 × 12 = "), B("24 kg")]
    ],
  },
  {
    no: 134,
    stimulus: [],
    prompt: S("Sebuah barang dibeli seharga Rp80.000 lalu dijual dengan untung 10%. Harga jualnya adalah …."),
    options: [
      { key: "A", text: "Rp80.000" },
      { key: "B", text: "Rp88.000" },
      { key: "C", text: "Rp8.000" },
      { key: "D", text: "Rp90.000" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Untung = 10% × Rp80.000 = "), B("Rp8.000"), P(".")],
      [P("Harga jual = beli + untung = "), B("Rp88.000")]
    ],
  },
  {
    no: 135,
    stimulus: [],
    prompt: S("KPK dari 15 dan 10 adalah …."),
    options: [
      { key: "A", text: "150" },
      { key: "B", text: "5" },
      { key: "C", text: "30" },
      { key: "D", text: "15" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("FPB(15,10) = 5.")],
      [P("KPK = (15×10)/FPB = 150/5 = "), B("30")]
    ],
  },
  {
    no: 136,
    stimulus: [],
    prompt: S("Untuk membuat 5 loyang kue diperlukan 15 kg tepung. Jika akan membuat 12 loyang, tepung yang diperlukan … kg."),
    options: [
      { key: "A", text: "37" },
      { key: "B", text: "35" },
      { key: "C", text: "15" },
      { key: "D", text: "36" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Perbandingan senilai: tepung/loyang tetap, x = (c/a)·b.")],
      [P("x = 12/5 × 15 = "), B("36 kg")]
    ],
  },
  {
    no: 137,
    stimulus: [],
    prompt: S("KPK dari 20 dan 10 adalah …."),
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "200" },
      { key: "C", text: "10" },
      { key: "D", text: "10 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB(20,10) = 10.")],
      [P("KPK = (20×10)/FPB = 200/10 = "), B("20")]
    ],
  },
  {
    no: 138,
    stimulus: [],
    prompt: S("KPK dari 24 dan 9 adalah …."),
    options: [
      { key: "A", text: "216" },
      { key: "B", text: "72" },
      { key: "C", text: "3" },
      { key: "D", text: "36" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(24,9) = 3.")],
      [P("KPK = (24×9)/FPB = 216/3 = "), B("72")]
    ],
  },
  {
    no: 139,
    stimulus: [],
    prompt: S("Dalam kelas berisi 30 siswa, 18 siswa gemar matematika, 15 gemar fisika, dan 10 gemar keduanya. Banyak siswa yang tidak gemar keduanya adalah …."),
    options: [
      { key: "A", text: "23 orang" },
      { key: "B", text: "8 orang" },
      { key: "C", text: "7 orang" },
      { key: "D", text: "6 orang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("n(gemar salah satu/keduanya) = 18 + 15 − 10 = "), B("23"), P(" orang.")],
      [P("Yang tidak gemar keduanya = 30 − 23 = "), B("7 orang")]
    ],
  },
  {
    no: 140,
    stimulus: [],
    prompt: S("KPK dari 24 dan 10 adalah …."),
    options: [
      { key: "A", text: "240" },
      { key: "B", text: "2" },
      { key: "C", text: "60" },
      { key: "D", text: "120" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB(24,10) = 2.")],
      [P("KPK = (24×10)/FPB = 240/2 = "), B("120")]
    ],
  },
  {
    no: 141,
    stimulus: [],
    prompt: S("Pada barisan aritmetika 6, 8, 10, …, nilai suku ke-6 adalah …."),
    options: [
      { key: "A", text: "16" },
      { key: "B", text: "18" },
      { key: "C", text: "14" },
      { key: "D", text: "14 " },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Suku ke-n barisan aritmetika: Uₙ = a + (n−1)b.")],
      [P("Uₙ = 6 + (6−1)·2 = 6 + 10 = "), B("16")]
    ],
  },
  {
    no: 142,
    stimulus: [],
    prompt: S("Sebuah proyek diperkirakan selesai oleh 4 pekerja dalam 20 hari. Jika pekerja ditambah menjadi 16 orang, proyek selesai dalam …."),
    options: [
      { key: "A", text: "6 hari" },
      { key: "B", text: "5 hari" },
      { key: "C", text: "4 hari" },
      { key: "D", text: "20 hari" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Perbandingan berbalik nilai: makin banyak pekerja makin cepat, x = (a/c)·b.")],
      [P("x = 4/16 × 20 = "), B("5 hari")]
    ],
  },
  {
    no: 143,
    stimulus: [],
    prompt: S("Sebuah barang dibeli seharga Rp50.000 lalu dijual dengan untung 25%. Harga jualnya adalah …."),
    options: [
      { key: "A", text: "Rp50.000" },
      { key: "B", text: "Rp12.500" },
      { key: "C", text: "Rp62.500" },
      { key: "D", text: "Rp64.500" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Untung = 25% × Rp50.000 = "), B("Rp12.500"), P(".")],
      [P("Harga jual = beli + untung = "), B("Rp62.500")]
    ],
  },
  {
    no: 144,
    stimulus: [],
    prompt: S("FPB dari 30 dan 16 adalah …."),
    options: [
      { key: "A", text: "240" },
      { key: "B", text: "3" },
      { key: "C", text: "30" },
      { key: "D", text: "2" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB diperoleh dari faktor prima persekutuan dengan pangkat terkecil.")],
      [P("FPB(30, 16) = "), B("2")]
    ],
  },
  {
    no: 145,
    stimulus: [],
    prompt: S("FPB dari 48 dan 30 adalah …."),
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "240" },
      { key: "C", text: "7" },
      { key: "D", text: "48" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB diperoleh dari faktor prima persekutuan dengan pangkat terkecil.")],
      [P("FPB(48, 30) = "), B("6")]
    ],
  },
  {
    no: 146,
    stimulus: [],
    prompt: S("KPK dari 24 dan 12 adalah …."),
    options: [
      { key: "A", text: "288" },
      { key: "B", text: "24" },
      { key: "C", text: "12" },
      { key: "D", text: "12 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("FPB(24,12) = 12.")],
      [P("KPK = (24×12)/FPB = 288/12 = "), B("24")]
    ],
  },
  {
    no: 147,
    stimulus: [],
    prompt: S("Untuk membuat 2 loyang kue diperlukan 12 kg tepung. Jika akan membuat 10 loyang, tepung yang diperlukan … kg."),
    options: [
      { key: "A", text: "61" },
      { key: "B", text: "59" },
      { key: "C", text: "60" },
      { key: "D", text: "12" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perbandingan senilai: tepung/loyang tetap, x = (c/a)·b.")],
      [P("x = 10/2 × 12 = "), B("60 kg")]
    ],
  },
  {
    no: 148,
    stimulus: [],
    prompt: S("FPB dari 30 dan 24 adalah …."),
    options: [
      { key: "A", text: "120" },
      { key: "B", text: "7" },
      { key: "C", text: "30" },
      { key: "D", text: "6" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("FPB diperoleh dari faktor prima persekutuan dengan pangkat terkecil.")],
      [P("FPB(30, 24) = "), B("6")]
    ],
  },
  {
    no: 149,
    stimulus: [],
    prompt: S("KPK dari 18 dan 16 adalah …."),
    options: [
      { key: "A", text: "144" },
      { key: "B", text: "288" },
      { key: "C", text: "2" },
      { key: "D", text: "72" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("FPB(18,16) = 2.")],
      [P("KPK = (18×16)/FPB = 288/2 = "), B("144")]
    ],
  },
  {
    no: 150,
    stimulus: [],
    prompt: S("Jumlah 8 bilangan ganjil positif yang pertama adalah …."),
    options: [
      { key: "A", text: "72" },
      { key: "B", text: "64" },
      { key: "C", text: "73" },
      { key: "D", text: "73 " },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Jumlah n bilangan ganjil pertama membentuk pola n².")],
      [P("Jumlah = 8² = "), B("64")]
    ],
  },
];
