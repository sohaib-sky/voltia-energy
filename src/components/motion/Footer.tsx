"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
  className?: string;
}

export default function Footer({ children, className = "" }: FooterProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <footer className={className}>{children}</footer>;
  }

  return (
    <motion.footer
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.footer>
  );
}
