"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  duration = 0.8,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.15, filter: "blur(8px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: duration + 0.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.div>
  );
}
