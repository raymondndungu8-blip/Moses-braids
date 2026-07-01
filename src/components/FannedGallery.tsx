import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../data/content';

interface FannedGalleryProps {
  lang: Language;
  onSelect?: (item: PortfolioItem) => void;
}

// Build the fan from real portfolio data so every braid style is represented.
// Order chosen so the boldest looks land toward the centre of the arc.
const FAN_ORDER = ['p2', 'p3', 'p1', 'p6', 'p4', 'p5'];
const FAN: PortfolioItem[] = FAN_ORDER
  .map((id) => PORTFOLIO_ITEMS.find((it) => it.id === id))
  .filter((it): it is PortfolioItem => Boolean(it));

const CENTER = (FAN.length - 1) / 2;

interface Params {
  cardW: number;
  cardH: number;
  gapX: number;
  maxRot: number;
  arcY: number;
}

const DESKTOP: Params = { cardW: 200, cardH: 280, gapX: 116, maxRot: 12, arcY: 40 };
const MOBILE: Params = { cardW: 122, cardH: 172, gapX: 44, maxRot: 9, arcY: 24 };

function FanCard({
  item,
  label,
  category,
  offset,
  progress,
  p,
  isActive,
  anyActive,
  onActivate,
  onSelect,
}: {
  item: PortfolioItem;
  label: string;
  category: string;
  offset: number;
  progress: MotionValue<number>;
  p: Params;
  isActive: boolean;
  anyActive: boolean;
  onActivate: () => void;
  onSelect: () => void;
}) {
  // Interpolate from stacked (progress 0) → fanned arc (progress 1)
  const rotate = useTransform(progress, [0, 1], [offset * 2.5, offset * p.maxRot]);
  const x = useTransform(progress, [0, 1], [offset * 14, offset * p.gapX]);
  const y = useTransform(progress, [0, 1], [Math.abs(offset) * 3, Math.abs(offset) * p.arcY]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);

  // Focus pop layered on top of the scroll transform
  const focusScale = isActive ? 1.12 : anyActive ? 0.93 : 1;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        x,
        y,
        rotate,
        scale,
        marginLeft: -p.cardW / 2,
        marginTop: -p.cardH / 2,
        zIndex: isActive ? 60 : 50 - Math.abs(offset) * 10,
      }}
    >
      <motion.button
        type="button"
        data-cursor="view"
        aria-label={`${label} — ${isActive ? 'view details' : 'preview'}`}
        onClick={onSelect}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        animate={{ scale: focusScale, y: isActive ? -14 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`relative block rounded-[22px] overflow-hidden shadow-2xl outline-none transition-shadow ${
          isActive ? 'ring-2 ring-[#e08850]' : 'ring-1 ring-black/10'
        }`}
        style={{ width: p.cardW, height: p.cardH }}
      >
        <img src={item.image} alt={label} className="w-full h-full object-cover" loading="lazy" />

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

        {/* Dim non-focused cards when one is active */}
        <motion.div
          className="absolute inset-0 bg-[#2a221d]"
          animate={{ opacity: anyActive && !isActive ? 0.42 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-left">
          <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#f0a878] font-bold mb-0.5">
            {category}
          </span>
          <span className="block font-serif text-sm sm:text-lg text-white leading-tight">{label}</span>
        </div>

        {/* "View" affordance on the focused card */}
        <AnimatePresence>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#c2652a] text-white text-[9px] font-bold uppercase tracking-wider shadow-lg"
            >
              View <ArrowRight className="w-3 h-3" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

export const FannedGallery: React.FC<FannedGalleryProps> = ({ lang, onSelect }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState<Params>(DESKTOP);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const activeItem = activeIndex !== null ? FAN[activeIndex] : null;

  const handleSelect = (index: number, item: PortfolioItem) => {
    // First interaction focuses the card; a second click (or clicking the
    // already-focused card) opens the detail view. Works with touch + mouse.
    if (activeIndex !== index) {
      setActiveIndex(index);
      return;
    }
    onSelect?.(item);
  };

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
          {lang === 'de'
            ? '↓ Scrolle, um die Kollektion zu entfalten'
            : '↓ Scroll to unfold the collection'}
        </p>
      </motion.div>

      {/* Fan stage */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: p.cardH + p.arcY * (FAN.length / 2) + 80 }}
      >
        {FAN.map((item, i) => (
          <FanCard
            key={item.id}
            item={item}
            label={lang === 'de' ? item.titleDe : item.titleEn}
            category={lang === 'de' ? item.categoryLabelDe : item.categoryLabelEn}
            offset={i - CENTER}
            progress={scrollYProgress}
            p={p}
            isActive={activeIndex === i}
            anyActive={activeIndex !== null}
            onActivate={() => setActiveIndex(i)}
            onSelect={() => handleSelect(i, item)}
          />
        ))}
      </div>

      {/* Selection caption + CTA — the "functional" part */}
      <div className="h-16 mt-2 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          {activeItem ? (
            <motion.button
              key={activeItem.id}
              type="button"
              onClick={() => onSelect?.(activeItem)}
              data-cursor="view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#3a302a] text-white pl-5 pr-3 py-2.5 shadow-lg"
            >
              <span className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-[0.2em] text-[#f0a878] font-bold">
                  {lang === 'de' ? activeItem.categoryLabelDe : activeItem.categoryLabelEn}
                </span>
                <span className="block font-serif text-sm sm:text-base">
                  {lang === 'de' ? activeItem.titleDe : activeItem.titleEn}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#c2652a] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#e08850] transition-colors">
                {lang === 'de' ? 'Ansehen' : 'View Style'}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.button>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[#9a9088] text-xs sm:text-sm"
            >
              {lang === 'de'
                ? 'Tippe eine Karte an, um den Stil auszuwählen'
                : 'Tap a card to select a braid style'}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};