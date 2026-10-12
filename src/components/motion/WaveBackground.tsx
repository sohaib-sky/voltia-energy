"use client";

import { motion, useReducedMotion } from "framer-motion";

interface WaveBackgroundProps {
  className?: string;
}

export default function WaveBackground({ className = "" }: WaveBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -bottom-1/2 left-0 h-full w-[200%] bg-gradient-to-t from-accent/[0.02] to-transparent"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        style={{
          borderRadius: "40% 40% 0 0",
        }}
      />
      <motion.div
        className="absolute -bottom-1/3 left-0 h-full w-[200%] bg-gradient-to-t from-accent-cyan/[0.01] to-transparent"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        style={{
          borderRadius: "40% 40% 0 0",
        }}
      />
    </div>
  );
}
