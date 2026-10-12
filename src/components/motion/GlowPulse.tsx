"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlowPulseProps {
  className?: string;
  color?: string;
  duration?: number;
}

export default function GlowPulse({
  className = "",
  color = "rgba(99, 102, 241, 0.15)",
  duration = 3,
}: GlowPulseProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
