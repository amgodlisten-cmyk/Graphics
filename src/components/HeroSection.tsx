import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles, Eye } from 'lucide-react';
import { ColorPalette } from '../config/siteConfig';

interface HeroSectionProps {
  palette: ColorPalette;
  business: {
    name: string;
    founder: string;
    role: string;
    badge: string;
    tagline: string;
    heroHeadlinePart1: string;
    heroHeadlineHighlight: string;
    heroHeadlinePart2: string;
    heroSubtext: string;
    location: string;
    status: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ palette, business }) => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: palette.accent }}
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ backgroundColor: palette.accentHover }}
      />

      {/* Subtle architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(${palette.accent} 1px, transparent 1px), linear-gradient(to right, ${palette.accent} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Zero-Pill Quiet Editorial Trust Marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6"
          style={{ color: palette.accent }}
        >
          <span>{business.name}</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#A29E93]">{business.location}</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#A29E93]">{business.status}</span>
        </motion.div>

        {/* Master Headline with Staggered Word / Serif Editorial Presence */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-[#F5F1E8] text-balance">
            {business.heroHeadlinePart1}{' '}
            <span
              className="italic font-normal transition-colors duration-500"
              style={{ color: palette.accent }}
            >
              {business.heroHeadlineHighlight}
            </span>{' '}
            {business.heroHeadlinePart2}
          </h1>
        </motion.div>

        {/* Subtitle with measure discipline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#A29E93] max-w-2xl leading-relaxed"
        >
          {business.heroSubtext}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider rounded-md transition-all duration-300 shadow-md hover:scale-[1.02]"
            style={{
              backgroundColor: palette.accent,
              color: '#0B0B0F',
            }}
          >
            <Eye className="w-4 h-4" />
            <span>View Selected Work</span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#F5F1E8] rounded-md border transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: palette.border }}
          >
            <span>Get a Bespoke Quote</span>
            <ArrowDownRight className="w-4 h-4 text-[#A29E93] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Quick Micro-Ticker / Editorial Footer of the Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-[#A29E93]"
        >
          <div>
            <span className="block text-white font-medium">Design Disciplines</span>
            <span className="text-white/60">Brand · Editorial · Packaging · UI</span>
          </div>
          <div>
            <span className="block text-white font-medium">Turnaround</span>
            <span className="text-white/60">Artisanal 2–6 Weeks</span>
          </div>
          <div>
            <span className="block text-white font-medium">Client Range</span>
            <span className="text-white/60">Haute Parfums to Series A</span>
          </div>
          <div>
            <span className="block text-white font-medium">Availability</span>
            <span style={{ color: palette.accent }}>Accepting Q3 / Q4</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
