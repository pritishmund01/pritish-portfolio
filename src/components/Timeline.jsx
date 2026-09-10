import React from 'react';
import { timelineData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="timeline-section"
      aria-labelledby="timeline-title"
    >
      <p className="section-eyebrow">Timeline</p>
      <h2 id="timeline-title" className="section-title">
        Education &amp; milestones
      </h2>

      <ol className="timeline">
        {timelineData.map((item) => (
          <li key={item.id} className="timeline-item">
            <span
              className={`timeline-dot timeline-dot--${item.accent}`}
              aria-hidden="true"
            ></span>
            <div className="timeline-card">
              <p className="timeline-when">{item.type}</p>
              <h3>{item.title}</h3>
              {item.detail && <p className="timeline-detail">{item.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
