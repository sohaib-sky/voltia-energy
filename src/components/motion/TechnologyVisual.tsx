"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TechnologyVisualProps {
  className?: string;
}

export default function TechnologyVisual({ className = "" }: TechnologyVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-accent/10 blur-[60px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-accent-cyan/10 blur-[40px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
