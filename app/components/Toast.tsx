"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { createPortal } from "react-dom";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export function Toast({
  message,
  type = "info",
  duration = 5000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 300); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const iconMap = {
    success: "check",
    error: "x",
    info: "info",
  };

  const typeClasses = {
    success: "toast-success",
    error: "toast-error",
    info: "toast-info",
  };

  if (!isMounted) return null;

  const toastContent = (
    <div
      className={`toast ${typeClasses[type]} ${
        isVisible ? "animate-fade-in" : "opacity-0 transition-opacity duration-300"
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <Icon
            name={iconMap[type] as any}
            size="md"
            className={
              type === "success"
                ? "text-green-500"
                : type === "error"
                ? "text-destructive"
                : "text-accent"
            }
          />
        </div>
        <div className="flex-1 mr-2">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Close notification"
        >
          <Icon name="x" size="sm" />
        </button>
      </div>
    </div>
  );

  return createPortal(toastContent, document.body);
}

interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

export const ToastContext = React.createContext<ToastContextValue>({
  showToast: () => {},
});

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<
    Array<{ id: string; message: string; type: ToastType; duration?: number }>
  >([]);

  const showToast = (
    message: string,
    type: ToastType = "info",
    duration?: number
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

