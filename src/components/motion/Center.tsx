"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
  className?: string;
}

export default function Center({ children, className = "" }: CenterProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
