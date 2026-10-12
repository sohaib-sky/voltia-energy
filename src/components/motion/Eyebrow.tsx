"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Eyebrow({
  children,
  className = "",
  delay = 0,
}: EyebrowProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.span>
  );
}
