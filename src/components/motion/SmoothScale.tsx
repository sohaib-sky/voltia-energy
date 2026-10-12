"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SmoothScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
  delay?: number;
}

export default function SmoothScale({
  children,
  className = "",
  scale = 1.05,
  duration = 0.6,
  delay = 0,
}: SmoothScaleProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ scale }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
