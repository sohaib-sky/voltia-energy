"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SuccessStateProps {
  children: ReactNode;
  className?: string;
}

export default function SuccessState({ children, className = "" }: SuccessStateProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
