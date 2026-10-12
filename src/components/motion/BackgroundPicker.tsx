"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface BackgroundPickerProps {
  children: ReactNode;
  className?: string;
  selected: string;
}

export default function BackgroundPicker({
  children,
  className = "",
  selected,
}: BackgroundPickerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      layout
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
