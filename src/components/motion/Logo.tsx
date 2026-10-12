"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface LogoProps {
  children: ReactNode;
  className?: string;
}

export default function Logo({ children, className = "" }: LogoProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
