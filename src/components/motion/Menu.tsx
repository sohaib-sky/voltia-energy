"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MenuProps {
  children: ReactNode;
  className?: string;
}

export default function Menu({ children, className = "" }: MenuProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
