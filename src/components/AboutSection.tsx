import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ColorPalette } from '../config/siteConfig';

interface AboutSectionProps {
  palette: ColorPalette;
  founder: string;
  role: string;
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
    sublabel: string;
  }>;
}

// Interactive count-up component
const CountUpStat: React.FC<{
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  palette: ColorPalette;
}> = ({ target, suffix, label, sublabel, palette }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="py-2">
      <div className="text-4xl sm:text-5xl font-serif font-normal text-white tabular-nums tracking-tight">
        <span>{count}</span>
        <span style={{ color: palette.accent }}>{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-[#F5F1E8]">{label}</div>
      <div className="text-xs text-[#A29E93] mt-0.5">{sublabel}</div>
    </div>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  palette,
  founder,
  role,
  stats,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span
            className="text-xs font-medium uppercase tracking-widest block mb-3"
            style={{ color: palette.accent }}
          >
            The Atelier Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
            Design is not merely aesthetic decoration. It is the architecture of desire.
          </h2>
        </div>

        {/* 2-Column Split: Editorial Portrait & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] border p-2 shadow-2xl"
              style={{
                backgroundColor: palette.bgCard,
                borderColor: palette.border,
              }}
            >
              {!imgFailed ? (
                <img
                  src="/src/assets/images/about_designer_portrait_1791446705569.jpg"
                  alt={`${founder} - Creative Director`}
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center rounded-xl p-6 text-center"
                  style={{ backgroundColor: palette.bgCardHover }}
                >
                  <span className="text-4xl font-serif mb-2" style={{ color: palette.accent }}>
                    EV
                  </span>
                  <span className="text-sm font-medium text-white">{founder}</span>
                  <span className="text-xs text-[#A29E93] mt-1">{role}</span>
                </div>
              )}

              {/* Subdued corner badge */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-lg backdrop-blur-md border border-white/10"
                style={{ backgroundColor: `${palette.bgDark}CC` }}
              >
                <div className="text-sm font-medium text-white">{founder}</div>
                <div className="text-xs text-[#A29E93]">{role}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6 text-[#A29E93] text-base sm:text-lg leading-relaxed">
              <p>
                Founded on the belief that enduring brands require obsessive restraint, Atelier
                Vance partners with visionary founders, luxury houses, and cultural institutions
                who demand uncompromising craft.
              </p>
              <p>
                Every project begins with a blank slate, guided by typographic balance, classical
                golden ratio principles, and material tactile depth. We do not chase disposable
                social media fads. We design marks and packaging intended to command prestige for
                decades to come.
              </p>
              <p className="text-[#F5F1E8] font-medium">
                &ldquo;When a brand communicates with pure intention and unhurried elegance, the
                audience does not simply buy—they belong.&rdquo;
              </p>
            </div>

            {/* Claim-to-Proof Numbers Grid */}
            <div
              className="mt-12 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6"
              style={{ borderColor: palette.border }}
            >
              {stats.map((stat, idx) => (
                <CountUpStat
                  key={idx}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  sublabel={stat.sublabel}
                  palette={palette}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
