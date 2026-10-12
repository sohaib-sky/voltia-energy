import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/products';
import GradientText from '../components/GradientText';

gsap.registerPlugin(ScrollTrigger);

export default function Flavors() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const dotsRef = useRef([]);
  const titlesRef = useRef([]);
  const bgTransitionRef = useRef(null);
  const lastIndex = useRef(-1);

  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const panels = panelsRef.current;
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: {min: 0.2, max: 0.5},
            delay: 0
          },
          end: () => "+=" + containerRef.current.offsetWidth * (panels.length - 1),
          onUpdate: (self) => {
            const index = Math.round(self.progress * (panels.length - 1));
            
            if (index !== lastIndex.current && containerRef.current) {
              lastIndex.current = index;
              const nextColor = products[index].accentColor;
              gsap.to(containerRef.current, {
                '--collection-color': nextColor,
                duration: 0.8,
                overwrite: 'auto'
              });
            }
            
            dotsRef.current.forEach((dot, i) => {
              if (dot) {
                if (i === index) {
                  dot.classList.add('active');
                  dot.style.backgroundColor = 'var(--color-primary)';
                } else {
                  dot.classList.remove('active');
                  dot.style.backgroundColor = 'rgba(255,255,255,0.2)';
                }
              }
            });
          }
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (products.length - 1));
          
          if (index !== lastIndex.current && containerRef.current) {
            lastIndex.current = index;
            const nextColor = products[index].accentColor;
            gsap.to(containerRef.current, {
              '--collection-color': nextColor,
              duration: 0.8,
              overwrite: 'auto'
            });
          }
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="flavors" className="flavors-section" ref={containerRef} style={{ '--collection-color': products[0].accentColor }}>
      <div className="flavors-bg-transition" ref={bgTransitionRef}></div>
      <div className="flavors-container">
        <div className="flavors-header">
          <h2><GradientText type="strong">THE COLLECTION</GradientText></h2>
          <div className="flavors-progress">
            {products.map((p, i) => (
              <div 
                key={p.id} 
                ref={el => dotsRef.current[i] = el}
                className={`progress-dot ${i === 0 ? 'active' : ''}`}
                style={{ backgroundColor: i === 0 ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)' }}
              ></div>
            ))}
          </div>
        </div>

        <div className="flavors-slider">
          {products.map((product, i) => (
            <div 
              key={product.id} 
              className="flavor-panel"
              ref={el => panelsRef.current[i] = el}
            >
              <div className="flavor-content">
                <div className="flavor-text">
                  <h3 ref={el => titlesRef.current[i] = el}>
                    <GradientText type="theme" animated>{product.name}</GradientText>
                  </h3>
                  <p><GradientText type="subtle">{product.description}</GradientText></p>
                  <ul className="flavor-features">
                    <li>{product.nutrition.calories} Calories</li>
                    <li>{product.nutrition.caffeine}mg Caffeine</li>
                    <li>Zero Sugar</li>
                  </ul>
                  <a href={`#shop-${product.id}`} className="btn btn-outline" style={{ border: `1px solid var(--color-primary)`, color: 'var(--color-primary)' }}>
                    Explore {product.name}
                  </a>
                </div>
                <div className="flavor-visual">
                  <div className="collection-product-glow"></div>
                  <img src={product.image} alt={`VOLTIA ${product.name} energy drink can`} loading="lazy" className="flavor-can" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}