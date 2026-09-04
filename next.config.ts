import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Dev diakses via LAN (HP/laptop lain) — izinkan HMR dari IP tersebut.
  allowedDevOrigins: ["116.254.117.234"],
};

export default nextConfig;
