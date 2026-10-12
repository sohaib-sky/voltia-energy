"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: [
            "0 0 0px transparent",
            "2px 0 0px rgba(255,0,0,0.5), -2px 0 0px rgba(0,255,255,0.5)",
            "0 0 0px transparent",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
