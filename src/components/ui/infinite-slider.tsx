import { useState, useEffect, useRef, ReactNode } from 'react';
import { useMotionValue, animate, motion } from 'motion/react';

// Adapted from 21st.dev — @motion-primitives/infinite-slider.
// Rewritten for this project: uses the existing `motion` package and a
// ResizeObserver instead of the framer-motion + react-use-measure deps.

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className = '',
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  // Measure the duplicated content strip
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () =>
      setSize(direction === 'horizontal' ? el.offsetWidth : el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [direction]);

  useEffect(() => {
    if (!size) return;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    let controls: ReturnType<typeof animate> | undefined;
    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((k) => k + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }
    return () => controls?.stop();
  }, [key, translation, currentDuration, size, gap, isTransitioning, direction, reverse]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={contentRef}
        className={`flex ${direction === 'horizontal' ? 'w-max flex-row' : 'h-max w-full flex-col'}`}
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
