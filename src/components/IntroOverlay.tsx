import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroOverlayProps {
  studioName: string;
  tagline: string;
  accentColor: string;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({
  studioName,
  tagline,
  accentColor,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0F] text-[#F5F1E8] pointer-events-none select-none"
        >
          {/* Subtle radiating glow */}
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: accentColor }}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center px-6"
          >
            {/* Atelier Monogram Mark */}
            <div
              className="w-16 h-16 mb-6 rounded-full flex items-center justify-center border text-xl font-serif tracking-widest"
              style={{
                borderColor: `${accentColor}40`,
                color: accentColor,
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              AV
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#F5F1E8]">
              {studioName}
            </h1>
            <p className="mt-2 text-xs sm:text-sm tracking-widest uppercase text-[#A29E93]">
              {tagline}
            </p>

            {/* Delicate horizontal rule animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
              className="h-px mt-6"
              style={{ backgroundColor: accentColor }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
