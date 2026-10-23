import React from "react";

const LOGO_DARK_TEXT = "/Frame_1261155174.svg";
const LOGO_WHITE_TEXT = "/sqalible-logo.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="/"
      aria-label="Sqalible home"
      className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <img
        src={inverted ? LOGO_WHITE_TEXT : LOGO_DARK_TEXT}
        alt="Sqalible"
        className="h-7 w-auto object-contain"
      />
    </a>
  );
}