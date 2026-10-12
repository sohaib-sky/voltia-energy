"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface ToastProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
  duration?: number;
}

export default function Toast({
  children,
  className = "",
  onClose,
  isOpen = true,
  duration = 3000,
}: ToastProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
