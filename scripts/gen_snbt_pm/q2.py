# -*- coding: utf-8 -*-
"""SNBT PM bank — part 2: kecepatan/jarak/waktu & pekerjaan bersama (30 soal)."""

def load():
    Q = []
    def add(prompt, fmt, calc, dist, expl, otype="int"):
        # calc: function(fmt)->correct value OR constant
        correct = calc(fmt) if callable(calc) else calc
        Q.append(dict(prompt=prompt, fmt=fmt, correct=correct, dist=dist,
                      expl=expl, otype=otype, calc=calc))
    def fmt(tpl, f): return tpl.format(**f)

    # ---------- 31-45 : KECEPATAN / JARAK / WAKTU ----------
    add("Sebuah mobil menempuh jarak {j} km dalam waktu {w} jam. Kecepatan rata-rata mobil tersebut adalah … km/jam.",
        dict(j=240, w=4), lambda f: f["j"] // f["w"], [50, 55, 70],
        [(1, "v = s/t = 240/4 = 60 km/jam")], otype="int")

    add("Pak Anton mengendarai sepeda motor dengan kecepatan rata-rata {v} km/jam selama {w} jam. Jarak yang ditempuh Pak Anton adalah … km.",
        dict(v=48, w=2.5), lambda f: int(f["v"] * f["w"]), [96, 108, 130],
        [(1, "s = v × t = 48 × 2,5 = 120 km")], otype="int")

    add("Sebuah kereta api melaju dengan kecepatan {v} km/jam dan menempuh jarak {j} km tanpa berhenti. Waktu tempuh kereta tersebut adalah … jam.",
        dict(v=80, j=320), lambda f: f["j"] // f["v"], [3, 5, 6],
        [(1, "t = s/v = 320/80 = 4 jam")], otype="int")

    add("Dua kota berjarak {j} km. Budi berkendara dari kota A ke kota B dengan kecepatan rata-rata {v} km/jam dan tiba dalam waktu {t} jam. Jika ia berangkat pukul {h}.{m}, ia tiba pukul ….",
        dict(j=180, v=60, t=3, h=7, m=30), "10.30", ["10.00", "10.45", "11.00"],
        [(1, "t = 180/60 = 3 jam"), (0, "; "), (1, "07.30 + 3 jam = 10.30")], otype="str")

    add("Sebuah bus berangkat dari kota P pukul {h1}.{m1} dan tiba di kota Q pukul {h2}.{m2} setelah menempuh jarak {j} km. Kecepatan rata-rata bus adalah … km/jam.",
        dict(h1=6, m1=30, h2=9, m2=30, j=210), 70, [60, 65, 75],
        [(0, "Lama perjalanan: "), (1, "09.30 − 06.30 = 3 jam"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "v = 210/3 = 70 km/jam"))

    add("Adi dan Budi berangkat dari kota X menuju kota Y yang berjarak {j} km. Adi berkendara dengan kecepatan {va} km/jam, sedangkan Budi {vb} km/jam. Jika keduanya berangkat bersamaan, selisih waktu tiba mereka adalah … menit.",
        dict(j=120, va=60, vb=40), 60, [30, 40, 50],
        [(1, "tA = 120/60 = 2 jam"), (0, ", "), (1, "tB = 120/40 = 3 jam")],
        otype="int")
    Q[-1]["expl"].append((1, "Selisih = 3 − 2 = 1 jam = 60 menit"))

    add("Dua mobil bergerak saling mendekat dari dua kota yang berjarak {j} km. Kecepatan masing-masing {v1} km/jam dan {v2} km/jam. Jika berangkat bersamaan, mereka akan berpapasan setelah … jam.",
        dict(j=330, v1=60, v2=50), 3, [2, 2.5, 3.5],
        [(0, "Kecepatan relatif mendekat = "), (1, "60 + 50 = 110 km/jam"), (0, ".")],
        otype="dec")
    Q[-1]["expl"].append((1, "t = 330/110 = 3 jam"))

    add("Dua orang bersepeda dari titik yang sama dengan arah berlawanan. Kecepatan mereka {v1} m/menit dan {v2} m/menit. Setelah {t} menit, jarak pisah mereka adalah … m.",
        dict(v1=150, v2=200, t=10), 3500, [3000, 3250, 3750],
        [(1, "Jarak = (150 + 200) × 10 = 350 × 10 = 3500 m")], otype="int")

    add("Sebuah perahu motor bergerak searah arus sungai dengan kecepatan {v} km/jam di air tenang. Kecepatan arus sungai {c} km/jam. Jarak yang ditempuh perahu dalam {t} jam mengikuti arus adalah … km.",
        dict(v=18, c=2, t=3), 60, [48, 54, 66],
        [(1, "Kecepatan efektif = 18 + 2 = 20 km/jam"), (0, "; "), (1, "s = 20 × 3 = 60 km")], otype="int")

    add("Sebuah perahu bergerak melawan arus sungai. Kecepatan perahu di air tenang {v} km/jam dan kecepatan arus {c} km/jam. Jika perahu menempuh jarak {j} km melawan arus, waktu yang dibutuhkan adalah … jam.",
        dict(v=16, c=4, j=60), 5, [3, 4, 6],
        [(1, "Kecepatan efektif = 16 − 4 = 12 km/jam"), (0, "; "), (1, "t = 60/12 = 5 jam")], otype="int")

    add("Sebuah kendaraan menempuh perjalanan {d1} km dengan kecepatan {v1} km/jam, kemudian {d2} km dengan kecepatan {v2} km/jam tanpa berhenti. Kecepatan rata-rata seluruh perjalanan adalah … km/jam.",
        dict(d1=120, v1=40, d2=180, v2=60), 50, [45, 48, 55],
        [(1, "t₁ = 120/40 = 3 jam"), (0, "; "), (1, "t₂ = 180/60 = 3 jam")],
        otype="int")
    Q[-1]["expl"].append((1, "v̄ = (120 + 180)/(3 + 3) = 300/6 = 50 km/jam"))

    add("Sebuah kendaraan menempuh jarak {j} km dengan kecepatan {v1} km/jam selama separuh pertama dan kecepatan {v2} km/jam selama separuh kedua. Waktu total perjalanan adalah … jam.",
        dict(j=120, v1=40, v2=60), 2.5, [2, 2.25, 3],
        [(1, "t₁ = 60/40 = 1,5 jam"), (0, "; "), (1, "t₂ = 60/60 = 1 jam")],
        otype="dec")
    Q[-1]["expl"].append((1, "t total = 1,5 + 1 = 2,5 jam"))

    add("Dinda berangkat dari rumah pukul {h}.{m} menuju sekolah yang berjarak {j} km dengan kecepatan {v} km/jam. Dinda tiba di sekolah pukul ….",
        dict(h=6, m=30, j=15, v=30), "7.00", ["6.45", "7.15", "7.30"],
        [(1, "t = 15/30 = 0,5 jam = 30 menit"), (0, "; "), (1, "06.30 + 30 menit = 07.00")], otype="str")

    add("Rudi bersepeda dari rumah ke taman dengan kecepatan {v} km/jam dan kembali pulang melalui jalur yang sama dengan kecepatan {v2} km/jam. Jika jarak rumah–taman {j} km, waktu total perjalanan pulang-pergi adalah … menit.",
        dict(v=12, v2=18, j=9), 75, [60, 70, 90],
        [(1, "t₁ = 9/12 = 0,75 jam"), (0, "; "), (1, "t₂ = 9/18 = 0,5 jam")],
        otype="int")
    Q[-1]["expl"].append((1, "Total = 1,25 jam = 75 menit"))

    add("Sebuah kereta api panjang {l} m melaju dengan kecepatan {v} m/detik. Waktu yang diperlukan kereta untuk melewati sebuah jembatan sepanjang {b} m adalah … detik.",
        dict(l=120, v=20, b=480), 30, [24, 28, 36],
        [(1, "Jarak total = 120 + 480 = 600 m"), (0, "; "), (1, "t = 600/20 = 30 detik")], otype="int")

    # ---------- 46-60 : PEKERJAAN BERSAMA / WAKTU ----------
    add("Pak Ahmad dapat menyelesaikan sebuah pekerjaan dalam {a} hari, sedangkan Pak Budi dalam {b} hari. Jika mereka bekerja bersama, pekerjaan tersebut selesai dalam … hari.",
        dict(a=6, b=12), 4, [3, 5, 9],
        [(1, "1/t = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4"), (0, "; "), (1, "t = 4 hari")], otype="int")

    add("Mesin A dapat mengisi penuh sebuah kolam dalam {a} jam dan mesin B dalam {b} jam. Jika kedua mesin digunakan bersamaan, kolam akan penuh dalam … jam.",
        dict(a=4, b=6), 2.4, [2, 2.5, 5],
        [(1, "1/t = 1/4 + 1/6 = 3/12 + 2/12 = 5/12"), (0, "; "), (1, "t = 12/5 = 2,4 jam")], otype="dec")

    add("Paijo dapat mencangkul sebidang sawah dalam {a} hari. Jika dikerjakan bertiga dengan kecepatan yang sama, sawah tersebut selesai dalam … hari.",
        dict(a=12), 4, [3, 6, 9],
        [(0, "Tiga orang dengan kecepatan sama ⟹ waktu menjadi sepertiganya: "), (1, "12/3 = 4 hari")], otype="int")

    add("Sebuah pekerjaan dapat diselesaikan oleh {n} pekerja dalam {d} hari. Jika pekerjaan harus selesai dalam {d2} hari, banyak pekerja tambahan yang dibutuhkan adalah … orang.",
        dict(n=8, d=12, d2=8), 4, [2, 6, 8],
        [(1, "Total pekerjaan = 8 × 12 = 96 orang-hari"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "Pekerja untuk 8 hari = 96/8 = 12 ⟹ tambahan = 12 − 8 = 4 orang"))

    add("Tiga pipa masing-masing dapat mengosongkan sebuah tangki dalam {a}, {b}, dan {c} jam. Jika ketiganya dibuka bersamaan, tangki kosong dalam … jam.",
        dict(a=3, b=6, c=2), 1, [1.5, 2, 3],
        [(1, "1/t = 1/3 + 1/6 + 1/2 = 2/6 + 1/6 + 3/6 = 6/6 = 1"), (0, "; "), (1, "t = 1 jam")], otype="int")

    add("Seorang penjahit dapat membuat {n} potong baju dalam {d} hari. Dengan kecepatan yang sama, banyak baju yang dapat dibuat dalam {d2} hari adalah … potong.",
        dict(n=6, d=4, d2=10), 15, [12, 14, 16],
        [(1, "Produktivitas = 6/4 = 1,5 baju/hari"), (0, "; "), (1, "10 × 1,5 = 15 baju")], otype="int")

    add("Sebuah proyek diperkirakan selesai dalam {d} hari oleh {n} pekerja. Setelah dikerjakan {d1} hari, pekerjaan dihentikan selama {s} hari. Agar proyek tetap selesai tepat waktu, banyak pekerja yang harus ditambahkan adalah … orang.",
        dict(d=30, n=15, d1=10, s=5), 5, [3, 4, 10],
        [(1, "Sisa waktu = 30 − 10 − 5 = 15 hari"), (0, "; sisa pekerjaan untuk "), (1, "15 orang × 20 hari")],
        otype="int")
    Q[-1]["expl"].append((1, "Pekerja baru = (15×20)/15 = 20 ⟹ tambahan 5 orang"))

    add("Andi dapat mengecat sebuah rumah dalam {a} hari, sedangkan Bayu dalam {b} hari. Jika mereka bekerja bersama-sama selama {c} hari, bagian rumah yang belum selesai adalah ….",
        dict(a=8, b=12, c=2), "7/12", ["1/2", "2/3", "5/6"],
        [(1, "1/8 + 1/12 = 3/24 + 2/24 = 5/24 per hari")], otype="str")
    Q[-1]["expl"].append((1, "2 hari = 10/24 = 5/12; sisa = 1 − 5/12 = 7/12"))

    add("Sebuah bak mandi dapat diisi penuh oleh keran A dalam {a} menit dan dikuras habis oleh lubang pembuangan dalam {b} menit. Jika keran A dibuka dan lubang pembuangan tidak ditutup, waktu yang dibutuhkan bak terisi penuh adalah … menit.",
        dict(a=10, b=15), 30, [6, 12, 25],
        [(1, "1/t = 1/10 − 1/15 = 3/30 − 2/30 = 1/30"), (0, "; "), (1, "t = 30 menit")], otype="int")

    add("Jika {p} orang dapat menyelesaikan pekerjaan dalam {h} jam, maka {p2} orang dapat menyelesaikan pekerjaan yang sama dalam … jam.",
        dict(p=5, h=8, p2=4), 10, [6, 7, 9],
        [(1, "Waktu berbanding terbalik dengan banyak pekerja: t = 5×8/4 = 10 jam")], otype="int")

    add("Kakak dapat menyelesaikan pekerjaan rumah dalam {a} jam dan adik dalam {b} jam. Jika kakak mengerjakan {c} jam lebih dulu lalu dibantu adik, total waktu penyelesaian sejak kakak mulai adalah … jam.",
        dict(a=6, b=12, c=3), lambda f: 5, [4, 4.5, 6],
        [(1, "Dalam 3 jam kakak menyelesaikan 3/6 = 1/2 bagian; sisa 1/2")], otype="int")
    Q[-1]["expl"].append((1, "Bersama: 1/6 + 1/12 = 1/4 per jam ⟹ (1/2) ÷ (1/4) = 2 jam"))
    Q[-1]["expl"].append((1, "Total = 3 + 2 = 5 jam"))

    add("Sebuah perusahaan memproduksi {n} unit barang dengan {m} mesin dalam waktu {h} jam. Banyak unit yang diproduksi oleh {m2} mesin dalam waktu {h2} jam adalah … unit.",
        dict(n=600, m=4, h=6, m2=6, h2=8), 1200, [900, 1000, 1400],
        [(1, "Produksi per mesin per jam = 600/(4×6) = 25 unit")], otype="int")
    Q[-1]["expl"].append((1, "6 mesin × 8 jam × 25 = 1200 unit"))

    add("Pekerjaan direncanakan selesai dalam {d} hari oleh {n} pekerja. Jika hanya tersedia {n2} pekerja, pekerjaan akan selesai dalam … hari.",
        dict(d=15, n=12, n2=9), 20, [11, 16, 18],
        [(1, "Total = 15×12 = 180 orang-hari"), (0, "; "), (1, "t = 180/9 = 20 hari")], otype="int")

    add("Seorang tukang dapat memasang keramik seluas {a} m² dalam {d} hari. Dengan kecepatan yang sama, luas keramik yang dapat dipasang dalam {d2} hari adalah … m².",
        dict(a=12, d=3, d2=7), 28, [21, 24, 32],
        [(1, "12/3 = 4 m²/hari"), (0, "; "), (1, "7 × 4 = 28 m²")], otype="int")

    add("Dua pompa air memiliki debit berbeda. Pompa pertama dapat mengosongkan kolam dalam {a} jam, pompa kedua dalam {b} jam. Jika pompa pertama bekerja {c} jam kemudian disusul pompa kedua, total waktu pengosongan sejak pompa pertama dinyalakan adalah … jam.",
        dict(a=6, b=12, c=2), lambda f: 14/3, [4, 5, 6],
        [(1, "Dalam 2 jam, pompa 1 mengosongkan 2/6 = 1/3; sisa 2/3")], otype="dec")
    Q[-1]["expl"].append((1, "Bersama: 1/6 + 1/12 = 1/4 per jam ⟹ (2/3) ÷ (1/4) = 8/3 jam"))
    Q[-1]["expl"].append((1, "Total = 2 + 8/3 = 14/3 jam = 4⅔ jam"))

    return Q
