# -*- coding: utf-8 -*-
"""SNBT PM — Block C2: Persen & Aritmetika Sosial lanjutan (soal 71–80)."""
from gen_core import add

add(
 "Harga sebuah laptop setelah naik 15% menjadi Rp9.200.000,00. Harga laptop sebelum naik adalah ….",
 "Rp8.000.000,00",
 ["Rp7.820.000,00", "Rp8.400.000,00", "Rp8.600.000,00"],
 [
  [("P", "Harga baru = 115% harga lama: "), ("B", "1,15H = 9.200.000")],
  [("B", "H = 9.200.000 / 1,15 = 8.000.000")],
 ],
)

add(
 "Pada awal tahun, jumlah penduduk sebuah desa 4.000 jiwa. Selama setahun terjadi kelahiran 120 jiwa dan kematian 40 jiwa, sedangkan penduduk yang pindah masuk 60 jiwa dan pindah keluar 20 jiwa. Persentase pertumbuhan penduduk desa itu adalah ….",
 "3%",
 ["2%", "2,5%", "4%"],
 [
  [("P", "Pertumbuhan = "), ("B", "120 − 40 + 60 − 20 = 120 jiwa"), ("P", ".")],
  [("B", "Persentase = 120/4.000 × 100% = 3%")],
 ],
)

add(
 "Sebuah toko memberikan diskon 30% + 10% untuk semua barang. Harga awal sebuah jam tangan Rp750.000,00. Harga yang harus dibayar setelah diskon bertingkat adalah ….",
 "Rp472.500,00",
 ["Rp450.000,00", "Rp525.000,00", "Rp495.000,00"],
 [
  [("P", "Setelah diskon 30%: "), ("B", "750.000 × 0,7 = 525.000"), ("P", ".")],
  [("P", "Diskon 10% menyusul: "), ("B", "525.000 × 0,9 = 472.500")],
 ],
)

add(
 "Seorang pedagang buah membeli 100 kg jeruk dengan harga Rp15.000,00 per kg. Sebanyak 20 kg jeruk dijual dengan harga Rp20.000,00 per kg, dan sisanya dijual Rp17.500,00 per kg. Persentase keuntungan pedagang tersebut adalah ….",
 "20%",
 ["15%", "18%", "22%"],
 [
  [("P", "Modal = "), ("B", "100 × 15.000 = 1.500.000"), ("P", ".")],
  [("P", "Hasil = "), ("B", "20 × 20.000 + 80 × 17.500 = 400.000 + 1.400.000 = 1.800.000"), ("P", ".")],
  [("B", "Untung = 300.000 ⟹ 300.000/1.500.000 × 100% = 20%")],
 ],
)

add(
 "Sebuah mesin cuci dijual seharga Rp3.400.000,00 setelah mengalami penurunan harga 15%. Harga mesin cuci sebelum turun adalah ….",
 "Rp4.000.000,00",
 ["Rp3.800.000,00", "Rp3.910.000,00", "Rp4.250.000,00"],
 [
  [("P", "Harga akhir = 85% harga semula: "), ("B", "0,85H = 3.400.000")],
  [("B", "H = 3.400.000 / 0,85 = 4.000.000")],
 ],
)

add(
 "Uang sebesar Rp2.400.000,00 disimpan di bank dengan bunga tunggal 10% per tahun. Agar uang tersebut menjadi Rp2.700.000,00, uang harus disimpan selama ….",
 "15 bulan",
 ["12 bulan", "18 bulan", "20 bulan"],
 [
  [("P", "Bunga yang diinginkan = "), ("B", "2.700.000 − 2.400.000 = 300.000"), ("P", ".")],
  [("B", "300.000 = 2.400.000 × 10% × t ⟹ t = 1,25 tahun = 15 bulan")],
 ],
)

add(
 "Pada sebuah kelas, 60% siswa menyukai matematika dan 45% menyukai fisika. Jika 25% siswa menyukai keduanya, persentase siswa yang tidak menyukai keduanya adalah ….",
 "20%",
 ["15%", "25%", "30%"],
 [
  [("P", "Siswa yang menyukai setidaknya satu = "), ("B", "60% + 45% − 25% = 80%"), ("P", ".")],
  [("B", "Yang tidak menyukai keduanya = 100% − 80% = 20%")],
 ],
)

add(
 "Seorang pedagang membeli 2 lusin piring seharga Rp480.000,00. Jika setiap piring dijual dengan harga Rp25.000,00, persentase keuntungannya adalah ….",
 "25%",
 ["20%", "30%", "15%"],
 [
  [("P", "Harga beli per piring = "), ("B", "480.000/24 = 20.000"), ("P", ".")],
  [("P", "Untung per piring = "), ("B", "25.000 − 20.000 = 5.000"), ("P", ".")],
  [("B", "Persentase untung = 5.000/20.000 × 100% = 25%")],
 ],
)

add(
 "Sebuah investasi sebesar Rp10.000.000,00 berkembang menjadi Rp12.000.000,00 dalam 2 tahun dengan bunga majemuk yang dibayarkan tiap tahun. Suku bunga per tahunnya adalah ….",
 "9,54%",
 ["10%", "8,5%", "12%"],
 [
  [("P", "Bunga majemuk: "), ("B", "12.000.000 = 10.000.000(1 + r)²"), ("P", ".")],
  [("B", "(1 + r)² = 1,2 ⟹ 1 + r = √1,2 ≈ 1,0954 ⟹ r ≈ 9,54%")],
 ],
)

add(
 "Sebuah barang dibeli dengan harga Rp1.250.000,00. Agar pedagang mendapat untung 20% setelah memberikan diskon 10% dari harga yang tertera, harga yang tertera pada label barang tersebut adalah ….",
 "Rp1.666.666,67",
 ["Rp1.500.000,00", "Rp1.650.000,00", "Rp1.700.000,00"],
 [
  [("P", "Harga jual yang diinginkan = "), ("B", "1.250.000 × 1,2 = 1.500.000"), ("P", ".")],
  [("P", "Harga label = harga jual / 0,9 = "), ("B", "1.500.000/0,9 = 1.666.666,67")],
 ],
)

add(
 "Berat badan Andi 15% lebih ringan daripada berat badan Budi. Jika berat badan Andi 51 kg, berat badan Budi adalah ….",
 "60 kg",
 ["58 kg", "58,65 kg", "62 kg"],
 [
  [("P", "Berat Andi = 85% berat Budi: "), ("B", "0,85B = 51")],
  [("B", "B = 51/0,85 = 60 kg")],
 ],
)
