import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './HeroSection.css';

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg',
];

const HeroSection = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add('animate-in');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={index === currentSlide ? 'active' : ''}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          {t('heroHeadline')}
          <span className="hero-accent"> {t('heroHighlight')}</span>
        </h1>

        <p className="hero-desc">{t('heroSubheadline')}</p>
      </div>
    </section>
  );
};

export default HeroSection;
