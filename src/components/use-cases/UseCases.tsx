"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Store, User, Share2, Megaphone, Brush } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "Products",
    description: "Create clean product imagery.",
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Prepare images for online stores.",
  },
  {
    icon: User,
    title: "Social",
    description: "Create profile and social visuals.",
  },
  {
    icon: Share2,
    title: "Marketing",
    description: "Build cleaner promotional graphics.",
  },
  {
    icon: Brush,
    title: "Creative",
    description: "Extract subjects for creative compositions.",
  },
  {
    icon: Megaphone,
    title: "Personal",
    description: "Create clean portraits and images.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="editorial-heading">
            MADE FOR
            <br />
            <span className="text-gradient">WHAT YOU CREATE.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                <useCase.icon className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {useCase.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
