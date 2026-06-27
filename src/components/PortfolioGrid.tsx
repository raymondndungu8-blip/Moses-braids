import React, { useState } from 'react';
import { ZoomIn, X, Clock, Sparkles } from 'lucide-react';
import { Language, PortfolioCategory, PortfolioItem, View } from '../types';
import { DICTIONARY, PORTFOLIO_ITEMS } from '../data/content';

interface PortfolioGridProps {
  lang: Language;
  onSelectView: (view: View) => void;
  onSelectServiceForBooking?: (category: PortfolioCategory) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  lang,
  onSelectView,
  onSelectServiceForBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const t = DICTIONARY[lang].portfolio;

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'knotless', label: t.filterKnotless },
    { id: 'cornrows', label: t.filterCornrows },
    { id: 'boxbraids', label: t.filterBox },
    { id: 'artistic', label: t.filterArtistic }
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-24 bg-[#faf5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">
            MOSES Lookbook
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#3a302a] mb-4">
            {t.title}
          </h2>
          <p className="text-[#605850] text-base font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  active
                    ? 'bg-[#c2652a] text-white shadow-md'
                    : 'bg-[#f2ece4] text-[#605850] hover:bg-[#ece6dc] hover:text-[#3a302a]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#f2ece4] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#ece6dc]"
            >
              <div className="relative h-96 overflow-hidden bg-[#3a302a] cursor-pointer" onClick={() => setActiveModalItem(item)}>
                <img
                  src={item.image}
                  alt={lang === 'de' ? item.titleDe : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a302a]/90 via-[#3a302a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-widest text-[#f0a878] font-bold block mb-1">
                      {lang === 'de' ? item.categoryLabelDe : item.categoryLabelEn}
                    </span>
                    <h3 className="font-serif text-2xl text-white font-normal mb-2">
                      {lang === 'de' ? item.titleDe : item.titleEn}
                    </h3>
                    <p className="text-xs text-[#eae2da] line-clamp-2 mb-4 font-light">
                      {lang === 'de' ? item.descriptionDe : item.descriptionEn}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-[#fbe8d8] font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#e08850]" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1 text-[#e08850]">
                        <ZoomIn className="w-3.5 h-3.5" />
                        {t.zoomPrompt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Always visible category tag top right */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-medium">
                  {lang === 'de' ? item.categoryLabelDe : item.categoryLabelEn}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#faf5ee] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#3a302a] shadow-md transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 h-72 md:h-auto bg-[#3a302a]">
              <img
                src={activeModalItem.image}
                alt={lang === 'de' ? activeModalItem.titleDe : activeModalItem.titleEn}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c2652a] font-bold block mb-2">
                  {lang === 'de' ? activeModalItem.categoryLabelDe : activeModalItem.categoryLabelEn}
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#3a302a] mb-4">
                  {lang === 'de' ? activeModalItem.titleDe : activeModalItem.titleEn}
                </h3>
                <p className="text-sm text-[#605850] font-light leading-relaxed mb-6">
                  {lang === 'de' ? activeModalItem.descriptionDe : activeModalItem.descriptionEn}
                </p>

                <div className="p-4 rounded-xl bg-[#f2ece4] border border-[#ece6dc] space-y-2 mb-8">
                  <div className="flex items-center justify-between text-xs text-[#3a302a]">
                    <span className="text-[#78706a]">{lang === 'de' ? 'Geschätzte Dauer:' : 'Estimated Duration:'}</span>
                    <span className="font-bold font-mono">{activeModalItem.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#3a302a]">
                    <span className="text-[#78706a]">{lang === 'de' ? 'Kanekalon Haar:' : 'Kanekalon Hair:'}</span>
                    <span className="font-bold text-[#c2652a]">{lang === 'de' ? 'Inklusive' : 'Included'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const cat = activeModalItem.category;
                  setActiveModalItem(null);
                  onSelectView('services');
                  if (onSelectServiceForBooking) {
                    onSelectServiceForBooking(cat);
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 rounded-full bg-[#c2652a] hover:bg-[#3a302a] text-white font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'de' ? 'Diesen Stil anfragen' : 'Request This Look'}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
