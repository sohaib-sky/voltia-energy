"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Spinner({
  className = "",
  size = "md",
}: SpinnerProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  if (shouldReduceMotion) {
    return (
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-accent border-t-transparent ${className}`}
      />
    );
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-full border-2 border-accent border-t-transparent ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, ease: "linear", repeat: Infinity }}
    />
  );
}
