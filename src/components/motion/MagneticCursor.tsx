"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MagneticCursor() {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, x, y]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-4 w-4 rounded-full border border-accent/50"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
