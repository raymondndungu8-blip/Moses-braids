import React, { useState } from 'react';
import { ZoomIn, X, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, PortfolioCategory, PortfolioItem, View } from '../types';
import { DICTIONARY, PORTFOLIO_ITEMS } from '../data/content';
import { FannedGallery } from './FannedGallery';

interface PortfolioGridProps {
  lang: Language;
  onSelectView: (view: View) => void;
  onSelectServiceForBooking?: (category: PortfolioCategory) => void;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ lang, onSelectView, onSelectServiceForBooking }) => {
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
    <section className="py-28 bg-[#faf5ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {[
            <motion.span key="label" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">MOSES Lookbook</motion.span>,
            <motion.h2 key="h2" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="font-serif text-4xl sm:text-6xl font-normal text-[#3a302a] mb-4">{t.title}</motion.h2>,
            <motion.p key="p" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="text-[#605850] text-base font-light leading-relaxed">{t.subtitle}</motion.p>
          ]}
        </motion.div>

        {/* Scroll-driven fanned gallery */}
        <FannedGallery lang={lang} />

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
                  active ? 'text-white' : 'bg-[#f2ece4] text-[#605850] hover:bg-[#ece6dc] hover:text-[#3a302a]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {active && (
                  <motion.span
                    layoutId="pill-active"
                    className="absolute inset-0 rounded-full bg-[#c2652a]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid with layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 16 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
                className="group relative bg-[#f2ece4] rounded-2xl overflow-hidden shadow-sm border border-[#ece6dc] hover:border-[#c2652a]/40 transition-colors duration-400"
              >
                <div
                  data-cursor="view"
                  className="relative h-96 overflow-hidden bg-[#3a302a] cursor-pointer"
                  onClick={() => setActiveModalItem(item)}
                >
                  <motion.img
                    src={item.image}
                    alt={lang === 'de' ? item.titleDe : item.titleEn}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                  />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#3a302a]/92 via-[#3a302a]/40 to-transparent flex flex-col justify-end p-8"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.28 }}
                  >
                    <motion.div
                      initial={{ y: 16 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.28 }}
                    >
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
                    </motion.div>
                  </motion.div>

                  {/* Category tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-medium">
                    {lang === 'de' ? item.categoryLabelDe : item.categoryLabelEn}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveModalItem(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              key="modal-content"
              className="relative max-w-4xl w-full bg-[#faf5ee] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.35, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#3a302a] shadow-md"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="md:w-3/5 h-72 md:h-auto bg-[#3a302a] overflow-hidden">
                <motion.img
                  src={activeModalItem.image}
                  alt={lang === 'de' ? activeModalItem.titleDe : activeModalItem.titleEn}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease }}
                />
              </div>

              <motion.div
                className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease }}
              >
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
                <motion.button
                  onClick={() => {
                    const cat = activeModalItem.category;
                    setActiveModalItem(null);
                    onSelectView('services');
                    if (onSelectServiceForBooking) onSelectServiceForBooking(cat);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-4 rounded-full bg-[#c2652a] text-white font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ backgroundColor: '#3a302a', scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sparkles className="w-4 h-4" />
                  {lang === 'de' ? 'Diesen Stil anfragen' : 'Request This Look'}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
