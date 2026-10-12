import { useState, useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';
import GradientText from '../components/GradientText';

const faqs = [
  { q: 'Is VOLTIA safe to drink every day?', a: 'Yes, VOLTIA is formulated for daily use. However, we recommend not exceeding two cans per day due to the caffeine content (150mg per can).' },
  { q: 'Does VOLTIA contain sugar?', a: 'No, all VOLTIA flavors are zero sugar and zero artificial colors.' },
  { q: 'When is the best time to drink VOLTIA?', a: 'VOLTIA is perfect before a workout, during a long work session, or whenever you need a clean, sustained energy boost.' },
  { q: 'Do you ship internationally?', a: 'Currently, we ship exclusively within the United States and Canada. Join our newsletter for international updates.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useTextReveal(containerRef, { selector: '.faq-animate', stagger: 0.1 });

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section" ref={containerRef} style={{ padding: '8rem 0' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="faq-header faq-animate" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <GradientText type="strong">INTELLIGENCE</GradientText>
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.2, fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
            <GradientText type="theme" animated>COMMONLY ASKED<br/>QUESTIONS</GradientText>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item faq-animate ${openIndex === i ? 'open' : ''}`} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <button 
                className="faq-question" 
                onClick={() => toggleOpen(i)}
                aria-expanded={openIndex === i}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: openIndex === i ? 'var(--color-primary)' : 'var(--color-text)', cursor: 'pointer', textAlign: 'left', fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, transition: 'color 0.3s ease' }}
              >
                {openIndex === i ? <GradientText type="theme">{faq.q}</GradientText> : faq.q}
                <span className="faq-icon" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease', fontSize: '1.5rem', fontWeight: 300, color: openIndex === i ? 'var(--color-primary)' : 'var(--color-text)' }}>+</span>
              </button>
              <div className="faq-answer" style={{ maxHeight: openIndex === i ? '200px' : '0', overflow: 'hidden', transition: 'all 0.4s ease', opacity: openIndex === i ? 1 : 0 }}>
                <p style={{ paddingBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  <GradientText type="subtle">{faq.a}</GradientText>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}