"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Confetti/fireworks dari ujung podium 1-2-3 (elemen [data-podium-cap]).
 * - Kanvas di-portal ke document.body: koordinat selalu pas viewport,
 *   bebas dari transform animasi page di atasnya.
 * - Mulai saat podium masuk viewport (penting di HP: podium di bawah lipatan).
 * - Semburan berurutan ~4 detik, lalu berhenti sendiri.
 * Murni canvas 2D — tanpa dependensi. Hormat prefers-reduced-motion.
 */

const COLORS = [
  "#df5b97",
  "#ffce51",
  "#ffc500",
  "#c9cef4",
  "#cfb1ed",
  "#ffffff",
  "#688d37",
  "#ff7324",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  rot: number;
  vr: number;
  life: number;
  maxLife: number;
  color: string;
  circle: boolean;
}

export function PodiumConfetti() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let running = true;
    let raf = 0;
    let startedAt = -1;
    let last = 0;
    const parts: Particle[] = [];

    const fit = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.floor(window.innerWidth * dpr);
      cv.height = Math.floor(window.innerHeight * dpr);
    };
    fit();

    const emitters = () =>
      [...document.querySelectorAll("[data-podium-cap]")].map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + 6 };
      });

    const spawn = (x: number, y: number, n: number) => {
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * 1.15;
        const sp = 4 + Math.random() * 7;
        parts.push({
          x,
          y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          w: 5 + Math.random() * 6,
          h: 8 + Math.random() * 8,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.3,
          life: 0,
          maxLife: 90 + Math.random() * 60,
          color: COLORS[(Math.random() * COLORS.length) | 0],
          circle: Math.random() < 0.35,
        });
      }
    };

    const tick = (t: number) => {
      if (!running || startedAt < 0) return;
      const dt = Math.min(50, t - last) / 16.666;
      last = t;

      // Semburan berurutan per podium selama ~1.6 dtk masing-masing.
      const els = emitters();
      els.forEach((e, i) => {
        const local = (t - startedAt - i * 280) / 1000;
        if (local > 0 && local < 1.6 && Math.random() < 0.9) {
          spawn(e.x, e.y, 3);
        }
      });

      const dpr = Math.min(2, window.devicePixelRatio || 1);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life += dt;
        if (p.life >= p.maxLife || p.y > window.innerHeight + 30) {
          parts.splice(i, 1);
          continue;
        }
        p.vy += 0.22 * dt;
        p.vx *= 1 - 0.012 * dt;
        p.vy *= 1 - 0.004 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vr * dt;
        const fade = p.life > p.maxLife - 25 ? (p.maxLife - p.life) / 25 : 1;
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, fade));
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.circle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }

      if (t - startedAt < 5200 || parts.length > 0) {
        raf = requestAnimationFrame(tick);
      }
    };

    const begin = () => {
      if (startedAt >= 0) return;
      startedAt = performance.now();
      last = startedAt;
      raf = requestAnimationFrame(tick);
    };

    const first = document.querySelector("[data-podium-cap]");
    let io: IntersectionObserver | null = null;
    if (first) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            begin();
            io?.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      io.observe(first);
    } else {
      begin();
    }

    window.addEventListener("resize", fit);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
      io?.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;
  return createPortal(
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        pointerEvents: "none",
        zIndex: 40,
      }}
    />,
    document.body,
  );
}
