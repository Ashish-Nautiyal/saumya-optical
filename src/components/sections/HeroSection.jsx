import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        {/* Text block */}
        <div className="hero-text">
          <span className="hero-tag">
            <span className="hero-tag-dot" />
            {t('heroTag')}
          </span>

          <h1 className="hero-h1">
            {t('heroHeadline')}
            <br />
            <span className="hero-accent">{t('heroHighlight')}</span>
          </h1>

          <p className="hero-sub">{t('heroSubheadline')}</p>

          <div className="hero-actions">
            <a href="tel:+918979216443" className="btn btn-primary">
              <Phone size={18} />
              {t('heroCallNow')}
            </a>
            <a
              href="https://wa.me/918979216443"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={18} />
              {t('heroWhatsAppUs')}
            </a>
          </div>

          {/* Trust stats */}
          <div className="hero-stats">
            {[
              [t('heroStat1'), t('heroStat1Label')],
              [t('heroStat2'), t('heroStat2Label')],
              [t('heroStat3'), t('heroStat3Label')],
            ].map(([num, label], i) => (
              <div key={i} className="hero-stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
