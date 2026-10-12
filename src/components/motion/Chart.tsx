"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ChartProps {
  children: ReactNode;
  className?: string;
  data?: number[];
  labels?: string[];
  type?: "bar" | "line" | "pie";
}

export default function Chart({
  children,
  className = "",
  data = [],
  labels = [],
  type = "bar",
}: ChartProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
