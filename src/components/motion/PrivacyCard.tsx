"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface PrivacyCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function PrivacyCard({
  children,
  className = "",
  delay = 0,
}: PrivacyCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
