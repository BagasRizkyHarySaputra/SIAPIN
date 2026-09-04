# -*- coding: utf-8 -*-
"""SNBT PM — Block B2: Kecepatan & Pekerjaan lanjutan + skala (soal 51–60)."""
from gen_core import add

add(
 "Sebuah mobil menghabiskan 1 liter bensin untuk menempuh 12 km. Jika tangki mobil berisi 35 liter dan perjalanan yang ditempuh 300 km, sisa bensin dalam tangki adalah … liter.",
 "10",
 ["8", "9", "12"],
 [
  [("P", "Bensin terpakai = "), ("B", "300/12 = 25 liter"), ("P", ".")],
  [("B", "Sisa = 35 − 25 = 10 liter")],
 ],
)

add(
 "Rino berangkat dari rumah pukul 06.15 mengendarai sepeda motor dengan kecepatan rata-rata 48 km/jam dan tiba di kantor pukul 06.55. Jarak rumah Rino ke kantor adalah … km.",
 "32",
 ["28", "30", "36"],
 [
  [("P", "Waktu tempuh = "), ("B", "40 menit = 2/3 jam"), ("P", ".")],
  [("B", "Jarak = 48 × 2/3 = 32 km")],
 ],
)

add(
 "Sebuah pekerjaan dapat diselesaikan oleh 15 pekerja dalam 24 hari. Setelah dikerjakan 6 hari, pekerjaan dihentikan selama 3 hari. Agar pekerjaan selesai tepat waktu, banyak pekerja tambahan yang diperlukan adalah ….",
 "3",
 ["5", "4", "6"],
 [
  [("P", "Total pekerjaan = "), ("B", "15 × 24 = 360 hari-orang"), ("P", ".")],
  [("P", "Sudah dikerjakan 6 hari: "), ("B", "15 × 6 = 90"), ("P", "; sisa 270 hari-orang.")],
  [("P", "Sisa waktu efektif = "), ("B", "24 − 6 − 3 = 15 hari"), ("P", ".")],
  [("P", "Pekerja yang dibutuhkan = "), ("B", "270/15 = 18 ⟹ tambahan 18 − 15 = 3"), ("P", ".")],
 ],
)

add(
 "Sebuah peta memiliki skala 1 : 250.000. Jika jarak dua kota pada peta 12 cm, jarak sebenarnya kedua kota tersebut adalah … km.",
 "30",
 ["24", "36", "3"],
 [
  [("P", "Jarak sebenarnya = "), ("B", "12 × 250.000 = 3.000.000 cm"), ("P", ".")],
  [("B", "3.000.000 cm = 30 km")],
 ],
)

add(
 "Sebuah bak mandi berbentuk balok berukuran 80 cm × 60 cm × 50 cm diisi air melalui keran berdebit 4 liter/menit. Waktu yang diperlukan untuk mengisi bak hingga penuh adalah ….",
 "1 jam",
 ["50 menit", "1 jam 10 menit", "1 jam 20 menit"],
 [
  [("P", "Volume bak = "), ("B", "80 × 60 × 50 = 240.000 cm³ = 240 liter"), ("P", ".")],
  [("B", "Waktu = 240/4 = 60 menit = 1 jam")],
 ],
)

add(
 "Sebuah sepeda motor menempuh jarak 90 km dengan kecepatan rata-rata 45 km/jam, lalu berbalik arah menempuh 60 km dengan kecepatan 30 km/jam. Kecepatan rata-rata seluruh perjalanan adalah … km/jam.",
 "37,5",
 ["35", "40", "42"],
 [
  [("P", "Waktu pergi = "), ("B", "90/45 = 2 jam"), ("P", "; waktu kembali = "), ("B", "60/30 = 2 jam"), ("P", ".")],
  [("P", "Jarak total 150 km, waktu total 4 jam: "), ("B", "150/4 = 37,5 km/jam")],
 ],
)

add(
 "Andi, Budi, dan Candra bekerja bersama-sama menyelesaikan sebuah pekerjaan dalam 2 jam. Andi dan Budi bersama-sama dapat menyelesaikannya dalam 3 jam. Jika Candra bekerja sendirian, waktu yang ia perlukan adalah … jam.",
 "6",
 ["4", "5", "8"],
 [
  [("P", "Kecepatan A+B+C = "), ("B", "1/2"), ("P", "; kecepatan A+B = "), ("B", "1/3"), ("P", " pekerjaan/jam.")],
  [("P", "Kecepatan C = "), ("B", "1/2 − 1/3 = 1/6"), ("P", ".")],
  [("B", "Waktu C sendirian = 6 jam")],
 ],
)

add(
 "Sebuah mobil berangkat dari kota P pukul 08.30 dan tiba di kota Q pukul 11.00. Jika kecepatan rata-rata mobil 72 km/jam, jarak kota P ke Q adalah … km.",
 "180",
 ["150", "170", "190"],
 [
  [("P", "Lama perjalanan = "), ("B", "2 jam 30 menit = 2,5 jam"), ("P", ".")],
  [("B", "Jarak = 72 × 2,5 = 180 km")],
 ],
)

add(
 "Suatu proyek diselesaikan oleh 8 pekerja dalam 45 hari. Jika proyek akan dipercepat 9 hari lebih cepat, banyak pekerja tambahan yang dibutuhkan adalah ….",
 "2",
 ["1", "3", "4"],
 [
  [("P", "Total pekerjaan = "), ("B", "8 × 45 = 360 hari-orang"), ("P", ".")],
  [("P", "Waktu baru = "), ("B", "45 − 9 = 36 hari"), ("P", "; pekerja yang dibutuhkan = "), ("B", "360/36 = 10"), ("P", ".")],
  [("B", "Tambahan = 10 − 8 = 2 pekerja")],
 ],
)

add(
 "Sebuah keran A dapat mengisi tangki dalam 6 jam dan keran B dalam 4 jam. Jika kedua keran dibuka bersamaan, tangki akan penuh dalam ….",
 "2 jam 24 menit",
 ["2 jam", "2 jam 30 menit", "3 jam"],
 [
  [("P", "Debit gabungan = "), ("B", "1/6 + 1/4 = 5/12 tangki/jam"), ("P", ".")],
  [("B", "Waktu = 12/5 jam = 2,4 jam = 2 jam 24 menit")],
 ],
)
