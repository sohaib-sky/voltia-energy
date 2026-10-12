"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RotateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  rotate?: number;
}

export default function RotateIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  rotate = 5,
}: RotateInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, rotate: rotate }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
