"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export default function Grid({
  children,
  className = "",
  cols = 3,
  gap = "md",
}: GridProps) {
  const shouldReduceMotion = useReducedMotion();

  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const gapClass = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8",
  };

  if (shouldReduceMotion) {
    return (
      <div className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
