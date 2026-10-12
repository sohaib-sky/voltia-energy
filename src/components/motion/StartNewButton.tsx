"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface StartNewButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function StartNewButton({
  children,
  className = "",
  onClick,
}: StartNewButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
