"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong glow-accent relative overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12 lg:py-28"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              READY TO MAKE
              <br />
              THE BACKGROUND
              <br />
              <span className="text-gradient">DISAPPEAR?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base text-text-secondary sm:text-lg">
              Upload an image and create your clean cutout.
            </p>

            <div className="mt-10">
              <a
                href="#upload"
                className="btn-primary !px-10 !py-4 !text-base"
              >
                Upload Image
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
