"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface ImageGalleryProps {
  children: ReactNode[];
  className?: string;
}

export default function ImageGallery({
  children,
  className = "",
}: ImageGalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div className="grid grid-cols-2 gap-4">
          {children.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-4">
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedIndex(index)}
          >
            {child}
          </motion.div>
        ))}
      </div>
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            className="max-h-[90vh] max-w-[90vw]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            {children[selectedIndex]}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
