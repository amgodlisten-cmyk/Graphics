import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PricingPlan, ColorPalette } from '../config/siteConfig';

interface PricingSectionProps {
  palette: ColorPalette;
  pricing: PricingPlan[];
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  palette,
  pricing,
  onSelectPlan,
}) => {
  return (
    <section id="pricing" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-xs font-medium uppercase tracking-widest block mb-3"
            style={{ color: palette.accent }}
          >
            Transparent Engagements
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
            Curated investment structures.
          </h2>
          <p className="mt-4 text-base text-[#A29E93]">
            Fixed scope, uncompromising artisanal execution, and zero hidden licensing surcharges.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricing.map((plan) => {
            const isHighlight = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isHighlight
                    ? 'shadow-2xl'
                    : 'shadow-lg'
                }`}
                style={{
                  backgroundColor: isHighlight ? palette.bgCardHover : palette.bgCard,
                  borderColor: isHighlight ? palette.accent : 'rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Popularity Accent Ribbon */}
                {isHighlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1"
                    style={{
                      backgroundColor: palette.accent,
                      color: '#0B0B0F',
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Signature Choice</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-serif font-normal text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs text-[#A29E93] leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 pb-6 border-b border-white/10">
                    <div className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
                      {plan.price}
                    </div>
                    <span className="text-xs text-[#A29E93] mt-1 block">
                      Estimated Duration: {plan.timeline}
                    </span>
                  </div>

                  {/* Included features */}
                  <div className="mt-6 space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block font-medium">
                      Included Deliverables:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E5E2D9]">
                        <Check
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: palette.accent }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className="w-full py-3 px-4 rounded-lg text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:opacity-95"
                    style={{
                      backgroundColor: isHighlight ? palette.accent : 'rgba(255, 255, 255, 0.08)',
                      color: isHighlight ? '#0B0B0F' : '#F5F1E8',
                    }}
                  >
                    <span>Commission Package</span>
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
