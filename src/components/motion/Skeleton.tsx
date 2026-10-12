"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "text" | "circular" | "rectangular";
}

export default function Skeleton({
  className = "",
  width,
  height,
  variant = "text",
}: SkeletonProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={`bg-white/5 ${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <motion.div
      className={`bg-white/5 ${className}`}
      style={{ width, height }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
    />
  );
}
