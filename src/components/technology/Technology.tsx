"use client";

import { motion } from "framer-motion";
import { Image, Server, Cpu, FileImage, ArrowDown } from "lucide-react";

const flowSteps = [
  { icon: Image, label: "Your Image" },
  { icon: Server, label: "Secure API" },
  { icon: Cpu, label: "AI Processing" },
  { icon: FileImage, label: "Transparent Result" },
];

export default function Technology() {
  return (
    <section id="technology" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="editorial-heading">
            POWERED BY
            <br />
            <span className="text-gradient">REAL AI.</span>
          </h2>
          <p className="editorial-subheading mx-auto mt-6">
            TRUE CUTOUT connects your image to a dedicated background-removal
            processing service through a secure server-side API.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4"
        >
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex w-full flex-col items-center">
              <div className="glass flex w-full max-w-xs items-center justify-center gap-3 rounded-xl px-6 py-4">
                <step.icon className="h-5 w-5 text-accent-light" />
                <span className="text-sm font-semibold text-text-primary">
                  {step.label}
                </span>
              </div>
              {index < flowSteps.length - 1 && (
                <ArrowDown className="my-2 h-4 w-4 text-text-muted" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
