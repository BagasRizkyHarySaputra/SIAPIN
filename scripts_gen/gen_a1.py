# -*- coding: utf-8 -*-
"""SNBT PM — Block A1: Barisan & Deret (soal 1–10)."""
from gen_core import add

add(
 "Sebuah gedung pertunjukan memiliki 12 baris kursi. Baris pertama memuat 8 kursi, baris kedua 11 kursi, dan seterusnya selalu bertambah 3 kursi setiap baris berikutnya. Total kursi dalam gedung tersebut adalah ….",
 "294",
 ["246", "258", "270"],
 [
  [("P", "Banyak kursi tiap baris membentuk deret aritmetika dengan "), ("B", "a = 8, b = 3, n = 12"), ("P", ".")],
  [("B", "S₁₂ = 12/2 × (2·8 + (12−1)·3) = 6 × (16 + 33) = 294")],
 ],
)

add(
 "Suku ketiga dan suku ketujuh suatu barisan aritmetika berturut-turut 14 dan 30. Jumlah 10 suku pertama barisan tersebut adalah ….",
 "240",
 ["230", "250", "260"],
 [
  [("P", "Eliminasi: "), ("B", "U₇ − U₃ = 4b = 30 − 14 = 16 ⟹ b = 4"), ("P", ".")],
  [("P", "U₃ = a + 2(4) = 14 ⟹ "), ("B", "a = 6"), ("P", ".")],
  [("B", "S₁₀ = 10/2 × (2·6 + 9·4) = 5 × 48 = 240")],
 ],
)

add(
 "Suku kedua suatu barisan geometri adalah 12 dan suku kelimanya 96. Suku ketujuh barisan tersebut adalah ….",
 "384",
 ["192", "288", "768"],
 [
  [("P", "U₅/U₂ = "), ("B", "r³ = 96/12 = 8 ⟹ r = 2"), ("P", ".")],
  [("P", "U₂ = a·2 = 12 ⟹ "), ("B", "a = 6"), ("P", ".")],
  [("B", "U₇ = 6·2⁶ = 6·64 = 384")],
 ],
)

add(
 "Jumlah deret geometri tak hingga adalah 36 dan rasionya 1/4. Suku pertama deret tersebut adalah ….",
 "27",
 ["24", "30", "9"],
 [
  [("P", "Rumus jumlah deret geometri tak hingga: "), ("B", "S∞ = a/(1 − r)"), ("P", ".")],
  [("B", "36 = a/(1 − 1/4) = a/(3/4) ⟹ a = 36 × 3/4 = 27")],
 ],
)

add(
 "Suku tengah dari barisan aritmetika 3, 10, 17, …, 115 adalah ….",
 "59",
 ["56", "61", "62"],
 [
  [("P", "Beda barisan "), ("B", "b = 7"), ("P", ". Banyak suku: "), ("B", "n = (115 − 3)/7 + 1 = 17"), ("P", ".")],
  [("P", "Suku tengah adalah suku ke-(17+1)/2 = 9: "), ("B", "U₉ = 3 + 8·7 = 59")],
 ],
)

add(
 "Jumlah 20 bilangan asli ganjil yang pertama adalah ….",
 "400",
 ["361", "380", "441"],
 [
  [("P", "Jumlah n bilangan ganjil pertama = "), ("B", "n²"), ("P", ".")],
  [("B", "20² = 400")],
 ],
)

add(
 "Di sebuah ruang seminar, setiap meja memanjang dapat diduduki 2 orang di sisi panjangnya. Satu meja menyediakan 4 kursi, dua meja yang disambung menyediakan 6 kursi, dan tiga meja menyediakan 8 kursi. Jika 12 meja disambung memanjang, banyak kursi yang tersedia adalah ….",
 "26",
 ["24", "28", "30"],
 [
  [("P", "Pola kursi: 4, 6, 8, … merupakan deret aritmetika dengan "), ("B", "a = 4, b = 2"), ("P", ".")],
  [("B", "U₁₂ = 4 + 11·2 = 26")],
 ],
)

add(
 "Seorang peternak menebar benih ikan di kolam setiap hari. Hari pertama ia menebar 3 ekor, hari kedua 6 ekor, dan seterusnya selalu bertambah 3 ekor sampai hari ke-20. Total benih ikan yang ditebar selama 20 hari adalah … ekor.",
 "630",
 ["600", "620", "660"],
 [
  [("P", "Banyak tebaran membentuk deret aritmetika "), ("B", "a = 3, b = 3, n = 20"), ("P", ".")],
  [("B", "S₂₀ = 20/2 × (2·3 + 19·3) = 10 × 63 = 630")],
 ],
)

add(
 "Sebuah bola dijatuhkan dari ketinggian 200 cm. Setiap kali menyentuh lantai, bola memantul setinggi 1/2 dari tinggi sebelumnya. Panjang lintasan bola sampai berhenti adalah ….",
 "600",
 ["400", "500", "300"],
 [
  [("P", "Panjang lintasan total = tinggi awal + 2 × jumlah pantulan naik: "), ("B", "a + 2·ar/(1 − r) = a(1 + r)/(1 − r)"), ("P", ".")],
  [("B", "200 × (1 + 1/2)/(1 − 1/2) = 200 × 3 = 600 cm")],
 ],
)

add(
 "Pola bilangan 1, 3, 6, 10, 15, … dikenal sebagai bilangan segitiga. Bilangan segitiga ke-15 adalah ….",
 "120",
 ["105", "110", "136"],
 [
  [("P", "Bilangan segitiga ke-n: "), ("B", "Tₙ = n(n + 1)/2"), ("P", ".")],
  [("B", "T₁₅ = 15 × 16/2 = 120")],
 ],
)
