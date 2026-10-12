import { useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';
import { products } from '../data/products';
import GradientText from '../components/GradientText';

export default function ProductInfo() {
  const current = products[0];
  const dataRef = useRef(null);

  useTextReveal(dataRef, { stagger: 0.1 });

  return (
    <section id="nutrition" className="product-info-section" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="pi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="pi-visual" style={{ textAlign: 'center' }}>
            <img 
              src={current.image} 
              alt={`VOLTIA ${current.name} energy drink can`} 
              loading="lazy"
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                maxHeight: '600px', 
                objectFit: 'contain',
                mixBlendMode: 'screen',
                filter: 'contrast(1.1) brightness(1.1)'
              }} 
            />
          </div>
          <div className="pi-data" ref={dataRef}>
            <h2 style={{ fontSize: '1.25rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem', borderBottom: '2px solid var(--text-muted)', paddingBottom: '0.5rem' }}>
              <GradientText type="strong">NUTRITION FACTS</GradientText>
            </h2>
            <div className="pi-label" style={{ fontFamily: 'monospace', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
              <div className="pi-row border-bottom" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Serving Size</span>
                <span>1 Can (16 fl oz)</span>
              </div>
              <div className="pi-row heavy-border" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0 0.5rem', borderBottom: '4px solid var(--text-primary)', fontWeight: 'bold' }}>
                <span>Amount Per Serving</span>
              </div>
              <div className="pi-row border-bottom" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                <strong>Calories</strong>
                <strong>{current.nutrition.calories}</strong>
              </div>
              <div className="pi-row" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <span>Total Carbohydrate</span>
                <span>{current.nutrition.carbs}g</span>
              </div>
              <div className="pi-row border-bottom sub-row" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0 0.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.2)', color: 'var(--color-text-muted)' }}>
                <span>Total Sugars</span>
                <span>{current.nutrition.sugar}g</span>
              </div>
              <div className="pi-row border-bottom" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Caffeine</span>
                <span>{current.nutrition.caffeine}mg</span>
              </div>
            </div>
            
            <div className="pi-ingredients" style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                <GradientText type="theme">INGREDIENTS</GradientText>
              </h4>
              <p style={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                <GradientText type="subtle">{current.ingredients.join(', ')}.</GradientText>
              </p>
            </div>
            <div className="pi-warning" style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
              <p style={{ fontSize: '0.65rem', lineHeight: 1.5, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{current.servingInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}