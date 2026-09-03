/**
 * Dynamic-sizing helpers.
 *
 * The dashboard artboard in Figma is 1440px wide. We render everything inside
 * a container whose width follows the viewport (`max-w-[1440px] w-full`) and
 * use container-query units so every size stays proportional to the layout:
 *
 *   1 design px = (1 / 1440) * 100 cqw
 *
 * `cq(64)`  -> "4.4444cqw"  (a 64px element at 1440 design width)
 * `cqh(80)` -> "2.8986cqh"  (relative to container height — used sparingly)
 *
 * Because `cqw` is relative to the container's inline size, the whole UI
 * scales fluidly when the container is narrower/wider than 1440px.
 */
export const DESIGN_W = 1440;

/** Convert a Figma px value (at 1440 width) to a container-query width unit. */
export function cq(px: number): string {
  return `${((px / DESIGN_W) * 100).toFixed(4)}cqw`;
}

/**
 * cq() with the profile HP multiplier.
 * Desktop: identical to cq() (`--pm: 1`).
 * HP <768px: 2x (`--pm: 2`, set by `.profile-scope` in globals.css).
 * Keeps every size proportional — use for ALL sizes inside the profile scope.
 */
export function cqm(px: number): string {
  return `calc(${cq(px)} * var(--pm, 1))`;
}

/** Convert a Figma px value (at 1440 width) to a vw-based fallback unit. */
export function vw(px: number): string {
  return `${((px / DESIGN_W) * 100).toFixed(4)}vw`;
}

/** Fluid font-size helper: min/max in rem, ideal scaled from design px. */
export function fluid(px: number, minRem = 0.75, maxRem = 4): string {
  const v = ((px / DESIGN_W) * 100).toFixed(4);
  return `clamp(${minRem}rem, ${v}vw, ${maxRem}rem)`;
}

/** Design px -> rem (for reference; prefer cq() inside the dashboard container). */
export function rem(px: number): string {
  return `${(px / 16).toFixed(4)}rem`;
}
