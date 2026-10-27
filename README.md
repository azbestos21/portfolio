# Rishi Bharadwaj — Portfolio

Single-page Next.js portfolio for [Rishi Bharadwaj](https://linkedin.com/in/rishi-bharadwaj-5b6b89255), a software engineer based in Bangalore.

The page stays on one route. A collapsible sidebar jumps you to each section with smooth scroll.

Visual style: warm parchment background, rust accents, Fraunces headings, Outfit body text, and IBM Plex Mono labels.

## Features

- Single-page layout: Home, About, Experience, Projects, Skills, Education, Highlights, Contact
- Collapsible sidebar on desktop, slide-out menu on mobile
- Active section tracking as you scroll
- Subtle motion: hero reveal, scroll-in cards, hover states, and a soft cursor glow
- Resume content lives in one file so it is easy to update

## Stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Customize

Edit `src/data/site.ts` to change copy, links, experience, projects, and skills.

Layout and section UI live in:

- `src/components/Portfolio.tsx`
- `src/components/Sidebar.tsx`
- `src/app/globals.css`

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
