import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import GallerySection from '../components/sections/GallerySection';

function Home() {
  const { language } = useLanguage();

  const cards = [
    {
      to: '/services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: language === 'hi' ? 'हमारी सेवाएं' : 'Our Services',
      desc: language === 'hi' ? 'व्यापक नेत्र देखभाल समाधान' : 'Comprehensive eye care solutions',
      link: language === 'hi' ? 'और जानें' : 'Learn More',
    },
    {
      to: '/products',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      title: language === 'hi' ? 'उत्पाद' : 'Products',
      desc: language === 'hi' ? 'हमारा चश्मा संग्रह देखें' : 'Explore our eyewear collection',
      link: language === 'hi' ? 'उत्पाद देखें' : 'View Products',
    },
    {
      to: '/about',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
      title: language === 'hi' ? 'हमारे बारे में' : 'About Us',
      desc: language === 'hi' ? 'हमारी विशेषज्ञ टीम से मिलें' : 'Meet our expert team',
      link: language === 'hi' ? 'और जानें' : 'Discover More',
    },
    {
      to: '/contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: language === 'hi' ? 'संपर्क करें' : 'Contact Us',
      desc: language === 'hi' ? 'हमसे संपर्क करें' : 'Get in touch with us',
      link: language === 'hi' ? 'अभी संपर्क करें' : 'Contact Now',
      highlight: true,
    },
  ];

  return (
    <div>
      <HeroSection />
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-cards">
            {cards.map((card, index) => (
              <Link key={index} to={card.to} className={`cta-card ${card.highlight ? 'highlight' : ''}`}>
                <div className="cta-card-icon">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="cta-link">
                  {card.link} <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GallerySection />
    </div>
  );
}

export default Home;
