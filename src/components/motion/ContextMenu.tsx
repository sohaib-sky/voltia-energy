"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

interface ContextMenuProps {
  children: ReactNode;
  trigger: ReactNode;
  className?: string;
}

export default function ContextMenu({
  children,
  trigger,
  className = "",
}: ContextMenuProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {trigger}
        {children}
      </div>
    );
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  return (
    <div className={className} onContextMenu={handleContextMenu}>
      {trigger}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 min-w-[160px] rounded-lg border border-border bg-surface p-1 shadow-lg"
            style={{ left: position.x, top: position.y }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
