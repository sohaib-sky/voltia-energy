"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface BorderGlowProps {
  children: ReactNode;
  className?: string;
  color?: string;
  duration?: number;
}

export default function BorderGlow({
  children,
  className = "",
  color = "rgba(99, 102, 241, 0.3)",
  duration = 2,
}: BorderGlowProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        animate={{
          opacity: [0, 0.5, 0],
          boxShadow: [
            `0 0 0px ${color}`,
            `0 0 20px ${color}`,
            `0 0 0px ${color}`,
          ],
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      {children}
    </div>
  );
}
