import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import './ProductsSection.css';

const productShowcase = [
  {
    id: 1,
    mainImage: '/prod-frames.jpg',
    title: { en: 'Premium Frames Collection', hi: 'प्रीमियम फ्रेम संग्रह' },
    desc: { en: 'Explore our exclusive collection of designer frames. From classic to contemporary, find the perfect style that complements your personality.', hi: 'हमारे विशेष डिज़ाइनर फ्रेम संग्रह का अन्वेषण करें। क्लासिक से आधुनिक तक, अपने व्यक्तित्व के अनुरूप सही स्टाइल खोजें।' },
    tag: { en: 'Designer Collection', hi: 'डिज़ाइनर संग्रह' }
  },
  {
    id: 2,
    mainImage: '/prod-sunglasses.jpg',
    title: { en: 'Sunglasses', hi: 'धूप के चश्मे' },
    desc: { en: '100% UV protection with premium polarized lenses. Perfect for driving, outdoor adventures, and everyday style.', hi: 'प्रीमियम पोलराइज़्ड लेंस के साथ 100% UV सुरक्षा। ड्राइविंग और आउटडोर के लिए एकदम सही।' },
    tag: { en: 'UV 400 Protection', hi: 'UV 400 सुरक्षा' }
  },
  {
    id: 3,
    mainImage: '/prod-lenses.jpg',
    title: { en: 'Advanced Lenses', hi: 'उन्नत लेंस' },
    desc: { en: 'Crizal and Essilor coatings with anti-reflective, anti-scratch, and blue light filtering technology.', hi: 'एंटी-रिफ्लेक्टिव, एंटी-स्क्रैच और ब्लू लाइट फ़िल्टरिंग तकनीक के साथ क्रिज़ल और एस्सिलोर कोटिंग।' },
    tag: { en: 'Crizal & Essilor', hi: 'क्रिज़ल और एस्सिलोर' }
  },
  {
    id: 4,
    mainImage: '/prod-antiglare.jpg',
    title: { en: 'Anti-Glare Coating', hi: 'एंटी-ग्लेयर कोटिंग' },
    desc: { en: 'Experience crystal clear vision with our premium anti-glare lenses. Reduces reflections and provides comfortable viewing in all lighting conditions.', hi: 'हमारे प्रीमियम एंटी-ग्लेयर लेंस के साथ क्रिस्टल क्लियर विज़न का अनुभव करें। सभी प्रकाश स्थितियों में आरामदायक देखने का अनुभव।' },
    tag: { en: 'Clear Vision', hi: 'स्पष्ट दृष्टि' }
  },
  {
    id: 5,
    mainImage: '/prod-sports.jpg',
    title: { en: 'Sports Eyewear', hi: 'स्पोर्ट्स आइवियर' },
    desc: { en: 'High-performance sports glasses designed for active lifestyles. Impact-resistant lenses with superior grip and comfort.', hi: 'सक्रिय जीवनशैली के लिए डिज़ाइन किए गए हाई-परफॉर्मेंस स्पोर्ट्स चश्मे। बेहतर ग्रिप और आराम के साथ इम्पैक्ट-रेसिस्टेंट लेंस।' },
    tag: { en: 'Sports Series', hi: 'स्पोर्ट्स सीरीज़' }
  },
  {
    id: 6,
    mainImage: '/prod-kids.jpg',
    title: { en: 'Kids Collection', hi: 'बच्चों का संग्रह' },
    desc: { en: 'Fun and durable eyewear for kids. Lightweight, comfortable frames designed specifically for young faces.', hi: 'बच्चों के लिए मज़ेदार और टिकाऊ आइवियर। युवा चेहरों के लिए विशेष रूप से डिज़ाइन किए गए हल्के, आरामदायक फ्रेम।' },
    tag: { en: 'For Kids', hi: 'बच्चों के लिए' }
  },
];

const ProductsSection = () => {
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
    <section id="products" className="products" ref={sectionRef}>
      <div className="container">
        <div className="products-header">
          <span className="products-tag">{t('navProducts')}</span>
          <h2 className="products-title">{t('productsHeading')}</h2>
        </div>

        <div className="products-showcase">
          {productShowcase.map((product, index) => (
            <div 
              key={product.id} 
              className={`showcase-card ${index % 2 === 1 ? 'reverse' : ''} observe-fade`}
            >
              <div className="showcase-image">
                <div className="image-frame">
                  <img src={product.mainImage} alt={product.title[language]} />
                </div>
                <div className="image-accent"></div>
              </div>
              
              <div className="showcase-content">
                <span className="showcase-tag">{product.tag[language]}</span>
                <h3 className="showcase-title">{product.title[language]}</h3>
                <p className="showcase-desc">{product.desc[language]}</p>
                <Link to="/contact" className="showcase-link">
                  {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
