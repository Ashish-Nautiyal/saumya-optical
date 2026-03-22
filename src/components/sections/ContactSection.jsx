import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import './ContactSection.css';

const ContactSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="contact-header">
          <p className="section-label">{language === 'hi' ? 'संपर्क' : 'Get In Touch'}</p>
          <h2 className="section-title">{t('contactHeading')}</h2>
          <div className="title-underline"></div>
          <p className="contact-subheading">{t('contactSubheading')}</p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Contact Details */}
          <div className="contact-details">
            <div className="contact-detail-row">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-text-block">
                <h4>{language === 'hi' ? 'फोन करें' : 'Call Us'}</h4>
                <a href="tel:+918979216443" className="contact-link">+91 8979216443</a>
                <a href="tel:+919997270585" className="contact-link">+91 9997270585</a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon"><WhatsAppIcon size={24} /></div>
              <div className="contact-text-block">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/918979216443" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">
                  +91 8979216443 <span>({language === 'hi' ? 'त्वरित उत्तर' : 'Quick Response'})</span>
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon"><Clock size={24} /></div>
              <div className="contact-text-block">
                <h4>{t('contactHoursHeading')}</h4>
                <p>{t('contactHoursDesc')}</p>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-text-block">
                <h4>{t('footerAddressHeading')}</h4>
                <p>{t('footerAddress')}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="contact-map-col">
            <div className="map-embed-wrapper">
              <iframe
                title="Saumya Opticals Location"
                src="https://maps.google.com/maps?q=saumaya+opticals+near+college+gate+main+market+chinyali+saur+uttarkashi&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Invisible overlay link that catches all clicks and redirects to Google Maps */}
              <a
                href="https://maps.google.com/?q=saumaya+opticals+near+college+gate+main+market+chinyali+saur+uttarkashi"
                target="_blank"
                rel="noopener noreferrer"
                className="map-click-overlay"
                aria-label="Open location in Google Maps"
              >
                <div className="map-hover-hint">
                  {language === 'hi' ? 'मैप में खोलने के लिए क्लिक करें' : 'Click to open in Google Maps'}
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
