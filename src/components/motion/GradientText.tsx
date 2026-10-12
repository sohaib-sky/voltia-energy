"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: string;
}

export default function GradientText({
  text,
  className = "",
  gradient = "linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #a78bfa 100%)",
}: GradientTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span
        className={className}
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      style={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {text}
    </motion.span>
  );
}
