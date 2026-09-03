"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cqm } from "@/lib/cq";

const links = [
  { href: "/dashboard", label: "Beranda" },
  { href: "/bimble", label: "Bimble" },
  { href: "/leaderboard", label: "LeaderBoard" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="nav-scope flex w-full flex-col gap-[calc(1.9444cqw*var(--pm,1))] py-[calc(1.6667cqw*var(--pm,1))] md:h-[7.3611cqw] md:flex-row md:items-center md:gap-0 md:py-0"
      style={{
        paddingInline: cqm(76),
      }}
    >
      {/* Baris 1 di HP (logo + streak/bell); menyatu ke baris desktop via md:contents */}
      <div className="flex w-full items-center justify-between md:contents">
        {/* Logo + wordmark */}
        <Link href="/dashboard" className="flex items-center gap-[1.2cqw]">
          <span
            className="block rounded-[2cqw] bg-[#d9d9d9]"
            style={{ width: cqm(55), height: cqm(55) }}
          />
          <span
            className="font-display font-semibold text-[#454545]"
            style={{ fontSize: cqm(32), letterSpacing: "0.02em" }}
          >
            SIAPIN
          </span>
        </Link>

        {/* Right: streak + bell */}
        <div className="flex items-center gap-[1.6cqw] md:ml-auto">
          <div className="flex items-center gap-[0.8cqw]">
            <span
              className="relative inline-block rounded-full bg-[#ffce51]"
              style={{ width: cqm(40), height: cqm(40) }}
            >
              {/* flame glyph */}
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#ff7324]"
                style={{ fontSize: cqm(24) }}
              >
                🔥
              </span>
            </span>
            <span className="font-bold text-[#b6744f]" style={{ fontSize: cqm(24) }}>
              5 days
            </span>
          </div>

          <div className="relative" style={{ width: cqm(38), height: cqm(46) }}>
            {/* bell outline */}
            <svg
              viewBox="0 0 38 46"
              className="absolute inset-0"
              fill="none"
              stroke="#454545"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 4C10 4 6 12 6 20v8l-4 8h34l-4-8v-8C34 12 28 4 19 4Z" />
              <path d="M15 42a4 4 0 0 0 8 0" />
            </svg>
            <span
              className="absolute right-0 top-0 flex items-center justify-center rounded-full bg-[#e5bbcb] font-bold text-white"
              style={{ width: cqm(19), height: cqm(19), fontSize: cqm(10) }}
            >
              3
            </span>
          </div>
        </div>
      </div>

      {/* Nav links — baris 2 di HP, sejajar logo di desktop */}
      <nav className="flex w-full items-center justify-between gap-[4.6cqw] md:ml-[9.0278cqw] md:w-auto md:justify-start">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className="relative py-[calc(0.8333cqw*var(--pm,1))] font-bold md:py-0"
              style={{
                fontSize: cqm(24),
                color: active ? "#e3aec2" : "#7e7e7e",
              }}
            >
              {l.label}
              {active && (
                <span
                  className="absolute left-0 -bottom-[0.3cqw] rounded-full bg-[#e3aec2]"
                  style={{ width: "100%", height: cqm(9) }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
