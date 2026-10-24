import React from "react";
import { Link } from "react-router-dom";

interface DeskmeritLogoProps {
  variant?: "horizontal" | "reverse" | "stacked" | "symbol";
  endorsement?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DeskmeritLogo({
  variant = "horizontal",
  endorsement = false,
  className = "",
  size = "md",
}: DeskmeritLogoProps) {
  const isDark = variant === "reverse";
  const strokeColor = isDark ? "#FFFFFF" : "#0F1730";
  const textColor = isDark ? "#FFFFFF" : "#0F1730";
  const subTextColor = isDark ? "#9AA1B2" : "#4A5370";

  // Scale configs based on size
  const iconSize = size === "sm" ? 24 : size === "lg" ? 38 : 30;
  const fontSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  const symbolSvg = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* 
        Master Construction:
        Grid 64x64, Ring radius 13, center (34, 25), stroke weight 8.5 round caps.
        Starts at stem, ends at 45 deg (three-quarters closed).
        Stem: vertical from ring center-line down to 27 units below (x=21, y=25 to 52).
        Pulse dot: Ø 10.8 (r=5.4), center (31.2, 37.7), Ember #FF5A36.
      */}
      <path
        d="M 21 52 L 21 25 A 13 13 0 1 1 43.19 34.19"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31.2" cy="37.7" r="5.4" fill="#FF5A36" />
    </svg>
  );

  if (variant === "symbol") {
    return (
      <Link to="/" aria-label="Deskmerit home" className={`inline-flex items-center ${className}`}>
        {symbolSvg}
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        to="/"
        aria-label="Deskmerit home"
        className={`group inline-flex flex-col items-center text-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember rounded-lg p-1 ${className}`}
      >
        {symbolSvg}
        <span
          className={`font-display font-bold tracking-[-0.03em] ${fontSize}`}
          style={{ color: textColor }}
        >
          deskmerit
        </span>
        {endorsement && (
          <span className="text-[11px] font-medium tracking-tight text-slate" style={{ color: subTextColor }}>
            A Kombee Technologies product
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link
      to="/"
      aria-label="Deskmerit home"
      className={`group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember rounded-lg py-1 ${className}`}
    >
      {symbolSvg}
      <div className="flex flex-col">
        <span
          className={`font-display font-bold tracking-[-0.03em] leading-none ${fontSize}`}
          style={{ color: textColor }}
        >
          deskmerit
        </span>
        {endorsement && (
          <span
            className="text-[11px] font-medium tracking-tight mt-0.5"
            style={{ color: subTextColor }}
          >
            A Kombee Technologies product
          </span>
        )}
      </div>
    </Link>
  );
}
