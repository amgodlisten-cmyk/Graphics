import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { ProjectItem, ColorPalette } from '../config/siteConfig';

interface PortfolioSectionProps {
  palette: ColorPalette;
  projects: ProjectItem[];
  onOpenLightbox: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  palette,
  projects,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'branding', label: 'Branding Systems' },
    { id: 'logos', label: 'Logos & Marks' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'posters', label: 'Posters & Editorial' },
    { id: 'social', label: 'Social Media' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span
              className="text-xs font-medium uppercase tracking-widest block mb-3"
              style={{ color: palette.accent }}
            >
              Selected Archives
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
              Curated portfolio of bespoke craft & visual identity.
            </h2>
          </div>

          <p className="text-sm text-[#A29E93] max-w-sm">
            Click any project to explore the complete case study, typographic choices, and
            production dielines.
          </p>
        </div>

        {/* Functional Segmented Filter Controls (Interactive Buttons, NO PILLS) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 mb-12 overflow-x-auto max-w-fit"
          style={{ backgroundColor: palette.bgCard }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-black shadow-md font-semibold'
                    : 'text-[#A29E93] hover:text-white hover:bg-white/5'
                }`}
                style={{
                  backgroundColor: isActive ? palette.accent : 'transparent',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Box / Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Create dynamic visual hierarchy: first project or every 4th is wider on large screens
              const isFeature = idx === 0 || idx === 3;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-2xl overflow-hidden border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    isFeature ? 'lg:col-span-2' : 'col-span-1'
                  }`}
                  style={{
                    backgroundColor: palette.bgCard,
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                  onClick={() => onOpenLightbox(project)}
                >
                  {/* Media Frame with Hover Zoom */}
                  <div
                    className={`relative w-full overflow-hidden bg-black ${
                      isFeature ? 'aspect-[16/10]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Measured Scrim for Typographic Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Hover Floating Expand Badge */}
                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Editorial Card Metadata (Zero-Pill Discipline) */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs text-[#A29E93]">
                      <div className="flex items-center gap-2">
                        <span style={{ color: palette.accent }}>{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                      </div>
                      <span className="text-[#A29E93]/70">{project.client}</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#A29E93] line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 text-white/60 group-hover:text-white shrink-0 transition-colors">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
