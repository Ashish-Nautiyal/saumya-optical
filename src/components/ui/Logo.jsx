import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Logo.css';

const Logo = () => {
  const { language } = useLanguage();

  return (
    <div className="logo-container">
      <div className="logo-icon-wrapper">
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <rect width="40" height="40" rx="10" className="logo-bg"/>
          <path d="M10 20C10 20 14 13 20 13C26 13 30 20 30 20C30 20 26 27 20 27C14 27 10 20 10 20Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="3.5" fill="white"/>
        </svg>
      </div>
      <div className="logo-text">
        <span className="logo-primary">Saumya</span>
        <span className={`logo-secondary ${language}`}>
          {language === 'hi' ? 'ऑप्टिकल्स' : 'Opticals'}
        </span>
      </div>
    </div>
  );
};

export default Logo;
