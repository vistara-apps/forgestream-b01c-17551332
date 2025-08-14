"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

export function Tooltip({
  children,
  content,
  position = "top",
  delay = 300,
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
      updateTooltipPosition();
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsVisible(false);
  };

  const updateTooltipPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = triggerRect.top + scrollTop - tooltipRect.height - 8;
        left = triggerRect.left + scrollLeft + (triggerRect.width / 2) - (tooltipRect.width / 2);
        break;
      case "bottom":
        top = triggerRect.bottom + scrollTop + 8;
        left = triggerRect.left + scrollLeft + (triggerRect.width / 2) - (tooltipRect.width / 2);
        break;
      case "left":
        top = triggerRect.top + scrollTop + (triggerRect.height / 2) - (tooltipRect.height / 2);
        left = triggerRect.left + scrollLeft - tooltipRect.width - 8;
        break;
      case "right":
        top = triggerRect.top + scrollTop + (triggerRect.height / 2) - (tooltipRect.height / 2);
        left = triggerRect.right + scrollLeft + 8;
        break;
    }

    // Ensure tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 0) left = 0;
    if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width;
    if (top < 0) top = 0;
    if (top + tooltipRect.height > viewportHeight + scrollTop) top = viewportHeight + scrollTop - tooltipRect.height;

    setTooltipPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("resize", updateTooltipPosition);
      window.addEventListener("scroll", updateTooltipPosition);
    }

    return () => {
      window.removeEventListener("resize", updateTooltipPosition);
      window.removeEventListener("scroll", updateTooltipPosition);
    };
  }, [isVisible]);

  const tooltipContent = isVisible && isMounted && (
    <div
      ref={tooltipRef}
      className={`fixed z-50 px-2 py-1 text-xs font-medium text-white bg-primary rounded shadow-md pointer-events-none animate-fade-in ${className}`}
      style={{
        top: `${tooltipPosition.top}px`,
        left: `${tooltipPosition.left}px`,
      }}
      role="tooltip"
    >
      {content}
      <div
        className={`absolute w-2 h-2 bg-primary transform rotate-45 ${
          position === "top" ? "bottom-0 translate-y-1/2" :
          position === "bottom" ? "top-0 -translate-y-1/2" :
          position === "left" ? "right-0 translate-x-1/2" :
          "left-0 -translate-x-1/2"
        }`}
        style={{
          left: position === "top" || position === "bottom" ? "50%" : undefined,
          top: position === "left" || position === "right" ? "50%" : undefined,
        }}
      />
    </div>
  );

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>
      {isMounted && tooltipContent && createPortal(tooltipContent, document.body)}
    </>
  );
}

