"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className={`fixed top-0 right-0 left-0 z-[101] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-cyan to-accent-violet ${className}`}
      style={{ scaleX }}
    />
  );
}
