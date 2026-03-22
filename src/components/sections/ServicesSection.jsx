import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Activity, Glasses, ShieldCheck } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      icon: <Activity size={32} className="text-secondary" />,
      title: t('servicesEyeTestHeading'),
      description: t('servicesEyeTestDesc')
    },
    {
      id: 2,
      icon: <Glasses size={32} className="text-secondary" />,
      title: t('servicesEyewearHeading'),
      description: t('servicesEyewearDesc')
    },
    {
      id: 3,
      icon: <ShieldCheck size={32} className="text-secondary" />,
      title: t('servicesBrandsHeading'),
      description: t('servicesBrandsDesc')
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">{t('servicesHeading')}</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
