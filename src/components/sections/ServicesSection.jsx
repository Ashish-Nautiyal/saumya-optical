import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Scan, Glasses, BadgeCheck } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Scan size={28} />,
      title: t('servicesEyeTestHeading'),
      desc: t('servicesEyeTestDesc'),
    },
    {
      icon: <Glasses size={28} />,
      title: t('servicesEyewearHeading'),
      desc: t('servicesEyewearDesc'),
    },
    {
      icon: <BadgeCheck size={28} />,
      title: t('servicesBrandsHeading'),
      desc: t('servicesBrandsDesc'),
    },
  ];

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <span className="services-tag">{t('navServices')}</span>
          <h2 className="services-title">{t('servicesHeading')}</h2>
          <p className="services-sub">{t('servicesSubheading')}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card observe-fade">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
