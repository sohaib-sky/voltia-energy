"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ResultRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ResultReveal({
  children,
  className = "",
  delay = 0,
}: ResultRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
