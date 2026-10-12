import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { useTextReveal } from '../hooks/useTextReveal';
import GradientText from '../components/GradientText';

const keyIngredients = [
  { name: 'Natural Caffeine', desc: 'Sourced from green tea and coffee beans for clean energy.' },
  { name: 'Electrolytes', desc: 'Sodium and Potassium to maintain hydration and muscle function.' },
  { name: 'B-Vitamin Complex', desc: 'B3, B6, and B12 to support cellular energy production.' },
  { name: 'Adaptogens', desc: 'Selected root extracts to balance stress and sustain focus.' }
];

export default function Ingredients() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);

  useTextReveal(textRef, { stagger: 0.2 });
  useTextReveal(listRef, { stagger: 0.15, delay: 0.2 });

  return (
    <section id="ingredients" className="ingredients-section" ref={sectionRef} style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="ingredients-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div className="ingredients-text" ref={textRef}>
            <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <GradientText type="strong">PURE PERFORMANCE COMPOUNDS</GradientText>
            </h2>
            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
              <GradientText type="theme" animated>Engineered with<br/>absolute precision.</GradientText>
            </h3>
            <p className="lead" style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', maxWidth: '400px' }}>
              <GradientText type="subtle">No synthetic colors. No crash. Just clean, optimized ingredients to push your limits.</GradientText>
            </p>
          </div>
          
          <div className="ingredients-list" ref={listRef} style={{ display: 'grid', gap: '2rem' }}>
            {keyIngredients.map((item, i) => (
              <div key={i} className="ingredient-card" style={{ padding: '1.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1rem', letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  <GradientText type="strong">{item.name}</GradientText>
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  <GradientText type="subtle">{item.desc}</GradientText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}