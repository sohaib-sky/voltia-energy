"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AspectRatioProps {
  children: ReactNode;
  className?: string;
  ratio?: "square" | "video" | "portrait" | "landscape";
}

export default function AspectRatio({
  children,
  className = "",
  ratio = "square",
}: AspectRatioProps) {
  const shouldReduceMotion = useReducedMotion();

  const ratioClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  if (shouldReduceMotion) {
    return (
      <div className={`${ratioClass[ratio]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${ratioClass[ratio]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
