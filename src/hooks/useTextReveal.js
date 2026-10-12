import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useTextReveal(ref, options = {}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) {
      gsap.set(element, { autoAlpha: 1, y: 0 });
      return;
    }

    const {
      delay = 0,
      duration = 0.8,
      y = 30,
      stagger = 0,
      scrub = false,
      markers = false,
      start = 'top 85%',
      selector = null
    } = options;

    const children = selector 
      ? Array.from(element.querySelectorAll(selector))
      : (element.children.length > 0 ? Array.from(element.children) : element);

    gsap.set(children, { autoAlpha: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(children, {
        scrollTrigger: {
          trigger: element,
          start,
          scrub,
          markers,
        },
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
      });
    }, element);

    return () => ctx.revert();
  }, [ref, options]);
}
