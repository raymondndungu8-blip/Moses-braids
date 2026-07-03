import { motion } from 'motion/react';
import { Language } from '../types';
import { IMAGES } from '../data/content';
import SocialCards, { CardItem } from './ui/card-fan-carousel';

interface FannedGalleryProps {
  lang: Language;
}

// Ten looks — more than 7 cards activates the carousel's circular
// pagination (arrows + dots), matching the 21st.dev card-fan demo.
// The red Knotless hero sits at index 3 so it lands dead centre on load.
const FAN_IMAGES: { img: string; en: string; de: string }[] = [
  { img: IMAGES.honeyBoxBraids, en: 'Box Braids', de: 'Box Braids' },
  { img: IMAGES.linearGeometry, en: 'Design Cornrows', de: 'Design Cornrows' },
  { img: IMAGES.passionTwistsSpec, en: 'Passion Twists', de: 'Passion Twists' },
  { img: IMAGES.gildedKnotless, en: 'Knotless Braids', de: 'Knotless Braids' }, // centre
  { img: IMAGES.artisanDetails, en: 'Fulani Braids', de: 'Fulani Braids' },
  { img: IMAGES.architecturalUpdo, en: 'Braided Updo', de: 'Hochsteckfrisur' },
  { img: IMAGES.heroCornrows, en: 'Artistic Styles', de: 'Artistic Styles' },
  { img: IMAGES.knotlessSpec, en: 'Knotless Braids', de: 'Knotless Braids' },
  { img: IMAGES.cornrowsSpec, en: 'Cornrows', de: 'Cornrows' },
  { img: IMAGES.serviceKnotless, en: 'Knotless Braids', de: 'Knotless Braids' },
];

export const FannedGallery = ({ lang }: FannedGalleryProps) => {
  const cards: CardItem[] = FAN_IMAGES.map((c) => ({
    imgUrl: c.img,
    alt: `${lang === 'de' ? c.de : c.en} — Moses Braids`,
    label: lang === 'de' ? c.de : c.en,
  }));

  return (
    <div className="pt-6 pb-0 sm:pt-10 overflow-hidden">
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
            ? 'Wischen Sie durch unsere Looks – jeder Stil wird unter dem Fächer angezeigt'
            : 'Swipe through our looks — each braid style is named below the fan'}
        </p>
      </motion.div>

      {/* GSAP card-fan carousel — negative margin swallows the fan's internal
          vertical slack so it sits closer to the heading */}
      <div className="-mt-6 sm:-mt-8">
        <SocialCards cards={cards} />
      </div>
    </div>
  );
};
