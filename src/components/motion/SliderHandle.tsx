"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SliderHandleProps {
  className?: string;
}

export default function SliderHandle({ className = "" }: SliderHandleProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    />
  );
}
