"use client";

import { ToastProvider } from "./components/Toast";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}

