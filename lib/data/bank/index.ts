"use client";

import type { BankSoal } from "@/lib/data/soal";

/**
 * Registry bank soal SIAPIN.
 * Key: `${modeSlug}/${subtesSlug}` → BankSoal[] (≥10 per paket).
 *
 * File bank soal diimpor statis per subtes untuk tree-shaking.
 * Tiap bank berisi 200–300 soal orisinal berpedoman pola resmi
 * TKA 2026 (Pusmendik) & SNBT 2026 (SNPMB).
 */

import {
  BANK_SNBT_PM,
  BANK_SNBT_PPU,
  BANK_SNBT_PBM,
  BANK_SNBT_PK,
  BANK_SNBT_LBI,
  BANK_SNBT_LBE,
} from "./banks/snbt";

import {
  BANK_TKA_SMA_MTK,
  BANK_TKA_SMA_FISIKA,
  BANK_TKA_SMA_KIMIA,
  BANK_TKA_SMA_BIOLOGI,
  BANK_TKA_SMA_EKONOMI,
} from "./banks/tka-sma";

import {
  BANK_TKA_SMP_MTK,
  BANK_TKA_SMP_IPA,
  BANK_TKA_SMP_INGGRIS,
} from "./banks/tka-smp";

const REGISTRY: Record<string, BankSoal[]> = {
  "snbt/pm": BANK_SNBT_PM,
  "snbt/ppu": BANK_SNBT_PPU,
  "snbt/pbm": BANK_SNBT_PBM,
  "snbt/pk": BANK_SNBT_PK,
  "snbt/lbi": BANK_SNBT_LBI,
  "snbt/lbe": BANK_SNBT_LBE,
  "tka-sma/matematika": BANK_TKA_SMA_MTK,
  "tka-sma/fisika": BANK_TKA_SMA_FISIKA,
  "tka-sma/kimia": BANK_TKA_SMA_KIMIA,
  "tka-sma/biologi": BANK_TKA_SMA_BIOLOGI,
  "tka-sma/ekonomi": BANK_TKA_SMA_EKONOMI,
  "tka-smp/matematika": BANK_TKA_SMP_MTK,
  "tka-smp/ipa": BANK_TKA_SMP_IPA,
  "tka-smp/b-inggris": BANK_TKA_SMP_INGGRIS,
};

/** Ambil bank soal untuk mode+subtes. Fallback ke BANK_SOAL lama. */
export function getBank(modeSlug: string, subtesSlug: string): BankSoal[] {
  const key = `${modeSlug}/${subtesSlug}`;
  return REGISTRY[key] ?? [];
}

/**
 * Jumlah soal per paket.
 * Standar ujian: satu paket berisi 50 soal (slice berurutan dari bank 150+).
 */
export const SOAL_PER_PAKET = 50;

/** Ambil slice soal untuk paket tertentu (1-indexed). */
export function getPaketSoal(
  modeSlug: string,
  subtesSlug: string,
  paket: number,
): BankSoal[] {
  const bank = getBank(modeSlug, subtesSlug);
  if (bank.length === 0) return [];
  const start = (paket - 1) * SOAL_PER_PAKET;
  const slice = bank.slice(start, start + SOAL_PER_PAKET);
  // Renumber 1..SOAL_PER_PAKET untuk paket ini
  return slice.map((s, i) => ({ ...s, no: i + 1 }));
}

/** Jumlah paket tersedia untuk mode+subtes (maks 8). */
export function getJumlahPaket(modeSlug: string, subtesSlug: string): number {
  const bank = getBank(modeSlug, subtesSlug);
  if (bank.length === 0) return 0;
  return Math.min(8, Math.ceil(bank.length / SOAL_PER_PAKET));
}
