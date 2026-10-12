"use client";

import { motion, useReducedMotion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterAnimationProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export default function CounterAnimation({
  from = 0,
  to,
  duration = 2,
  className = "",
  delay = 0,
  suffix = "",
  prefix = "",
}: CounterAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (shouldReduceMotion) {
      motionValue.set(to);
      return;
    }

    const controls = animate(motionValue, to, {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    });

    return () => controls.stop();
  }, [shouldReduceMotion, motionValue, to, duration, delay]);

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {prefix}{to}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}
