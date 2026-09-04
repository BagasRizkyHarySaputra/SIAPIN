# -*- coding: utf-8 -*-
"""SNBT PM — Block A2: Barisan & Deret (soal 11–20)."""
from gen_core import add

add(
 "Setiap minggu, jumlah pengunjung perpustakaan daerah naik tetap. Minggu pertama tercatat 120 pengunjung dan minggu keenam 220 pengunjung. Jumlah pengunjung selama 6 minggu pertama adalah ….",
 "1020",
 ["990", "1040", "1080"],
 [
  [("P", "Pertambahan tetap = barisan aritmetika. "), ("B", "U₆ − U₁ = 5b = 100 ⟹ b = 20"), ("P", ".")],
  [("B", "S₆ = 6/2 × (120 + 220) = 3 × 340 = 1020")],
 ],
)

add(
 "Diketahui barisan geometri 2, 6, 18, …, 4.374. Banyak suku pada barisan tersebut adalah ….",
 "8",
 ["7", "9", "10"],
 [
  [("P", "Rasio "), ("B", "r = 3"), ("P", ". Suku ke-n: "), ("B", "Uₙ = 2·3ⁿ⁻¹"), ("P", ".")],
  [("B", "4.374 = 2·3ⁿ⁻¹ ⟹ 3ⁿ⁻¹ = 2.187 = 3⁷ ⟹ n − 1 = 7 ⟹ n = 8")],
 ],
)

add(
 "Hasil dari 1 + 2 + 4 + 8 + … sampai 10 suku adalah ….",
 "1023",
 ["512", "1024", "2047"],
 [
  [("P", "Deret geometri dengan "), ("B", "a = 1, r = 2, n = 10"), ("P", ".")],
  [("B", "S₁₀ = (2¹⁰ − 1)/(2 − 1) = 1.024 − 1 = 1.023")],
 ],
)

add(
 "Nilai dari ∑ (k = 1 sampai 8) (3k + 1) adalah ….",
 "116",
 ["120", "124", "128"],
 [
  [("P", "Suku-sukunya: k = 1 ⟹ 4, k = 8 ⟹ 25, banyak suku 8. Deret aritmetika dengan "), ("B", "a = 4, b = 3"), ("P", ".")],
  [("B", "S₈ = 8/2 × (4 + 25) = 4 × 29 = 116")],
 ],
)

add(
 "Antara bilangan 6 dan 54 disisipkan 7 bilangan sehingga terbentuk barisan aritmetika baru. Beda barisan yang terbentuk adalah ….",
 "6",
 ["5", "7", "8"],
 [
  [("P", "Setelah disisipkan 7 bilangan, banyak suku menjadi "), ("B", "9"), ("P", " suku.")],
  [("B", "b = (54 − 6)/(9 − 1) = 48/8 = 6")],
 ],
)

add(
 "Suku ke-4 dan suku ke-8 suatu deret aritmetika berturut-turut 19 dan 35. Jumlah 12 suku pertama deret tersebut adalah ….",
 "348",
 ["306", "312", "330"],
 [
  [("P", "U₈ − U₄ = 4b = 16 ⟹ "), ("B", "b = 4"), ("P", ".")],
  [("P", "U₄ = a + 3·4 = 19 ⟹ "), ("B", "a = 7"), ("P", ".")],
  [("B", "S₁₂ = 12/2 × (2·7 + 11·4) = 6 × 58 = 348")],
 ],
)

add(
 "Sebuah mesin fotokopi menyelesaikan 500 lembar pada menit pertama dan setiap menit berikutnya mampu menyelesaikan 40 lembar lebih banyak daripada menit sebelumnya. Total lembar yang diselesaikan mesin tersebut dalam 15 menit adalah ….",
 "11.700",
 ["10.500", "11.400", "12.000"],
 [
  [("P", "Deret aritmetika: "), ("B", "a = 500, b = 40, n = 15"), ("P", ".")],
  [("B", "S₁₅ = 15/2 × (2·500 + 14·40) = 7,5 × 1.560 = 11.700")],
 ],
)

add(
 "Barisan 4, 9, 16, 25, … mengikuti pola kuadrat. Suku ke-12 barisan tersebut adalah ….",
 "169",
 ["144", "196", "121"],
 [
  [("P", "Tiap suku = kuadrat bilangan berurutan yang dimulai dari 2: "), ("B", "2², 3², 4², …"), ("P", ".")],
  [("B", "U₁₂ = (12 + 1)² = 13² = 169")],
 ],
)

add(
 "Diketahui deret geometri 4 + 12 + 36 + … + 972. Jumlah deret tersebut adalah ….",
 "1456",
 ["1452", "1460", "2916"],
 [
  [("P", "Rasio "), ("B", "r = 3"), ("P", ". Suku terakhir: "), ("B", "4·3ⁿ⁻¹ = 972 ⟹ 3ⁿ⁻¹ = 243 = 3⁵ ⟹ n = 6"), ("P", ".")],
  [("B", "S₆ = 4(3⁶ − 1)/(3 − 1) = 4 × 728/2 = 1.456")],
 ],
)

add(
 "Suatu barisan bilangan memiliki aturan: suku ke-1 = 1, suku ke-2 = 2, dan untuk n ≥ 3 berlaku Uₙ = Uₙ₋₁ + Uₙ₋₂. Jumlah 10 suku pertama barisan tersebut adalah ….",
 "231",
 ["88", "110", "143"],
 [
  [("P", "Barisan: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.")],
  [("B", "Jumlah = 1+2+3+5+8+13+21+34+55+89 = 231")],
 ],
)
