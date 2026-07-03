import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, View } from '../types';
import { DICTIONARY } from '../data/content';

// Navbar redesign:
// - Look: Dribbble floating-pill navigation (detached rounded glass bar)
// - Motion: 21st.dev @aceternity/resizable-navbar (full bar shrinks into a
//   floating pill on scroll) + tubelight-style active indicator

const WHATSAPP_URL = 'https://wa.me/4367799015819';

interface NavbarProps {
  currentView: View;
  onSelectView: (view: View) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  lang,
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<View | null>(null);
  const t = DICTIONARY[lang].nav;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems: { id: View; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'portfolio', label: t.portfolio }
  ];

  const handleNavClick = (view: View) => {
    onSelectView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Resizable shell: full-width bar at top, floating pill when scrolled.
          Mobile-smooth: short tween instead of spring, inset via padding,
          and transform-based shrinking of the inner elements. */}
      <div className={`transition-[padding] duration-300 ${scrolled ? 'px-3 sm:px-4' : 'px-0'}`}>
      <motion.div
        className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
        animate={{
          maxWidth: scrolled ? '62rem' : '100%',
          marginTop: scrolled ? 8 : 0,
          height: scrolled ? 56 : 76,
          borderRadius: scrolled ? 999 : 0,
          backgroundColor: scrolled ? 'rgba(250,245,238,0.88)' : 'rgba(250,245,238,0.92)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(58,48,42,0.16), 0 0 0 1px rgba(58,48,42,0.06)'
            : '0 1px 0 rgba(58,48,42,0.08)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-[#c2652a] text-white flex items-center justify-center font-serif font-bold shadow-sm text-xl origin-center"
            animate={{ scale: scrolled ? 0.85 : 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.08 }}
          >
            M
          </motion.div>
          <div>
            <motion.span
              className="font-serif text-2xl font-semibold tracking-wide text-[#3a302a] block leading-none origin-left"
              animate={{ scale: scrolled ? 0.85 : 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              MOSES
            </motion.span>
            <span
              className={`text-[10px] uppercase tracking-widest text-[#78706a] block overflow-hidden transition-all duration-200 ${
                scrolled ? 'opacity-0 max-h-0 mt-0' : 'opacity-100 max-h-4 mt-1'
              }`}
            >
              4400 Steyr
            </span>
          </div>
        </button>

        {/* Desktop Nav — hover pill + tubelight active indicator */}
        <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
          {navItems.map((item) => {
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                className={`relative px-4 py-2 text-sm tracking-wide font-medium rounded-full transition-colors ${
                  active ? 'text-[#c2652a]' : 'text-[#605850] hover:text-[#3a302a]'
                }`}
              >
                {hovered === item.id && !active && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-[#f2ece4]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-[#fbe8d8]"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  >
                    {/* Tubelight bar + glow */}
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#c2652a] rounded-full">
                      <span className="absolute w-12 h-5 bg-[#c2652a]/25 rounded-full blur-md -top-2 -left-2" />
                      <span className="absolute w-8 h-5 bg-[#c2652a]/25 rounded-full blur-md -top-1" />
                      <span className="absolute w-4 h-3 bg-[#c2652a]/25 rounded-full blur-sm top-0 left-2" />
                    </span>
                  </motion.span>
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <motion.button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d8d0c8] bg-white/70 text-xs font-semibold text-[#3a302a] hover:border-[#c2652a] transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Globe className="w-3.5 h-3.5 text-[#c2652a]" />
            <span className={lang === 'de' ? 'text-[#c2652a]' : 'text-[#78706a]'}>DE</span>
            <span className="text-[#d8d0c8]">/</span>
            <span className={lang === 'en' ? 'text-[#c2652a]' : 'text-[#78706a]'}>EN</span>
          </motion.button>

          <motion.button
            onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3a302a] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#c2652a] transition-colors shadow-md origin-center"
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            <Calendar className="w-3.5 h-3.5 text-[#fbe8d8]" />
            {t.bookNow}
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={onToggleLang} className="px-2.5 py-1 rounded-full border border-[#d8d0c8] bg-white/70 text-xs font-semibold text-[#3a302a]">
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
      </motion.div>
      </div>

      {/* Mobile Menu — follows the pill when scrolled */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`md:hidden bg-[#faf5ee]/95 backdrop-blur-xl overflow-hidden ${
              scrolled
                ? 'mx-3 mt-2 rounded-2xl border border-[#ece6dc] shadow-xl'
                : 'border-b border-[#ece6dc]'
            }`}
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
                  onClick={() => { window.open(WHATSAPP_URL, '_blank', 'noopener'); setMobileMenuOpen(false); }}
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
    </header>
  );
};
