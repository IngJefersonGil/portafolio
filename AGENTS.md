# AGENTS.md

## What this is

Portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Structure

- `src/app/layout.tsx` — root layout (fonts: Inter + Syne, `lang="es"`)
- `src/app/page.tsx` — main page composing all section components
- `src/app/globals.css` — all custom styles (glass-morphism, animations, hover effects)
- `src/components/` — React components (server + client)
- `src/hooks/` — custom hooks for interactive effects
- `public/img/` — images (JPG/PNG)
- `public/e-commerce-demo/` — standalone demo (own HTML/CSS/JS, no shared code)

## Components

| Component | Type | Purpose |
|---|---|---|
| `CursorGlow.tsx` | client | Cursor-following glow effect |
| `Nav.tsx` | client | Navigation, mobile toggle, scroll detection |
| `Hero.tsx` | client | Scramble text effect, parallax glows |
| `About.tsx` | server | Bento grid with stat counters |
| `Certificates.tsx` | server | Certificate cards |
| `Projects.tsx` | client | Project cards with 3D tilt + lightbox |
| `MagneticButton.tsx` | client | Magnetic hover effect wrapper |
| `Architecture.tsx` | server | Architecture layer grid |
| `Skills.tsx` | client | Skill chips with stagger animation |
| `Achievements.tsx` | server | Achievement items |
| `Contact.tsx` | server | Contact links |
| `Footer.tsx` | server | Footer |
| `Lightbox.tsx` | client | Image lightbox overlay |
| `HomeClient.tsx` | client | Client wrapper (scroll reveal, parallax, stat counters) |

## Hooks

| Hook | Purpose |
|---|---|
| `useMagneticButton` | Updates `--mx`/`--my` CSS vars on hover for magnetic effect |
| `useCardTilt` | 3D perspective tilt + light overlay on project cards |
| `useScrollReveal` | IntersectionObserver for fade/scale-in animations |
| `useStatCounter` | Animated number counter for stat cards |
| `useScrambleText` | Text scramble effect on hero title |

## Hover system

Magnetic hover uses CSS custom properties (`--mx`, `--my`) instead of direct `transform` overrides. This allows CSS `:hover` transforms (rotate, translateY) to coexist with JS magnetic offsets. CSS combines them:

```css
.card-link:hover {
  transform: rotate(45deg) translate(var(--mx, 0px), var(--my, 0px));
}
```

## Deployment

- Push to `main` triggers GitHub Pages deploy (`.github/workflows/ci.yml`)
- Build: `next build` outputs static files to `out/`
- Config: `next.config.ts` has `output: "export"` for static export
- To preview locally: `npm run dev`

## Conventions

- UI text is in Spanish — preserve language when editing content
- Client components use `"use client"` directive
- CSS uses custom properties and glass-morphism patterns
- Fonts: Inter (body), Syne (display/headlines) via `next/font/google`
