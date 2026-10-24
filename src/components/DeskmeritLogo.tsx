import React from "react";
import { Link } from "react-router-dom";

interface DeskmeritLogoProps {
  variant?: "horizontal" | "reverse" | "stacked" | "symbol";
  className?: string;
  size?: "sm" | "md" | "lg";
  endorsement?: boolean;
}

export function DeskmeritLogo({
  variant = "horizontal",
  className = "",
  size = "md",
}: DeskmeritLogoProps) {
  const isDark = variant === "reverse";
  const textColor = isDark ? "#FFFFFF" : "#0F1730";

  // Scale configs based on size
  const fontSize =
    size === "sm" ? "text-lg" : size === "lg" ? "text-[27px]" : "text-[23px]";

  if (variant === "symbol") {
    return (
      <Link
        to="/"
        aria-label="Deskmerit home"
        className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#0F1730] text-white font-black text-base ${className}`}
      >
        <span>D</span>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      aria-label="Deskmerit home"
      className={`group inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] rounded-lg py-1 ${className}`}
    >
      <span
        className={`font-sans font-black tracking-[-0.04em] leading-none ${fontSize}`}
        style={{ color: textColor }}
      >
        deskmerit
      </span>
      <span className="w-2 h-2 rounded-full bg-[#FF5A36] shrink-0 self-baseline mb-0.5" />
    </Link>
  );
}
