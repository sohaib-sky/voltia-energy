"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, Image, Palette, Zap, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Background Removal",
    description: "Separate the subject from the background using a real AI processing pipeline.",
  },
  {
    icon: Scissors,
    title: "Clean Cutouts",
    description: "Create polished transparent results for your next design.",
  },
  {
    icon: Image,
    title: "Transparent PNG",
    description: "Keep transparency when you need flexible image placement.",
  },
  {
    icon: Palette,
    title: "Custom Backgrounds",
    description: "Replace the removed background with a clean color or gradient.",
  },
  {
    icon: Zap,
    title: "Fast Workflow",
    description: "Upload, process, customize, download.",
  },
  {
    icon: SlidersHorizontal,
    title: "Simple Editing",
    description: "Get the result without learning a complicated editor.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="editorial-heading">
            BUILT TO REMOVE
            <br />
            <span className="text-gradient">THE DISTRACTION.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                <feature.icon className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
