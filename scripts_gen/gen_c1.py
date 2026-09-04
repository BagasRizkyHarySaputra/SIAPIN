# -*- coding: utf-8 -*-
"""SNBT PM — Block C1: Persen & Aritmetika Sosial (soal 61–70)."""
from gen_core import add

add(
 "Harga sebuah tas setelah mendapat diskon 25% adalah Rp450.000,00. Harga tas sebelum diskon adalah ….",
 "Rp600.000,00",
 ["Rp550.000,00", "Rp562.500,00", "Rp637.500,00"],
 [
  [("P", "Harga setelah diskon = 75% harga semula: "), ("B", "0,75H = 450.000")],
  [("B", "H = 450.000 / 0,75 = 600.000")],
 ],
)

add(
 "Seorang pedagang membeli sebuah barang seharga Rp800.000,00 lalu menjualnya dengan harga Rp920.000,00. Persentase keuntungannya adalah ….",
 "15%",
 ["12%", "18%", "20%"],
 [
  [("P", "Untung = "), ("B", "920.000 − 800.000 = 120.000"), ("P", ".")],
  [("B", "Persentase untung = 120.000/800.000 × 100% = 15%")],
 ],
)

add(
 "Sebuah barang dijual dengan harga Rp2.550.000,00 setelah dikenai pajak pertambahan nilai sebesar 8,5%. Harga barang sebelum pajak adalah ….",
 "Rp2.350.000,00",
 ["Rp2.300.000,00", "Rp2.400.000,00", "Rp2.450.000,00"],
 [
  [("P", "Harga akhir = 108,5% harga awal: "), ("B", "1,085H = 2.550.000")],
  [("B", "H = 2.550.000 / 1,085 = 2.350.000")],
 ],
)

add(
 "Modal Rp5.000.000,00 dibungakan dengan bunga tunggal 10% per tahun. Besar bunga yang diperoleh setelah 1 tahun 4 bulan adalah ….",
 "Rp666.666,67",
 ["Rp650.000,00", "Rp700.000,00", "Rp600.000,00"],
 [
  [("P", "Lama = "), ("B", "16 bulan = 16/12 tahun"), ("P", ".")],
  [("B", "Bunga = 5.000.000 × 10% × 16/12 = 666.666,67")],
 ],
)

add(
 "Pak Jaya menabung Rp6.000.000,00 di bank dengan bunga tunggal 8% per tahun. Setelah 9 bulan, jumlah tabungan Pak Jaya adalah ….",
 "Rp6.360.000,00",
 ["Rp6.240.000,00", "Rp6.480.000,00", "Rp6.720.000,00"],
 [
  [("P", "Bunga 9 bulan = "), ("B", "8% × 9/12 = 6%"), ("P", ".")],
  [("B", "Tabungan akhir = 6.000.000 × 106% = 6.360.000")],
 ],
)

add(
 "Pada sebuah toko, harga sepatu Rp480.000,00 diberi diskon 20%, kemudian atas harga yang sudah didiskon dikenai potongan tambahan 10%. Harga akhir sepatu tersebut adalah ….",
 "Rp345.600,00",
 ["Rp336.000,00", "Rp384.000,00", "Rp302.400,00"],
 [
  [("P", "Setelah diskon 20%: "), ("B", "480.000 × 0,8 = 384.000"), ("P", ".")],
  [("P", "Potongan tambahan 10%: "), ("B", "384.000 × 0,9 = 345.600")],
 ],
)

add(
 "Gaji seorang karyawan setelah naik 12% adalah Rp5.600.000,00. Gaji karyawan tersebut sebelum naik adalah ….",
 "Rp5.000.000,00",
 ["Rp4.928.000,00", "Rp5.250.000,00", "Rp5.375.000,00"],
 [
  [("P", "Gaji baru = 112% gaji lama: "), ("B", "1,12G = 5.600.000")],
  [("B", "G = 5.600.000 / 1,12 = 5.000.000")],
 ],
)

add(
 "Sebuah toko menjual 25 kg gula seharga Rp13.000,00 per kg. Dari penjualan itu toko memperoleh untung 30%. Harga beli seluruh gula tersebut adalah ….",
 "Rp250.000,00",
 ["Rp227.500,00", "Rp260.000,00", "Rp325.000,00"],
 [
  [("P", "Hasil penjualan = "), ("B", "25 × 13.000 = 325.000"), ("P", ".")],
  [("P", "Harga jual = 130% harga beli: "), ("B", "1,3B = 325.000 ⟹ B = 250.000")],
 ],
)

add(
 "Bu Rina meminjam uang di koperasi Rp8.000.000,00 dengan bunga tunggal 15% per tahun. Jika ia mengembalikan Rp9.500.000,00, lama pinjaman Bu Rina adalah ….",
 "15 bulan",
 ["12 bulan", "18 bulan", "10 bulan"],
 [
  [("P", "Bunga = "), ("B", "9.500.000 − 8.000.000 = 1.500.000"), ("P", ".")],
  [("B", "1.500.000 = 8.000.000 × 15% × t ⟹ t = 1,25 tahun = 15 bulan")],
 ],
)

add(
 "Sebuah barang dijual dengan kerugian 20%. Jika kerugiannya Rp75.000,00, harga jual barang tersebut adalah ….",
 "Rp300.000,00",
 ["Rp250.000,00", "Rp350.000,00", "Rp375.000,00"],
 [
  [("P", "Rugi 20% dari harga beli = 75.000 ⟹ "), ("B", "harga beli = 75.000/0,2 = 375.000"), ("P", ".")],
  [("B", "Harga jual = 80% × 375.000 = 300.000")],
 ],
)
