import { useState, useEffect } from 'react';
import { Language, View } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { StudioExperience } from './components/StudioExperience';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ServicesBooking } from './components/ServicesBooking';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [lang, setLang] = useState<Language>('de');
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    setHasPointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf5ee] text-[#3a302a] selection:bg-[#c2652a] selection:text-white">
      {hasPointer && <CustomCursor />}

      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onSelectView={setCurrentView}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              lang={lang}
              onSelectView={setCurrentView}
            />
            <Specialties
              lang={lang}
              onSelectView={setCurrentView}
            />
            <StudioExperience lang={lang} />
            <PortfolioGrid
              lang={lang}
              onSelectView={setCurrentView}
            />
          </>
        )}

        {currentView === 'portfolio' && (
          <div className="pt-8">
            <PortfolioGrid
              lang={lang}
              onSelectView={setCurrentView}
            />
            <StudioExperience lang={lang} />
          </div>
        )}

        {currentView === 'services' && (
          <div className="pt-8">
            <ServicesBooking lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} onSelectView={setCurrentView} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

    </div>
  );
}

export default App;
