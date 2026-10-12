"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export default function Parallax({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * speed * -100]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

interface CursorParallaxProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function CursorParallax({
  children,
  className = "",
  intensity = 0.02,
}: CursorParallaxProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;

    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) * intensity;
    const y = (e.clientY - innerHeight / 2) * intensity;

    document.documentElement.style.setProperty("--cursor-x", `${x}px`);
    document.documentElement.style.setProperty("--cursor-y", `${y}px`);
  };

  return (
    <div className={className} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
