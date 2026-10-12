"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ResultCardRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ResultCardReveal({
  children,
  className = "",
  delay = 0,
}: ResultCardRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
