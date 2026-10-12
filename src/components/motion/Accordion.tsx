"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

interface AccordionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  defaultOpen?: boolean;
}

export default function Accordion({
  children,
  className = "",
  title,
  defaultOpen = false,
}: AccordionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {title && <div>{title}</div>}
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between"
        >
          <span>{title}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
