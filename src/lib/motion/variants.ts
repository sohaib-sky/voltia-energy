import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const heroLineReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const uploadCardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const resultReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const backgroundDissolve: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export const scanLine: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: "100%",
    opacity: [0, 1, 1, 0],
    transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity },
  },
};

export const glowPulse: Variants = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  },
};

export const floatAnimation: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -6, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
  },
};

export const marquee: Variants = {
  hidden: { x: 0 },
  visible: {
    x: "-50%",
    transition: { duration: 30, ease: "linear", repeat: Infinity },
  },
};

export const magneticHover: {
  scale: number;
  x: number;
  y: number;
} = {
  scale: 1.05,
  x: 0,
  y: 0,
};

export const cardHover: Variants = {
  hidden: { y: 0 },
  visible: {
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const borderGlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0.5, 0],
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
  },
};
