"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface InputProps {
  children: ReactNode;
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input({
  children,
  className = "",
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        className="relative"
        animate={{
          boxShadow: isFocused
            ? "0 0 0 2px rgba(99, 102, 241, 0.5)"
            : "0 0 0 0px rgba(99, 102, 241, 0)",
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full rounded-lg border border-border bg-white/5 px-4 py-2 text-text-primary placeholder-text-muted outline-none"
        />
      </motion.div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
