"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface BeforeAfterRevealProps {
  children: ReactNode;
  className?: string;
}

export default function BeforeAfterReveal({
  children,
  className = "",
}: BeforeAfterRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
