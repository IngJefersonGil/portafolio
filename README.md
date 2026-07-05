# Portafolio — Jeferson Gil

<!-- English -->
<details open>
<summary><b>English</b></summary>

Personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

### Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS (glass-morphism, animations)
- **Fonts:** Inter (body) + Syne (display) via `next/font/google`
- **Deployment:** GitHub Pages (static)

### Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fonts, lang="es")
│   ├── page.tsx          # Main page composing all sections
│   └── globals.css       # All custom styles
├── components/
│   ├── Hero.tsx          # Hero section with scramble text effect
│   ├── Nav.tsx           # Navigation with scroll detection
│   ├── About.tsx         # Bento grid with stat counters
│   ├── Projects.tsx      # Project cards with 3D tilt + lightbox
│   ├── Architecture.tsx  # Architecture layer grid
│   ├── Skills.tsx        # Skill chips with stagger animation
│   ├── Certificates.tsx  # Certificate cards
│   ├── Achievements.tsx  # Achievement items
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   ├── HomeClient.tsx    # Client wrapper (scroll reveal, parallax)
│   ├── CursorGlow.tsx    # Cursor-following glow effect
│   ├── Lightbox.tsx      # Image lightbox overlay
│   └── MagneticButton.tsx # Magnetic hover effect wrapper
└── hooks/
    ├── useCardTilt.ts      # 3D perspective tilt on project cards
    ├── useMagneticButton.ts # Magnetic hover via CSS custom properties
    ├── useScrambleText.ts  # Text scramble effect on hero title
    ├── useScrollReveal.ts  # IntersectionObserver fade/scale-in
    └── useStatCounter.ts   # Animated number counter
```

### Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

The site will be available at `http://localhost:3000`.

### Deployment

The project is configured for **static export** (`output: "export"` in `next.config.ts`). Push to `main` to trigger the GitHub Pages workflow defined in `.github/workflows/ci.yml`.

### Key Features

- Glass-morphism UI with subtle grain texture
- Scroll-triggered reveal animations
- 3D card tilt on project hover
- Magnetic button hover effects
- Animated stat counters
- Responsive design (mobile → desktop)
- Lightbox for project screenshots

</details>

---

<!-- Español -->
<details>
<summary><b>Español</b></summary>

Sitio web portafolio personal construido con **Next.js 16**, **TypeScript** y **Tailwind CSS v4**.

### Stack Tecnológico

- **Framework:** Next.js 16 (App Router, exportación estática)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 + CSS personalizado (glass-morphism, animaciones)
- **Fuentes:** Inter (cuerpo) + Syne (títulos) vía `next/font/google`
- **Despliegue:** GitHub Pages (estático)

### Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx        # Layout raíz (fuentes, lang="es")
│   ├── page.tsx          # Página principal que compone todas las secciones
│   └── globals.css       # Todos los estilos personalizados
├── components/
│   ├── Hero.tsx          # Sección hero con efecto de texto scramble
│   ├── Nav.tsx           # Navegación con detección de scroll
│   ├── About.tsx         # Grid bento con contadores animados
│   ├── Projects.tsx      # Tarjetas de proyectos con inclinación 3D + lightbox
│   ├── Architecture.tsx  # Grid de capas de arquitectura
│   ├── Skills.tsx        # Chips de habilidades con animación escalonada
│   ├── Certificates.tsx  # Tarjetas de certificados
│   ├── Achievements.tsx  # Elementos de logros
│   ├── Contact.tsx       # Enlaces de contacto
│   ├── Footer.tsx        # Pie de página
│   ├── HomeClient.tsx    # Wrapper cliente (scroll reveal, parallax)
│   ├── CursorGlow.tsx    # Efecto de brillo que sigue al cursor
│   ├── Lightbox.tsx      # Overlay lightbox para imágenes
│   └── MagneticButton.tsx # Botón con efecto magnético
└── hooks/
    ├── useCardTilt.ts      # Inclinación 3D en tarjetas de proyectos
    ├── useMagneticButton.ts # Hover magnético vía propiedades CSS
    ├── useScrambleText.ts  # Efecto scramble en el título del hero
    ├── useScrollReveal.ts  # IntersectionObserver para fade/scale-in
    └── useStatCounter.ts   # Contador numérico animado
```

### Primeros Pasos

**Requisitos:** Node.js 18+

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Previsualizar build de producción
npm run start
```

El sitio estará disponible en `http://localhost:3000`.

### Despliegue

El proyecto está configurado para **exportación estática** (`output: "export"` en `next.config.ts`). Haz push a `main` para activar el workflow de GitHub Pages definido en `.github/workflows/ci.yml`.

### Características Principales

- UI con glass-morphism y textura sutil de grano
- Animaciones de revelado al hacer scroll
- Inclinación 3D en hover de proyectos
- Efectos magnéticos en botones
- Contadores numéricos animados
- Diseño responsive (móvil → escritorio)
- Lightbox para capturas de proyectos

</details>
