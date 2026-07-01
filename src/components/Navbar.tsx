import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [scrolled, setScrolled] = useState(false);
  const t = DICTIONARY[lang].nav;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

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
    <motion.header
      className="sticky top-0 z-50 border-b border-[#ece6dc]"
      animate={{
        backgroundColor: scrolled ? 'rgba(250,245,238,0.97)' : 'rgba(250,245,238,0.90)',
        boxShadow: scrolled
          ? '0 2px 24px rgba(58,48,42,0.10)'
          : '0 1px 0 rgba(58,48,42,0.04)',
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? '60px' : '80px' }}
      >
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <motion.div
            className="rounded-full bg-[#c2652a] text-white flex items-center justify-center font-serif font-bold shadow-sm"
            animate={{ width: scrolled ? 36 : 40, height: scrolled ? 36 : 40 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.08 }}
            style={{ fontSize: scrolled ? 16 : 20 }}
          >
            M
          </motion.div>
          <div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-[#3a302a] block leading-none">MOSES</span>
            <span className="text-[10px] uppercase tracking-widest text-[#78706a] block mt-1">4400 Steyr</span>
          </div>
        </button>

        {/* Desktop Nav */}
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
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c2652a] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="hidden sm:flex items-center gap-4">
          <motion.button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d8d0c8] bg-white text-xs font-semibold text-[#3a302a] hover:border-[#c2652a] transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Globe className="w-3.5 h-3.5 text-[#c2652a]" />
            <span className={lang === 'de' ? 'text-[#c2652a]' : 'text-[#78706a]'}>DE</span>
            <span className="text-[#d8d0c8]">/</span>
            <span className={lang === 'en' ? 'text-[#c2652a]' : 'text-[#78706a]'}>EN</span>
          </motion.button>

          <motion.button
            onClick={() => { onSelectView('services'); onOpenBooking(); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3a302a] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#c2652a] transition-colors shadow-md"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            <Calendar className="w-3.5 h-3.5 text-[#fbe8d8]" />
            {t.bookNow}
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={onToggleLang} className="px-2.5 py-1 rounded-full border border-[#d8d0c8] bg-white text-xs font-semibold text-[#3a302a]">
            {lang.toUpperCase()}
          </button>
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#3a302a] hover:bg-[#ece6dc] focus:outline-none"
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-[#faf5ee] border-b border-[#ece6dc] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: i * 0.06, duration: 0.25 } }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-serif py-2.5 px-3 rounded-xl transition-colors ${
                    currentView === item.id
                      ? 'text-[#c2652a] font-semibold bg-[#fbe8d8]'
                      : 'text-[#3a302a] hover:bg-[#f2ece4]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.28 } }}
                className="pt-4 border-t border-[#ece6dc] mt-2"
              >
                <button
                  onClick={() => { onSelectView('services'); onOpenBooking(); setMobileMenuOpen(false); }}
                  className="w-full py-3.5 rounded-full bg-[#c2652a] text-white font-semibold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {t.bookNow}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
