import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">
          <p>{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
