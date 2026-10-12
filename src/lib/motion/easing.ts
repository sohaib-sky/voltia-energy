export const premiumEase = [0.25, 0.46, 0.45, 0.94] as const;

export const smoothEase = [0.4, 0, 0.2, 1] as const;

export const snappyEase = [0.2, 0.8, 0.2, 1] as const;

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const easeInOutCubic = [0.65, 0, 0.35, 1] as const;

export const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export const easeInQuart = [0.5, 0, 0.75, 0] as const;

export const heroTextEase = [0.25, 0.46, 0.45, 0.94] as const;

export const magneticEase = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
  mass: 0.5,
};

export const springEase = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const gentleSpring = {
  type: "spring" as const,
  stiffness: 50,
  damping: 10,
  mass: 1,
};

export const slowSpring = {
  type: "spring" as const,
  stiffness: 30,
  damping: 10,
  mass: 1,
};
