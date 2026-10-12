"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Box({ children, className = "", onClick }: BoxProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
