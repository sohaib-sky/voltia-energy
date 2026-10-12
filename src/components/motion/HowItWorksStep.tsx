"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface HowItWorksStepProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stepNumber?: string;
}

export default function HowItWorksStep({
  children,
  className = "",
  delay = 0,
  stepNumber,
}: HowItWorksStepProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {stepNumber && (
        <motion.span
          className="absolute -top-4 -right-2 font-display text-6xl font-bold text-white/[0.03]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {stepNumber}
        </motion.span>
      )}
      {children}
    </motion.div>
  );
}
