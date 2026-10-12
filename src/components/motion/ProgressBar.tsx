"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  className?: string;
  delay?: number;
}

export default function ProgressBar({
  progress,
  className = "",
  delay = 0,
}: ProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div
          className="h-full bg-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        className="h-full bg-accent"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
