"use client";

import {
  createContext,
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
 */
export type Mode = "snbt" | "tka-sma" | "tka-smp";

export interface ProfileStats {
  streak: string; // "5 days"
  totalSoal: string; // "370 soal"
  akurasi: string; // "78%"
  progress: { label: string; value: string }[]; // AI Diagnostic: "+ 10%" dst
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
  /** Hapus akun permanen (dari daftar akun + logout). */
  deleteAccount: () => void;
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

/** Statistik default yang dipakai user baru — mengikuti contoh desain. */
const DEFAULT_STATS: ProfileStats = {
  streak: "5 days",
  totalSoal: "370 soal",
  akurasi: "78%",
  progress: [
    { label: "TKA SMP", value: "+ 10%" },
    { label: "TKA SMA", value: "+ 20%" },
    { label: "SNBT", value: "+ 50%" },
  ],
};

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

  const login = (u: User) => {
    const withDefaults: User = {
      ...u,
      mode: u.mode ?? "snbt",
      stats: u.stats ?? DEFAULT_STATS,
    };
    setUser(withDefaults);
    writeLS(USER_KEY, withDefaults);
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

  const deleteAccount = () => {
    // hapus akun aktif dari daftar akun terdaftar
    setUser((current) => {
      if (current?.email) {
        const email = current.email;
        const isSeed = SEED_ACCOUNTS.some(
          (s) => s.email.toLowerCase() === email.toLowerCase()
        );
        const list = readLS<Account[]>(ACCOUNTS_KEY) ?? [];
        const next = list.filter((a) => a.email !== email);
        setAccounts(next);
        writeLS(ACCOUNTS_KEY, next);
        // kalau yang dihapus akun seed, tandai agar tidak muncul lagi
        if (isSeed) {
          const removed = readLS<string[]>(SEED_REMOVED_KEY) ?? [];
          if (!removed.includes(email)) {
            writeLS(SEED_REMOVED_KEY, [...removed, email]);
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
      value={{ user, accounts, login, logout, updateProfile, register, deleteAccount }}
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
