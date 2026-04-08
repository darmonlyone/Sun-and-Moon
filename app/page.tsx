'use client';

import { useMemo, useState } from 'react';
import { getCelestialArtDataUri, getCelestialArtSvg } from './art';
import { introCopy, Lang, midwayQuote, preResultQuote, questions, resultOrder, results, ResultKey, resultShortDescriptions } from './data/quizData';

type Stage = 'intro' | 'quiz' | 'midway' | 'revealing' | 'result';

const COLOR_STEPS = [
  'from-[#0f1026] via-[#1b2452] to-[#281a3c]',
  'from-[#2b1b4d] via-[#3f2b75] to-[#204c7e]',
  'from-[#1f3a6e] via-[#2f5d8f] to-[#7e4d8e]',
  'from-[#6f2f7d] via-[#b84f72] to-[#f39a5b]',
  'from-[#2c5364] via-[#203a43] to-[#0f2027]',
];

const EXPORT_WIDTH = 1080;
const EXPORT_HEIGHT = 1920;
const SUN_RESULTS: ResultKey[] = ['sunrise', 'solarNoon', 'sunset', 'sunspot', 'solarEclipse'];
const halfwayIndex = Math.floor(questions.length / 2);

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en');
  const [stage, setStage] = useState<Stage>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [animating, setAnimating] = useState(false);

  const progress = ((current + 1) / questions.length) * 100;
  const bg = COLOR_STEPS[Math.floor(current / 3) % COLOR_STEPS.length];

  const resultKey = useMemo<ResultKey>(() => {
    const score: Record<ResultKey, number> = Object.fromEntries(resultOrder.map((key) => [key, 0])) as Record<ResultKey, number>;

    answers.forEach((answerIndex, qIndex) => {
      if (answerIndex < 0) return;

      const selected = questions[qIndex].answers[answerIndex];
      Object.entries(selected.scoreMap).forEach(([key, value]) => {
        score[key as ResultKey] += value ?? 0;
      });
    });

    return resultOrder.reduce((best, key) => (score[key] > score[best] ? key : best), resultOrder[0]);
  }, [answers]);

  const selectAnswer = (index: number) => {
    if (animating) return;

    const nextAnswers = [...answers];
    nextAnswers[current] = index;
    setAnswers(nextAnswers);
    setAnimating(true);

    setTimeout(() => {
      if (current + 1 === halfwayIndex) {
        setStage('midway');
      } else if (current + 1 >= questions.length) {
        setStage('revealing');
        setTimeout(() => setStage('result'), 3000);
      } else {
        setCurrent((value) => value + 1);
      }

      setAnimating(false);
    }, 420);
  };

  const restart = () => {
    setStage('intro');
    setCurrent(0);
    setAnswers(Array(questions.length).fill(-1));
  };

  const intro = introCopy[lang];

  return (
    <main className={`min-h-screen bg-gradient-to-br ${bg} px-3 py-4 transition-all duration-700 sm:px-4 sm:py-8`}>
      <div className="mx-auto max-w-4xl">
        {stage === 'intro' && (
          <section className="glow-card animate__animated animate__fadeIn p-6 text-center sm:p-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">{intro.title}</h1>
            <p className="mx-auto mb-4 max-w-2xl text-base text-white/90 sm:text-lg">{intro.subtitle}</p>
            <p className="mb-8 text-sm text-yellow-100">{intro.note}</p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                className="rounded-2xl bg-white/20 px-5 py-3 font-semibold hover:bg-white/30"
                onClick={() => setLang((value) => (value === 'en' ? 'th' : 'en'))}
              >
                {intro.language}
              </button>
              <button
                className="rounded-2xl bg-yellow-300 px-5 py-3 font-semibold text-slate-900 hover:bg-yellow-200"
                onClick={() => setStage('quiz')}
              >
                {intro.start}
              </button>
            </div>
          </section>
        )}

        {stage === 'quiz' && (
          <section className="glow-card animate__animated animate__fadeIn p-5 sm:p-8">
            <div className="mb-5">
              <div className="mb-2 flex justify-between text-sm text-white/80">
                <span>{lang === 'en' ? 'Progress' : 'ความคืบหน้า'}</span>
                <span>
                  {current + 1}/{questions.length}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full rounded-full bg-yellow-300 transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <h2 className="mb-6 text-xl font-semibold leading-snug sm:text-2xl">
              {lang === 'en' ? questions[current].textEn : questions[current].textTh}
            </h2>

            <div className="grid gap-3">
              {questions[current].answers.map((answer, index) => {
                const selected = answers[current] === index;

                return (
                  <button
                    key={`${questions[current].id}-${index}`}
                    className={`answer-btn ${selected ? 'answer-btn-selected' : ''} ${
                      animating && selected ? 'animate__animated animate__pulse' : ''
                    }`}
                    onClick={() => selectAnswer(index)}
                  >
                    {lang === 'en' ? answer.textEn : answer.textTh}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {stage === 'midway' && (
          <section className="glow-card animate__animated animate__zoomIn p-6 text-center sm:p-10">
            <p className="mb-6 text-xl italic leading-relaxed text-yellow-100 sm:text-2xl">
              "{lang === 'en' ? midwayQuote.en : midwayQuote.th}"
            </p>
            <button
              className="rounded-2xl bg-white/20 px-6 py-3 font-semibold hover:bg-white/30"
              onClick={() => {
                setStage('quiz');
                setCurrent((value) => value + 1);
              }}
            >
              {lang === 'en' ? 'Continue' : 'ไปต่อ'}
            </button>
          </section>
        )}

        {stage === 'revealing' && (
          <section className="glow-card animate__animated animate__fadeIn p-8 text-center sm:p-12">
            <p className="mb-4 text-xl font-semibold text-yellow-100 sm:text-2xl">{lang === 'en' ? preResultQuote.en : preResultQuote.th}</p>
            <div className="mx-auto mt-8 h-20 w-20 animate-spin rounded-full border-4 border-white/30 border-t-yellow-300" />
            <p className="mt-5 text-white/80">{lang === 'en' ? 'Reading your cosmic aura...' : 'กำลังอ่านออร่าจักรวาลของคุณ...'}</p>
          </section>
        )}

        {stage === 'result' && <ResultCard lang={lang} resultKey={resultKey} onRestart={restart} />}
      </div>
    </main>
  );
}

function ResultCard({ lang, resultKey, onRestart }: { lang: Lang; resultKey: ResultKey; onRestart: () => void }) {
  const result = results[resultKey];
  const shortDescription = resultShortDescriptions[resultKey];
  const celestialKind = SUN_RESULTS.includes(resultKey) ? 'sun' : 'moon';
  const artSrc = getCelestialArtDataUri(celestialKind);

  const handleExport = async () => {
    const exportTitle = lang === 'en' ? result.titleEn : result.titleTh;
    const exportMeaning = lang === 'en' ? result.meaningEn : result.meaningTh;
    const exportBody = lang === 'en' ? result.personalityEn : result.personalityTh;
    const exportLove = lang === 'en' ? result.loveEn : result.loveTh;
    const exportLabel = lang === 'en' ? 'Your Cosmic Type' : 'พลังจักรวาลของคุณ';
    const exportShortDescription = lang === 'en' ? shortDescription.en : shortDescription.th;
    const exportMeaningLabel = lang === 'en' ? 'Meaning of this Moon/Sun' : 'ความหมายของพระจันทร์/พระอาทิตย์นี้';
    const exportLoveLabel = lang === 'en' ? 'In Love' : 'ความรักของคุณ';
    const bgStart = celestialKind === 'sun' ? '#2f1b12' : '#121730';
    const bgMid = celestialKind === 'sun' ? '#9a4f22' : '#4343a9';
    const bgEnd = celestialKind === 'sun' ? '#f59e0b' : '#8b5cf6';
    const accent = celestialKind === 'sun' ? '#ffe7a4' : '#e0e7ff';
    const artMarkup = getCelestialArtSvg(celestialKind);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${EXPORT_WIDTH}" height="${EXPORT_HEIGHT}" viewBox="0 0 ${EXPORT_WIDTH} ${EXPORT_HEIGHT}">
        <defs>
          <linearGradient id="bg" x1="60" y1="40" x2="${EXPORT_WIDTH - 60}" y2="${EXPORT_HEIGHT - 120}" gradientUnits="userSpaceOnUse">
            <stop stop-color="${bgStart}" />
            <stop offset="0.5" stop-color="${bgMid}" />
            <stop offset="1" stop-color="${bgEnd}" />
          </linearGradient>
        </defs>
        <rect width="${EXPORT_WIDTH}" height="${EXPORT_HEIGHT}" rx="80" fill="url(#bg)"/>
        <circle cx="180" cy="180" r="110" fill="#ffffff" fill-opacity="0.08"/>
        <circle cx="910" cy="1420" r="170" fill="#ffffff" fill-opacity="0.08"/>
        <rect x="72" y="72" width="${EXPORT_WIDTH - 144}" height="${EXPORT_HEIGHT - 144}" rx="56" fill="#081122" fill-opacity="0.18" stroke="#FFFFFF" stroke-opacity="0.2"/>
        <foreignObject x="170" y="160" width="740" height="740">${artMarkup}</foreignObject>
        <text x="120" y="950" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="40" letter-spacing="8">${escapeXml(exportLabel)}</text>
        <text x="120" y="1035" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="700">${escapeXml(exportTitle)}</text>
        <foreignObject x="120" y="1088" width="840" height="140">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; line-height: 1.45; color: rgba(255,255,255,0.86);">
            ${escapeHtml(exportShortDescription)}
          </div>
        </foreignObject>
        <foreignObject x="120" y="1258" width="840" height="300">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, Helvetica, sans-serif; font-size: 38px; line-height: 1.5; color: white;">
            ${escapeHtml(exportBody)}
          </div>
        </foreignObject>
        <foreignObject x="120" y="1545" width="840" height="148">
          <div xmlns="http://www.w3.org/1999/xhtml" style="padding: 28px 32px; border-radius: 28px; background: rgba(0,0,0,0.22); font-family: Arial, Helvetica, sans-serif; color: white;">
            <div style="font-size: 24px; opacity: 0.75; margin-bottom: 10px;">${escapeHtml(exportMeaningLabel)}</div>
            <div style="font-size: 30px; line-height: 1.4;">${escapeHtml(exportMeaning)}</div>
          </div>
        </foreignObject>
        <foreignObject x="120" y="1715" width="840" height="128">
          <div xmlns="http://www.w3.org/1999/xhtml" style="padding: 24px 32px; border-radius: 28px; background: rgba(255,255,255,0.12); font-family: Arial, Helvetica, sans-serif; color: white;">
            <div style="font-size: 24px; opacity: 0.78; margin-bottom: 8px;">${escapeHtml(exportLoveLabel)}</div>
            <div style="font-size: 28px; line-height: 1.35;">${escapeHtml(exportLove)}</div>
          </div>
        </foreignObject>
        <text x="120" y="1868" fill="rgba(255,255,255,0.72)" font-family="Arial, Helvetica, sans-serif" font-size="28">Sun &amp; Moon Personality Quiz</text>
      </svg>
    `;

    const svgUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const canvas = document.createElement('canvas');
    canvas.width = EXPORT_WIDTH;
    canvas.height = EXPORT_HEIGHT;
    const context = canvas.getContext('2d');

    if (!context) {
      URL.revokeObjectURL(svgUrl);
      return;
    }

    const image = new Image();
    image.onload = () => {
      context.drawImage(image, 0, 0, EXPORT_WIDTH, EXPORT_HEIGHT);
      URL.revokeObjectURL(svgUrl);

      const link = document.createElement('a');
      link.download = `${result.titleEn.toLowerCase().replace(/\s+/g, '-')}-mobile-card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    image.src = svgUrl;
  };

  return (
    <section className={`glow-card animate__animated animate__fadeInUp overflow-hidden bg-gradient-to-br p-0 ${result.palette} ${result.pattern}`}>
      <div className="grid gap-0 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="order-2 p-6 sm:p-8 lg:order-1">
          <p className="mb-2 text-sm uppercase tracking-[0.18em] text-yellow-100">{lang === 'en' ? 'Your Cosmic Type' : 'พลังจักรวาลของคุณ'}</p>
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">{lang === 'en' ? result.titleEn : result.titleTh}</h2>
          <p className="mb-3 text-xs leading-relaxed text-white/80">{lang === 'en' ? shortDescription.en : shortDescription.th}</p>
          <p className="mb-5 text-sm leading-7 text-white/90 sm:text-base">{lang === 'en' ? result.personalityEn : result.personalityTh}</p>

          <div className="rounded-2xl bg-black/20 p-4 text-sm text-white/90">
            <p>{lang === 'en' ? result.meaningEn : result.meaningTh}</p>
          </div>

          <div className="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-white/90">
            <p className="mb-1 font-semibold text-yellow-100">{lang === 'en' ? 'In Love' : 'ความรักของคุณ'}</p>
            <p>{lang === 'en' ? result.loveEn : result.loveTh}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              className="rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-slate-900 hover:bg-yellow-200"
              onClick={handleExport}
            >
              {lang === 'en' ? 'Download Mobile Image' : 'ดาวน์โหลดภาพสำหรับมือถือ'}
            </button>
            <button
              className="rounded-2xl bg-white/25 px-6 py-3 font-semibold hover:bg-white/35"
              onClick={onRestart}
            >
              {lang === 'en' ? 'Try Again' : 'ลองอีกครั้ง'}
            </button>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center bg-black/20 p-5 sm:p-8 lg:order-2">
          <div className="result-export-shell flex w-full items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl">
            <img
              src={artSrc}
              alt={lang === 'en' ? `${result.titleEn} artwork` : `${result.titleTh} artwork`}
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeHtml(value: string) {
  return escapeXml(value).replace(/\n/g, '<br/>');
}
