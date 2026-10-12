"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, Palette, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    description: "Choose your image.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Remove",
    description: "AI separates the subject.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Customize",
    description: "Choose the background.",
  },
  {
    number: "04",
    icon: Download,
    title: "Download",
    description: "Save your finished cutout.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="editorial-heading">
            FROM IMAGE
            <br />
            <span className="text-gradient">TO SUBJECT.</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-1/2 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="glass relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                <step.icon className="h-7 w-7 text-accent-light" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
