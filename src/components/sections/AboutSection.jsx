import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Cpu, Award, ShieldCheck, Tag } from 'lucide-react';
import './AboutSection.css';

const features = [
  { icon: <Cpu size={20} />,        key: 'aboutFeature1' },
  { icon: <Award size={20} />,      key: 'aboutFeature2' },
  { icon: <ShieldCheck size={20} />, key: 'aboutFeature3' },
  { icon: <Tag size={20} />,         key: 'aboutFeature4' },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">

        {/* Header */}
        <div className="about-header">
          <p className="section-label">{t('aboutTag')}</p>
          <h2 className="section-title">{t('aboutHeading')}</h2>
          <div className="title-underline"></div>
        </div>

        {/* Two-column text area */}
        <div className="about-text-grid">
          <p className="about-para">{t('aboutP1')}</p>
          <p className="about-para">{t('aboutP2')}</p>
        </div>

        {/* Doctor card */}
        <div className="doctor-card">
          <div className="doctor-avatar">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="18" r="10" fill="#cbd5e1"/>
              <path d="M4 44c0-11 9-18 20-18s20 7 20 18" fill="#cbd5e1"/>
            </svg>
          </div>
          <div className="doctor-info">
            <span className="doctor-name">Dr. Vijay Nautiyal</span>
            <span className="doctor-title">नेत्र विशेषज्ञ · Eye Specialist</span>
          </div>
        </div>

        {/* 4 feature cards */}
        <div className="about-features">
          {features.map(({ icon, key }, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{icon}</div>
              <h3 className="feature-title">{t(`${key}Title`)}</h3>
              <p className="feature-desc">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
