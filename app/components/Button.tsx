"use client";

import { clsx } from "clsx";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "default",
  size = "md",
  className,
  onClick,
  disabled = false,
  icon,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center transition-all duration-150 font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5";
  
  const variantClasses = {
    default: "btn-primary shadow-sm hover:shadow",
    secondary: "btn-secondary shadow-sm hover:shadow", 
    destructive: "btn-destructive shadow-sm hover:shadow",
    outline: "btn-outline hover:border-accent/50",
    ghost: "btn-ghost",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-6 py-3 text-lg rounded-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      type={onClick ? "button" : "submit"}
      aria-disabled={disabled}
    >
      {icon && <span className="mr-2" aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
}
