import React, { useState, useEffect } from 'react';
import { Menu, X, SlidersHorizontal, Palette } from 'lucide-react';
import { ColorPalette } from '../config/siteConfig';

interface NavbarProps {
  studioName: string;
  palette: ColorPalette;
  onOpenConfig: () => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  studioName,
  palette,
  onOpenConfig,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPercent);
      setScrolled(winScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Investment', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 backdrop-blur-md border-b'
          : 'py-6 bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? `${palette.bgDark}E6` : 'transparent',
        borderColor: scrolled ? palette.border : 'transparent',
      }}
    >
      {/* Scroll reading progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-100 ease-out z-50"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: palette.accent,
        }}
      />

      {/* 3-Zone Top Bar Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* ZONE 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-xl sm:text-2xl font-serif tracking-tight text-white transition-opacity hover:opacity-80"
        >
          {studioName}
        </a>

        {/* ZONE 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[#A29E93] hover:text-[#F5F1E8] transition-colors py-1 group"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: palette.accent }}
              />
            </a>
          ))}
        </nav>

        {/* ZONE 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Quick theme palette toggle button */}
          <button
            onClick={onToggleTheme}
            title={`Switch to ${palette.id === 'gold' ? 'Option B (Violet)' : 'Option A (Gold)'}`}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 text-[#A29E93] hover:text-white transition-colors"
            style={{ backgroundColor: `${palette.bgCard}99` }}
            aria-label="Toggle palette theme"
          >
            <Palette className="w-4 h-4" />
          </button>

          {/* Site live config trigger */}
          <button
            onClick={onOpenConfig}
            title="Edit Site Content & Config"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-medium text-[#A29E93] hover:text-white transition-colors"
            style={{ backgroundColor: `${palette.bgCard}99` }}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-all duration-200 whitespace-nowrap shadow-sm"
            style={{
              backgroundColor: palette.accent,
              color: '#0B0B0F',
            }}
          >
            Get a Quote
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A29E93] hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] p-6 border-b shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: palette.bgDark,
            borderColor: palette.border,
          }}
        >
          <div className="flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#A29E93] hover:text-white transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="flex items-center gap-2 text-sm text-[#A29E93] hover:text-white"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Customize Content & Palette</span>
              </button>
              <button
                onClick={() => {
                  onToggleTheme();
                }}
                className="flex items-center gap-2 text-sm text-[#A29E93] hover:text-white"
              >
                <Palette className="w-4 h-4" />
                <span>{palette.id === 'gold' ? 'Violet Theme' : 'Gold Theme'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
