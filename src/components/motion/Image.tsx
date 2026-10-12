"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function Image({
  src,
  alt,
  className = "",
  width,
  height,
}: ImageProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <img src={src} alt={alt} className={className} width={width} height={height} />;
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
