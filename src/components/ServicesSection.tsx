import React from 'react';
import {
  Sparkles,
  PenTool,
  PackageCheck,
  Layers,
  LayoutGrid,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ColorPalette, ServiceItem } from '../config/siteConfig';

interface ServicesSectionProps {
  palette: ColorPalette;
  services: ServiceItem[];
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  PenTool,
  PackageCheck,
  Layers,
  LayoutGrid,
  Compass,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  palette,
  services,
  onSelectService,
}) => {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative">
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ backgroundColor: palette.accent }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span
              className="text-xs font-medium uppercase tracking-widest block mb-3"
              style={{ color: palette.accent }}
            >
              Atelier Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
              Bespoke design disciplines tailored to your ambition.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A29E93] max-w-sm">
            From foundational identity systems to tactile luxury packaging, we execute with Swiss
            precision and fine-art discernment.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: palette.bgCard,
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Top Row: Editorial Index Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-mono font-medium tracking-wider"
                      style={{ color: palette.accent }}
                    >
                      {service.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border transition-colors group-hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderColor: palette.border,
                        color: palette.accent,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-normal text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#A29E93] italic">{service.tagline}</p>
                  <p className="mt-4 text-sm text-[#A29E93] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block font-medium">
                      Scope & Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#E5E2D9] leading-snug"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: palette.accent }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Timeline & Inquire action */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[#A29E93]">Timeline: {service.timeline}</span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex items-center gap-1 font-medium transition-transform group-hover:translate-x-1"
                    style={{ color: palette.accent }}
                  >
                    <span>Commission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
