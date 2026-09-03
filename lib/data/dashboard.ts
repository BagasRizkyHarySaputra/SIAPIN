export interface Testimoni {
  name: string;
  university: string;
  /** hex bg of the card; "white" => white with border */
  bg: "lavender" | "periwinkle" | "white";
  avatar: "white" | "pink";
}

export const testimonials: Testimoni[] = [
  {
    name: "Liora Wattson",
    university: "Universitas Gadjah Mada",
    bg: "white",
    avatar: "pink",
  },
  {
    name: "Liora Wattson",
    university: "Universitas Indonesia",
    bg: "lavender",
    avatar: "white",
  },
  {
    name: "Liora Wattson",
    university: "Institut Teknologi Bandung",
    bg: "white",
    avatar: "pink",
  },
  {
    name: "Liora Wattson",
    university: "Universitas Diponegoro",
    bg: "periwinkle",
    avatar: "white",
  },
];

export const REVIEW_TEXT =
  "Aplikasi ini membantu banget, saya jadi bisa lolos snbt dan masuk ke univ impian aku!";

export interface ProgressMode {
  label: "TKA SMP" | "TKA SMA" | "SNBT";
  /** hex colors */
  color: string;
  pct: number;
}

export const progressModes: ProgressMode[] = [
  { label: "TKA SMP", color: "#688d37", pct: 0 },
  { label: "TKA SMA", color: "#5858b8", pct: 87 },
  { label: "SNBT", color: "#df5b97", pct: 50 },
];

/** subject labels for radar (left column of chart) */
export const radarSubjects = [
  "Matematika",
  "B. Indonesia",
  "B. Inggris",
  "Ekonomi",
  "Biologi",
  "Kimia",
  "PKN",
  "Sejarah",
];

/** Nav links */
export const navLinks = [
  { label: "Beranda", href: "/", active: true },
  { label: "Bimble", href: "/bimble", active: false },
  { label: "LeaderBoard", href: "/leaderboard", active: false },
  { label: "Profile", href: "/profile", active: false },
];
