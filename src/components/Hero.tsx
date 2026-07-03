import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, View } from '../types';
import { DICTIONARY } from '../data/content';
import { InfiniteSlider } from './ui/infinite-slider';

// Salon photos served from /public/hero — scrolled by the infinite slider
const HERO_IMAGES = [
  '/hero/hero-red-portrait.jpg',
  '/hero/hero-red-ombre.jpg',
  '/hero/hero-cornrows-top.jpg',
  '/hero/hero-bun-lady.jpg',
];

const ease = [0.25, 0.1, 0.25, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } }
};

const WHATSAPP_URL = 'https://wa.me/4367799015819';

interface HeroProps {
  lang: Language;
  onSelectView: (view: View) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onSelectView }) => {
  const t = DICTIONARY[lang].hero;

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#332a24] text-white">
      {/* ── Right-side scrolling photo columns (desktop) — 21st.dev infinite slider ── */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[46%] z-0 gap-4 px-4" aria-hidden="true">
        <InfiniteSlider direction="vertical" duration={42} gap={16} className="h-full flex-1">
          {HERO_IMAGES.map((src) => (
            <img key={src} src={src} alt="" loading="eager" className="w-full aspect-[3/4] object-cover rounded-2xl" />
          ))}
        </InfiniteSlider>
        <InfiniteSlider direction="vertical" reverse duration={52} gap={16} className="h-full flex-1">
          {[...HERO_IMAGES].reverse().map((src) => (
            <img key={src} src={src} alt="" loading="eager" className="w-full aspect-[3/4] object-cover rounded-2xl" />
          ))}
        </InfiniteSlider>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #332a24 0%, rgba(51,42,36,0.25) 30%, transparent 55%), linear-gradient(to bottom, #332a24 0%, transparent 14%, transparent 86%, #332a24 100%)',
          }}
        />
      </div>

      {/* ── Mobile scrolling photo background ── */}
      <div className="lg:hidden absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <InfiniteSlider direction="vertical" duration={70} gap={0} className="h-full w-full">
          {HERO_IMAGES.map((src) => (
            <img key={src} src={src} alt="" loading="eager" className="w-full object-cover" style={{ height: '60vh' }} />
          ))}
        </InfiniteSlider>
        <div className="absolute inset-0 bg-[#2a221c]/85" />
      </div>

      {/* ── Decorative braid-strand line art ── */}
      <svg
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path d="M-40 620 C 260 480, 420 760, 760 600 S 1240 420, 1500 560" stroke="#e08850" strokeOpacity="0.07" strokeWidth="1.5" />
        <path d="M-40 520 C 300 400, 520 680, 880 520 S 1300 340, 1520 460" stroke="#faf5ee" strokeOpacity="0.05" strokeWidth="1.5" />
        <path d="M200 -40 C 120 220, 360 340, 300 620" stroke="#faf5ee" strokeOpacity="0.04" strokeWidth="1.5" />
      </svg>

      {/* ── Faint vertical watermark (like the Flourish "HAIR SALON" edge text) ── */}
      <span
        className="hidden lg:block absolute left-2 top-1/2 -translate-y-1/2 font-serif uppercase select-none z-[1] text-white/[0.05] leading-none"
        style={{ writingMode: 'vertical-rl', fontSize: '9rem', letterSpacing: '0.08em' }}
        aria-hidden="true"
      >
        Braids
      </span>

      {/* ── Content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <motion.div
          className="max-w-2xl flex flex-col items-start text-left"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Small salon label */}
          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#f0a878] mb-4"
          >
            {t.tagline}
          </motion.p>

          {/* Big editorial serif headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-7xl xl:text-8xl font-normal tracking-tight text-[#faf5ee] mb-7 leading-[1.06]"
          >
            {t.title1}
            <span className="block italic font-light text-[#e08850]">{t.title2}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base sm:text-lg text-[#d8d0c8] font-light leading-relaxed mb-10"
          >
            {t.desc}
          </motion.p>

          {/* CTA buttons — cream pill like the reference's "Explore Services ↗" */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <motion.button
              onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener')}
              className="px-8 py-4 rounded-full bg-[#faf5ee] text-[#3a302a] font-semibold tracking-wider uppercase text-xs flex items-center justify-center gap-2 shadow-xl"
              whileHover={{ backgroundColor: '#c2652a', color: '#ffffff', y: -2, boxShadow: '0 12px 32px rgba(194,101,42,0.45)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <span>{t.ctaBook}</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => onSelectView('portfolio')}
              className="px-8 py-4 rounded-full bg-transparent text-[#faf5ee] border border-white/25 font-semibold tracking-wider uppercase text-xs flex items-center justify-center gap-2"
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

          {/* Trust stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-7 border-t border-white/10 flex flex-wrap gap-8 sm:gap-14 text-[#d8d0c8]"
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
      </div>

      {/* ── Rotating circular badge on the text/photo seam ── */}
      <motion.div
        className="hidden md:flex absolute bottom-20 right-8 lg:right-[43%] z-30 w-28 h-28 xl:w-32 xl:h-32 items-center justify-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
          <defs>
            <path id="hero-badge-circle" d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" />
          </defs>
          <text fill="#fbe8d8" style={{ fontSize: '8.2px', letterSpacing: '2.4px', textTransform: 'uppercase', fontWeight: 600 }}>
            <textPath href="#hero-badge-circle">Moses Braids • Flechtkunst • 4400 Steyr •</textPath>
          </text>
        </svg>
        <span className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#c2652a] flex items-center justify-center font-serif text-xl xl:text-2xl text-white shadow-lg">
          M
        </span>
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
