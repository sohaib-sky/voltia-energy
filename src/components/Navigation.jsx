import { useState, useEffect, useRef } from 'react';
import GradientText from './GradientText';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <GradientText type="strong">VOLTIA</GradientText>
        </a>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#flavors">Products</a></li>
            <li><a href="#ingredients">Ingredients</a></li>
            <li><a href="#story">Story</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        
        <div className="nav-cta desktop-only">
          <a href="#shop" className="btn btn-outline btn-small">Shop VOLTIA</a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#flavors" onClick={closeMenu}>Products</a></li>
            <li><a href="#ingredients" onClick={closeMenu}>Ingredients</a></li>
            <li><a href="#story" onClick={closeMenu}>Story</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#shop" className="btn btn-primary" onClick={closeMenu}>Shop VOLTIA</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}