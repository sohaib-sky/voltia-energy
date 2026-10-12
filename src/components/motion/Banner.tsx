"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

export default function Banner({
  children,
  className = "",
  onClose,
  isOpen = true,
}: BannerProps) {
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
