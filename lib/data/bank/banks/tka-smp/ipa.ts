"use client";

import type { BankSoal, SoalSeg } from "@/lib/data/soal";

const S = (t: string): SoalSeg[] => [{ t }];
const B = (t: string): SoalSeg => ({ t, b: true });
const P = (t: string): SoalSeg => ({ t });

export const BANK_TKA_SMP_IPA: BankSoal[] = [

  {
    no: 1,
    stimulus: [],
    prompt: S("Berikut ini yang termasuk besaran pokok dalam Sistem Internasional (SI) adalah ...."),
    options: [
      { key: "A", text: "Massa, waktu, suhu" },
      { key: "B", text: "Luas, volume, massa jenis" },
      { key: "C", text: "Tekanan, daya, frekuensi" },
      { key: "D", text: "Gaya, usaha, energi" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Besaran pokok SI ada 7: panjang, massa, waktu, suhu, kuat arus listrik, intensitas cahaya, dan jumlah zat."), B("Massa, waktu, dan suhu termasuk besaran pokok.")],
      [P("Sedangkan gaya, usaha, energi, luas, volume, tekanan, daya, frekuensi, dan massa jenis adalah besaran turunan.")],
    ],
  },

  {
    no: 2,
    stimulus: [],
    prompt: S("Satuan baku untuk massa dalam Sistem Internasional (SI) adalah ...."),
    options: [
      { key: "A", text: "Pound (lb)" },
      { key: "B", text: "Kilogram (kg)" },
      { key: "C", text: "Gram (g)" },
      { key: "D", text: "Newton (N)" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sistem Internasional menetapkan kilogram (kg) sebagai satuan baku untuk besaran massa.")],
      [B("Satuan massa SI = kilogram (kg).")],
      [P("Newton adalah satuan gaya (besaran turunan), gram adalah kelipatan kg, pound bukan satuan SI.")],
    ],
  },

  {
    no: 3,
    stimulus: [],
    prompt: S("Pengukuran panjang sebuah benda menggunakan penggaris berskala terkecil 1 mm menunjukkan nilai 15,3 cm. Nilai ketidakpastian dari pengukuran tersebut adalah ...."),
    options: [
      { key: "A", text: "0,5 mm" },
      { key: "B", text: "0,05 mm" },
      { key: "C", text: "5 mm" },
      { key: "D", text: "0,005 mm" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Penggaris berskala terkecil 1 mm memiliki ketidakpastian sebesar ½ dari skala terkecil.")],
      [B("Ketidakpastian = ½ × 1 mm = 0,5 mm.")],
      [P("Opsi 0,05 mm dan 0,005 mm terlalu kecil; 5 mm terlalu besar untuk alat berskala 1 mm.")],
    ],
  },

  {
    no: 4,
    stimulus: [],
    prompt: S("Seorang siswa mengukur massa sebuah batu menggunakan neraca. Hasil pengukuran menunjukkan 50 gram dengan ketidakpastian 0,01 gram. Penulisan hasil pengukuran yang tepat adalah ...."),
    options: [
      { key: "A", text: "50,0 ± 0,01 g" },
      { key: "B", text: "50,00 ± 0,01 g" },
      { key: "C", text: "50,00 ± 0,1 g" },
      { key: "D", text: "50 ± 0,01 g" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Batas ketidakpastian Δm = 0,01 g. Hasil pengukuran ditulis dalam bentuk (m ± Δm)."), P("Nilai m harus ditulis hingga 2 desimal agar konsisten dengan ketidakpastian 0,01 g.")],
      [B("50,00 ± 0,01 g")],
    ],
  },

  {
    no: 5,
    stimulus: [],
    prompt: S("Konversi 0,025 kilometer ke meter adalah ...."),
    options: [
      { key: "A", text: "0,25 m" },
      { key: "B", text: "250 m" },
      { key: "C", text: "25 m" },
      { key: "D", text: "2,5 m" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("1 km = 1.000 m.")],
      [B("0,025 km × 1.000 = 25 m")],
    ],
  },

  {
    no: 6,
    stimulus: [],
    prompt: S("Berikut ini alat ukur yang paling tepat untuk mengukur tebal buku tipis adalah ...."),
    options: [
      { key: "A", text: "Meteran gulung" },
      { key: "B", text: "Neraca digital" },
      { key: "C", text: "Stopwatch" },
      { key: "D", text: "Jangka sorong" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Tebal buku tipis memerlukan ketelitian tinggi (skala kecil).")],
      [B("Jangka sorong memiliki ketelitian 0,1 mm atau 0,05 mm, cocok untuk benda tipis.")],
      [P("Meteran gulung untuk benda panjang, neraca untuk massa, stopwatch untuk waktu.")],
    ],
  },

  {
    no: 7,
    stimulus: [],
    prompt: S("Hasil pengukuran berat sebuah benda dengan timbangan adalah 2,5 newton. Jika g = 10 m/s², maka massa benda tersebut adalah ...."),
    options: [
      { key: "A", text: "0,25 kg" },
      { key: "B", text: "2,5 kg" },
      { key: "C", text: "25 kg" },
      { key: "D", text: "0,20 kg" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Berat (w) = m × g, sehingga m = w/g.")],
      [B("m = 2,5 N ÷ 10 m/s² = 0,25 kg")],
    ],
  },

  {
    no: 8,
    stimulus: [],
    prompt: S("Nilai 3.600 sekon dikonversi menjadi jam adalah ...."),
    options: [
      { key: "A", text: "3 jam" },
      { key: "B", text: "1 jam" },
      { key: "C", text: "0,5 jam" },
      { key: "D", text: "1,5 jam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("1 jam = 60 menit = 3.600 sekon.")],
      [B("3.600 sekon ÷ 3.600 = 1 jam")],
    ],
  },

  {
    no: 9,
    stimulus: [],
    prompt: S("Sebuah mikrometer sekrup memiliki skala utama dengan gradiasi 0,5 mm dan skala nonius dengan 50 bagian. Ketelitian alat tersebut adalah ...."),
    options: [
      { key: "A", text: "0,05 mm" },
      { key: "B", text: "0,1 mm" },
      { key: "C", text: "0,01 mm" },
      { key: "D", text: "0,5 mm" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Ketelitian mikrometer sekrup = skala utama terkecil ÷ jumlah skala nonius.")],
      [B("Ketelitian = 0,5 mm ÷ 50 = 0,01 mm")],
    ],
  },

  {
    no: 10,
    stimulus: [],
    prompt: S("Besaran turunan yang satuannya diturunkan dari satuan panjang dan waktu adalah ...."),
    options: [
      { key: "A", text: "Luas (m²)" },
      { key: "B", text: "Gaya (N)" },
      { key: "C", text: "Massa jenis (kg/m³)" },
      { key: "D", text: "Kecepatan (m/s)" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kecepatan = jarak ÷ waktu, dengan satuan meter per sekon (m/s)."), B("m/s diturunkan dari panjang (m) dan waktu (s).")],
      [P("Massa jenis dari massa dan volume, luas dari panjang×panjang, gaya dari kg·m/s².")],
    ],
  },

  {
    no: 11,
    stimulus: [],
    prompt: S("Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Kecepatan rata-rata mobil tersebut adalah ...."),
    options: [
      { key: "A", text: "60 km/jam" },
      { key: "B", text: "240 km/jam" },
      { key: "C", text: "30 km/jam" },
      { key: "D", text: "90 km/jam" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kecepatan rata-rata = total jarak ÷ total waktu.")],
      [B("v = 120 km ÷ 2 jam = 60 km/jam")],
    ],
  },

  {
    no: 12,
    stimulus: [],
    prompt: S("Sebuah sepeda motor bergerak dengan kecepatan konstan 20 m/s selama 10 sekon. Jarak yang ditempuh adalah ...."),
    options: [
      { key: "A", text: "2 m" },
      { key: "B", text: "200 m" },
      { key: "C", text: "10 m" },
      { key: "D", text: "100 m" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Untuk gerak lurus beraturan (GLB): s = v × t.")],
      [B("s = 20 m/s × 10 s = 200 m")],
    ],
  },

  {
    no: 13,
    stimulus: [],
    prompt: S("Sebuah benda bergerak dari diam dan mengalami percepatan 4 m/s² selama 5 sekon. Kecepatan akhir benda tersebut adalah ...."),
    options: [
      { key: "A", text: "1,25 m/s" },
      { key: "B", text: "100 m/s" },
      { key: "C", text: "20 m/s" },
      { key: "D", text: "9 m/s" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kecepatan akhir GLBB: v = v₀ + a × t, dengan v₀ = 0.")],
      [B("v = 0 + 4 × 5 = 20 m/s")],
    ],
  },

  {
    no: 14,
    stimulus: [],
    prompt: S("Sebuah kereta melaju dengan kecepatan 72 km/jam. Jika dinyatakan dalam m/s, kecepatan tersebut adalah ...."),
    options: [
      { key: "A", text: "2.000 m/s" },
      { key: "B", text: "7,2 m/s" },
      { key: "C", text: "200 m/s" },
      { key: "D", text: "20 m/s" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Konversi km/jam ke m/s: bagi dengan 3,6.")],
      [B("72 ÷ 3,6 = 20 m/s")],
    ],
  },

  {
    no: 15,
    stimulus: [],
    prompt: S("Sebuah benda bergerak dengan kecepatan awal 10 m/s dan diperlambat hingga berhenti dalam waktu 5 sekon. Percepatan benda tersebut adalah ...."),
    options: [
      { key: "A", text: "–2 m/s²" },
      { key: "B", text: "2 m/s²" },
      { key: "C", text: "10 m/s²" },
      { key: "D", text: "–5 m/s²" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("a = (v − v₀) ÷ t, dengan v = 0 (berhenti) dan v₀ = 10 m/s.")],
      [B("a = (0 − 10) ÷ 5 = −2 m/s²")],
      [P("Tanda negatif menunjukkan perlambatan.")],
    ],
  },

  {
    no: 16,
    stimulus: [],
    prompt: S("Sebuah benda dijatuhkan dari ketinggian 45 m. Jika g = 10 m/s², waktu yang diperlukan benda untuk sampai ke tanah adalah ...."),
    options: [
      { key: "A", text: "2 sekon" },
      { key: "B", text: "3 sekon" },
      { key: "C", text: "3,5 sekon" },
      { key: "D", text: "1,5 sekon" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Persamaan gerak jatuh bebas: h = ½ × g × t².")],
      [B("45 = ½ × 10 × t² → 45 = 5t² → t² = 9 → t = 3 sekon")],
    ],
  },

  {
    no: 17,
    stimulus: [],
    prompt: S("Sebuah motor melaju dengan kecepatan 15 m/s. Dalam waktu 8 sekon, jarak yang ditempuh motor adalah ...."),
    options: [
      { key: "A", text: "1,875 m" },
      { key: "B", text: "23 m" },
      { key: "C", text: "120 m" },
      { key: "D", text: "7 m" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("GLB: s = v × t.")],
      [B("s = 15 × 8 = 120 m")],
    ],
  },

  {
    no: 18,
    stimulus: [],
    prompt: S("Sebuah benda bergerak dari diam dengan percepatan 2 m/s². Kecepatan benda setelah menempuh jarak 25 m adalah ...."),
    options: [
      { key: "A", text: "5 m/s" },
      { key: "B", text: "50 m/s" },
      { key: "C", text: "12,5 m/s" },
      { key: "D", text: "10 m/s" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Persamaan GLBB: v² = v₀² + 2 × a × s, dengan v₀ = 0.")],
      [B("v² = 0 + 2 × 2 × 25 = 100 → v = 10 m/s")],
    ],
  },

  {
    no: 19,
    stimulus: [],
    prompt: S("Sebuah mobil melaju dengan kecepatan 90 km/jam. Jika dinyatakan dalam m/s, kecepatannya adalah ...."),
    options: [
      { key: "A", text: "25 m/s" },
      { key: "B", text: "90 m/s" },
      { key: "C", text: "324 m/s" },
      { key: "D", text: "9 m/s" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Konversi km/jam ke m/s: bagi 3,6.")],
      [B("90 ÷ 3,6 = 25 m/s")],
    ],
  },

  {
    no: 20,
    stimulus: [],
    prompt: S("Sebuah benda bergerak dengan kecepatan awal 4 m/s dan percepatan 3 m/s². Kecepatan benda setelah 2 sekon adalah ...."),
    options: [
      { key: "A", text: "7 m/s" },
      { key: "B", text: "10 m/s" },
      { key: "C", text: "5 m/s" },
      { key: "D", text: "3 m/s" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Persamaan GLBB: v = v₀ + a × t.")],
      [B("v = 4 + (3 × 2) = 4 + 6 = 10 m/s")],
    ],
  },

  {
    no: 21,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 5 kg ditarik dengan gaya 50 N. Percepatan benda tersebut adalah ...."),
    options: [
      { key: "A", text: "250 m/s²" },
      { key: "B", text: "0,1 m/s²" },
      { key: "C", text: "10 m/s²" },
      { key: "D", text: "55 m/s²" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Hukum II Newton: F = m × a, sehingga a = F ÷ m.")],
      [B("a = 50 N ÷ 5 kg = 10 m/s²")],
    ],
  },

  {
    no: 22,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 2 kg bergerak dengan percepatan 6 m/s². Gaya total yang bekerja pada benda tersebut adalah ...."),
    options: [
      { key: "A", text: "8 N" },
      { key: "B", text: "4 N" },
      { key: "C", text: "3 N" },
      { key: "D", text: "12 N" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Hukum II Newton: F = m × a.")],
      [B("F = 2 kg × 6 m/s² = 12 N")],
    ],
  },

  {
    no: 23,
    stimulus: [],
    prompt: S("Sebuah benda diam akan tetap diam, dan benda yang bergerak akan tetap bergerak lurus beraturan jika tidak ada gaya yang bekerja. Pernyataan ini merupakan bunyi ...."),
    options: [
      { key: "A", text: "Hukum I Newton" },
      { key: "B", text: "Hukum Pascal" },
      { key: "C", text: "Hukum II Newton" },
      { key: "D", text: "Hukum III Newton" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Pernyataan tersebut adalah bunyi Hukum I Newton (hukum kelembaman/inersia).")],
      [B("Hukum I Newton: benda akan tetap diam atau bergerak lurus beraturan jika resultan gaya = 0.")],
    ],
  },

  {
    no: 24,
    stimulus: [],
    prompt: S("Sebuah truk dan sebuah sepeda motor bergerak dengan kecepatan sama dan direm hingga berhenti. Truk memerlukan waktu lebih lama untuk berhenti. Hal ini disebabkan truk memiliki ... yang lebih besar."),
    options: [
      { key: "A", text: "Kecepatan" },
      { key: "B", text: "Kelembaman" },
      { key: "C", text: "Percepatan" },
      { key: "D", text: "Massa jenis" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kelembaman (inersia) adalah kecenderungan benda mempertahankan keadaannya. Semakin besar massa, semakin besar kelembaman.")],
      [B("Truk bermassa lebih besar → kelembaman lebih besar → lebih sulit dihentikan.")],
    ],
  },

  {
    no: 25,
    stimulus: [],
    prompt: S("Seorang anak mendorong tembok dengan gaya 100 N. Tembok mendorong anak tersebut dengan gaya reaksi sebesar ...."),
    options: [
      { key: "A", text: "50 N ke arah berlawanan" },
      { key: "B", text: "200 N ke arah berlawanan" },
      { key: "C", text: "100 N ke arah berlawanan" },
      { key: "D", text: "0 N (tembok diam)" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Hukum III Newton: setiap aksi menimbulkan reaksi yang besarnya sama tetapi arahnya berlawanan.")],
      [B("Aksi = 100 N, maka reaksi = 100 N ke arah berlawanan.")],
    ],
  },

  {
    no: 26,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 4 kg berada di atas lantai yang memiliki koefisien gesek statis 0,3. Jika g = 10 m/s², gaya gesek statis maksimum adalah ...."),
    options: [
      { key: "A", text: "1,2 N" },
      { key: "B", text: "4 N" },
      { key: "C", text: "40 N" },
      { key: "D", text: "12 N" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Gaya gesek statis maksimum: f_s = μ_s × N, dengan N = m × g.")],
      [B("N = 4 × 10 = 40 N")],
      [B("f_s = 0,3 × 40 = 12 N")],
    ],
  },

  {
    no: 27,
    stimulus: [],
    prompt: S("Sebuah balok bermassa 10 kg digantung dengan tali. Jika g = 10 m/s², besar tegangan tali adalah ...."),
    options: [
      { key: "A", text: "100 N" },
      { key: "B", text: "1 N" },
      { key: "C", text: "0,1 N" },
      { key: "D", text: "10 N" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Benda dalam keadaan diam → resultan gaya = 0 → T = w = m × g.")],
      [B("T = 10 × 10 = 100 N")],
    ],
  },

  {
    no: 28,
    stimulus: [],
    prompt: S("Dua orang mendorong sebuah kotak ke arah yang sama dengan gaya masing-masing 30 N dan 20 N. Resultan gaya pada kotak tersebut adalah ...."),
    options: [
      { key: "A", text: "600 N" },
      { key: "B", text: "50 N" },
      { key: "C", text: "10 N" },
      { key: "D", text: "35 N" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kedua gaya searah, sehingga resultan dihitung dengan menjumlahkan keduanya.")],
      [B("R = 30 N + 20 N = 50 N")],
      [P("600 N = hasil kali (salah), 10 N = selisih (untuk gaya berlawanan arah), 35 N = rata-rata (tidak tepat).")],
    ],
  },

  {
    no: 29,
    stimulus: [],
    prompt: S("Dua buah gaya bekerja pada benda berlawanan arah, masing-masing 40 N dan 25 N. Resultan gaya tersebut adalah ...."),
    options: [
      { key: "A", text: "25 N" },
      { key: "B", text: "65 N" },
      { key: "C", text: "15 N" },
      { key: "D", text: "35 N" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gaya berlawanan arah → dikurangkan.")],
      [B("R = 40 − 25 = 15 N")],
    ],
  },

  {
    no: 30,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 8 kg mengalami percepatan 2,5 m/s². Gaya total yang bekerja pada benda adalah ...."),
    options: [
      { key: "A", text: "3,2 N" },
      { key: "B", text: "10 N" },
      { key: "C", text: "5,5 N" },
      { key: "D", text: "20 N" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Hukum II Newton: F = m × a.")],
      [B("F = 8 × 2,5 = 20 N")],
    ],
  },

  {
    no: 31,
    stimulus: [],
    prompt: S("Sebuah balok bermassa 5 kg didorong sejauh 4 meter dengan gaya 10 N searah perpindahan. Besar usaha yang dilakukan adalah ...."),
    options: [
      { key: "A", text: "40 J" },
      { key: "B", text: "2,5 J" },
      { key: "C", text: "50 J" },
      { key: "D", text: "14 J" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Usaha: W = F × s × cos θ, dengan θ = 0° (searah) → cos 0° = 1.")],
      [B("W = 10 × 4 = 40 J")],
    ],
  },

  {
    no: 32,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 2 kg berada pada ketinggian 5 meter. Jika g = 10 m/s², energi potensial benda tersebut adalah ...."),
    options: [
      { key: "A", text: "7 J" },
      { key: "B", text: "100 J" },
      { key: "C", text: "10 J" },
      { key: "D", text: "25 J" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Energi potensial: Ep = m × g × h.")],
      [B("Ep = 2 × 10 × 5 = 100 J")],
    ],
  },

  {
    no: 33,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 3 kg bergerak dengan kecepatan 4 m/s. Energi kinetik benda tersebut adalah ...."),
    options: [
      { key: "A", text: "12 J" },
      { key: "B", text: "48 J" },
      { key: "C", text: "24 J" },
      { key: "D", text: "6 J" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Energi kinetik: Ek = ½ × m × v².")],
      [B("Ek = ½ × 3 × 4² = ½ × 3 × 16 = 24 J")],
    ],
  },

  {
    no: 34,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 1 kg dijatuhkan dari ketinggian 20 m. Jika g = 10 m/s², energi potensial di posisi setengah tinggi (10 m) adalah ...."),
    options: [
      { key: "A", text: "50 J" },
      { key: "B", text: "20 J" },
      { key: "C", text: "200 J" },
      { key: "D", text: "100 J" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Ep = m × g × h, dengan h = 10 m (setengah tinggi).")],
      [B("Ep = 1 × 10 × 10 = 100 J")],
    ],
  },

  {
    no: 35,
    stimulus: [],
    prompt: S("Sebuah katrol tetap digunakan untuk mengangkat beban seberat 200 N. Jika gaya dorong yang diberikan adalah 200 N, maka ...."),
    options: [
      { key: "A", text: "Tidak ada keuntungan mekanis" },
      { key: "B", text: "Gaya dorong menjadi 100 N" },
      { key: "C", text: "Ada keuntungan mekanis 2" },
      { key: "D", text: "Beban menjadi 400 N" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Katrol tetap tidak memberikan keuntungan mekanis (KM = 1), hanya mengubah arah gaya.")],
      [B("Gaya dorong = beban = 200 N, KM = 1.")],
    ],
  },

  {
    no: 36,
    stimulus: [],
    prompt: S("Sebuah bidang miring memiliki panjang 6 m dan tinggi 2 m. Jika berat benda 120 N, gaya dorong minimum yang diperlukan adalah ...."),
    options: [
      { key: "A", text: "20 N" },
      { key: "B", text: "40 N" },
      { key: "C", text: "60 N" },
      { key: "D", text: "720 N" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("KM bidang miring = panjang bidang / tinggi = s/h.")],
      [B("KM = 6/2 = 3")],
      [P("Gaya dorong = berat / KM.")],
      [B("F = 120/3 = 40 N")],
    ],
  },

  {
    no: 37,
    stimulus: [],
    prompt: S("Sebuah pengungkit memiliki lengan kuasa 2 m dan lengan beban 0,5 m. Keuntungan mekanis pengungkit tersebut adalah ...."),
    options: [
      { key: "A", text: "2,5" },
      { key: "B", text: "1" },
      { key: "C", text: "4" },
      { key: "D", text: "0,25" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("KM pengungkit = lengan kuasa / lengan beban.")],
      [B("KM = 2/0,5 = 4")],
    ],
  },

  {
    no: 38,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 10 kg bergerak dengan kecepatan 6 m/s. Energi kinetik benda tersebut adalah ...."),
    options: [
      { key: "A", text: "600 J" },
      { key: "B", text: "60 J" },
      { key: "C", text: "30 J" },
      { key: "D", text: "180 J" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Ek = ½ × m × v².")],
      [B("Ek = ½ × 10 × 6² = ½ × 10 × 36 = 180 J")],
    ],
  },

  {
    no: 39,
    stimulus: [],
    prompt: S("Sebuah gaya 25 N bekerja pada benda dan memindahkannya sejauh 8 m searah gaya. Besar usaha yang dilakukan adalah ...."),
    options: [
      { key: "A", text: "200 J" },
      { key: "B", text: "3,125 J" },
      { key: "C", text: "33 J" },
      { key: "D", text: "17 J" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("W = F × s × cos 0° = F × s.")],
      [B("W = 25 × 8 = 200 J")],
    ],
  },

  {
    no: 40,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 4 kg dilempar vertikal ke atas dengan kecepatan 5 m/s. Energi kinetik awal benda adalah ...."),
    options: [
      { key: "A", text: "10 J" },
      { key: "B", text: "50 J" },
      { key: "C", text: "100 J" },
      { key: "D", text: "20 J" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Ek = ½ × m × v².")],
      [B("Ek = ½ × 4 × 5² = ½ × 4 × 25 = 50 J")],
    ],
  },

  {
    no: 41,
    stimulus: [],
    prompt: S("Sebuah roda dengan jari-jari 0,5 m diberi gaya 80 N yang bekerja tepat di tepi roda. Momen gaya (torsi) yang dihasilkan adalah ...."),
    options: [
      { key: "A", text: "20 N·m" },
      { key: "B", text: "160 N·m" },
      { key: "C", text: "40 N·m" },
      { key: "D", text: "80 N·m" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Torsi: τ = F × r.")],
      [B("τ = 80 × 0,5 = 40 N·m")],
    ],
  },

  {
    no: 42,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 0,5 kg digantung pada ketinggian 4 m. Jika g = 10 m/s², energi potensialnya adalah ...."),
    options: [
      { key: "A", text: "2 J" },
      { key: "B", text: "5 J" },
      { key: "C", text: "0,125 J" },
      { key: "D", text: "20 J" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Ep = m × g × h.")],
      [B("Ep = 0,5 × 10 × 4 = 20 J")],
    ],
  },

  {
    no: 43,
    stimulus: [],
    prompt: S("Sebuah anak mendorong gerobak dengan gaya 30 N sejauh 10 m. Jika arah dorongan membentuk sudut 60° terhadap perpindahan, usaha yang dilakukan adalah ...."),
    options: [
      { key: "A", text: "150 J" },
      { key: "B", text: "0 J" },
      { key: "C", text: "260 J" },
      { key: "D", text: "300 J" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("W = F × s × cos θ, dengan θ = 60°, cos 60° = 0,5.")],
      [B("W = 30 × 10 × 0,5 = 150 J")],
    ],
  },

  {
    no: 44,
    stimulus: [],
    prompt: S("Sebuah bidang miring panjangnya 5 m dan tingginya 1 m. Keuntungan mekanis bidang miring tersebut adalah ...."),
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "5" },
      { key: "C", text: "0,2" },
      { key: "D", text: "4" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("KM bidang miring = panjang / tinggi.")],
      [B("KM = 5/1 = 5")],
    ],
  },

  {
    no: 45,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 2 kg bergerak dengan kecepatan 10 m/s. Jika benda diperlambat hingga berhenti, usaha yang dilakukan oleh gaya gesek adalah ...."),
    options: [
      { key: "A", text: "20 J" },
      { key: "B", text: "50 J" },
      { key: "C", text: "100 J" },
      { key: "D", text: "200 J" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Usaha oleh gaya gesek = perubahan energi kinetik: W = ΔEk = Ek akhir − Ek awal.")],
      [B("Ek awal = ½ × 2 × 10² = 100 J, Ek akhir = 0 → W = 100 J")],
    ],
  },

  {
    no: 46,
    stimulus: [],
    prompt: S("Sebuah balok besi bermassa 20 kg memiliki luas alas 0,1 m². Jika g = 10 m/s², tekanan yang dihasilkan balok pada lantai adalah ...."),
    options: [
      { key: "A", text: "200 Pa" },
      { key: "B", text: "20 Pa" },
      { key: "C", text: "2 Pa" },
      { key: "D", text: "2.000 Pa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Tekanan: P = F/A, dengan F = m × g.")],
      [B("F = 20 × 10 = 200 N")],
      [B("P = 200/0,1 = 2.000 Pa")],
    ],
  },

  {
    no: 47,
    stimulus: [],
    prompt: S("Hukum Pascal menyatakan bahwa tekanan yang diberikan pada zat cair dalam ruang tertutup akan diteruskan ke ...."),
    options: [
      { key: "A", text: "Segala arah dengan sama besar" },
      { key: "B", text: "Hanya ke atas" },
      { key: "C", text: "Seluruh arah dengan berkurang" },
      { key: "D", text: "Hanya ke bawah" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Hukum Pascal: tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan ke segala arah dengan sama besar.")],
      [B("Diteruskan ke segala arah dengan sama besar.")],
    ],
  },

  {
    no: 48,
    stimulus: [],
    prompt: S("Sebuah dongkrak hidrolik memiliki penampang kecil 2 cm² dan penampang besar 8 cm². Jika pada penampang kecil diberi gaya 50 N, maka gaya angkat pada penampang besar adalah ...."),
    options: [
      { key: "A", text: "12,5 N" },
      { key: "B", text: "200 N" },
      { key: "C", text: "100 N" },
      { key: "D", text: "400 N" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Hukum Pascal: F₁/A₁ = F₂/A₂ → F₂ = F₁ × (A₂/A₁).")],
      [B("F₂ = 50 × (8/2) = 50 × 4 = 200 N")],
    ],
  },

  {
    no: 49,
    stimulus: [],
    prompt: S("Tekanan hidrostatis pada kedalaman 2 m dalam air (ρ = 1.000 kg/m³, g = 10 m/s²) adalah ...."),
    options: [
      { key: "A", text: "200 Pa" },
      { key: "B", text: "500 Pa" },
      { key: "C", text: "20.000 Pa" },
      { key: "D", text: "2.000 Pa" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Tekanan hidrostatis: P_h = ρ × g × h.")],
      [B("P_h = 1.000 × 10 × 2 = 20.000 Pa")],
    ],
  },

  {
    no: 50,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 6 kg dan luas alas 0,2 m² diletakkan di atas meja. Jika g = 10 m/s², tekanan benda pada meja adalah ...."),
    options: [
      { key: "A", text: "60 Pa" },
      { key: "B", text: "3 Pa" },
      { key: "C", text: "30 Pa" },
      { key: "D", text: "300 Pa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("P = F/A, F = m × g.")],
      [B("F = 6 × 10 = 60 N")],
      [B("P = 60/0,2 = 300 Pa")],
    ],
  },

  {
    no: 51,
    stimulus: [],
    prompt: S("Manakah dari zat berikut yang paling mudah dimampatkan?"),
    options: [
      { key: "A", text: "Udara" },
      { key: "B", text: "Air" },
      { key: "C", text: "Minyak" },
      { key: "D", text: "Raksa" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Gas (udara) paling mudah dimampatkan karena jarak antarpartikelnya sangat jauh.")],
      [B("Udara (gas) paling mudah dimampatkan.")],
      [P("Zat cair dan zat padat sangat sukar dimampatkan.")],
    ],
  },

  {
    no: 52,
    stimulus: [],
    prompt: S("Sebuah balok kayu dengan massa 50 kg memiliki luas penampang 0,5 m². Jika g = 10 m/s², tekanan balok pada lantai adalah ...."),
    options: [
      { key: "A", text: "5 Pa" },
      { key: "B", text: "1.000 Pa" },
      { key: "C", text: "250 Pa" },
      { key: "D", text: "500 Pa" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("P = F/A, F = m × g.")],
      [B("F = 50 × 10 = 500 N")],
      [B("P = 500/0,5 = 1.000 Pa")],
    ],
  },

  {
    no: 53,
    stimulus: [],
    prompt: S("Kapal selam dapat tenggelam dan muncul ke permukaan dengan memanfaatkan prinsip ...."),
    options: [
      { key: "A", text: "Hukum Ohm" },
      { key: "B", text: "Hukum Newton" },
      { key: "C", text: "Hukum Archimedes" },
      { key: "D", text: "Tekanan hidrostatis" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kapal selam memanfaatkan gaya ke atas cairan sesuai Hukum Archimedes untuk mengatur daya apung.")],
      [B("Prinsip yang digunakan adalah Hukum Archimedes.")],
    ],
  },

  {
    no: 54,
    stimulus: [],
    prompt: S("Sebuah benda dengan volume 0,01 m³ dimasukkan ke dalam air (ρ = 1.000 kg/m³, g = 10 m/s²). Besar gaya ke atas yang dialami benda adalah ...."),
    options: [
      { key: "A", text: "1 N" },
      { key: "B", text: "10 N" },
      { key: "C", text: "1.000 N" },
      { key: "D", text: "100 N" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Hukum Archimedes: F_a = ρ_fluida × g × V.")],
      [B("F_a = 1.000 × 10 × 0,01 = 100 N")],
    ],
  },

  {
    no: 55,
    stimulus: [],
    prompt: S("Jika sebuah benda terapung di permukaan air, maka ...."),
    options: [
      { key: "A", text: "Massa jenis benda < massa jenis air" },
      { key: "B", text: "Massa jenis benda = massa jenis air" },
      { key: "C", text: "Gaya ke atas = 0" },
      { key: "D", text: "Massa jenis benda > massa jenis air" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Benda terapung jika massa jenis benda lebih kecil dari massa jenis fluida.")],
      [B("ρ_benda < ρ_fluida → benda terapung.")],
    ],
  },

  {
    no: 56,
    stimulus: [],
    prompt: S("Sebuah benda volumenya 200 cm³ dan massa jenisnya 2 g/cm³. Jika dimasukkan dalam air (1 g/cm³), benda akan ...."),
    options: [
      { key: "A", text: "Terapung sebagian" },
      { key: "B", text: "Tenggelam" },
      { key: "C", text: "Terapung" },
      { key: "D", text: "Melayang" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("ρ_benda = 2 g/cm³ > ρ_air = 1 g/cm³ → benda tenggelam.")],
      [B("Massa jenis benda > massa jenis air → tenggelam.")],
    ],
  },

  {
    no: 57,
    stimulus: [],
    prompt: S("Sebuah dongkrak hidrolik memiliki diameter piston kecil 4 cm dan piston besar 12 cm. Perbandingan gaya angkat terhadap gaya tekan adalah ...."),
    options: [
      { key: "A", text: "1:3" },
      { key: "B", text: "3:1" },
      { key: "C", text: "9:1" },
      { key: "D", text: "1:9" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perbandingan luas = perbandingan kuadrat diameter.")],
      [B("A₂/A₁ = (d₂/d₁)² = (12/4)² = 3² = 9")],
      [P("Maka F₂/F₁ = 9:1.")],
    ],
  },

  {
    no: 58,
    stimulus: [],
    prompt: S("Tekanan atmosfer di permukaan laut adalah sekitar 101.300 Pa. Hal ini setara dengan ...."),
    options: [
      { key: "A", text: "0,1 atm" },
      { key: "B", text: "101 atm" },
      { key: "C", text: "10 atm" },
      { key: "D", text: "1 atm" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("1 atm = 101.325 Pa ≈ 101.300 Pa.")],
      [B("101.300 Pa ≈ 1 atm.")],
    ],
  },

  {
    no: 59,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 120 kg diletakkan di atas tanah dengan luas alas 0,3 m². Jika g = 10 m/s², tekanan benda pada tanah adalah ...."),
    options: [
      { key: "A", text: "4.000 Pa" },
      { key: "B", text: "1.200 Pa" },
      { key: "C", text: "40 Pa" },
      { key: "D", text: "400 Pa" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("P = F/A, F = m × g.")],
      [B("F = 120 × 10 = 1.200 N")],
      [B("P = 1.200/0,3 = 4.000 Pa")],
    ],
  },

  {
    no: 60,
    stimulus: [],
    prompt: S("Jika sebuah benda yang volumenya 0,005 m³ dimasukkan ke dalam minyak (ρ = 800 kg/m³, g = 10 m/s²), maka gaya ke atas minyak pada benda adalah ...."),
    options: [
      { key: "A", text: "4 N" },
      { key: "B", text: "40 N" },
      { key: "C", text: "400 N" },
      { key: "D", text: "8 N" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("F_a = ρ_fluida × g × V.")],
      [B("F_a = 800 × 10 × 0,005 = 40 N")],
    ],
  },

  {
    no: 61,
    stimulus: [],
    prompt: S("Perubahan wujud dari zat cair menjadi gas disebut ...."),
    options: [
      { key: "A", text: "Menyublim" },
      { key: "B", text: "Mengembun" },
      { key: "C", text: "Menguap" },
      { key: "D", text: "Membeku" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Menguap (evaporasi) adalah perubahan wujud dari zat cair menjadi gas.")],
      [B("Zat cair → gas = menguap.")],
    ],
  },

  {
    no: 62,
    stimulus: [],
    prompt: S("Ketika kapur barus dibiarkan di udara, lama-kelamaan volumenya berkurang hingga habis. Perubahan wujud yang terjadi adalah ...."),
    options: [
      { key: "A", text: "Mengembun" },
      { key: "B", text: "Membeku" },
      { key: "C", text: "Menguap" },
      { key: "D", text: "Menyublim" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kapur barus berubah dari padat langsung menjadi gas tanpa melalui fase cair.")],
      [B("Padat → gas = menyublim (sublimasi).")],
    ],
  },

  {
    no: 63,
    stimulus: [],
    prompt: S("Pada pagi hari, titik-titik air sering dijumpai pada daun tanaman. Peristiwa ini disebut ...."),
    options: [
      { key: "A", text: "Mengembun" },
      { key: "B", text: "Menguap" },
      { key: "C", text: "Membeku" },
      { key: "D", text: "Menyublim" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Udara yang lembap di malam hari mendingin, uap air berubah menjadi titik-titik air.")],
      [B("Gas → cair = mengembun (kondensasi).")],
    ],
  },

  {
    no: 64,
    stimulus: [],
    prompt: S("Pada suhu 0°C, air dapat mengalami perubahan wujud menjadi ...."),
    options: [
      { key: "A", text: "Plasma" },
      { key: "B", text: "Padat" },
      { key: "C", text: "Kristal" },
      { key: "D", text: "Gas" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Pada 0°C (titik beku air), air berubah wujud dari cair menjadi padat (es).")],
      [B("Zat cair → padat = membeku (pembekuan).")],
    ],
  },

  {
    no: 65,
    stimulus: [],
    prompt: S("Titik didih air murni pada tekanan 1 atm adalah ...."),
    options: [
      { key: "A", text: "212°C" },
      { key: "B", text: "50°C" },
      { key: "C", text: "100°C" },
      { key: "D", text: "75°C" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Air murni mendidih pada suhu 100°C pada tekanan 1 atm.")],
      [B("Titik didih air murni = 100°C (1 atm).")],
    ],
  },

  {
    no: 66,
    stimulus: [],
    prompt: S("Partikel zat padat memiliki sifat berikut, kecuali ...."),
    options: [
      { key: "A", text: "Saling berdekatan dan teratur" },
      { key: "B", text: "Getarannya sangat terbatas" },
      { key: "C", text: "Gaya tarik antarpartikel sangat kuat" },
      { key: "D", text: "Dapat mengalir dan mengisi wadah" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Zat padat: partikel berdekatan & teratur, getaran terbatas, gaya tarik kuat.")],
      [B("Dapat mengalir dan mengisi wadah adalah sifat zat cair, bukan zat padat.")],
    ],
  },

  {
    no: 67,
    stimulus: [],
    prompt: S("Suatu zat memiliki sifat: bentuk dan volume tetap. Zat tersebut kemungkinan besar berwujud ...."),
    options: [
      { key: "A", text: "Padat" },
      { key: "B", text: "Cair" },
      { key: "C", text: "Plasma" },
      { key: "D", text: "Gas" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Zat padat memiliki bentuk dan volume yang tetap.")],
      [B("Bentuk tetap + volume tetap = zat padat.")],
    ],
  },

  {
    no: 68,
    stimulus: [],
    prompt: S("Suatu zat memiliki sifat: bentuk berubah sesuai wadah, volume tetap. Zat tersebut berwujud ...."),
    options: [
      { key: "A", text: "Plasma" },
      { key: "B", text: "Cair" },
      { key: "C", text: "Padat" },
      { key: "D", text: "Gas" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Zat cair: bentuk mengikuti wadah, tetapi volume tetap.")],
      [B("Bentuk berubah + volume tetap = zat cair.")],
    ],
  },

  {
    no: 69,
    stimulus: [],
    prompt: S("Gaya tarik antarpartikel zat gas sangat lemah sehingga partikel gas ...."),
    options: [
      { key: "A", text: "Saling berdekatan dan teratur" },
      { key: "B", text: "Hanya dapat bergetar" },
      { key: "C", text: "Dapat bergerak bebas ke segala arah" },
      { key: "D", text: "Tidak dapat bergerak" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Pada zat gas, gaya tarik antarpartikel sangat lemah.")],
      [B("Partikel gas dapat bergerak bebas ke segala arah.")],
    ],
  },

  {
    no: 70,
    stimulus: [],
    prompt: S("Es yang berada di dalam freezer lama-kelamaan volumenya berkurang. Peristiwa ini disebut ...."),
    options: [
      { key: "A", text: "Mengembun" },
      { key: "B", text: "Menguap" },
      { key: "C", text: "Membeku" },
      { key: "D", text: "Menyublim" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Es (padat) langsung berubah menjadi uap (gas) tanpa mencair terlebih dahulu.")],
      [B("Padat → gas = menyublim.")],
    ],
  },

  {
    no: 71,
    stimulus: [],
    prompt: S("Proses pendidihan air terjadi ketika ...."),
    options: [
      { key: "A", text: "Seluruh partikel air berubah menjadi gas di seluruh volume" },
      { key: "B", text: "Tekanan air naik" },
      { key: "C", text: "Hanya partikel di permukaan berubah menjadi gas" },
      { key: "D", text: "Air berubah menjadi padat" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Mendidih adalah perubahan wujud cair ke gas yang terjadi di seluruh volume zat cair.")],
      [B("Pendidihan terjadi di seluruh volume, bukan hanya di permukaan (seperti penguapan).")],
    ],
  },

  {
    no: 72,
    stimulus: [],
    prompt: S("Es sebanyak 1 kg pada suhu 0°C diubah seluruhnya menjadi air pada suhu 0°C. Kalor yang dibutuhkan jika kalor lebur es 336.000 J/kg adalah ...."),
    options: [
      { key: "A", text: "168.000 J" },
      { key: "B", text: "336.000 J" },
      { key: "C", text: "672.000 J" },
      { key: "D", text: "33.600 J" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalor lebur (Q = m × L) dibutuhkan untuk mengubah wujud es menjadi air tanpa perubahan suhu.")],
      [B("Q = 1 kg × 336.000 J/kg = 336.000 J")],
    ],
  },

  {
    no: 73,
    stimulus: [],
    prompt: S("Ketika es dipanaskan dari -10°C hingga 10°C, perubahan suhu selama pelelehan es adalah ...."),
    options: [
      { key: "A", text: "Turun selama pelelehan" },
      { key: "B", text: "Tetap pada -10°C" },
      { key: "C", text: "Tetap pada 0°C selama pelelehan" },
      { key: "D", text: "Naik secara linear" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Selama perubahan wujud (pelelehan), suhu zat tetap meskipun kalor terus ditambahkan.")],
      [B("Suhu tetap pada 0°C selama es meleleh.")],
    ],
  },

  {
    no: 74,
    stimulus: [],
    prompt: S("Pada proses melebur, suhu zat ...."),
    options: [
      { key: "A", text: "Turun secara drastis" },
      { key: "B", text: "Selalu naik terus-menerus" },
      { key: "C", text: "Naik kemudian turun" },
      { key: "D", text: "Tetap meskipun terus menerima kalor" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Selama perubahan wujud (melebur/membeku), kalor digunakan untuk mengubah wujud, bukan menaikkan suhu.")],
      [B("Suhu zat tetap selama proses melebur.")],
    ],
  },

  {
    no: 75,
    stimulus: [],
    prompt: S("Antara molekul-molekul zat cair terdapat ...."),
    options: [
      { key: "A", text: "Gaya tarik yang cukup kuat tapi tidak sekuat pada zat padat" },
      { key: "B", text: "Gaya tarik yang sangat lemah" },
      { key: "C", text: "Tidak ada gaya tarik" },
      { key: "D", text: "Gaya tolak yang kuat" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Pada zat cair, gaya tarik antarpartikel ada tetapi lebih lemah dari zat padat.")],
      [B("Gaya tarik antarpartikel zat cair cukup kuat, namun lebih lemah dari zat padat.")],
    ],
  },

  {
    no: 76,
    stimulus: [],
    prompt: S("Kalor jenis suatu zat adalah banyaknya kalor yang diperlukan untuk menaikkan suhu ...."),
    options: [
      { key: "A", text: "1 kg zat sebesar 10°C" },
      { key: "B", text: "1 kg zat sebesar 1°C" },
      { key: "C", text: "100 g zat sebesar 1°C" },
      { key: "D", text: "1 g zat sebesar 1°C" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalor jenis (c): kalor yang dibutuhkan untuk menaikkan suhu 1 kg zat sebesar 1°C.")],
      [B("Satuan: J/(kg·°C). Definisi: 1 kg, 1°C.")],
    ],
  },

  {
    no: 77,
    stimulus: [],
    prompt: S("Kalor jenis air adalah 4.200 J/(kg·°C). Artinya, untuk menaikkan suhu 1 kg air sebesar 1°C diperlukan kalor sebesar ...."),
    options: [
      { key: "A", text: "1.000 J" },
      { key: "B", text: "420 J" },
      { key: "C", text: "4.200 J" },
      { key: "D", text: "42.000 J" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("c_air = 4.200 J/(kg·°C) berarti Q = m × c × ΔT = 1 × 4.200 × 1 = 4.200 J.")],
      [B("4.200 J untuk 1 kg air naik 1°C.")],
    ],
  },

  {
    no: 78,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 0,5 kg dengan kalor jenis 800 J/(kg·°C) dipanaskan dari 20°C hingga 40°C. Banyak kalor yang dibutuhkan adalah ...."),
    options: [
      { key: "A", text: "4.000 J" },
      { key: "B", text: "16.000 J" },
      { key: "C", text: "2.000 J" },
      { key: "D", text: "8.000 J" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Q = m × c × ΔT.")],
      [B("ΔT = 40 − 20 = 20°C")],
      [B("Q = 0,5 × 800 × 20 = 8.000 J")],
    ],
  },

  {
    no: 79,
    stimulus: [],
    prompt: S("Perpindahan kalor pada zat padat tanpa perpindahan partikel disebut ...."),
    options: [
      { key: "A", text: "Konduksi" },
      { key: "B", text: "Radiasi" },
      { key: "C", text: "Evaporasi" },
      { key: "D", text: "Konveksi" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Konduksi: perpindahan panas melalui zat padat tanpa perpindahan partikel.")],
      [B("Konduksi terjadi pada logam yang dipanaskan.")],
    ],
  },

  {
    no: 80,
    stimulus: [],
    prompt: S("Perpindahan panas yang terjadi pada air yang sedang dipanaskan adalah ...."),
    options: [
      { key: "A", text: "Sublimasi" },
      { key: "B", text: "Konveksi" },
      { key: "C", text: "Konduksi" },
      { key: "D", text: "Radiasi" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Pada zat cair, perpindahan panas terjadi karena gerakan partikel (aliran).")],
      [B("Konveksi = perpindahan panas via aliran zat cair/gas.")],
    ],
  },

  {
    no: 81,
    stimulus: [],
    prompt: S("Panas matahari sampai ke bumi melalui perpindahan ...."),
    options: [
      { key: "A", text: "Konduksi" },
      { key: "B", text: "Konveksi" },
      { key: "C", text: "Radiasi" },
      { key: "D", text: "Konveksi dan konduksi" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Radiasi = perpindahan panas tanpa medium (melalui gelombang elektromagnetik).")],
      [B("Panas matahari sampai ke bumi melalui radiasi (vacuum).")],
    ],
  },

  {
    no: 82,
    stimulus: [],
    prompt: S("Jika 2 kg air bersuhu 20°C dipanaskan dengan 84.000 J kalor, suhu akhir air adalah (c = 4.200 J/kg·°C) ...."),
    options: [
      { key: "A", text: "20°C" },
      { key: "B", text: "40°C" },
      { key: "C", text: "10°C" },
      { key: "D", text: "30°C" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Q = m × c × ΔT → ΔT = Q/(m×c).")],
      [B("ΔT = 84.000 / (2 × 4.200) = 84.000/8.400 = 10°C")],
      [B("T_akhir = 20 + 10 = 30°C")],
    ],
  },

  {
    no: 83,
    stimulus: [],
    prompt: S("Logam tembaga merupakan penghantar panas yang baik karena ...."),
    options: [
      { key: "A", text: "Memiliki elektron bebas yang dapat bergerak" },
      { key: "B", text: "Massa jenisnya tinggi" },
      { key: "C", text: "Memiliki kalor jenis yang rendah" },
      { key: "D", text: "Berwarna metalik" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Logam memiliki elektron bebas yang dapat bergerak dan memindahkan energi panas.")],
      [B("Elektron bebas pada logam memudahkan perpindahan kalor secara konduksi.")],
    ],
  },

  {
    no: 84,
    stimulus: [],
    prompt: S("Sebuah besi bermassa 2 kg dan bersuhu 80°C didinginkan hingga 30°C. Jika kalor jenis besi 460 J/(kg·°C), kalor yang dilepas adalah ...."),
    options: [
      { key: "A", text: "23.000 J" },
      { key: "B", text: "46.000 J" },
      { key: "C", text: "9.200 J" },
      { key: "D", text: "4.600 J" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Q = m × c × ΔT.")],
      [B("ΔT = 80 − 30 = 50°C")],
      [B("Q = 2 × 460 × 50 = 46.000 J")],
    ],
  },

  {
    no: 85,
    stimulus: [],
    prompt: S("Asam yang berada di dalam termos tetap panas karena termos memiliki dinding yang ...."),
    options: [
      { key: "A", text: "Menghantarkan panas keluar" },
      { key: "B", text: "Menyerap panas" },
      { key: "C", text: "Memantulkan radiasi panas ke dalam" },
      { key: "D", text: "Terbuat dari plastik" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Termos memiliki dinding berlapis perak yang memantulkan radiasi panas kembali ke dalam.")],
      [B("Lapisan perak memantulkan radiasi → mencegah perpindahan panas keluar.")],
    ],
  },

  {
    no: 86,
    stimulus: [],
    prompt: S("Angin laut terjadi pada siang hari karena daratan lebih cepat panas dari pada lautan. Udara panas di darat naik dan digantikan oleh udara dari laut. Perpindahan panas yang terjadi adalah ...."),
    options: [
      { key: "A", text: "Evaporasi" },
      { key: "B", text: "Konduksi" },
      { key: "C", text: "Radiasi" },
      { key: "D", text: "Konveksi" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Udara panas naik dan udara yang lebih dingin mengalir menggantikannya — ini adalah konveksi.")],
      [B("Konveksi alam: udara panas naik, udara dingin mengalir menggantikan.")],
    ],
  },

  {
    no: 87,
    stimulus: [],
    prompt: S("Sebuah benda bermassa 0,2 kg memiliki kalor jenis 2.000 J/(kg·°C). Jika benda menerima 4.000 J kalor, kenaikan suhunya adalah ...."),
    options: [
      { key: "A", text: "10°C" },
      { key: "B", text: "2°C" },
      { key: "C", text: "5°C" },
      { key: "D", text: "20°C" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("ΔT = Q/(m×c).")],
      [B("ΔT = 4.000 / (0,2 × 2.000) = 4.000/400 = 10°C")],
    ],
  },

  {
    no: 88,
    stimulus: [],
    prompt: S("Pada perpindahan panas secara radiasi, medium ...."),
    options: [
      { key: "A", text: "Harus berupa zat cair" },
      { key: "B", text: "Tidak diperlukan" },
      { key: "C", text: "Harus berupa gas" },
      { key: "D", text: "Harus berupa logam" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Radiasi tidak memerlukan medium — panas berpindah melalui gelombang elektromagnetik.")],
      [B("Radiasi bisa terjadi di ruang hampa (vacuum).")],
    ],
  },

  {
    no: 89,
    stimulus: [],
    prompt: S("Jika 500 g air (c = 4.200 J/kg·°C) dipanaskan dari 25°C hingga 75°C, kalor yang diperlukan adalah ...."),
    options: [
      { key: "A", text: "210.000 J" },
      { key: "B", text: "21.000 J" },
      { key: "C", text: "105.000 J" },
      { key: "D", text: "42.000 J" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Q = m × c × ΔT.")],
      [B("ΔT = 75 − 25 = 50°C")],
      [B("Q = 0,5 × 4.200 × 50 = 105.000 J")],
    ],
  },

  {
    no: 90,
    stimulus: [],
    prompt: S("Panci yang terbuat dari aluminium lebih cepat panas dibandingkan panci kaca karena aluminium ...."),
    options: [
      { key: "A", text: "Memiliki massa jenis rendah" },
      { key: "B", text: "Memantulkan panas" },
      { key: "C", text: "Memiliki kalor jenis tinggi" },
      { key: "D", text: "Merupakan konduktor panas yang baik" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Aluminium adalah logam yang merupakan konduktor panas baik.")],
      [B("Aluminium menghantarkan panas dengan baik karena memiliki elektron bebas.")],
    ],
  },

  {
    no: 91,
    stimulus: [],
    prompt: S("Getaran yang ditinjau dalam selang waktu 1 sekon disebut ...."),
    options: [
      { key: "A", text: "Frekuensi" },
      { key: "B", text: "Periode" },
      { key: "C", text: "Panjang gelombang" },
      { key: "D", text: "Amplitudo" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Frekuensi adalah banyaknya getaran per sekon. Satuan: Hertz (Hz).")],
      [B("Frekuensi = getaran per sekon (Hz).")],
    ],
  },

  {
    no: 92,
    stimulus: [],
    prompt: S("Sebuah bandul melakukan 600 getaran dalam waktu 2 menit. Frekuensi bandul tersebut adalah ...."),
    options: [
      { key: "A", text: "300 Hz" },
      { key: "B", text: "5 Hz" },
      { key: "C", text: "2 Hz" },
      { key: "D", text: "10 Hz" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Frekuensi (f) = jumlah getaran / waktu (sekon).")],
      [B("2 menit = 120 sekon")],
      [B("f = 600 / 120 = 5 Hz")],
    ],
  },

  {
    no: 93,
    stimulus: [],
    prompt: S("Suatu benda bergetar dengan frekuensi 50 Hz. Periode getaran benda tersebut adalah ...."),
    options: [
      { key: "A", text: "0,01 sekon" },
      { key: "B", text: "0,05 sekon" },
      { key: "C", text: "0,02 sekon" },
      { key: "D", text: "50 sekon" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Periode (T) = 1/f.")],
      [B("T = 1/50 = 0,02 sekon")],
    ],
  },

  {
    no: 94,
    stimulus: [],
    prompt: S("Bunyi yang dapat didengar oleh telinga manusia memiliki frekuensi antara ...."),
    options: [
      { key: "A", text: "20 Hz – 2.000 Hz" },
      { key: "B", text: "200 Hz – 20.000 Hz" },
      { key: "C", text: "1 Hz – 1.000 Hz" },
      { key: "D", text: "20 Hz – 20.000 Hz" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Telinga manusia dapat mendengar bunyi dengan frekuensi 20 Hz hingga 20.000 Hz.")],
      [B("20 Hz – 20.000 Hz.")],
    ],
  },

  {
    no: 95,
    stimulus: [],
    prompt: S("Bunyi yang frekuensinya di bawah 20 Hz disebut ...."),
    options: [
      { key: "A", text: "Infrasonik" },
      { key: "B", text: "Supersonik" },
      { key: "C", text: "Ultrasonik" },
      { key: "D", text: "Audiosonik" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Infrasonik: frekuensi < 20 Hz (di bawah ambang pendengaran manusia).")],
      [B("Infrasonik = frekuensi < 20 Hz.")],
    ],
  },

  {
    no: 96,
    stimulus: [],
    prompt: S("Gelombang bunyi memerlukan medium untuk merambat. Hal ini menunjukkan bahwa bunyi tidak dapat merambat melalui ...."),
    options: [
      { key: "A", text: "Udara" },
      { key: "B", text: "Ruang hampa" },
      { key: "C", text: "Air" },
      { key: "D", text: "Besi" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Bunyi adalah gelombang mekanik yang memerlukan medium.")],
      [B("Bunyi tidak dapat merambat di ruang hampa (vacuum).")],
    ],
  },

  {
    no: 97,
    stimulus: [],
    prompt: S("Bunyi merambat paling cepat dalam zat ...."),
    options: [
      { key: "A", text: "Cair" },
      { key: "B", text: "Plasma" },
      { key: "C", text: "Padat" },
      { key: "D", text: "Gas" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kecepatan bunyi: paling cepat di zat padat, lebih lambat di cair, paling lambat di gas.")],
      [B("Bunyi paling cepat di zat padat karena partikelnya berdekatan.")],
    ],
  },

  {
    no: 98,
    stimulus: [],
    prompt: S("Cepat rambat bunyi di udara pada suhu 20°C adalah sekitar ...."),
    options: [
      { key: "A", text: "340.000 m/s" },
      { key: "B", text: "3.400 m/s" },
      { key: "C", text: "34 m/s" },
      { key: "D", text: "340 m/s" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Cepat rambat bunyi di udara pada 20°C ≈ 340 m/s.")],
      [B("v_udara ≈ 340 m/s (pada 20°C).")],
    ],
  },

  {
    no: 99,
    stimulus: [],
    prompt: S("Jika sebuah sumber bunyi dan pengamat saling menjauhi, pengamat akan mendengar bunyi yang frekuensinya lebih rendah. Gejala ini disebut ...."),
    options: [
      { key: "A", text: "Efek Doppler" },
      { key: "B", text: "Resonansi" },
      { key: "C", text: "Pemantulan bunyi" },
      { key: "D", text: "Interferensi" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Efek Doppler: perubahan frekuensi bunyi yang terjadi saat sumber dan pengamat saling mendekati/menjauhi.")],
      [B("Efek Doppler terjadi saat sumber & pengamat bergerak relatif.")],
    ],
  },

  {
    no: 100,
    stimulus: [],
    prompt: S("Bunyi pantul yang datang setelah bunyi asli sekitar 0,1 sekon atau lebih disebut ...."),
    options: [
      { key: "A", text: "Lewitt" },
      { key: "B", text: "Gema (gaung)" },
      { key: "C", text: "Bidang bunyi" },
      { key: "D", text: "Resonansi" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gema (echo): bunyi pantul yang terdengar setelah bunyi asli selesai, karena jarak sumber ke pemantul cukup jauh.")],
      [B("Gema terjadi jika selang waktu ≥ 0,1 sekon.")],
    ],
  },

  {
    no: 101,
    stimulus: [],
    prompt: S("Dua buah garputala bergetar bersamaan. Jika frekuensinya berbeda sedikit, terdengar bunyi yang amplitudonya membesar dan mengecil secara periodik. Peristiwa ini disebut ...."),
    options: [
      { key: "A", text: "Interferensi" },
      { key: "B", text: "Resonansi" },
      { key: "C", text: "Layang" },
      { key: "D", text: "Gema" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Layang (beat): interferensi dua gelombang bunyi dengan frekuensi berbeda sedikit.")],
      [B("Layang terjadi saat dua frekuensi hampir sama dipukul bersamaan.")],
    ],
  },

  {
    no: 102,
    stimulus: [],
    prompt: S("Sebuah gelas pecah ketika dinyanyikan dengan nada yang sesuai. Peristiwa ini merupakan contoh dari ...."),
    options: [
      { key: "A", text: "Pemantulan bunyi" },
      { key: "B", text: "Layang" },
      { key: "C", text: "Efek Doppler" },
      { key: "D", text: "Resonansi" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Resonansi: peristiwa ikut bergetarnya suatu benda karena frekuensi sumber sama dengan frekuensi benda.")],
      [B("Gelas beresonansi dengan nada yang frekuensinya sama.")],
    ],
  },

  {
    no: 103,
    stimulus: [],
    prompt: S("Sebuah bunyi dipantulkan dari tebing dan kembali ke pendengar dalam waktu 2 sekon. Jika cepat rambat bunyi di udara 340 m/s, jarak antara pendengar dan tebing adalah ...."),
    options: [
      { key: "A", text: "340 m" },
      { key: "B", text: "680 m" },
      { key: "C", text: "1.360 m" },
      { key: "D", text: "170 m" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Bunyi menempuh jarak pulang-pergi (2 × jarak ke tebing).")],
      [B("d = v × t / 2")],
      [B("d = 340 × 2 / 2 = 340 m")],
    ],
  },

  {
    no: 104,
    stimulus: [],
    prompt: S("Amplitudo getaran adalah ...."),
    options: [
      { key: "A", text: "Waktu satu getaran" },
      { key: "B", text: "Jarak terjauh dari titik kesetimbangan" },
      { key: "C", text: "Jarak yang ditempuh satu getaran" },
      { key: "D", text: "Banyaknya getaran per sekon" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Amplitudo adalah simpangan terbesar dari titik kesetimbangan.")],
      [B("Amplitudo = simpangan maksimum dari titik kesetimbangan.")],
    ],
  },

  {
    no: 105,
    stimulus: [],
    prompt: S("Resonansi pada tabung udara dapat terjadi jika ...."),
    options: [
      { key: "A", text: "Panjang tabung sama dengan panjang gelombang bunyi" },
      { key: "B", text: "Amplitudo sumber sama dengan amplitudo tabung" },
      { key: "C", text: "Frekuensi sumber bunyi sama dengan frekuensi tabung" },
      { key: "D", text: "Cepat rambat bunyi sama dengan cepat rambat getaran tabung" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Resonansi: frekuensi sumber sama dengan frekuensi alami tabung.")],
      [B("Resonansi terjadi saat frekuensi sumber = frekuensi alami resonator.")],
    ],
  },

  {
    no: 106,
    stimulus: [],
    prompt: S("Cahaya yang merambat lurus dapat dibuktikan oleh ...."),
    options: [
      { key: "A", text: "Warna biru langit" },
      { key: "B", text: "Cahaya matahari" },
      { key: "C", text: "Pelangi setelah hujan" },
      { key: "D", text: "Bayangan benda yang terbentuk" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Bayangan terbentuk karena cahaya merambat lurus dan terhalang oleh benda.")],
      [B("Bayangan terbentuk karena cahaya merambat lurus.")],
    ],
  },

  {
    no: 107,
    stimulus: [],
    prompt: S("Pemantulan cahaya pada cermin datar menghasilkan bayangan yang bersifat ...."),
    options: [
      { key: "A", text: "Maya, tegak, sama besar" },
      { key: "B", text: "Nyata, tegak, sama besar" },
      { key: "C", text: "Maya, tegak, diperbesar" },
      { key: "D", text: "Nyata, terbalik, diperkecil" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Cermin datar menghasilkan bayangan maya, tegak, dan sama besar dengan benda.")],
      [B("Bayangan cermin datar: maya, tegak, sama besar.")],
    ],
  },

  {
    no: 108,
    stimulus: [],
    prompt: S("Sebuah benda berjarak 15 cm di depan cermin datar. Jarak bayangan benda ke benda adalah ...."),
    options: [
      { key: "A", text: "7,5 cm" },
      { key: "B", text: "30 cm" },
      { key: "C", text: "15 cm" },
      { key: "D", text: "45 cm" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Pada cermin datar, jarak bayangan = jarak benda ke cermin.")],
      [B("Jarak bayangan ke cermin = 15 cm, maka jarak bayangan ke benda = 15 + 15 = 30 cm.")],
    ],
  },

  {
    no: 109,
    stimulus: [],
    prompt: S("Sebuah benda setinggi 10 cm berada 30 cm di depan cermin cekung dengan jarak fokus 15 cm. Jarak bayangan ke cermin adalah ...."),
    options: [
      { key: "A", text: "15 cm" },
      { key: "B", text: "60 cm" },
      { key: "C", text: "30 cm" },
      { key: "D", text: "10 cm" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Rumus cermin: 1/f = 1/s + 1/s\', dengan f = 15 cm, s = 30 cm.")],
      [B("1/15 = 1/30 + 1/s\' → 1/s\' = 1/15 − 1/30 = 2/30 − 1/30 = 1/30 → s\' = 30 cm")],
    ],
  },

  {
    no: 110,
    stimulus: [],
    prompt: S("Pada peristiwa pembiasan cahaya, sinar datang, sinar bias, dan garis normal berada ...."),
    options: [
      { key: "A", text: "Sejajar satu sama lain" },
      { key: "B", text: "Pada bidang yang berbeda" },
      { key: "C", text: "Tidak memiliki hubungan" },
      { key: "D", text: "Pada satu bidang" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Sinar datar, sinar bias, dan garis normal terletak pada satu bidang (Hukum I pembiasan).")],
      [B("Ketiganya berada pada satu bidang.")],
    ],
  },

  {
    no: 111,
    stimulus: [],
    prompt: S("Pelangi terbentuk karena peristiwa ...."),
    options: [
      { key: "A", text: "Pembiasan dan pendispersian cahaya" },
      { key: "B", text: "Pemantulan cahaya" },
      { key: "C", text: "Interferensi cahaya" },
      { key: "D", text: "Difraksi cahaya" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Pelangi terbentuk karena pembiasan dan dispersi cahaya oleh tetisan air hujan.")],
      [B("Pembiasan + dispersi menghasilkan pelangi.")],
    ],
  },

  {
    no: 112,
    stimulus: [],
    prompt: S("Sebuah lensa cembung memiliki jarak fokus 10 cm. Sebuah benda berada 30 cm di depan lensa. Jarak bayangan adalah ...."),
    options: [
      { key: "A", text: "10 cm" },
      { key: "B", text: "15 cm" },
      { key: "C", text: "30 cm" },
      { key: "D", text: "7,5 cm" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Rumus lensa: 1/f = 1/s + 1/s\', dengan f = 10 cm, s = 30 cm.")],
      [B("1/10 = 1/30 + 1/s\' → 1/s\' = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → s\' = 15 cm")],
    ],
  },

  {
    no: 113,
    stimulus: [],
    prompt: S("Lensa yang digunakan pada kamera adalah lensa ...."),
    options: [
      { key: "A", text: "Silindris" },
      { key: "B", text: "Cekung" },
      { key: "C", text: "Cembung" },
      { key: "D", text: "Datar" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kamera menggunakan lensa cembung konvergen untuk mengumpulkan cahaya dan membentuk bayangan real.")],
      [B("Kamera menggunakan lensa cembung.")],
    ],
  },

  {
    no: 114,
    stimulus: [],
    prompt: S("Mata yang tidak dapat melihat benda jauh dengan jelas (bayangan jatuh di depan retina) disebut ...."),
    options: [
      { key: "A", text: "Hipermetropi" },
      { key: "B", text: "Astigmatisme" },
      { key: "C", text: "Presbiopi" },
      { key: "D", text: "Miopi" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Miopi: mata tidak dapat melihat benda jauh, bayangan jatuh di depan retina.")],
      [B("Miopi = rabun jauh, dibantu lensa cekung (divergen).")],
    ],
  },

  {
    no: 115,
    stimulus: [],
    prompt: S("Mata yang tidak dapat melihat benda dekat dengan jelas disebut ...."),
    options: [
      { key: "A", text: "Hipermetropi" },
      { key: "B", text: "Astigmatisme" },
      { key: "C", text: "Presbiopi" },
      { key: "D", text: "Miopi" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Hipermetropi: mata tidak dapat melihat benda dekat, bayangan jatuh di belakang retina.")],
      [B("Hipermetropi = rabun dekat, dibantu lensa cembung (konvergen).")],
    ],
  },

  {
    no: 116,
    stimulus: [],
    prompt: S("Kaca mata untuk penderita miopi adalah ...."),
    options: [
      { key: "A", text: "Lensa datar" },
      { key: "B", text: "Lensa cekung" },
      { key: "C", text: "Lensa cembung" },
      { key: "D", text: "Lensa silindris" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Miopi: bayangan jatuh di depan retina → perlu lensa yang menyebarkan cahaya (divergen).")],
      [B("Lensa cekung (divergen) untuk miopi.")],
    ],
  },

  {
    no: 117,
    stimulus: [],
    prompt: S("Sebuah lup (kaca pembesar) menggunakan lensa cembung. Sebuah benda setinggi 2 cm ditempatkan 5 cm di depan lup (f = 10 cm). Perbesaran bayangan adalah ...."),
    options: [
      { key: "A", text: "0,5×" },
      { key: "B", text: "1×" },
      { key: "C", text: "2×" },
      { key: "D", text: "3×" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Rumus lensa: 1/f = 1/s + 1/s\', dengan f = 10 cm, s = 5 cm.")],
      [B("1/s\' = 1/10 − 1/5 = 1/10 − 2/10 = −1/10 → s\' = −10 cm")],
      [P("Perbesaran M = |s\'/s| = |−10/5| = 2×")],
      [B("M = 2×")],
    ],
  },

  {
    no: 118,
    stimulus: [],
    prompt: S("Sudut datang dan sudut pantul pada pemantulan cahaya ...."),
    options: [
      { key: "A", text: "Sudut datang lebih kecil dari sudut pantul" },
      { key: "B", text: "Tidak ada hubungan" },
      { key: "C", text: "Sudut datang lebih besar dari sudut pantul" },
      { key: "D", text: "Sudut datang sama dengan sudut pantul" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Hukum pemantulan: sudut datang (i) = sudut pantul (r).")],
      [B("i = r.")],
    ],
  },

  {
    no: 119,
    stimulus: [],
    prompt: S("Sebuah benda setinggi 5 cm berada 20 cm di depan cermin cekung dengan f = 10 cm. Tinggi bayangan yang terbentuk adalah ...."),
    options: [
      { key: "A", text: "5 cm" },
      { key: "B", text: "20 cm" },
      { key: "C", text: "2,5 cm" },
      { key: "D", text: "10 cm" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("1/f = 1/s + 1/s\' → 1/10 = 1/20 + 1/s\' → 1/s\' = 1/10 − 1/20 = 1/20 → s\' = 20 cm.")],
      [B("Perbesaran M = s\'/s = 20/20 = 1×")],
      [B("Tinggi bayangan = M × tinggi benda = 1 × 5 = 5 cm.")],
    ],
  },

  {
    no: 120,
    stimulus: [],
    prompt: S("Periskop pada kapal selam memanfaatkan cermin ...."),
    options: [
      { key: "A", text: "Cekung" },
      { key: "B", text: "Datar" },
      { key: "C", text: "Cembung" },
      { key: "D", text: "Silindris" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Periskop menggunakan dua cermin datar yang sejajar untuk memantulkan cahaya.")],
      [B("Periskop menggunakan cermin datar.")],
    ],
  },

  {
    no: 121,
    stimulus: [],
    prompt: S("Muatan listrik yang diam dan tidak mengalir disebut muatan ...."),
    options: [
      { key: "A", text: "Negatif" },
      { key: "B", text: "Netral" },
      { key: "C", text: "Statis" },
      { key: "D", text: "Dinamis" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Listrik statis: muatan yang diam dan tidak mengalir.")],
      [B("Muatan statis tidak mengalir.")],
    ],
  },

  {
    no: 122,
    stimulus: [],
    prompt: S("Benda yang kelebihan elektron memiliki muatan ...."),
    options: [
      { key: "A", text: "Tidak tentu" },
      { key: "B", text: "Positif" },
      { key: "C", text: "Netral" },
      { key: "D", text: "Negatif" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Elektron bermuatan negatif. Benda yang menerima elektron berlebih akan bermuatan negatif.")],
      [B("Kelebihan elektron → muatan negatif.")],
    ],
  },

  {
    no: 123,
    stimulus: [],
    prompt: S("Benda yang kekurangan elektron memiliki muatan ...."),
    options: [
      { key: "A", text: "Positif" },
      { key: "B", text: "Negatif" },
      { key: "C", text: "Netral" },
      { key: "D", text: "Tidak tentu" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Jika benda kehilangan elektron, kelebihan proton menyebabkan muatan positif.")],
      [B("Kekurangan elektron → muatan positif.")],
    ],
  },

  {
    no: 124,
    stimulus: [],
    prompt: S("Dua muatan sejenis (positif dengan positif) yang didekatkan akan ...."),
    options: [
      { key: "A", text: "Tidak saling memengaruhi" },
      { key: "B", text: "Tolak-menolak" },
      { key: "C", text: "Netral" },
      { key: "D", text: "Tarik-menarik" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Hukum Coulomb: muatan sejenis tolak-menolak, muatan tak sejenis tarik-menarik.")],
      [B("Muatan sejenis → tolak-menolak.")],
    ],
  },

  {
    no: 125,
    stimulus: [],
    prompt: S("Dua muatan berbeda jenis (+ dan −) yang didekatkan akan ...."),
    options: [
      { key: "A", text: "Netral" },
      { key: "B", text: "Tolak-menolak" },
      { key: "C", text: "Tarik-menarik" },
      { key: "D", text: "Tidak saling memengaruhi" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Muatan berbeda jenis tarik-menarik.")],
      [B("+ dan − → tarik-menarik.")],
    ],
  },

  {
    no: 126,
    stimulus: [],
    prompt: S("Arus listrik yang mengalir melalui penghantar terjadi karena adanya ...."),
    options: [
      { key: "A", text: "Muatan statis" },
      { key: "B", text: "Gaya gesek" },
      { key: "C", text: "Tekanan" },
      { key: "D", text: "Gaya gerak listrik (beda potensial)" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Arus listrik mengalir karena adanya beda potensial (tegangan) antara dua titik.")],
      [B("Beda potensial menyebabkan arus listrik mengalir.")],
    ],
  },

  {
    no: 127,
    stimulus: [],
    prompt: S("Hukum Ohm menyatakan bahwa perbandingan tegangan dan kuat arus yang mengalir pada penghantar adalah ...."),
    options: [
      { key: "A", text: "Tetap (konstan)" },
      { key: "B", text: "Tidak terkait" },
      { key: "C", text: "Berbanding terbalik" },
      { key: "D", text: "Berubah-ubah" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Hukum Ohm: V/I = R = konstan (untuk suhu tetap).")],
      [B("V/I = R = tetap.")],
    ],
  },

  {
    no: 128,
    stimulus: [],
    prompt: S("Sebuah lampu dengan hambatan 20 ohm dialiri arus 0,5 A. Tegangan listrik pada lampu tersebut adalah ...."),
    options: [
      { key: "A", text: "20,5 V" },
      { key: "B", text: "10 V" },
      { key: "C", text: "40 V" },
      { key: "D", text: "0,025 V" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Hukum Ohm: V = I × R.")],
      [B("V = 0,5 × 20 = 10 V")],
    ],
  },

  {
    no: 129,
    stimulus: [],
    prompt: S("Sebuah penghantar dengan hambatan 10 ohm diberi tegangan 12 V. Kuat arus yang mengalir adalah ...."),
    options: [
      { key: "A", text: "120 A" },
      { key: "B", text: "0,83 A" },
      { key: "C", text: "1,2 A" },
      { key: "D", text: "22 A" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Hukum Ohm: I = V/R.")],
      [B("I = 12/10 = 1,2 A")],
    ],
  },

  {
    no: 130,
    stimulus: [],
    prompt: S("Sebuah lampu dengan tegangan 220 V dialiri arus 2 A. Hambatan lampu tersebut adalah ...."),
    options: [
      { key: "A", text: "220 ohm" },
      { key: "B", text: "55 ohm" },
      { key: "C", text: "440 ohm" },
      { key: "D", text: "110 ohm" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Hukum Ohm: R = V/I.")],
      [B("R = 220/2 = 110 ohm")],
    ],
  },

  {
    no: 131,
    stimulus: [],
    prompt: S("Tiga buah resistor masing-masing 4 ohm, 6 ohm, dan 8 ohm disusun seri. Hambatan totalnya adalah ...."),
    options: [
      { key: "A", text: "18 ohm" },
      { key: "B", text: "12 ohm" },
      { key: "C", text: "1,83 ohm" },
      { key: "D", text: "4 ohm" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Susunan seri: R_total = R₁ + R₂ + R₃.")],
      [B("R_total = 4 + 6 + 8 = 18 ohm")],
    ],
  },

  {
    no: 132,
    stimulus: [],
    prompt: S("Dua buah resistor masing-masing 6 ohm dan 12 ohm disusun paralel. Hambatan totalnya adalah ...."),
    options: [
      { key: "A", text: "18 ohm" },
      { key: "B", text: "4 ohm" },
      { key: "C", text: "9 ohm" },
      { key: "D", text: "2 ohm" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Susunan paralel: 1/R_total = 1/R₁ + 1/R₂.")],
      [B("1/R_total = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4")],
      [B("R_total = 4 ohm")],
    ],
  },

  {
    no: 133,
    stimulus: [],
    prompt: S("Sebuah lampu 100 W dipasang pada tegangan 220 V. Arus listrik yang mengalir adalah ...."),
    options: [
      { key: "A", text: "22 A" },
      { key: "B", text: "100 A" },
      { key: "C", text: "0,45 A" },
      { key: "D", text: "2,2 A" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Daya listrik: P = V × I → I = P/V.")],
      [B("I = 100/220 ≈ 0,45 A")],
    ],
  },

  {
    no: 134,
    stimulus: [],
    prompt: S("Energi listrik yang digunakan oleh lampu 60 W selama 5 jam adalah ...."),
    options: [
      { key: "A", text: "3 kWh" },
      { key: "B", text: "300 kWh" },
      { key: "C", text: "12 kWh" },
      { key: "D", text: "0,3 kWh" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Energi: E = P × t, dengan P dalam kW dan t dalam jam.")],
      [B("P = 60 W = 0,06 kW, t = 5 jam")],
      [B("E = 0,06 × 5 = 0,3 kWh")],
    ],
  },

  {
    no: 135,
    stimulus: [],
    prompt: S("Listrik selalu mengalir dari potensial ... ke potensial ...."),
    options: [
      { key: "A", text: "Tinggi ke rendah" },
      { key: "B", text: "Rendah ke tinggi" },
      { key: "C", text: "Positif ke positif" },
      { key: "D", text: "Netral ke positif" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Arus listrik mengalir dari potensial tinggi ke potensial rendah.")],
      [B("Dari potensial tinggi ke potensial rendah.")],
    ],
  },

  {
    no: 136,
    stimulus: [],
    prompt: S("Sebuah magnet batang dipotong menjadi dua bagian. Setiap bagian akan ...."),
    options: [
      { key: "A", text: "Memiliki satu kutub saja" },
      { key: "B", text: "Memiliki dua kutub (utara dan selatan)" },
      { key: "C", text: "Menjadi magnet lemah" },
      { key: "D", text: "Hilang sifat magnetnya" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sifat magnet: tidak dapat dipotong menjadi satu kutub. Setiap potongan tetap memiliki dua kutub.")],
      [B("Setiap potongan memiliki kutub utara dan selatan.")],
    ],
  },

  {
    no: 137,
    stimulus: [],
    prompt: S("Gaya tarik magnet paling kuat terdapat pada ...."),
    options: [
      { key: "A", text: "Tidak ada" },
      { key: "B", text: "Bagian tengah magnet" },
      { key: "C", text: "Kutub-kutub magnet" },
      { key: "D", text: "Pada semua bagian sama" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gaya tarik magnet terkuat pada kutub utara dan selatan.")],
      [B("Gaya magnet terkuat di kutub-kutubnya.")],
    ],
  },

  {
    no: 138,
    stimulus: [],
    prompt: S("Di sekitar kawat berarus listrik terdapat ...."),
    options: [
      { key: "A", text: "Medan listrik" },
      { key: "B", text: "Medan gravitasi" },
      { key: "C", text: "Tidak ada medan" },
      { key: "D", text: "Medan magnet" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Arus listrik menghasilkan medan magnet di sekitarnya (percobaan Oersted).")],
      [B("Arus listrik → medan magnet.")],
    ],
  },

  {
    no: 139,
    stimulus: [],
    prompt: S("Kawat kumparan yang berarus listrik dapat menjadi magnet buatan. Magnet ini disebut ...."),
    options: [
      { key: "A", text: "Elektromagnet" },
      { key: "B", text: "Magnet batang" },
      { key: "C", text: "Magnet jarum" },
      { key: "D", text: "Magnet permanen" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Elektromagnet: kumparan berarus listrik yang berfungsi sebagai magnet.")],
      [B("Elektromagnet = kumparan + inti besi + arus listrik.")],
    ],
  },

  {
    no: 140,
    stimulus: [],
    prompt: S("Pada generator listrik, energi yang diubah menjadi energi listrik adalah ...."),
    options: [
      { key: "A", text: "Energi panas" },
      { key: "B", text: "Energi mekanik" },
      { key: "C", text: "Energi kimia" },
      { key: "D", text: "Energi cahaya" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Generator mengubah energi mekanik (gerak) menjadi energi listrik.")],
      [B("Generator: energi mekanik → energi listrik.")],
    ],
  },

  {
    no: 141,
    stimulus: [],
    prompt: S("Motor listrik mengubah energi listrik menjadi ...."),
    options: [
      { key: "A", text: "Energi cahaya" },
      { key: "B", text: "Energi panas" },
      { key: "C", text: "Energi mekanik" },
      { key: "D", text: "Energi kimia" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Motor listrik: energi listrik → energi mekanik (gerak).")],
      [B("Motor listrik: listrik → mekanik.")],
    ],
  },

  {
    no: 142,
    stimulus: [],
    prompt: S("Trafo (transformator) berfungsi untuk ...."),
    options: [
      { key: "A", text: "Mengubah arus DC menjadi AC" },
      { key: "B", text: "Menyimpan energi listrik" },
      { key: "C", text: "Mengubah energi listrik menjadi mekanik" },
      { key: "D", text: "Mengubah tegangan AC" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Trafo mengubah tegangan AC (menaikkan atau menurunkan).")],
      [B("Trafo: mengubah tegangan AC.")],
    ],
  },

  {
    no: 143,
    stimulus: [],
    prompt: S("Sebuah trafo memiliki 200 lilitan primer dan 1.000 lilitan sekunder. Jika tegangan primer 12 V, tegangan sekundernya adalah ...."),
    options: [
      { key: "A", text: "60 V" },
      { key: "B", text: "240 V" },
      { key: "C", text: "2,4 V" },
      { key: "D", text: "12 V" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Rumus trafo: Vp/Vs = Np/Ns.")],
      [B("12/Vs = 200/1.000 → Vs = 12 × 1.000/200 = 60 V")],
    ],
  },

  {
    no: 144,
    stimulus: [],
    prompt: S("Pada trafo step-up, jumlah lilitan sekunder ... lilitan primer."),
    options: [
      { key: "A", text: "Lebih sedikit dari" },
      { key: "B", text: "Lebih banyak dari" },
      { key: "C", text: "Sama dengan" },
      { key: "D", text: "Setengah dari" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Trafo step-up: Vs > Vp → Ns > Np.")],
      [B("Lilitan sekunder lebih banyak dari lilitan primer.")],
    ],
  },

  {
    no: 145,
    stimulus: [],
    prompt: S("Dinamo pada sepeda menghasilkan arus listrik saat diputar. Peristiwa ini didasarkan pada ...."),
    options: [
      { key: "A", text: "Hukum Pascal" },
      { key: "B", text: "Hukum Archimedes" },
      { key: "C", text: "Induksi elektromagnetik" },
      { key: "D", text: "Hukum Ohm" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Dinamo bekerja berdasarkan induksi elektromagnetik (perubahan medan magnet menghasilkan GGL).")],
      [B("Induksi elektromagnetik: perubahan fluks magnet → GGL.")],
    ],
  },

  {
    no: 146,
    stimulus: [],
    prompt: S("Hubungan timbal balik antara makhluk hidup dengan lingkungannya dipelajari dalam ...."),
    options: [
      { key: "A", text: "Genetika" },
      { key: "B", text: "Anatomi" },
      { key: "C", text: "Fisiologi" },
      { key: "D", text: "Ekologi" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Ekologi: cabang biologi yang mempelajari hubungan timbal balik antara makhluk hidup dan lingkungannya.")],
      [B("Ekologi = interaksi makhluk hidup ↔ lingkungan.")],
    ],
  },

  {
    no: 147,
    stimulus: [],
    prompt: S("Komponen ekosistem yang terdiri dari produsen, konsumen, dan pengurai disebut komponen ...."),
    options: [
      { key: "A", text: "Biotik" },
      { key: "B", text: "Abiotik" },
      { key: "C", text: "Heterotrof" },
      { key: "D", text: "Ototrof" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Komponen biotik: makhluk hidup (produsen, konsumen, pengurai).")],
      [B("Komponen biotik = makhluk hidup.")],
    ],
  },

  {
    no: 148,
    stimulus: [],
    prompt: S("Tumbuhan hijau dalam ekosistem berperan sebagai ...."),
    options: [
      { key: "A", text: "Pengurai" },
      { key: "B", text: "Produsen" },
      { key: "C", text: "Predator" },
      { key: "D", text: "Konsumen" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Tumbuhan hijau berperan sebagai produsen karena dapat membuat makanan sendiri melalui fotosintesis.")],
      [B("Tumbuhan hijau = produsen.")],
    ],
  },

  {
    no: 149,
    stimulus: [],
    prompt: S("Bakteri dan jamur dalam ekosistem berperan sebagai ...."),
    options: [
      { key: "A", text: "Predator" },
      { key: "B", text: "Produsen" },
      { key: "C", text: "Pengurai" },
      { key: "D", text: "Konsumen" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Bakteri dan jamur berperan sebagai pengurai (dekomposer) yang menguraikan sisa makhluk hidup.")],
      [B("Pengurai = bakteri & jamur.")],
    ],
  },

  {
    no: 150,
    stimulus: [],
    prompt: S("Rantai makanan: padi → tikus → ular → elang. Pada rantai makanan ini, tikus berperan sebagai ...."),
    options: [
      { key: "A", text: "Produsen" },
      { key: "B", text: "Konsumen tingkat II" },
      { key: "C", text: "Pengurai" },
      { key: "D", text: "Konsumen tingkat I" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Padi = produsen, tikus = konsumen tingkat I (herbivora), ular = konsumen tingkat II, elang = konsumen tingkat III.")],
      [B("Tikus = konsumen tingkat I.")],
    ],
  },

  {
    no: 151,
    stimulus: [],
    prompt: S("Simbiosis mutualisme adalah hubungan antara dua makhluk hidup yang ...."),
    options: [
      { key: "A", text: "Saling menguntungkan" },
      { key: "B", text: "Satu diuntungkan, satu dirugikan" },
      { key: "C", text: "Sama sekali tidak berpengaruh" },
      { key: "D", text: "Saling merugikan" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Mutualisme: kedua pihak saling diuntungkan.")],
      [B("Mutualisme = saling menguntungkan.")],
    ],
  },

  {
    no: 152,
    stimulus: [],
    prompt: S("Hubungan antara bakteri Rhizobium dengan akar kacang tanaman merupakan contoh simbiosis ...."),
    options: [
      { key: "A", text: "Netralisme" },
      { key: "B", text: "Mutualisme" },
      { key: "C", text: "Komensalisme" },
      { key: "D", text: "Parasitisme" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Rhizobium memberikan nitrogen dari udara untuk tumbuhan, tumbuhan memberikan makanan untuk bakteri.")],
      [B("Kedua pihak diuntungkan → mutualisme.")],
    ],
  },

  {
    no: 153,
    stimulus: [],
    prompt: S("Hubungan antara parasit dengan inangnya merupakan contoh simbiosis ...."),
    options: [
      { key: "A", text: "Mutualisme" },
      { key: "B", text: "Komensalisme" },
      { key: "C", text: "Parasitisme" },
      { key: "D", text: "Netralisme" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Parasitisme: satu diuntungkan, satu dirugikan.")],
      [B("Parasit diuntungkan, inang dirugikan.")],
    ],
  },

  {
    no: 154,
    stimulus: [],
    prompt: S("Pada piramida makanan, jumlah energi pada trofik tingkat tinggi ... pada trofik tingkat rendah."),
    options: [
      { key: "A", text: "Sama dengan" },
      { key: "B", text: "Setengah dari" },
      { key: "C", text: "Lebih besar dari" },
      { key: "D", text: "Lebih kecil dari" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Pada piramida makanan, energi menurun dari produsen ke konsumen tingkat tinggi.")],
      [B("Energi di konsumen tingkat tinggi lebih kecil.")],
    ],
  },

  {
    no: 155,
    stimulus: [],
    prompt: S("Berikut ini yang termasuk komponen abiotik dalam ekosistem adalah ...."),
    options: [
      { key: "A", text: "Suhu, cahaya, air" },
      { key: "B", text: "Predator dan mangsa" },
      { key: "C", text: "Bakteri, jamur, tumbuhan" },
      { key: "D", text: "Karnivora, herbivora" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Komponen abiotik adalah komponen tak hidup: suhu, cahaya, air, tanah, udara.")],
      [B("Suhu, cahaya, air = abiotik.")],
    ],
  },

  {
    no: 156,
    stimulus: [],
    prompt: S("Fungsi sistem pernapasan pada manusia adalah untuk ...."),
    options: [
      { key: "A", text: "Mencerna makanan" },
      { key: "B", text: "Pertukaran O₂ dan CO₂" },
      { key: "C", text: "Mengedarkan darah" },
      { key: "D", text: "Menyaring urine" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sistem pernapasan: pertukaran gas O₂ dan CO₂ antara tubuh dan lingkungan.")],
      [B("Fungsi: pertukaran O₂ dan CO₂.")],
    ],
  },

  {
    no: 157,
    stimulus: [],
    prompt: S("Pertukaran gas O₂ dan CO₂ pada manusia terjadi di ...."),
    options: [
      { key: "A", text: "Trakea" },
      { key: "B", text: "Laring" },
      { key: "C", text: "Alveolus" },
      { key: "D", text: "Bronkus" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Alveolus (kantung udara) di paru-paru adalah tempat pertukaran gas.")],
      [B("Pertukaran gas di alveolus.")],
    ],
  },

  {
    no: 158,
    stimulus: [],
    prompt: S("Pencernaan mekanis makanan di mulut dilakukan oleh ...."),
    options: [
      { key: "A", text: "Usus halus" },
      { key: "B", text: "Enzim amilase" },
      { key: "C", text: "Lambung" },
      { key: "D", text: "Gigi dan lidah" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Pencernaan mekanis di mulut dilakukan oleh gigi (memotong/mengunyah) dan lidah (mencampur).")],
      [B("Gigi dan lidah melakukan pencernaan mekanis di mulut.")],
    ],
  },

  {
    no: 159,
    stimulus: [],
    prompt: S("Enzim yang berperan dalam pencernaan protein di lambung adalah ...."),
    options: [
      { key: "A", text: "Pepsin" },
      { key: "B", text: "Amilase" },
      { key: "C", text: "Lipase" },
      { key: "D", text: "Tripsin" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Pepsin: enzim di lambung yang memecah protein menjadi pepton.")],
      [B("Pepsin diaktifkan dari pepsinogen oleh HCl di lambung.")],
    ],
  },

  {
    no: 160,
    stimulus: [],
    prompt: S("Penyerapan zat makanan yang telah dicerna terjadi di ...."),
    options: [
      { key: "A", text: "Usus besar" },
      { key: "B", text: "Usus halus" },
      { key: "C", text: "Mulut" },
      { key: "D", text: "Lambung" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Usus halus memiliki vili yang memperluas permukaan penyerapan.")],
      [B("Penyerapan nutrisi di usus halus.")],
    ],
  },

  {
    no: 161,
    stimulus: [],
    prompt: S("Organ tubuh yang berfungsi memompa darah ke seluruh tubuh adalah ...."),
    options: [
      { key: "A", text: "Ginjal" },
      { key: "B", text: "Paru-paru" },
      { key: "C", text: "Jantung" },
      { key: "D", text: "Hati" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Jantung memompa darah ke seluruh tubuh melalui pembuluh darah.")],
      [B("Jantung = pompa darah.")],
    ],
  },

  {
    no: 162,
    stimulus: [],
    prompt: S("Pembuluh darah yang membawa darah dari jantung ke seluruh tubuh adalah ...."),
    options: [
      { key: "A", text: "Pembuluh balik (vena)" },
      { key: "B", text: "Kapiler" },
      { key: "C", text: "Pembuluh limfa" },
      { key: "D", text: "Pembuluh nadi (arteri)" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Arteri (nadi) membawa darah dari jantung ke seluruh tubuh.")],
      [B("Arteri = dari jantung ke tubuh.")],
    ],
  },

  {
    no: 163,
    stimulus: [],
    prompt: S("Pembuluh darah yang membawa darah kembali ke jantung adalah ...."),
    options: [
      { key: "A", text: "Vena" },
      { key: "B", text: "Kapiler" },
      { key: "C", text: "Aorta" },
      { key: "D", text: "Arteri" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Vena (pembuluh balik) membawa darah kembali ke jantung.")],
      [B("Vena = dari tubuh ke jantung.")],
    ],
  },

  {
    no: 164,
    stimulus: [],
    prompt: S("Ginjal berfungsi untuk ...."),
    options: [
      { key: "A", text: "Memompa darah" },
      { key: "B", text: "Menyaring darah dan membentuk urine" },
      { key: "C", text: "Mencerna makanan" },
      { key: "D", text: "Mengedarkan oksigen" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Ginjal menyaring darah untuk membuang zat sisa metabolisme dalam bentuk urine.")],
      [B("Ginjal = penyaring darah → urine.")],
    ],
  },

  {
    no: 165,
    stimulus: [],
    prompt: S("Fungsi kulit sebagai sistem indra adalah sebagai indra ...."),
    options: [
      { key: "A", text: "Pengecap" },
      { key: "B", text: "Pencium" },
      { key: "C", text: "Peraba" },
      { key: "D", text: "Pendengar" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kulit berfungsi sebagai indra peraba (reseptor sentuh).")],
      [B("Kulit = indra peraba.")],
    ],
  },

  {
    no: 166,
    stimulus: [],
    prompt: S("Bagian sel yang berfungsi sebagai pusat pengatur seluruh kegiatan sel adalah ...."),
    options: [
      { key: "A", text: "Sitoplasma" },
      { key: "B", text: "Mitokondria" },
      { key: "C", text: "Membran sel" },
      { key: "D", text: "Inti sel (nukleus)" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Nukleus (inti sel) mengandung materi genetik dan berfungsi sebagai pusat pengatur kegiatan sel.")],
      [B("Nukleus = pusat pengatur sel.")],
    ],
  },

  {
    no: 167,
    stimulus: [],
    prompt: S("Organel sel yang berperan dalam respirasi sel untuk menghasilkan energi adalah ...."),
    options: [
      { key: "A", text: "Mitokondria" },
      { key: "B", text: "Kloroplas" },
      { key: "C", text: "Ribosom" },
      { key: "D", text: "Lisosom" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Mitokondria adalah tempat respirasi sel yang menghasilkan energi (ATP).")],
      [B("Mitokondria = penghasil energi sel.")],
    ],
  },

  {
    no: 168,
    stimulus: [],
    prompt: S("Organel yang hanya terdapat pada sel tumbuhan dan berfungsi dalam fotosintesis adalah ...."),
    options: [
      { key: "A", text: "Mitokondria" },
      { key: "B", text: "Kloroplas" },
      { key: "C", text: "Ribosom" },
      { key: "D", text: "Badan Golgi" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kloroplas mengandung klorofil dan merupakan tempat berlangsungnya fotosintesis.")],
      [B("Kloroplas hanya ada di sel tumbuhan.")],
    ],
  },

  {
    no: 169,
    stimulus: [],
    prompt: S("Perhatikan ciri-ciri berikut: (1) bernapas, (2) tumbuh, (3) berkembang biak, (4) peka terhadap rangsang. Yang termasuk ciri makhluk hidup adalah ...."),
    options: [
      { key: "A", text: "(2) dan (3)" },
      { key: "B", text: "(3) dan (4)" },
      { key: "C", text: "Semua (1), (2), (3), (4)" },
      { key: "D", text: "(1) dan (2)" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Semua pilihan merupakan ciri makhluk hidup: bernapas, tumbuh, berkembang biak, dan peka terhadap rangsang.")],
      [B("Bernapas, tumbuh, berkembang biak, iritabilitas = ciri makhluk hidup.")],
    ],
  },

  {
    no: 170,
    stimulus: [],
    prompt: S("Makhluk hidup yang dapat membuat makanannya sendiri melalui fotosintesis disebut ...."),
    options: [
      { key: "A", text: "Dekomposer" },
      { key: "B", text: "Heterotrof" },
      { key: "C", text: "Karnivora" },
      { key: "D", text: "Autotrof" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Autotrof = makhluk hidup yang dapat membuat makanan sendiri (tumbuhan hijau).")],
      [B("Autotrof = pembuat makanan sendiri.")],
    ],
  },

  {
    no: 171,
    stimulus: [],
    prompt: S("Perbedaan sel hewan dan sel tumbuhan yang paling tepat adalah ...."),
    options: [
      { key: "A", text: "Sel tumbuhan memiliki dinding sel dan kloroplas, sel hewan tidak" },
      { key: "B", text: "Sel hewan memiliki dinding sel, sel tumbuhan tidak" },
      { key: "C", text: "Kedua sel tidak memiliki membran inti" },
      { key: "D", text: "Sel hewan memiliki kloroplas, sel tumbuhan tidak" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Sel tumbuhan memiliki dinding sel, kloroplas, dan vakuola besar; sel hewan tidak memiliki ketiganya.")],
      [B("Dinding sel & kloroplas hanya ada pada sel tumbuhan.")],
    ],
  },

  {
    no: 172,
    stimulus: [],
    prompt: S("Urutan tingkat organisasi kehidupan dari yang paling sederhana hingga kompleks yang benar adalah ...."),
    options: [
      { key: "A", text: "Organ → jaringan → sel → sistem organ → organisme" },
      { key: "B", text: "Sel → jaringan → organ → sistem organ → organisme" },
      { key: "C", text: "Sel → organ → jaringan → sistem organ → organisme" },
      { key: "D", text: "Jaringan → sel → organ → sistem organ → organisme" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Urutan: sel → jaringan → organ → sistem organ → organisme.")],
      [B("Sel membentuk jaringan, jaringan membentuk organ, dst.")],
    ],
  },

  {
    no: 173,
    stimulus: [],
    prompt: S("Persamaan reaksi fotosintesis yang benar adalah ...."),
    options: [
      { key: "A", text: "6CO₂ + 6O₂ → C₆H₁₂O₆ + H₂O" },
      { key: "B", text: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O" },
      { key: "C", text: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (dengan cahaya)" },
      { key: "D", text: "6O₂ + C₆H₁₂O₆ → 6CO₂ + 6H₂O" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Fotosintesis: karbon dioksida + air, dengan bantuan cahaya dan klorofil, menghasilkan glukosa dan oksigen.")],
      [B("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂")],
    ],
  },

  {
    no: 174,
    stimulus: [],
    prompt: S("Jaringan pada tumbuhan yang berfungsi mengangkut air dan garam mineral dari akar ke daun adalah ...."),
    options: [
      { key: "A", text: "Floem" },
      { key: "B", text: "Kambium" },
      { key: "C", text: "Epidermis" },
      { key: "D", text: "Xilem" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Xilem (pembuluh kayu) mengangkut air dan garam mineral dari akar ke seluruh tubuh tumbuhan.")],
      [B("Xilem = pengangkut air & mineral (naik).")],
    ],
  },

  {
    no: 175,
    stimulus: [],
    prompt: S("Jaringan tumbuhan yang berfungsi mengangkut hasil fotosintesis dari daun ke seluruh tubuh adalah ...."),
    options: [
      { key: "A", text: "Floem" },
      { key: "B", text: "Kambium" },
      { key: "C", text: "Korteks" },
      { key: "D", text: "Xilem" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Floem (pembuluh tapis) mengangkut hasil fotosintesis (zat makanan) dari daun ke seluruh bagian tumbuhan.")],
      [B("Floem = pengangkut hasil fotosintesis.")],
    ],
  },

  {
    no: 176,
    stimulus: [],
    prompt: S("Gerak sebagian tumbuhan yang arahnya dipengaruhi arah datangnya rangsang disebut ...."),
    options: [
      { key: "A", text: "Higroskopis" },
      { key: "B", text: "Tropisme" },
      { key: "C", text: "Nasti" },
      { key: "D", text: "Taksis" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Tropisme: gerak sebagian tumbuhan yang arahnya ditentukan oleh arah rangsang (mis. fototropisme ke arah cahaya).")],
      [B("Tropisme = arah gerak mengikuti arah rangsang.")],
    ],
  },

  {
    no: 177,
    stimulus: [],
    prompt: S("Gerak menutupnya daun putri malu saat disentuh merupakan contoh gerak ...."),
    options: [
      { key: "A", text: "Tropisme" },
      { key: "B", text: "Taksis" },
      { key: "C", text: "Nasti" },
      { key: "D", text: "Higroskopis" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Nasti: gerak sebagian tumbuhan yang arahnya tidak dipengaruhi arah rangsang (seismonasti karena sentuhan).")],
      [B("Menutupnya putri malu = seismonasti (sejenis nasti).")],
    ],
  },

  {
    no: 178,
    stimulus: [],
    prompt: S("Zat sisa metabolisme yang dikeluarkan melalui ginjal dalam bentuk urine adalah ...."),
    options: [
      { key: "A", text: "Keringat" },
      { key: "B", text: "Empedu" },
      { key: "C", text: "Karbon dioksida" },
      { key: "D", text: "Urea" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Ginjal menyaring darah dan mengeluarkan urea (hasil pemecahan protein) melalui urine.")],
      [B("Urea dikeluarkan melalui ginjal dalam urine.")],
    ],
  },

  {
    no: 179,
    stimulus: [],
    prompt: S("Fungsi paru-paru sebagai alat ekskresi adalah mengeluarkan ...."),
    options: [
      { key: "A", text: "Karbon dioksida dan uap air" },
      { key: "B", text: "Empedu" },
      { key: "C", text: "Urine" },
      { key: "D", text: "Keringat" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paru-paru mengeluarkan karbon dioksida (CO₂) dan uap air (H₂O) sebagai zat sisa.")],
      [B("Paru-paru mengeluarkan CO₂ dan uap air.")],
    ],
  },

  {
    no: 180,
    stimulus: [],
    prompt: S("Kulit sebagai alat ekskresi mengeluarkan ...."),
    options: [
      { key: "A", text: "Urine" },
      { key: "B", text: "Keringat" },
      { key: "C", text: "CO₂" },
      { key: "D", text: "Feses" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kulit mengeluarkan keringat yang mengandung air, garam, dan sedikit urea.")],
      [B("Keringat dikeluarkan melalui kelenjar keringat di kulit.")],
    ],
  },

  {
    no: 181,
    stimulus: [],
    prompt: S("Bagian sel saraf yang berfungsi meneruskan rangsangan dari badan sel ke sel saraf lain adalah ...."),
    options: [
      { key: "A", text: "Badan sel" },
      { key: "B", text: "Nukleus" },
      { key: "C", text: "Akson (neurit)" },
      { key: "D", text: "Dendrit" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Akson (neurit) meneruskan rangsangan dari badan sel ke sel saraf berikutnya atau ke otot.")],
      [B("Akson = penghantar impuls keluar dari badan sel.")],
    ],
  },

  {
    no: 182,
    stimulus: [],
    prompt: S("Rangsangan yang diterima oleh indra akan dihantarkan ke otak untuk diolah melalui ...."),
    options: [
      { key: "A", text: "Saraf simpatik" },
      { key: "B", text: "Saraf motorik" },
      { key: "C", text: "Saraf otonom" },
      { key: "D", text: "Saraf sensorik" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Saraf sensorik (aferen) menghantarkan rangsangan dari reseptor (indra) menuju sistem saraf pusat.")],
      [B("Saraf sensorik = dari reseptor ke otak.")],
    ],
  },

  {
    no: 183,
    stimulus: [],
    prompt: S("Pada manusia, pembuahan (fertilisasi) terjadi di ...."),
    options: [
      { key: "A", text: "Tuba fallopi (oviduk)" },
      { key: "B", text: "Ovarium" },
      { key: "C", text: "Rahim (uterus)" },
      { key: "D", text: "Vagina" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Fertilisasi (pertemuan sel telur dan sperma) terjadi di tuba fallopi.")],
      [B("Pembuahan terjadi di tuba fallopi.")],
    ],
  },

  {
    no: 184,
    stimulus: [],
    prompt: S("Faktor pembawa sifat keturunan yang terdapat di dalam kromosom disebut ...."),
    options: [
      { key: "A", text: "Sitoplasma" },
      { key: "B", text: "Gen" },
      { key: "C", text: "Ribosom" },
      { key: "D", text: "Nukleus" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gen adalah unit pewarisan sifat yang terletak di dalam kromosom.")],
      [B("Gen = faktor pembawa sifat keturunan.")],
    ],
  },

  {
    no: 185,
    stimulus: [],
    prompt: S("Persilangan antara dua individu yang memiliki satu sifat beda disebut ...."),
    options: [
      { key: "A", text: "Resiprokal" },
      { key: "B", text: "Dihibrid" },
      { key: "C", text: "Monohibrid" },
      { key: "D", text: "Trihibrid" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Monohibrid: persilangan dengan satu sifat beda.")],
      [B("Monohibrid = satu sifat beda.")],
    ],
  },

  {
    no: 186,
    stimulus: [],
    prompt: S("Dalam persilangan monohibrid (Aa × Aa) yang menghasilkan sifat dominan penuh, perbandingan fenotipe F₂ adalah ...."),
    options: [
      { key: "A", text: "1 : 2 : 1" },
      { key: "B", text: "1 : 1" },
      { key: "C", text: "9 : 3 : 3 : 1" },
      { key: "D", text: "3 : 1" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Persilangan Aa × Aa menghasilkan genotipe AA : Aa : aa = 1 : 2 : 1.")],
      [P("Karena A dominan penuh, fenotipe dominan : resesif = 3 : 1.")],
      [B("Fenotipe F₂ = 3 : 1.")],
    ],
  },

  {
    no: 187,
    stimulus: [],
    prompt: S("Contoh bioteknologi konvensional yang memanfaatkan mikroorganisme adalah ...."),
    options: [
      { key: "A", text: "Pembuatan tempe dengan jamur Rhizopus" },
      { key: "B", text: "Klon hewan" },
      { key: "C", text: "Rekayasa genetika padi" },
      { key: "D", text: "Pembuatan insulin dengan bakteri" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Pembuatan tempe memanfaatkan jamur Rhizopus oryzae dan termasuk bioteknologi konvensional.")],
      [B("Tempe = bioteknologi konvensional (fermentasi Rhizopus).")],
    ],
  },

  {
    no: 188,
    stimulus: [],
    prompt: S("Produk bioteknologi modern yang dihasilkan melalui teknologi plasmid pada bakteri adalah ...."),
    options: [
      { key: "A", text: "Nata de coco" },
      { key: "B", text: "Insulin" },
      { key: "C", text: "Tempe" },
      { key: "D", text: "Yoghurt" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Insulin diproduksi dengan menyisipkan gen insulin manusia ke plasmid bakteri (bioteknologi modern).")],
      [B("Insulin = bioteknologi modern (DNA rekombinan).")],
    ],
  },

  {
    no: 189,
    stimulus: [],
    prompt: S("Zat tunggal yang tidak dapat diuraikan menjadi zat yang lebih sederhana melalui reaksi kimia biasa disebut ...."),
    options: [
      { key: "A", text: "Senyawa" },
      { key: "B", text: "Campuran" },
      { key: "C", text: "Unsur" },
      { key: "D", text: "Larutan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Unsur adalah zat tunggal yang tidak dapat diuraikan lagi menjadi zat yang lebih sederhana.")],
      [B("Unsur tidak dapat diuraikan secara kimia biasa.")],
    ],
  },

  {
    no: 190,
    stimulus: [],
    prompt: S("Air (H₂O), garam dapur (NaCl), dan karbon dioksida (CO₂) termasuk kelompok ...."),
    options: [
      { key: "A", text: "Campuran" },
      { key: "B", text: "Koloid" },
      { key: "C", text: "Unsur" },
      { key: "D", text: "Senyawa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Senyawa terbentuk dari dua unsur atau lebih melalui reaksi kimia dengan perbandingan tetap.")],
      [B("H₂O, NaCl, CO₂ = senyawa.")],
    ],
  },

  {
    no: 191,
    stimulus: [],
    prompt: S("Campuran antara air dan pasir dapat dipisahkan dengan metode ...."),
    options: [
      { key: "A", text: "Filtrasi (penyaringan)" },
      { key: "B", text: "Kromatografi" },
      { key: "C", text: "Distilasi" },
      { key: "D", text: "Sublimasi" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Filtrasi memisahkan campuran zat padat dengan zat cair menggunakan saringan (kertas saring).")],
      [B("Pasir (padat) dipisahkan dari air dengan filtrasi.")],
    ],
  },

  {
    no: 192,
    stimulus: [],
    prompt: S("Pemisahan campuran berdasarkan perbedaan titik didih disebut ...."),
    options: [
      { key: "A", text: "Filtrasi" },
      { key: "B", text: "Destilasi" },
      { key: "C", text: "Evaporasi" },
      { key: "D", text: "Sentrifugasi" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Destilasi memisahkan campuran cairan berdasarkan perbedaan titik didih (misal air + alkohol).")],
      [B("Destilasi = perbedaan titik didih.")],
    ],
  },

  {
    no: 193,
    stimulus: [],
    prompt: S("Larutan yang memiliki rasa asam dan dapat memerahkan kertas lakmus biru adalah ...."),
    options: [
      { key: "A", text: "Garam" },
      { key: "B", text: "Netral" },
      { key: "C", text: "Asam" },
      { key: "D", text: "Basa" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Asam memerahkan lakmus biru dan memiliki rasa asam (pH < 7).")],
      [B("Asam → lakmus biru menjadi merah.")],
    ],
  },

  {
    no: 194,
    stimulus: [],
    prompt: S("Urutan planet dari yang terdekat hingga terjauh dari matahari yang benar adalah ...."),
    options: [
      { key: "A", text: "Mars, Bumi, Venus, Merkurius" },
      { key: "B", text: "Venus, Merkurius, Mars, Bumi" },
      { key: "C", text: "Bumi, Mars, Merkurius, Venus" },
      { key: "D", text: "Merkurius, Venus, Bumi, Mars" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Urutan planet dari matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus.")],
      [B("Merkurius – Venus – Bumi – Mars.")],
    ],
  },

  {
    no: 195,
    stimulus: [],
    prompt: S("Planet yang dijuluki planet merah adalah ...."),
    options: [
      { key: "A", text: "Mars" },
      { key: "B", text: "Venus" },
      { key: "C", text: "Jupiter" },
      { key: "D", text: "Saturnus" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Mars tampak kemerahan karena permukaannya mengandung banyak oksida besi (karat).")],
      [B("Mars = planet merah.")],
    ],
  },

  {
    no: 196,
    stimulus: [],
    prompt: S("Peristiwa siang dan malam di bumi disebabkan oleh ...."),
    options: [
      { key: "A", text: "Gerhana matahari" },
      { key: "B", text: "Rotasi bumi pada porosnya" },
      { key: "C", text: "Kemiringan sumbu bumi" },
      { key: "D", text: "Revolusi bumi mengelilingi matahari" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Rotasi bumi pada porosnya menyebabkan terjadinya siang dan malam.")],
      [B("Rotasi bumi → siang & malam.")],
    ],
  },

  {
    no: 197,
    stimulus: [],
    prompt: S("Gerhana matahari terjadi ketika ...."),
    options: [
      { key: "A", text: "Bulan berada di belakang bumi" },
      { key: "B", text: "Bumi berada di antara matahari dan bulan" },
      { key: "C", text: "Bulan berada di antara matahari dan bumi" },
      { key: "D", text: "Matahari berada di antara bumi dan bulan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gerhana matahari: posisi bulan berada di antara matahari dan bumi, sehingga bayangan bulan jatuh ke bumi.")],
      [B("Bulan di antara matahari dan bumi → gerhana matahari.")],
    ],
  },

  {
    no: 198,
    stimulus: [],
    prompt: S("Susunan bumi dari dalam hingga ke permukaan secara berurutan adalah ...."),
    options: [
      { key: "A", text: "Kerak, selimut, inti" },
      { key: "B", text: "Selimut, inti, kerak" },
      { key: "C", text: "Inti, kerak, selimut" },
      { key: "D", text: "Inti, selimut, kerak" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Struktur bumi dari dalam: inti (dalam & luar), selimut (mantel), lalu kerak (kulit bumi).")],
      [B("Inti → selimut → kerak.")],
    ],
  },

];
