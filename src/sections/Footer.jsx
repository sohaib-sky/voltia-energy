import { useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';
import GradientText from '../components/GradientText';

export default function Footer() {
  const footerRef = useRef(null);

  useTextReveal(footerRef, { selector: '.footer-animate', stagger: 0.1, duration: 1, y: 20 });

  return (
    <footer className="site-footer" ref={footerRef} style={{ padding: '6rem 0 3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div className="footer-grid footer-animate" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
          <div className="footer-brand" style={{ maxWidth: '300px' }}>
            <h2 style={{ fontSize: '1.5rem', letterSpacing: '0.2em', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0' }}>
              <GradientText type="strong">VOLTIA</GradientText>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>The next generation of performance culture.</p>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '4rem' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#flavors" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Products</a>
              <a href="#ingredients" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ingredients</a>
              <a href="#story" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Story</a>
              <a href="#faq" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>FAQ</a>
            </nav>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#contact" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</a>
              <a href="#/privacy" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Privacy</a>
              <a href="#/terms" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Terms</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom footer-animate" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>&copy; {new Date().getFullYear()} VOLTIA ENERGY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}