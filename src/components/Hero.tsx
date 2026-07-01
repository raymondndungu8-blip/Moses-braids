import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, View } from '../types';
import { DICTIONARY } from '../data/content';

const ease = [0.25, 0.1, 0.25, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.4 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } }
};

interface HeroProps {
  lang: Language;
  onSelectView: (view: View) => void;
  onOpenBooking: () => void;
}

const GD = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const HERO_SLIDES = [
  { url: GD('1C4EBkij6GCiIse6rIGzp7q1SoYQhY4V1'), kbClass: 'hero-kb-1', pos: 'center 20%' },
  { url: GD('14AJRD1t2MywmoBvOPTKobhPUBInp0EVU'), kbClass: 'hero-kb-2', pos: 'center 25%' },
  { url: GD('1lMmZHXCYkMhgKiR2bN60Cciq53fB3iPI'), kbClass: 'hero-kb-3', pos: 'center 30%' },
];

const SLIDE_DURATION = 6000;
const FADE_DURATION = 1500;

export const Hero: React.FC<HeroProps> = ({ lang, onSelectView, onOpenBooking }) => {
  const t = DICTIONARY[lang].hero;
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [next, setNext] = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (fading || index === active) return;
      setNext(index);
      setFading(true);
      setTimeout(() => {
        setActive(index);
        setNext(null);
        setFading(false);
      }, FADE_DURATION);
    },
    [active, fading]
  );

  useEffect(() => {
    const id = setInterval(() => {
      goTo((active + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [active, goTo]);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#3a302a] text-white">
      {/* ── Cinematic Ken Burns Slideshow ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {HERO_SLIDES.map((slide, i) => {
          const isActive = i === active;
          const isNext = i === next;
          return (
            <div
              key={slide.url}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : isNext ? 1 : 0,
                zIndex: isNext ? 1 : isActive ? 2 : 0,
                transition: isActive && fading ? `opacity ${FADE_DURATION}ms ease-in-out` : 'none',
                pointerEvents: 'none',
              }}
            >
              <img
                src={slide.url}
                alt=""
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover ${slide.kbClass}`}
                style={{ objectPosition: slide.pos }}
              />
            </div>
          );
        })}

        {/* Warm cinematic gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(26,18,12,0.88) 0%, rgba(58,48,42,0.55) 45%, rgba(26,18,12,0.80) 100%)',
            zIndex: 10,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(26,18,12,0.65) 0%, transparent 50%, rgba(26,18,12,0.18) 100%)',
            zIndex: 10,
          }}
        />
        {/* subtle grain texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#c2652a 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.08,
            zIndex: 11,
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Location badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs uppercase tracking-widest text-[#fbe8d8] mb-8 shadow-lg"
        >
          <MapPin className="w-3.5 h-3.5 text-[#e08850]" />
          <span>{t.addressBadge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e08850] animate-ping" />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#faf5ee] mb-6 leading-[1.05]"
        >
          {t.title1}{' '}
          <span className="italic font-light text-[#e08850] block sm:inline">
            {t.title2}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] font-semibold text-[#f0a878] mb-6">
          {t.tagline}
        </motion.p>

        {/* Sub-headline */}
        <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-[#eae2da] font-light leading-relaxed mb-10 opacity-95">
          {t.desc}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.button
            onClick={() => { onSelectView('services'); onOpenBooking(); }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c2652a] text-white font-semibold tracking-wider uppercase text-xs shadow-xl flex items-center justify-center gap-3"
            whileHover={{ backgroundColor: '#e08850', y: -2, boxShadow: '0 12px 32px rgba(194,101,42,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#fbe8d8]" />
            <span>{t.ctaBook}</span>
          </motion.button>

          <motion.button
            onClick={() => onSelectView('portfolio')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-[#faf5ee] border border-white/30 font-semibold tracking-wider uppercase text-xs flex items-center justify-center gap-2"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.10)', y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <span>{t.ctaPortfolio}</span>
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Slide indicators */}
        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-2.5" role="tablist" aria-label="Hero slides">
          {HERO_SLIDES.map((_, i) => (
            <motion.button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full"
              animate={{
                width: i === active ? 24 : 6,
                height: 6,
                backgroundColor: i === active ? '#e08850' : 'rgba(255,255,255,0.35)',
              }}
              transition={{ duration: 0.4, ease }}
              whileHover={{ backgroundColor: i === active ? '#e08850' : 'rgba(255,255,255,0.6)' }}
            />
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-12 text-[#d8d0c8] max-w-3xl w-full"
        >
          {[
            { value: '100%', label: 'Kanekalon Hair', color: 'text-white' },
            { value: '4.9 ★', label: 'Google Reviews', color: 'text-[#e08850]' },
            { value: 'Steyr', label: 'Haratzmüllerstr. 19', color: 'text-white' }
          ].map(({ value, label, color }) => (
            <div key={label}>
              <span className={`font-serif text-2xl sm:text-3xl block ${color}`}>{value}</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9a9088]">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#c2652a] text-white py-2.5 overflow-hidden z-30 border-t border-[#e08850]">
        <div className="animate-marquee whitespace-nowrap flex items-center text-xs font-semibold tracking-widest uppercase">
          {DICTIONARY[lang].marquee.concat(DICTIONARY[lang].marquee).map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
