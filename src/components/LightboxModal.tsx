import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem, ColorPalette } from '../config/siteConfig';

interface LightboxModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  palette: ColorPalette;
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  allProjects,
  palette,
  onClose,
  onSelectProject,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      const currentIndex = allProjects.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight' && currentIndex < allProjects.length - 1) {
        onSelectProject(allProjects[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(allProjects[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, allProjects, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl rounded-2xl border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row my-auto"
          style={{
            backgroundColor: palette.bgDark,
            borderColor: palette.border,
          }}
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-white/80 border border-white/20 transition-all hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Visual Showcase */}
          <div className="md:w-7/12 relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[520px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover max-h-[550px]"
              referrerPolicy="no-referrer"
            />
            {/* Measured scrim for clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Quick Next/Prev floating arrows */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <button
                disabled={!prevProject}
                onClick={() => prevProject && onSelectProject(prevProject)}
                className={`p-2 rounded-full border border-white/20 backdrop-blur-md transition-all ${
                  prevProject
                    ? 'bg-black/60 text-white hover:bg-black/80'
                    : 'bg-black/20 text-white/30 cursor-not-allowed'
                }`}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={!nextProject}
                onClick={() => nextProject && onSelectProject(nextProject)}
                className={`p-2 rounded-full border border-white/20 backdrop-blur-md transition-all ${
                  nextProject
                    ? 'bg-black/60 text-white hover:bg-black/80'
                    : 'bg-black/20 text-white/30 cursor-not-allowed'
                }`}
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Project Case Breakdown */}
          <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Unboxed Metadata (Zero-Pill Discipline) */}
              <div className="flex items-center gap-2 text-xs text-[#A29E93] mb-3">
                <span style={{ color: palette.accent }}>{project.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{project.client}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-4">
                {project.title}
              </h3>

              <p className="text-sm text-[#A29E93] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-white/60 font-medium">
                  Deliverables & Artifacts:
                </h4>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#E5E2D9]">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: palette.accent }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measured Metric Outcome */}
              {project.metrics && (
                <div
                  className="p-3.5 rounded-lg border text-xs text-[#E5E2D9] mb-6"
                  style={{
                    backgroundColor: palette.bgCard,
                    borderColor: palette.border,
                  }}
                >
                  <span className="font-semibold block mb-0.5 text-white">Project Impact:</span>
                  <span>{project.metrics}</span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs text-[#A29E93]">
                Project {currentIndex + 1} of {allProjects.length}
              </span>

              <button
                onClick={() => {
                  onRequestSimilar(project.title);
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-md transition-all duration-200"
                style={{
                  backgroundColor: palette.accent,
                  color: '#0B0B0F',
                }}
              >
                <span>Request Similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
