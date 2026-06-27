import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Language, View } from '../types';
import { DICTIONARY, IMAGES } from '../data/content';

interface HeroProps {
  lang: Language;
  onSelectView: (view: View) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onSelectView, onOpenBooking }) => {
  const t = DICTIONARY[lang].hero;

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#3a302a] text-white">
      {/* Full width background image with subtle warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroPortrait}
          alt="MOSES Steyr Salon Model"
          className="w-full h-full object-cover object-center scale-105 animate-pulse"
          style={{ animationDuration: '15s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a120c]/85 via-[#3a302a]/65 to-[#1a120c]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#c2652a_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs uppercase tracking-widest text-[#fbe8d8] mb-8 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#e08850]" />
          <span>{t.addressBadge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e08850] animate-ping" />
        </div>

        {/* Elegant Title in EB Garamond */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#faf5ee] mb-6 leading-[1.05]">
          {t.title1}{' '}
          <span className="italic font-light text-[#e08850] block sm:inline">
            {t.title2}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] font-semibold text-[#f0a878] mb-6">
          {t.tagline}
        </p>

        {/* Short Sub-headline */}
        <p className="max-w-2xl text-base sm:text-lg text-[#eae2da] font-light leading-relaxed mb-10 opacity-95">
          {t.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              onSelectView('services');
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c2652a] hover:bg-[#e08850] text-white font-semibold tracking-wider uppercase text-xs transition-all shadow-xl hover:shadow-[#c2652a]/40 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#fbe8d8]" />
            <span>{t.ctaBook}</span>
          </button>

          <button
            onClick={() => onSelectView('portfolio')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-[#faf5ee] border border-white/30 font-semibold tracking-wider uppercase text-xs transition-all flex items-center justify-center gap-2"
          >
            <span>{t.ctaPortfolio}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust Badges bottom */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-12 text-[#d8d0c8] max-w-3xl">
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-white block">100%</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9a9088]">Kanekalon Hair</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#e08850] block">4.9 ★</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9a9088]">Google Reviews</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-white block">Steyr</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9a9088]">Haratzmüllerstr. 19</span>
          </div>
        </div>

      </div>

      {/* Marquee Banner along bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#c2652a] text-white py-2.5 overflow-hidden z-20 border-t border-[#e08850]">
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
