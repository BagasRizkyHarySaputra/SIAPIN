import type { BankSoal } from "@/lib/data/soal";

export { BANK_TKA_SMA_MTK } from "./matematika";
export { BANK_TKA_SMA_FISIKA } from "./fisika";
export { BANK_TKA_SMA_KIMIA } from "./kimia";
// TEMP-QUARANTINE 2026-09-04: biologi.ts punya syntax error (Hermes masih nulis).
// Dicoment supaya build jalan; drill fallback ke BANK_SOAL lama.
// Kembalikan baris di bawah saat file sudah valid, dan hapus stub.
// export { BANK_TKA_SMA_BIOLOGI } from "./biologi";
export const BANK_TKA_SMA_BIOLOGI: BankSoal[] = [];
export { BANK_TKA_SMA_EKONOMI } from "./ekonomi";
