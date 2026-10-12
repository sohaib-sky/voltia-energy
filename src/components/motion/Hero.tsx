"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
  className?: string;
}

export default function Hero({ children, className = "" }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
}
