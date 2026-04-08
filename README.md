# Sun & Moon Personality Quiz

## Current usable domain

- `https://darmonlyone.github.io/Sun-and-Moon/`
- If you rename the repo to `MoonAndSun`: `https://darmonlyone.github.io/MoonAndSun/`

A fun, single-page **bilingual (English / Thai)** personality quiz built with **Next.js + React + Tailwind CSS + animate.css**.

The app asks playful lifestyle/crush/personality questions and maps answers to 13 Moon/Sun archetypes:

- New Moon
- Full Moon
- Supermoon
- Micromoon
- Blue Moon
- Blood Moon
- Harvest Moon
- Lunar Eclipse
- Sunrise
- Solar Noon
- Sunset
- Sunspot
- Solar Eclipse

---

## Features

- **One-page quiz flow**
  - Intro screen
  - Question-by-question progression bar
  - Midway quote screen
  - 3-second pre-result reveal animation
  - Result page with restart

- **Bilingual UI**
  - English and Thai text for intro, questions, answers, quotes, and results
  - Language toggle from the first screen

- **Result personality system**
  - Weighted scoring from selected answers
  - Deterministic tie-breaking order
  - Per-result:
    - name (EN/TH)
    - short astronomy-style description
    - meaning
    - personality paragraph
    - unique color palette/pattern

- **Visual polish**
  - Tailwind glassmorphism cards
  - animate.css transitions and answer pulse effect
  - background gradient transitions across the quiz
  - placeholder slot for custom hand-drawn Moon/Sun image

---

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [animate.css](https://animate.style/)

---

## Project Structure

```text
app/
  data/quizData.ts    # quiz questions, localized copy, result profiles, scoring data
  globals.css         # global styles + utility classes
  layout.tsx          # root layout + metadata
  page.tsx            # main single-page quiz UI and state flow
```

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Then open <http://localhost:3000>.

### 3) Production build

```bash
npm run build
npm run start
```

### 4) Lint

```bash
npm run lint
```

---

## Customization Tips

- **Edit questions and answers** in `app/data/quizData.ts` under `questionBank` / `questions`.
- **Change result personalities** in `results`.
- **Update small scientific descriptions** in `resultShortDescriptions`.
- **Adjust quiz order** in exported `questions` mapping.
- **Tune colors and patterns** using each result's `palette` and `pattern` fields.
- **Replace image slot** in `ResultCard` (`app/page.tsx`) with your own uploaded/drawn artwork.

---

## Notes

This project is intended for entertainment and creative self-reflection.

> Just for fun — don’t take quiz outcomes too seriously 💛
