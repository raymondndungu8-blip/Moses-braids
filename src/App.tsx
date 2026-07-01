import { useState, useEffect } from 'react';
import { BookingState, Language, PortfolioCategory, View } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { StudioExperience } from './components/StudioExperience';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ServicesBooking } from './components/ServicesBooking';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [lang, setLang] = useState<Language>('de');
  const [activeBookingModal, setActiveBookingModal] = useState<BookingState | null>(null);
  const [preselectedCategory, setPreselectedCategory] = useState<string | null>(null);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    setHasPointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const handleOpenBookingFromHeroOrNav = () => {
    setPreselectedCategory(null);
  };

  const handleSelectServiceFromPortfolio = (cat: PortfolioCategory) => {
    // Map portfolio category to service item id
    if (cat === 'knotless') setPreselectedCategory('s2');
    else if (cat === 'cornrows') setPreselectedCategory('s3');
    else if (cat === 'boxbraids') setPreselectedCategory('s1');
    else setPreselectedCategory('s4');
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
        onOpenBooking={handleOpenBookingFromHeroOrNav}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              lang={lang}
              onSelectView={setCurrentView}
              onOpenBooking={handleOpenBookingFromHeroOrNav}
            />
            <Specialties
              lang={lang}
              onSelectView={setCurrentView}
            />
            <StudioExperience lang={lang} />
            <PortfolioGrid
              lang={lang}
              onSelectView={setCurrentView}
              onSelectServiceForBooking={handleSelectServiceFromPortfolio}
            />
            <ServicesBooking
              lang={lang}
              onOpenModal={(b) => setActiveBookingModal(b)}
              preselectedServiceId={preselectedCategory}
            />
            <ContactSection lang={lang} />
          </>
        )}

        {currentView === 'portfolio' && (
          <div className="pt-8">
            <PortfolioGrid
              lang={lang}
              onSelectView={setCurrentView}
              onSelectServiceForBooking={handleSelectServiceFromPortfolio}
            />
            <StudioExperience lang={lang} />
          </div>
        )}

        {currentView === 'services' && (
          <div className="pt-8">
            <ServicesBooking
              lang={lang}
              onOpenModal={(b) => setActiveBookingModal(b)}
              preselectedServiceId={preselectedCategory}
            />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="pt-8">
            <ContactSection lang={lang} />
            <StudioExperience lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} onSelectView={setCurrentView} />

      {/* Booking Modal Overlay */}
      {activeBookingModal && (
        <BookingModal
          booking={activeBookingModal}
          lang={lang}
          onClose={() => setActiveBookingModal(null)}
          onSuccess={() => {
            setActiveBookingModal(null);
          }}
        />
      )}

    </div>
  );
}

export default App;
