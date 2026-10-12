import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { useTextReveal } from '../hooks/useTextReveal';
import GradientText from '../components/GradientText';

export default function Story() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useTextReveal(textRef, { stagger: 0.3, duration: 1 });

  return (
    <section id="story" className="story-section" ref={sectionRef} style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="story-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/images/hero/hero-background.webp" alt="" aria-hidden="true" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        <div className="story-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--color-bg) 0%, transparent 50%, var(--color-bg) 100%)' }}></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="story-content" ref={textRef} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: 0, overflow: 'hidden' }}>
              <span><GradientText type="theme" animated>THE NEXT GENERATION</GradientText></span>
            </h2>
            <h2 style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: 0, overflow: 'hidden' }}>
              <span><GradientText type="theme" animated>OF PERFORMANCE CULTURE.</GradientText></span>
            </h2>
          </div>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            <GradientText type="subtle">We didn't just want another energy drink. We wanted a catalyst. 
            VOLTIA was engineered for the ambitious, the relentless, the ones who 
            refuse to stand still. Every can is a commitment to forward momentum.</GradientText>
          </p>
        </div>
      </div>
    </section>
  );
}