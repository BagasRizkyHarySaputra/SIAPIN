# -*- coding: utf-8 -*-
"""SNBT PM — Block A4: Barisan & Deret lanjutan (soal 31–40)."""
from gen_core import add

add(
 "Pada pola susunan korek api, susunan ke-1 memakai 4 batang, ke-2 memakai 7 batang, ke-3 memakai 10 batang, dan seterusnya bertambah 3 batang. Banyak batang korek api pada susunan ke-15 adalah ….",
 "46",
 ["43", "49", "52"],
 [
  [("P", "Banyak batang membentuk barisan aritmetika: "), ("B", "a = 4, b = 3"), ("P", ".")],
  [("B", "U₁₅ = 4 + 14·3 = 46")],
 ],
)

add(
 "Sebuah perusahaan memberikan bonus mingguan yang membentuk deret geometri: minggu pertama Rp50.000, minggu kedua Rp100.000, minggu ketiga Rp200.000. Total bonus selama 8 minggu adalah ….",
 "Rp12.750.000,00",
 ["Rp12.500.000,00", "Rp13.000.000,00", "Rp12.250.000,00"],
 [
  [("P", "Deret geometri: "), ("B", "a = 50.000, r = 2, n = 8"), ("P", ".")],
  [("B", "S₈ = 50.000 × (2⁸ − 1) = 50.000 × 255 = 12.750.000")],
 ],
)

add(
 "Suku ke-n suatu barisan dinyatakan dengan Uₙ = n² − 2n. Jumlah 8 suku pertama barisan tersebut adalah ….",
 "132",
 ["120", "140", "168"],
 [
  [("P", "Jumlahkan Uₙ = n² − 2n untuk n = 1 sampai 8.")],
  [("B", "∑n² = 204 dan ∑n = 36, sehingga jumlah = 204 − 2(36) = 132")],
 ],
)

add(
 "Jumlah n bilangan asli pertama sama dengan 210. Nilai n adalah ….",
 "20",
 ["19", "21", "15"],
 [
  [("P", "Jumlah n bilangan asli pertama = "), ("B", "n(n + 1)/2"), ("P", ".")],
  [("B", "n(n + 1)/2 = 210 ⟹ n(n + 1) = 420 = 20 × 21 ⟹ n = 20")],
 ],
)

add(
 "Suku ketiga suatu barisan geometri adalah 24 dan suku keenamnya 192. Suku kesepuluh barisan tersebut adalah ….",
 "3072",
 ["1536", "4608", "6144"],
 [
  [("P", "U₆/U₃ = "), ("B", "r³ = 192/24 = 8 ⟹ r = 2"), ("P", ".")],
  [("P", "U₃ = a·2² = 24 ⟹ "), ("B", "a = 6"), ("P", ".")],
  [("B", "U₁₀ = 6·2⁹ = 6 × 512 = 3.072")],
 ],
)

add(
 "Jumlah deret geometri tak hingga 2 + 1 + 1/2 + 1/4 + … adalah ….",
 "4",
 ["3", "5", "6"],
 [
  [("P", "Rasio "), ("B", "r = 1/2"), ("P", ".")],
  [("B", "S∞ = a/(1 − r) = 2/(1 − 1/2) = 4")],
 ],
)

add(
 "Diketahui deret geometri dengan suku pertama 2 dan jumlah tak hingga 6. Rasio deret tersebut adalah ….",
 "2/3",
 ["1/3", "1/2", "3/4"],
 [
  [("P", "Rumus: "), ("B", "S∞ = a/(1 − r)"), ("P", ".")],
  [("B", "6 = 2/(1 − r) ⟹ 1 − r = 1/3 ⟹ r = 2/3")],
 ],
)

add(
 "Tiga suku berikutnya dari barisan 2, 6, 12, 20, 30, … adalah ….",
 "42, 56, 72",
 ["40, 54, 70", "42, 54, 70", "40, 56, 72"],
 [
  [("P", "Pola: "), ("B", "1×2, 2×3, 3×4, 4×5, 5×6"), ("P", ", yaitu n(n+1).")],
  [("B", "Suku ke-6 = 6×7 = 42, ke-7 = 7×8 = 56, ke-8 = 8×9 = 72")],
 ],
)

add(
 "Banyak suku pada barisan aritmetika 5, 9, 13, …, 105 adalah ….",
 "26",
 ["24", "25", "27"],
 [
  [("P", "Beda "), ("B", "b = 4"), ("P", ".")],
  [("B", "n = (105 − 5)/4 + 1 = 25 + 1 = 26")],
 ],
)

add(
 "Jumlah n suku pertama deret geometri 2 + 6 + 18 + … adalah 728. Nilai n adalah ….",
 "6",
 ["5", "7", "8"],
 [
  [("P", "Deret geometri: "), ("B", "a = 2, r = 3"), ("P", ".")],
  [("B", "Sₙ = 2(3ⁿ − 1)/(3 − 1) = 3ⁿ − 1 = 728 ⟹ 3ⁿ = 729 = 3⁶ ⟹ n = 6")],
 ],
)
