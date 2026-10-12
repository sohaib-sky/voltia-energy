"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline" | "away";
}

export default function Avatar({
  children,
  className = "",
  size = "md",
  status,
}: AvatarProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {status && (
        <motion.span
          className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background"
          style={{
            backgroundColor:
              status === "online" ? "#22c55e" : status === "away" ? "#f59e0b" : "#6b7280",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
