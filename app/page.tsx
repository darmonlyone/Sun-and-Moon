'use client';

import { useMemo, useState } from 'react';
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
  const [lang, setLang] = useState<Lang>('en');
  const [stage, setStage] = useState<Stage>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [animating, setAnimating] = useState(false);

  const progress = ((current + 1) / questions.length) * 100;
  const bg = COLOR_STEPS[Math.floor(current / 3) % COLOR_STEPS.length];

  const resultKey = useMemo<ResultKey>(() => {
    const score: Record<ResultKey, number> = Object.fromEntries(resultOrder.map((k) => [k, 0])) as Record<ResultKey, number>;

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
        setCurrent((v) => v + 1);
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
    <main className={`min-h-screen bg-gradient-to-br ${bg} px-4 py-10 transition-all duration-700`}>
      <div className="mx-auto max-w-3xl">
        {stage === 'intro' && (
          <section className="glow-card animate__animated animate__fadeIn p-8 text-center">
            <h1 className="mb-4 text-4xl font-bold">{intro.title}</h1>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-white/90">{intro.subtitle}</p>
            <p className="mb-8 text-sm text-yellow-100">{intro.note}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                className="rounded-2xl bg-white/20 px-6 py-3 font-semibold hover:bg-white/30"
                onClick={() => setLang((l) => (l === 'en' ? 'th' : 'en'))}
              >
                {intro.language}
              </button>
              <button
                className="rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-slate-900 hover:bg-yellow-200"
                onClick={() => setStage('quiz')}
              >
                {intro.start}
              </button>
            </div>
          </section>
        )}

        {stage === 'quiz' && (
          <section className="glow-card animate__animated animate__fadeIn p-6 sm:p-8">
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

            <h2 className="mb-6 text-2xl font-semibold">{lang === 'en' ? questions[current].textEn : questions[current].textTh}</h2>

            <div className="grid gap-3">
              {questions[current].answers.map((answer, i) => {
                const selected = answers[current] === i;
                return (
                  <button
                    key={`${questions[current].id}-${i}`}
                    className={`answer-btn ${selected ? 'answer-btn-selected' : ''} ${
                      animating && selected ? 'animate__animated animate__pulse' : ''
                    }`}
                    onClick={() => selectAnswer(i)}
                  >
                    {lang === 'en' ? answer.textEn : answer.textTh}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {stage === 'midway' && (
          <section className="glow-card animate__animated animate__zoomIn p-10 text-center">
            <p className="mb-6 text-2xl italic text-yellow-100">“{lang === 'en' ? midwayQuote.en : midwayQuote.th}”</p>
            <button
              className="rounded-2xl bg-white/20 px-6 py-3 font-semibold hover:bg-white/30"
              onClick={() => {
                setStage('quiz');
                setCurrent((v) => v + 1);
              }}
            >
              {lang === 'en' ? 'Continue' : 'ไปต่อ'}
            </button>
          </section>
        )}

        {stage === 'revealing' && (
          <section className="glow-card animate__animated animate__fadeIn p-12 text-center">
            <p className="mb-4 text-2xl font-semibold text-yellow-100">{lang === 'en' ? preResultQuote.en : preResultQuote.th}</p>
            <div className="mx-auto mt-8 h-20 w-20 animate-spin rounded-full border-4 border-white/30 border-t-yellow-300" />
            <p className="mt-5 text-white/80">{lang === 'en' ? 'Reading your cosmic aura...' : 'กำลังอ่านออร่าจักรวาลของคุณ...'}</p>
          </section>
        )}

        {stage === 'result' && (
          <ResultCard lang={lang} resultKey={resultKey} onRestart={restart} />
        )}
      </div>
    </main>
  );
}

function ResultCard({ lang, resultKey, onRestart }: { lang: Lang; resultKey: ResultKey; onRestart: () => void }) {
  const result = results[resultKey];
  const shortDescription = resultShortDescriptions[resultKey];

  return (
    <section
      className={`glow-card animate__animated animate__fadeInUp overflow-hidden bg-gradient-to-br p-0 ${result.palette} ${result.pattern}`}
    >
      <div className="grid gap-0 md:grid-cols-[2fr,1fr]">
        <div className="p-8">
          <p className="mb-2 text-sm uppercase tracking-[0.18em] text-yellow-100">{lang === 'en' ? 'Your Cosmic Type' : 'พลังจักรวาลของคุณ'}</p>
          <h2 className="mb-3 text-4xl font-extrabold">{lang === 'en' ? result.titleEn : result.titleTh}</h2>
          <p className="mb-3 text-xs leading-relaxed text-white/80">{lang === 'en' ? shortDescription.en : shortDescription.th}</p>
          <p className="mb-5 text-white/90">{lang === 'en' ? result.personalityEn : result.personalityTh}</p>

          <div className="rounded-2xl bg-black/20 p-4 text-sm text-white/90">
            <p className="mb-1 font-semibold">{lang === 'en' ? 'Meaning of this Moon/Sun' : 'ความหมายของพระจันทร์/พระอาทิตย์นี้'}</p>
            <p>{lang === 'en' ? result.meaningEn : result.meaningTh}</p>
          </div>

          <button
            className="mt-6 rounded-2xl bg-white/25 px-6 py-3 font-semibold hover:bg-white/35"
            onClick={onRestart}
          >
            {lang === 'en' ? 'Try Again' : 'ลองอีกครั้ง'}
          </button>
        </div>

        <div className="flex items-center justify-center bg-black/20 p-8">
          <div className="flex h-64 w-full items-center justify-center rounded-3xl border-2 border-dashed border-white/40 bg-white/5 text-center text-sm text-white/75">
            {lang === 'en' ? 'Your Moon/Sun drawing slot' : 'พื้นที่วางภาพวาดพระจันทร์/พระอาทิตย์ของคุณ'}
          </div>
        </div>
      </div>
    </section>
  );
}
