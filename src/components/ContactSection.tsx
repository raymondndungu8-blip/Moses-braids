import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, IMAGES } from '../data/content';

interface ContactSectionProps {
  lang: Language;
}

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">
            MOSES STEYR
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#3a302a] mb-4">
            {t.title}
          </h2>
          <p className="text-[#605850] text-base font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Salon Details & Map Graphic */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#faf5ee] rounded-3xl p-8 border border-[#ece6dc] shadow-sm space-y-6">
              
              {/* Studio */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#fbe8d8] flex items-center justify-center text-[#c2652a] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#3a302a] mb-1">
                    {t.studioHeader}
                  </h3>
                  <p className="text-xs text-[#605850] whitespace-pre-line leading-relaxed">
                    {t.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#ece6dc]">
                <div className="w-10 h-10 rounded-full bg-[#fbe8d8] flex items-center justify-center text-[#c2652a] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#3a302a] mb-1">
                    {t.hoursHeader}
                  </h3>
                  <p className="text-xs text-[#605850] whitespace-pre-line leading-relaxed">
                    {t.hoursText}
                  </p>
                </div>
              </div>

              {/* Contact Direct */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#ece6dc]">
                <div className="w-10 h-10 rounded-full bg-[#fbe8d8] flex items-center justify-center text-[#c2652a] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#3a302a] mb-1">
                    {t.contactInfoHeader}
                  </h3>
                  <p className="text-xs text-[#605850]">
                    <a href="tel:67799015819" className="hover:text-[#c2652a] block mb-1 font-medium text-base text-[#c2652a]">Tel. 67799015819</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Map Photo / Visual representation */}
            <div className="rounded-3xl overflow-hidden h-64 border border-[#ece6dc] relative group">
              <img
                src={IMAGES.contactAtmosphere}
                alt="Salon Atmosphere Steyr"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                  <p className="font-serif text-base font-bold text-[#3a302a]">Haratzmüllerstr. 19</p>
                  <p className="text-[11px] text-[#605850]">4400 Steyr, Österreich</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#faf5ee] rounded-3xl p-8 md:p-12 border border-[#ece6dc] shadow-sm">
            <h3 className="font-serif text-3xl font-normal text-[#3a302a] mb-8">
              {t.formHeader}
            </h3>

            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c2652a] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-[#3a302a]">
                  {lang === 'de' ? 'Nachricht empfangen!' : 'Message Received!'}
                </h4>
                <p className="text-sm text-[#605850] max-w-md mx-auto leading-relaxed font-light">
                  {t.sentSuccess}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ ...formData, message: '' });
                  }}
                  className="mt-6 inline-block text-xs uppercase tracking-widest text-[#c2652a] font-bold underline"
                >
                  {lang === 'de' ? 'Weitere Nachricht senden' : 'Send another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Aida Müller"
                      className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">
                      {t.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aida@example.com"
                      className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">
                      {t.formPhone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 176 ..."
                      className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">
                      {t.formSubject}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-2">
                    {t.formMessage} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.formMessage}
                    className="w-full bg-white border border-[#d8d0c8] rounded-xl p-4 text-sm focus:outline-none focus:border-[#c2652a]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3a302a] hover:bg-[#c2652a] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendBtn}</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
