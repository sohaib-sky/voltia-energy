"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SpacerProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Spacer({ className = "", size = "md" }: SpacerProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizeClass = {
    sm: "h-4",
    md: "h-8",
    lg: "h-16",
    xl: "h-24",
  };

  if (shouldReduceMotion) {
    return <div className={`${sizeClass[size]} ${className}`} />;
  }

  return (
    <motion.div
      className={`${sizeClass[size]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
