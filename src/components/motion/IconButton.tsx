"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function IconButton({
  children,
  className = "",
  onClick,
  ariaLabel,
}: IconButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <button onClick={onClick} className={className} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
