"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface HeroUploadCardProps {
  children: ReactNode;
  className?: string;
}

export default function HeroUploadCard({
  children,
  className = "",
}: HeroUploadCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-cyan/10 blur-2xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      {children}
    </motion.div>
  );
}
