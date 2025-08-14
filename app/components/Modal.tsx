
"use client";

import { useEffect, type ReactNode } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface rounded-lg shadow-card max-w-md w-full mx-4 animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-heading font-semibold">{title}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="x" size={20} />
          </Button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
