"use client";

import { PageTransitionView } from "@/components/layout/page-transition";

/** Template root: remount setiap navigasi → animasi slide antar page. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransitionView>{children}</PageTransitionView>;
}
