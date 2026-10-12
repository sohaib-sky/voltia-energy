"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function CTAButton({
  children,
  className = "",
  href = "#",
  onClick,
  variant = "primary",
}: CTAButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 rounded-[inherit] bg-accent/20 blur-xl"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      )}
      {children}
    </motion.a>
  );
}
