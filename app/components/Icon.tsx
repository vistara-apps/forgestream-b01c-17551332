"use client";

import {
  Calendar,
  Check,
  Crown,
  DollarSign,
  ExternalLink,
  Lock,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Settings,
  Shield,
  Star,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const icons = {
  calendar: Calendar,
  check: Check,
  crown: Crown,
  dollarSign: DollarSign,
  externalLink: ExternalLink,
  lock: Lock,
  messageCircle: MessageCircle,
  minus: Minus,
  plus: Plus,
  refresh: RotateCcw,
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
  size?: "sm" | "md" | "lg" | number;
  className?: string;
}

export function Icon({ name, size = "md", className = "" }: IconProps) {
  const IconComponent = icons[name];
  
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  // Handle numeric sizes
  if (typeof size === 'number') {
    return <IconComponent size={size} className={className} />;
  }

  return <IconComponent className={`${sizeClasses[size]} ${className}`} />;
}
