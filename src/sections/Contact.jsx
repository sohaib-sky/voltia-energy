import { useState, useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';
import GradientText from '../components/GradientText';

export default function Contact() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [newsEmail, setNewsEmail] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', msg: '' });
  const [newsStatus, setNewsStatus] = useState({ type: '', msg: '' });

  useTextReveal(leftColRef, { stagger: 0.1 });
  useTextReveal(rightColRef, { stagger: 0.1, delay: 0.2 });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({ type: 'error', msg: 'Please fill out all required fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({ type: 'error', msg: 'Please enter a valid email address.' });
      return;
    }
    
    setFormStatus({ type: 'success', msg: 'Form ready for backend integration.' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsEmail) {
      setNewsStatus({ type: 'error', msg: 'Email is required.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsEmail)) {
      setNewsStatus({ type: 'error', msg: 'Invalid email format.' });
      return;
    }
    
    setNewsStatus({ type: 'success', msg: 'Ready for newsletter integration.' });
  };

  return (
    <section id="contact" className="contact-section" ref={containerRef}>
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-form-container" ref={leftColRef}>
            <h2 style={{ fontSize: '1.25rem', letterSpacing: '0.15em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              <GradientText type="theme" animated>DIRECT LINE</GradientText>
            </h2>
            <p className="contact-sub" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
              <GradientText type="subtle">Have a question or partnership inquiry? Reach out.</GradientText>
            </p>
            <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                  <GradientText type="strong">Name</GradientText>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  required 
                  style={{ width: '100%', padding: '0.5rem 0', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)'}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                  <GradientText type="strong">Email</GradientText>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  required 
                  style={{ width: '100%', padding: '0.5rem 0', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)'}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '3rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                  <GradientText type="strong">Message</GradientText>
                </label>
                <textarea 
                  id="message" 
                  rows="1"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  required 
                  style={{ width: '100%', padding: '0.5rem 0', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', outline: 'none', resize: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)'}
                ></textarea>
              </div>
              {formStatus.msg && (
                <div className={`form-status ${formStatus.type}`} style={{ fontSize: '0.75rem', padding: '0.75rem', marginBottom: '1.5rem', borderLeft: '2px solid currentColor' }}>{formStatus.msg}</div>
              )}
              <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '0.75rem' }}>Send Message</button>
            </form>
          </div>

          <div className="newsletter-container" ref={rightColRef}>
            <h2 style={{ fontSize: '1.25rem', letterSpacing: '0.15em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              <GradientText type="theme" animated>JOIN THE MOVEMENT</GradientText>
            </h2>
            <p className="contact-sub" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
              <GradientText type="subtle">Early access to drops. Exclusive intelligence. Zero spam.</GradientText>
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form" noValidate>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="news-email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="news-email" 
                  placeholder="ENTER EMAIL ADDRESS"
                  value={newsEmail}
                  onChange={e => setNewsEmail(e.target.value)}
                  required 
                  style={{ width: '100%', padding: '0.5rem 0', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', color: '#fff', outline: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderBottom = '1px solid var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)'}
                />
              </div>
              {newsStatus.msg && (
                <div className={`form-status ${newsStatus.type}`} style={{ fontSize: '0.75rem', padding: '0.75rem', marginBottom: '1.5rem', borderLeft: '2px solid currentColor' }}>{newsStatus.msg}</div>
              )}
              <button type="submit" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '0.75rem' }}>SUBSCRIBE</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
