import React, { useState } from 'react';
import { Sparkles, Globe, Menu, X, Calendar } from 'lucide-react';
import { Language, View } from '../types';
import { DICTIONARY } from '../data/content';

interface NavbarProps {
  currentView: View;
  onSelectView: (view: View) => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  lang,
  onToggleLang,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = DICTIONARY[lang].nav;

  const navItems: { id: View; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'portfolio', label: t.portfolio },
    { id: 'services', label: t.services },
    { id: 'contact', label: t.contact }
  ];

  const handleNavClick = (view: View) => {
    onSelectView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf5ee]/90 backdrop-blur-md border-b border-[#ece6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#c2652a] text-white flex items-center justify-center font-serif text-xl font-bold transition-transform group-hover:scale-105 shadow-sm">
            M
          </div>
          <div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-[#3a302a] block leading-none">
              MOSES
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#78706a] block mt-1">
              4400 Steyr
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide font-medium relative py-2 transition-colors ${
                  active ? 'text-[#c2652a]' : 'text-[#605850] hover:text-[#3a302a]'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c2652a] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Language & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d8d0c8] bg-white text-xs font-semibold text-[#3a302a] hover:border-[#c2652a] transition-all"
            title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          >
            <Globe className="w-3.5 h-3.5 text-[#c2652a]" />
            <span className={lang === 'de' ? 'text-[#c2652a]' : 'text-[#78706a]'}>DE</span>
            <span className="text-[#d8d0c8]">/</span>
            <span className={lang === 'en' ? 'text-[#c2652a]' : 'text-[#78706a]'}>EN</span>
          </button>

          <button
            onClick={() => {
              onSelectView('services');
              onOpenBooking();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3a302a] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#c2652a] transition-all shadow-md hover:shadow-lg transform active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#fbe8d8]" />
            {t.bookNow}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleLang}
            className="flex items-center px-2.5 py-1 rounded-full border border-[#d8d0c8] bg-white text-xs font-semibold text-[#3a302a]"
          >
            {lang.toUpperCase()}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#3a302a] hover:bg-[#ece6dc] focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf5ee] border-b border-[#ece6dc] px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-serif py-1 ${
                  currentView === item.id ? 'text-[#c2652a] font-semibold pl-2 border-l-2 border-[#c2652a]' : 'text-[#3a302a]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#ece6dc] flex flex-col gap-3">
            <button
              onClick={() => {
                onSelectView('services');
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-[#c2652a] text-white font-semibold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              {t.bookNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
