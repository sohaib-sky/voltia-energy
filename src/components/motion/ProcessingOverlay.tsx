"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProcessingOverlayProps {
  className?: string;
}

export default function ProcessingOverlay({ className = "" }: ProcessingOverlayProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm ${className}`}>
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-12 w-12">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-2 rounded-full bg-accent/10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
        <motion.p
          className="text-sm font-medium text-text-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          Processing...
        </motion.p>
      </div>
    </motion.div>
  );
}
