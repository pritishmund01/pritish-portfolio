import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label, e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2500);
      });
    }
  };

  return (
    <footer id="contact" className="contact" role="contentinfo">
      <div className="contact-decor" aria-hidden="true"></div>
      <p className="section-eyebrow section-eyebrow--onaccent">Contact</p>
      <h2 className="contact-title">Let's build something.</h2>
      <p className="contact-lead">
        Open to Software Engineering, Applied AI/ML, and Web Development internships.
      </p>

      {copiedText && (
        <div className="copy-toast" role="status" aria-live="polite">
          ✓ Copied {copiedText} to clipboard!
        </div>
      )}

      <div className="contact-buttons">
        <div className="contact-action-group">
          <a
            href={`mailto:${contactInfo.email}`}
            className="btn btn--onlight"
            title="Send email"
          >
            {contactInfo.email}
          </a>
          <button
            type="button"
            className="btn btn--copy"
            onClick={(e) => handleCopy(contactInfo.email, 'email', e)}
            aria-label="Copy email address"
            title="Copy email"
          >
            📋
          </button>
        </div>


        <a
          href={contactInfo.github}
          className="btn btn--onlight-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
