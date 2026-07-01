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
// Order is chosen so the hero look (p1 — the red knotless) lands dead centre.
const FAN_ORDER = ['p2', 'p3', 'p1', 'p4', 'p6', 'p5'];
const HERO_ID = 'p1';
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

// Wider spread + stronger tilt for a more dramatic fanned-deck arc.
const DESKTOP: Params = { cardW: 202, cardH: 284, gapX: 130, maxRot: 15, arcY: 46 };
const MOBILE: Params = { cardW: 126, cardH: 178, gapX: 50, maxRot: 11, arcY: 28 };

function FanCard({
  item,
  label,
  category,
  offset,
  progress,
  p,
  featured,
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
  featured: boolean;
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

  // Focus/feature pop layered on top of the scroll transform.
  const focusScale = isActive ? 1.14 : anyActive ? 0.92 : featured ? 1.07 : 1;
  const focusLift = isActive ? -16 : !anyActive && featured ? -8 : 0;

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
        zIndex: isActive ? 70 : featured ? 55 : 50 - Math.abs(offset) * 10,
      }}
    >
      <motion.button
        type="button"
        data-cursor="view"
        aria-label={`${label} — ${isActive ? 'view details' : 'preview'}`}
        onClick={onSelect}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        animate={{ scale: focusScale, y: focusLift }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`relative block rounded-[22px] overflow-hidden shadow-2xl outline-none transition-shadow ${
          isActive
            ? 'ring-2 ring-[#e08850]'
            : featured
              ? 'ring-2 ring-[#e08850]/45'
              : 'ring-1 ring-black/10'
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

export const FannedGallery = ({ lang, onSelect }: FannedGalleryProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState<Params>(DESKTOP);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverless, setHoverless] = useState(false);
  const [inView, setInView] = useState(false);
  const userInteracted = useRef(false);

  useEffect(() => {
    const compute = () => setP(window.matchMedia('(max-width: 640px)').matches ? MOBILE : DESKTOP);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  // Detect no-hover (touch) devices — they get the auto-fan attract cycle.
  useEffect(() => {
    setHoverless(window.matchMedia('(hover: none)').matches);
  }, []);

  // Only run the attract animation while the gallery is on screen.
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-cycle the highlight on touch devices to hint that cards are tappable.
  // Stops permanently on the first real user interaction.
  useEffect(() => {
    if (!hoverless || !inView || userInteracted.current) return;
    let i = 0;
    setActiveIndex(0);
    const id = window.setInterval(() => {
      if (userInteracted.current) {
        window.clearInterval(id);
        return;
      }
      i = (i + 1) % FAN.length;
      setActiveIndex(i);
    }, 1900);
    return () => window.clearInterval(id);
  }, [hoverless, inView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'],
  });

  const activeItem = activeIndex !== null ? FAN[activeIndex] : null;

  const activateByUser = (index: number) => {
    userInteracted.current = true;
    setActiveIndex(index);
  };

  const handleSelect = (index: number, item: PortfolioItem) => {
    // The first real interaction (or focusing a different card) just selects it;
    // clicking the already-focused card opens the detail view. Touch + mouse safe.
    const firstTouch = !userInteracted.current;
    userInteracted.current = true;
    if (firstTouch || activeIndex !== index) {
      setActiveIndex(index);
      return;
    }
    onSelect?.(item);
  };

  const openActive = () => {
    if (!activeItem) return;
    userInteracted.current = true;
    onSelect?.(activeItem);
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
        style={{ height: p.cardH + p.arcY * (FAN.length / 2) + 90 }}
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
            featured={item.id === HERO_ID}
            isActive={activeIndex === i}
            anyActive={activeIndex !== null}
            onActivate={() => activateByUser(i)}
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
              onClick={openActive}
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