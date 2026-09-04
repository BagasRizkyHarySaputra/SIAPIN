# -*- coding: utf-8 -*-
"""SNBT PM bank — part 4: logika kuantitatif (perbandingan kuantitatif) & penalaran campuran (51 soal).

Canonical form: opts = [correct, d1, d2, d3] (correct FIRST).
Assembler rotates so the correct option lands on a balanced answer key.
"""

def load():
    Q = []
    def add(prompt, opts, expl, otype="str"):
        assert len(opts) == 4, "need 4 options"
        Q.append(dict(prompt=prompt, opts=list(opts), expl=expl, otype=otype))

    # ============ PERBANDINGAN KUANTITATIF (18) ============
    add("Diketahui x = 2 × 4 + 3 dan y = 3 × 4 − 1. Manakah hubungan yang benar antara x dan y?",
        ["x = y", "x > y", "x < y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 8 + 3 = 11"), (0, " dan "), (1, "y = 12 − 1 = 11"), (0, ", jadi x = y.")])
    add("Jika x = 25% dari 80 dan y = 20% dari 100, maka hubungan x dan y adalah ….",
        ["x = y", "x > y", "x < y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 25% × 80 = 20"), (0, " dan "), (1, "y = 20% × 100 = 20"), (0, ".")])
    add("Diketahui x = 3² × 2 dan y = 2³ × 3. Manakah hubungan yang benar antara x dan y?",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 9 × 2 = 18"), (0, " dan "), (1, "y = 8 × 3 = 24"), (0, ", jadi x < y.")])
    add("Jika x = 1/2 + 1/3 dan y = 1/6 + 2/3, maka hubungan yang benar adalah ….",
        ["x = y", "x > y", "x < y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 3/6 + 2/6 = 5/6"), (0, " dan "), (1, "y = 1/6 + 4/6 = 5/6"), (0, ".")])
    add("Umur Andi sekarang 12 tahun, sedangkan umur Budi 4 tahun lebih tua. Jika x = umur Andi 5 tahun yang lalu dan y = umur Budi 5 tahun yang lalu, maka ….",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 12 − 5 = 7"), (0, " dan "), (1, "y = 16 − 5 = 11"), (0, ", jadi x < y.")])
    add("Diketahui a = 3 dan b = 5. Jika x = 2a + b dan y = a + 2b, maka ….",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 2(3) + 5 = 11"), (0, " dan "), (1, "y = 3 + 2(5) = 13"), (0, ", jadi x < y.")])
    add("Sebuah persegi panjang memiliki panjang 10 cm dan lebar 6 cm. Jika x = luas persegi panjang dan y = keliling persegi panjang, maka ….",
        ["x > y", "x < y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "L = 10 × 6 = 60 cm²"), (0, " dan "), (1, "K = 2(10 + 6) = 32 cm"), (0, ", jadi x > y.")])
    add("Rata-rata tiga bilangan 12, 15, dan 18 adalah x, sedangkan rata-rata bilangan 10 dan 14 adalah y. Hubungan x dan y adalah ….",
        ["x > y", "x < y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = (12 + 15 + 18)/3 = 15"), (0, " dan "), (1, "y = (10 + 14)/2 = 12"), (0, ".")])
    add("Jika x = jumlah besar sudut dalam segitiga (derajat) dan y = jumlah besar sudut dalam segi empat (derajat), maka ….",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "Jumlah sudut segitiga = 180°"), (0, " dan "), (1, "segi empat = 360°"), (0, ", jadi x < y.")])
    add("Jika p = 4 dan q = 7, maka x = p × q − 3 dan y = p + q + 15. Hubungan yang benar adalah ….",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 4 × 7 − 3 = 25"), (0, " dan "), (1, "y = 4 + 7 + 15 = 26"), (0, ", jadi x < y.")])
    add("Harga 3 buku Rp27.000, sedangkan harga 5 pensil Rp17.500. Jika x = harga 1 buku dan y = harga 1 pensil, maka ….",
        ["x > y", "x < y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 27.000 ÷ 3 = 9.000"), (0, " dan "), (1, "y = 17.500 ÷ 5 = 3.500"), (0, ".")])
    add("Diketahui x adalah bilangan genap antara 10 dan 20, sedangkan y adalah bilangan ganjil antara 10 dan 20. Hubungan x dan y adalah ….",
        ["Hubungan tidak dapat ditentukan", "x > y", "x < y", "x = y"],
        [(0, "x dan y dapat bernilai bermacam-macam, misal x = 12 dan y = 19, atau x = 18 dan y = 11."),
         (1, "Maka hubungan tidak dapat ditentukan.")])
    add("Diketahui x = 0,4 × 0,5 dan y = 0,2 × 1. Hubungan yang benar adalah ….",
        ["x = y", "x > y", "x < y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 0,4 × 0,5 = 0,2"), (0, " dan "), (1, "y = 0,2 × 1 = 0,2"), (0, ".")])
    add("Roda A berputar 3 kali setiap kali roda B berputar 5 kali. Jika x = banyak putaran roda B saat roda A berputar 9 kali dan y = 15, maka ….",
        ["x = y", "x > y", "x < y", "Hubungan tidak dapat ditentukan"],
        [(1, "A : B = 3 : 5 ⟹ 9 putaran A setara 9 × 5/3 = 15 putaran B"), (0, ", jadi x = y.")])
    add("Diketahui segitiga siku-siku dengan kedua sisi siku-siku 6 cm dan 8 cm. Jika x = panjang sisi miring segitiga (cm) dan y = 11, maka ….",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "Sisi miring = √(6² + 8²) = √100 = 10"), (0, ", jadi x = 10 < 11.")])
    add("Sebuah kubus memiliki panjang rusuk 5 cm. Jika x = luas permukaan kubus (cm²) dan y = volume kubus (cm³), maka ….",
        ["x > y", "x < y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "Lp = 6 × 5² = 150 cm²"), (0, " dan "), (1, "V = 5³ = 125 cm³"), (0, ", jadi x > y.")])
    add("Di sebuah kelas yang berjumlah 40 siswa, 60% di antaranya laki-laki. Jika x = banyak siswa laki-laki dan y = 25, maka ….",
        ["x < y", "x > y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 60% × 40 = 24"), (0, ", jadi x = 24 < 25.")])
    add("Nilai x = 5 + 6 ÷ 2 − 1 dan nilai y = (5 + 6) ÷ 2 − 1. Hubungan x dan y adalah ….",
        ["x > y", "x < y", "x = y", "Hubungan tidak dapat ditentukan"],
        [(1, "x = 5 + 3 − 1 = 7"), (0, " (bagi dahulu), sedangkan "), (1, "y = 11 ÷ 2 − 1 = 4,5"), (0, ".")])

    # ============ PENALARAN CAMPURAN (33) ============
    add("Bu Rina membeli 5 lusin piring seharga Rp8.000 per buah dan 3 lusin gelas seharga Rp6.000 per buah. Total belanja Bu Rina adalah ….",
        ["Rp696.000", "Rp636.000", "Rp576.000", "Rp756.000"],
        [(1, "5 lusin = 60 piring ⟹ 60 × 8.000 = 480.000"), (0, "; "),
         (1, "3 lusin = 36 gelas ⟹ 36 × 6.000 = 216.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Total = 480.000 + 216.000 = 696.000"))
    add("Pak Dedi meminjam uang Rp3.000.000 dan mengembalikannya dalam 6 kali angsuran masing-masing Rp450.000. Sisa utang Pak Dedi adalah ….",
        ["Rp300.000", "Rp250.000", "Rp200.000", "Rp350.000"],
        [(1, "Total angsuran = 6 × 450.000 = 2.700.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Sisa = 3.000.000 − 2.700.000 = 300.000"))
    add("Sebuah taman berbentuk persegi dengan panjang sisi 30 m. Di sekeliling taman dipasang lampu setiap 5 m. Banyak lampu yang dipasang adalah ….",
        ["24 lampu", "20 lampu", "30 lampu", "18 lampu"],
        [(1, "Keliling = 4 × 30 = 120 m"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "Banyak lampu = 120 ÷ 5 = 24"))
    add("Dari bilangan 1 sampai 60, banyak bilangan yang habis dibagi 6 adalah ….",
        ["10", "8", "12", "15"],
        [(1, "Kelipatan 6: 6, 12, 18, …, 60"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "60 ÷ 6 = 10 bilangan"))
    add("Bu Sari membagikan 48 apel dan 36 jeruk kepada sebanyak-banyaknya anak sehingga setiap anak menerima bagian yang sama. Banyak anak yang menerima adalah ….",
        ["12 anak", "6 anak", "8 anak", "18 anak"],
        [(1, "Banyak anak = FPB(48, 36)"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "48 = 2⁴×3; 36 = 2²×3² ⟹ FPB = 2²×3 = 12"))
    add("Lampu A menyala setiap 12 detik dan lampu B setiap 18 detik. Jika keduanya menyala bersama sekarang, keduanya akan menyala bersama lagi setelah … detik.",
        ["36", "24", "72", "48"],
        [(1, "KPK(12, 18) = 36 detik"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "12 = 2²×3; 18 = 2×3² ⟹ KPK = 2²×3² = 36"))
    add("Dua lonceng berbunyi masing-masing setiap 8 menit dan 12 menit. Jika keduanya berbunyi bersama pada pukul 07.00, keduanya berbunyi bersama lagi pada pukul ….",
        ["07.24", "07.36", "07.48", "08.00"],
        [(1, "KPK(8, 12) = 24 menit"), (0, ".")],
        otype="time")
    Q[-1]["expl"].append((1, "07.00 + 24 menit = 07.24"))
    add("Rata-rata nilai 5 siswa adalah 80. Jika nilai seorang siswa lain sebesar 92 digabungkan, rata-rata menjadi 82. Nilai siswa yang digabungkan adalah ….",
        ["92", "90", "88", "85"],
        [(1, "Jumlah 5 siswa = 5 × 80 = 400"), (0, "; "),
         (1, "jumlah 6 siswa = 6 × 82 = 492"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "Nilai siswa baru = 492 − 400 = 92"))
    add("Rata-rata berat 4 siswa adalah 45 kg. Jika dua siswa lain yang masing-masing beratnya 40 kg ikut bergabung, rata-rata berat seluruh siswa menjadi … kg.",
        ["43,3", "43", "44", "44,5"],
        [(1, "Total berat = 4×45 + 2×40 = 180 + 80 = 260 kg"), (0, ".")],
        otype="dec")
    Q[-1]["expl"].append((1, "Rata-rata = 260 ÷ 6 = 43,3 kg"))
    add("Harga rata-rata 6 buah buku adalah Rp15.000. Jika sebuah buku seharga Rp24.000 dikeluarkan, rata-rata harga buku yang tersisa adalah ….",
        ["Rp13.200", "Rp14.000", "Rp13.800", "Rp12.800"],
        [(1, "Jumlah awal = 6 × 15.000 = 90.000"), (0, "; sisa = 90.000 − 24.000 = 66.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Rata-rata = 66.000 ÷ 5 = 13.200"))
    add("Jika x + y = 38 dan x − y = 12, maka nilai x adalah ….",
        ["25", "13", "19", "26"],
        [(1, "Jumlahkan kedua persamaan: 2x = 50"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "x = 25"))
    add("Jumlah dua bilangan adalah 34 dan selisihnya 6. Hasil kali kedua bilangan adalah ….",
        ["280", "260", "300", "288"],
        [(1, "a = (34 + 6)/2 = 20"), (0, " dan "), (1, "b = (34 − 6)/2 = 14"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "a × b = 20 × 14 = 280"))
    add("Jika 2x + 5 = 19, maka nilai x + 3 adalah ….",
        ["10", "9", "8", "11"],
        [(1, "2x = 19 − 5 = 14 ⟹ x = 7"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "x + 3 = 7 + 3 = 10"))
    add("Perhatikan pola bilangan 2, 5, 9, 14, … Dua suku berikutnya adalah ….",
        ["20, 27", "19, 25", "21, 28", "18, 24"],
        [(1, "Beda: +3, +4, +5, +6, +7"), (0, ".")],
        otype="str")
    Q[-1]["expl"].append((1, "14 + 6 = 20; 20 + 7 = 27"))
    add("Jumlah tiga bilangan bulat berurutan adalah 45. Bilangan terbesar adalah ….",
        ["16", "15", "17", "14"],
        [(1, "n + (n+1) + (n+2) = 45 ⟹ 3n + 3 = 45 ⟹ n = 14"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "Bilangan terbesar = 14 + 2 = 16"))
    add("Perbandingan uang A dan B adalah 5 : 4. Jika uang B Rp80.000, maka uang A adalah ….",
        ["Rp100.000", "Rp96.000", "Rp90.000", "Rp64.000"],
        [(1, "A = 5/4 × 80.000 = 100.000"), (0, ".")],
        otype="money")
    add("Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Jika kecepatannya ditambah 20 km/jam, waktu yang diperlukan untuk menempuh jarak yang sama adalah … jam.",
        ["1,5", "1,6", "1,75", "2"],
        [(1, "Kecepatan awal = 120 ÷ 2 = 60 km/jam; kecepatan baru = 80 km/jam"), (0, ".")],
        otype="dec")
    Q[-1]["expl"].append((1, "Waktu = 120 ÷ 80 = 1,5 jam"))
    add("Ayah berangkat ke kantor pukul 06.30 dan tiba pukul 07.06 dengan kecepatan rata-rata 48 km/jam. Jarak rumah ke kantor adalah … km.",
        ["28,8", "32", "26,4", "30"],
        [(1, "Lama perjalanan = 36 menit = 0,6 jam"), (0, ".")],
        otype="dec")
    Q[-1]["expl"].append((1, "Jarak = 48 × 0,6 = 28,8 km"))
    add("Sebuah botol berisi 2,5 liter air. Air tersebut dituang ke beberapa gelas sama besar sehingga setiap gelas terisi 0,25 liter. Banyak gelas yang digunakan adalah ….",
        ["10 gelas", "8 gelas", "12 gelas", "6 gelas"],
        [(1, "2,5 ÷ 0,25 = 10 gelas"), (0, ".")],
        otype="int")
    add("Ibu memiliki 5 kg tepung terigu. Sebanyak 40% tepung digunakan untuk membuat kue. Sisa tepung Ibu adalah … kg.",
        ["3", "2,5", "2", "3,5"],
        [(1, "Terpakai = 40% × 5 = 2 kg"), (0, ".")],
        otype="dec")
    Q[-1]["expl"].append((1, "Sisa = 5 − 2 = 3 kg"))
    add("Rina membeli 3 buku seharga Rp5.000 per buku dan 2 pensil seharga Rp2.000 per pensil. Ia membayar dengan selembar uang Rp50.000. Kembalian yang diterima Rina adalah ….",
        ["Rp31.000", "Rp29.000", "Rp25.000", "Rp34.000"],
        [(1, "Belanja = 3×5.000 + 2×2.000 = 15.000 + 4.000 = 19.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Kembalian = 50.000 − 19.000 = 31.000"))
    add("Harga 1 lusin pensil Rp36.000. Jika Raka membeli 5 pensil, ia harus membayar ….",
        ["Rp15.000", "Rp18.000", "Rp12.000", "Rp16.000"],
        [(1, "Harga per pensil = 36.000 ÷ 12 = 3.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "5 × 3.000 = 15.000"))
    add("Denah sebidang tanah berbentuk persegi panjang berukuran 4 cm × 3 cm dengan skala 1 : 500. Luas tanah sebenarnya adalah … m².",
        ["300", "250", "320", "280"],
        [(1, "Panjang = 4 × 500 = 2.000 cm = 20 m; lebar = 3 × 500 = 1.500 cm = 15 m"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "Luas = 20 × 15 = 300 m²"))
    add("Pada peta berskala 1 : 1.000.000, jarak kota P dan Q adalah 7 cm. Jarak sebenarnya kedua kota adalah … km.",
        ["70", "700", "7", "0,7"],
        [(1, "Jarak sebenarnya = 7 × 1.000.000 cm = 7.000.000 cm = 70 km"), (0, ".")],
        otype="int")
    add("Semua siswa kelas X mengikuti kegiatan ekstrakurikuler. Sebagian siswa kelas X mengikuti Paskibra. Simpulan yang benar adalah ….",
        ["Sebagian siswa Paskibra adalah siswa kelas X", "Semua siswa Paskibra adalah siswa kelas X",
         "Semua siswa kelas X adalah anggota Paskibra", "Tidak ada siswa Paskibra dari kelas X"],
        [(0, "Premis: kelas X ⊂ peserta ekstrakurikuler dan kelas X ∩ Paskibra ≠ ∅."),
         (1, "Simpulan yang pasti benar: sebagian Paskibra berasal dari kelas X.")])
    add("Jika hujan turun, jalan menjadi basah. Saat ini jalan tidak basah. Simpulan yang tepat adalah ….",
        ["Hujan tidak turun", "Hujan sedang turun", "Jalan baru saja disiram", "Cuaca sedang mendung"],
        [(1, "Kontraposisi dari implikasi: tidak basah ⟹ tidak hujan.")])
    add("Andi dapat menyelesaikan sebuah pekerjaan dalam 6 jam, sedangkan Budi dapat menyelesaikan pekerjaan yang sama dalam 3 jam. Jika mereka bekerja bersama-sama, pekerjaan tersebut selesai dalam … jam.",
        ["2", "3", "4", "1,5"],
        [(1, "1/t = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2"), (0, ".")],
        otype="dec")
    Q[-1]["expl"].append((1, "t = 2 jam"))
    add("Andi menabung Rp10.000 setiap hari Senin dan Rp15.000 setiap hari Jumat selama 4 minggu. Total tabungan Andi adalah ….",
        ["Rp100.000", "Rp110.000", "Rp90.000", "Rp120.000"],
        [(1, "Per minggu = 10.000 + 15.000 = 25.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Total = 4 × 25.000 = 100.000"))
    add("Diketahui pola bilangan 1, 3, 7, 13, … Suku ke-6 pola tersebut adalah ….",
        ["31", "21", "19", "23"],
        [(1, "Beda bertambah 2: +2, +4, +6, +8, +10"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "13 + 8 = 21; 21 + 10 = 31"))
    add("Pola pertama terdiri atas 1 persegi, pola kedua 4 persegi, pola ketiga 9 persegi, dan seterusnya. Banyak persegi pada pola ke-7 adalah ….",
        ["49", "42", "56", "64"],
        [(1, "Pola ke-n = n² ⟹ pola ke-7 = 7² = 49"), (0, ".")],
        otype="int")
    add("Harga sebuah barang Rp1.000.000. Toko memberi diskon 20%, kemudian pembeli dikenai pajak 10% dari harga setelah diskon. Total yang harus dibayar pembeli adalah ….",
        ["Rp880.000", "Rp800.000", "Rp900.000", "Rp860.000"],
        [(1, "Setelah diskon = 1.000.000 × 0,8 = 800.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Total = 800.000 × 1,1 = 880.000"))
    add("Di dalam kandang terdapat ayam dan kambing. Jumlah kepala seluruhnya 35 dan jumlah kaki seluruhnya 100. Banyak kambing di kandang adalah ….",
        ["15 ekor", "10 ekor", "20 ekor", "12 ekor"],
        [(1, "A + K = 35 dan 2A + 4K = 100"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "2(35 − K) + 4K = 100 ⟹ 70 + 2K = 100 ⟹ K = 15"))
    add("Seorang pedagang membeli 40 kg beras dengan harga Rp10.000 per kg, kemudian menjualnya Rp12.000 per kg. Keuntungan pedagang tersebut adalah ….",
        ["Rp80.000", "Rp60.000", "Rp100.000", "Rp70.000"],
        [(1, "Untung per kg = 12.000 − 10.000 = 2.000"), (0, ".")],
        otype="money")
    Q[-1]["expl"].append((1, "Total untung = 40 × 2.000 = 80.000"))

    return Q
