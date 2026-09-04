"use client";

import type { BankSoal, SoalSeg, Pilihan } from "@/lib/data/soal";

/** Helper builders untuk menulis soal secara ringkas. */
export const S = (t: string): SoalSeg[] => [{ t }];
export const B = (t: string): SoalSeg => ({ t, b: true });
export const P = (t: string): SoalSeg => ({ t });

/** Builder opsi A–D. */
export function opts(
  a: string,
  b: string,
  c: string,
  d: string,
): Pilihan[] {
  return [
    { key: "A", text: a },
    { key: "B", text: b },
    { key: "C", text: c },
    { key: "D", text: d },
  ];
}

/** Builder pembahasan: array of SoalSeg[]. */
export function exp(...lines: SoalSeg[][]): SoalSeg[][] {
  return lines;
}

/** Builder soal lengkap. */
export function soal(
  no: number,
  prompt: SoalSeg[],
  options: Pilihan[],
  answer: "A" | "B" | "C" | "D",
  explanationTitle: string,
  explanation: SoalSeg[][],
  stimulus: string[] = [],
): BankSoal {
  return {
    no,
    stimulus,
    prompt,
    options,
    answer,
    explanationTitle,
    explanation,
  };
}

export type { BankSoal, SoalSeg, Pilihan };
