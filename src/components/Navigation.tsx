'use client';

import { useEffect, useState } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = [
    'header',
    'problems',
    'solution',
    'benefits',
    'results',
    'footer',
    'timeline',
    'closing'
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);

      // Update active section dot
      let currentSection = 0;
      sections.forEach((_, index) => {
        const section = document.querySelector(`[data-section="${index}"]`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            currentSection = index;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Navigation Dots */}
      <div className="sticky-nav">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`nav-dot ${activeSection === index ? 'active' : ''}`}
            title={`Go to section ${index + 1}`}
            aria-label={`Navigate to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        title="Back to top"
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
