"use client";

import { useEffect, useRef } from "react";
import { cqm } from "@/lib/cq";

const REVIEWS = [
  {
    quote: "Aplikasi ini membantu banget, saya jadi bisa lolos snbt dan masuk ke univ impian aku!",
    name: "Liora Wattson",
    uni: "Universitas Gadjah Mada",
    bg: "#ffffff",
    avatar: "#ffffff",
  },
  {
    quote: "Aplikasi ini membantu banget, saya jadi bisa lolos snbt dan masuk ke univ impian aku!",
    name: "Liora Wattson",
    uni: "Universitas Indonesia",
    bg: "#cfb1ed",
    avatar: "#e6b2e2",
  },
  {
    quote: "Aplikasi ini membantu banget, saya jadi bisa lolos snbt dan masuk ke univ impian aku!",
    name: "Liora Wattson",
    uni: "Institut Teknologi Bandung",
    bg: "#ffffff",
    avatar: "#e6b2e2",
  },
  {
    quote: "Aplikasi ini membantu banget, saya jadi bisa lolos snbt dan masuk ke univ impian aku!",
    name: "Liora Wattson",
    uni: "Universitas Diponegoro",
    bg: "#c9cef4",
    avatar: "#ffffff",
  },
];

function Stars() {
  return (
    <div className="flex gap-[0.2cqw]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" style={{ width: cqm(21), height: cqm(21) }} fill="#f0f54b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Infinite review carousel:
 * - Cards auto-scroll to the left continuously (requestAnimationFrame).
 * - Pauses while hovered / being dragged so the user can read or grab it.
 * - Drag (pointer events, works with mouse + touch) to scrub back & forth.
 * - Content is rendered twice; when scrollLeft reaches the start of the 2nd
 *   copy we wrap back by one set — visually seamless, so it loops forever.
 */
export function ReviewWeb() {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const lastXRef = useRef(0);
  const resumeTimerRef = useRef<number | null>(null);

  const scheduleResume = () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    // Wait ~1s after a gesture so the browser's native touch momentum can
    // finish before auto-scroll kicks back in (otherwise they fight).
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    let rafId = 0;
    let last = 0;
    const step = (t: number) => {
      const track = trackRef.current;
      if (track) {
        const wrap = track.children[REVIEWS.length] as HTMLElement | undefined;
        const wrapPoint = wrap ? wrap.offsetLeft : 0;
        if (last && !pausedRef.current) {
          // ~3% of track width per second — proportional to the layout, no px.
          const speed = track.clientWidth * 0.03;
          track.scrollLeft += ((t - last) / 1000) * speed;
        }
        // Seamless wrap: once we reach the start of the duplicated set, jump
        // back by exactly one set. Visually identical -> infinite loop.
        if (wrapPoint > 0 && track.scrollLeft >= wrapPoint) {
          track.scrollLeft -= wrapPoint;
        }
        last = t;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pausedRef.current = true; // stop auto-scroll the moment the user touches/grabs
    // Touch/pen rely on the browser's native horizontal scroll (reliable on
    // phones). Manual drag-to-scroll is only needed for mouse on desktop.
    if (e.pointerType !== "mouse") return;
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const wrap = track.children[REVIEWS.length] as HTMLElement | undefined;
    const wrapPoint = wrap ? wrap.offsetLeft : 0;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    let next = track.scrollLeft - dx; // drag right -> content follows cursor
    if (wrapPoint > 0) {
      if (next < 0) next += wrapPoint; // wrap backwards, seamless
      if (next >= wrapPoint) next -= wrapPoint; // wrap forwards, seamless
    }
    track.scrollLeft = next;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) {
      draggingRef.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
    }
    scheduleResume(); // resume auto-scroll after native momentum settles
  };

  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: cqm(60), paddingBottom: cqm(80) }}
    >
      {/* Edge fade masks — cards gently fade out at left/right edges instead of
          being cut off sharply. pointer-events-none keeps drag/scroll working. */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-10"
        style={{
          left: 0,
          top: cqm(60),
          bottom: cqm(80),
          width: cqm(80),
          background:
            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute z-10"
        style={{
          right: 0,
          top: cqm(60),
          bottom: cqm(80),
          width: cqm(80),
          background:
            "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        ref={trackRef}
        className="flex w-full cursor-grab select-none overflow-x-auto active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ gap: cqm(63), paddingInline: cqm(24), touchAction: "pan-x pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={() => {
          pausedRef.current = true;
        }}
        onPointerLeave={() => {
          if (!draggingRef.current) scheduleResume();
        }}
      >
        {items.map((r, i) => (
          <div
            key={i}
            className="flex flex-col rounded-[2.08cqw] px-[1.8cqw] py-[2cqw]"
            style={{
              width: cqm(392),
              minWidth: cqm(392),
              height: cqm(421),
              backgroundColor: r.bg,
              borderStyle: "solid",
              borderWidth: cqm(1),
              borderColor: "rgba(108, 99, 99, 0.5)", // #6c6363 @ 50%
              borderRadius: cqm(30),
              boxShadow:
                r.bg === "#ffffff"
                  ? `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.10), 0 ${cqm(2)} ${cqm(6)} rgba(28,20,81,0.06)`
                  : undefined,
            }}
          >
            <p
              className="font-normal"
              style={{
                fontSize: cqm(24),
                color: "#1c1451",
                lineHeight: 1.4,
              }}
            >
              {r.quote}
            </p>
            <div className="mt-auto">
              <Stars />
              <div className="mt-[1cqw] flex items-center gap-[0.9cqw]">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: cqm(58),
                    height: cqm(58),
                    backgroundColor: r.avatar,
                    borderStyle: "solid",
                    borderWidth: cqm(1),
                    borderColor:
                      r.avatar === "#ffffff" ? "rgba(108, 99, 99, 0.5)" : "transparent",
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: cqm(34), height: cqm(34) }} fill="#1c1451">
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold" style={{ fontSize: cqm(16), color: "#1c1451" }}>
                    {r.name}
                  </span>
                  <span className="font-normal" style={{ fontSize: cqm(14), color: "#1c1451" }}>
                    {r.uni}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
