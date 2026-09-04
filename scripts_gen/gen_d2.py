# -*- coding: utf-8 -*-
"""SNBT PM — Block D2: Logika & Penalaran Kuantitatif (soal 91–100)."""
from gen_core import add

add(
 "Diketahui pernyataan: \"Jika hari hujan, maka jalan basah.\" Jika hari ini jalan tidak basah, simpulan yang sah adalah ….",
 "Hari ini tidak hujan",
 ["Hari ini hujan", "Jalan tidak basah karena disiram", "Tidak dapat disimpulkan"],
 [
  [("P", "Bentuk logika: "), ("B", "p ⟹ q"), ("P", ". Premis "), ("B", "¬q"), ("P", " memberikan simpulan "), ("B", "¬p"), ("P", " (modus tollens).")],
  [("P", "Jadi simpulannya: "), ("B", "hari ini tidak hujan"), ("P", ".")],
 ],
)

add(
 "Lima orang, A, B, C, D, dan E, duduk melingkar. A duduk bersebelahan dengan B dan C. D duduk tepat di seberang A. Jika E duduk di antara C dan D, pernyataan yang benar adalah ….",
 "B bersebelahan dengan D dan E",
 ["B bersebelahan dengan C dan E", "E bersebelahan dengan A", "D bersebelahan dengan A dan B"],
 [
  [("P", "Susun keliling: A dikelilingi B dan C; D di seberang A; E di antara C dan D.")],
  [("B", "Urutan melingkar: A – B – D – E – C – A"), ("P", ", sehingga B bersebelahan dengan D dan E.")],
 ],
)

add(
 "Semua peserta SNBT yang lolos memiliki skor di atas ambang batas. Sebagian peserta yang memiliki skor di atas ambang batas mengambil bimbingan belajar. Simpulan yang paling tepat adalah ….",
 "Tidak dapat disimpulkan bahwa peserta lolos pasti mengambil bimbingan belajar",
 ["Semua peserta lolos mengambil bimbingan belajar", "Sebagian peserta lolos mengambil bimbingan belajar", "Semua peserta yang mengambil bimbingan belajar lolos"],
 [
  [("P", "Lolos ⟹ skor tinggi. Skor tinggi tidak menjamin mengambil bimbingan.")],
  [("B", "Tidak dapat disimpulkan bahwa peserta lolos pasti mengambil bimbingan"), ("P", ".")],
 ],
)

add(
 "Diketahui 2 ≤ x ≤ 5 dan 3 ≤ y ≤ 7 dengan x dan y bilangan bulat. Nilai terbesar yang mungkin dari x × y adalah ….",
 "35",
 ["28", "30", "34"],
 [
  [("P", "Agar hasil kali maksimum, pilih x dan y terbesar: "), ("B", "x = 5 dan y = 7"), ("P", ".")],
  [("B", "x × y = 5 × 7 = 35")],
 ],
)

add(
 "Jika x adalah bilangan bulat dan 2x + 5 ≤ 17, nilai x terbesar yang memenuhi adalah ….",
 "6",
 ["5", "7", "8"],
 [
  [("P", "Selesaikan: "), ("B", "2x ≤ 12 ⟹ x ≤ 6"), ("P", ".")],
  [("B", "Nilai x terbesar = 6")],
 ],
)

add(
 "Diketahui pernyataan majemuk: \"Jika Andi rajin belajar, maka ia naik kelas.\" Andi tidak naik kelas. Simpulan yang sah adalah ….",
 "Andi tidak rajin belajar",
 ["Andi rajin belajar", "Andi malas bermain", "Andi naik kelas"],
 [
  [("P", "Modus tollens: "), ("B", "p ⟹ q"), ("P", " dan "), ("B", "¬q"), ("P", " menghasilkan "), ("B", "¬p"), ("P", ".")],
  [("P", "Simpulan: "), ("B", "Andi tidak rajin belajar"), ("P", ".")],
 ],
)

add(
 "Rata-rata dari 4 bilangan adalah 12. Jika satu bilangan 18 dikeluarkan, rata-rata tiga bilangan sisanya adalah ….",
 "10",
 ["8", "9", "11"],
 [
  [("P", "Jumlah 4 bilangan = "), ("B", "4 × 12 = 48"), ("P", ".")],
  [("P", "Jumlah 3 bilangan = "), ("B", "48 − 18 = 30"), ("P", ".")],
  [("B", "Rata-rata = 30/3 = 10")],
 ],
)

add(
 "Pada suatu ujian, median nilai 9 siswa adalah 75. Jika nilai tertinggi 95 dan nilai terendah 55, serta tidak ada nilai yang sama, banyak siswa yang nilainya di atas 75 adalah ….",
 "4",
 ["3", "5", "tidak dapat ditentukan"],
 [
  [("P", "Median = nilai ke-5 dari 9 data (data terurut).")],
  [("P", "Karena tidak ada nilai sama, ada "), ("B", "4 data di atas median"), ("P", ".")],
 ],
)

add(
 "Empat bilangan asli berurutan memiliki rata-rata 18,5. Bilangan terbesarnya adalah ….",
 "20",
 ["19", "21", "22"],
 [
  [("P", "Misal bilangan: "), ("B", "n, n+1, n+2, n+3"), ("P", ".")],
  [("P", "Rata-rata = "), ("B", "(4n + 6)/4 = 18,5 ⟹ 4n + 6 = 74 ⟹ n = 17"), ("P", ".")],
  [("B", "Bilangan terbesar = 17 + 3 = 20")],
 ],
)

add(
 "Sebuah dadu dilempar dua kali. Peluang munculnya jumlah mata dadu 7 adalah ….",
 "1/6",
 ["1/9", "5/36", "1/12"],
 [
  [("P", "Ruang sampel = "), ("B", "6 × 6 = 36"), ("P", ".")],
  [("P", "Pasangan berjumlah 7: "), ("B", "(1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6"), ("P", ".")],
  [("B", "Peluang = 6/36 = 1/6")],
 ],
)
