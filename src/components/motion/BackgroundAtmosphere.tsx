"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundAtmosphere() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#060608]" />
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#060608]" />

      {/* Layer 1: Large blurred radial light */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[120px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Layer 2: Secondary atmospheric glow */}
      <motion.div
        className="absolute right-[5%] top-[40%] h-[400px] w-[400px] rounded-full bg-accent-cyan/[0.03] blur-[100px]"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 15, -10, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Layer 3: Tertiary glow */}
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-[300px] w-[300px] rounded-full bg-accent-violet/[0.03] blur-[80px]"
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Layer 4: Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)",
        }}
      />

      {/* Layer 5: Fine noise/grain */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
