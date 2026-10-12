import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience3D() {
  const containerRef = useRef(null);
  const canRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        }
      });

      tl.to(canRef.current, {
        scale: 1.5,
        rotation: 15,
        yPercent: -10,
        ease: 'none'
      }, 0)
      .from(textRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        ease: 'power2.out'
      }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience-3d" ref={containerRef}>
      <div className="exp-bg"></div>
      
      <div className="exp-content">
        <div className="exp-text" ref={textRef}>
          <h2>ENGINEERED<br/>TO MOVE</h2>
          <p>Aerodynamic profile. Tactile grip. The VOLTIA can is designed for motion.</p>
        </div>
        
        <div className="exp-canvas-container">
          {/* Simulated 3D with CSS/GSAP using the high-res product image */}
          <img 
            ref={canRef}
            src="/images/hero/hero-product.webp" 
            alt="VOLTIA Midnight Berry energy drink can" 
            className="simulated-3d-can" 
          />
        </div>
      </div>
    </section>
  );
}