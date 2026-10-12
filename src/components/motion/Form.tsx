"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export default function Form({
  children,
  className = "",
  onSubmit,
}: FormProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }

  return (
    <motion.form
      className={className}
      onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.form>
  );
}
