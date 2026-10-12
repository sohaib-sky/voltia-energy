"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

interface TabsProps {
  children: ReactNode;
  className?: string;
  tabs: string[];
  defaultTab?: number;
}

export default function Tabs({
  children,
  className = "",
  tabs,
  defaultTab = 0,
}: TabsProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div className="flex gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={index === activeTab ? "active" : ""}
            >
              {tab}
            </button>
          ))}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative ${index === activeTab ? "text-text-primary" : "text-text-muted"}`}
          >
            {tab}
            {index === activeTab && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                layoutId="activeTab"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
