"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export default function ShimmerText({ text, className = "" }: ShimmerTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      style={{
        background: "linear-gradient(90deg, #f8fafc 0%, #818cf8 50%, #f8fafc 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["200% 0%", "-200% 0%"],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {text}
    </motion.span>
  );
}
