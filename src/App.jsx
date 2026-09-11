import React from 'react';

export default function App() {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">Pritish Mund</a>
        <nav className="main-nav" aria-label="Main Navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#timeline">Timeline</a>
        </nav>
        <a href="#contact" className="btn btn--secondary">Say hi</a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-decor hero-circle" aria-hidden="true"></div>
          <div className="hero-text">
            {/* Live Availability Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ECFDF5',
              border: '2px solid #059669',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#065F46',
              marginBottom: '16px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                display: 'inline-block'
              }}></span>
              Available for Internships
            </div>

            <p className="eyebrow">2nd-year B.Tech CSE &middot; GIET University, Gunupur</p>
            <h1 className="hero-title">
              I build working software across <span className="pop pop--violet">AI</span> and <span className="pop pop--pink">Web Dev</span>.
            </h1>
            <p className="hero-bio">
              Python and applied AI/ML on one side, modern web development on the other. My approach is simple: turn coursework and hands-on builds into finished, documented software instead of just writing syntax. Two shipped projects — <strong>Helix AI</strong> and <strong>SOS APK</strong> — back that up.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn--primary">
                See my work<span className="btn-icon" aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn btn--secondary">Get in touch</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="dot-field" aria-hidden="true"></div>
            <img
              src="/profile.jpg"
              alt="Portrait of Pritish Mund"
              className="hero-image"
              width="320"
              height="427"
              loading="eager"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Grounded fundamentals. Exploratory builds.</h2>
          <div className="about-grid">
            <p className="about-text">
              I work at the intersection of algorithmic foundations and applied software — Python, applied AI/ML, and responsive web applications. My approach is to turn technical coursework and hands-on implementations into functional, documented software rather than just writing syntax.
            </p>
            <p className="about-text">
              I prioritize real implementations with reproducible results over collecting passive certificates. I focus on building tools that solve practical constraints with clarity and momentum.
            </p>
          </div>
          <div className="trait-row">
            <div className="trait-card trait-card--violet">
              <span className="trait-icon" aria-hidden="true">●</span>
              <h3>Grounded</h3>
              <p>Clean fundamentals in data structures, logic, and core engineering.</p>
            </div>
            <div className="trait-card trait-card--pink">
              <span className="trait-icon" aria-hidden="true">▲</span>
              <h3>Exploratory</h3>
              <p>Proactively diving into applied AI, responsive frontends, and web systems.</p>
            </div>
            <div className="trait-card trait-card--amber">
              <span className="trait-icon" aria-hidden="true">■</span>
              <h3>Deliberate</h3>
              <p>Real implementations and reproducible results over vanity metrics.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">What I build with</h2>
          <div className="skill-cloud">
            <span className="chip chip--violet">Web development</span>
            <span className="chip chip--pink">Python</span>
            <span className="chip chip--amber">Applied AI/ML</span>
            <span className="chip chip--mint">Frontend / UI</span>
            <span className="chip chip--violet">C (basics)</span>
            <span className="chip chip--pink">Java (basics)</span>
          </div>
        </section>

        {/* WORK / PROJECTS */}
        <section id="work" className="work">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title">Two things I've shipped</h2>

          <div className="project-grid">
            {/* SOS APK */}
            <article className="project-card project-card--violet">
              <div className="project-header">
                <div className="project-icon" aria-hidden="true">
                  <svg viewBox="0 0 100 100" width="34" height="34">
                    <circle cx="50" cy="50" r="34" fill="none" stroke="#FFFFFF" strokeWidth="4"></circle>
                    <circle cx="50" cy="50" r="6" fill="#FFFFFF"></circle>
                  </svg>
                </div>
                <p className="project-tag">Android &middot; Safety</p>
              </div>
              <h3 className="project-title">SOS APK</h3>
              <p className="project-desc">
                An emergency-alert Android app that detects the user's mobile device and acts on that context, so help can be triggered fast. Built as a self-contained APK from the ground up.
              </p>
              <div className="skill-cloud skill-cloud--tight">
                <span className="chip chip--soft">Android</span>
                <span className="chip chip--soft">Device detection</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
                <a
                  href="https://github.com/pritishmund01"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--onlight"
                  style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                >
                  GitHub ↗
                </a>
              </div>
            </article>

            {/* Helix AI */}
            <article className="project-card project-card--pink">
              <div className="project-header">
                <div className="project-icon" aria-hidden="true">
                  <svg viewBox="0 0 100 100" width="34" height="34">
                    <path d="M 35 8 C 35 35, 65 35, 65 58 C 65 82, 35 82, 35 94" fill="none" stroke="#FFFFFF" strokeWidth="4"></path>
                    <path d="M 65 8 C 65 35, 35 35, 35 58 C 35 82, 65 82, 65 94" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.6"></path>
                  </svg>
                </div>
                <p className="project-tag">Frontend &middot; AI</p>
              </div>
              <h3 className="project-title">Helix AI</h3>
              <p className="project-desc">
                The user-facing layer of an applied AI project, with the entire frontend hand-built in raw CSS — layout, type, and interaction states written from scratch.
              </p>
              <div className="skill-cloud skill-cloud--tight">
                <span className="chip chip--soft">CSS</span>
                <span className="chip chip--soft">Applied AI</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
                <a
                  href="https://github.com/pritishmund01"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--onlight"
                  style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="timeline-section">
          <p className="section-eyebrow">Timeline</p>
          <h2 className="section-title">Education &amp; milestones</h2>

          <ol className="timeline">
            <li className="timeline-item">
              <span className="timeline-dot timeline-dot--violet" aria-hidden="true"></span>
              <div className="timeline-card">
                <p className="timeline-when">2025 — Present</p>
                <h3>B.Tech, Computer Science &amp; Engineering</h3>
                <p className="timeline-detail">GIET University, Gunupur — currently in second year, CGPA 8.2.</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-dot timeline-dot--amber" aria-hidden="true"></span>
              <div className="timeline-card">
                <p className="timeline-when">Certification</p>
                <h3>NPTEL — The Joy of Computing using Python</h3>
                <p className="timeline-detail">Scored Elite.</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-dot timeline-dot--pink" aria-hidden="true"></span>
              <div className="timeline-card">
                <p className="timeline-when">Hackathon</p>
                <h3>Hacknovation 2.0</h3>
                <p className="timeline-detail">Participant.</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-dot timeline-dot--mint" aria-hidden="true"></span>
              <div className="timeline-card">
                <p className="timeline-when">Workshop</p>
                <h3>MySQL Technical Workshop</h3>
                <p className="timeline-detail">Hands-on database architecture and querying.</p>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-dot timeline-dot--violet" aria-hidden="true"></span>
              <div className="timeline-card">
                <p className="timeline-when">Certification</p>
                <h3>Freedom with AI</h3>
                <p className="timeline-detail">Applied generative AI tooling and workflows.</p>
              </div>
            </li>
          </ol>
        </section>
      </main>
      {/* FOOTER */}
      <footer id="contact" className="contact">
        <div className="contact-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <a
            href="mailto:pritishmund9@gmail.com"
            className="btn btn--onlight"
          >
            pritishmund9@gmail.com
          </a>
          <a
            href="https://github.com/pritishmund01"
            className="btn btn--onlight-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/pritish-mund-27101237b"
            className="btn btn--onlight-secondary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex' }}
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>

      <a href="#contact" className="mobile-cta">Say hi</a>
    </>
  );
}