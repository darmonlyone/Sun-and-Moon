'use client';

import html2canvas from 'html2canvas';
import { useMemo, useRef, useState } from 'react';
import { getCelestialArtDataUri } from './art';
import { introCopy, Lang, midwayQuote, preResultQuote, questions, resultOrder, results, ResultKey, resultShortDescriptions } from './data/quizData';

type Stage = 'intro' | 'quiz' | 'midway' | 'revealing' | 'result';

const COLOR_STEPS = [
  'from-[#0f1026] via-[#1b2452] to-[#281a3c]',
  'from-[#2b1b4d] via-[#3f2b75] to-[#204c7e]',
  'from-[#1f3a6e] via-[#2f5d8f] to-[#7e4d8e]',
  'from-[#6f2f7d] via-[#b84f72] to-[#f39a5b]',
  'from-[#2c5364] via-[#203a43] to-[#0f2027]',
];

const halfwayIndex = Math.floor(questions.length / 2);

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('th');
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
    <main className={`flex min-h-screen items-center bg-gradient-to-br ${bg} px-3 py-4 transition-all duration-700 sm:px-4 sm:py-8`}>
      <div className="mx-auto w-full max-w-5xl">
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
  const artSrc = getCelestialArtDataUri(resultKey);
  const resultCardRef = useRef<HTMLElement | null>(null);

  const handleExport = async () => {
    if (!resultCardRef.current) {
      return;
    }

    const card = resultCardRef.current;
    const hiddenNodes = Array.from(card.querySelectorAll('[data-export-hide="true"]')) as HTMLElement[];

    hiddenNodes.forEach((node) => {
      node.dataset.originalDisplay = node.style.display;
      node.style.display = 'none';
    });

    const images = Array.from(card.querySelectorAll('img'));
    await Promise.all(
      images.map(async (image) => {
        if (image.complete) {
          return;
        }

        try {
          await image.decode();
        } catch {
          // Export should continue even if an image cannot be decoded.
        }
      }),
    );

    try {
      const canvas = await html2canvas(card, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0f1026',
      });

      const link = document.createElement('a');
      link.download = `${result.titleEn.toLowerCase().replace(/\s+/g, '-')}-result.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      hiddenNodes.forEach((node) => {
        node.style.display = node.dataset.originalDisplay ?? '';
        delete node.dataset.originalDisplay;
      });
    }
  };

  return (
    <section
      ref={resultCardRef}
      className={`glow-card animate__animated animate__fadeInUp overflow-hidden bg-gradient-to-br p-0 ${result.palette} ${result.pattern}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="order-1 flex items-center justify-center bg-black/20 p-4 sm:p-6 lg:w-[44%]">
          <div className="result-export-shell flex w-full items-center justify-center rounded-[1.75rem] border border-white/20 bg-white/10 p-3 shadow-2xl">
            <img
              src={artSrc}
              alt={lang === 'en' ? `${result.titleEn} artwork` : `${result.titleTh} artwork`}
              className="h-full w-full rounded-[1.3rem] object-cover"
            />
          </div>
        </div>

        <div className="order-2 p-6 sm:p-8 lg:w-[56%]">
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

          <div className="mt-6 flex gap-3" data-export-hide="true">
            <button
              className="rounded-xl bg-yellow-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-yellow-200"
              onClick={handleExport}
              title={lang === 'en' ? 'Download result image' : 'ดาวน์โหลดรูปผลลัพธ์'}
              aria-label={lang === 'en' ? 'Download result image' : 'ดาวน์โหลดรูปผลลัพธ์'}
            >
              {lang === 'en' ? 'Download' : 'ดาวน์โหลด'}
            </button>
            <button
              className="rounded-xl bg-white/25 px-4 py-2 text-sm font-medium hover:bg-white/35"
              onClick={onRestart}
              title={lang === 'en' ? 'Try again' : 'ลองอีกครั้ง'}
              aria-label={lang === 'en' ? 'Try again' : 'ลองอีกครั้ง'}
            >
              {lang === 'en' ? 'Try again' : 'ลองอีกครั้ง'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
