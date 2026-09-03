"use client";

import { useEffect, useState } from "react";

/**
 * True saat viewport cocok dengan media query (default: desktop ≥ 768px).
 * Dipakai untuk layout responsif popup /bimble: di HP panel di-stack di bawah
 * kartu, di desktop panel di samping kanan (1:1 Figma).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True untuk desktop (≥768px). */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 768px)");
}
