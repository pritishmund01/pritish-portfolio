# Technical Architecture — Pritish Mund Portfolio

## 1. System Overview
A zero-dependency, ultra-lightweight static web application built with semantic HTML5, pure CSS3 (design tokens + CSS Grid & Flexbox), and optimized static assets.
┌────────────────────────────────────────┐
              │                 Client                 │
              └───────────────────┬────────────────────┘
                                  │
             GET /                │ Assets & CSS
             ─────────────────────┼─────────────────────►
                                  ▼
    ┌────────────────────────────────────────────────────────┐
    │  index.html (Semantic Structure, ARIA, Document Tree)  │
    ├────────────────────────────────────────────────────────┤
    │  styles.css (Neo-brutalist Tokens, Layout, Animations) │
    ├────────────────────────────────────────────────────────┤
    │  profile.jpeg (Hero Media Asset)                       │
    └────────────────────────────────────────────────────────┘
    ## 2. Directory Layout
```text
├── index.html        # Single-page HTML document
├── styles.css        # Global stylesheet and token definitions
├── profile.jpeg      # Local portrait image asset
├── prd.md            # Product Requirements Document (Truth source)
├── architecture.md   # Structural architecture and CSS specs
├── phases.md         # Milestone and delivery roadmap
└── rules.md          # Engineering, a11y, and design contracts