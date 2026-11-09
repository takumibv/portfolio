# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server on http://localhost:3000
- `yarn build` - Build the production application
- `yarn start` - Start production server
- `yarn lint` - Run ESLint to check code quality
- `yarn export` - Export static site (configured for GitHub Pages deployment)

## Architecture Overview

This is a **Next.js 12 portfolio website** with static export capabilities, designed for GitHub Pages deployment.

### Key Technologies
- **Next.js 12** with TypeScript
- **SCSS + Tailwind CSS** hybrid styling approach
- **GSAP** for advanced animations and scroll effects
- **Three.js** for 3D model rendering (obj/glb files in public/model/)

### Project Structure
- `src/pages/` - Next.js pages (index, works, contact)
- `src/components/` - React components with Layout pattern
- `src/hooks/` - Custom hooks for animations (useParallax, useScrollAnimation)
- `src/styles/` - SCSS partials imported into app.scss
- `src/utils/config.ts` - URL helper for GitHub Pages deployment

### Styling Architecture
The project uses a **hybrid SCSS + Tailwind** approach:
- SCSS partials for component-specific styles (imported in app.scss)
- Tailwind for utilities and responsive design
- Custom breakpoints: `sp: 320px`, `tablet: 960px`, `desktop: 1280px`
- Dark mode support via CSS classes

### Animation System
- **GSAP** with ScrollTrigger for scroll-based animations
- **useParallax hook** for background parallax effects
- **useScrollAnimation hook** for smooth scrolling between sections
- ScrollToPlugin for animated navigation

### Layout Pattern
Components use Next.js layout pattern:
- `Layout` component wraps pages with Header/Footer
- Dark mode detection and toggle via `prefers-color-scheme`
- Page-level layout configuration via `getLayout`

### Deployment Configuration
- Configured for GitHub Pages with URL prefix support
- Static export enabled via `next export`
- Asset prefix configuration in next.config.js
- Homepage field in package.json points to GitHub Pages URL