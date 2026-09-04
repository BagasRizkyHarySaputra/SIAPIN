# -*- coding: utf-8 -*-
"""SNBT PM bank — part 3: umur, campuran, persen, rasio (39 soal)."""

def load():
    Q = []
    def add(prompt, fmt, calc, dist, expl, otype="int"):
        correct = calc(fmt) if callable(calc) else calc
        Q.append(dict(prompt=prompt, fmt=fmt, correct=correct, dist=dist,
                      expl=expl, otype=otype, calc=calc))
    def fmt(tpl, f): return tpl.format(**f)

    def fnum(x):
        s = f"{x:.1f}".rstrip('0').rstrip('.')
        return s

    # ---------- UMUR (10) ----------
    add("Umur ayah {p} kali umur anaknya. Jika {n} tahun yang lalu jumlah umur mereka {s} tahun, umur anak sekarang adalah … tahun.",
        dict(p=4, n=5, s=60),
        lambda f: (f['s'] + 2*f['n'])/(f['p']+1),
        [12, 15, 18],
        [(1, "A = 4a dan (A − 5) + (a − 5) = 60 ⟹ A + a = 70")],
        otype="int")
    Q[-1]["expl"].append((1, "5a = 70 ⟹ a = 14"))
    add("Umur seorang ayah {p} kali umur anaknya. Selisih umur mereka {sel} tahun. Umur ayah sekarang adalah … tahun.",
        dict(p=3, sel=28), lambda f: f['sel']*f['p']/(f['p']-1), [36, 40, 45],
        [(1, "A − a = 28 dan A = 3a ⟹ 2a = 28 ⟹ a = 14")], otype="int")
    Q[-1]["expl"].append((1, "A = 3 × 14 = 42"))
    add("Dua tahun yang lalu umur Andi {k} kali umur Budi. Delapan belas tahun kemudian umur Andi akan menjadi {r} kali umur Budi. Umur Budi sekarang adalah … tahun.",
        dict(k=3, r=2), lambda f: 22, [18, 20, 24],
        [(1, "Dua tahun lalu: A − 2 = 3(B − 2) ⟹ A = 3B − 4")], otype="int")
    Q[-1]["expl"].append((1, "Delapan belas tahun lagi: A + 18 = 2(B + 18) ⟹ A = 2B + 18"))
    Q[-1]["expl"].append((1, "3B − 4 = 2B + 18 ⟹ B = 22"))
    add("Umur Ibu {p} kali umur Dini. Enam tahun yang lalu umur Ibu {q} kali umur Dini. Umur Dini sekarang adalah … tahun.",
        dict(p=3, q=5), lambda f: 12, [10, 14, 16],
        [(1, "I = 3D dan (I − 6) = 5(D − 6)")], otype="int")
    Q[-1]["expl"].append((1, "3D − 6 = 5D − 30 ⟹ 2D = 24 ⟹ D = 12"))
    add("Perbandingan umur Kakak dan Adik {p} : {q}. Jika jumlah umur mereka {s} tahun, selisih umur mereka adalah … tahun.",
        dict(p=7, q=4, s=44), lambda f: f['s']*(f['p']-f['q'])/(f['p']+f['q']), [10, 12, 14],
        [(1, "K : A = 7 : 4 ⟹ K = 28, A = 16 (jumlah 44)")], otype="int")
    Q[-1]["expl"].append((1, "Selisih = 28 − 16 = 12"))
    add("Perbandingan umur Ayah, Ibu, dan Anak adalah {a} : {b} : {c}. Jika jumlah umur Ayah dan Anak {s} tahun, umur Ibu adalah … tahun.",
        dict(a=9, b=8, c=2, s=44), lambda f: f['s']*f['b']/(f['a']+f['c']), [30, 34, 36],
        [(1, "Ayah : Ibu : Anak = 9 : 8 : 2")], otype="int")
    Q[-1]["expl"].append((1, "Ayah + Anak = 11 bagian = 44 ⟹ 1 bagian = 4"))
    Q[-1]["expl"].append((1, "Ibu = 8 × 4 = 32"))
    add("Lima tahun lalu umur Rina sama dengan {p} kali umur Sari. Tahun ini umur Rina {q} tahun lebih tua dari Sari. Umur Sari sekarang adalah … tahun.",
        dict(p=3, q=10), lambda f: 10, [12, 14, 16],
        [(1, "R − 5 = 3(S − 5) ⟹ R = 3S − 10; juga R = S + 10")], otype="int")
    Q[-1]["expl"].append((1, "3S − 10 = S + 10 ⟹ 2S = 20 ⟹ S = 10"))
    add("Sekarang umur ayah {p} tahun lebih tua dari anaknya. {n} tahun yang lalu umur ayah {k} kali umur anaknya. Umur anak sekarang adalah … tahun.",
        dict(p=30, n=6, k=4), lambda f: 16, [12, 14, 18],
        [(1, "A = a + 30; (a + 30 − 6) = 4(a − 6)")], otype="int")
    Q[-1]["expl"].append((1, "a + 24 = 4a − 24 ⟹ 3a = 48 ⟹ a = 16"))
    add("Jumlah umur kakak dan adik sekarang {s} tahun. Dua tahun lalu perbandingan umur mereka {p} : {q}. Umur kakak sekarang adalah … tahun.",
        dict(s=32, p=4, q=3), lambda f: 18, [14, 16, 20],
        [(1, "K + A = 32 ⟹ A = 32 − K")], otype="int")
    Q[-1]["expl"].append((1, "(K − 2)/(A − 2) = 4/3 ⟹ 3K − 6 = 4A − 8 ⟹ 3K − 4A = −2"))
    Q[-1]["expl"].append((1, "3K − 4(32 − K) = −2 ⟹ 7K = 126 ⟹ K = 18"))
    add("Perbandingan umur Dewi dan Sari sekarang {p} : {q}. {n} tahun yang lalu perbandingan umur mereka {r} : {s}. Umur Dewi sekarang adalah … tahun.",
        dict(p=7, q=5, n=6, r=3, s=2), lambda f: 42, [30, 35, 49],
        [(1, "D : S = 7 : 5 ⟹ D = 7x, S = 5x")], otype="int")
    Q[-1]["expl"].append((1, "(7x − 6)/(5x − 6) = 3/2 ⟹ 14x − 12 = 15x − 18 ⟹ x = 6"))
    Q[-1]["expl"].append((1, "D = 7 × 6 = 42"))

    # ---------- CAMPURAN (10) ----------
    add("Berapa mL air harus ditambahkan ke {a} mL larutan garam {p}% agar kadar garamnya menjadi {q}%?",
        dict(a=200, p=20, q=10), lambda f: f['a']*f['p']/f['q'] - f['a'], [100, 150, 250],
        [(1, "Garam tetap: 20% × 200 = 40 mL")], otype="int")
    Q[-1]["expl"].append((1, "10% × (200 + x) = 40 ⟹ 200 + x = 400 ⟹ x = 200"))
    add("Berapa gram gula harus ditambahkan ke {a} gram larutan gula {p}% agar kadarnya menjadi {q}%?",
        dict(a=300, p=10, q=25), lambda f: f['a']*(f['q']-f['p'])/(100-f['q']), [40, 50, 80],
        [(1, "Gula awal = 10% × 300 = 30 g; air = 270 g")], otype="int")
    Q[-1]["expl"].append((1, "(30 + x)/(300 + x) = 25% ⟹ 120 + 4x = 300 + x ⟹ 3x = 180 ⟹ x = 60"))
    add("Berapa liter larutan {p}% harus dicampur dengan {b} liter larutan {q}% agar diperoleh larutan {r}%?",
        dict(p=40, b=60, q=10, r=25), lambda f: f['b']*(f['r']-f['q'])/(f['p']-f['r']), [30, 40, 90],
        [(1, "40a + 10×60 = 25(a + 60)")], otype="int")
    Q[-1]["expl"].append((1, "40a + 600 = 25a + 1500 ⟹ 15a = 900 ⟹ a = 60"))
    add("Berapa kg kopi seharga Rp{rp}/kg harus dicampur dengan {b} kg kopi seharga Rp{rp2}/kg agar rata-rata harga campuran Rp{rp3}/kg?",
        dict(rp=45000, b=40, rp2=30000, rp3=35000), lambda f: f['b']*(f['rp3']-f['rp2'])/(f['rp']-f['rp3']), [10, 20, 40],
        [(1, "45000x + 30000×40 = 35000(x + 40)")], otype="int")
    Q[-1]["expl"].append((1, "45000x + 1200000 = 35000x + 1400000 ⟹ 10000x = 200000 ⟹ x = 20"))
    add("Sebanyak {a} liter susu {p}% dicampur {b} liter susu {q}%. Kadar lemak campuran adalah …%.",
        dict(a=4, p=2, b=6, q=5), lambda f: (f['p']*f['a']+f['q']*f['b'])/(f['a']+f['b']), [3.2, 3.5, 4.2],
        [(1, "Lemak = 2%×4 + 5%×6 = 0,08 + 0,3 = 0,38 L")], otype="dec")
    Q[-1]["expl"].append((1, "Kadar = 0,38/10 × 100% = 3,8%"))
    add("Sebanyak {a} gram larutan asam {p}% dicampur dengan {b} gram larutan asam {q}%. Konsentrasi campuran adalah …%.",
        dict(a=150, p=30, b=50, q=10), lambda f: (f['p']*f['a']+f['q']*f['b'])/(f['a']+f['b']), [20, 22, 28],
        [(1, "Asam = 30%×150 + 10%×50 = 45 + 5 = 50 g")], otype="dec")
    Q[-1]["expl"].append((1, "50/200 × 100% = 25%"))
    add("Berapa liter air murni harus diuapkan dari {a} liter larutan garam {p}% agar kadarnya menjadi {q}%?",
        dict(a=120, p=20, q=30), lambda f: f['a'] - f['a']*f['p']/f['q'], [30, 40, 50],
        [(1, "Garam = 20% × 120 = 24 L")], otype="int")
    Q[-1]["expl"].append((1, "24/(120 − x) = 30% ⟹ 24 = 36 − 0,3x ⟹ x = 40"))
    add("Berapa mL larutan garam {p}% dan larutan garam {q}% harus dicampur agar diperoleh {v} mL larutan {r}%? (masing-masing … mL)",
        dict(p=30, q=10, v=200, r=20), lambda f: (f['v']*(f['r']-f['q']))/(f['p']-f['q']), [50, 80, 120],
        [(1, "30x + 10(200 − x) = 20×200 ⟹ 20x = 2000 ⟹ x = 100")], otype="int")
    Q[-1]["expl"].append((1, "Jadi 100 mL larutan 30% dan 100 mL larutan 10%"))
    add("Sebanyak {a} gram larutan gula {p}% dicampur dengan {b} gram larutan gula {q}%. Konsentrasi larutan campuran adalah …%.",
        dict(a=200, p=25, b=300, q=10), lambda f: (f['p']*f['a']+f['q']*f['b'])/(f['a']+f['b']), [14, 16, 18],
        [(1, "Gula = 25%×200 + 10%×300 = 50 + 30 = 80 g")], otype="dec")
    Q[-1]["expl"].append((1, "Konsentrasi = 80/500 × 100% = 16%"))
    add("Sebanyak {a} mL larutan cuka {p}% dicampur air murni sehingga kadarnya menjadi {q}%. Banyak air yang ditambahkan adalah … mL.",
        dict(a=150, p=8, q=5), lambda f: f['a']*f['p']/f['q'] - f['a'], [60, 75, 100],
        [(1, "Cuka murni = 8% × 150 = 12 mL")], otype="int")
    Q[-1]["expl"].append((1, "12/(150 + x) = 5% ⟹ 150 + x = 240 ⟹ x = 90"))

    # ---------- PERSEN (11) ----------
    add("Harga sebuah barang setelah diskon {d}% adalah Rp{rp}. Harga sebelum diskon adalah ….",
        dict(d=20, rp=96000), lambda f: f['rp']/(1 - f['d']/100), [110000, 120000, 125000],
        [(1, "Rp96.000 adalah 80% dari harga awal")], otype="money")
    Q[-1]["expl"].append((1, "Harga awal = 96.000 ÷ 0,8 = 120.000"))
    add("Sebuah barang dijual dengan keuntungan {p}% seharga Rp{rp}. Harga belinya adalah ….",
        dict(p=25, rp=150000), lambda f: f['rp']/(1 + f['p']/100), [112000, 120000, 130000],
        [(1, "Harga jual = 125% × harga beli")], otype="money")
    Q[-1]["expl"].append((1, "HB = 150.000 ÷ 1,25 = 120.000"))
    add("Sebuah barang dibeli seharga Rp{hb} lalu dijual rugi {p}%. Harga jualnya adalah ….",
        dict(hb=80000, p=15), lambda f: f['hb']*(1 - f['p']/100), [60000, 68000, 72000],
        [(1, "Rugi 15% ⟹ harga jual = 85% × 80.000")], otype="money")
    Q[-1]["expl"].append((1, "0,85 × 80.000 = 68.000"))
    add("Sebuah toko memberi diskon {d}% lalu diskon tambahan {d2}%. Jika harga awal Rp{rp}, harga akhirnya adalah ….",
        dict(d=20, d2=10, rp=200000), lambda f: f['rp']*(1-f['d']/100)*(1-f['d2']/100), [136000, 140000, 150000],
        [(1, "Setelah diskon 20%: 200.000 × 0,8 = 160.000")], otype="money")
    Q[-1]["expl"].append((1, "Diskon 10% lagi: 160.000 × 0,9 = 144.000"))
    add("Gaji Andi bulan ini Rp{rp}. Jika gajinya naik {p}% bulan depan, gaji Andi bulan depan adalah ….",
        dict(rp=4500000, p=12), lambda f: f['rp']*(1+f['p']/100), [5000000, 5040000, 5100000],
        [(1, "Kenaikan = 12% × 4.500.000 = 540.000")], otype="money")
    Q[-1]["expl"].append((1, "Gaji baru = 4.500.000 + 540.000 = 5.040.000"))
    add("Nilai ujian Sari {x} dari skala {sk}. Persentase nilainya adalah …%.",
        dict(x=72, sk=90), lambda f: f['x']/f['sk']*100, [75, 78, 82],
        [(1, "72/90 × 100% = 80%")], otype="int")
    add("Harga sebuah tas naik dari Rp{rp1} menjadi Rp{rp2}. Persentase kenaikannya adalah …%.",
        dict(rp1=250000, rp2=300000), lambda f: (f['rp2']-f['rp1'])/f['rp1']*100, [15, 18, 25],
        [(1, "Kenaikan = 300.000 − 250.000 = 50.000")], otype="int")
    Q[-1]["expl"].append((1, "50.000/250.000 × 100% = 20%"))
    add("Harga sebuah baju turun dari Rp{rp1} menjadi Rp{rp2}. Persentase penurunannya adalah …%.",
        dict(rp1=160000, rp2=120000), lambda f: (f['rp1']-f['rp2'])/f['rp1']*100, [20, 25, 30],
        [(1, "Penurunan = 160.000 − 120.000 = 40.000")], otype="int")
    Q[-1]["expl"].append((1, "40.000/160.000 × 100% = 25%"))
    add("Dalam sebuah kelas terdapat {s} siswa. Jika {p}% di antaranya laki-laki, banyak siswa perempuan adalah ….",
        dict(s=40, p=55), lambda f: f['s']*(1-f['p']/100), [16, 18, 24],
        [(1, "Laki-laki = 55% × 40 = 22")], otype="int")
    Q[-1]["expl"].append((1, "Perempuan = 40 − 22 = 18"))
    add("Tabungan Rina setelah {n} bulan menjadi Rp{total} dengan bunga tunggal {p}% per tahun. Tabungan awal Rina adalah ….",
        dict(n=8, total=2160000, p=12), lambda f: f['total']/(1 + f['p']/100*f['n']/12), [1800000, 1900000, 2000000],
        [(1, "Bunga 8 bulan = 12% × 8/12 = 8%")], otype="money")
    Q[-1]["expl"].append((1, "Total = 108% × tabungan awal ⟹ awal = 2.160.000 ÷ 1,08 = 2.000.000"))
    add("Sebuah investasi Rp{rp} ditabung dengan bunga tunggal {p}% per tahun. Setelah {n} bulan, total uang yang diterima adalah ….",
        dict(rp=5000000, p=9, n=8), lambda f: f['rp']*(1+f['p']/100*f['n']/12), [5200000, 5300000, 5400000],
        [(1, "Bunga 8 bulan = 9% × 8/12 = 6%")], otype="money")
    Q[-1]["expl"].append((1, "Total = 5.000.000 × 1,06 = 5.300.000"))

    # ---------- RASIO (8) ----------
    add("Perbandingan uang Ali dan Budi adalah {p} : {q}. Jika uang Budi Rp{rp}, jumlah uang mereka adalah ….",
        dict(p=3, q=5, rp=75000), lambda f: f['rp']*(f['p']+f['q'])/f['q'], [110000, 120000, 130000],
        [(1, "Budi = 5 bagian = 75.000 ⟹ 1 bagian = 15.000")], otype="money")
    Q[-1]["expl"].append((1, "Ali = 3 × 15.000 = 45.000; jumlah = 120.000"))
    add("Perbandingan banyak kelereng Andi, Budi, dan Candra adalah {a} : {b} : {c}. Jika kelereng Candra {k} butir lebih banyak dari Budi, jumlah kelereng Andi dan Budi adalah ….",
        dict(a=3, b=5, c=8, k=15), lambda f: f['k']*(f['a']+f['b'])/(f['c']-f['b']), [36, 40, 45],
        [(1, "Candra − Budi = 3 bagian = 15 ⟹ 1 bagian = 5")], otype="int")
    Q[-1]["expl"].append((1, "Andi + Budi = (3+5) × 5 = 40"))
    add("Peta memiliki skala 1 : {sk}. Jika jarak pada peta {j} cm, jarak sebenarnya adalah … km.",
        dict(sk=2000000, j=4), lambda f: f['j']*f['sk']/100000, [40, 60, 80],
        [(1, "Jarak sebenarnya = 4 × 2.000.000 = 8.000.000 cm = 80 km")], otype="int")
    add("Skala sebuah peta 1 : {sk}. Jika jarak dua kota sebenarnya {km} km, jarak pada peta adalah … cm.",
        dict(sk=2500000, km=75), lambda f: f['km']*100000/f['sk'], [1.5, 2, 3],
        [(1, "75 km = 7.500.000 cm ⟹ 7.500.000 ÷ 2.500.000 = 3 cm")], otype="dec")
    add("Perbandingan panjang dan lebar sebuah persegi panjang adalah {p} : {q}. Jika kelilingnya {k} cm, luasnya adalah … cm².",
        dict(p=5, q=3, k=80), lambda f: (f['k']/2)**2 * f['p']*f['q']/(f['p']+f['q'])**2, [375, 400, 480],
        [(1, "p + l = 40 cm; p = 5x, l = 3x ⟹ 8x = 40 ⟹ x = 5")], otype="int")
    Q[-1]["expl"].append((1, "p = 25, l = 15 ⟹ L = 375"))
    add("Perbandingan banyak siswa laki-laki dan perempuan di kelas A adalah {p} : {q}. Jika selisihnya {s} orang, banyak siswa perempuan adalah ….",
        dict(p=7, q=5, s=6), lambda f: f['s']*f['q']/(f['p']-f['q']), [12, 15, 18],
        [(1, "Selisih = 2 bagian = 6 ⟹ 1 bagian = 3")], otype="int")
    Q[-1]["expl"].append((1, "Perempuan = 5 × 3 = 15"))
    add("Sebuah proyek direncanakan selesai dalam {h} hari oleh {p} pekerja. Jika pekerja ditambah {t} orang, proyek selesai dalam … hari.",
        dict(h=24, p=18, t=6), lambda f: f['h']*f['p']/(f['p']+f['t']), [16, 18, 20],
        [(1, "Pekerjaan tetap: 18 × 24 = (18+6) × d")], otype="int")
    Q[-1]["expl"].append((1, "432 = 24d ⟹ d = 18"))
    add("Perbandingan kecepatan dua mobil adalah {p} : {q}. Jika jarak yang ditempuh mobil kedua {j} km dalam waktu yang sama, jarak mobil pertama adalah … km.",
        dict(p=4, q=3, j=120), lambda f: f['j']*f['p']/f['q'], [140, 150, 160],
        [(1, "Jarak sebanding dengan kecepatan pada waktu sama")], otype="int")
    Q[-1]["expl"].append((1, "Jarak mobil 1 = 120 × 4/3 = 160 km"))

    return Q
