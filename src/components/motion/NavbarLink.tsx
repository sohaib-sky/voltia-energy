"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface NavbarLinkProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function NavbarLink({
  children,
  className = "",
  href = "#",
}: NavbarLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      className={`relative ${className}`}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
