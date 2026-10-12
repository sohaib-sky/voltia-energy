import { useState, useEffect, useRef } from 'react';

const themes = [
  { id: 'original', name: 'Voltia Original', color: '#00f0ff' },
  { id: 'electric', name: 'Electric Blue', color: '#0055ff' },
  { id: 'violet', name: 'Midnight Violet', color: '#8a2be2' },
  { id: 'lime', name: 'Neon Lime', color: '#ccff00' },
  { id: 'crimson', name: 'Crimson', color: '#e60000' },
  { id: 'ice', name: 'Ice', color: '#80ffff' }
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('original');
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('voltia-theme');
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setActiveTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeSelect = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('voltia-theme', themeId);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className="theme-switcher-btn" 
        onClick={togglePanel}
        ref={btnRef}
        aria-label="Change color theme"
        aria-expanded={isOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M12 3v18"></path>
          <path d="M12 8l4.5 4.5M12 16l-4.5-4.5"></path>
        </svg>
      </button>

      <div className={`theme-panel ${isOpen ? 'open' : ''}`} ref={panelRef} role="dialog" aria-label="Theme Color System">
        <div className="theme-panel-header">
          <h3 className="theme-panel-title">COLOR SYSTEM</h3>
          <p className="theme-panel-subtitle">Choose your VOLTIA atmosphere.</p>
        </div>
        <div className="theme-swatches" role="radiogroup" aria-label="Color themes">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-swatch ${activeTheme === theme.id ? 'active' : ''}`}
              style={{ backgroundColor: theme.color }}
              onClick={() => handleThemeSelect(theme.id)}
              aria-checked={activeTheme === theme.id}
              role="radio"
              title={theme.name}
            >
              <span className="theme-swatch-sr">{theme.name} theme</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
