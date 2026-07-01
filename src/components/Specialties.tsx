import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Feather } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, View } from '../types';
import { DICTIONARY, IMAGES } from '../data/content';

interface SpecialtiesProps {
  lang: Language;
  onSelectView: (view: View) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }
  })
};

export const Specialties: React.FC<SpecialtiesProps> = ({ lang, onSelectView }) => {
  const t = DICTIONARY[lang].specialties;

  const items = [
    { title: t.knotlessTitle, desc: t.knotlessDesc, img: IMAGES.knotlessSpec, badge: lang === 'de' ? 'Höchster Tragekomfort' : 'Ultra Comfortable', icon: Feather },
    { title: t.cornrowsTitle, desc: t.cornrowsDesc, img: IMAGES.cornrowsSpec, badge: lang === 'de' ? 'Präzisions-Muster' : 'Symmetrical Art', icon: Sparkles },
    { title: t.passionTitle, desc: t.passionDesc, img: IMAGES.passionTwistsSpec, badge: lang === 'de' ? 'Boho & Seidig' : 'Boho Chic', icon: ShieldCheck }
  ];

  return (
    <section className="py-28 bg-[#faf5ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">
            MOSES
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-5xl font-normal text-[#3a302a] mb-6">
            {t.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#605850] text-base sm:text-lg font-light leading-relaxed">
            {t.subheading}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
                onClick={() => { onSelectView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group relative bg-[#f2ece4] rounded-2xl overflow-hidden border border-[#ece6dc] hover:border-[#c2652a] transition-colors duration-400 shadow-sm hover:shadow-2xl cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-[#3a302a]">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a302a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-400" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#faf5ee]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#3a302a]">
                    <Icon className="w-3 h-3 text-[#c2652a]" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-white/60">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-2xl font-semibold text-[#3a302a] group-hover:text-[#c2652a] transition-colors">
                        {item.title}
                      </h3>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-[#faf5ee] flex items-center justify-center text-[#3a302a] group-hover:bg-[#c2652a] group-hover:text-white transition-colors"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-[#605850] font-light leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-[#ece6dc] flex items-center justify-between text-xs font-semibold text-[#c2652a] tracking-wider uppercase">
                    <span>{lang === 'de' ? 'Termin konfigurieren' : 'Configure Style'}</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.button
            onClick={() => { onSelectView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#3a302a] text-[#3a302a] text-xs font-bold tracking-widest uppercase overflow-hidden relative"
            whileHover={{ backgroundColor: '#3a302a', color: '#faf5ee', scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            {t.exploreAll}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
