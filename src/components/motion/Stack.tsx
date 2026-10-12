"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}

export default function Stack({
  children,
  className = "",
  gap = "md",
}: StackProps) {
  const shouldReduceMotion = useReducedMotion();

  const gapClass = {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-8",
  };

  if (shouldReduceMotion) {
    return (
      <div className={`flex flex-col ${gapClass[gap]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`flex flex-col ${gapClass[gap]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
