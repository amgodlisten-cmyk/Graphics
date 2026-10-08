import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { ColorPalette } from '../config/siteConfig';

interface ProcessSectionProps {
  palette: ColorPalette;
  process: Array<{
    step: string;
    title: string;
    duration: string;
    description: string;
    deliverable: string;
  }>;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ palette, process }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span
            className="text-xs font-medium uppercase tracking-widest block mb-3"
            style={{ color: palette.accent }}
          >
            The Atelier Method
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
            A deliberate, four-stage journey from instinct to icon.
          </h2>
          <p className="mt-4 text-base text-[#A29E93] leading-relaxed">
            We follow an unhurried, rigorous methodology ensuring strategic alignment, conceptual
            depth, and flawless delivery.
          </p>
        </div>

        {/* Desktop & Mobile Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Step Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {process.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-opacity-100 shadow-lg'
                      : 'border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: isSelected ? palette.bgCardHover : palette.bgCard,
                    borderColor: isSelected ? palette.accent : 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-sm font-mono font-medium"
                      style={{ color: isSelected ? palette.accent : '#A29E93' }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h4
                        className={`text-base font-serif font-normal ${
                          isSelected ? 'text-white' : 'text-[#E5E2D9]'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <span className="text-xs text-[#A29E93] flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-2.5 h-2.5 rounded-full transition-transform"
                    style={{
                      backgroundColor: isSelected ? palette.accent : 'rgba(255, 255, 255, 0.2)',
                      transform: isSelected ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-2xl border relative overflow-hidden shadow-2xl"
              style={{
                backgroundColor: palette.bgCard,
                borderColor: palette.border,
              }}
            >
              {/* Subtle numeral watermark in background */}
              <div
                className="absolute -right-4 -bottom-6 text-9xl font-serif font-bold select-none pointer-events-none opacity-5"
                style={{ color: palette.accent }}
              >
                {process[activeStep].step}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono mb-4 text-[#A29E93]">
                <span style={{ color: palette.accent }}>STAGE {process[activeStep].step}</span>
                <span aria-hidden="true">·</span>
                <span>DURATION: {process[activeStep].duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-6">
                {process[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-[#A29E93] leading-relaxed mb-8">
                {process[activeStep].description}
              </p>

              <div
                className="p-5 rounded-xl border flex items-start gap-3.5"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: palette.accent }}
                />
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/50 block font-medium">
                    Key Milestone Handoff
                  </span>
                  <span className="text-sm font-medium text-white mt-0.5 block">
                    {process[activeStep].deliverable}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
