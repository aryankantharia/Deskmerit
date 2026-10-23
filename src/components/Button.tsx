import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "inverse";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
  "bg-primary text-white hover:bg-primary-hover active:bg-primary-pressed disabled:bg-primary-disabled",
  secondary:
  "border border-primary text-primary bg-white hover:bg-primary-light active:bg-primary-light active:border-primary-pressed active:text-primary-pressed disabled:border-primary-disabled disabled:text-primary-disabled",
  ghost:
  "text-neutral-700 hover:bg-primary-light hover:text-primary active:bg-primary-light active:text-primary-pressed disabled:text-neutral-400",
  danger:
  "bg-error text-white hover:bg-[#C81E1E] active:bg-[#B91C1C] disabled:bg-error-border",
  inverse: "bg-white text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200"
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-body2",
  lg: "h-12 px-6 text-body1"
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>);

  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>);

}