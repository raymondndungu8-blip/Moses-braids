import React from 'react';
import { motion } from 'motion/react';
import { Language, PortfolioCategory, View } from '../types';
import { DICTIONARY } from '../data/content';
import { FannedGallery } from './FannedGallery';

interface PortfolioGridProps {
  lang: Language;
  onSelectView: (view: View) => void;
  onSelectServiceForBooking?: (category: PortfolioCategory) => void;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ lang }) => {
  const t = DICTIONARY[lang].portfolio;

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

        {/* GSAP card-fan carousel — the full portfolio, paginated like the
            21st.dev card-fan-carousel demo (arrows + dot pagination). */}
        <FannedGallery lang={lang} />

      </div>
    </section>
  );
};
