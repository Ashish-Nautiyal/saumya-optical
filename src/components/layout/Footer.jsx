import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.svg" alt="Saumya Optical" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">{t('footerDesc')}</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t('footerQuickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('navHome')}</Link></li>
              <li><Link to="/services">{t('navServices')}</Link></li>
              <li><Link to="/products">{t('navProducts')}</Link></li>
              <li><Link to="/about">{t('navAbout')}</Link></li>
              <li><Link to="/contact">{t('navContact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t('footerContactHeading')}</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} />
                <span>{t('footerAddress')}</span>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+918979216443">+91 8979216443</a>,<a href="tel:+919997270585">+91 9997270585</a>
              </li>
              <li>
                <Clock size={16} />
                <span>{t('contactHoursDesc')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
