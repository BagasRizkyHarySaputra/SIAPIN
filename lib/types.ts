// ===== Core domain types for SIAPIN =====

/** Belajar mode: jenjang ujian masuk PTN */
export type ModeSlug = "snbt" | "tka-sma" | "tka-smp";

export interface Subtest {
  slug: string;
  name: string;
  short: string; // e.g. "PM", "PPU"
  description: string;
  questionCount: number;
  durationMinutes: number;
  color: string; // tailwind-friendly hex accent per subtest
}

export interface Mode {
  slug: ModeSlug;
  name: string;
  tagline: string;
  description: string;
  color: string;
  subtests: Subtest[];
}

export interface QuestionOption {
  key: "A" | "B" | "C" | "D" | "E";
  text: string;
}

export interface Question {
  id: string;
  subtest: string; // subtest slug
  mode: ModeSlug;
  /** per-stimulus grouping (bacaan) — same passage reused by several questions */
  passage?: string;
  prompt: string;
  options: QuestionOption[];
  answer: "A" | "B" | "C" | "D" | "E";
  explanation: string;
}

export interface Guru {
  id: string;
  name: string;
  title: string; // e.g. "Mr. Pudjo"
  subject: string;
  modes: string[]; // ["SNBT", "TKA"]
  students: number;
  experienceYears: number;
  rating: number;
  bio: string;
  about: string;
  reviews: { author: string; handle: string; text: string; rating: number }[];
  avatarColor: string;
  avatarEmoji: string;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  accuracy: number;
  isYou?: boolean;
}

export interface Testimonial {
  name: string;
  campus: string;
  text: string;
  avatarColor: string;
  initials: string;
}

/** Sesi pengerjaan soal */
export interface Attempt {
  mode: ModeSlug;
  subtest: string;
  answers: Record<string, string>; // questionId -> option key
  startedAt: number;
  durationMinutes: number;
}
