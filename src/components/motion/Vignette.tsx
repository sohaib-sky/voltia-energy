"use client";

import { motion, useReducedMotion } from "framer-motion";

interface VignetteProps {
  className?: string;
  intensity?: number;
}

export default function Vignette({
  className = "",
  intensity = 0.5,
}: VignetteProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={`pointer-events-none fixed inset-0 z-[99] ${className}`}
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${intensity}) 100%)`,
        }}
      />
    );
  }

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-[99] ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${intensity}) 100%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
