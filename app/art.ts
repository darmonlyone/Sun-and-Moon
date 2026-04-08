import type { ResultKey } from './data/quizData';

export type CelestialKind = 'sun' | 'moon';
type ArtTheme = {
  start: string;
  middle: string;
  end: string;
  accent: string;
  symbol: string;
};

const baseDataUri = (svg: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.replace(/\s{2,}/g, ' ').trim())}`;

export function getCelestialKind(resultKey: ResultKey): CelestialKind {
  return resultKey === 'sunrise' || resultKey === 'solarNoon' || resultKey === 'sunset' || resultKey === 'sunspot' || resultKey === 'solarEclipse'
    ? 'sun'
    : 'moon';
}

const artThemes: Record<ResultKey, ArtTheme> = {
  newMoon: { start: '#0f172a', middle: '#3730a3', end: '#312e81', accent: '#c7d2fe', symbol: 'New' },
  fullMoon: { start: '#334155', middle: '#6366f1', end: '#8b5cf6', accent: '#e2e8f0', symbol: 'Full' },
  supermoon: { start: '#4c1d95', middle: '#7c3aed', end: '#2563eb', accent: '#ede9fe', symbol: 'Super' },
  micromoon: { start: '#374151', middle: '#52525b', end: '#64748b', accent: '#e4e4e7', symbol: 'Micro' },
  blueMoon: { start: '#0c4a6e', middle: '#2563eb', end: '#06b6d4', accent: '#e0f2fe', symbol: 'Blue' },
  bloodMoon: { start: '#450a0a', middle: '#be123c', end: '#ea580c', accent: '#ffe4e6', symbol: 'Blood' },
  harvestMoon: { start: '#78350f', middle: '#d97706', end: '#facc15', accent: '#fef3c7', symbol: 'Harvest' },
  lunarEclipse: { start: '#1e1b4b', middle: '#4c1d95', end: '#be185d', accent: '#ddd6fe', symbol: 'Eclipse' },
  sunrise: { start: '#db2777', middle: '#f97316', end: '#facc15', accent: '#ffedd5', symbol: 'Sunrise' },
  solarNoon: { start: '#ca8a04', middle: '#f59e0b', end: '#fb923c', accent: '#fef9c3', symbol: 'Noon' },
  sunset: { start: '#be185d', middle: '#8b5cf6', end: '#4338ca', accent: '#fde7f3', symbol: 'Sunset' },
  sunspot: { start: '#7c2d12', middle: '#d97706', end: '#84cc16', accent: '#fef3c7', symbol: 'Sunspot' },
  solarEclipse: { start: '#111827', middle: '#92400e', end: '#f59e0b', accent: '#fef3c7', symbol: 'Solar' },
};

export function getCelestialArtSvg(resultKey: ResultKey) {
  const kind = getCelestialKind(resultKey);
  const theme = artThemes[resultKey];

  if (kind === 'moon') {
    return `
    <svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moon-bg" x1="80" y1="70" x2="560" y2="570" gradientUnits="userSpaceOnUse">
          <stop stop-color="${theme.start}"/>
          <stop offset="0.45" stop-color="${theme.middle}"/>
          <stop offset="1" stop-color="${theme.end}"/>
        </linearGradient>
        <radialGradient id="moon-body" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304 302) rotate(90) scale(210)">
          <stop stop-color="#FDFDFE"/>
          <stop offset="0.55" stop-color="#E8EAFB"/>
          <stop offset="1" stop-color="#BCC5F6"/>
        </radialGradient>
      </defs>
      <rect width="640" height="640" rx="180" fill="url(#moon-bg)"/>
      <circle cx="210" cy="172" r="10" fill="#F8FAFC" fill-opacity="0.9"/>
      <circle cx="442" cy="156" r="8" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="474" cy="242" r="6" fill="#F8FAFC" fill-opacity="0.75"/>
      <circle cx="156" cy="268" r="7" fill="#F8FAFC" fill-opacity="0.65"/>
      <circle cx="390" cy="116" r="5" fill="#F8FAFC" fill-opacity="0.8"/>
      <path d="M398 118C348 90 287 92 239 121C171 162 141 241 151 314C162 391 224 455 300 470C372 483 443 443 483 383C439 408 387 420 334 414C222 400 140 300 152 190C155 164 163 140 176 118C190 94 209 74 231 58C282 19 350 10 409 37C439 51 465 72 484 99C458 74 430 56 398 118Z" fill="url(#moon-body)"/>
      <circle cx="277" cy="206" r="18" fill="#C7D2FE" fill-opacity="0.55"/>
      <circle cx="233" cy="278" r="12" fill="#C7D2FE" fill-opacity="0.45"/>
      <circle cx="314" cy="332" r="22" fill="#C7D2FE" fill-opacity="0.35"/>
      <circle cx="259" cy="355" r="10" fill="#C7D2FE" fill-opacity="0.45"/>
      <path d="M219 403C252 426 288 437 328 437C365 437 403 426 433 404C399 427 358 440 316 440C279 440 244 429 219 403Z" fill="#E0E7FF" fill-opacity="0.8"/>
      <text x="320" y="548" text-anchor="middle" fill="${theme.accent}" font-size="46" font-family="Arial, sans-serif" font-weight="700">${theme.symbol}</text>
    </svg>
  `;
  }

  return `
    <svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sun-bg" x1="96" y1="72" x2="554" y2="568" gradientUnits="userSpaceOnUse">
          <stop stop-color="${theme.start}"/>
          <stop offset="0.45" stop-color="${theme.middle}"/>
          <stop offset="1" stop-color="${theme.end}"/>
        </linearGradient>
        <radialGradient id="sun-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 308) rotate(90) scale(190)">
          <stop stop-color="#FFFBEA"/>
          <stop offset="0.55" stop-color="#FFD56A"/>
          <stop offset="1" stop-color="#F59E0B"/>
        </radialGradient>
      </defs>
      <rect width="640" height="640" rx="180" fill="url(#sun-bg)"/>
      <circle cx="320" cy="320" r="196" fill="#FFFFFF" fill-opacity="0.18"/>
      <g opacity="0.92">
        <path d="M320 82L348 166H292L320 82Z" fill="#FFF4BE"/>
        <path d="M320 558L348 474H292L320 558Z" fill="#FFF4BE"/>
        <path d="M82 320L166 292V348L82 320Z" fill="#FFF4BE"/>
        <path d="M558 320L474 292V348L558 320Z" fill="#FFF4BE"/>
      </g>
      <circle cx="320" cy="320" r="154" fill="url(#sun-core)"/>
      <text x="320" y="548" text-anchor="middle" fill="${theme.accent}" font-size="46" font-family="Arial, sans-serif" font-weight="700">${theme.symbol}</text>
    </svg>
  `;
}

export function getCelestialArtDataUri(resultKey: ResultKey) {
  return baseDataUri(getCelestialArtSvg(resultKey));
}
