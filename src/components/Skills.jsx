import React, { useState } from 'react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <p className="section-eyebrow">Skills</p>
      <h2 id="skills-title" className="section-title">
        What I build with
      </h2>

      {/* Category filter tabs */}
      <div className="skill-filters" role="tablist" aria-label="Skill categories">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selectedCategory === category}
            className={`filter-btn ${
              selectedCategory === category ? 'filter-btn--active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skill-cloud" role="list">
        {filteredSkills.map((skill) => (
          <span
            key={skill.id}
            role="listitem"
            className={`chip chip--${skill.accent}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
