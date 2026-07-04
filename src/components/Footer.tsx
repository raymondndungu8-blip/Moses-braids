import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, View } from '../types';
import { DICTIONARY, IMAGES } from '../data/content';
import { TextHoverEffect } from './ui/text-hover-effect';

// Footer redesign:
// - Look: Dribbble ÉCRIN footer (grounded split layout — link columns left,
//   brand photo panel right, oversized wordmark anchoring the bottom)
// - Motion: 21st.dev @aceternity/text-hover-effect on the giant MOSES
//   wordmark + staggered reveals

interface FooterProps {
  lang: Language;
  onSelectView: (view: View) => void;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

const STYLES = [
  'Knotless Braids',
  'Design Cornrows',
  'Box Braids',
  'Passion Twists',
  'Fulani Braids',
  'Artistic Styles',
];

export const Footer: React.FC<FooterProps> = ({ lang, onSelectView }) => {
  const t = DICTIONARY[lang].footer;
  const navT = DICTIONARY[lang].nav;

  const go = (view: View) => {
    onSelectView(view);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="bg-[#332a24] text-[#faf5ee] border-t border-[#605850]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Split: link columns left, photo panel right (ÉCRIN layout) ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Brand + contact */}
          <motion.div className="lg:col-span-2 space-y-5" variants={fadeUp}>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-9 h-9 rounded-full bg-[#c2652a] text-white flex items-center justify-center font-serif text-lg font-bold"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                M
              </motion.div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">MOSES</span>
            </div>
            <p className="text-sm text-[#d8d0c8] font-light max-w-sm leading-relaxed">{t.tagline}</p>
            <div className="space-y-2.5 text-xs text-[#d8d0c8] pt-1">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#e08850] shrink-0" />
                <span>Haratzmüllerstr. 19, 4400 Steyr</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e08850] shrink-0" />
                <a href="tel:+4367799015819" className="hover:text-white transition-colors">+43 677 99015819</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e08850] shrink-0" />
                <span>{lang === 'de' ? 'Di – Sa: 10:00 – 19:00' : 'Tue – Sat: 10:00 – 19:00'}</span>
              </div>
            </div>
            <motion.button
              onClick={() => go('services')}
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full bg-[#faf5ee] text-[#3a302a] text-xs uppercase tracking-wider font-semibold hover:bg-[#c2652a] hover:text-white transition-colors"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              {navT.bookNow}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="font-serif text-lg text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#d8d0c8]">
              {(['home', 'portfolio', 'services'] as View[]).map((view) => (
                <li key={view}>
                  <motion.button
                    onClick={() => go(view)}
                    className="group relative hover:text-[#e08850] transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {navT[view as keyof typeof navT] as string}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#e08850] transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Styles / categories */}
          <motion.div variants={fadeUp}>
            <h4 className="font-serif text-lg text-white mb-4">{lang === 'de' ? 'Unsere Stile' : 'Our Styles'}</h4>
            <ul className="space-y-2.5 text-xs text-[#d8d0c8]">
              {STYLES.map((style) => (
                <li key={style}>
                  <motion.button
                    onClick={() => go('portfolio')}
                    className="group relative hover:text-[#e08850] transition-colors text-left"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {style}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#e08850] transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Photo panel (like ÉCRIN's brand photo) */}
          <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden min-h-[220px] border border-white/10">
            <img
              src={IMAGES.studioInterior}
              alt="Moses Braids Studio"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1813]/85 via-[#1f1813]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="block font-serif text-lg text-white leading-tight">
                {lang === 'de' ? 'Handgefertigt in Steyr' : 'Handcrafted in Steyr'}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#f0a878]">
                {lang === 'de' ? 'Seit Herzenssache' : 'A labour of love'}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9a9088] gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>{t.rights}</p>
          <div className="flex items-center gap-6">
            {[t.imprint, t.privacy, t.terms].map((label) => (
              <motion.button key={label} className="hover:text-white transition-colors" whileHover={{ y: -1 }}>
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Grounded giant wordmark — outlined, fills with Sahara on hover ── */}
      <div className="relative w-full h-[16vw] max-h-44 min-h-20 -mb-[2.5vw]" aria-hidden="true">
        <TextHoverEffect text="MOSES" />
      </div>
    </footer>
  );
};
