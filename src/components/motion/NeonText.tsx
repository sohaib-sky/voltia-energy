"use client";

import { motion, useReducedMotion } from "framer-motion";

interface NeonTextProps {
  text: string;
  className?: string;
  color?: string;
}

export default function NeonText({
  text,
  className = "",
  color = "#6366f1",
}: NeonTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      animate={{
        textShadow: [
          `0 0 5px ${color}`,
          `0 0 10px ${color}`,
          `0 0 20px ${color}`,
          `0 0 10px ${color}`,
          `0 0 5px ${color}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.span>
  );
}
