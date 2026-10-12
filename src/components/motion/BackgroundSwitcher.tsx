"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface BackgroundSwitcherProps {
  children: ReactNode;
  className?: string;
  selectedKey: string;
}

export default function BackgroundSwitcher({
  children,
  className = "",
  selectedKey,
}: BackgroundSwitcherProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedKey}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
