## Phase 1: Semantic Structure & Clean Setup
- [x] Create clean HTML5 foundation with viewport meta tag and preconnected Google Fonts.
- [x] Define single-page layout sections:
  - Header with sticky anchor navigation.
  - Hero with status badge, title, bio, and CTA group.
  - About section with bio text and 3 trait cards.
  - Skills section with tag chip collection.
  - Selected Work section with SOS APK and Helix AI cards.
  - Timeline section with education and milestone cards.
  - Inverted footer contact section.
- [x] Clean up file structure so `styles.css` is separated from `index.html`.

---

## Phase 2: Neo-Brutalist Styling & Responsive Adaptation
- [x] Configure design token system in `:root` (palettes, hard borders, shadows, bounce easing).
- [x] Build neo-brutalist button physics (`:hover` translation + box-shadow offset, `:active` depression).
- [x] Implement asymmetric hero portrait styling with offset secondary shadow.
- [x] Implement desktop CSS Grid configurations for all multi-card modules.
- [x] Implement mobile breakpoint (`max-width: 860px`):
  - Stack multi-column sections to `1fr`.
  - Hide desktop nav and show fixed floating bottom CTA button (`.mobile-cta`).
  - Adjust section paddings for small screens.

---

## Phase 3: Content Verification & PRD Alignment
- [x] Enforce zero placeholder text; verify all entries originate from `prd.md`.
- [x] Project details verified:
  - **SOS APK**: Android, Device detection, emergency alert context.
  - **Helix AI**: Applied AI, raw CSS frontend implementation.
- [x] Timeline verified:
  - B.Tech CSE (GIET University, 8.2 CGPA).
  - NPTEL Python (Elite).
  - Hacknovation 2.0 (Participant).
  - MySQL Workshop.
  - Freedom with AI certification.
- [x] Contact endpoints configured:
  - `mailto:pritishmund9@gmail.com`
  - `tel:+917815004161`
  - `https://github.com/pritishmund01`

---

## Phase 4: Polish & Performance Optimization
- [x] Profile image integrated in hero section with asymmetric framing and hover tilt physics.
- [x] Port codebase to modular React.js (React 19 + Vite) with component separation.
- [x] Group the flat skill chips into explicit categories with interactive tab filters.
- [x] Add `pointer-events: none` to `.hero-decor` and `.hero-circle` to avoid touch/click trapping.
- [x] Increase mobile bottom padding on `.contact` (`padding-bottom: 160px;`) so the fixed `.mobile-cta` does not cover contact links.
- [x] Add click-to-copy interaction for email and phone numbers with animated feedback toast.
- [ ] Add direct outbound links/buttons to SOS APK and Helix AI project cards (pending GitHub repo URLs from Pritish).

---

## Phase 5: Production Deployment & CI/CD
- [x] Configure `vite.config.js` with `base: './'` for portable static hosting.
- [x] Create `vercel.json` for zero-config Vercel deployment and SPA routing.
- [x] Configure GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`) for automated deployment to GitHub Pages on push to `main`.
- [x] Verify production bundle build (`npm run build`) and lint verification (`oxlint`).
