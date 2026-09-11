import React from 'react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-decor hero-circle" aria-hidden="true"></div>
      <div className="hero-text">
        <p className="eyebrow">{personalInfo.role}</p>
        <h1 id="hero-title" className="hero-title">
          {personalInfo.headline} <span className="pop pop--violet">AI</span> and{' '}
          <span className="pop pop--pink">Web Development</span>.
        </h1>
        <p className="hero-bio">
          Python, applied AI/ML, and web development — my approach is simple: turn coursework and hands-on builds into finished,
          documented software instead of just writing syntax. Two shipped projects —{' '}
          <strong>Helix AI</strong> and <strong>SOS APK</strong> — back that up.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn--primary">
            See my work <span className="btn-icon" aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn--secondary">
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <div className="dot-field" aria-hidden="true"></div>
        <div className="hero-image-frame">
          <img
            src={profileImg}
            alt="Portrait of Pritish Mund"
            className="hero-image"
            width="320"
            height="427"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
