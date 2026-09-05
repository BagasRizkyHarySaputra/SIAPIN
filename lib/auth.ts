import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

/**
 * Auth.js (NextAuth v5) — sesi JWT, tanpa adapter DB khusus.
 *
 * Provider:
 *  - Credentials (email + password) → cek ke tabel `User` (bcrypt).
 *  - Google (OAuth) → user dibuat/ditautkan lewat `googleId`/`email`,
 *    password NULL (login via Google).
 *
 * `contoh@gmail.com` (seed demo) tetap bisa login karena password di DB
 * sudah di-hash bcrypt = "contoh123".
 */

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  trustHost: true,
  pages: {
    signIn: "/profile", // popup auth dipakai di halaman profile/dashboard
  },
  providers: [
    Credentials({
      name: "Email + Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email =
          typeof credentials?.email === "string"
            ? credentials.email.trim().toLowerCase()
            : "";
        const password =
          typeof credentials?.password === "string" ? credentials.password : "";
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.password) return null; // user OAuth / tak ada
        // Wajib email sudah diverifikasi (alur register → link verifikasi).
        if (!user.emailVerified) return null;

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.avatar ?? user.image ?? null,
        };
      },
    }),
    // Google OAuth — hanya aktif bila env diisi (mode produksi).
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [
          Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Saat login pertama (credentials/google), simpan id user ke token.
      if (user?.id) token.sub = user.id;
      if (account && account.provider === "google") {
        token.google = true;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // Google OAuth: buat/temukan user di tabel User (tanpa adapter DB).
      if (account?.provider === "google" && profile?.email) {
        const email = String(profile.email).toLowerCase();
        const name = String(profile.name ?? profile.email?.split("@")[0] ?? "User");
        const image = typeof profile.picture === "string" ? profile.picture : null;
        const googleId = String(profile.sub ?? account.providerAccountId ?? "");

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
          // Tautkan googleId kalau user sudah ada (via email sama).
          if (!existing.googleId) {
            await prisma.user.update({
              where: { id: existing.id },
              data: {
                googleId,
                image: existing.image ?? image,
                emailVerified: existing.emailVerified ?? new Date(),
              },
            });
          }
          user.id = existing.id;
        } else {
          const created = await prisma.user.create({
            data: {
              email,
              name,
              googleId,
              image,
              emailVerified: new Date(), // OAuth Google = email sudah diverifikasi Google
              password: null,
              role: "SISWA",
            },
          });
          await prisma.userProfile.create({
            data: { userId: created.id, streakDays: 0 },
          });
          user.id = created.id;
        }
      }
      return true;
    },
  },
});
