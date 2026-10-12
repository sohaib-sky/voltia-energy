"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  children,
  className = "",
  autoPlay = false,
  interval = 5000,
}: CarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div>{children[currentIndex]}</div>
        <div className="flex gap-2">
          <button onClick={goPrev}>Prev</button>
          <button onClick={goNext}>Next</button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-2">
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  );
}
