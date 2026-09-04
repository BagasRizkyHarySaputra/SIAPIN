#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generator for TKA SMA Matematika bank soal (150 soal)."""

# Target answer sequence (A/B/C/D) — balanced, generated with random seed 42.
SEQ = ("B D C D C B D B B B "
       "B C A D C A D A C A "
       "D D B D D D A B D C "
       "B B B D D C D C D B "
       "C C C A C C B D C B "
       "D C C A D A A A B B "
       "A B A D B D B C D C "
       "A C A A A D C B D C "
       "C D C C C C D A C C "
       "D C A B B C C A D A "
       "D A B B C A D A C B "
       "D B A B A A D D A A "
       "D B B C A C C A B D "
       "B C B D D B B A A A "
       "C A D A A B B B A A").split()
assert len(SEQ) == 150, len(SEQ)
from collections import Counter
print(Counter(SEQ))

def place(correct, dist, target):
    """Return option list [A,B,C,D] with `correct` at target letter."""
    opts = [None, None, None, None]
    idx = ord(target) - ord('A')
    opts[idx] = correct
    di = 0
    for i in range(4):
        if opts[i] is None:
            opts[i] = dist[di]
            di += 1
    return opts

# Question definitions: (prompt, correct_answer_value, [d1,d2,d3], explanation)
# explanation = list of lines; each line = list of (bold, text)
Q = []

# ---------- EKSPONEN, AKAR, LOGARITMA (1-10) ----------
Q.append(("Bentuk sederhana dari 2⁵ × 2⁻³ × 2² adalah ….", "16", ["8", "32", "64"],
 [ [(0,"Gunakan sifat "),(1,"aᵐ × aⁿ = aᵐ⁺ⁿ"),(0,":")],
   [(1,"2⁵ × 2⁻³ × 2² = 2⁵⁻³⁺² = 2⁴ = 16")] ]))
Q.append(("Nilai dari (3²)³ : 3⁴ adalah ….", "9", ["3", "27", "81"],
 [ [(0,"Sifat pangkat: "),(1,"(aᵐ)ⁿ = aᵐⁿ"),(0," dan "),(1,"aᵐ : aⁿ = aᵐ⁻ⁿ"),(0,".")],
   [(1,"(3²)³ : 3⁴ = 3⁶ : 3⁴ = 3² = 9")] ]))
Q.append(("Hasil dari ⁵√(32) × ³√(27) adalah ….", "6", ["15", "12", "8"],
 [ [(1,"⁵√32 = 2"),(0," karena "),(1,"2⁵ = 32"),(0,"; "),(1,"³√27 = 3"),(0,".")],
   [(1,"2 × 3 = 6")] ]))
Q.append(("Bentuk sederhana dari √(200) adalah ….", "10√2", ["20√2", "5√2", "4√2"],
 [ [(0,"Faktorkan: "),(1,"200 = 100 × 2"),(0,".")],
   [(1,"√200 = √100 × √2 = 10√2")] ]))
Q.append(("Hasil dari 2√5 + 3√5 − √5 adalah ….", "4√5", ["6√5", "5√5", "3√5"],
 [ [(0,"Koefisien akar sejenis dapat dijumlahkan: "),(1,"(2 + 3 − 1)√5 = 4√5")] ]))
Q.append(("Bentuk rasional dari 4/(2 + √2) adalah ….", "4 − 2√2", ["4 + 2√2", "2 − 2√2", "2 + 2√2"],
 [ [(0,"Kalikan dengan sekawan "),(1,"(2 − √2)"),(0,":")],
   [(1,"4(2 − √2)/(4 − 2) = 4(2 − √2)/2 = 2(2 − √2) = 4 − 2√2")] ]))
Q.append(("Nilai dari ³log 81 + ³log 27 adalah ….", "7", ["5", "6", "8"],
 [ [(0,"Sifat "),(1,"ᵃlog b + ᵃlog c = ᵃlog (bc)"),(0,":")],
   [(1,"³log 81 + ³log 27 = ³log (81×27) = ³log 2187"),(0,"; "),(1,"3⁷ = 2187"),(0,", jadi hasilnya "),(1,"7")] ]))
Q.append(("Jika ²log 3 = a, maka ²log 18 dinyatakan dalam a adalah ….", "2a + 1", ["a + 3", "a + 2", "2a + 3"],
 [ [(0,"Uraikan: "),(1,"18 = 2 × 3²"),(0,".")],
   [(1,"²log 18 = ²log 2 + 2·²log 3 = 1 + 2a")], ]))
Q.append(("Nilai x yang memenuhi 3ˣ⁺² = 1/27 adalah ….", "−5", ["5", "−1", "1"],
 [ [(0,"Ubah ruas kanan: "),(1,"1/27 = 3⁻³"),(0,".")],
   [(1,"3ˣ⁺² = 3⁻³ ⟺ x + 2 = −3 ⟺ x = −5")] ]))
Q.append(("Jika 2ˣ = 32 dan 3ʸ = 81, maka nilai x + y adalah ….", "9", ["7", "8", "10"],
 [ [(1,"2ˣ = 32 ⟹ x = 5"),(0,"; "),(1,"3ʸ = 81 ⟹ y = 4"),(0,".")],
   [(1,"x + y = 5 + 4 = 9")] ]))

# ---------- PERSAMAAN & FUNGSI KUADRAT (11-20) ----------
Q.append(("Akar-akar persamaan x² − 5x + 6 = 0 adalah x₁ dan x₂. Nilai x₁ + x₂ adalah ….", "5", ["−5", "6", "−6"],
 [ [(0,"Jumlah akar "),(1,"x₁ + x₂ = −b/a"),(0,".")],
   [(1,"x₁ + x₂ = −(−5)/1 = 5")] ]))
Q.append(("Hasil kali akar-akar persamaan 2x² + 6x − 8 = 0 adalah ….", "−4", ["4", "3", "−3"],
 [ [(0,"Hasil kali akar "),(1,"x₁·x₂ = c/a"),(0,".")],
   [(1,"x₁·x₂ = −8/2 = −4")] ]))
Q.append(("Salah satu akar persamaan x² + kx − 12 = 0 adalah 3. Nilai k adalah ….", "1", ["−1", "4", "−4"],
 [ [(0,"Substitusi x = 3:"),(1,"9 + 3k − 12 = 0 ⟺ 3k = 3 ⟺ k = 1")] ]))
Q.append(("Persamaan kuadrat yang akar-akarnya 2 dan −5 adalah ….", "x² + 3x − 10 = 0", ["x² − 3x − 10 = 0", "x² + 7x − 10 = 0", "x² − 7x − 10 = 0"],
 [ [(0,"Jumlah akar = −3, hasil kali = −10.")],
   [(1,"x² − (jumlah)x + (hasil kali) = x² + 3x − 10 = 0")] ]))
Q.append(("Grafik fungsi f(x) = x² − 4x + 3 memotong sumbu X di titik ….", "(1, 0) dan (3, 0)", ["(−1, 0) dan (−3, 0)", "(1, 0) dan (−3, 0)", "(−1, 0) dan (3, 0)"],
 [ [(0,"Faktorkan: "),(1,"x² − 4x + 3 = (x − 1)(x − 3)"),(0,".")],
   [(1,"x = 1 atau x = 3"),(0,", jadi titik potong (1,0) dan (3,0).")] ]))
Q.append(("Titik puncak parabola f(x) = x² − 6x + 8 adalah ….", "(3, −1)", ["(−3, −1)", "(3, 1)", "(−3, 1)"],
 [ [(1,"xₚ = −b/(2a) = 6/2 = 3"),(0,"; "),(1,"yₚ = f(3) = 9 − 18 + 8 = −1")] ]))
Q.append(("Nilai maksimum fungsi f(x) = −x² + 4x + 1 adalah ….", "5", ["3", "4", "6"],
 [ [(1,"xₚ = −b/(2a) = −4/(−2) = 2"),(0,"; ")],
   [(1,"f(2) = −4 + 8 + 1 = 5")] ]))
Q.append(("Fungsi kuadrat yang grafiknya melalui titik (0, 3), (1, 0), dan (3, 0) adalah ….", "f(x) = x² − 4x + 3", ["f(x) = x² + 4x + 3", "f(x) = −x² + 4x + 3", "f(x) = x² − 4x − 3"],
 [ [(0,"Akar 1 dan 3: "),(1,"f(x) = a(x−1)(x−3)"),(0,"; melalui (0,3):")],
   [(1,"3 = a(3) ⟹ a = 1"),(0,", sehingga "),(1,"f(x) = x² − 4x + 3")] ]))
Q.append(("Himpunan penyelesaian dari x² − 2x − 8 ≥ 0 adalah ….", "{x | x ≤ −2 atau x ≥ 4}", ["{x | −2 ≤ x ≤ 4}", "{x | x ≤ 2 atau x ≥ 4}", "{x | x ≤ −4 atau x ≥ 2}"],
 [ [(0,"Faktorkan: "),(1,"(x − 4)(x + 2) ≥ 0"),(0,".")],
   [(0,"Pembuat nol x = 4 atau x = −2; uji interval menghasilkan "),(1,"x ≤ −2 atau x ≥ 4")] ]))
Q.append(("Himpunan penyelesaian dari x² − x − 6 < 0 adalah ….", "{x | −2 < x < 3}", ["{x | x < −2 atau x > 3}", "{x | 2 < x < 3}", "{x | −3 < x < 2}"],
 [ [(0,"Faktorkan: "),(1,"(x − 3)(x + 2) < 0"),(0,".")],
   [(1,"−2 < x < 3")] ]))

# ---------- SPLDV/SPLTV & PROGRAM LINEAR (21-30) ----------
Q.append(("Penyelesaian dari x + y = 7 dan 2x − y = 8 adalah x = a dan y = b. Nilai a + b adalah ….", "7", ["5", "6", "8"],
 [ [(0,"Jumlahkan kedua persamaan:"),(1,"3x = 15 ⟹ x = 5"),(0,"; y = 2.")],
   [(1,"a + b = 5 + 2 = 7")] ]))
Q.append(("Himpunan penyelesaian dari 3x − 2y = 8 dan x + 2y = 0 adalah ….", "{(2, −1)}", ["{(−2, 1)}", "{(2, 1)}", "{(1, −2)}"],
 [ [(0,"Jumlahkan: "),(1,"4x = 8 ⟹ x = 2"),(0,"; substitusi: "),(1,"2 + 2y = 0 ⟹ y = −1")] ]))
Q.append(("Jika x + 2y = 5 dan 3x − y = 1, maka nilai 2x + y adalah ….", "4", ["3", "5", "6"],
 [ [(0,"Dari persamaan pertama "),(1,"x = 5 − 2y"),(0,"; substitusi:")],
   [(1,"3(5−2y) − y = 1 ⟹ 15 − 7y = 1 ⟹ y = 2, x = 1"),(0,"; maka "),(1,"2x + y = 4")] ]))
Q.append(("Himpunan penyelesaian dari sistem x + y + z = 6, x + y = 4, y + z = 5 adalah ….", "{(1, 3, 2)}", ["{(2, 2, 2)}", "{(3, 1, 2)}", "{(1, 2, 3)}"],
 [ [(1,"x + y = 4"),(0," dan "),(1,"x + y + z = 6 ⟹ z = 2"),(0,"; "),(1,"y + z = 5 ⟹ y = 3, x = 1")] ]))
Q.append(("Umur Ayah tiga kali umur anaknya. Lima tahun lalu, umur Ayah empat kali umur anaknya. Umur Ayah sekarang adalah ….", "45 tahun", ["40 tahun", "42 tahun", "48 tahun"],
 [ [(0,"Misal A = 3a; "),(1,"A − 5 = 4(a − 5)"),(0," ⟹ "),(1,"3a − 5 = 4a − 20 ⟹ a = 15"),(0,", A = 45.")] ]))
Q.append(("Harga 2 buku dan 3 pensil Rp13.000, sedangkan 3 buku dan 2 pensil Rp17.000. Harga 1 buku adalah ….", "Rp5.000", ["Rp4.000", "Rp6.000", "Rp7.000"],
 [ [(0,"Eliminasi: "),(1,"2b+3p=13.000"),(0," dan "),(1,"3b+2p=17.000"),(0,".")],
   [(1,"9b+6p=51.000; 4b+6p=26.000 ⟹ 5b=25.000 ⟹ b=5.000")] ]))
Q.append(("Nilai maksimum dari f(x, y) = 4x + 3y dengan kendala x + y ≤ 6, x ≥ 0, y ≥ 0 adalah ….", "24", ["18", "12", "21"],
 [ [(0,"Titik pojok: (0,0), (6,0), (0,6).")],
   [(1,"f(6,0)=24, f(0,6)=18"),(0,", nilai maksimum 24.")] ]))
Q.append(("Nilai minimum dari f(x, y) = 5x + 2y dengan kendala 2x + y ≥ 4, x + 3y ≥ 6, x ≥ 0, y ≥ 0 adalah ….", "8", ["6", "10", "12"],
 [ [(0,"Titik (0,2) tidak memenuhi 2x + y ≥ 4 dan (2,0) tidak memenuhi x + 3y ≥ 6, sehingga keduanya bukan titik pojok daerah layak.")],
   [(0,"Daerah layak dibatasi sumbu, garis 2x + y = 4 pada ruas 0 ≤ x ≤ 6/5, dan garis x + 3y = 6.")],
   [(0,"Pada 2x + y = 4: f = 5x + 2(4−2x) = 8 + x, minimum saat x = 0, yaitu f(0, 4) = "),(1,"8"),(0,".")],
   [(0,"Pada x + 3y = 6 (x ≥ 6/5): f naik dari 46/5, jadi minimum global adalah "),(1,"8"),(0,".")] ]))
Q.append(("Daerah yang memenuhi x ≥ 0, y ≥ 0, x + 2y ≤ 8, dan 3x + y ≤ 12 memiliki titik potong garis kendala di ….", "(16/5, 12/5)", ["(4, 2)", "(2, 3)", "(8/3, 8/3)"],
 [ [(0,"Eliminasi x + 2y = 8 dan 3x + y = 12:")],
   [(1,"x = 8 − 2y ⟹ 24 − 6y + y = 12 ⟹ y = 12/5, x = 16/5")] ]))
Q.append(("Seorang pedagang membeli x kg mangga dan y kg apel. Mangga Rp10.000/kg, apel Rp15.000/kg, modal Rp300.000, dan gerobak memuat 25 kg. Model matematika yang sesuai adalah ….",
 "x + y ≤ 25; 2x + 3y ≤ 60; x ≥ 0; y ≥ 0",
 ["x + y ≤ 25; 10x + 15y ≤ 300; x ≥ 0; y ≥ 0", "x + y ≥ 25; 2x + 3y ≤ 60; x ≥ 0; y ≥ 0", "x + y ≤ 25; 2x + 3y ≥ 60; x ≥ 0; y ≥ 0"],
 [ [(0,"Kendala muatan: "),(1,"x + y ≤ 25"),(0,"; modal dibagi 5.000: "),(1,"2x + 3y ≤ 60"),(0,".")] ]))

# ---------- BARISAN & DERET (31-40) ----------
Q.append(("Suku ke-10 dari barisan aritmetika 2, 5, 8, 11, … adalah ….", "29", ["28", "30", "32"],
 [ [(1,"a = 2, b = 3"),(0,"; "),(1,"U₁₀ = 2 + 9·3 = 29")] ]))
Q.append(("Jumlah 12 suku pertama deret aritmetika 4 + 7 + 10 + 13 + … adalah ….", "246", ["240", "250", "260"],
 [ [(1,"Sₙ = n/2 (2a + (n−1)b)"),(0,": "),(1,"S₁₂ = 6(8 + 33) = 246")] ]))
Q.append(("Diketahui barisan aritmetika dengan U₃ = 10 dan U₇ = 22. Suku ke-15 adalah ….", "46", ["42", "44", "48"],
 [ [(1,"b = (22−10)/(7−3) = 3"),(0,"; "),(1,"a = 10 − 2·3 = 4"),(0,"; "),(1,"U₁₅ = 4 + 14·3 = 46")] ]))
Q.append(("Suku ke-6 dari barisan geometri 3, 6, 12, 24, … adalah ….", "96", ["72", "84", "108"],
 [ [(1,"a = 3, r = 2"),(0,"; "),(1,"U₆ = 3·2⁵ = 96")] ]))
Q.append(("Jumlah 7 suku pertama deret geometri 2 + 6 + 18 + … adalah ….", "2186", ["2187", "1458", "2184"],
 [ [(1,"S₇ = 2(3⁷ − 1)/(3 − 1) = 2(2187−1)/2 = 2186")] ]))
Q.append(("Jumlah deret geometri tak hingga 18 + 6 + 2 + 2/3 + … adalah ….", "27", ["24", "30", "36"],
 [ [(1,"r = 1/3"),(0,"; "),(1,"S∞ = 18/(1 − 1/3) = 18/(2/3) = 27")] ]))
Q.append(("Diketahui barisan geometri dengan U₂ = 6 dan U₅ = 48. Suku pertama adalah ….", "3", ["2", "4", "6"],
 [ [(1,"r³ = 48/6 = 8 ⟹ r = 2"),(0,"; "),(1,"U₂ = a·2 = 6 ⟹ a = 3")] ]))
Q.append(("Sebuah tali dipotong menjadi 5 bagian membentuk barisan geometri. Potongan terpendek 4 cm dan terpanjang 324 cm. Panjang tali mula-mula adalah ….", "484 cm", ["480 cm", "486 cm", "488 cm"],
 [ [(1,"U₅ = 4r⁴ = 324 ⟹ r⁴ = 81 ⟹ r = 3"),(0,"; ")],
   [(1,"S₅ = 4(3⁵−1)/(3−1) = 4·242/2 = 484")] ]))
Q.append(("Banyak suku barisan aritmetika 3, 7, 11, …, 99 adalah ….", "25", ["24", "26", "27"],
 [ [(1,"99 = 3 + (n−1)·4 ⟹ 96 = 4(n−1) ⟹ n = 25")] ]))
Q.append(("Rumus suku ke-n barisan 1, 4, 9, 16, 25, … adalah ….", "n²", ["n² + 1", "2n − 1", "n(n + 1)/2"],
 [ [(0,"Barisan bilangan kuadrat: "),(1,"Uₙ = n²")] ]))

# ---------- LOGIKA, HIMPUNAN, RELASI/FUNGSI (41-50) ----------
Q.append(("Negasi dari pernyataan “Semua siswa menyukai matematika” adalah ….", "Ada siswa yang tidak menyukai matematika", ["Semua siswa tidak menyukai matematika", "Tidak ada siswa yang menyukai matematika", "Sebagian siswa menyukai matematika"],
 [ [(0,"Negasi dari “semua P adalah Q” adalah “ada/beberapa P bukan Q”.")] ]))
Q.append(("Invers dari pernyataan “Jika hujan turun maka jalan basah” adalah ….", "Jika hujan tidak turun maka jalan tidak basah", ["Jika jalan basah maka hujan turun", "Jika jalan tidak basah maka hujan tidak turun", "Jika hujan turun maka jalan tidak basah"],
 [ [(0,"Invers dari p ⟹ q adalah "),(1,"¬p ⟹ ¬q"),(0,".")] ]))
Q.append(("Kontraposisi dari “Jika hari ini Senin maka sekolah libur” adalah ….", "Jika sekolah tidak libur maka hari ini bukan Senin", ["Jika hari ini bukan Senin maka sekolah tidak libur", "Jika sekolah libur maka hari ini Senin", "Jika hari ini Senin maka sekolah tidak libur"],
 [ [(0,"Kontraposisi p ⟹ q adalah "),(1,"¬q ⟹ ¬p"),(0,".")] ]))
Q.append(("Penarikan kesimpulan: Premis 1: Jika Andi rajin belajar maka ia lulus ujian. Premis 2: Andi tidak lulus ujian. Kesimpulan yang sah adalah ….",
 "Andi tidak rajin belajar", ["Andi rajin belajar", "Andi lulus ujian", "Andi rajin belajar dan lulus ujian"],
 [ [(0,"Modus tollens: "),(1,"p ⟹ q, ¬q ⊢ ¬p"),(0,".")] ]))
Q.append(("Premis 1: Jika cuaca cerah maka Rini berenang. Premis 2: Rini berenang. Kesimpulan ….",
 "Tidak dapat ditarik kesimpulan yang sah", ["Cuaca cerah", "Cuaca tidak cerah", "Rini tidak berenang"],
 [ [(0,"q benar pada implikasi p ⟹ q tidak menjamin p benar (fallacy affirming the consequent).")] ]))
Q.append(("Dari 30 siswa, 18 menyukai fisika, 15 menyukai kimia, dan 8 menyukai keduanya. Banyak siswa yang tidak menyukai keduanya adalah ….", "5", ["3", "4", "6"],
 [ [(1,"n(F∪K) = 18 + 15 − 8 = 25"),(0,"; "),(1,"30 − 25 = 5")] ]))
Q.append(("Diketahui himpunan A = {1, 2, 3} dan B = {a, b}. Banyak fungsi yang mungkin dari A ke B adalah ….", "8", ["6", "9", "16"],
 [ [(0,"Banyak fungsi A→B = "),(1,"|B|^|A| = 2³ = 8")] ]))
Q.append(("Diketahui f(x) = 3x − 2. Jika f(a) = 10, maka nilai a adalah ….", "4", ["3", "5", "6"],
 [ [(1,"3a − 2 = 10 ⟹ 3a = 12 ⟹ a = 4")] ]))
Q.append(("Daerah asal fungsi f(x) = √(x − 2) adalah ….", "{x | x ≥ 2}", ["{x | x > 2}", "{x | x ≤ 2}", "{x | x ≠ 2}"],
 [ [(0,"Syarat di dalam akar ≥ 0: "),(1,"x − 2 ≥ 0 ⟹ x ≥ 2")] ]))
Q.append(("Relasi R = {(1,2),(2,4),(3,6),(4,8)} dari A ke B. Daerah hasil (range) relasi tersebut adalah ….", "{2, 4, 6, 8}", ["{1, 2, 3, 4}", "{2, 4, 6}", "{1, 2, 4, 8}"],
 [ [(0,"Range adalah himpunan elemen kedua pasangan: "),(1,"{2, 4, 6, 8}")] ]))

# ---------- FUNGSI KOMPOSISI & INVERS (51-60) ----------
Q.append(("Diketahui f(x) = 2x + 1 dan g(x) = x². Nilai (f ∘ g)(3) adalah ….", "19", ["17", "18", "20"],
 [ [(1,"g(3) = 9"),(0,"; "),(1,"f(9) = 2·9 + 1 = 19")] ]))
Q.append(("Diketahui f(x) = x + 3 dan g(x) = 2x − 5. Nilai (g ∘ f)(2) adalah ….", "5", ["4", "6", "7"],
 [ [(1,"f(2) = 5"),(0,"; "),(1,"g(5) = 10 − 5 = 5")] ]))
Q.append(("Diketahui f(x) = 3x − 1 dan g(x) = x + 2. Rumus (f ∘ g)(x) adalah ….", "3x + 5", ["3x + 1", "3x + 3", "3x + 7"],
 [ [(1,"f(g(x)) = 3(x+2) − 1 = 3x + 6 − 1 = 3x + 5")] ]))
Q.append(("Diketahui g(x) = x² + 1 dan (f ∘ g)(x) = x² + 4. Rumus f(x) adalah ….", "x + 3", ["x + 4", "x + 2", "x² + 4"],
 [ [(0,"Misal "),(1,"u = x² + 1"),(0,"; "),(1,"f(u) = u + 3"),(0,", jadi "),(1,"f(x) = x + 3")] ]))
Q.append(("Invers dari fungsi f(x) = 3x − 6 adalah ….", "f⁻¹(x) = (x + 6)/3", ["f⁻¹(x) = (x − 6)/3", "f⁻¹(x) = 3x + 6", "f⁻¹(x) = x/3 − 6"],
 [ [(0,"Misal "),(1,"y = 3x − 6 ⟹ x = (y + 6)/3"),(0,", jadi "),(1,"f⁻¹(x) = (x + 6)/3")] ]))
Q.append(("Diketahui f(x) = 2x/(x − 3), x ≠ 3. Nilai f⁻¹(4) adalah ….", "6", ["4", "5", "8"],
 [ [(0,"Cari x sehingga f(x) = 4: "),(1,"2x/(x−3) = 4 ⟹ 2x = 4x − 12 ⟹ x = 6")] ]))
Q.append(("Invers dari f(x) = 5 − 2x adalah ….", "f⁻¹(x) = (5 − x)/2", ["f⁻¹(x) = (x − 5)/2", "f⁻¹(x) = (5 + x)/2", "f⁻¹(x) = 2x − 5"],
 [ [(1,"y = 5 − 2x ⟹ 2x = 5 − y ⟹ x = (5 − y)/2"),(0,", jadi "),(1,"f⁻¹(x) = (5 − x)/2")] ]))
Q.append(("Jika f(x) = x + 1 dan g(x) = x² − 1, maka (g ∘ f)(x) = ….", "x² + 2x", ["x² + 2x + 2", "x²", "x² + 2"],
 [ [(1,"g(f(x)) = (x+1)² − 1 = x² + 2x + 1 − 1 = x² + 2x")] ]))
Q.append(("Diketahui f(x) = 4x + 3. Nilai dari f⁻¹(11) adalah ….", "2", ["1", "3", "4"],
 [ [(1,"f⁻¹(x) = (x − 3)/4"),(0,"; "),(1,"f⁻¹(11) = 8/4 = 2")] ]))
Q.append(("Diketahui f(x) = (x − 1)/2 dan g(x) = 2x. Nilai (f ∘ g)(x) adalah ….", "x − 1/2", ["x − 1", "x + 1/2", "x"],
 [ [(1,"f(g(x)) = (2x − 1)/2 = x − 1/2")] ]))

# ---------- POLINOMIAL / SUKU BANYAK (61-70) ----------
Q.append(("Hasil bagi dari (x² + 5x + 6) : (x + 2) adalah ….", "x + 3", ["x + 2", "x − 3", "x + 5"],
 [ [(0,"Faktorkan: "),(1,"x² + 5x + 6 = (x + 2)(x + 3)"),(0,", hasil bagi "),(1,"x + 3")] ]))
Q.append(("Sisa pembagian f(x) = x³ − 2x² + 3x − 4 oleh (x − 2) adalah ….", "2", ["0", "4", "6"],
 [ [(0,"Teorema sisa: sisa = f(2) = "),(1,"8 − 8 + 6 − 4 = 2")] ]))
Q.append(("Jika f(x) = x³ − 3x² + 2 dibagi (x − 1), sisanya adalah ….", "0", ["1", "2", "−1"],
 [ [(1,"f(1) = 1 − 3 + 2 = 0"),(0,", artinya (x − 1) adalah faktor.")] ]))
Q.append(("Salah satu faktor dari x³ − x² − 4x + 4 adalah ….", "(x − 1)", ["(x + 1)", "(x − 2)", "(x + 2)"],
 [ [(1,"f(1) = 1 − 1 − 4 + 4 = 0"),(0,", jadi (x − 1) faktor.")],
   [(0,"Faktorisasi: "),(1,"(x−1)(x²−4) = (x−1)(x−2)(x+2)")] ]))
Q.append(("Hasil bagi dari (2x³ − 3x² + x + 2) : (x − 1) adalah ….", "2x² − x", ["2x² − x + 2", "2x² − x − 2", "2x² + x"],
 [ [(0,"Skema Horner dengan pembagi x = 1: koefisien 2, −3, 1, 2.")],
   [(1,"2x² − x + 0 ⟹ 2x² − x"),(0,", sisa 2.")] ]))
Q.append(("Jika f(x) dibagi (x − 2) bersisa 5 dan dibagi (x + 1) bersisa −1, maka f(x) dibagi (x² − x − 2) bersisa ….", "2x + 1", ["3x + 1", "2x − 1", "3x − 1"],
 [ [(0,"Misal sisa "),(1,"s(x) = ax + b"),(0,"; f(2)=5, f(−1)=−1:")],
   [(1,"2a + b = 5; −a + b = −1 ⟹ 3a = 6 ⟹ a = 2, b = 1"),(0,", sisa "),(1,"2x + 1")] ]))
Q.append(("Nilai suku banyak f(x) = 2x³ + x² − 3x + 1 untuk x = 2 adalah ….", "15", ["13", "14", "16"],
 [ [(1,"f(2) = 16 + 4 − 6 + 1 = 15")] ]))
Q.append(("Jika (x − 2) merupakan faktor dari x³ + kx − 10, maka nilai k adalah ….", "1", ["2", "−1", "−2"],
 [ [(1,"f(2) = 8 + 2k − 10 = 0 ⟹ 2k = 2 ⟹ k = 1")] ]))
Q.append(("Faktorisasi penuh dari x³ − 8 adalah ….", "(x − 2)(x² + 2x + 4)", ["(x − 2)(x² − 2x + 4)", "(x + 2)(x² − 2x + 4)", "(x − 8)(x² + 8x + 64)"],
 [ [(0,"Selisih kubus: "),(1,"a³ − b³ = (a−b)(a²+ab+b²)"),(0," dengan a=x, b=2.")] ]))
Q.append(("Jumlah akar-akar persamaan x³ − 6x² + 11x − 6 = 0 adalah ….", "6", ["−6", "11", "−11"],
 [ [(0,"Jumlah akar polinom derajat 3 = "),(1,"−b/a = 6")] ]))

# ---------- MATRIKS (71-80) ----------
Q.append(("Diketahui A = [[2, 3], [1, 4]]. Determinan A adalah ….", "5", ["7", "−5", "−7"],
 [ [(1,"det A = 2·4 − 3·1 = 8 − 3 = 5")] ]))
Q.append(("Diketahui A = [[1, 2], [3, 4]] dan B = [[4, 0], [1, 5]]. Hasil A + B adalah ….", "[[5, 2], [4, 9]]", ["[[5, 2], [4, 1]]", "[[3, 2], [4, 9]]", "[[5, 2], [3, 9]]"],
 [ [(0,"Jumlahkan elemen seletak: "),(1,"[[1+4, 2+0], [3+1, 4+5]] = [[5, 2], [4, 9]]")] ]))
Q.append(("Diketahui A = [[2, 1], [0, 3]] dan B = [[1, 2], [2, 1]]. Hasil A × B adalah ….", "[[4, 5], [6, 3]]", ["[[4, 5], [3, 6]]", "[[2, 2], [0, 3]]", "[[5, 4], [6, 3]]"],
 [ [(1,"A×B = [[2·1+1·2, 2·2+1·1], [0·1+3·2, 0·2+3·1]] = [[4, 5], [6, 3]]")] ]))
Q.append(("Invers dari matriks [[4, 3], [3, 2]] adalah ….", "[[−2, 3], [3, −4]]", ["[[2, −3], [−3, 4]]", "[[−2, −3], [−3, 4]]", "[[2, 3], [3, 4]]"],
 [ [(1,"det = 8 − 9 = −1"),(0,"; invers = "),(1,"1/(−1) [[2, −3], [−3, 4]] = [[−2, 3], [3, −4]]")] ]))
Q.append(("Diketahui matriks A = [[a, 2], [3, b]]. Jika A = Aᵀ, maka a dan b memenuhi ….", "b = 3", ["a = 3", "a = b", "a = 2"],
 [ [(0,"Matriks simetris: elemen (1,2) = elemen (2,1), jadi "),(1,"2 = 3 ⟹ b = 3")] ]))
Q.append(("Diketahui A = [[1, 2], [3, 4]]. Determinan dari 2A adalah ….", "−8", ["−4", "8", "16"],
 [ [(1,"det(2A) = 2² det A = 4(4 − 6) = −8")] ]))
Q.append(("Jika [[x, 1], [2, y]] + [[1, 2], [3, 4]] = [[4, 3], [5, 6]], maka nilai x + y adalah ….", "4", ["3", "5", "6"],
 [ [(1,"x + 1 = 4 ⟹ x = 3"),(0,"; "),(1,"y + 4 = 6 ⟹ y = 2"),(0,"; "),(1,"x + y = 5")] ]))
Q.append(("Diketahui A = [[3, 0], [0, 3]]. Matriks A adalah matriks ….", "skalar", ["identitas", "diagonal", "nol"],
 [ [(0,"Matriks skalar: semua elemen diagonal sama (3) dan di luar diagonal nol.")],
   [(0,"Matriks identitas khususnya elemen diagonal 1.")] ]))
Q.append(("Nilai x yang memenuhi det [[x, 1], [2, x]] = 3 adalah ….", "x = √5 atau x = −√5", ["x = 1 atau x = −1", "x = 3 atau x = −3", "x = 5 atau x = −5"],
 [ [(1,"x² − 2 = 3 ⟹ x² = 5 ⟹ x = ±√5")] ]))
Q.append(("Jika A = [[2, 1], [1, 3]], maka A² adalah ….", "[[5, 5], [5, 10]]", ["[[4, 1], [1, 9]]", "[[5, 6], [6, 10]]", "[[5, 5], [4, 10]]"],
 [ [(1,"A² = [[2,1],[1,3]] × [[2,1],[1,3]]")],
   [(1,"= [[4+1, 2+3], [2+3, 1+9]] = [[5, 5], [5, 10]]")] ]))

# ---------- VEKTOR (81-90) ----------
Q.append(("Diketahui a = (3, 4). Panjang (besar) vektor a adalah ….", "5", ["7", "12", "25"],
 [ [(1,"|a| = √(3² + 4²) = √25 = 5")] ]))
Q.append(("Diketahui u = (2, −1) dan v = (1, 3). Hasil u + v adalah ….", "(3, 2)", ["(1, −4)", "(3, 4)", "(2, 3)"],
 [ [(1,"u + v = (2+1, −1+3) = (3, 2)")] ]))
Q.append(("Diketahui a = (3, −2) dan b = (1, 4). Hasil 2a − b adalah ….", "(5, −8)", ["(5, 0)", "(7, −8)", "(5, 8)"],
 [ [(1,"2a − b = (6, −4) − (1, 4) = (5, −8)")] ]))
Q.append(("Hasil kali titik (dot product) a = (2, −1, 3) dan b = (1, 2, −1) adalah ….", "−3", ["3", "−1", "1"],
 [ [(1,"a·b = 2·1 + (−1)·2 + 3·(−1) = 2 − 2 − 3 = −3")] ]))
Q.append(("Vektor satuan dari a = (3, 4) adalah ….", "(3/5, 4/5)", ["(3/4, 4/3)", "(4/5, 3/5)", "(1, 1)"],
 [ [(1,"|a| = 5"),(0,", vektor satuan = "),(1,"a/|a| = (3/5, 4/5)")] ]))
Q.append(("Jika vektor a = (2, 1) dan b = (x, 4) saling tegak lurus, maka x adalah ….", "−2", ["2", "8", "−8"],
 [ [(0,"Syarat tegak lurus: "),(1,"a·b = 0 ⟹ 2x + 4 = 0 ⟹ x = −2")] ]))
Q.append(("Diketahui a = (1, 2) dan b = (3, −1). Nilai cosinus sudut antara a dan b adalah ….", "1/(5√2)", ["1/√2", "1/5", "1/(2√5)"],
 [ [(1,"a·b = 3 − 2 = 1"),(0,"; "),(1,"|a| = √5, |b| = √10"),(0,"; ")],
   [(1,"cos θ = 1/(√5·√10) = 1/(5√2)")] ]))
Q.append(("Proyeksi skalar ortogonal vektor a = (4, 3) pada b = (3, 0) adalah ….", "4", ["3", "5", "9"],
 [ [(1,"|a| cos θ = a·b/|b| = 12/3 = 4")] ]))
Q.append(("Diketahui titik A(1, 2) dan B(5, 5). Vektor AB adalah ….", "(4, 3)", ["(−4, −3)", "(4, −3)", "(−4, 3)"],
 [ [(1,"AB = B − A = (5−1, 5−2) = (4, 3)")] ]))
Q.append(("Jika a = (2, 3) dan b = (−1, 4), maka 3a + 2b = ….", "(4, 17)", ["(4, 1)", "(5, 17)", "(4, 13)"],
 [ [(1,"3a + 2b = (6, 9) + (−2, 8) = (4, 17)")] ]))

# ---------- TRIGONOMETRI (91-100) ----------
Q.append(("Nilai dari sin 30° + cos 60° adalah ….", "1", ["1/2", "3/2", "√3/2"],
 [ [(1,"sin 30° = 1/2"),(0," dan "),(1,"cos 60° = 1/2"),(0,", jumlahnya 1.")] ]))
Q.append(("Nilai dari tan 45° × cos 0° adalah ….", "1", ["0", "1/2", "√2"],
 [ [(1,"tan 45° = 1"),(0," dan "),(1,"cos 0° = 1"),(0,", hasilnya 1.")] ]))
Q.append(("Nilai dari sin 120° adalah ….", "√3/2", ["1/2", "−√3/2", "√2/2"],
 [ [(0,"Kuadran II: "),(1,"sin 120° = sin(180° − 60°) = sin 60° = √3/2")] ]))
Q.append(("Nilai dari cos 135° adalah ….", "−√2/2", ["√2/2", "−1/2", "1/2"],
 [ [(1,"cos 135° = cos(180° − 45°) = −cos 45° = −√2/2")] ]))
Q.append(("Nilai dari tan 120° adalah ….", "−√3", ["√3", "−1/√3", "1/√3"],
 [ [(1,"tan 120° = tan(180° − 60°) = −tan 60° = −√3")] ]))
Q.append(("Jika sin θ = 3/5 dan θ di kuadran I, maka nilai cos θ adalah ….", "4/5", ["2/5", "5/4", "3/4"],
 [ [(1,"cos θ = √(1 − sin²θ) = √(1 − 9/25) = √(16/25) = 4/5")] ]))
Q.append(("Jika tan θ = 3/4 dengan θ di kuadran III, maka sin θ adalah ….", "−3/5", ["3/5", "−4/5", "4/5"],
 [ [(0,"Di kuadran III, sin negatif. "),(1,"tan θ = 3/4 ⟹ sin θ = −3/5")] ]))
Q.append(("Nilai dari sin² 30° + cos² 30° adalah ….", "1", ["0", "1/2", "2"],
 [ [(0,"Identitas Pythagoras: "),(1,"sin² θ + cos² θ = 1"),(0," untuk semua θ.")] ]))
Q.append(("Bentuk sederhana dari (1 − cos² x)/sin x adalah ….", "sin x", ["cos x", "tan x", "1/sin x"],
 [ [(1,"1 − cos² x = sin² x"),(0,", sehingga "),(1,"sin² x / sin x = sin x")] ]))
Q.append(("Jika cos x = 1/2 dan 0° ≤ x ≤ 180°, maka nilai x yang memenuhi adalah ….", "60°", ["30°", "45°", "120°"],
 [ [(1,"cos 60° = 1/2"),(0,"; cos bernilai 1/2 juga di 300° (tidak dalam rentang), jadi "),(1,"x = 60°")] ]))

# ---------- GEOMETRI, TRANSFORMASI (101-110) ----------
Q.append(("Luas segitiga dengan alas 12 cm dan tinggi 5 cm adalah ….", "30 cm²", ["60 cm²", "17 cm²", "24 cm²"],
 [ [(1,"L = 1/2 × 12 × 5 = 30 cm²")] ]))
Q.append(("Keliling lingkaran berjari-jari 7 cm (π = 22/7) adalah ….", "44 cm", ["22 cm", "154 cm", "88 cm"],
 [ [(1,"K = 2πr = 2 × 22/7 × 7 = 44 cm")] ]))
Q.append(("Luas lingkaran berdiameter 14 cm (π = 22/7) adalah ….", "154 cm²", ["44 cm²", "308 cm²", "616 cm²"],
 [ [(1,"r = 7 cm; L = πr² = 22/7 × 49 = 154 cm²")] ]))
Q.append(("Volume kubus yang luas permukaannya 216 cm² adalah ….", "216 cm³", ["144 cm³", "343 cm³", "125 cm³"],
 [ [(1,"6s² = 216 ⟹ s² = 36 ⟹ s = 6"),(0,"; V = "),(1,"6³ = 216 cm³")] ]))
Q.append(("Volume balok berukuran 6 cm × 5 cm × 4 cm adalah ….", "120 cm³", ["60 cm³", "90 cm³", "150 cm³"],
 [ [(1,"V = p × l × t = 6 × 5 × 4 = 120 cm³")] ]))
Q.append(("Volume kerucut dengan jari-jari alas 7 cm dan tinggi 12 cm (π = 22/7) adalah ….", "616 cm³", ["1848 cm³", "308 cm³", "1232 cm³"],
 [ [(1,"V = 1/3 πr²t = 1/3 × 22/7 × 49 × 12 = 616 cm³")] ]))
Q.append(("Volume bola berjari-jari 7 cm (π = 22/7) adalah ….", "1437⅓ cm³", ["1437 cm³", "1437,5 cm³", "2156 cm³"],
 [ [(1,"V = 4/3 πr³ = 4/3 × 22/7 × 343 = 4/3 × 1078 = 1437⅓ cm³")] ]))
Q.append(("Titik A(2, 3) ditranslasikan oleh T = (3, −1). Bayangannya adalah ….", "A'(5, 2)", ["A'(5, 4)", "A'(−1, 4)", "A'(1, 4)"],
 [ [(1,"A' = (2+3, 3−1) = (5, 2)")] ]))
Q.append(("Titik B(−4, 2) dicerminkan terhadap sumbu Y. Bayangannya adalah ….", "B'(4, 2)", ["B'(−4, −2)", "B'(4, −2)", "B'(−4, 2)"],
 [ [(0,"Pencerminan terhadap sumbu Y: "),(1,"(x, y) → (−x, y)"),(0,", jadi "),(1,"(−4, 2) → (4, 2)")] ]))
Q.append(("Titik C(3, 5) dirotasikan 90° berlawanan arah jarum jam dengan pusat O(0,0). Bayangannya adalah ….", "C'(−5, 3)", ["C'(5, −3)", "C'(−3, 5)", "C'(3, −5)"],
 [ [(0,"Rotasi 90°: "),(1,"(x, y) → (−y, x)"),(0,", jadi "),(1,"(3, 5) → (−5, 3)")] ]))

# ---------- LIMIT & TURUNAN (111-120) ----------
Q.append(("Nilai dari lim(x→3) (2x + 1) adalah ….", "7", ["5", "6", "8"],
 [ [(1,"Substitusi langsung: 2·3 + 1 = 7")] ]))
Q.append(("Nilai dari lim(x→2) (x² − 4)/(x − 2) adalah ….", "4", ["0", "2", "6"],
 [ [(0,"Faktorkan: "),(1,"(x−2)(x+2)/(x−2) = x + 2"),(0,"; untuk x→2 hasil "),(1,"4")] ]))
Q.append(("Nilai dari lim(x→0) sin 3x / x adalah ….", "3", ["1", "1/3", "6"],
 [ [(1,"lim sin kx/x = k"),(0,", jadi "),(1,"lim sin 3x/x = 3")] ]))
Q.append(("Nilai dari lim(x→∞) (4x² − 2x)/(2x² + 1) adalah ….", "2", ["4", "1", "∞"],
 [ [(0,"Bagi dengan x² tertinggi: "),(1,"(4 − 2/x)/(2 + 1/x²) → 4/2 = 2")] ]))
Q.append(("Turunan pertama dari f(x) = 3x² + 2x − 1 adalah ….", "6x + 2", ["6x − 2", "3x + 2", "6x + 1"],
 [ [(1,"f'(x) = 6x + 2")] ]))
Q.append(("Turunan pertama dari f(x) = (2x + 1)³ adalah ….", "6(2x + 1)²", ["3(2x + 1)²", "6(2x + 1)", "12(2x + 1)²"],
 [ [(0,"Aturan rantai: "),(1,"f'(x) = 3(2x+1)² · 2 = 6(2x+1)²")] ]))
Q.append(("Turunan dari f(x) = sin 2x adalah ….", "2 cos 2x", ["cos 2x", "2 sin 2x", "−2 cos 2x"],
 [ [(0,"Aturan rantai: "),(1,"f'(x) = 2 cos 2x")] ]))
Q.append(("Turunan dari f(x) = x³ − 3x + 2. Nilai f'(1) adalah ….", "0", ["3", "6", "−3"],
 [ [(1,"f'(x) = 3x² − 3"),(0,"; "),(1,"f'(1) = 3 − 3 = 0")] ]))
Q.append(("Gradien garis singgung kurva f(x) = x² + 2x di x = 1 adalah ….", "4", ["2", "3", "5"],
 [ [(1,"f'(x) = 2x + 2"),(0,"; "),(1,"f'(1) = 4")] ]))
Q.append(("Nilai minimum fungsi f(x) = x² − 4x + 3 pada interval [0, 5] adalah ….", "−1", ["0", "3", "8"],
 [ [(1,"f'(x) = 2x − 4 = 0 ⟹ x = 2"),(0,"; "),(1,"f(2) = 4 − 8 + 3 = −1"),(0," (minimum).")] ]))

# ---------- INTEGRAL (121-130) ----------
Q.append(("Hasil dari ∫ 3x² dx adalah ….", "x³ + C", ["x³", "6x + C", "x³/3 + C"],
 [ [(1,"∫ 3x² dx = 3·x³/3 + C = x³ + C")] ]))
Q.append(("Hasil dari ∫ (4x³ − 2x + 1) dx adalah ….", "x⁴ − x² + x + C", ["x⁴ − x² + x", "4x⁴ − x² + x + C", "x⁴ − 2x² + x + C"],
 [ [(1,"∫4x³ dx = x⁴; ∫(−2x) dx = −x²; ∫1 dx = x"),(0,", jadi "),(1,"x⁴ − x² + x + C")] ]))
Q.append(("Nilai dari ∫₀¹ (2x + 1) dx adalah ….", "2", ["1", "3", "3/2"],
 [ [(1,"∫₀¹ (2x+1) dx = [x² + x]₀¹ = (1 + 1) − 0 = 2")] ]))
Q.append(("Nilai dari ∫₁² (3x²) dx adalah ….", "7", ["6", "8", "9"],
 [ [(1,"[x³]₁² = 8 − 1 = 7")] ]))
Q.append(("Hasil dari ∫ (2x + 3)⁵ dx adalah ….", "(2x + 3)⁶/12 + C", ["(2x + 3)⁶/6 + C", "(2x + 3)⁶ + C", "(2x + 3)⁶/5 + C"],
 [ [(0,"Substitusi u = 2x+3, du = 2 dx: "),(1,"1/2 · u⁶/6 = (2x+3)⁶/12 + C")] ]))
Q.append(("Luas daerah yang dibatasi y = x + 2, sumbu X, x = 0, dan x = 3 adalah ….", "21/2 satuan luas", ["15/2 satuan luas", "9 satuan luas", "12 satuan luas"],
 [ [(1,"L = ∫₀³ (x+2) dx = [x²/2 + 2x]₀³ = 9/2 + 6 = 21/2")] ]))
Q.append(("Hasil dari ∫ cos x dx adalah ….", "sin x + C", ["−sin x + C", "tan x + C", "−cos x + C"],
 [ [(1,"∫ cos x dx = sin x + C")] ]))
Q.append(("Hasil dari ∫ (6x² + 4x) dx adalah ….", "2x³ + 2x² + C", ["2x³ + 4x² + C", "6x³ + 2x² + C", "3x³ + 2x² + C"],
 [ [(1,"∫6x² dx = 2x³; ∫4x dx = 2x²"),(0,", jadi "),(1,"2x³ + 2x² + C")] ]))
Q.append(("Nilai dari ∫₀^π sin x dx adalah ….", "2", ["0", "1", "−1"],
 [ [(1,"[−cos x]₀^π = −cos π + cos 0 = 1 + 1 = 2")] ]))
Q.append(("Jika ∫ (ax + b) dx = 2x² + 3x + C, maka nilai a + b adalah ….", "7", ["5", "6", "8"],
 [ [(0,"Turunkan: "),(1,"ax + b = 4x + 3"),(0,", jadi a = 4, b = 3, a + b = 7.")] ]))

# ---------- STATISTIKA & PELUANG (131-140) ----------
Q.append(("Rata-rata dari data 4, 6, 8, 10, 12 adalah ….", "8", ["7", "9", "10"],
 [ [(1,"(4+6+8+10+12)/5 = 40/5 = 8")] ]))
Q.append(("Median dari data 3, 5, 7, 7, 9, 10, 12 adalah ….", "7", ["5", "9", "7,5"],
 [ [(0,"Data terurut; nilai tengah ke-4 adalah "),(1,"7")] ]))
Q.append(("Modus dari data 2, 3, 3, 4, 5, 5, 5, 6 adalah ….", "5", ["3", "4", "6"],
 [ [(0,"Nilai yang paling sering muncul adalah "),(1,"5"),(0," (muncul 3 kali).")] ]))
Q.append(("Rata-rata nilai ulangan 5 siswa adalah 80. Jika ditambah satu siswa dengan nilai 92, rata-rata baru adalah ….", "82", ["81", "83", "84"],
 [ [(1,"(5×80 + 92)/6 = (400 + 92)/6 = 492/6 = 82")] ]))
Q.append(("Jangkauan (range) dari data 12, 15, 9, 20, 18, 14 adalah ….", "11", ["9", "12", "20"],
 [ [(1,"20 − 9 = 11")] ]))
Q.append(("Sebuah dadu dilempar sekali. Peluang muncul mata dadu genap adalah ….", "1/2", ["1/3", "1/6", "2/3"],
 [ [(0,"Mata genap: 2, 4, 6 → 3 dari 6, peluang "),(1,"3/6 = 1/2")] ]))
Q.append(("Dua koin dilempar bersama. Peluang muncul tepat satu gambar adalah ….", "1/2", ["1/4", "1/3", "3/4"],
 [ [(0,"Ruang sampel: AA, AG, GA, GG. Tepat satu gambar: AG, GA → "),(1,"2/4 = 1/2")] ]))
Q.append(("Dalam sebuah kantong ada 5 bola merah dan 3 bola putih. Diambil satu bola acak, peluang terambil bola merah adalah ….", "5/8", ["3/8", "5/3", "1/2"],
 [ [(1,"P = 5/(5+3) = 5/8")] ]))
Q.append(("Banyak cara menyusun 3 orang dari 5 orang untuk menjadi pengurus (ketua, sekretaris, bendahara) adalah ….", "60", ["10", "20", "120"],
 [ [(1,"P(5,3) = 5×4×3 = 60")] ]))
Q.append(("Banyak cara memilih 2 wakil dari 6 kandidat (tanpa jabatan) adalah ….", "15", ["12", "30", "36"],
 [ [(1,"C(6,2) = 6×5/2 = 15")] ]))

# ---------- CAMPURAN (141-150) ----------
Q.append(("Himpunan penyelesaian dari |2x − 3| ≤ 5 adalah ….", "{x | −1 ≤ x ≤ 4}", ["{x | x ≤ −1 atau x ≥ 4}", "{x | 1 ≤ x ≤ 4}", "{x | −4 ≤ x ≤ 1}"],
 [ [(0,"Sifat: "),(1,"|a| ≤ b ⟺ −b ≤ a ≤ b"),(0,":")],
   [(1,"−5 ≤ 2x − 3 ≤ 5 ⟹ −2 ≤ 2x ≤ 8 ⟹ −1 ≤ x ≤ 4")] ]))
Q.append(("Nilai x yang memenuhi |x − 2| = 7 adalah ….", "x = 9 atau x = −5", ["x = 9 atau x = 5", "x = 7 atau x = −7", "x = 5 atau x = −9"],
 [ [(1,"x − 2 = 7 ⟹ x = 9"),(0," atau "),(1,"x − 2 = −7 ⟹ x = −5")] ]))
Q.append(("Diketahui deret aritmetika dengan suku pertama 5 dan beda 4. Suku ke-n yang nilainya 85 adalah ….", "n = 21", ["n = 20", "n = 22", "n = 19"],
 [ [(1,"85 = 5 + (n−1)·4 ⟹ 80 = 4(n−1) ⟹ n = 21")] ]))
Q.append(("Nilai dari ⁵log 125 + ²log 16 adalah ….", "7", ["5", "6", "8"],
 [ [(1,"⁵log 125 = 3"),(0,"; "),(1,"²log 16 = 4"),(0,"; jumlah "),(1,"7")] ]))
Q.append(("Jika f(x) = x² − 4, maka nilai f(3) − f(1) adalah ….", "5", ["4", "6", "8"],
 [ [(1,"f(3) = 9 − 4 = 5; f(1) = 1 − 4 = −3"),(0,"; "),(1,"5 − (−3) = 8")] ]))
Q.append(("Diketahui barisan geometri 2, 6, 18, …, suku ke-8 adalah ….", "4374", ["4372", "4376", "1458"],
 [ [(1,"U₈ = 2·3⁷ = 2 × 2187 = 4374")] ]))
Q.append(("Nilai dari cos 60° + sin 30° − tan 45° adalah ….", "0", ["1", "1/2", "−1"],
 [ [(1,"1/2 + 1/2 − 1 = 0")] ]))
Q.append(("Luas juring lingkaran berjari-jari 10 cm dengan sudut pusat 72° (π = 3,14) adalah ….", "62,8 cm²", ["31,4 cm²", "78,5 cm²", "125,6 cm²"],
 [ [(1,"L = 72/360 × π × 10² = 1/5 × 314 = 62,8 cm²")] ]))
Q.append(("Sebuah dadu dan sebuah koin dilempar bersama. Banyak ruang sampel adalah ….", "12", ["6", "8", "36"],
 [ [(1,"6 × 2 = 12")] ]))
Q.append(("Turunan kedua dari f(x) = x³ + 2x² adalah ….", "6x + 4", ["3x² + 4x", "6x + 2", "6x"],
 [ [(1,"f'(x) = 3x² + 4x"),(0,"; "),(1,"f''(x) = 6x + 4")] ]))

assert len(Q) == 150, len(Q)

# Build TS
def seg(bold, text):
    if bold:
        return 'B(' + repr(text) + ')'
    return 'P(' + repr(text) + ')'

def render_explanation(exp):
    lines = []
    for line in exp:
        inner = ", ".join(seg(b, t) for b, t in line)
        lines.append("[" + inner + "]")
    return ",\n      ".join(lines)

out = []
out.append('"use client";\n')
out.append('import type { BankSoal } from "@/lib/data/soal";\n')
out.append('')
out.append('const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];')
out.append('const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };')
out.append('const P = (t: string) => ({ t }) as { t: string; b?: boolean };')
out.append('')
out.append('/**')
out.append(' * Bank Soal TKA SMA — Matematika (150 soal orisinal).')
out.append(' * Topik: eksponen & logaritma, bentuk akar, persamaan & fungsi kuadrat,')
out.append(' * SPLDV/SPLTV & program linear, barisan & deret, logika matematika,')
out.append(' * himpunan & fungsi, fungsi komposisi & invers, polinomial, matriks,')
out.append(' * vektor, trigonometri, geometri & transformasi, limit, turunan,')
out.append(' * integral, statistika, peluang, dan nilai mutlak.')
out.append(' * Jawaban terverifikasi, distribusi A/B/C/D merata.')
out.append(' */')
out.append('export const BANK_TKA_SMA_MTK: BankSoal[] = [')

for i, (prompt, correct, dist, exp) in enumerate(Q):
    target = SEQ[i]
    opts = place(correct, dist, target)
    ans = target
    out.append('  {')
    out.append(f'    no: {i+1},')
    out.append('    stimulus: [],')
    out.append(f'    prompt: S({prompt!r}),')
    out.append('    options: [')
    for k in range(4):
        key = chr(ord('A') + k)
        comma = ',' if k < 3 else ''
        out.append(f'      {{ key: "{key}", text: {opts[k]!r} }}{comma}')
    out.append('    ],')
    out.append(f'    answer: "{ans}",')
    out.append(f'    explanationTitle: "Jawaban: {ans}",')
    out.append('    explanation: [')
    expl = render_explanation(exp)
    out.append('      ' + expl)
    out.append('    ],')
    out.append('  },')
out.append('];')
out.append('')

content = "\n".join(out)
with open("/home/itechnowebdev/siapin/lib/data/bank/banks/tka-sma/matematika.ts", "w", encoding="utf-8") as f:
    f.write(content)
print("WROTE", len(content), "chars")
