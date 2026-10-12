"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FeatureCard({
  children,
  className = "",
  delay = 0,
}: FeatureCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}
