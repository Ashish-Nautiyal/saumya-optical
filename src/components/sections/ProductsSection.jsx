import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './ProductsSection.css';

const products = [
  {
    image: '/prod-frames.jpg',
    en: { name: 'Prescription Frames', desc: 'Rimless, full-rim & half-rim — stylish frames for every face shape.', badge: 'Most Popular' },
    hi: { name: 'नजर के चश्मे', desc: 'हर चेहरे के लिए स्टाइलिश फ्रेम — रिमलेस, फुल-रिम, हाफ-रिम।', badge: 'सबसे लोकप्रिय' },
  },
  {
    image: '/prod-sunglasses.jpg',
    en: { name: 'Sunglasses', desc: 'UV-protected premium sunglasses for fashion, driving & outdoor activities.', badge: 'UV Protection' },
    hi: { name: 'धूप के चश्मे', desc: 'UV सुरक्षा के साथ प्रीमियम धूप के चश्मे — ड्राइविंग और आउटडोर के लिए।', badge: 'UV सुरक्षा' },
  },
  {
    image: '/prod-lenses.jpg',
    en: { name: 'Contact Lenses', desc: 'Soft daily & monthly lenses for comfortable all-day wear from top brands.', badge: 'Premium Quality' },
    hi: { name: 'कॉन्टैक्ट लेंस', desc: 'डेली और मंथली लेंस — पूरे दिन आरामदायक पहनावे के लिए।', badge: 'प्रीमियम गुणवत्ता' },
  },
  {
    image: '/prod-antiglare.jpg',
    en: { name: 'Anti-Glare Lenses', desc: 'Crizal & Essilor coated lenses — reduce screen glare and protect your eyes.', badge: 'Crizal · Essilor' },
    hi: { name: 'एंटी-ग्लेयर लेंस', desc: 'क्रिज़ल और एस्सिलोर एंटी-ग्लेयर लेंस — स्क्रीन के लिए आदर्श।', badge: 'क्रिज़ल · एस्सिलोर' },
  },
  {
    image: '/prod-kids.jpg',
    en: { name: 'Kids Eyewear', desc: 'Durable, lightweight & fun frames designed for children\'s safe vision.', badge: 'Safe & Durable' },
    hi: { name: 'बच्चों के चश्मे', desc: 'बच्चों के लिए मजबूत, हल्के और रंगीन फ्रेम।', badge: 'मजबूत और हल्के' },
  },
  {
    image: '/prod-sports.jpg',
    en: { name: 'Sports Eyewear', desc: 'Shockproof wrap-around frames for athletes and active lifestyles.', badge: 'Shockproof' },
    hi: { name: 'स्पोर्ट्स चश्मे', desc: 'एथलीट्स के लिए रैप-अराउंड स्पोर्ट्स फ्रेम।', badge: 'शॉकप्रूफ' },
  },
];

const ProductsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header">
          <p className="section-label">{t('productsHeading')}</p>
          <h2 className="section-title">{t('productsSubheading')}</h2>
          <div className="title-underline centered"></div>
        </div>

        <div className="products-grid">
          {products.map((p, i) => {
            const info = p[language] || p.en;
            return (
              <div
                key={i}
                className="product-card"
                style={{ backgroundImage: `url('${p.image}')` }}
              >
                {/* dark overlay for text legibility */}
                <div className="product-overlay"></div>

                <div className="product-content">
                  <span className="product-badge">{info.badge}</span>
                  <h3 className="product-name">{info.name}</h3>
                  <p className="product-desc">{info.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="products-cta-text">
          {language === 'hi'
            ? 'और अधिक जानने के लिए — '
            : 'Interested in any of these? '}
          <a href="#contact" className="products-inline-link">
            {language === 'hi' ? 'संपर्क करें →' : 'Contact Us →'}
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
