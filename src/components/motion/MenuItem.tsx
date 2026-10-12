"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MenuItem({
  children,
  className = "",
  onClick,
}: MenuItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      onClick={onClick}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
