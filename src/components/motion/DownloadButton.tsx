"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface DownloadButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function DownloadButton({
  children,
  className = "",
  onClick,
}: DownloadButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async () => {
    if (shouldReduceMotion) {
      onClick?.();
      return;
    }

    setIsDownloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onClick?.();
    setIsDownloading(false);
  };

  if (shouldReduceMotion) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <motion.div
          className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        />
      ) : (
        children
      )}
    </motion.button>
  );
}
