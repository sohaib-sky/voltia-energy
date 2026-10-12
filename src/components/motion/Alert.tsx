"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  className?: string;
  type?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
  isOpen?: boolean;
}

export default function Alert({
  children,
  className = "",
  type = "info",
  onClose,
  isOpen = true,
}: AlertProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={className}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
