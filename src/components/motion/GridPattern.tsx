"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GridPatternProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function GridPattern({
  className = "",
  color = "rgba(255,255,255,0.03)",
  size = 40,
}: GridPatternProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={className}
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
    );
  }

  return (
    <motion.div
      className={className}
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
