import React from "react";
import { DeskmeritLogo } from "./DeskmeritLogo";

export function Logo({
  inverted = false,
  className = "",
  endorsement = false,
}: {
  inverted?: boolean;
  className?: string;
  endorsement?: boolean;
}) {
  return (
    <DeskmeritLogo
      variant={inverted ? "reverse" : "horizontal"}
      endorsement={endorsement}
      className={className}
    />
  );
}