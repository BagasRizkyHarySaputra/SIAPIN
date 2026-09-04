// Helper logo universitas — menampilkan logo resmi PTN bila tersedia,
// fallback ke inisial bila tidak.
//
// Aset: public/logos/<id>.png (logo resmi diunduh dari Wikipedia Bahasa
// Indonesia / Wikimedia Commons per PTN). 74 dari 75 PTN punya logo;
// yang tidak punya (mis. ISI Surakarta) otomatis fallback ke inisial.
import { findPtn } from "./index";

export const LOGO_PTN_IDS: readonly string[] = [
  "111", "112", "113", "114", "115", "121", "122", "131", "133", "141", "142", "143",
  "151", "161", "171", "181", "191", "192", "311", "321", "323", "324", "331", "332",
  "333", "334", "335", "341", "342", "351", "352", "353", "355", "356", "361", "362",
  "363", "364", "371", "372", "373", "381", "382", "383", "384", "385", "511", "521",
  "531", "541", "542", "551", "611", "612", "613", "621", "631", "632", "711", "712",
  "718", "721", "722", "731", "741", "751", "752", "753", "811", "821", "911", "912",
  "913", "921",
];

/** id PTN yang punya file logo lokal. */
export function punyaLogoPtn(ptnId: string | undefined): boolean {
  return !!ptnId && LOGO_PTN_IDS.includes(ptnId);
}

/** URL logo (atau null) dari nama universitas — memakai findPtn untuk id. */
export function logoPtnByNama(nama: string): string | null {
  const p = findPtn(nama);
  if (!p || !LOGO_PTN_IDS.includes(p.id)) return null;
  return `/logos/${p.id}.png`;
}

/** Inisial nama (fallback saat logo tidak tersedia). */
export function initials(nama: string): string {
  const w = nama.split(/\s+/).filter(Boolean);
  return ((w[0]?.[0] ?? "") + (w[1]?.[0] ?? "")).toUpperCase() || "?";
}
