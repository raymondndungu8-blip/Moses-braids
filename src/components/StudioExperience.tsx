import React from 'react';
import { Heart, Coffee, Wifi, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, IMAGES, TESTIMONIALS } from '../data/content';

interface StudioExperienceProps {
  lang: Language;
}

export const StudioExperience: React.FC<StudioExperienceProps> = ({ lang }) => {
  const t = DICTIONARY[lang].studio;
  const tTesti = DICTIONARY[lang].testimonials;

  return (
    <section className="py-24 bg-[#f2ece4] border-y border-[#ece6dc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c2652a]/10 text-[#c2652a] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>{t.tag}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3a302a] leading-tight">
              {t.title}
            </h2>

            <p className="text-[#605850] text-base leading-relaxed font-light">
              {t.desc1}
            </p>

            <p className="text-[#3a302a] font-medium text-sm border-l-2 border-[#c2652a] pl-4 italic">
              "{t.desc2}"
            </p>

            <div className="pt-4 space-y-3">
              {t.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#3a302a]">
                  <CheckCircle2 className="w-5 h-5 text-[#c2652a] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex items-center gap-6 text-[#78706a] text-xs font-semibold tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#c2652a]" />
                <span>Maroc Mint Tea</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-[#c2652a]" />
                <span>High-Speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#c2652a]" />
                <span>Scalp First</span>
              </div>
            </div>
          </div>

          {/* Right Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={IMAGES.studioInterior}
                alt="MOSES Salon Interior Steyr"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Floating Accent Card */}
            <div className="absolute -bottom-8 -left-6 z-20 bg-[#faf5ee] p-6 rounded-2xl shadow-xl border border-[#ece6dc] max-w-xs hidden sm:block">
              <div className="flex items-center gap-1 text-[#c2652a] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg font-semibold text-[#3a302a] mb-1">
                "Schmerzfrei ab Tag 1"
              </p>
              <p className="text-xs text-[#78706a]">
                Haratzmüllerstr. 19, 4400 Steyr
              </p>
            </div>
          </div>

        </div>

        {/* Testimonials Section */}
        <div className="pt-16 border-t border-[#ece6dc]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3a302a] mb-3">
              {tTesti.heading}
            </h3>
            <p className="text-sm text-[#78706a]">
              {tTesti.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-[#faf5ee] p-8 rounded-2xl border border-[#ece6dc] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#c2652a] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#3a302a] font-light leading-relaxed mb-6 italic">
                    "{lang === 'de' ? review.quoteDe : review.quoteEn}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#ece6dc] pt-4">
                  <div>
                    <span className="font-semibold text-sm text-[#3a302a] block">
                      {review.name}
                    </span>
                    <span className="text-[11px] text-[#78706a] block">
                      {lang === 'de' ? review.roleDe : review.roleEn}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 bg-[#ece6dc] rounded text-[#605850]">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
