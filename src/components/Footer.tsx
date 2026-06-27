import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Language, View } from '../types';
import { DICTIONARY } from '../data/content';

interface FooterProps {
  lang: Language;
  onSelectView: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSelectView }) => {
  const t = DICTIONARY[lang].footer;
  const navT = DICTIONARY[lang].nav;

  return (
    <footer className="bg-[#3a302a] text-[#faf5ee] border-t border-[#605850]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c2652a] text-white flex items-center justify-center font-serif text-lg font-bold">
                M
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                MOSES
              </span>
            </div>
            <p className="text-sm text-[#d8d0c8] font-light max-w-sm leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#f0a878] pt-2">
              <MapPin className="w-4 h-4" />
              <span>Haratzmüllerstr. 19, 4400 Steyr</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#d8d0c8]">
              <li><button onClick={() => { onSelectView('home'); window.scrollTo({top:0}); }} className="hover:text-[#e08850] transition-colors">{navT.home}</button></li>
              <li><button onClick={() => { onSelectView('portfolio'); window.scrollTo({top:0}); }} className="hover:text-[#e08850] transition-colors">{navT.portfolio}</button></li>
              <li><button onClick={() => { onSelectView('services'); window.scrollTo({top:0}); }} className="hover:text-[#e08850] transition-colors">{navT.services}</button></li>
              <li><button onClick={() => { onSelectView('contact'); window.scrollTo({top:0}); }} className="hover:text-[#e08850] transition-colors">{navT.contact}</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Kontakt</h4>
            <div className="flex items-center gap-2.5 text-xs text-[#d8d0c8]">
              <Phone className="w-4 h-4 text-[#e08850]" />
              <a href="tel:67799015819" className="hover:text-white transition-colors">Tel. 67799015819</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9a9088] gap-4">
          <p>{t.rights}</p>
          <div className="flex items-center gap-6">
            <button className="hover:text-white transition-colors">{t.imprint}</button>
            <button className="hover:text-white transition-colors">{t.privacy}</button>
            <button className="hover:text-white transition-colors">{t.terms}</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
