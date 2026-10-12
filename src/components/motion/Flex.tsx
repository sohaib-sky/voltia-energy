"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: "row" | "col";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: "sm" | "md" | "lg";
}

export default function Flex({
  children,
  className = "",
  direction = "row",
  align = "center",
  justify = "start",
  gap = "md",
}: FlexProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionClass = direction === "row" ? "flex-row" : "flex-col";
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };
  const gapClass = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8",
  };

  if (shouldReduceMotion) {
    return (
      <div className={`flex ${directionClass} ${alignClass[align]} ${justifyClass[justify]} ${gapClass[gap]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`flex ${directionClass} ${alignClass[align]} ${justifyClass[justify]} ${gapClass[gap]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
