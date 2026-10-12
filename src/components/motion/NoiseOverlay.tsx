"use client";

import { motion, useReducedMotion } from "framer-motion";

interface NoiseOverlayProps {
  className?: string;
  opacity?: number;
}

export default function NoiseOverlay({
  className = "",
  opacity = 0.025,
}: NoiseOverlayProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={`pointer-events-none fixed inset-0 z-[100] ${className}`}
        style={{
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    );
  }

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-[100] ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
      animate={{ opacity: [opacity, opacity * 1.2, opacity] }}
      transition={{ duration: 0.1, repeat: Infinity }}
    />
  );
}
