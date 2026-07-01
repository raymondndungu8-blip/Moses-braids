import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '67799015819';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[220px] border border-[#ece6dc]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#9a9088] text-white flex items-center justify-center"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-semibold text-[#3a302a] leading-snug">
              Hallo! 👋 Schreib uns auf WhatsApp – wir antworten schnell!
            </p>
            <p className="text-[10px] text-[#9a9088] mt-0.5">Moses Braids · Steyr</p>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-[#ece6dc] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring + button */}
      <div className="relative">
        {/* Animated pulse ring */}
        {!dismissed && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        )}

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1, boxShadow: '0 8px 28px rgba(37,211,102,0.45)' }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => { setShowTooltip(true); setDismissed(true); }}
          onHoverEnd={() => setShowTooltip(false)}
        >
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.8 7.4 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm0 27.8c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3.8 20.7 3.2 18.4 3.2 16 3.2 9 9 3.2 16 3.2S28.8 9 28.8 16 23 28.6 16 28.6zm8.3-10.9c-.5-.2-2.7-1.3-3.1-1.5-.4-.2-.7-.2-1 .2-.3.4-1.2 1.5-1.4 1.8-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.4 0-.7.2-.9l.6-.7c.2-.2.3-.5.4-.7.1-.2 0-.5-.1-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.4 7 6.2 1 .4 1.7.7 2.3.9.9.3 1.8.3 2.5.2.8-.1 2.4-.9 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.9-.5z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
};
