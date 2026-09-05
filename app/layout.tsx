import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Baloo_2 } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/store/auth";
import SessionProvider from "@/components/features/profile/session-provider";
import AuthBridge from "@/components/features/profile/auth-bridge";
import { PageTransitionProvider } from "@/components/layout/page-transition";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIAPIN — Siap Taklukkan PTN Impianmu",
  description:
    "SIAPIN adalah platform belajar online untuk persiapan SNBT, TKA SMA, dan TKA SMP. Drill soal, pantau progress, dan raih kampus impianmu.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AuthProvider>
          <SessionProvider>
            <AuthBridge />
            <PageTransitionProvider>{children}</PageTransitionProvider>
          </SessionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
