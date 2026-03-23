import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { t } = useLanguage();
  
  const images = [
    { src: '/shopImages/shop-1.jpeg', alt: 'Shop Interior View 1' },
    { src: '/shopImages/shop-2.jpeg', alt: 'Shop Interior View 2' },
    { src: '/shopImages/shop-3.jpeg', alt: 'Shop Interior View 3' },
    { src: '/shopImages/shop-4.jpeg', alt: 'Shop Interior View 4' },
    { src: '/shopImages/shop-5.jpeg', alt: 'Shop Interior View 5' },
    { src: '/shopImages/shop-6.jpeg', alt: 'Shop Interior View 6' },
  ];

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="gallery-label">{t('galleryTag')}</span>
          <h2 className="gallery-title">{t('galleryHeading')}</h2>
          <p className="gallery-subtitle">{t('gallerySubheading')}</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{index + 1} / {images.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
            <ChevronLeft size={32} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].alt} 
            />
            <div className="lightbox-counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
          
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
