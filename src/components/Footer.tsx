import React from 'react';
import { ArrowUp, Instagram, Linkedin, Dribbble } from 'lucide-react';
import { ColorPalette } from '../config/siteConfig';

interface FooterProps {
  palette: ColorPalette;
  studioName: string;
  tagline: string;
  socials: Array<{ name: string; handle: string; url: string }>;
}

export const Footer: React.FC<FooterProps> = ({
  palette,
  studioName,
  tagline,
  socials,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-16 px-6 sm:px-8 border-t relative text-sm"
      style={{
        backgroundColor: palette.bgDark,
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
        <div>
          <a
            href="#top"
            className="text-2xl font-serif tracking-tight text-white block hover:opacity-80 transition-opacity"
          >
            {studioName}
          </a>
          <p className="mt-2 text-xs sm:text-sm text-[#A29E93] max-w-sm">
            {tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium uppercase tracking-wider text-[#A29E93]">
          <a href="#portfolio" className="hover:text-white transition-colors">
            Selected Work
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About Atelier
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Investment
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 p-2.5 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all hover:scale-105"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Copyright & Socials */}
      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A29E93]">
        <p>
          &copy; {new Date().getFullYear()} {studioName}. All rights reserved. Registered in the United Kingdom.
        </p>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A29E93] hover:text-white transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
