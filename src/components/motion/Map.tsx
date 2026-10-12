"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MapProps {
  children: ReactNode;
  className?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

export default function Map({
  children,
  className = "",
  lat = 0,
  lng = 0,
  zoom = 10,
}: MapProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
