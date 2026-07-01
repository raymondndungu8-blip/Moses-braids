import React from 'react';
import { Heart, Coffee, Wifi, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { DICTIONARY, IMAGES, TESTIMONIALS } from '../data/content';

interface StudioExperienceProps {
  lang: Language;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export const StudioExperience: React.FC<StudioExperienceProps> = ({ lang }) => {
  const t = DICTIONARY[lang].studio;
  const tTesti = DICTIONARY[lang].testimonials;

  return (
    <section className="py-28 bg-[#f2ece4] border-y border-[#ece6dc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">

          {/* Left Text */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c2652a]/10 text-[#c2652a] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>{t.tag}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3a302a] leading-tight">{t.title}</h2>
            <p className="text-[#605850] text-base leading-relaxed font-light">{t.desc1}</p>
            <p className="text-[#3a302a] font-medium text-sm border-l-2 border-[#c2652a] pl-4 italic">"{t.desc2}"</p>

            <motion.div
              className="pt-4 space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
              {t.features.map((feat, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } }
                  }}
                  className="flex items-start gap-3 text-sm text-[#3a302a]"
                >
                  <motion.div whileInView={{ scale: [0.5, 1.2, 1] }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                    <CheckCircle2 className="w-5 h-5 text-[#c2652a] flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span>{feat}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-6 flex items-center gap-6 text-[#78706a] text-xs font-semibold tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Coffee, label: 'Maroc Mint Tea' },
                { icon: Wifi, label: 'High-Speed Wi-Fi' },
                { icon: Heart, label: 'Scalp First' }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#c2652a]" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={IMAGES.studioInterior}
                alt="MOSES Salon Interior Steyr"
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

            {/* Floating review card */}
            <motion.div
              className="absolute -bottom-8 -left-6 z-20 bg-[#faf5ee] p-6 rounded-2xl shadow-xl border border-[#ece6dc] max-w-xs hidden sm:block"
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              animate={{ y: [0, -6, 0] }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-1 text-[#c2652a] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.3, type: 'spring', stiffness: 400 }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="font-serif text-lg font-semibold text-[#3a302a] mb-1">"Schmerzfrei ab Tag 1"</p>
                <p className="text-xs text-[#78706a]">Haratzmüllerstr. 19, 4400 Steyr</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="pt-16 border-t border-[#ece6dc]">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3a302a] mb-3">{tTesti.heading}</h3>
            <p className="text-sm text-[#78706a]">{tTesti.subheading}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {TESTIMONIALS.map((review) => (
              <motion.div
                key={review.id}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } }
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(58,48,42,0.12)' }}
                transition={{ duration: 0.3 }}
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
                    <span className="font-semibold text-sm text-[#3a302a] block">{review.name}</span>
                    <span className="text-[11px] text-[#78706a] block">{lang === 'de' ? review.roleDe : review.roleEn}</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 bg-[#ece6dc] rounded text-[#605850]">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
