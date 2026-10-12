import { useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';
import GradientText from '../components/GradientText';

export default function FinalCTA() {
  const ctaRef = useRef(null);
  const contentRef = useRef(null);
  
  useTextReveal(contentRef, { stagger: 0.1 });

  return (
    <section id="shop" className="cta-section" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="cta-box" ref={ctaRef} style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)', border: '1px solid rgba(255,255,255,0.1)', padding: '6rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div className="cta-bg-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, var(--color-bg-alt) 0%, transparent 70%)', zIndex: 0 }}></div>
          <div ref={contentRef} style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', margin: 0 }}>
              <GradientText type="theme" animated>SECURE YOUR SUPPLY</GradientText>
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'var(--color-text-muted)', margin: 0 }}>
              <GradientText type="subtle">Discover your VOLTIA.</GradientText>
            </p>
            <a href="#experience" className="btn btn-primary" style={{ marginTop: '1rem' }}>EXPLORE THE COLLECTION</a>
          </div>
        </div>
      </div>
    </section>
  );
}