"use client";

import { SessionProvider as NextSessionProvider } from "next-auth/react";

/**
 * SessionProvider Auth.js — dibungkus client component sendiri supaya
 * layout (server component) bisa memakainya. Semua konsumen (AuthBridge,
 * popup login) membaca sesi lewat useSession().
 */
export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextSessionProvider>{children}</NextSessionProvider>;
}
