import { Transition } from "framer-motion";

export const premiumEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export const smoothEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const snappyEase: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export const heroTransition: Transition = {
  duration: 0.9,
  ease: premiumEase,
};

export const fadeInTransition: Transition = {
  duration: 0.6,
  ease: premiumEase,
};

export const scaleTransition: Transition = {
  duration: 0.5,
  ease: premiumEase,
};

export const slowTransition: Transition = {
  duration: 1.2,
  ease: smoothEase,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const staggerTransition: Transition = {
  staggerChildren: 0.1,
  delayChildren: 0.1,
};

export const parallaxTransition: Transition = {
  duration: 0.3,
  ease: "linear",
};

export const glowTransition: Transition = {
  duration: 2,
  ease: "easeInOut",
  repeat: Infinity,
};

export const scanTransition: Transition = {
  duration: 2.5,
  ease: "easeInOut",
  repeat: Infinity,
};

export const floatTransition: Transition = {
  duration: 4,
  ease: "easeInOut",
  repeat: Infinity,
};

export const marqueeTransition: Transition = {
  duration: 30,
  ease: "linear",
  repeat: Infinity,
};

export const resultRevealTransition: Transition = {
  duration: 0.8,
  ease: premiumEase,
};

export const backgroundDissolveTransition: Transition = {
  duration: 1.2,
  ease: "easeInOut",
};

export const magneticTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  mass: 0.5,
};

export const cardHoverTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

export const borderGlowTransition: Transition = {
  duration: 2,
  ease: "easeInOut",
  repeat: Infinity,
};
