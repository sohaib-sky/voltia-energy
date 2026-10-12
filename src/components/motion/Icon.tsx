"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Icon({
  children,
  className = "",
  size = "md",
}: IconProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizeClass = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  if (shouldReduceMotion) {
    return <div className={`${sizeClass[size]} ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`${sizeClass[size]} ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
