"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface NotificationProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
  duration?: number;
  type?: "success" | "error" | "warning" | "info";
}

export default function Notification({
  children,
  className = "",
  onClose,
  isOpen = true,
  duration = 5000,
  type = "info",
}: NotificationProps) {
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
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
