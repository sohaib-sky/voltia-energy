"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface ProgressLineProps {
  className?: string;
}

export default function ProgressLine({ className = "" }: ProgressLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  if (shouldReduceMotion) {
    return <div ref={ref} className={className} />;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-cyan to-accent-violet"
        style={{ scaleY }}
      />
    </div>
  );
}
