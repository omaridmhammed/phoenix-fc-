# Phoenix FC Website

A premium, bilingual (English/French) website for Phoenix FC, built with Next.js, Tailwind CSS, and TypeScript.

## Features
- **Modern "Sports Premium" Design**: Dark mode aesthetic with Gold/Green accents.
- **Bilingual Support**: Full English & French support using `next-intl`.
- **Responsive Layout**: Mobile-optimized Navbar and layouts.
- **Dynamic Content**: Player profiles and News articles generated from data files.
- **Performance**: Optimized with Next.js App Router and Server Components.

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure
- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/data`: Mock data for Players, Matches, News.
- `messages`: Translation files (en.json, fr.json).
- `public`: Static assets (images).

## Technologies
- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- next-intl (i18n)
- Framer Motion
- Lucide React (Icons)
