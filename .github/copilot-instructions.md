# Copilot Instructions - Portfolio Project

## Project Overview
Next.js 16 portfolio site for Léo Renouf using App Router architecture. Single-page application with smooth scrolling sections and animation-heavy UI.

## Tech Stack & Dependencies
- **Framework**: Next.js 16 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, styled-components for legacy component patterns
- **Animations**: Framer Motion (primary), GSAP with @gsap/react
- **3D Effects**: Three.js + Vanta.js (loaded via CDN in layout)
- **Icons**: FontAwesome Free, Lucide React
- **UI Components**: Swiper for carousels

## Architecture Patterns

### File Organization
- `app/page.tsx` - Main single-page app with all sections inline (800+ lines)
- `app/layout.tsx` - Root layout with FontAwesome imports and Vanta CDN scripts
- `app/component/` - Reusable components (bg, button, card)
- No `app/projet/` content currently (empty folder)

### Component Patterns
**Inline Components in page.tsx**: The `Card` component is defined inline at the top of [page.tsx](app/page.tsx) rather than being imported. When adding new components for this page, follow the same pattern of defining them inline above the `Home` component.

**Mixed Styling Approaches**:
- Inline components use **Tailwind + Framer Motion** (modern pattern)
- Separate component files use **styled-components** (legacy pattern)
- Example: [app/component/card.tsx](app/component/card.tsx) uses styled-components while inline Card uses Tailwind

**"use client" Directive**: All interactive components require `"use client"` at the top due to Framer Motion, GSAP, and hooks usage.

### Animation Conventions
**Framer Motion is primary**:
- Use `initial`, `animate`, `whileInView`, `whileHover` props
- Standard viewport config: `viewport={{ once: true }}`
- Common easing: `ease: [0.22, 1, 0.36, 1]` for smooth animations
- Example pattern from [page.tsx](app/page.tsx#L20-L35):
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
  ```

**Decorative Wireframe Elements**: Extensive use of decorative geometric shapes (circles, grids, lines) with subtle animations. Use `border-[#C07B60]/20` for wireframe colors with opacity variations.

### Color Scheme
- Primary: `#C07B60` (coral/terracotta)
- Background: `#FBF8F5` (warm off-white)
- Text: `#1C1C1C` (near black)
- Secondary bg: `#F7F4F2`, `#F2EDE9`
- Borders/decorative: Use primary color with opacity (`/20`, `/30`, `/40`)

### TypeScript Configuration
- Path alias: `@/*` maps to project root
- Strict mode enabled
- Target ES2017, JSX set to `react-jsx`

## Development Workflows

### Running the Project
```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Production build
npm start      # Run production build
npm run lint   # ESLint check (using eslint 9 flat config)
```

### External Dependencies (CDN)
Three.js and Vanta are loaded via CDN in [app/layout.tsx](app/layout.tsx#L24-L31), not npm packages. Window type augmentation in [global.d.ts](global.d.ts) handles `window.VANTA` typing.

### ESLint Configuration
Uses **ESLint 9 flat config** ([eslint.config.mjs](eslint.config.mjs)) with Next.js presets. Global ignores include `.next/`, `out/`, `build/`, `next-env.d.ts`.

## Content Structure

### Single-Page Sections (in order)
1. **Hero** - Name, title, CTA, social links, profile image
2. **À propos** - Bio paragraph about alternance search
3. **Skills** - Horizontal scrolling tech badges (auto-animated)
4. **Projets** - Three project cards (Joséphine, Twodevly, Cinélabs)
5. **Parcours** - Timeline with 5 experiences
6. **Footer** - Navigation, contacts, copyright

### Project Cards Pattern
Cards use rotation prop for staggered appearance. Example from [page.tsx](app/page.tsx#L508-L528):
```tsx
<Card
  title="Joséphine"
  description="site sur-mesure, système de réservation"
  rotation={-15}  // Negative/positive creates visual variety
  image="josephine.png"
  link="https://www.josephine-cherbourg.fr"
/>
```

## Key Implementation Notes

- **No routing**: Single page with anchor links (`#apropos`, `#projets`, `#parcours`)
- **Smooth scroll**: Enabled globally in [globals.css](app/globals.css) via `scroll-behavior: smooth`
- **Responsive**: Mobile-first with md: breakpoints throughout
- **i18n**: French content (lang="fr" in layout)
- **Assets**: Images referenced from public/ root (e.g., `me.jpg`, `josephine.png`)

## Common Tasks

**Adding a new animated section**: Use Framer Motion with `whileInView` for scroll-triggered animations. Include decorative wireframe elements for visual consistency.

**Adding a project**: Add a new `<Card>` component in the Projets section with unique rotation value (alternating positive/negative between -20 and 25).

**Modifying animations**: Adjust duration, delay, and easing in transition objects. Standard duration is 0.6s for most entrance animations.

**Icon usage**: FontAwesome classes like `fa-brands fa-github` or Lucide React components where needed.

## SEO & Project Goals

### Primary Objective
**Target Keyword**: `Développeur freelance Caen`  
**Goal**: Rank on Google.fr first page (organic "blue link") for this keyword

### SEO Implementation Status
✅ **Completed**:
- Meta tags optimized with keyword (title, description, keywords)
- Open Graph & Twitter Cards for social sharing
- Structured data (Schema.org Person/Professional type)
- Keyword integration in H1, H2, content (natural density)
- Image alt attributes with SEO-optimized descriptions
- sitemap.xml and robots.txt (Next.js dynamic generation)
- Blog section created with 3 planned articles

📋 **Pending Actions** (see [SEO-DOCUMENTATION.md](SEO-DOCUMENTATION.md)):
- Google Search Console setup and verification
- Domain name purchase (use GitHub Student Pack)
- Deploy to Vercel or DigitalOcean
- Write and publish blog articles (1-2/week recommended)
- Create backlinks (local directories, Malt.fr, Dev.to)
- Weekly ranking monitoring

### SEO-Critical Files
- [app/layout.tsx](app/layout.tsx) - Meta tags, structured data, verification token
- [app/page.tsx](app/page.tsx) - Main content with keyword optimization
- [app/sitemap.ts](app/sitemap.ts) - Sitemap configuration
- [app/robots.ts](app/robots.ts) - Crawler instructions
- [app/blog/page.tsx](app/blog/page.tsx) - Blog listing for content marketing
- [SEO-DOCUMENTATION.md](SEO-DOCUMENTATION.md) - Complete SEO strategy and tracking

### Content Guidelines for SEO
When adding content:
- Naturally integrate "développeur freelance Caen" in titles and first paragraphs
- Use semantic keywords: Next.js, React, TypeScript, Caen, développement web
- Add descriptive alt text to all images
- Update sitemap.ts when adding new pages
- Maintain blog with fresh content (critical for ranking)
