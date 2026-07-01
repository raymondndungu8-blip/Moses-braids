import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovered, setHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 32, mass: 0.4 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 32, mass: 0.4 });
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('button, a, [role="button"], input, select, textarea, label')) {
        setHovered(true);
      }
      if (target.closest('img, [data-cursor="view"]')) {
        setImageHovered(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('button, a, [role="button"], input, select, textarea, label')) {
        setHovered(false);
      }
      if (target.closest('img, [data-cursor="view"]')) {
        setImageHovered(false);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="cursor-ring fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: imageHovered ? 72 : hovered ? 48 : 36,
          height: imageHovered ? 72 : hovered ? 48 : 36,
          borderColor: hovered || imageHovered ? '#c2652a' : 'rgba(194,101,42,0.45)',
          backgroundColor: hovered ? 'rgba(194,101,42,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Sharp dot */}
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-[#c2652a]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered || imageHovered ? 6 : 8,
          height: hovered || imageHovered ? 6 : 8,
          opacity: imageHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* "View" label on image hover */}
      {imageHovered && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#c2652a]">
            View
          </span>
        </motion.div>
      )}
    </>
  );
};
