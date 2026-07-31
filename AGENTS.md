# AGENTS.md

## What this is

Portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Supports English/Spanish toggle (English default).

## Structure

- `src/app/layout.tsx` — root layout (fonts: Inter + Syne, `lang="en"`)
- `src/app/page.tsx` — main page composing all section components, wrapped in `<Providers>`
- `src/app/globals.css` — all custom styles (glass-morphism, parallax, sticker-peel animations, hover effects)
- `src/components/` — React components (all client components)
- `src/hooks/` — custom hooks for interactive effects
- `src/i18n/` — translations and language context
- `src/config.ts` — `BASE_PATH` (conditional: `/portafolio` in prod, `""` in dev)
- `public/img/` — images (JPG/PNG)
- `public/e-commerce-demo/` — standalone demo (own HTML/CSS/JS, no shared code)

## Components

| Component | Type | Purpose |
|---|---|---|
| `Providers.tsx` | client | Wraps app in `LanguageProvider` |
| `LanguageToggle.tsx` | client | EN/ES toggle button (in nav at top, floating when scrolled) |
| `Nav.tsx` | client | Navigation, mobile toggle, scroll detection, language toggle |
| `Hero.tsx` | client | Scramble text effect, parallax glows |
| `About.tsx` | client | Bento grid with stat counters |
| `Certificates.tsx` | client | Certificate cards |
| `Projects.tsx` | client | Project cards with lightbox |
| `MagneticButton.tsx` | client | Magnetic hover effect wrapper |
| `Architecture.tsx` | client | Architecture layer grid |
| `Skills.tsx` | client | Skill chips with stagger animation |
| `Achievements.tsx` | client | Achievement items |
| `Contact.tsx` | client | Contact links |
| `Footer.tsx` | client | Footer |
| `Lightbox.tsx` | client | Image lightbox overlay |
| `HomeClient.tsx` | client | Client wrapper (scroll reveal, parallax, stat counters) |

## i18n

- `src/i18n/translations.ts` — all UI text in EN and ES, keyed by section
- `src/i18n/LanguageContext.tsx` — React context providing `language`, `t` (translations), `toggleLanguage()`
- Default language: **English**
- All components use `useLanguage()` hook to access `t.nav.*`, `t.hero.*`, `t.about.*`, etc.

### Language toggle behavior

- At the top of the page (scroll < 80px): button sits inside the nav bar
- Scrolled down (≥ 80px): button becomes a floating element fixed to bottom-right
- On mobile (≤ 768px): always floating at bottom-right

## Hooks

| Hook | Purpose |
|---|---|
| `useMagneticButton` | Updates `--mx`/`--my` CSS vars on hover for magnetic effect |
| `useScrollReveal` | IntersectionObserver for bidirectional sticker-peel animations (visible/peeled) |
| `useParallax` | Scroll-based parallax depth using `data-parallax` attribute for speed |
| `useStatCounter` | Animated number counter for stat cards |
| `useScrambleText` | Text scramble effect on hero title |

## Deployment

- Push to `main` triggers GitHub Pages deploy (`.github/workflows/ci.yml`)
- Build: `next build` outputs static files to `out/`
- Config: `next.config.ts` has `output: "export"` and conditional `basePath` (`/portafolio` in production, none in dev)
- `BASE_PATH` in `src/config.ts` is also conditional (matches `basePath`)
- To preview locally: `npm run dev` (serves at `localhost:3000`)

## Conventions

- UI text is in English by default, with full Spanish translation available
- All components are client components (need `useLanguage()` context)
- Client components use `"use client"` directive
- CSS uses custom properties and glass-morphism patterns
- Fonts: Inter (body), Syne (display/headlines) via `next/font/google`

## Visual Design

- **Background:** Gray textured (`#12141a`) with grain overlay at 0.04 opacity
- **Sections:** Opaque glass (`backdrop-filter: blur(40px)`) with subtle borders
- **Cards:** Translucent glass (`rgba(255,255,255,0.08)`, blur 32px) with inset highlight
- **Parallax:** Elements with `data-parallax="speed"` move at different scroll speeds
- **Animations:** Sticker-peel effect (perspective rotateX + scale) on scroll reveal
- `color-scheme: dark` on `<html>` for proper scrollbar/input theming

## Accessibility

- `prefers-reduced-motion` disables all animations and parallax
- `:focus-visible` rings on all interactive elements
- No `transition: all` — properties listed explicitly
- `text-wrap: balance` on headings
- Icon buttons have `aria-label`
