"use client";

import { motion, useReducedMotion } from "framer-motion";

interface LightBeamProps {
  className?: string;
  color?: string;
}

export default function LightBeam({
  className = "",
  color = "rgba(99, 102, 241, 0.1)",
}: LightBeamProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{
        background: `linear-gradient(180deg, ${color} 0%, transparent 100%)`,
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scaleY: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}
