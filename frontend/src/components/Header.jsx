import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo-section">
          <h1 className="logo-text">ITHI HA ASA Foods</h1>
        </div>

        <nav className="nav-links">
          <button onClick={() => scrollToSection('menu')} className="nav-link">Menu</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        <div className="nav-actions">
          <a href="tel:07382638620" className="btn-nav" aria-label="Call us">
            <Phone size={18} />
          </a>
          <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
