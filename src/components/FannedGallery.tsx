import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { Language } from '../types';
import { IMAGES } from '../data/content';

interface FannedGalleryProps {
  lang: Language;
}

const FAN = [
  { img: IMAGES.linearGeometry, en: 'Cornrows', de: 'Cornrows' },
  { img: IMAGES.honeyBoxBraids, en: 'Box Braids', de: 'Box Braids' },
  { img: IMAGES.gildedKnotless, en: 'Knotless', de: 'Knotless' }, // center
  { img: IMAGES.architecturalUpdo, en: 'Updo', de: 'Hochsteckfrisur' },
  { img: IMAGES.artisanDetails, en: 'Fulani', de: 'Fulani' },
];

const CENTER = (FAN.length - 1) / 2;

interface Params {
  cardW: number;
  cardH: number;
  gapX: number;
  maxRot: number;
  arcY: number;
}

const DESKTOP: Params = { cardW: 208, cardH: 288, gapX: 132, maxRot: 13, arcY: 48 };
const MOBILE: Params = { cardW: 138, cardH: 196, gapX: 58, maxRot: 11, arcY: 30 };

function FanCard({
  img,
  label,
  offset,
  progress,
  p,
}: {
  img: string;
  label: string;
  offset: number;
  progress: MotionValue<number>;
  p: Params;
}) {
  // Interpolate from stacked (progress 0) → fanned arc (progress 1)
  const rotate = useTransform(progress, [0, 1], [offset * 2.5, offset * p.maxRot]);
  const x = useTransform(progress, [0, 1], [offset * 14, offset * p.gapX]);
  const y = useTransform(progress, [0, 1], [Math.abs(offset) * 3, Math.abs(offset) * p.arcY]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-[22px] overflow-hidden shadow-2xl ring-1 ring-black/10"
      style={{
        width: p.cardW,
        height: p.cardH,
        marginLeft: -p.cardW / 2,
        marginTop: -p.cardH / 2,
        x,
        y,
        rotate,
        scale,
        zIndex: 50 - Math.abs(offset) * 10,
      }}
      whileHover={{ scale: 1.06, y: 0, zIndex: 60, transition: { duration: 0.3 } }}
    >
      <img src={img} alt={label} className="w-full h-full object-cover" loading="lazy" />
      {/* Warm color grade + bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(58,48,42,0.72) 0%, rgba(58,48,42,0.12) 42%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-40"
        style={{ background: 'linear-gradient(135deg, #e08850 0%, transparent 55%)' }}
      />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#f0a878] font-bold mb-0.5">
          Moses
        </span>
        <span className="block font-serif text-sm sm:text-lg text-white leading-tight">{label}</span>
      </div>
    </motion.div>
  );
}

export const FannedGallery: React.FC<FannedGalleryProps> = ({ lang }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState<Params>(DESKTOP);

  useEffect(() => {
    const compute = () => setP(window.matchMedia('(max-width: 640px)').matches ? MOBILE : DESKTOP);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'],
  });

  return (
    <section ref={targetRef} className="relative py-16 sm:py-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-8 sm:mb-4 px-4"
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
          {lang === 'de' ? '↓ Scrolle, um die Kollektion zu entfalten' : '↓ Scroll to unfold the collection'}
        </p>
      </motion.div>

      {/* Fan stage */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: p.cardH + p.arcY * (FAN.length / 2) + 80 }}
      >
        {FAN.map((card, i) => (
          <FanCard
            key={i}
            img={card.img}
            label={lang === 'de' ? card.de : card.en}
            offset={i - CENTER}
            progress={scrollYProgress}
            p={p}
          />
        ))}
      </div>
    </section>
  );
};
