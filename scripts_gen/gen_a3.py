# -*- coding: utf-8 -*-
"""SNBT PM — Block A3: Barisan & Deret (soal 21–30)."""
from gen_core import add

add(
 "Hasil produksi sebuah pabrik pada bulan pertama adalah 350 unit. Karena efisiensi, produksi bulan kedua dan seterusnya turun 25 unit setiap bulan. Total produksi selama 10 bulan pertama adalah … unit.",
 "2375",
 ["2350", "2400", "2425"],
 [
  [("P", "Deret aritmetika menurun: "), ("B", "a = 350, b = −25, n = 10"), ("P", ".")],
  [("B", "S₁₀ = 10/2 × (2·350 + 9·(−25)) = 5 × (700 − 225) = 5 × 475 = 2.375")],
 ],
)

add(
 "Seutas tali dipotong menjadi 8 bagian dengan panjang membentuk barisan geometri. Potongan terpendek 3 cm dan potongan terpanjang 384 cm. Panjang tali semula adalah … cm.",
 "765",
 ["381", "639", "255"],
 [
  [("P", "U₈ = 3·r⁷ = 384 ⟹ "), ("B", "r⁷ = 128 = 2⁷ ⟹ r = 2"), ("P", ".")],
  [("B", "S₈ = 3(2⁸ − 1)/(2 − 1) = 3 × 255 = 765")],
 ],
)

add(
 "Tiga bilangan membentuk barisan aritmetika dengan jumlah 30 dan hasil kalinya 910. Bilangan terbesar dari ketiga bilangan tersebut adalah ….",
 "13",
 ["11", "12", "14"],
 [
  [("P", "Misal bilangan: "), ("B", "a − b, a, a + b"), ("P", ". Jumlah: "), ("B", "3a = 30 ⟹ a = 10"), ("P", ".")],
  [("P", "Hasil kali: "), ("B", "(10 − b)(10)(10 + b) = 910"), ("P", ".")],
  [("B", "100 − b² = 91 ⟹ b² = 9 ⟹ b = 3"), ("P", ".")],
  [("P", "Bilangan: 7, 10, 13; yang terbesar "), ("B", "13"), ("P", ".")],
 ],
)

add(
 "Sebuah bank memberikan bunga tunggal 8% per tahun. Setelah 2 tahun 6 bulan, total tabungan seorang nasabah menjadi Rp4.800.000,00. Besar tabungan awal nasabah tersebut adalah ….",
 "Rp4.000.000,00",
 ["Rp4.200.000,00", "Rp3.800.000,00", "Rp3.600.000,00"],
 [
  [("P", "Lama menabung = 2,5 tahun. Bunga total = "), ("B", "8% × 2,5 = 20%"), ("P", ".")],
  [("P", "Tabungan akhir = 120% tabungan awal: "), ("B", "1,2M = 4.800.000 ⟹ M = 4.000.000")],
 ],
)

add(
 "Jumlah semua bilangan bulat antara 50 dan 150 yang habis dibagi 4 adalah ….",
 "2500",
 ["2300", "2450", "2400"],
 [
  [("P", "Bilangan terkecil ≥ 50 kelipatan 4: "), ("B", "52"), ("P", "; terbesar ≤ 150: "), ("B", "148"), ("P", ".")],
  [("P", "Banyak suku: "), ("B", "(148 − 52)/4 + 1 = 25"), ("P", ".")],
  [("B", "S₂₅ = 25/2 × (52 + 148) = 25/2 × 200 = 2.500")],
 ],
)

add(
 "Suatu barisan geometri memiliki suku ke-2 = 6 dan suku ke-4 = 54. Jika semua suku bernilai positif, suku ke-6 barisan tersebut adalah ….",
 "486",
 ["162", "243", "729"],
 [
  [("P", "U₄/U₂ = "), ("B", "r² = 54/6 = 9 ⟹ r = 3"), ("P", ".")],
  [("P", "U₂ = a·3 = 6 ⟹ "), ("B", "a = 2"), ("P", ".")],
  [("B", "U₆ = 2·3⁵ = 2·243 = 486")],
 ],
)

add(
 "Diketahui deret aritmetika dengan suku ke-3 = 10 dan suku ke-9 = 28. Jumlah 15 suku pertama deret tersebut adalah ….",
 "375",
 ["360", "390", "435"],
 [
  [("P", "U₉ − U₃ = 6b = 18 ⟹ "), ("B", "b = 3"), ("P", ".")],
  [("P", "U₃ = a + 2·3 = 10 ⟹ "), ("B", "a = 4"), ("P", ".")],
  [("B", "S₁₅ = 15/2 × (2·4 + 14·3) = 15/2 × 50 = 375")],
 ],
)

add(
 "Seutas tali dipotong menjadi 6 bagian sehingga panjang potongan-potongannya membentuk barisan geometri. Jika potongan terpendek 4 cm dan terpanjang 128 cm, panjang tali mula-mula adalah … cm.",
 "252",
 ["132", "188", "508"],
 [
  [("P", "U₆ = 4·r⁵ = 128 ⟹ "), ("B", "r⁵ = 32 = 2⁵ ⟹ r = 2"), ("P", ".")],
  [("B", "S₆ = 4(2⁶ − 1)/(2 − 1) = 4 × 63 = 252")],
 ],
)

add(
 "Di antara dua bilangan 2 dan 162 disisipkan 3 bilangan sehingga terbentuk barisan geometri baru. Rasio barisan baru tersebut adalah ….",
 "3",
 ["2", "√3", "4"],
 [
  [("P", "Dengan disisipkan 3 bilangan, dari 2 ke 162 kini terdapat "), ("B", "4 langkah"), ("P", ".")],
  [("B", "162 = 2·r⁴ ⟹ r⁴ = 81 ⟹ r = 3"), ("P", " (r positif).")],
 ],
)
