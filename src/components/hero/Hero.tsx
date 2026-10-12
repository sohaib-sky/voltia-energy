"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Cinematic background lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animated-light left-[10%] top-[20%] h-[500px] w-[500px] bg-accent/[0.07]" />
        <div className="animated-light right-[5%] top-[40%] h-[400px] w-[400px] bg-accent-cyan/[0.04]" style={{ animationDelay: "-7s" }} />
        <div className="animated-light bottom-[10%] left-[30%] h-[300px] w-[300px] bg-accent-violet/[0.04]" style={{ animationDelay: "-14s" }} />
      </div>

      <div className="container-max relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Editorial typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
                AI Image Background Remover
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
            >
              CUT THE
              <br />
              <span className="text-gradient">BACKGROUND.</span>
              <br />
              KEEP THE
              <br />
              <span className="text-gradient">SUBJECT.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              Remove image backgrounds with AI and create clean, transparent
              cutouts in seconds.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#upload" className="btn-primary !px-8 !py-4 !text-base">
                Upload Image
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how-it-works" className="btn-secondary !px-8 !py-4 !text-base">
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Upload card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-cyan/10 blur-2xl" />
            <div className="glass-strong glow-accent relative rounded-2xl p-8 sm:p-10">
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10"
                >
                  <svg
                    className="h-10 w-10 text-accent-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </motion.div>

                <p className="text-lg font-semibold text-text-primary">
                  Drop your image here
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  or choose a file
                </p>

                <div className="mt-6 flex items-center gap-2">
                  {["JPG", "PNG", "WEBP"].map((format) => (
                    <span
                      key={format}
                      className="rounded-md border border-border bg-white/5 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-text-muted"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                <a
                  href="#upload"
                  className="btn-primary mt-8 w-full !py-3.5"
                >
                  Choose Image
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#features"
            className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-text-secondary"
          >
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
              Scroll to explore
            </span>
            <ChevronDown className="scroll-indicator h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
