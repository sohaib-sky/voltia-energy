import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GradientText from '../components/GradientText';

export default function Hero() {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const taglineRef = useRef(null);
  const actionsRef = useRef(null);
  const scrollIndRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([eyebrowRef.current, headlineRef.current, taglineRef.current, actionsRef.current, scrollIndRef.current], {
        autoAlpha: 1
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([eyebrowRef.current, headlineRef.current, taglineRef.current, actionsRef.current], { y: 20, autoAlpha: 0 });
      gsap.set(scrollIndRef.current, { autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(eyebrowRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, 0)
        .to(headlineRef.current, { y: 0, autoAlpha: 1, duration: 1 }, 0.2)
        .to(taglineRef.current, { y: 0, autoAlpha: 1, duration: 1 }, 0.4)
        .to(actionsRef.current, { y: 0, autoAlpha: 1, duration: 1 }, 0.6)
        .to(scrollIndRef.current, { autoAlpha: 0.7, duration: 1 }, 0.8);

      const scrollLine = scrollIndRef.current.querySelector('.scroll-line-inner');
      if (scrollLine) {
        gsap.to(scrollLine, { yPercent: 100, duration: 1.5, ease: 'power2.inOut', repeat: -1 });
      }
    }, heroRef);

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-bg">
        <img src="/images/hero/hero-background.webp" alt="" className="hero-bg-static" aria-hidden="true" />
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/images/hero/hero-poster.webp"
          className="hero-bg-video"
          aria-label="VOLTIA premium energy drink product"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        >
          <source src="/videos/hero-product.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-bg-overlay"></div>

      <div className="hero-content">
        <div className="hero-text-col">
          <p className="hero-eyebrow" ref={eyebrowRef}>
            <GradientText type="strong">Pure Performance</GradientText>
          </p>
          <h1 className="hero-headline" ref={headlineRef}>
            <GradientText animated type="theme">VOLTIA</GradientText>
          </h1>
          <p className="hero-tagline" ref={taglineRef}>
            Experience the next generation of premium energy. Voltia fuels your focus, power, and limitless potential.
          </p>
          <div className="hero-actions" ref={actionsRef}>
            <a href="#experience" className="btn btn-primary">Explore VOLTIA</a>
            <a href="#flavors" className="btn btn-secondary">Discover Flavors</a>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" ref={scrollIndRef}>
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <div className="scroll-line-inner"></div>
        </div>
      </div>
    </section>
  );
}
