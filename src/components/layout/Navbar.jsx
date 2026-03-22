import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../ui/Logo';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('navHome'), href: '#home' },
    { name: t('navProducts'), href: '#products' },
    { name: t('navAbout'), href: '#about' },
    { name: t('navContact'), href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Logo />
        
        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button 
            className="lang-toggle-btn" 
            onClick={toggleLanguage}
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span className="lang-text">{language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
