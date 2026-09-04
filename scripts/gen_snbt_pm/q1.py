# -*- coding: utf-8 -*-
"""SNBT PM bank — part 1: barisan & deret aritmatika/geometri (30 soal)."""

# Each Q = dict(
#   prompt=str,  # may contain {..} placeholders filled from fmt
#   fmt=dict,    # values for placeholders + numeric params
#   correct=float|int|str  # canonical correct answer
#   opts=[...],  # 4 strings (correct placed per key at build time)
#   expl=[(bold, text), ...] lines
# )
# answer key assigned by builder (balanced), options reordered there.

def load():
    Q = []
    def add(prompt, fmt, correct, dist, expl, otype="int"):
        Q.append(dict(prompt=prompt, fmt=fmt, correct=correct, dist=dist,
                      expl=expl, otype=otype))
    def fmt(tpl, f): return tpl.format(**f)

    # ---------- 1-12 : DERET ARITMATIKA ----------
    add("Diketahui barisan aritmetika {a}, {b}, {c}, …. Suku ke-{n} barisan tersebut adalah ….",
        dict(a=3, b=7, c=11, n=20), 79, [75, 77, 83],
        [(0, "Beda barisan: "), (1, "{b} − {a} = {d}"), (0, ".")],
        otype="int")
    Q[-1]["fmt"].update(d=4)
    Q[-1]["expl"].append((1, "Uₙ = a + (n−1)b = {a} + 19×4 = {a} + 76 = 79"))

    add("Suku ke-{n} dari barisan aritmetika {a}, {b}, {c}, … adalah ….",
        dict(a=5, b=9, c=13, n=15), 61, [57, 59, 65],
        [(0, "Beda "), (1, "b = 9 − 5 = 4"), (0, ", suku pertama a = 5.")],
        otype="int")
    Q[-1]["expl"].append((1, "U₁₅ = 5 + 14×4 = 5 + 56 = 61"))

    add("Suku ke-{n} barisan aritmetika dengan suku pertama {a} dan beda {d} adalah ….",
        dict(a=2, d=5, n=25), 122, [117, 120, 127],
        [(1, "Uₙ = a + (n−1)b"), (0, " dengan a = 2, b = 5, n = 25.")],
        otype="int")
    Q[-1]["expl"].append((1, "U₂₅ = 2 + 24×5 = 2 + 120 = 122"))

    add("Diketahui suku pertama {a} dan beda {d}. Jumlah {n} suku pertama deret aritmetika tersebut adalah ….",
        dict(a=4, d=3, n=20), 650, [610, 630, 670],
        [(0, "Jumlah n suku pertama: "), (1, "Sₙ = n/2 (2a + (n−1)b)"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "S₂₀ = 10(2×4 + 19×3) = 10(8 + 57) = 650"))

    add("Jumlah {n} suku pertama deret aritmetika {a}, {b}, {c}, … adalah ….",
        dict(a=2, b=6, c=10, n=25), 1250, [1200, 1300, 1225],
        [(0, "a = 2, b = 4, n = 25."), (1, "Sₙ = n/2(2a + (n−1)b)")],
        otype="int")
    Q[-1]["expl"].append((1, "S₂₅ = 25/2(4 + 96) = 25×50 = 1250"))

    add("Diketahui suku ke-{m} = {um} dan suku ke-{k} = {uk} dari suatu barisan aritmetika. Suku pertama barisan tersebut adalah ….",
        dict(m=5, um=18, k=10, uk=38), 2, [-2, 4, 6],
        [(1, "b = (U₁₀ − U₅)/(10 − 5) = (38 − 18)/5 = 4"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "U₅ = a + 4×4 = 18 ⟹ a = 2"))

    add("Suku ke-{m} suatu deret aritmetika adalah {um} dan suku ke-{k} adalah {uk}. Beda deret tersebut adalah ….",
        dict(m=3, um=11, k=8, uk=31), 4, [2, 3, 5],
        [(1, "U₈ − U₃ = 5b = 31 − 11 = 20"), (0, ", sehingga "), (1, "b = 4"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((0, "Cek: U₃ = a + 8 = 11 ⟹ a = 3; U₈ = 3 + 28 = 31. Benar."))

    add("Diketahui deret aritmetika dengan suku pertama {a} dan beda {d}. Nilai suku ke-{n} adalah ….",
        dict(a=7, d=6, n=18), 109, [103, 106, 115],
        [(1, "Uₙ = a + (n−1)b = 7 + 17×6 = 7 + 102 = 109")],
        otype="int")

    add("Jumlah bilangan genap berurutan dari {lo} sampai {hi} adalah ….",
        dict(lo=2, hi=100), 2550, [2500, 2600, 2450],
        [(0, "Bilangan genap 2 s.d. 100 membentuk deret aritmetika dengan a = 2, b = 2, dan banyak suku n = 50.")],
        otype="int")
    Q[-1]["expl"].append((1, "S₅₀ = 50/2(2×2 + 49×2) = 25(102) = 2550"))

    add("Jumlah bilangan asli dari {lo} sampai {hi} adalah ….",
        dict(lo=1, hi=80), 3240, [3160, 3280, 3320],
        [(1, "S₈₀ = 80/2(1 + 80) = 40 × 81 = 3240")],
        otype="int")

    add("Diketahui barisan aritmetika {a}, {b}, {c}, {d}, …. Rumus suku ke-n barisan tersebut adalah ….",
        dict(a=4, b=9, c=14, d=19), "5n − 1", ["4n", "5n + 1", "4n − 1"],
        [(1, "Uₙ = a + (n−1)b = 4 + (n−1)5 = 5n − 1")],
        otype="str")

    add("Jumlah {n} suku pertama suatu deret aritmetika dirumuskan Sₙ = {p}n² + {q}n. Suku ke-{m} deret tersebut adalah ….",
        dict(n=0, p=2, q=3, m=6), 25, [21, 23, 27],
        [(0, "Suku ke-n: "), (1, "Uₙ = Sₙ − Sₙ₋₁"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "U₆ = S₆ − S₅ = (72+18) − (50+15) = 90 − 65 = 25"))

    # ---------- 13-20 : DERET GEOMETRI ----------
    add("Suku ke-{n} dari barisan geometri {a}, {b}, {c}, … adalah ….",
        dict(a=2, b=6, c=18, n=7), 1458, [486, 972, 2916],
        [(1, "r = 6/2 = 3"), (0, ", "), (1, "Uₙ = arⁿ⁻¹ = 2×3⁶ = 2×729 = 1458")],
        otype="int")

    add("Suku ke-{n} barisan geometri dengan suku pertama {a} dan rasio {r} adalah ….",
        dict(a=3, r=2, n=10), 1536, [768, 1024, 2048],
        [(1, "U₁₀ = 3×2⁹ = 3×512 = 1536")],
        otype="int")

    add("Diketahui barisan geometri {a}, {b}, {c}, {d}, …. Rasio barisan tersebut adalah ….",
        dict(a=81, b=27, c=9, d=3), "1/3", ["3", "1/9", "−3"],
        [(1, "r = 27/81 = 1/3")],
        otype="str")

    add("Suku pertama {a} dan rasio {r}. Jumlah {n} suku pertama deret geometri tersebut adalah ….",
        dict(a=4, r=2, n=8), 1020, [508, 1016, 2044],
        [(1, "Sₙ = a(rⁿ − 1)/(r − 1) = 4(256 − 1)/1 = 1020")],
        otype="int")

    add("Jumlah {n} suku pertama deret geometri {a}, {b}, {c}, … adalah ….",
        dict(a=5, b=10, c=20, n=9), 2555, [1275, 2550, 5115],
        [(1, "r = 2; S₉ = 5(2⁹ − 1)/(2 − 1) = 5(511) = 2555")],
        otype="int")

    add("Jumlah deret geometri tak hingga {a}, {b}, {c}, … adalah ….",
        dict(a=24, b=12, c=6), 48, [36, 42, 72],
        [(1, "r = 1/2"), (0, "; "), (1, "S∞ = a/(1 − r) = 24/(1/2) = 48")],
        otype="int")

    add("Jumlah deret geometri tak hingga dengan suku pertama {a} dan rasio {r} adalah ….",
        dict(a=18, r="1/3"), 27, [24, 36, 54],
        [(1, "S∞ = a/(1 − r) = 18/(1 − 1/3) = 18/(2/3) = 27")],
        otype="int")

    add("Diketahui suku ke-{m} = {um} dan suku ke-{k} = {uk} pada barisan geometri positif. Suku pertama barisan adalah ….",
        dict(m=3, um=8, k=6, uk=64), 2, [1, 4, 8],
        [(1, "r³ = U₆/U₃ = 64/8 = 8 ⟹ r = 2"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "U₃ = a·2² = 8 ⟹ a = 2"))

    # ---------- 21-30 : APLIKASI BARISAN/DERET ----------
    add("Sebuah bola dijatuhkan dari ketinggian {h} m. Setiap kali memantul, bola mencapai tinggi {p} kali tinggi sebelumnya. Panjang lintasan bola sampai berhenti adalah … m.",
        dict(h=100, p="3/4"), 700, [400, 600, 800],
        [(0, "Lintasan = turun pertama + 2×(jumlah pantulan naik-turun).")],
        otype="int")
    Q[-1]["expl"].append((1, "L = h + 2·(h·r)/(1 − r) = 100 + 2·75/(1/4) = 100 + 600 = 700"))

    add("Pada tahun 2024 sebuah desa berpenduduk {p0} jiwa. Jika setiap tahun penduduk bertambah {r} kali lipat dari tahun sebelumnya, perkiraan penduduk desa pada akhir tahun {y} adalah … jiwa.",
        dict(p0=50000, r=10, y=2026), 60500, [55000, 60000, 66550],
        [(1, "10% = 0,1"), (0, "; faktor kali per tahun = 1,1.")],
        otype="int")
    Q[-1]["expl"].append((1, "P(2026) = 50.000 × 1,1² = 50.000 × 1,21 = 60.500"))

    add("Sebuah mesin mengalami penyusutan harga {p}% per tahun dari harga tahun sebelumnya. Jika harga awal mesin Rp{a} juta, nilai mesin setelah {t} tahun adalah … juta rupiah.",
        dict(p=10, a=100, t=3), 72.9, [70, 73, 75],
        [(1, "Nilai = 100 × 0,9³ = 100 × 0,729 = 72,9 juta")],
        otype="dec")

    add("Pak Jaya menabung {a0} rupiah di awal tahun dengan bunga majemuk {p}% per tahun. Besar tabungan Pak Jaya pada akhir tahun ke-{t} adalah … rupiah.",
        dict(a0=2000000, p=5, t=2), 2205000, [2100000, 2200000, 2315250],
        [(1, "Tabungan = 2.000.000 × 1,05² = 2.000.000 × 1,1025 = 2.205.000")],
        otype="int")

    add("Sebuah tali dipotong menjadi {n} bagian dengan panjang membentuk barisan geometri. Jika potongan terpendek {a} cm dan potongan terpanjang {b} cm, panjang tali semula adalah … cm.",
        dict(n=5, a=2, b=162), 242, [164, 244, 486],
        [(0, "Potongan 5 membentuk barisan geometri: u₁ = 2 dan u₅ = 162.")],
        otype="int")
    Q[-1]["expl"].append((1, "r⁴ = 162/2 = 81 ⟹ r = 3"))
    Q[-1]["expl"].append((0, "Deret: 2, 6, 18, 54, 162."))
    Q[-1]["expl"].append((1, "Jumlah = 2 + 6 + 18 + 54 + 162 = 242"))

    add("Di dalam gedung terdapat {r} baris kursi. Baris paling depan {a} kursi, setiap baris berikutnya bertambah {d} kursi dari baris di depannya. Banyak kursi di baris paling belakang adalah ….",
        dict(r=20, a=12, d=4), 88, [80, 84, 92],
        [(1, "U₂₀ = 12 + 19×4 = 12 + 76 = 88")],
        otype="int")

    add("Sebuah pabrik pada bulan pertama memproduksi {a} unit barang dan setiap bulan produksinya bertambah {d} unit. Banyak barang yang diproduksi selama {n} bulan pertama adalah … unit.",
        dict(a=400, d=50, n=12), 8100, [7600, 7900, 8400],
        [(1, "S₁₂ = 12/2(2×400 + 11×50) = 6(800 + 550) = 8100")],
        otype="int")

    add("Suku ke-{m} dan suku ke-{k} suatu deret aritmetika berturut-turut {um} dan {uk}. Jumlah {n} suku pertama deret tersebut adalah ….",
        dict(m=2, um=10, k=6, uk=26, n=15), 510, [465, 480, 495],
        [(1, "b = (26 − 10)/4 = 4"), (0, "; "), (1, "a = U₂ − b = 10 − 4 = 6"), (0, ".")],
        otype="int")
    Q[-1]["expl"].append((1, "S₁₅ = 15/2(2×6 + 14×4) = 15/2(68) = 15×34 = 510"))

    add("Suku ke-{m} deret aritmetika adalah {um} dan suku ke-{k} adalah {uk}. Jumlah {n} suku pertama deret tersebut adalah ….",
        dict(m=4, um=17, k=9, uk=37, n=12), 324, [282, 306, 330],
        [(1, "b = (37 − 17)/5 = 4"), (0, "; "), (1, "a = U₄ − 3×4 = 17 − 12 = 5")],
        otype="int")
    Q[-1]["expl"].append((1, "S₁₂ = 12/2(2×5 + 11×4) = 6(54) = 324"))

    add("Hasil produksi sebuah perusahaan setiap tahun naik {d} unit dari tahun sebelumnya. Jika tahun pertama memproduksi {a} unit, total produksi sampai tahun ke-{n} adalah … unit.",
        dict(a=300, d=100, n=10), 7500, [7000, 7200, 8000],
        [(1, "S₁₀ = 10/2(2×300 + 9×100) = 5(600 + 900) = 7500")],
        otype="int")

    return Q
