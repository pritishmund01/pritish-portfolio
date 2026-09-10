# Engineering Rules & Project Guidelines — Pritish Mund Portfolio

All future edits, additions, and refactors to this repository must follow these rules strictly.

---

## 1. Truth & Content Integrity Contract
1. **Never fabricate content**: If an achievement, project, social profile (e.g., LinkedIn), or metric is not confirmed in `prd.md`, do not guess or use placeholder data (`lorem ipsum`, dummy GitHub links, empty states).
2. **Missing data rule**: If data does not exist, omit the element entirely rather than creating empty UI shells.
3. **PRD synchronization**: Always update `prd.md` first before adding new projects or milestones to `index.html`.

---

## 2. Neo-Brutalist CSS Rules
1. **Never use blurred shadows**: All box-shadows must be solid offsets without blur radii.
   - Good: `box-shadow: 4px 4px 0px var(--foreground);`
   - Forbidden: `box-shadow: 0 4px 12px rgba(0,0,0,0.1);`
2. **Consistent border width**: Always use `var(--border-w) solid var(--foreground)` on cards, buttons, badges, and headers.
3. **Strict token usage**: Never hardcode colors. Use CSS variables defined in `:root` (`var(--background)`, `var(--foreground)`, `var(--accent)`, `var(--secondary)`, `var(--tertiary)`).
4. **Interactive physics**: Buttons and interactive cards must implement the bounce transition:
   - Default: `transition: transform 0.25s var(--ease-bounce), box-shadow 0.25s var(--ease-bounce);`
   - Hover: `transform: translate(-2px, -2px);`
   - Active: `transform: translate(2px, 2px);`

---

## 3. HTML & Accessibility Standards
1. **Semantic markup only**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<ol>`, `<ul>`, and `<footer>`.
2. **Accessible focus states**: Never use `outline: none;` without providing a high-contrast focus alternative:
   ```css
   a:focus-visible, button:focus-visible {
     outline: none;
     border-color: var(--accent) !important;
     box-shadow: 4px 4px 0px var(--accent) !important;
   }