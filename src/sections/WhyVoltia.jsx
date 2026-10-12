import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientText from '../components/GradientText';

gsap.registerPlugin(ScrollTrigger);

export default function WhyVoltia() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        const num = item.querySelector('.why-num');
        const title = item.querySelector('h2');
        const text = item.querySelector('p');

        gsap.set([num, title, text], { autoAlpha: 0 });
        gsap.set(title, { y: 20 });
        gsap.set(text, { y: 10 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });

        tl.to(num, { autoAlpha: 1, duration: 0.8 }, 0)
          .to(title, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2)
          .to(text, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.4);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { num: '01', title: 'FOCUS', text: 'Mental clarity engineered for deep work and high-stakes performance.' },
    { num: '02', title: 'ENERGY', text: 'Sustained kinetic power without the crash. Smooth delivery.' },
    { num: '03', title: 'MOMENTUM', text: 'Pushing past limits. Designed for those who never stop moving.' }
  ];

  return (
    <section id="why" className="why-section" ref={sectionRef}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '6rem 5%' }}>
        {features.map((feat, i) => (
          <div 
            key={i} 
            className="why-row"
            ref={el => itemsRef.current[i] = el}
            style={{ display: 'flex', flexDirection: 'column', marginBottom: '4rem', gap: '1rem' }}
          >
            <div className="why-num" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              <GradientText type="theme">{feat.num} &mdash;</GradientText>
            </div>
            <div className="why-content">
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', margin: 0 }}>
                <GradientText type="theme" animated>{feat.title}</GradientText>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '500px', marginTop: '0.5rem' }}>
                <GradientText type="subtle">{feat.text}</GradientText>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}