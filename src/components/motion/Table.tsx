"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
  headers?: string[];
}

export default function Table({
  children,
  className = "",
  headers = [],
}: TableProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <table>
          {headers.length > 0 && (
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>{children}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={className}>
      <table>
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <motion.th
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {header}
                </motion.th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
