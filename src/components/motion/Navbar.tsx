"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export default function Navbar({ children, className = "" }: NavbarProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <nav className={className}>{children}</nav>;
  }

  return (
    <motion.nav
      className={className}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.nav>
  );
}
