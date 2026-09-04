"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Transisi antar page navbar — seolah semua page sejajar berdampingan:
 * maju (indeks naik) → konten baru geser masuk dari kanan (slide left),
 * mundur (indeks turun) → masuk dari kiri (slide right).
 * Lompatan >1 step sedikit lebih jauh & lama (terasa "melewati" page tengah).
 */
export const PAGE_ORDER = ["/dashboard", "/bimble", "/leaderboard", "/profile"];

export type SlideDir = "left" | "right" | "fade";

interface NavState {
  dir: SlideDir;
  /** px geser */
  dist: number;
  /** ms durasi */
  dur: number;
  navigate: (href: string) => void;
}

const Ctx = createContext<NavState>({
  dir: "fade",
  dist: 48,
  dur: 300,
  navigate: () => {},
});

export const usePageNav = () => useContext(Ctx);

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [trans, setTrans] = useState({ dir: "fade" as SlideDir, dist: 48, dur: 300 });

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname) return;
      const from = PAGE_ORDER.indexOf(pathname);
      const to = PAGE_ORDER.indexOf(href);
      if (from === -1 || to === -1 || from === to) {
        setTrans({ dir: "fade", dist: 0, dur: 250 });
      } else {
        const steps = Math.abs(to - from);
        setTrans({
          dir: to > from ? "left" : "right",
          dist: Math.min(48 + (steps - 1) * 32, 144),
          dur: Math.min(300 + (steps - 1) * 70, 480),
        });
      }
      router.push(href);
    },
    [pathname, router],
  );

  const value = useMemo(() => ({ ...trans, navigate }), [trans, navigate]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Pembungkus tiap page (dipakai template) — remount + animasi masuk tiap URL.
 *  Arah di-snapshot saat mount agar update state sesudahnya (navigasi
 *  berikutnya) tidak me-restart animasi page yang sedang tampil (= blink). */
export function PageTransitionView({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { dir, dist, dur } = useContext(Ctx);
  const snap = useRef<{ dir: SlideDir; dist: number; dur: number } | null>(null);
  if (snap.current === null) snap.current = { dir, dist, dur };
  const s = snap.current;
  const cls = s.dir === "fade" ? "page-t-fade" : "page-t-slide";
  const x = s.dir === "left" ? s.dist : s.dir === "right" ? -s.dist : 0;
  return (
    <div
      key={pathname}
      className={cls}
      style={{ "--tx-x": `${x}px`, "--tx-dur": `${s.dur}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
