import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Adapted from 21st.dev — @aceternity/text-hover-effect.
// Giant outlined text; a radial mask follows the cursor and reveals a warm
// Sahara gradient fill. An animated stroke "draws" the text on first view.

export const TextHoverEffect = ({ text, duration }: { text: string; duration?: number }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 620 140"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fh-textGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#e08850" />
              <stop offset="50%" stopColor="#c2652a" />
              <stop offset="100%" stopColor="#8c3c3c" />
            </>
          )}
        </linearGradient>
        <motion.radialGradient
          id="fh-revealMask"
          gradientUnits="userSpaceOnUse"
          r="22%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.15, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="fh-textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#fh-revealMask)" />
        </mask>
      </defs>

      {/* Faint permanent outline */}
      <text
        x="50%"
        y="82%"
        textAnchor="middle"
        strokeWidth="0.6"
        className="fill-transparent stroke-[#faf5ee]/15 font-serif"
        style={{ fontSize: '128px', letterSpacing: '0.06em' }}
      >
        {text}
      </text>

      {/* Draw-on stroke animation on first view */}
      <motion.text
        x="50%"
        y="82%"
        textAnchor="middle"
        strokeWidth="0.6"
        className="fill-transparent stroke-[#e08850]/40 font-serif"
        style={{ fontSize: '128px', letterSpacing: '0.06em' }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3.5, ease: 'easeInOut' }}
      >
        {text}
      </motion.text>

      {/* Gradient fill revealed under the cursor */}
      <text
        x="50%"
        y="82%"
        textAnchor="middle"
        stroke="url(#fh-textGradient)"
        strokeWidth="0.8"
        mask="url(#fh-textMask)"
        className="fill-transparent font-serif"
        style={{ fontSize: '128px', letterSpacing: '0.06em' }}
      >
        {text}
      </text>
    </svg>
  );
};
