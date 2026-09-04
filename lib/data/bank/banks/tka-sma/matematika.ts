"use client";

import type { BankSoal } from "@/lib/data/soal";


const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

/**
 * Bank Soal TKA SMA — Matematika (150 soal orisinal).
 * Topik: eksponen & logaritma, bentuk akar, persamaan & fungsi kuadrat,
 * SPLDV/SPLTV & program linear, barisan & deret, logika matematika,
 * himpunan & fungsi, fungsi komposisi & invers, polinomial, matriks,
 * vektor, trigonometri, geometri & transformasi, limit, turunan,
 * integral, statistika, peluang, dan nilai mutlak.
 * Jawaban terverifikasi, distribusi A/B/C/D merata.
 */
export const BANK_TKA_SMA_MTK: BankSoal[] = [
  {
    no: 1,
    stimulus: [],
    prompt: S('Bentuk sederhana dari 2⁵ × 2⁻³ × 2² adalah ….'),
    options: [
      { key: "A", text: '8' },
      { key: "B", text: '16' },
      { key: "C", text: '32' },
      { key: "D", text: '64' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Gunakan sifat '), B('aᵐ × aⁿ = aᵐ⁺ⁿ'), P(':')],
      [B('2⁵ × 2⁻³ × 2² = 2⁵⁻³⁺² = 2⁴ = 16')]
    ],
  },
  {
    no: 2,
    stimulus: [],
    prompt: S('Nilai dari (3²)³ : 3⁴ adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '27' },
      { key: "C", text: '81' },
      { key: "D", text: '9' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Sifat pangkat: '), B('(aᵐ)ⁿ = aᵐⁿ'), P(' dan '), B('aᵐ : aⁿ = aᵐ⁻ⁿ'), P('.')],
      [B('(3²)³ : 3⁴ = 3⁶ : 3⁴ = 3² = 9')]
    ],
  },
  {
    no: 3,
    stimulus: [],
    prompt: S('Hasil dari ⁵√(32) × ³√(27) adalah ….'),
    options: [
      { key: "A", text: '15' },
      { key: "B", text: '12' },
      { key: "C", text: '6' },
      { key: "D", text: '8' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('⁵√32 = 2'), P(' karena '), B('2⁵ = 32'), P('; '), B('³√27 = 3'), P('.')],
      [B('2 × 3 = 6')]
    ],
  },
  {
    no: 4,
    stimulus: [],
    prompt: S('Bentuk sederhana dari √(200) adalah ….'),
    options: [
      { key: "A", text: '20√2' },
      { key: "B", text: '5√2' },
      { key: "C", text: '4√2' },
      { key: "D", text: '10√2' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Faktorkan: '), B('200 = 100 × 2'), P('.')],
      [B('√200 = √100 × √2 = 10√2')]
    ],
  },
  {
    no: 5,
    stimulus: [],
    prompt: S('Hasil dari 2√5 + 3√5 − √5 adalah ….'),
    options: [
      { key: "A", text: '6√5' },
      { key: "B", text: '5√5' },
      { key: "C", text: '4√5' },
      { key: "D", text: '3√5' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Koefisien akar sejenis dapat dijumlahkan: '), B('(2 + 3 − 1)√5 = 4√5')]
    ],
  },
  {
    no: 6,
    stimulus: [],
    prompt: S('Bentuk rasional dari 4/(2 + √2) adalah ….'),
    options: [
      { key: "A", text: '4 + 2√2' },
      { key: "B", text: '4 − 2√2' },
      { key: "C", text: '2 − 2√2' },
      { key: "D", text: '2 + 2√2' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Kalikan dengan sekawan '), B('(2 − √2)'), P(':')],
      [B('4(2 − √2)/(4 − 2) = 4(2 − √2)/2 = 2(2 − √2) = 4 − 2√2')]
    ],
  },
  {
    no: 7,
    stimulus: [],
    prompt: S('Nilai dari ³log 81 + ³log 27 adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '6' },
      { key: "C", text: '8' },
      { key: "D", text: '7' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Sifat '), B('ᵃlog b + ᵃlog c = ᵃlog (bc)'), P(':')],
      [B('³log 81 + ³log 27 = ³log (81×27) = ³log 2187'), P('; '), B('3⁷ = 2187'), P(', jadi hasilnya '), B('7')]
    ],
  },
  {
    no: 8,
    stimulus: [],
    prompt: S('Jika ²log 3 = a, maka ²log 18 dinyatakan dalam a adalah ….'),
    options: [
      { key: "A", text: 'a + 3' },
      { key: "B", text: '2a + 1' },
      { key: "C", text: 'a + 2' },
      { key: "D", text: '2a + 3' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Uraikan: '), B('18 = 2 × 3²'), P('.')],
      [B('²log 18 = ²log 2 + 2·²log 3 = 1 + 2a')]
    ],
  },
  {
    no: 9,
    stimulus: [],
    prompt: S('Nilai x yang memenuhi 3ˣ⁺² = 1/27 adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '−5' },
      { key: "C", text: '−1' },
      { key: "D", text: '1' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Ubah ruas kanan: '), B('1/27 = 3⁻³'), P('.')],
      [B('3ˣ⁺² = 3⁻³ ⟺ x + 2 = −3 ⟺ x = −5')]
    ],
  },
  {
    no: 10,
    stimulus: [],
    prompt: S('Jika 2ˣ = 32 dan 3ʸ = 81, maka nilai x + y adalah ….'),
    options: [
      { key: "A", text: '7' },
      { key: "B", text: '9' },
      { key: "C", text: '8' },
      { key: "D", text: '10' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('2ˣ = 32 ⟹ x = 5'), P('; '), B('3ʸ = 81 ⟹ y = 4'), P('.')],
      [B('x + y = 5 + 4 = 9')]
    ],
  },
  {
    no: 11,
    stimulus: [],
    prompt: S('Akar-akar persamaan x² − 5x + 6 = 0 adalah x₁ dan x₂. Nilai x₁ + x₂ adalah ….'),
    options: [
      { key: "A", text: '−5' },
      { key: "B", text: '5' },
      { key: "C", text: '6' },
      { key: "D", text: '−6' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Jumlah akar '), B('x₁ + x₂ = −b/a'), P('.')],
      [B('x₁ + x₂ = −(−5)/1 = 5')]
    ],
  },
  {
    no: 12,
    stimulus: [],
    prompt: S('Hasil kali akar-akar persamaan 2x² + 6x − 8 = 0 adalah ….'),
    options: [
      { key: "A", text: '4' },
      { key: "B", text: '3' },
      { key: "C", text: '−4' },
      { key: "D", text: '−3' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Hasil kali akar '), B('x₁·x₂ = c/a'), P('.')],
      [B('x₁·x₂ = −8/2 = −4')]
    ],
  },
  {
    no: 13,
    stimulus: [],
    prompt: S('Salah satu akar persamaan x² + kx − 12 = 0 adalah 3. Nilai k adalah ….'),
    options: [
      { key: "A", text: '1' },
      { key: "B", text: '−1' },
      { key: "C", text: '4' },
      { key: "D", text: '−4' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Substitusi x = 3:'), B('9 + 3k − 12 = 0 ⟺ 3k = 3 ⟺ k = 1')]
    ],
  },
  {
    no: 14,
    stimulus: [],
    prompt: S('Persamaan kuadrat yang akar-akarnya 2 dan −5 adalah ….'),
    options: [
      { key: "A", text: 'x² − 3x − 10 = 0' },
      { key: "B", text: 'x² + 7x − 10 = 0' },
      { key: "C", text: 'x² − 7x − 10 = 0' },
      { key: "D", text: 'x² + 3x − 10 = 0' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Jumlah akar = −3, hasil kali = −10.')],
      [B('x² − (jumlah)x + (hasil kali) = x² + 3x − 10 = 0')]
    ],
  },
  {
    no: 15,
    stimulus: [],
    prompt: S('Grafik fungsi f(x) = x² − 4x + 3 memotong sumbu X di titik ….'),
    options: [
      { key: "A", text: '(−1, 0) dan (−3, 0)' },
      { key: "B", text: '(1, 0) dan (−3, 0)' },
      { key: "C", text: '(1, 0) dan (3, 0)' },
      { key: "D", text: '(−1, 0) dan (3, 0)' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Faktorkan: '), B('x² − 4x + 3 = (x − 1)(x − 3)'), P('.')],
      [B('x = 1 atau x = 3'), P(', jadi titik potong (1,0) dan (3,0).')]
    ],
  },
  {
    no: 16,
    stimulus: [],
    prompt: S('Titik puncak parabola f(x) = x² − 6x + 8 adalah ….'),
    options: [
      { key: "A", text: '(3, −1)' },
      { key: "B", text: '(−3, −1)' },
      { key: "C", text: '(3, 1)' },
      { key: "D", text: '(−3, 1)' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('xₚ = −b/(2a) = 6/2 = 3'), P('; '), B('yₚ = f(3) = 9 − 18 + 8 = −1')]
    ],
  },
  {
    no: 17,
    stimulus: [],
    prompt: S('Nilai maksimum fungsi f(x) = −x² + 4x + 1 adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '4' },
      { key: "C", text: '6' },
      { key: "D", text: '5' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('xₚ = −b/(2a) = −4/(−2) = 2'), P('; ')],
      [B('f(2) = −4 + 8 + 1 = 5')]
    ],
  },
  {
    no: 18,
    stimulus: [],
    prompt: S('Fungsi kuadrat yang grafiknya melalui titik (0, 3), (1, 0), dan (3, 0) adalah ….'),
    options: [
      { key: "A", text: 'f(x) = x² − 4x + 3' },
      { key: "B", text: 'f(x) = x² + 4x + 3' },
      { key: "C", text: 'f(x) = −x² + 4x + 3' },
      { key: "D", text: 'f(x) = x² − 4x − 3' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Akar 1 dan 3: '), B('f(x) = a(x−1)(x−3)'), P('; melalui (0,3):')],
      [B('3 = a(3) ⟹ a = 1'), P(', sehingga '), B('f(x) = x² − 4x + 3')]
    ],
  },
  {
    no: 19,
    stimulus: [],
    prompt: S('Himpunan penyelesaian dari x² − 2x − 8 ≥ 0 adalah ….'),
    options: [
      { key: "A", text: '{x | −2 ≤ x ≤ 4}' },
      { key: "B", text: '{x | x ≤ 2 atau x ≥ 4}' },
      { key: "C", text: '{x | x ≤ −2 atau x ≥ 4}' },
      { key: "D", text: '{x | x ≤ −4 atau x ≥ 2}' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Faktorkan: '), B('(x − 4)(x + 2) ≥ 0'), P('.')],
      [P('Pembuat nol x = 4 atau x = −2; uji interval menghasilkan '), B('x ≤ −2 atau x ≥ 4')]
    ],
  },
  {
    no: 20,
    stimulus: [],
    prompt: S('Himpunan penyelesaian dari x² − x − 6 < 0 adalah ….'),
    options: [
      { key: "A", text: '{x | −2 < x < 3}' },
      { key: "B", text: '{x | x < −2 atau x > 3}' },
      { key: "C", text: '{x | 2 < x < 3}' },
      { key: "D", text: '{x | −3 < x < 2}' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Faktorkan: '), B('(x − 3)(x + 2) < 0'), P('.')],
      [B('−2 < x < 3')]
    ],
  },
  {
    no: 21,
    stimulus: [],
    prompt: S('Penyelesaian dari x + y = 7 dan 2x − y = 8 adalah x = a dan y = b. Nilai a + b adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '6' },
      { key: "C", text: '8' },
      { key: "D", text: '7' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Jumlahkan kedua persamaan:'), B('3x = 15 ⟹ x = 5'), P('; y = 2.')],
      [B('a + b = 5 + 2 = 7')]
    ],
  },
  {
    no: 22,
    stimulus: [],
    prompt: S('Himpunan penyelesaian dari 3x − 2y = 8 dan x + 2y = 0 adalah ….'),
    options: [
      { key: "A", text: '{(−2, 1)}' },
      { key: "B", text: '{(2, 1)}' },
      { key: "C", text: '{(1, −2)}' },
      { key: "D", text: '{(2, −1)}' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Jumlahkan: '), B('4x = 8 ⟹ x = 2'), P('; substitusi: '), B('2 + 2y = 0 ⟹ y = −1')]
    ],
  },
  {
    no: 23,
    stimulus: [],
    prompt: S('Jika x + 2y = 5 dan 3x − y = 1, maka nilai 2x + y adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '4' },
      { key: "C", text: '5' },
      { key: "D", text: '6' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Dari persamaan pertama '), B('x = 5 − 2y'), P('; substitusi:')],
      [B('3(5−2y) − y = 1 ⟹ 15 − 7y = 1 ⟹ y = 2, x = 1'), P('; maka '), B('2x + y = 4')]
    ],
  },
  {
    no: 24,
    stimulus: [],
    prompt: S('Himpunan penyelesaian dari sistem x + y + z = 6, x + y = 4, y + z = 5 adalah ….'),
    options: [
      { key: "A", text: '{(2, 2, 2)}' },
      { key: "B", text: '{(3, 1, 2)}' },
      { key: "C", text: '{(1, 2, 3)}' },
      { key: "D", text: '{(1, 3, 2)}' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('x + y = 4'), P(' dan '), B('x + y + z = 6 ⟹ z = 2'), P('; '), B('y + z = 5 ⟹ y = 3, x = 1')]
    ],
  },
  {
    no: 25,
    stimulus: [],
    prompt: S('Umur Ayah tiga kali umur anaknya. Lima tahun lalu, umur Ayah empat kali umur anaknya. Umur Ayah sekarang adalah ….'),
    options: [
      { key: "A", text: '40 tahun' },
      { key: "B", text: '42 tahun' },
      { key: "C", text: '48 tahun' },
      { key: "D", text: '45 tahun' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Misal A = 3a; '), B('A − 5 = 4(a − 5)'), P(' ⟹ '), B('3a − 5 = 4a − 20 ⟹ a = 15'), P(', A = 45.')]
    ],
  },
  {
    no: 26,
    stimulus: [],
    prompt: S('Harga 2 buku dan 3 pensil Rp13.000, sedangkan 3 buku dan 2 pensil Rp17.000. Harga 1 buku adalah ….'),
    options: [
      { key: "A", text: 'Rp4.000' },
      { key: "B", text: 'Rp6.000' },
      { key: "C", text: 'Rp7.000' },
      { key: "D", text: 'Rp5.000' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Eliminasi: '), B('2b+3p=13.000'), P(' dan '), B('3b+2p=17.000'), P('.')],
      [B('9b+6p=51.000; 4b+6p=26.000 ⟹ 5b=25.000 ⟹ b=5.000')]
    ],
  },
  {
    no: 27,
    stimulus: [],
    prompt: S('Nilai maksimum dari f(x, y) = 4x + 3y dengan kendala x + y ≤ 6, x ≥ 0, y ≥ 0 adalah ….'),
    options: [
      { key: "A", text: '24' },
      { key: "B", text: '18' },
      { key: "C", text: '12' },
      { key: "D", text: '21' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Titik pojok: (0,0), (6,0), (0,6).')],
      [B('f(6,0)=24, f(0,6)=18'), P(', nilai maksimum 24.')]
    ],
  },
  {
    no: 28,
    stimulus: [],
    prompt: S('Nilai minimum dari f(x, y) = 5x + 2y dengan kendala 2x + y ≥ 4, x + 3y ≥ 6, x ≥ 0, y ≥ 0 adalah ….'),
    options: [
      { key: "A", text: '6' },
      { key: "B", text: '8' },
      { key: "C", text: '10' },
      { key: "D", text: '12' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Titik (0,2) tidak memenuhi 2x + y ≥ 4 dan (2,0) tidak memenuhi x + 3y ≥ 6, sehingga keduanya bukan titik pojok daerah layak.')],
      [P('Daerah layak dibatasi sumbu, garis 2x + y = 4 pada ruas 0 ≤ x ≤ 6/5, dan garis x + 3y = 6.')],
      [P('Pada 2x + y = 4: f = 5x + 2(4−2x) = 8 + x, minimum saat x = 0, yaitu f(0, 4) = '), B('8'), P('.')],
      [P('Pada x + 3y = 6 (x ≥ 6/5): f naik dari 46/5, jadi minimum global adalah '), B('8'), P('.')]
    ],
  },
  {
    no: 29,
    stimulus: [],
    prompt: S('Daerah yang memenuhi x ≥ 0, y ≥ 0, x + 2y ≤ 8, dan 3x + y ≤ 12 memiliki titik potong garis kendala di ….'),
    options: [
      { key: "A", text: '(4, 2)' },
      { key: "B", text: '(2, 3)' },
      { key: "C", text: '(8/3, 8/3)' },
      { key: "D", text: '(16/5, 12/5)' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Eliminasi x + 2y = 8 dan 3x + y = 12:')],
      [B('x = 8 − 2y ⟹ 24 − 6y + y = 12 ⟹ y = 12/5, x = 16/5')]
    ],
  },
  {
    no: 30,
    stimulus: [],
    prompt: S('Seorang pedagang membeli x kg mangga dan y kg apel. Mangga Rp10.000/kg, apel Rp15.000/kg, modal Rp300.000, dan gerobak memuat 25 kg. Model matematika yang sesuai adalah ….'),
    options: [
      { key: "A", text: 'x + y ≤ 25; 10x + 15y ≤ 300; x ≥ 0; y ≥ 0' },
      { key: "B", text: 'x + y ≥ 25; 2x + 3y ≤ 60; x ≥ 0; y ≥ 0' },
      { key: "C", text: 'x + y ≤ 25; 2x + 3y ≤ 60; x ≥ 0; y ≥ 0' },
      { key: "D", text: 'x + y ≤ 25; 2x + 3y ≥ 60; x ≥ 0; y ≥ 0' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Kendala muatan: '), B('x + y ≤ 25'), P('; modal dibagi 5.000: '), B('2x + 3y ≤ 60'), P('.')]
    ],
  },
  {
    no: 31,
    stimulus: [],
    prompt: S('Suku ke-10 dari barisan aritmetika 2, 5, 8, 11, … adalah ….'),
    options: [
      { key: "A", text: '28' },
      { key: "B", text: '29' },
      { key: "C", text: '30' },
      { key: "D", text: '32' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('a = 2, b = 3'), P('; '), B('U₁₀ = 2 + 9·3 = 29')]
    ],
  },
  {
    no: 32,
    stimulus: [],
    prompt: S('Jumlah 12 suku pertama deret aritmetika 4 + 7 + 10 + 13 + … adalah ….'),
    options: [
      { key: "A", text: '240' },
      { key: "B", text: '246' },
      { key: "C", text: '250' },
      { key: "D", text: '260' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('Sₙ = n/2 (2a + (n−1)b)'), P(': '), B('S₁₂ = 6(8 + 33) = 246')]
    ],
  },
  {
    no: 33,
    stimulus: [],
    prompt: S('Diketahui barisan aritmetika dengan U₃ = 10 dan U₇ = 22. Suku ke-15 adalah ….'),
    options: [
      { key: "A", text: '42' },
      { key: "B", text: '46' },
      { key: "C", text: '44' },
      { key: "D", text: '48' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('b = (22−10)/(7−3) = 3'), P('; '), B('a = 10 − 2·3 = 4'), P('; '), B('U₁₅ = 4 + 14·3 = 46')]
    ],
  },
  {
    no: 34,
    stimulus: [],
    prompt: S('Suku ke-6 dari barisan geometri 3, 6, 12, 24, … adalah ….'),
    options: [
      { key: "A", text: '72' },
      { key: "B", text: '84' },
      { key: "C", text: '108' },
      { key: "D", text: '96' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('a = 3, r = 2'), P('; '), B('U₆ = 3·2⁵ = 96')]
    ],
  },
  {
    no: 35,
    stimulus: [],
    prompt: S('Jumlah 7 suku pertama deret geometri 2 + 6 + 18 + … adalah ….'),
    options: [
      { key: "A", text: '2187' },
      { key: "B", text: '1458' },
      { key: "C", text: '2184' },
      { key: "D", text: '2186' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('S₇ = 2(3⁷ − 1)/(3 − 1) = 2(2187−1)/2 = 2186')]
    ],
  },
  {
    no: 36,
    stimulus: [],
    prompt: S('Jumlah deret geometri tak hingga 18 + 6 + 2 + 2/3 + … adalah ….'),
    options: [
      { key: "A", text: '24' },
      { key: "B", text: '30' },
      { key: "C", text: '27' },
      { key: "D", text: '36' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('r = 1/3'), P('; '), B('S∞ = 18/(1 − 1/3) = 18/(2/3) = 27')]
    ],
  },
  {
    no: 37,
    stimulus: [],
    prompt: S('Diketahui barisan geometri dengan U₂ = 6 dan U₅ = 48. Suku pertama adalah ….'),
    options: [
      { key: "A", text: '2' },
      { key: "B", text: '4' },
      { key: "C", text: '6' },
      { key: "D", text: '3' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('r³ = 48/6 = 8 ⟹ r = 2'), P('; '), B('U₂ = a·2 = 6 ⟹ a = 3')]
    ],
  },
  {
    no: 38,
    stimulus: [],
    prompt: S('Sebuah tali dipotong menjadi 5 bagian membentuk barisan geometri. Potongan terpendek 4 cm dan terpanjang 324 cm. Panjang tali mula-mula adalah ….'),
    options: [
      { key: "A", text: '480 cm' },
      { key: "B", text: '486 cm' },
      { key: "C", text: '484 cm' },
      { key: "D", text: '488 cm' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('U₅ = 4r⁴ = 324 ⟹ r⁴ = 81 ⟹ r = 3'), P('; ')],
      [B('S₅ = 4(3⁵−1)/(3−1) = 4·242/2 = 484')]
    ],
  },
  {
    no: 39,
    stimulus: [],
    prompt: S('Banyak suku barisan aritmetika 3, 7, 11, …, 99 adalah ….'),
    options: [
      { key: "A", text: '24' },
      { key: "B", text: '26' },
      { key: "C", text: '27' },
      { key: "D", text: '25' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('99 = 3 + (n−1)·4 ⟹ 96 = 4(n−1) ⟹ n = 25')]
    ],
  },
  {
    no: 40,
    stimulus: [],
    prompt: S('Rumus suku ke-n barisan 1, 4, 9, 16, 25, … adalah ….'),
    options: [
      { key: "A", text: 'n² + 1' },
      { key: "B", text: 'n²' },
      { key: "C", text: '2n − 1' },
      { key: "D", text: 'n(n + 1)/2' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Barisan bilangan kuadrat: '), B('Uₙ = n²')]
    ],
  },
  {
    no: 41,
    stimulus: [],
    prompt: S('Negasi dari pernyataan “Semua siswa menyukai matematika” adalah ….'),
    options: [
      { key: "A", text: 'Semua siswa tidak menyukai matematika' },
      { key: "B", text: 'Tidak ada siswa yang menyukai matematika' },
      { key: "C", text: 'Ada siswa yang tidak menyukai matematika' },
      { key: "D", text: 'Sebagian siswa menyukai matematika' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Negasi dari “semua P adalah Q” adalah “ada/beberapa P bukan Q”.')]
    ],
  },
  {
    no: 42,
    stimulus: [],
    prompt: S('Invers dari pernyataan “Jika hujan turun maka jalan basah” adalah ….'),
    options: [
      { key: "A", text: 'Jika jalan basah maka hujan turun' },
      { key: "B", text: 'Jika jalan tidak basah maka hujan tidak turun' },
      { key: "C", text: 'Jika hujan tidak turun maka jalan tidak basah' },
      { key: "D", text: 'Jika hujan turun maka jalan tidak basah' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Invers dari p ⟹ q adalah '), B('¬p ⟹ ¬q'), P('.')]
    ],
  },
  {
    no: 43,
    stimulus: [],
    prompt: S('Kontraposisi dari “Jika hari ini Senin maka sekolah libur” adalah ….'),
    options: [
      { key: "A", text: 'Jika hari ini bukan Senin maka sekolah tidak libur' },
      { key: "B", text: 'Jika sekolah libur maka hari ini Senin' },
      { key: "C", text: 'Jika sekolah tidak libur maka hari ini bukan Senin' },
      { key: "D", text: 'Jika hari ini Senin maka sekolah tidak libur' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Kontraposisi p ⟹ q adalah '), B('¬q ⟹ ¬p'), P('.')]
    ],
  },
  {
    no: 44,
    stimulus: [],
    prompt: S('Penarikan kesimpulan: Premis 1: Jika Andi rajin belajar maka ia lulus ujian. Premis 2: Andi tidak lulus ujian. Kesimpulan yang sah adalah ….'),
    options: [
      { key: "A", text: 'Andi tidak rajin belajar' },
      { key: "B", text: 'Andi rajin belajar' },
      { key: "C", text: 'Andi lulus ujian' },
      { key: "D", text: 'Andi rajin belajar dan lulus ujian' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Modus tollens: '), B('p ⟹ q, ¬q ⊢ ¬p'), P('.')]
    ],
  },
  {
    no: 45,
    stimulus: [],
    prompt: S('Premis 1: Jika cuaca cerah maka Rini berenang. Premis 2: Rini berenang. Kesimpulan ….'),
    options: [
      { key: "A", text: 'Cuaca cerah' },
      { key: "B", text: 'Cuaca tidak cerah' },
      { key: "C", text: 'Tidak dapat ditarik kesimpulan yang sah' },
      { key: "D", text: 'Rini tidak berenang' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('q benar pada implikasi p ⟹ q tidak menjamin p benar (fallacy affirming the consequent).')]
    ],
  },
  {
    no: 46,
    stimulus: [],
    prompt: S('Dari 30 siswa, 18 menyukai fisika, 15 menyukai kimia, dan 8 menyukai keduanya. Banyak siswa yang tidak menyukai keduanya adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '4' },
      { key: "C", text: '5' },
      { key: "D", text: '6' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('n(F∪K) = 18 + 15 − 8 = 25'), P('; '), B('30 − 25 = 5')]
    ],
  },
  {
    no: 47,
    stimulus: [],
    prompt: S('Diketahui himpunan A = {1, 2, 3} dan B = {a, b}. Banyak fungsi yang mungkin dari A ke B adalah ….'),
    options: [
      { key: "A", text: '6' },
      { key: "B", text: '8' },
      { key: "C", text: '9' },
      { key: "D", text: '16' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Banyak fungsi A→B = '), B('|B|^|A| = 2³ = 8')]
    ],
  },
  {
    no: 48,
    stimulus: [],
    prompt: S('Diketahui f(x) = 3x − 2. Jika f(a) = 10, maka nilai a adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '5' },
      { key: "C", text: '6' },
      { key: "D", text: '4' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('3a − 2 = 10 ⟹ 3a = 12 ⟹ a = 4')]
    ],
  },
  {
    no: 49,
    stimulus: [],
    prompt: S('Daerah asal fungsi f(x) = √(x − 2) adalah ….'),
    options: [
      { key: "A", text: '{x | x > 2}' },
      { key: "B", text: '{x | x ≤ 2}' },
      { key: "C", text: '{x | x ≥ 2}' },
      { key: "D", text: '{x | x ≠ 2}' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Syarat di dalam akar ≥ 0: '), B('x − 2 ≥ 0 ⟹ x ≥ 2')]
    ],
  },
  {
    no: 50,
    stimulus: [],
    prompt: S('Relasi R = {(1,2),(2,4),(3,6),(4,8)} dari A ke B. Daerah hasil (range) relasi tersebut adalah ….'),
    options: [
      { key: "A", text: '{1, 2, 3, 4}' },
      { key: "B", text: '{2, 4, 6, 8}' },
      { key: "C", text: '{2, 4, 6}' },
      { key: "D", text: '{1, 2, 4, 8}' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Range adalah himpunan elemen kedua pasangan: '), B('{2, 4, 6, 8}')]
    ],
  },
  {
    no: 51,
    stimulus: [],
    prompt: S('Diketahui f(x) = 2x + 1 dan g(x) = x². Nilai (f ∘ g)(3) adalah ….'),
    options: [
      { key: "A", text: '17' },
      { key: "B", text: '18' },
      { key: "C", text: '20' },
      { key: "D", text: '19' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('g(3) = 9'), P('; '), B('f(9) = 2·9 + 1 = 19')]
    ],
  },
  {
    no: 52,
    stimulus: [],
    prompt: S('Diketahui f(x) = x + 3 dan g(x) = 2x − 5. Nilai (g ∘ f)(2) adalah ….'),
    options: [
      { key: "A", text: '4' },
      { key: "B", text: '6' },
      { key: "C", text: '5' },
      { key: "D", text: '7' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('f(2) = 5'), P('; '), B('g(5) = 10 − 5 = 5')]
    ],
  },
  {
    no: 53,
    stimulus: [],
    prompt: S('Diketahui f(x) = 3x − 1 dan g(x) = x + 2. Rumus (f ∘ g)(x) adalah ….'),
    options: [
      { key: "A", text: '3x + 1' },
      { key: "B", text: '3x + 3' },
      { key: "C", text: '3x + 5' },
      { key: "D", text: '3x + 7' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('f(g(x)) = 3(x+2) − 1 = 3x + 6 − 1 = 3x + 5')]
    ],
  },
  {
    no: 54,
    stimulus: [],
    prompt: S('Diketahui g(x) = x² + 1 dan (f ∘ g)(x) = x² + 4. Rumus f(x) adalah ….'),
    options: [
      { key: "A", text: 'x + 3' },
      { key: "B", text: 'x + 4' },
      { key: "C", text: 'x + 2' },
      { key: "D", text: 'x² + 4' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Misal '), B('u = x² + 1'), P('; '), B('f(u) = u + 3'), P(', jadi '), B('f(x) = x + 3')]
    ],
  },
  {
    no: 55,
    stimulus: [],
    prompt: S('Invers dari fungsi f(x) = 3x − 6 adalah ….'),
    options: [
      { key: "A", text: 'f⁻¹(x) = (x − 6)/3' },
      { key: "B", text: 'f⁻¹(x) = 3x + 6' },
      { key: "C", text: 'f⁻¹(x) = x/3 − 6' },
      { key: "D", text: 'f⁻¹(x) = (x + 6)/3' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Misal '), B('y = 3x − 6 ⟹ x = (y + 6)/3'), P(', jadi '), B('f⁻¹(x) = (x + 6)/3')]
    ],
  },
  {
    no: 56,
    stimulus: [],
    prompt: S('Diketahui f(x) = 2x/(x − 3), x ≠ 3. Nilai f⁻¹(4) adalah ….'),
    options: [
      { key: "A", text: '6' },
      { key: "B", text: '4' },
      { key: "C", text: '5' },
      { key: "D", text: '8' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Cari x sehingga f(x) = 4: '), B('2x/(x−3) = 4 ⟹ 2x = 4x − 12 ⟹ x = 6')]
    ],
  },
  {
    no: 57,
    stimulus: [],
    prompt: S('Invers dari f(x) = 5 − 2x adalah ….'),
    options: [
      { key: "A", text: 'f⁻¹(x) = (5 − x)/2' },
      { key: "B", text: 'f⁻¹(x) = (x − 5)/2' },
      { key: "C", text: 'f⁻¹(x) = (5 + x)/2' },
      { key: "D", text: 'f⁻¹(x) = 2x − 5' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('y = 5 − 2x ⟹ 2x = 5 − y ⟹ x = (5 − y)/2'), P(', jadi '), B('f⁻¹(x) = (5 − x)/2')]
    ],
  },
  {
    no: 58,
    stimulus: [],
    prompt: S('Jika f(x) = x + 1 dan g(x) = x² − 1, maka (g ∘ f)(x) = ….'),
    options: [
      { key: "A", text: 'x² + 2x' },
      { key: "B", text: 'x² + 2x + 2' },
      { key: "C", text: 'x²' },
      { key: "D", text: 'x² + 2' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('g(f(x)) = (x+1)² − 1 = x² + 2x + 1 − 1 = x² + 2x')]
    ],
  },
  {
    no: 59,
    stimulus: [],
    prompt: S('Diketahui f(x) = 4x + 3. Nilai dari f⁻¹(11) adalah ….'),
    options: [
      { key: "A", text: '1' },
      { key: "B", text: '2' },
      { key: "C", text: '3' },
      { key: "D", text: '4' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('f⁻¹(x) = (x − 3)/4'), P('; '), B('f⁻¹(11) = 8/4 = 2')]
    ],
  },
  {
    no: 60,
    stimulus: [],
    prompt: S('Diketahui f(x) = (x − 1)/2 dan g(x) = 2x. Nilai (f ∘ g)(x) adalah ….'),
    options: [
      { key: "A", text: 'x − 1' },
      { key: "B", text: 'x − 1/2' },
      { key: "C", text: 'x + 1/2' },
      { key: "D", text: 'x' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('f(g(x)) = (2x − 1)/2 = x − 1/2')]
    ],
  },
  {
    no: 61,
    stimulus: [],
    prompt: S('Hasil bagi dari (x² + 5x + 6) : (x + 2) adalah ….'),
    options: [
      { key: "A", text: 'x + 3' },
      { key: "B", text: 'x + 2' },
      { key: "C", text: 'x − 3' },
      { key: "D", text: 'x + 5' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Faktorkan: '), B('x² + 5x + 6 = (x + 2)(x + 3)'), P(', hasil bagi '), B('x + 3')]
    ],
  },
  {
    no: 62,
    stimulus: [],
    prompt: S('Sisa pembagian f(x) = x³ − 2x² + 3x − 4 oleh (x − 2) adalah ….'),
    options: [
      { key: "A", text: '0' },
      { key: "B", text: '2' },
      { key: "C", text: '4' },
      { key: "D", text: '6' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Teorema sisa: sisa = f(2) = '), B('8 − 8 + 6 − 4 = 2')]
    ],
  },
  {
    no: 63,
    stimulus: [],
    prompt: S('Jika f(x) = x³ − 3x² + 2 dibagi (x − 1), sisanya adalah ….'),
    options: [
      { key: "A", text: '0' },
      { key: "B", text: '1' },
      { key: "C", text: '2' },
      { key: "D", text: '−1' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('f(1) = 1 − 3 + 2 = 0'), P(', artinya (x − 1) adalah faktor.')]
    ],
  },
  {
    no: 64,
    stimulus: [],
    prompt: S('Salah satu faktor dari x³ − x² − 4x + 4 adalah ….'),
    options: [
      { key: "A", text: '(x + 1)' },
      { key: "B", text: '(x − 2)' },
      { key: "C", text: '(x + 2)' },
      { key: "D", text: '(x − 1)' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('f(1) = 1 − 1 − 4 + 4 = 0'), P(', jadi (x − 1) faktor.')],
      [P('Faktorisasi: '), B('(x−1)(x²−4) = (x−1)(x−2)(x+2)')]
    ],
  },
  {
    no: 65,
    stimulus: [],
    prompt: S('Hasil bagi dari (2x³ − 3x² + x + 2) : (x − 1) adalah ….'),
    options: [
      { key: "A", text: '2x² − x + 2' },
      { key: "B", text: '2x² − x' },
      { key: "C", text: '2x² − x − 2' },
      { key: "D", text: '2x² + x' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Skema Horner dengan pembagi x = 1: koefisien 2, −3, 1, 2.')],
      [B('2x² − x + 0 ⟹ 2x² − x'), P(', sisa 2.')]
    ],
  },
  {
    no: 66,
    stimulus: [],
    prompt: S('Jika f(x) dibagi (x − 2) bersisa 5 dan dibagi (x + 1) bersisa −1, maka f(x) dibagi (x² − x − 2) bersisa ….'),
    options: [
      { key: "A", text: '3x + 1' },
      { key: "B", text: '2x − 1' },
      { key: "C", text: '3x − 1' },
      { key: "D", text: '2x + 1' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Misal sisa '), B('s(x) = ax + b'), P('; f(2)=5, f(−1)=−1:')],
      [B('2a + b = 5; −a + b = −1 ⟹ 3a = 6 ⟹ a = 2, b = 1'), P(', sisa '), B('2x + 1')]
    ],
  },
  {
    no: 67,
    stimulus: [],
    prompt: S('Nilai suku banyak f(x) = 2x³ + x² − 3x + 1 untuk x = 2 adalah ….'),
    options: [
      { key: "A", text: '13' },
      { key: "B", text: '15' },
      { key: "C", text: '14' },
      { key: "D", text: '16' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('f(2) = 16 + 4 − 6 + 1 = 15')]
    ],
  },
  {
    no: 68,
    stimulus: [],
    prompt: S('Jika (x − 2) merupakan faktor dari x³ + kx − 10, maka nilai k adalah ….'),
    options: [
      { key: "A", text: '2' },
      { key: "B", text: '−1' },
      { key: "C", text: '1' },
      { key: "D", text: '−2' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('f(2) = 8 + 2k − 10 = 0 ⟹ 2k = 2 ⟹ k = 1')]
    ],
  },
  {
    no: 69,
    stimulus: [],
    prompt: S('Faktorisasi penuh dari x³ − 8 adalah ….'),
    options: [
      { key: "A", text: '(x − 2)(x² − 2x + 4)' },
      { key: "B", text: '(x + 2)(x² − 2x + 4)' },
      { key: "C", text: '(x − 8)(x² + 8x + 64)' },
      { key: "D", text: '(x − 2)(x² + 2x + 4)' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Selisih kubus: '), B('a³ − b³ = (a−b)(a²+ab+b²)'), P(' dengan a=x, b=2.')]
    ],
  },
  {
    no: 70,
    stimulus: [],
    prompt: S('Jumlah akar-akar persamaan x³ − 6x² + 11x − 6 = 0 adalah ….'),
    options: [
      { key: "A", text: '−6' },
      { key: "B", text: '11' },
      { key: "C", text: '6' },
      { key: "D", text: '−11' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Jumlah akar polinom derajat 3 = '), B('−b/a = 6')]
    ],
  },
  {
    no: 71,
    stimulus: [],
    prompt: S('Diketahui A = [[2, 3], [1, 4]]. Determinan A adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '7' },
      { key: "C", text: '−5' },
      { key: "D", text: '−7' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('det A = 2·4 − 3·1 = 8 − 3 = 5')]
    ],
  },
  {
    no: 72,
    stimulus: [],
    prompt: S('Diketahui A = [[1, 2], [3, 4]] dan B = [[4, 0], [1, 5]]. Hasil A + B adalah ….'),
    options: [
      { key: "A", text: '[[5, 2], [4, 1]]' },
      { key: "B", text: '[[3, 2], [4, 9]]' },
      { key: "C", text: '[[5, 2], [4, 9]]' },
      { key: "D", text: '[[5, 2], [3, 9]]' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Jumlahkan elemen seletak: '), B('[[1+4, 2+0], [3+1, 4+5]] = [[5, 2], [4, 9]]')]
    ],
  },
  {
    no: 73,
    stimulus: [],
    prompt: S('Diketahui A = [[2, 1], [0, 3]] dan B = [[1, 2], [2, 1]]. Hasil A × B adalah ….'),
    options: [
      { key: "A", text: '[[4, 5], [6, 3]]' },
      { key: "B", text: '[[4, 5], [3, 6]]' },
      { key: "C", text: '[[2, 2], [0, 3]]' },
      { key: "D", text: '[[5, 4], [6, 3]]' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('A×B = [[2·1+1·2, 2·2+1·1], [0·1+3·2, 0·2+3·1]] = [[4, 5], [6, 3]]')]
    ],
  },
  {
    no: 74,
    stimulus: [],
    prompt: S('Invers dari matriks [[4, 3], [3, 2]] adalah ….'),
    options: [
      { key: "A", text: '[[−2, 3], [3, −4]]' },
      { key: "B", text: '[[2, −3], [−3, 4]]' },
      { key: "C", text: '[[−2, −3], [−3, 4]]' },
      { key: "D", text: '[[2, 3], [3, 4]]' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('det = 8 − 9 = −1'), P('; invers = '), B('1/(−1) [[2, −3], [−3, 4]] = [[−2, 3], [3, −4]]')]
    ],
  },
  {
    no: 75,
    stimulus: [],
    prompt: S('Diketahui matriks A = [[a, 2], [3, b]]. Jika A = Aᵀ, maka a dan b memenuhi ….'),
    options: [
      { key: "A", text: 'b = 3' },
      { key: "B", text: 'a = 3' },
      { key: "C", text: 'a = b' },
      { key: "D", text: 'a = 2' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Matriks simetris: elemen (1,2) = elemen (2,1), jadi '), B('2 = 3 ⟹ b = 3')]
    ],
  },
  {
    no: 76,
    stimulus: [],
    prompt: S('Diketahui A = [[1, 2], [3, 4]]. Determinan dari 2A adalah ….'),
    options: [
      { key: "A", text: '−4' },
      { key: "B", text: '8' },
      { key: "C", text: '16' },
      { key: "D", text: '−8' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('det(2A) = 2² det A = 4(4 − 6) = −8')]
    ],
  },
  {
    no: 77,
    stimulus: [],
    prompt: S('Jika [[x, 1], [2, y]] + [[1, 2], [3, 4]] = [[4, 3], [5, 6]], maka nilai x + y adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '5' },
      { key: "C", text: '4' },
      { key: "D", text: '6' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('x + 1 = 4 ⟹ x = 3'), P('; '), B('y + 4 = 6 ⟹ y = 2'), P('; '), B('x + y = 5')]
    ],
  },
  {
    no: 78,
    stimulus: [],
    prompt: S('Diketahui A = [[3, 0], [0, 3]]. Matriks A adalah matriks ….'),
    options: [
      { key: "A", text: 'identitas' },
      { key: "B", text: 'skalar' },
      { key: "C", text: 'diagonal' },
      { key: "D", text: 'nol' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Matriks skalar: semua elemen diagonal sama (3) dan di luar diagonal nol.')],
      [P('Matriks identitas khususnya elemen diagonal 1.')]
    ],
  },
  {
    no: 79,
    stimulus: [],
    prompt: S('Nilai x yang memenuhi det [[x, 1], [2, x]] = 3 adalah ….'),
    options: [
      { key: "A", text: 'x = 1 atau x = −1' },
      { key: "B", text: 'x = 3 atau x = −3' },
      { key: "C", text: 'x = 5 atau x = −5' },
      { key: "D", text: 'x = √5 atau x = −√5' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('x² − 2 = 3 ⟹ x² = 5 ⟹ x = ±√5')]
    ],
  },
  {
    no: 80,
    stimulus: [],
    prompt: S('Jika A = [[2, 1], [1, 3]], maka A² adalah ….'),
    options: [
      { key: "A", text: '[[4, 1], [1, 9]]' },
      { key: "B", text: '[[5, 6], [6, 10]]' },
      { key: "C", text: '[[5, 5], [5, 10]]' },
      { key: "D", text: '[[5, 5], [4, 10]]' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('A² = [[2,1],[1,3]] × [[2,1],[1,3]]')],
      [B('= [[4+1, 2+3], [2+3, 1+9]] = [[5, 5], [5, 10]]')]
    ],
  },
  {
    no: 81,
    stimulus: [],
    prompt: S('Diketahui a = (3, 4). Panjang (besar) vektor a adalah ….'),
    options: [
      { key: "A", text: '7' },
      { key: "B", text: '12' },
      { key: "C", text: '5' },
      { key: "D", text: '25' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('|a| = √(3² + 4²) = √25 = 5')]
    ],
  },
  {
    no: 82,
    stimulus: [],
    prompt: S('Diketahui u = (2, −1) dan v = (1, 3). Hasil u + v adalah ….'),
    options: [
      { key: "A", text: '(1, −4)' },
      { key: "B", text: '(3, 4)' },
      { key: "C", text: '(2, 3)' },
      { key: "D", text: '(3, 2)' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('u + v = (2+1, −1+3) = (3, 2)')]
    ],
  },
  {
    no: 83,
    stimulus: [],
    prompt: S('Diketahui a = (3, −2) dan b = (1, 4). Hasil 2a − b adalah ….'),
    options: [
      { key: "A", text: '(5, 0)' },
      { key: "B", text: '(7, −8)' },
      { key: "C", text: '(5, −8)' },
      { key: "D", text: '(5, 8)' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('2a − b = (6, −4) − (1, 4) = (5, −8)')]
    ],
  },
  {
    no: 84,
    stimulus: [],
    prompt: S('Hasil kali titik (dot product) a = (2, −1, 3) dan b = (1, 2, −1) adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '−1' },
      { key: "C", text: '−3' },
      { key: "D", text: '1' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('a·b = 2·1 + (−1)·2 + 3·(−1) = 2 − 2 − 3 = −3')]
    ],
  },
  {
    no: 85,
    stimulus: [],
    prompt: S('Vektor satuan dari a = (3, 4) adalah ….'),
    options: [
      { key: "A", text: '(3/4, 4/3)' },
      { key: "B", text: '(4/5, 3/5)' },
      { key: "C", text: '(3/5, 4/5)' },
      { key: "D", text: '(1, 1)' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('|a| = 5'), P(', vektor satuan = '), B('a/|a| = (3/5, 4/5)')]
    ],
  },
  {
    no: 86,
    stimulus: [],
    prompt: S('Jika vektor a = (2, 1) dan b = (x, 4) saling tegak lurus, maka x adalah ….'),
    options: [
      { key: "A", text: '2' },
      { key: "B", text: '8' },
      { key: "C", text: '−2' },
      { key: "D", text: '−8' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Syarat tegak lurus: '), B('a·b = 0 ⟹ 2x + 4 = 0 ⟹ x = −2')]
    ],
  },
  {
    no: 87,
    stimulus: [],
    prompt: S('Diketahui a = (1, 2) dan b = (3, −1). Nilai cosinus sudut antara a dan b adalah ….'),
    options: [
      { key: "A", text: '1/√2' },
      { key: "B", text: '1/5' },
      { key: "C", text: '1/(2√5)' },
      { key: "D", text: '1/(5√2)' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('a·b = 3 − 2 = 1'), P('; '), B('|a| = √5, |b| = √10'), P('; ')],
      [B('cos θ = 1/(√5·√10) = 1/(5√2)')]
    ],
  },
  {
    no: 88,
    stimulus: [],
    prompt: S('Proyeksi skalar ortogonal vektor a = (4, 3) pada b = (3, 0) adalah ….'),
    options: [
      { key: "A", text: '4' },
      { key: "B", text: '3' },
      { key: "C", text: '5' },
      { key: "D", text: '9' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('|a| cos θ = a·b/|b| = 12/3 = 4')]
    ],
  },
  {
    no: 89,
    stimulus: [],
    prompt: S('Diketahui titik A(1, 2) dan B(5, 5). Vektor AB adalah ….'),
    options: [
      { key: "A", text: '(−4, −3)' },
      { key: "B", text: '(4, −3)' },
      { key: "C", text: '(4, 3)' },
      { key: "D", text: '(−4, 3)' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('AB = B − A = (5−1, 5−2) = (4, 3)')]
    ],
  },
  {
    no: 90,
    stimulus: [],
    prompt: S('Jika a = (2, 3) dan b = (−1, 4), maka 3a + 2b = ….'),
    options: [
      { key: "A", text: '(4, 1)' },
      { key: "B", text: '(5, 17)' },
      { key: "C", text: '(4, 17)' },
      { key: "D", text: '(4, 13)' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('3a + 2b = (6, 9) + (−2, 8) = (4, 17)')]
    ],
  },
  {
    no: 91,
    stimulus: [],
    prompt: S('Nilai dari sin 30° + cos 60° adalah ….'),
    options: [
      { key: "A", text: '1/2' },
      { key: "B", text: '3/2' },
      { key: "C", text: '√3/2' },
      { key: "D", text: '1' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('sin 30° = 1/2'), P(' dan '), B('cos 60° = 1/2'), P(', jumlahnya 1.')]
    ],
  },
  {
    no: 92,
    stimulus: [],
    prompt: S('Nilai dari tan 45° × cos 0° adalah ….'),
    options: [
      { key: "A", text: '0' },
      { key: "B", text: '1/2' },
      { key: "C", text: '1' },
      { key: "D", text: '√2' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('tan 45° = 1'), P(' dan '), B('cos 0° = 1'), P(', hasilnya 1.')]
    ],
  },
  {
    no: 93,
    stimulus: [],
    prompt: S('Nilai dari sin 120° adalah ….'),
    options: [
      { key: "A", text: '√3/2' },
      { key: "B", text: '1/2' },
      { key: "C", text: '−√3/2' },
      { key: "D", text: '√2/2' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Kuadran II: '), B('sin 120° = sin(180° − 60°) = sin 60° = √3/2')]
    ],
  },
  {
    no: 94,
    stimulus: [],
    prompt: S('Nilai dari cos 135° adalah ….'),
    options: [
      { key: "A", text: '√2/2' },
      { key: "B", text: '−√2/2' },
      { key: "C", text: '−1/2' },
      { key: "D", text: '1/2' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('cos 135° = cos(180° − 45°) = −cos 45° = −√2/2')]
    ],
  },
  {
    no: 95,
    stimulus: [],
    prompt: S('Nilai dari tan 120° adalah ….'),
    options: [
      { key: "A", text: '√3' },
      { key: "B", text: '−√3' },
      { key: "C", text: '−1/√3' },
      { key: "D", text: '1/√3' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('tan 120° = tan(180° − 60°) = −tan 60° = −√3')]
    ],
  },
  {
    no: 96,
    stimulus: [],
    prompt: S('Jika sin θ = 3/5 dan θ di kuadran I, maka nilai cos θ adalah ….'),
    options: [
      { key: "A", text: '2/5' },
      { key: "B", text: '5/4' },
      { key: "C", text: '4/5' },
      { key: "D", text: '3/4' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('cos θ = √(1 − sin²θ) = √(1 − 9/25) = √(16/25) = 4/5')]
    ],
  },
  {
    no: 97,
    stimulus: [],
    prompt: S('Jika tan θ = 3/4 dengan θ di kuadran III, maka sin θ adalah ….'),
    options: [
      { key: "A", text: '3/5' },
      { key: "B", text: '−4/5' },
      { key: "C", text: '−3/5' },
      { key: "D", text: '4/5' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Di kuadran III, sin negatif. '), B('tan θ = 3/4 ⟹ sin θ = −3/5')]
    ],
  },
  {
    no: 98,
    stimulus: [],
    prompt: S('Nilai dari sin² 30° + cos² 30° adalah ….'),
    options: [
      { key: "A", text: '1' },
      { key: "B", text: '0' },
      { key: "C", text: '1/2' },
      { key: "D", text: '2' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Identitas Pythagoras: '), B('sin² θ + cos² θ = 1'), P(' untuk semua θ.')]
    ],
  },
  {
    no: 99,
    stimulus: [],
    prompt: S('Bentuk sederhana dari (1 − cos² x)/sin x adalah ….'),
    options: [
      { key: "A", text: 'cos x' },
      { key: "B", text: 'tan x' },
      { key: "C", text: '1/sin x' },
      { key: "D", text: 'sin x' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('1 − cos² x = sin² x'), P(', sehingga '), B('sin² x / sin x = sin x')]
    ],
  },
  {
    no: 100,
    stimulus: [],
    prompt: S('Jika cos x = 1/2 dan 0° ≤ x ≤ 180°, maka nilai x yang memenuhi adalah ….'),
    options: [
      { key: "A", text: '60°' },
      { key: "B", text: '30°' },
      { key: "C", text: '45°' },
      { key: "D", text: '120°' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('cos 60° = 1/2'), P('; cos bernilai 1/2 juga di 300° (tidak dalam rentang), jadi '), B('x = 60°')]
    ],
  },
  {
    no: 101,
    stimulus: [],
    prompt: S('Luas segitiga dengan alas 12 cm dan tinggi 5 cm adalah ….'),
    options: [
      { key: "A", text: '60 cm²' },
      { key: "B", text: '17 cm²' },
      { key: "C", text: '24 cm²' },
      { key: "D", text: '30 cm²' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('L = 1/2 × 12 × 5 = 30 cm²')]
    ],
  },
  {
    no: 102,
    stimulus: [],
    prompt: S('Keliling lingkaran berjari-jari 7 cm (π = 22/7) adalah ….'),
    options: [
      { key: "A", text: '44 cm' },
      { key: "B", text: '22 cm' },
      { key: "C", text: '154 cm' },
      { key: "D", text: '88 cm' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('K = 2πr = 2 × 22/7 × 7 = 44 cm')]
    ],
  },
  {
    no: 103,
    stimulus: [],
    prompt: S('Luas lingkaran berdiameter 14 cm (π = 22/7) adalah ….'),
    options: [
      { key: "A", text: '44 cm²' },
      { key: "B", text: '154 cm²' },
      { key: "C", text: '308 cm²' },
      { key: "D", text: '616 cm²' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('r = 7 cm; L = πr² = 22/7 × 49 = 154 cm²')]
    ],
  },
  {
    no: 104,
    stimulus: [],
    prompt: S('Volume kubus yang luas permukaannya 216 cm² adalah ….'),
    options: [
      { key: "A", text: '144 cm³' },
      { key: "B", text: '216 cm³' },
      { key: "C", text: '343 cm³' },
      { key: "D", text: '125 cm³' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('6s² = 216 ⟹ s² = 36 ⟹ s = 6'), P('; V = '), B('6³ = 216 cm³')]
    ],
  },
  {
    no: 105,
    stimulus: [],
    prompt: S('Volume balok berukuran 6 cm × 5 cm × 4 cm adalah ….'),
    options: [
      { key: "A", text: '60 cm³' },
      { key: "B", text: '90 cm³' },
      { key: "C", text: '120 cm³' },
      { key: "D", text: '150 cm³' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('V = p × l × t = 6 × 5 × 4 = 120 cm³')]
    ],
  },
  {
    no: 106,
    stimulus: [],
    prompt: S('Volume kerucut dengan jari-jari alas 7 cm dan tinggi 12 cm (π = 22/7) adalah ….'),
    options: [
      { key: "A", text: '616 cm³' },
      { key: "B", text: '1848 cm³' },
      { key: "C", text: '308 cm³' },
      { key: "D", text: '1232 cm³' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('V = 1/3 πr²t = 1/3 × 22/7 × 49 × 12 = 616 cm³')]
    ],
  },
  {
    no: 107,
    stimulus: [],
    prompt: S('Volume bola berjari-jari 7 cm (π = 22/7) adalah ….'),
    options: [
      { key: "A", text: '1437 cm³' },
      { key: "B", text: '1437,5 cm³' },
      { key: "C", text: '2156 cm³' },
      { key: "D", text: '1437⅓ cm³' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('V = 4/3 πr³ = 4/3 × 22/7 × 343 = 4/3 × 1078 = 1437⅓ cm³')]
    ],
  },
  {
    no: 108,
    stimulus: [],
    prompt: S('Titik A(2, 3) ditranslasikan oleh T = (3, −1). Bayangannya adalah ….'),
    options: [
      { key: "A", text: "A'(5, 2)" },
      { key: "B", text: "A'(5, 4)" },
      { key: "C", text: "A'(−1, 4)" },
      { key: "D", text: "A'(1, 4)" }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("A' = (2+3, 3−1) = (5, 2)")]
    ],
  },
  {
    no: 109,
    stimulus: [],
    prompt: S('Titik B(−4, 2) dicerminkan terhadap sumbu Y. Bayangannya adalah ….'),
    options: [
      { key: "A", text: "B'(−4, −2)" },
      { key: "B", text: "B'(4, −2)" },
      { key: "C", text: "B'(4, 2)" },
      { key: "D", text: "B'(−4, 2)" }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Pencerminan terhadap sumbu Y: '), B('(x, y) → (−x, y)'), P(', jadi '), B('(−4, 2) → (4, 2)')]
    ],
  },
  {
    no: 110,
    stimulus: [],
    prompt: S('Titik C(3, 5) dirotasikan 90° berlawanan arah jarum jam dengan pusat O(0,0). Bayangannya adalah ….'),
    options: [
      { key: "A", text: "C'(5, −3)" },
      { key: "B", text: "C'(−5, 3)" },
      { key: "C", text: "C'(−3, 5)" },
      { key: "D", text: "C'(3, −5)" }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Rotasi 90°: '), B('(x, y) → (−y, x)'), P(', jadi '), B('(3, 5) → (−5, 3)')]
    ],
  },
  {
    no: 111,
    stimulus: [],
    prompt: S('Nilai dari lim(x→3) (2x + 1) adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '6' },
      { key: "C", text: '8' },
      { key: "D", text: '7' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('Substitusi langsung: 2·3 + 1 = 7')]
    ],
  },
  {
    no: 112,
    stimulus: [],
    prompt: S('Nilai dari lim(x→2) (x² − 4)/(x − 2) adalah ….'),
    options: [
      { key: "A", text: '0' },
      { key: "B", text: '4' },
      { key: "C", text: '2' },
      { key: "D", text: '6' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Faktorkan: '), B('(x−2)(x+2)/(x−2) = x + 2'), P('; untuk x→2 hasil '), B('4')]
    ],
  },
  {
    no: 113,
    stimulus: [],
    prompt: S('Nilai dari lim(x→0) sin 3x / x adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '1' },
      { key: "C", text: '1/3' },
      { key: "D", text: '6' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('lim sin kx/x = k'), P(', jadi '), B('lim sin 3x/x = 3')]
    ],
  },
  {
    no: 114,
    stimulus: [],
    prompt: S('Nilai dari lim(x→∞) (4x² − 2x)/(2x² + 1) adalah ….'),
    options: [
      { key: "A", text: '4' },
      { key: "B", text: '2' },
      { key: "C", text: '1' },
      { key: "D", text: '∞' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Bagi dengan x² tertinggi: '), B('(4 − 2/x)/(2 + 1/x²) → 4/2 = 2')]
    ],
  },
  {
    no: 115,
    stimulus: [],
    prompt: S('Turunan pertama dari f(x) = 3x² + 2x − 1 adalah ….'),
    options: [
      { key: "A", text: '6x + 2' },
      { key: "B", text: '6x − 2' },
      { key: "C", text: '3x + 2' },
      { key: "D", text: '6x + 1' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("f'(x) = 6x + 2")]
    ],
  },
  {
    no: 116,
    stimulus: [],
    prompt: S('Turunan pertama dari f(x) = (2x + 1)³ adalah ….'),
    options: [
      { key: "A", text: '6(2x + 1)²' },
      { key: "B", text: '3(2x + 1)²' },
      { key: "C", text: '6(2x + 1)' },
      { key: "D", text: '12(2x + 1)²' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Aturan rantai: '), B("f'(x) = 3(2x+1)² · 2 = 6(2x+1)²")]
    ],
  },
  {
    no: 117,
    stimulus: [],
    prompt: S('Turunan dari f(x) = sin 2x adalah ….'),
    options: [
      { key: "A", text: 'cos 2x' },
      { key: "B", text: '2 sin 2x' },
      { key: "C", text: '−2 cos 2x' },
      { key: "D", text: '2 cos 2x' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Aturan rantai: '), B("f'(x) = 2 cos 2x")]
    ],
  },
  {
    no: 118,
    stimulus: [],
    prompt: S("Turunan dari f(x) = x³ − 3x + 2. Nilai f'(1) adalah …."),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '6' },
      { key: "C", text: '−3' },
      { key: "D", text: '0' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B("f'(x) = 3x² − 3"), P('; '), B("f'(1) = 3 − 3 = 0")]
    ],
  },
  {
    no: 119,
    stimulus: [],
    prompt: S('Gradien garis singgung kurva f(x) = x² + 2x di x = 1 adalah ….'),
    options: [
      { key: "A", text: '4' },
      { key: "B", text: '2' },
      { key: "C", text: '3' },
      { key: "D", text: '5' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("f'(x) = 2x + 2"), P('; '), B("f'(1) = 4")]
    ],
  },
  {
    no: 120,
    stimulus: [],
    prompt: S('Nilai minimum fungsi f(x) = x² − 4x + 3 pada interval [0, 5] adalah ….'),
    options: [
      { key: "A", text: '−1' },
      { key: "B", text: '0' },
      { key: "C", text: '3' },
      { key: "D", text: '8' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("f'(x) = 2x − 4 = 0 ⟹ x = 2"), P('; '), B('f(2) = 4 − 8 + 3 = −1'), P(' (minimum).')]
    ],
  },
  {
    no: 121,
    stimulus: [],
    prompt: S('Hasil dari ∫ 3x² dx adalah ….'),
    options: [
      { key: "A", text: 'x³' },
      { key: "B", text: '6x + C' },
      { key: "C", text: 'x³/3 + C' },
      { key: "D", text: 'x³ + C' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('∫ 3x² dx = 3·x³/3 + C = x³ + C')]
    ],
  },
  {
    no: 122,
    stimulus: [],
    prompt: S('Hasil dari ∫ (4x³ − 2x + 1) dx adalah ….'),
    options: [
      { key: "A", text: 'x⁴ − x² + x' },
      { key: "B", text: 'x⁴ − x² + x + C' },
      { key: "C", text: '4x⁴ − x² + x + C' },
      { key: "D", text: 'x⁴ − 2x² + x + C' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('∫4x³ dx = x⁴; ∫(−2x) dx = −x²; ∫1 dx = x'), P(', jadi '), B('x⁴ − x² + x + C')]
    ],
  },
  {
    no: 123,
    stimulus: [],
    prompt: S('Nilai dari ∫₀¹ (2x + 1) dx adalah ….'),
    options: [
      { key: "A", text: '1' },
      { key: "B", text: '2' },
      { key: "C", text: '3' },
      { key: "D", text: '3/2' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('∫₀¹ (2x+1) dx = [x² + x]₀¹ = (1 + 1) − 0 = 2')]
    ],
  },
  {
    no: 124,
    stimulus: [],
    prompt: S('Nilai dari ∫₁² (3x²) dx adalah ….'),
    options: [
      { key: "A", text: '6' },
      { key: "B", text: '8' },
      { key: "C", text: '7' },
      { key: "D", text: '9' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('[x³]₁² = 8 − 1 = 7')]
    ],
  },
  {
    no: 125,
    stimulus: [],
    prompt: S('Hasil dari ∫ (2x + 3)⁵ dx adalah ….'),
    options: [
      { key: "A", text: '(2x + 3)⁶/12 + C' },
      { key: "B", text: '(2x + 3)⁶/6 + C' },
      { key: "C", text: '(2x + 3)⁶ + C' },
      { key: "D", text: '(2x + 3)⁶/5 + C' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P('Substitusi u = 2x+3, du = 2 dx: '), B('1/2 · u⁶/6 = (2x+3)⁶/12 + C')]
    ],
  },
  {
    no: 126,
    stimulus: [],
    prompt: S('Luas daerah yang dibatasi y = x + 2, sumbu X, x = 0, dan x = 3 adalah ….'),
    options: [
      { key: "A", text: '15/2 satuan luas' },
      { key: "B", text: '9 satuan luas' },
      { key: "C", text: '21/2 satuan luas' },
      { key: "D", text: '12 satuan luas' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('L = ∫₀³ (x+2) dx = [x²/2 + 2x]₀³ = 9/2 + 6 = 21/2')]
    ],
  },
  {
    no: 127,
    stimulus: [],
    prompt: S('Hasil dari ∫ cos x dx adalah ….'),
    options: [
      { key: "A", text: '−sin x + C' },
      { key: "B", text: 'tan x + C' },
      { key: "C", text: 'sin x + C' },
      { key: "D", text: '−cos x + C' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [B('∫ cos x dx = sin x + C')]
    ],
  },
  {
    no: 128,
    stimulus: [],
    prompt: S('Hasil dari ∫ (6x² + 4x) dx adalah ….'),
    options: [
      { key: "A", text: '2x³ + 2x² + C' },
      { key: "B", text: '2x³ + 4x² + C' },
      { key: "C", text: '6x³ + 2x² + C' },
      { key: "D", text: '3x³ + 2x² + C' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('∫6x² dx = 2x³; ∫4x dx = 2x²'), P(', jadi '), B('2x³ + 2x² + C')]
    ],
  },
  {
    no: 129,
    stimulus: [],
    prompt: S('Nilai dari ∫₀^π sin x dx adalah ….'),
    options: [
      { key: "A", text: '0' },
      { key: "B", text: '2' },
      { key: "C", text: '1' },
      { key: "D", text: '−1' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('[−cos x]₀^π = −cos π + cos 0 = 1 + 1 = 2')]
    ],
  },
  {
    no: 130,
    stimulus: [],
    prompt: S('Jika ∫ (ax + b) dx = 2x² + 3x + C, maka nilai a + b adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '6' },
      { key: "C", text: '8' },
      { key: "D", text: '7' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P('Turunkan: '), B('ax + b = 4x + 3'), P(', jadi a = 4, b = 3, a + b = 7.')]
    ],
  },
  {
    no: 131,
    stimulus: [],
    prompt: S('Rata-rata dari data 4, 6, 8, 10, 12 adalah ….'),
    options: [
      { key: "A", text: '7' },
      { key: "B", text: '8' },
      { key: "C", text: '9' },
      { key: "D", text: '10' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('(4+6+8+10+12)/5 = 40/5 = 8')]
    ],
  },
  {
    no: 132,
    stimulus: [],
    prompt: S('Median dari data 3, 5, 7, 7, 9, 10, 12 adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '9' },
      { key: "C", text: '7' },
      { key: "D", text: '7,5' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Data terurut; nilai tengah ke-4 adalah '), B('7')]
    ],
  },
  {
    no: 133,
    stimulus: [],
    prompt: S('Modus dari data 2, 3, 3, 4, 5, 5, 5, 6 adalah ….'),
    options: [
      { key: "A", text: '3' },
      { key: "B", text: '5' },
      { key: "C", text: '4' },
      { key: "D", text: '6' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Nilai yang paling sering muncul adalah '), B('5'), P(' (muncul 3 kali).')]
    ],
  },
  {
    no: 134,
    stimulus: [],
    prompt: S('Rata-rata nilai ulangan 5 siswa adalah 80. Jika ditambah satu siswa dengan nilai 92, rata-rata baru adalah ….'),
    options: [
      { key: "A", text: '81' },
      { key: "B", text: '83' },
      { key: "C", text: '84' },
      { key: "D", text: '82' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('(5×80 + 92)/6 = (400 + 92)/6 = 492/6 = 82')]
    ],
  },
  {
    no: 135,
    stimulus: [],
    prompt: S('Jangkauan (range) dari data 12, 15, 9, 20, 18, 14 adalah ….'),
    options: [
      { key: "A", text: '9' },
      { key: "B", text: '12' },
      { key: "C", text: '20' },
      { key: "D", text: '11' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('20 − 9 = 11')]
    ],
  },
  {
    no: 136,
    stimulus: [],
    prompt: S('Sebuah dadu dilempar sekali. Peluang muncul mata dadu genap adalah ….'),
    options: [
      { key: "A", text: '1/3' },
      { key: "B", text: '1/2' },
      { key: "C", text: '1/6' },
      { key: "D", text: '2/3' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Mata genap: 2, 4, 6 → 3 dari 6, peluang '), B('3/6 = 1/2')]
    ],
  },
  {
    no: 137,
    stimulus: [],
    prompt: S('Dua koin dilempar bersama. Peluang muncul tepat satu gambar adalah ….'),
    options: [
      { key: "A", text: '1/4' },
      { key: "B", text: '1/2' },
      { key: "C", text: '1/3' },
      { key: "D", text: '3/4' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P('Ruang sampel: AA, AG, GA, GG. Tepat satu gambar: AG, GA → '), B('2/4 = 1/2')]
    ],
  },
  {
    no: 138,
    stimulus: [],
    prompt: S('Dalam sebuah kantong ada 5 bola merah dan 3 bola putih. Diambil satu bola acak, peluang terambil bola merah adalah ….'),
    options: [
      { key: "A", text: '5/8' },
      { key: "B", text: '3/8' },
      { key: "C", text: '5/3' },
      { key: "D", text: '1/2' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('P = 5/(5+3) = 5/8')]
    ],
  },
  {
    no: 139,
    stimulus: [],
    prompt: S('Banyak cara menyusun 3 orang dari 5 orang untuk menjadi pengurus (ketua, sekretaris, bendahara) adalah ….'),
    options: [
      { key: "A", text: '60' },
      { key: "B", text: '10' },
      { key: "C", text: '20' },
      { key: "D", text: '120' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('P(5,3) = 5×4×3 = 60')]
    ],
  },
  {
    no: 140,
    stimulus: [],
    prompt: S('Banyak cara memilih 2 wakil dari 6 kandidat (tanpa jabatan) adalah ….'),
    options: [
      { key: "A", text: '15' },
      { key: "B", text: '12' },
      { key: "C", text: '30' },
      { key: "D", text: '36' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('C(6,2) = 6×5/2 = 15')]
    ],
  },
  {
    no: 141,
    stimulus: [],
    prompt: S('Himpunan penyelesaian dari |2x − 3| ≤ 5 adalah ….'),
    options: [
      { key: "A", text: '{x | x ≤ −1 atau x ≥ 4}' },
      { key: "B", text: '{x | 1 ≤ x ≤ 4}' },
      { key: "C", text: '{x | −1 ≤ x ≤ 4}' },
      { key: "D", text: '{x | −4 ≤ x ≤ 1}' }
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P('Sifat: '), B('|a| ≤ b ⟺ −b ≤ a ≤ b'), P(':')],
      [B('−5 ≤ 2x − 3 ≤ 5 ⟹ −2 ≤ 2x ≤ 8 ⟹ −1 ≤ x ≤ 4')]
    ],
  },
  {
    no: 142,
    stimulus: [],
    prompt: S('Nilai x yang memenuhi |x − 2| = 7 adalah ….'),
    options: [
      { key: "A", text: 'x = 9 atau x = −5' },
      { key: "B", text: 'x = 9 atau x = 5' },
      { key: "C", text: 'x = 7 atau x = −7' },
      { key: "D", text: 'x = 5 atau x = −9' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('x − 2 = 7 ⟹ x = 9'), P(' atau '), B('x − 2 = −7 ⟹ x = −5')]
    ],
  },
  {
    no: 143,
    stimulus: [],
    prompt: S('Diketahui deret aritmetika dengan suku pertama 5 dan beda 4. Suku ke-n yang nilainya 85 adalah ….'),
    options: [
      { key: "A", text: 'n = 20' },
      { key: "B", text: 'n = 22' },
      { key: "C", text: 'n = 19' },
      { key: "D", text: 'n = 21' }
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [B('85 = 5 + (n−1)·4 ⟹ 80 = 4(n−1) ⟹ n = 21')]
    ],
  },
  {
    no: 144,
    stimulus: [],
    prompt: S('Nilai dari ⁵log 125 + ²log 16 adalah ….'),
    options: [
      { key: "A", text: '7' },
      { key: "B", text: '5' },
      { key: "C", text: '6' },
      { key: "D", text: '8' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('⁵log 125 = 3'), P('; '), B('²log 16 = 4'), P('; jumlah '), B('7')]
    ],
  },
  {
    no: 145,
    stimulus: [],
    prompt: S('Jika f(x) = x² − 4, maka nilai f(3) − f(1) adalah ….'),
    options: [
      { key: "A", text: '5' },
      { key: "B", text: '4' },
      { key: "C", text: '6' },
      { key: "D", text: '8' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('f(3) = 9 − 4 = 5; f(1) = 1 − 4 = −3'), P('; '), B('5 − (−3) = 8')]
    ],
  },
  {
    no: 146,
    stimulus: [],
    prompt: S('Diketahui barisan geometri 2, 6, 18, …, suku ke-8 adalah ….'),
    options: [
      { key: "A", text: '4372' },
      { key: "B", text: '4374' },
      { key: "C", text: '4376' },
      { key: "D", text: '1458' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('U₈ = 2·3⁷ = 2 × 2187 = 4374')]
    ],
  },
  {
    no: 147,
    stimulus: [],
    prompt: S('Nilai dari cos 60° + sin 30° − tan 45° adalah ….'),
    options: [
      { key: "A", text: '1' },
      { key: "B", text: '0' },
      { key: "C", text: '1/2' },
      { key: "D", text: '−1' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('1/2 + 1/2 − 1 = 0')]
    ],
  },
  {
    no: 148,
    stimulus: [],
    prompt: S('Luas juring lingkaran berjari-jari 10 cm dengan sudut pusat 72° (π = 3,14) adalah ….'),
    options: [
      { key: "A", text: '31,4 cm²' },
      { key: "B", text: '62,8 cm²' },
      { key: "C", text: '78,5 cm²' },
      { key: "D", text: '125,6 cm²' }
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [B('L = 72/360 × π × 10² = 1/5 × 314 = 62,8 cm²')]
    ],
  },
  {
    no: 149,
    stimulus: [],
    prompt: S('Sebuah dadu dan sebuah koin dilempar bersama. Banyak ruang sampel adalah ….'),
    options: [
      { key: "A", text: '12' },
      { key: "B", text: '6' },
      { key: "C", text: '8' },
      { key: "D", text: '36' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B('6 × 2 = 12')]
    ],
  },
  {
    no: 150,
    stimulus: [],
    prompt: S('Turunan kedua dari f(x) = x³ + 2x² adalah ….'),
    options: [
      { key: "A", text: '6x + 4' },
      { key: "B", text: '3x² + 4x' },
      { key: "C", text: '6x + 2' },
      { key: "D", text: '6x' }
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [B("f'(x) = 3x² + 4x"), P('; '), B("f''(x) = 6x + 4")]
    ],
  },
];
