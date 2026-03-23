import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navServices'), path: '/services' },
    { name: t('navProducts'), path: '/products' },
    { name: t('navAbout'), path: '/about' },
    { name: t('navContact'), path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-bg"></div>
      
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="/logo.svg" alt="Saumya Optical" className="navbar-logo-img" />
        </Link>
        
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button 
            className="lang-toggle desktop-lang" 
            onClick={toggleLanguage}
            aria-label="Toggle Language"
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            className="mobile-lang-toggle" 
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
