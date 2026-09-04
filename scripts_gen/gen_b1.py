# -*- coding: utf-8 -*-
"""SNBT PM — Block B1: Kecepatan, Jarak, Waktu & Pekerjaan (soal 41–50)."""
from gen_core import add

add(
 "Sebuah mobil menempuh perjalanan 240 km dengan kecepatan rata-rata 60 km/jam. Jika mobil tersebut beristirahat 30 menit di tengah perjalanan, total waktu yang diperlukan dari berangkat sampai tiba adalah ….",
 "4 jam 30 menit",
 ["3 jam 30 menit", "4 jam", "5 jam"],
 [
  [("P", "Waktu berkendara = "), ("B", "240/60 = 4 jam"), ("P", ".")],
  [("P", "Ditambah istirahat 30 menit: "), ("B", "4 jam + 30 menit = 4 jam 30 menit")],
 ],
)

add(
 "Dua kota A dan B berjarak 300 km. Rini berangkat dari A menuju B pukul 07.00 dengan kecepatan 60 km/jam. Santi berangkat dari B menuju A pada pukul yang sama dengan kecepatan 40 km/jam. Mereka berpapasan pada pukul ….",
 "10.00",
 ["09.30", "09.00", "10.30"],
 [
  [("P", "Karena bergerak saling mendekat, kecepatan relatif = "), ("B", "60 + 40 = 100 km/jam"), ("P", ".")],
  [("B", "Waktu papasan = 300/100 = 3 jam"), ("P", ". 07.00 + 3 jam = "), ("B", "10.00"), ("P", ".")],
 ],
)

add(
 "Sebuah kereta api menempuh jarak 360 km dalam waktu 4 jam, kemudian melanjutkan perjalanan 180 km dalam waktu 2 jam. Kecepatan rata-rata seluruh perjalanan kereta tersebut adalah … km/jam.",
 "90",
 ["80", "85", "95"],
 [
  [("P", "Jarak total = "), ("B", "360 + 180 = 540 km"), ("P", "; waktu total = "), ("B", "4 + 2 = 6 jam"), ("P", ".")],
  [("B", "Kecepatan rata-rata = 540/6 = 90 km/jam")],
 ],
)

add(
 "Untuk mengecat sebuah ruangan, Andi sendirian memerlukan 6 jam, sedangkan Budi sendirian memerlukan 12 jam. Jika mereka bekerja bersama-sama, waktu yang diperlukan adalah ….",
 "4 jam",
 ["3 jam", "5 jam", "9 jam"],
 [
  [("P", "Kecepatan Andi = 1/6 ruangan/jam, Budi = 1/12 ruangan/jam.")],
  [("B", "Bersama: 1/6 + 1/12 = 3/12 = 1/4 ⟹ waktu = 4 jam")],
 ],
)

add(
 "Sebuah pompa air dapat mengosongkan kolam dalam 8 jam, sedangkan pompa lain dalam 12 jam. Jika kedua pompa digunakan bersamaan, kolam akan kosong dalam ….",
 "4 jam 48 menit",
 ["4 jam 30 menit", "5 jam", "5 jam 20 menit"],
 [
  [("P", "Debit gabungan: "), ("B", "1/8 + 1/12 = 5/24 kolam/jam"), ("P", ".")],
  [("B", "Waktu = 24/5 jam = 4,8 jam = 4 jam 48 menit")],
 ],
)

add(
 "Sebuah proyek dapat diselesaikan oleh 12 pekerja dalam 30 hari. Jika proyek harus selesai dalam 20 hari, banyak tambahan pekerja yang diperlukan adalah ….",
 "6",
 ["4", "8", "10"],
 [
  [("P", "Total pekerjaan = "), ("B", "12 × 30 = 360 hari-orang"), ("P", ".")],
  [("P", "Agar selesai 20 hari perlu "), ("B", "360/20 = 18 pekerja"), ("P", ".")],
  [("B", "Tambahan = 18 − 12 = 6 pekerja")],
 ],
)

add(
 "Sebuah bus menempuh jarak 180 km dengan kecepatan rata-rata 72 km/jam. Bus berangkat pukul 06.30. Bus tiba di tujuan pukul ….",
 "09.00",
 ["08.30", "09.30", "10.00"],
 [
  [("P", "Waktu tempuh = "), ("B", "180/72 = 2,5 jam = 2 jam 30 menit"), ("P", ".")],
  [("B", "06.30 + 2 jam 30 menit = 09.00")],
 ],
)

add(
 "Adi mengendarai sepeda motor dengan kecepatan 40 km/jam dan tiba di sekolah dalam waktu 30 menit. Jika ia ingin tiba 10 menit lebih cepat, kecepatan yang harus ia tempuh adalah … km/jam.",
 "60",
 ["50", "55", "80"],
 [
  [("P", "Jarak ke sekolah = "), ("B", "40 × 0,5 = 20 km"), ("P", ".")],
  [("P", "Waktu baru = "), ("B", "30 − 10 = 20 menit = 1/3 jam"), ("P", ".")],
  [("B", "Kecepatan = 20/(1/3) = 60 km/jam")],
 ],
)

add(
 "Tiga pekerja dapat menyelesaikan sebuah pekerjaan dalam 12 hari. Jika dua pekerja tambahan bergabung dengan kemampuan yang sama, pekerjaan tersebut selesai dalam ….",
 "7,2 hari",
 ["6 hari", "8 hari", "9,6 hari"],
 [
  [("P", "Total pekerjaan = "), ("B", "3 × 12 = 36 hari-orang"), ("P", ".")],
  [("P", "Dengan 5 pekerja: "), ("B", "36/5 = 7,2 hari")],
 ],
)

add(
 "Dari kota P ke kota Q, sebuah pesawat terbang dengan kecepatan 600 km/jam dan kembali dengan kecepatan 400 km/jam. Kecepatan rata-rata pesawat untuk seluruh perjalanan pulang-pergi adalah … km/jam.",
 "480",
 ["450", "500", "520"],
 [
  [("P", "Untuk jarak yang sama, kecepatan rata-rata total = "), ("B", "2ab/(a + b)"), ("P", ".")],
  [("B", "2 × 600 × 400/(600 + 400) = 480.000/1.000 = 480 km/jam")],
 ],
)
