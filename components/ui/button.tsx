import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-[#1c1451] text-white hover:bg-[#2a235c]",
  accent: "bg-[#f0f54b] text-[#1c1451] hover:bg-[#ccd22a]",
  ghost: "bg-transparent text-[#1c1451] hover:bg-[#1c1451]/5",
  outline: "border-2 border-[#1c1451] text-[#1c1451] hover:bg-[#1c1451]/5",
};

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className = "", ...props }: BtnProps) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-[0.5em] rounded-full font-sans font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
