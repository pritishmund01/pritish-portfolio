import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <p className="section-eyebrow">Selected work</p>
      <h2 id="work-title" className="section-title">
        Two things I've shipped
      </h2>

      <div className="project-grid">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className={`project-card project-card--${project.accent}`}
          >
            <div className="project-header">
              <div className="project-icon" aria-hidden="true">
                {project.iconType === 'circle' ? (
                  <svg viewBox="0 0 100 100" width="34" height="34">
                    <circle
                      cx="50"
                      cy="50"
                      r="34"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                    />
                    <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 100" width="34" height="34">
                    <path
                      d="M 35 8 C 35 35, 65 35, 65 58 C 65 82, 35 82, 35 94"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                    />
                    <path
                      d="M 65 8 C 65 35, 35 35, 35 58 C 35 82, 65 82, 65 94"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      opacity="0.6"
                    />
                  </svg>
                )}
              </div>
              <p className="project-tag">{project.tag}</p>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="skill-cloud skill-cloud--tight">
              {project.chips.map((chip, idx) => (
                <span key={idx} className="chip chip--soft">
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
