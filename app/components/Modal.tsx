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

    // Handle escape key press
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-surface rounded-lg shadow-card max-w-md w-full mx-auto animate-scale-in">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h3 id="modal-title" className="text-lg sm:text-xl font-semibold">{title}</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            aria-label="Close modal"
            className="focus:ring-offset-0"
          >
            <Icon name="x" size={20} />
          </Button>
        </div>
        <div className="p-4 sm:p-6 max-h-[calc(100vh-10rem)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
