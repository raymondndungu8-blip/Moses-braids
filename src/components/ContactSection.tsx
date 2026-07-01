import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { DICTIONARY, IMAGES } from '../data/content';

interface ContactSectionProps {
  lang: Language;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = DICTIONARY[lang].contactPage;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: lang === 'de' ? 'Allgemeine Anfrage' : 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#f2ece4] border-t border-[#ece6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">
            MOSES STEYR
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-6xl font-normal text-[#3a302a] mb-4">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#605850] text-base font-light leading-relaxed">
            {t.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-[#faf5ee] rounded-3xl p-8 border border-[#ece6dc] shadow-sm space-y-6">

              {[
                { icon: MapPin, header: t.studioHeader, text: t.address },
                { icon: Clock, header: t.hoursHeader, text: t.hoursText },
              ].map(({ icon: Icon, header, text }, i) => (
                <motion.div
                  key={header}
                  className={`flex items-start gap-4 ${i > 0 ? 'pt-4 border-t border-[#ece6dc]' : ''}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#fbe8d8] flex items-center justify-center text-[#c2652a] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#3a302a] mb-1">{header}</h3>
                    <p className="text-xs text-[#605850] whitespace-pre-line leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="flex items-start gap-4 pt-4 border-t border-[#ece6dc]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#fbe8d8] flex items-center justify-center text-[#c2652a] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#3a302a] mb-1">{t.contactInfoHeader}</h3>
                  <a href="tel:67799015819" className="hover:text-[#c2652a] block mb-1 font-medium text-base text-[#c2652a]">
                    Tel. 67799015819
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="rounded-3xl overflow-hidden h-64 border border-[#ece6dc] relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={IMAGES.contactAtmosphere}
                alt="Salon Atmosphere Steyr"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                  <p className="font-serif text-base font-bold text-[#3a302a]">Haratzmüllerstr. 19</p>
                  <p className="text-[11px] text-[#605850]">4400 Steyr, Österreich</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="lg:col-span-7 bg-[#faf5ee] rounded-3xl p-8 md:p-12 border border-[#ece6dc] shadow-sm"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="font-serif text-3xl font-normal text-[#3a302a] mb-8">{t.formHeader}</h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-16 text-center space-y-4"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#c2652a] text-white flex items-center justify-center mx-auto shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h4 className="font-serif text-2xl font-semibold text-[#3a302a]">
                    {lang === 'de' ? 'Nachricht empfangen!' : 'Message Received!'}
                  </h4>
                  <p className="text-sm text-[#605850] max-w-md mx-auto leading-relaxed font-light">{t.sentSuccess}</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ ...formData, message: '' }); }}
                    className="mt-6 inline-block text-xs uppercase tracking-widest text-[#c2652a] font-bold underline"
                  >
                    {lang === 'de' ? 'Weitere Nachricht senden' : 'Send another inquiry'}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variants={stagger}
                >
                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">{t.formName} *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aida Müller"
                        className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">{t.formEmail} *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aida@example.com"
                        className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a] transition-colors"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">{t.formPhone}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+43 677 ..."
                        className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">{t.formSubject}</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a] transition-colors"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">{t.formMessage} *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.formMessage}
                      className="w-full bg-white border border-[#d8d0c8] rounded-xl p-4 text-sm focus:outline-none focus:border-[#c2652a] transition-colors resize-none"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <motion.button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3a302a] text-white text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-3"
                      whileHover={{ backgroundColor: '#c2652a', y: -2, boxShadow: '0 12px 32px rgba(194,101,42,0.35)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.sendBtn}</span>
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
