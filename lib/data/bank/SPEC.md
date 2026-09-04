# SCHEDULE: Bank Soal SIAPIN — Template & Spec

## FORMAT PERSIS (BankSoal)
Setiap file bank soal HARUS mengikuti format di bawah. Tidak boleh menyimpang.

```ts
"use client";

import type { BankSoal } from "@/lib/data/soal";

const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

export const BANK_XXX: BankSoal[] = [
  {
    no: 1,
    stimulus: [],
    prompt: S("Pertanyaan di siri..."),
    options: [
      { key: "A", text: "opsi A" },
      { key: "B", text: "opsi B" },
      { key: "C", text: "opsi C" },
      { key: "D", text: "opsi D" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Langkah pertama...")],
      [B("Hasil = 42")],
    ],
  },
  // ... soal berikutnya
];
```

## ATURAN SOAL
1. **Orisinal** — tidak menyalin soal dari web. Buat soal baru mengikuti pola/materi resmi.
2. **Elite** — stimulus kontekstual bermakna, opsi distraktor logis (bukan random), pembahasan runtut.
3. **`no`** berurutan dari 1 sampai N.
4. **`stimulus`** = array string. Kosong `[]` untuk soal tanpa bacaan. Untuk soal bacaan/literasi, isi dengan paragraf.
5. **`prompt`** = SoalSeg[]. Gunakan `S("teks")` untuk teks biasa, campur `B("angka penting")` untuk highlight.
6. **`options`** = tepat 4 opsi (A, B, C, D). Distraktor harus logis & menarik.
7. **`answer`** = "A" | "B" | "C" | "D". Distribusi jawaban harus merata (~25% per opsi).
8. **`explanationTitle`** = "Jawaban: X" (X = key benar).
9. **`explanation`** = SoalSeg[][]. Array of baris. Tiap baris = array segmen. Gunakan `B()` untuk highlight angka/faktor kunci.
10. **Jangan pakai opsi E** — hanya A–D.
11. **Bahasa Indonesia** untuk semua teks (kecuali subtes B. Inggris yang pakai English).

## TARGET
- Minimal 150 soal per bank.
- Soal harus terverifikasi: answer BENAR, perhitungan konsisten, distraktor masuk akal.
- Distribusi topik merata sesuai materi resmi per subtes.

## OUTPUT
Tulis file langsung dengan `write_file` ke path yang ditentukan.
Return: jumlah soal yang ditulis + 3 contoh soal (no 1, no tengah, no terakhir).
