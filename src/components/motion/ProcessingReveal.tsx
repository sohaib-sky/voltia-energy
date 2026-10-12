"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ProcessingRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ProcessingReveal({
  children,
  className = "",
  delay = 0,
}: ProcessingRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
