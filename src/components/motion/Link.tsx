"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Link({
  children,
  className = "",
  href = "#",
  onClick,
}: LinkProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={className}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}
