"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

export default function FloatingOrbs({
  count = 5,
  className = "",
}: FloatingOrbsProps) {
  const shouldReduceMotion = useReducedMotion();

  const orbs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      color: i % 3 === 0 ? "rgba(99, 102, 241, 0.1)" : i % 3 === 1 ? "rgba(34, 211, 238, 0.08)" : "rgba(167, 139, 250, 0.08)",
    }));
  }, [count]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-[80px]"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
