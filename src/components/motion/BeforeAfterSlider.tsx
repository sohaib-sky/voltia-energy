"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  before: ReactNode;
  after: ReactNode;
  className?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  className = "",
}: BeforeAfterSliderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    window.addEventListener("touchmove", handleTouchMove);
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, [handleTouchMove]);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div className="relative overflow-hidden rounded-xl">
          <div className="relative aspect-square w-full">
            {after}
          </div>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative aspect-square w-full">
              {before}
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-0 bottom-0 -ml-px w-0.5 bg-white/80" />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-black/20">
                <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            BEFORE
          </div>
          <div className="absolute top-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            AFTER
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl select-none ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-square w-full">
        {after}
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative aspect-square w-full">
          {before}
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-0 bottom-0 -ml-px w-0.5 bg-white/80" />
        <motion.div
          animate={{ scale: isDragging ? 1.1 : 1 }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-black/20">
            <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        BEFORE
      </div>
      <div className="absolute top-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        AFTER
      </div>
    </div>
  );
}
