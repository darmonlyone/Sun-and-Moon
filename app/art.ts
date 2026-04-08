import type { ResultKey } from './data/quizData';

export type CelestialKind = 'sun' | 'moon';

const baseDataUri = (svg: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.replace(/\s{2,}/g, ' ').trim())}`;

export function getCelestialKind(resultKey: ResultKey): CelestialKind {
  return resultKey === 'sunrise' || resultKey === 'solarNoon' || resultKey === 'sunset' || resultKey === 'sunspot' || resultKey === 'solarEclipse'
    ? 'sun'
    : 'moon';
}

export function getCelestialArtSvg(kind: CelestialKind) {
  if (kind === 'sun') {
    return `
      <svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sun-bg" x1="96" y1="72" x2="554" y2="568" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFF7C5"/>
            <stop offset="0.45" stop-color="#FDBA4D"/>
            <stop offset="1" stop-color="#E66B2E"/>
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
          <path d="M151 151L216 211L176 251L151 151Z" fill="#FFE29A"/>
          <path d="M489 489L424 429L464 389L489 489Z" fill="#FFE29A"/>
          <path d="M489 151L464 251L424 211L489 151Z" fill="#FFE29A"/>
          <path d="M151 489L176 389L216 429L151 489Z" fill="#FFE29A"/>
        </g>
        <circle cx="320" cy="320" r="154" fill="url(#sun-core)"/>
        <circle cx="270" cy="280" r="18" fill="#D97706" fill-opacity="0.7"/>
        <circle cx="370" cy="280" r="18" fill="#D97706" fill-opacity="0.7"/>
        <path d="M255 378C274 408 305 422 320 422C335 422 366 408 385 378" stroke="#C2410C" stroke-width="18" stroke-linecap="round"/>
        <path d="M213 212C244 184 281 168 320 168C359 168 396 184 427 212" stroke="#FFF4BE" stroke-width="14" stroke-linecap="round" opacity="0.7"/>
      </svg>
    `;
  }

  return `
    <svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moon-bg" x1="80" y1="70" x2="560" y2="570" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EEF2FF"/>
          <stop offset="0.45" stop-color="#A5B4FC"/>
          <stop offset="1" stop-color="#4338CA"/>
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
    </svg>
  `;
}

export function getCelestialArtDataUri(kind: CelestialKind) {
  return baseDataUri(getCelestialArtSvg(kind));
}
