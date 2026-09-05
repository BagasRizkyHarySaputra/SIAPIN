"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Mock auth stored in localStorage — swappable for Supabase later.
 * Saat login/register via AuthPopup, akun disimpan & user di-set sehingga
 * halaman /profile menampilkan state "sudah login" (nama, statistik, tombol
 * Edit Profile, Log Out).
 *
 * Statistik (streak, total soal, akurasi, progress AI Diagnostic) TIDAK
 * disimpan palsu di sini — diambil dari DATABASE (riwayat pengerjaan nyata)
 * lewat POST /api/user/sync (hitung streak harian) + GET /api/diagnostik,
 * lalu disimpan ke `user.stats` agar navbar & halaman profile sinkron.
 */
export type Mode = "snbt" | "tka-sma" | "tka-smp";

export interface ProfileStats {
  streak: string; // "5 days"
  totalSoal: string; // "370 soal"
  akurasi: string; // "78%"
  progress: { label: string; value: string }[]; // AI Diagnostic: "58%" dst
  /** Achievement yang tercapai — dihitung dari data asli (riwayat/leaderboard/streak). */
  achievements: { topPerformer: boolean; neverGiveUp: boolean; streakMaster: boolean };
}

export interface User {
  name: string;
  email: string;
  phone?: string;
  /** Foto profil — data URL (hasil kompresi). Fallback ke avatar-default.png. */
  avatar?: string;
  mode: Mode;
  /** Tanggal bergabung, format "17 Agustus 2025" (dipakai account card). */
  joinedAt?: string;
  stats?: ProfileStats;
}

export interface Account {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  /** Foto profil — data URL (hasil kompresi). */
  avatar?: string;
  /** Tanggal daftar, format "17 Agustus 2025". */
  joinedAt?: string;
}

interface AuthState {
  user: User | null;
  /** Akun yang terdaftar di "database" lokal (localStorage). */
  accounts: Account[];
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (
    patch: Partial<Pick<User, "name" | "phone" | "email" | "avatar">>
  ) => void;
  register: (account: Account) => void;
  /** Hapus akun permanen (dari DB, daftar akun lokal + logout). */
  deleteAccount: () => Promise<void>;
  /** Sinkron ke DB + muat ulang statistik real (streak/total/akurasi/progress). */
  refreshStats: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

const USER_KEY = "siapin.user";
const ACCOUNTS_KEY = "siapin.accounts";
/** Email akun seed yang pernah dihapus user (agar tidak muncul lagi). */
const SEED_REMOVED_KEY = "siapin.seed_removed";

/**
 * DB sementara (seed) — akun demo yang selalu tersedia untuk login.
 * Nanti saat pindah ke Supabase, daftar ini diganti isi tabel `accounts`.
 */
const SEED_ACCOUNTS: Account[] = [
  {
    name: "Contoh User",
    email: "contoh@gmail.com",
    phone: "081234567890",
    password: "contoh123",
    joinedAt: "17 Agustus 2025",
  },
];

function readLS<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeLS(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

/** Bentuk respons GET /api/diagnostik yang dipakai untuk menyusun ProfileStats. */
interface DiagnostikData {
  ringkasan?: { totalSoal?: number; akurasi?: number };
  progress?: { tkaSmp?: number; tkaSma?: number; snbt?: number };
  profile?: { streakDays?: number | null };
  achievements?: {
    topPerformer?: boolean;
    neverGiveUp?: boolean;
    streakMaster?: boolean;
  };
}

/** Susun ProfileStats dari data diagnostik real (riwayat DB). */
function buildStats(d: DiagnostikData): ProfileStats {
  const ring = d.ringkasan ?? {};
  const prog = d.progress ?? {};
  const streakRaw = d.profile?.streakDays ?? 0;
  const streak = Number.isFinite(streakRaw) ? Number(streakRaw) : 0;
  return {
    streak: `${streak} day${streak === 1 ? "" : "s"}`,
    totalSoal: `${ring.totalSoal ?? 0} soal`,
    akurasi: `${ring.akurasi ?? 0}%`,
    progress: [
      { label: "TKA SMP", value: `${prog.tkaSmp ?? 0}%` },
      { label: "TKA SMA", value: `${prog.tkaSma ?? 0}%` },
      { label: "SNBT", value: `${prog.snbt ?? 0}%` },
    ],
    achievements: {
      topPerformer: d.achievements?.topPerformer ?? false,
      neverGiveUp: d.achievements?.neverGiveUp ?? false,
      streakMaster: d.achievements?.streakMaster ?? false,
    },
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setUser(readLS<User>(USER_KEY));
    // DB sementara = akun lokal + akun seed (kecuali yang pernah dihapus user)
    const local = readLS<Account[]>(ACCOUNTS_KEY) ?? [];
    const removed = readLS<string[]>(SEED_REMOVED_KEY) ?? [];
    const seeds = SEED_ACCOUNTS.filter((s) => !removed.includes(s.email));
    const merged = [...local];
    for (const s of seeds) {
      if (!merged.some((a) => a.email.toLowerCase() === s.email.toLowerCase())) {
        merged.push(s);
      }
    }
    setAccounts(merged);
    setHydrated(true);
  }, []);

  /**
   * Sinkronkan user ke DB (upsert by email + hitung streak harian) lalu muat
   * statistik real dari riwayat. Dipanggil otomatis saat login/register/
   * session-restore dan saat profil diubah (nama/telepon/avatar).
   */
  const syncAndLoad = useCallback(async (u: User) => {
    try {
      await fetch("/api/user/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: u.email,
          name: u.name,
          ...(u.phone ? { phone: u.phone } : {}),
          ...(u.avatar ? { avatar: u.avatar } : {}),
        }),
      });
      const res = await fetch(`/api/diagnostik?email=${encodeURIComponent(u.email)}`);
      const json = await res.json();
      const d = json?.data as DiagnostikData | undefined;
      if (!d) return;
      const stats = buildStats(d);
      setUser((prev) => {
        // Jangan menimpa bila user sudah logout / ganti akun saat fetch berjalan.
        if (!prev || prev.email.toLowerCase() !== u.email.toLowerCase()) return prev;
        const next = { ...prev, stats };
        writeLS(USER_KEY, next);
        return next;
      });
    } catch {
      /* non-blokir — UI menampilkan "-" bila statistik belum ada */
    }
  }, []);

  // Begitu user tersedia (login/register/session-restore), tarik statistik DB.
  useEffect(() => {
    if (!hydrated || !user?.email) return;
    const u = user;
    syncAndLoad(u);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, user?.email, user?.name, user?.phone, user?.avatar]);

  const refreshStats = useCallback(async () => {
    const u = user;
    if (!u?.email) return;
    await syncAndLoad(u);
  }, [user, syncAndLoad]);

  const login = (u: User) => {
    // stats sengaja TIDAK diisi angka palsu — diisi otomatis dari DB
    // oleh efek sinkron di atas (streak/total/akurasi/progress real).
    const next: User = {
      ...u,
      mode: u.mode ?? "snbt",
    };
    setUser(next);
    writeLS(USER_KEY, next);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(USER_KEY);
    } catch {
      /* ignore */
    }
  };

  const updateProfile = (
    patch: Partial<Pick<User, "name" | "phone" | "email" | "avatar">>
  ) => {
    setUser((prev) => {
      if (!prev) return prev;
      const next = { ...prev, ...patch };
      writeLS(USER_KEY, next);

      // Sinkronkan ke "db" akun (per email) supaya avatar/nama ikut tersimpan
      // saat login ulang. Upsert: update kalau ada, tambah kalau belum ada.
      const list = readLS<Account[]>(ACCOUNTS_KEY) ?? [];
      const idx = list.findIndex(
        (a) => a.email.toLowerCase() === next.email.toLowerCase()
      );
      let updated: Account[];
      if (idx >= 0) {
        updated = list.map((a, i) =>
          i === idx ? { ...a, ...patch } : a
        );
      } else {
        // Akun belum ada di local (mis. akun seed). Ambil data seed sebagai
        // dasar supaya password seed tidak hilang, lalu timpa dgn patch.
        const seed = SEED_ACCOUNTS.find(
          (s) => s.email.toLowerCase() === next.email.toLowerCase()
        );
        const base: Account = seed
          ? { ...seed }
          : {
              name: next.name,
              email: next.email,
              phone: next.phone,
              joinedAt: next.joinedAt,
            };
        updated = [...list, { ...base, ...patch, email: next.email }];
      }
      writeLS(ACCOUNTS_KEY, updated);
      setAccounts(updated);

      return next;
    });
    // Nama/telepon/avatar baru ikut tersinkron ke DB via efek (dependency di atas).
  };

  const register = (account: Account) => {
    const list = readLS<Account[]>(ACCOUNTS_KEY) ?? [];
    // hindari duplikat email — ganti data lama jika email sama
    const next = [...list.filter((a) => a.email !== account.email), account];
    setAccounts((prev) => [
      ...prev.filter((a) => a.email.toLowerCase() !== account.email.toLowerCase()),
      account,
    ]);
    writeLS(ACCOUNTS_KEY, next);
    // kalau email seed di-register ulang, hapus dari daftar "seed terhapus"
    const removed = readLS<string[]>(SEED_REMOVED_KEY) ?? [];
    if (removed.includes(account.email)) {
      writeLS(SEED_REMOVED_KEY, removed.filter((e) => e !== account.email));
    }
  };

  const deleteAccount = async () => {
    // 1. Hapus dari DATABASE (semua data user: riwayat, diagnostik,
    //    leaderboard, achievement, profil) — via API.
    const email = readLS<User>(USER_KEY)?.email;
    if (email) {
      try {
        await fetch("/api/user", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        /* jaringan error — tetap lanjut bersihkan lokal */
      }
    }

    // 2. Hapus akun aktif dari daftar akun terdaftar (localStorage)
    setUser((current) => {
      if (current?.email) {
        const em = current.email;
        const isSeed = SEED_ACCOUNTS.some(
          (s) => s.email.toLowerCase() === em.toLowerCase()
        );
        const list = readLS<Account[]>(ACCOUNTS_KEY) ?? [];
        const next = list.filter((a) => a.email !== em);
        setAccounts(next);
        writeLS(ACCOUNTS_KEY, next);
        // kalau yang dihapus akun seed, tandai agar tidak muncul lagi
        if (isSeed) {
          const removed = readLS<string[]>(SEED_REMOVED_KEY) ?? [];
          if (!removed.includes(em)) {
            writeLS(SEED_REMOVED_KEY, [...removed, em]);
          }
        }
      }
      return null;
    });
    try {
      localStorage.removeItem(USER_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, accounts, login, logout, updateProfile, register, deleteAccount, refreshStats }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
