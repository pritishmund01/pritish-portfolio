# Pritish Mund — Portfolio 🚀

A high-performance personal portfolio built with **React 19**, **Vite**, and pure **Neo-Brutalist CSS**. Designed to present software engineering, applied AI/ML, and Web Development builds with speed, clarity, and personality.

![Pritish Mund Portfolio](public/profile.jpg)

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla Neo-Brutalist CSS with custom design tokens, bounce easing, and hard solid shadows
- **Typography**: Google Fonts (*Outfit* & *Plus Jakarta Sans*)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`) for automated GitHub Pages deployment
- **Hosting Support**: GitHub Pages, Vercel (`vercel.json`), and Netlify

---

## 📂 Project Structure

```text
pritish-portfolio/
├── .github/workflows/   # CI/CD automated deployment to GitHub Pages
├── docs/                # PRD, architecture specifications & engineering rules
├── public/              # Static assets (favicons, icons, portrait image)
├── src/
│   ├── assets/          # Bundled media assets
│   ├── components/      # Modular React components
│   │   ├── Navbar.jsx   # Sticky header with scroll-tracking active states
│   │   ├── Hero.jsx     # Neo-brutalist hero with portrait framing
│   │   ├── About.jsx    # Narrative bio & trait cards
│   │   ├── Skills.jsx   # Interactive category-filtered skill chips
│   │   ├── Work.jsx     # Project cards (SOS APK & Helix AI)
│   │   ├── Timeline.jsx # Education & milestone timeline
│   │   ├── Contact.jsx  # Footer with 1-click clipboard copy
│   │   └── MobileCTA.jsx# Floating mobile action button
│   ├── data/
│   │   └── portfolioData.js # Centralized, truthful content model
│   ├── App.jsx          # Root application component
│   ├── index.css        # Global design tokens & neo-brutalist styles
│   └── main.jsx         # Vite entry point
├── package.json
├── vercel.json          # Vercel deployment configuration
└── vite.config.js       # Vite configuration with portable relative base
```

---

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/pritishmund01/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 📬 Contact & Connect

- **Email**: [pritishmund9@gmail.com](mailto:pritishmund9@gmail.com)
- **GitHub**: [github.com/pritishmund01](https://github.com/pritishmund01)
