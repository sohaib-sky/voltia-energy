"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScanLineProps {
  className?: string;
  duration?: number;
}

export default function ScanLine({
  className = "",
  duration = 2.5,
}: ScanLineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className={`pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent ${className}`}
      initial={{ top: "0%", opacity: 0 }}
      animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}
