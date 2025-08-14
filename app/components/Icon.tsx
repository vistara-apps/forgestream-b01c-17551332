"use client";

import {
  AlertCircle,
  Calendar,
  Check,
  Crown,
  DollarSign,
  ExternalLink,
  Info,
  Lock,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Search,
  Settings,
  Shield,
  Star,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const icons = {
  alertCircle: AlertCircle,
  calendar: Calendar,
  check: Check,
  crown: Crown,
  dollarSign: DollarSign,
  externalLink: ExternalLink,
  info: Info,
  lock: Lock,
  message: MessageCircle,
  messageCircle: MessageCircle,
  minus: Minus,
  plus: Plus,
  refresh: RotateCcw,
  search: Search,
  settings: Settings,
  shield: Shield,
  star: Star,
  users: Users,
  wallet: Wallet,
  x: X,
  zap: Zap,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number | "sm" | "md" | "lg";
  className?: string;
  "aria-hidden"?: boolean;
}

export function Icon({ name, size = "md", className = "", "aria-hidden": ariaHidden = true }: IconProps) {
  const IconComponent = icons[name];
  
  // Handle numeric sizes
  if (typeof size === "number") {
    return (
      <IconComponent 
        width={size} 
        height={size} 
        className={className} 
        aria-hidden={ariaHidden}
      />
    );
  }
  
  // Handle string sizes
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <IconComponent 
      className={`${sizeClasses[size]} ${className}`} 
      aria-hidden={ariaHidden}
    />
  );
}
