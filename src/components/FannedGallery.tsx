import { motion } from 'motion/react';
import { Language } from '../types';
import { IMAGES } from '../data/content';
import SocialCards, { CardItem } from './ui/card-fan-carousel';

interface FannedGalleryProps {
  lang: Language;
}

// Seven signature looks — 7 cards give the carousel its symmetric ±21° fan
// with the red Knotless hero landing dead centre.
const FAN_IMAGES: { img: string; en: string; de: string }[] = [
  { img: IMAGES.honeyBoxBraids, en: 'Box Braids', de: 'Box Braids' },
  { img: IMAGES.linearGeometry, en: 'Design Cornrows', de: 'Design Cornrows' },
  { img: IMAGES.passionTwistsSpec, en: 'Passion Twists', de: 'Passion Twists' },
  { img: IMAGES.gildedKnotless, en: 'Knotless Braids', de: 'Knotless Braids' }, // centre
  { img: IMAGES.artisanDetails, en: 'Fulani Braids', de: 'Fulani Braids' },
  { img: IMAGES.architecturalUpdo, en: 'Braided Updo', de: 'Hochsteckfrisur' },
  { img: IMAGES.heroCornrows, en: 'Artistic Styles', de: 'Artistic Styles' },
];

export const FannedGallery = ({ lang }: FannedGalleryProps) => {
  const cards: CardItem[] = FAN_IMAGES.map((c) => ({
    imgUrl: c.img,
    alt: `${lang === 'de' ? c.de : c.en} — Moses Braids`,
  }));

  return (
    <div className="py-16 sm:py-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-6 sm:mb-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c2652a] block mb-2">
          {lang === 'de' ? 'Signatur-Kunst' : 'Signature Artistry'}
        </span>
        <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#3a302a]">
          {lang === 'de' ? 'Handgefertigte Meisterwerke' : 'Handcrafted Masterpieces'}
        </h3>
        <p className="text-[#9a9088] text-xs sm:text-sm mt-2">
          {lang === 'de'
            ? 'Fahren Sie über die Karten, um jeden Stil zu entdecken'
            : 'Hover the cards to explore each signature style'}
        </p>
      </motion.div>

      {/* GSAP card-fan carousel */}
      <SocialCards cards={cards} />
    </div>
  );
};
