import React from 'react';
import { personalInfo, traitsData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <p className="section-eyebrow">About</p>
      <h2 id="about-title" className="section-title">
        Grounded fundamentals. Exploratory builds.
      </h2>
      <div className="about-grid">
        {personalInfo.aboutParagraphs.map((para, idx) => (
          <p key={idx} className="about-text">
            {para}
          </p>
        ))}
      </div>
      <div className="trait-row">
        {traitsData.map((trait) => (
          <article
            key={trait.id}
            className={`trait-card trait-card--${trait.accent}`}
          >
            <span className="trait-icon" aria-hidden="true">
              {trait.icon}
            </span>
            <h3>{trait.title}</h3>
            <p>{trait.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
