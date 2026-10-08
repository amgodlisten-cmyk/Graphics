import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TestimonialItem, ColorPalette } from '../config/siteConfig';

interface TestimonialsSectionProps {
  palette: ColorPalette;
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  palette,
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundColor: palette.accent }}
      />

      <div
        className="max-w-4xl mx-auto relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-medium uppercase tracking-widest block mb-3"
            style={{ color: palette.accent }}
          >
            Client Advocacy
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
            Endorsed by visionary founders & cultural directors.
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative p-8 sm:p-14 rounded-3xl border shadow-2xl min-h-[320px] flex flex-col justify-between"
          style={{
            backgroundColor: palette.bgCard,
            borderColor: palette.border,
          }}
        >
          {/* Quote Icon */}
          <div className="flex items-center justify-between mb-8">
            <Quote className="w-10 h-10 opacity-30" style={{ color: palette.accent }} />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{ color: palette.accent }}
                />
              ))}
            </div>
          </div>

          {/* Animated Quote Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="my-auto"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#F5F1E8] leading-snug">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-base font-medium text-white">{current.author}</h4>
                  <div className="text-xs text-[#A29E93] mt-0.5">
                    {current.role} · <span className="text-white/80">{current.company}</span>
                  </div>
                </div>
                <div className="text-xs text-[#A29E93]">{current.location}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons & Dots */}
          <div className="flex items-center justify-between mt-8 pt-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8' : 'w-2 bg-white/20'
                  }`}
                  style={{
                    backgroundColor: idx === currentIndex ? palette.accent : undefined,
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
