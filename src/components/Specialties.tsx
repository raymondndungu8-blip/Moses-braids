import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Feather } from 'lucide-react';
import { Language, View } from '../types';
import { DICTIONARY, IMAGES } from '../data/content';

interface SpecialtiesProps {
  lang: Language;
  onSelectView: (view: View) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ lang, onSelectView }) => {
  const t = DICTIONARY[lang].specialties;

  const items = [
    {
      title: t.knotlessTitle,
      desc: t.knotlessDesc,
      img: IMAGES.knotlessSpec,
      badge: lang === 'de' ? 'Höchster Tragekomfort' : 'Ultra Comfortable',
      icon: Feather
    },
    {
      title: t.cornrowsTitle,
      desc: t.cornrowsDesc,
      img: IMAGES.cornrowsSpec,
      badge: lang === 'de' ? 'Präzisions-Muster' : 'Symmetrical Art',
      icon: Sparkles
    },
    {
      title: t.passionTitle,
      desc: t.passionDesc,
      img: IMAGES.passionTwistsSpec,
      badge: lang === 'de' ? 'Boho & Seidig' : 'Boho Chic',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-[#faf5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">
            MOSES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3a302a] mb-6">
            {t.heading}
          </h2>
          <p className="text-[#605850] text-base sm:text-lg font-light leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Specialties Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelectView('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-[#f2ece4] rounded-2xl overflow-hidden border border-[#ece6dc] hover:border-[#c2652a] transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-xl cursor-pointer flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-72 overflow-hidden bg-[#3a302a]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a302a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#faf5ee]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#3a302a]">
                    <Icon className="w-3 h-3 text-[#c2652a]" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Card Text */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-white/60">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-2xl font-semibold text-[#3a302a] group-hover:text-[#c2652a] transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-[#faf5ee] flex items-center justify-center text-[#3a302a] group-hover:bg-[#c2652a] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm text-[#605850] font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#ece6dc] flex items-center justify-between text-xs font-semibold text-[#c2652a] tracking-wider uppercase">
                    <span>{lang === 'de' ? 'Termin konfigurieren' : 'Configure Style'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              onSelectView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#3a302a] text-[#3a302a] text-xs font-bold tracking-widest uppercase hover:bg-[#3a302a] hover:text-white transition-all"
          >
            <span>{t.exploreAll}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
