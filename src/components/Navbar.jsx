import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'skills', 'work', 'timeline', 'contact'];
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header" role="banner">
      <a href="#top" className="brand" aria-label="Pritish Mund portfolio home">
        Pritish Mund
      </a>
      <nav className="main-nav" aria-label="Main Navigation">
        <a
          href="#about"
          className={activeSection === 'about' ? 'nav-link--active' : ''}
        >
          About
        </a>
        <a
          href="#skills"
          className={activeSection === 'skills' ? 'nav-link--active' : ''}
        >
          Skills
        </a>
        <a
          href="#work"
          className={activeSection === 'work' ? 'nav-link--active' : ''}
        >
          Work
        </a>
        <a
          href="#timeline"
          className={activeSection === 'timeline' ? 'nav-link--active' : ''}
        >
          Timeline
        </a>
      </nav>
      <a href="#contact" className="btn btn--secondary header-cta">
        Say hi
      </a>
    </header>
  );
}
