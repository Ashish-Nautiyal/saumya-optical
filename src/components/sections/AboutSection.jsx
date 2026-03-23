import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, Star, Clock } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.observe-fade');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-bg-shapes">
        <div className="shape-circle shape-1"></div>
        <div className="shape-circle shape-2"></div>
      </div>
      
      <div className="container">
        <div className="about-header observe-fade">
          <span className="about-tag">{language === 'hi' ? 'हमारे बारे में' : 'About Us'}</span>
          <h2 className="about-title">{t('aboutHeading')}</h2>
        </div>

        <div className="about-main">
          <div className="about-content">
            <div className="about-text-block">
              <h3>{language === 'hi' ? 'हमारी कहानी' : 'Our Story'}</h3>
              <p className="about-text">{t('aboutP1')}</p>
            </div>
            <div className="about-text-block">
              <h3>{language === 'hi' ? 'हमारी प्रतिबद्धता' : 'Our Commitment'}</h3>
              <p className="about-text">{t('aboutP2')}</p>
            </div>
          </div>

          <div className="about-doctor">
            <div className="doctor-card">
              <div className="doctor-badge">
                <Award size={16} />
                <span>{language === 'hi' ? 'विशेषज्ञ' : 'Expert'}</span>
              </div>
              <div className="doctor-image">
                <img src="/doctor.jpeg" alt="Dr. Vijaydeep Nautiyal" />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">Dr. Vijaydeep Nautiyal</h3>
                <span className="doctor-role">
                  {language === 'hi' ? 'नेत्र विशेषज्ञ · 10+ वर्ष' : 'Ophthalmologist · 10+ Years'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-trust observe-fade">
          <div className="trust-item">
            <div className="trust-icon">
              <Star size={24} />
            </div>
            <h4>{language === 'hi' ? 'प्रामाणिक ब्रांड' : 'Authentic Brands'}</h4>
            <p>{language === 'hi' ? 'क्रिज़ल, एस्सिलोर के अधिकृत' : 'Authorized Crizal & Essilor'}</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <Award size={24} />
            </div>
            <h4>{language === 'hi' ? 'विशेषज्ञ सेवा' : 'Expert Service'}</h4>
            <p>{language === 'hi' ? 'प्रमाणित ऑप्टोमेट्रिस्ट' : 'Certified optometrist'}</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <Clock size={24} />
            </div>
            <h4>{language === 'hi' ? 'खुला समय' : 'Working Hours'}</h4>
            <p>{language === 'hi' ? 'सुबह 9 - रात 8 बजे' : '9 AM - 8 PM daily'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
