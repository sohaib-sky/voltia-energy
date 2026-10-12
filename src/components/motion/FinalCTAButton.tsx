"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FinalCTAButtonProps {
  children: ReactNode;
  className?: string;
}

export default function FinalCTAButton({
  children,
  className = "",
}: FinalCTAButtonProps) {
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
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="absolute -inset-2 rounded-2xl bg-accent/20 blur-xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
      {children}
    </motion.div>
  );
}
