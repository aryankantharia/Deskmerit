import React from "react";

type BadgeTone = "success" | "warning" | "error" | "info" | "neutral" | "ai" | "primary" | "accent";

const toneClasses: Record<BadgeTone, string> = {
  success: "bg-success-light text-success border-success-border",
  warning: "bg-warning-light text-warning border-warning-border",
  error: "bg-error-light text-error border-error-border",
  info: "bg-info-light text-info border-info-border",
  neutral: "bg-neutral-100 text-neutral-700 border-neutral-300",
  ai: "bg-ai-light text-ai border-[#E9D5FF]",
  primary: "bg-primary-light text-primary border-[#C7EFEA]",
  accent: "bg-accent-light text-[#9A5546] border-[#F0DCD6]"
};

export function Badge({
  tone = "neutral",
  children,
  className = ""




}: {tone?: BadgeTone;children: React.ReactNode;className?: string;}) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-caption font-medium ${toneClasses[tone]} ${className}`}>
      
      {children}
    </span>);

}