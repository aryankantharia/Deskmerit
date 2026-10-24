import React from "react";
import { PulseTrackLogo } from "./PulseTrackLogo";

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
    <PulseTrackLogo
      variant={inverted ? "reverse" : "horizontal"}
      endorsement={endorsement}
      className={className}
    />
  );
}