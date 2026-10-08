import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Palette,
  Code2,
  Download,
  Copy,
  Check,
  Sparkles,
  Layers,
  FileCode,
} from 'lucide-react';
import { ColorPalette, SITE_CONFIG } from '../config/siteConfig';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  palette: ColorPalette;
  onSelectPalette: (palId: 'gold' | 'violet') => void;
  customBusiness: typeof SITE_CONFIG.business;
  onUpdateBusiness: (updated: Partial<typeof SITE_CONFIG.business>) => void;
  customContact: typeof SITE_CONFIG.contact;
  onUpdateContact: (updated: Partial<typeof SITE_CONFIG.contact>) => void;
}

export const ConfigDrawer: React.FC<ConfigDrawerProps> = ({
  isOpen,
  onClose,
  palette,
  onSelectPalette,
  customBusiness,
  onUpdateBusiness,
  customContact,
  onUpdateContact,
}) => {
  const [activeTab, setActiveTab] = useState<'live' | 'code' | 'guide'>('live');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleDownloadHtml = () => {
    const fullHtml = generateStandaloneHtml({
      ...SITE_CONFIG,
      currentPalette: palette.id,
      business: customBusiness,
      contact: customContact,
    });
    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${customBusiness.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyConfigSnippet = () => {
    const sampleConfig = `// EDIT YOUR BUSINESS IN src/config/siteConfig.ts:
export const SITE_CONFIG = {
  currentPalette: '${palette.id}', // 'gold' or 'violet'
  business: {
    name: '${customBusiness.name}',
    founder: '${customBusiness.founder}',
    tagline: '${customBusiness.tagline}',
    location: '${customBusiness.location}',
  },
  contact: {
    email: '${customContact.email}',
    phone: '${customContact.phone}',
    whatsappNumber: '${customContact.whatsappNumber}',
  },
  // Add new projects to projects array:
  projects: [
    {
      id: 'my-project-1',
      title: 'New Brand Name',
      category: 'branding', // 'branding' | 'logos' | 'posters' | 'social' | 'packaging'
      categoryLabel: 'Brand Identity',
      client: 'Client Name',
      year: '2026',
      summary: 'Project description goes here...',
      image: '/your-image-url.jpg',
      deliverables: ['Logo Mark', 'Packaging', 'Styleguide'],
    }
  ]
};`;
    navigator.clipboard.writeText(sampleConfig);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Slide-over Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg h-full border-l shadow-2xl flex flex-col z-10"
          style={{
            backgroundColor: palette.bgDark,
            borderColor: palette.border,
          }}
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: palette.accent }} />
                <h3 className="text-lg font-serif font-normal text-white">
                  Studio Live Customizer
                </h3>
              </div>
              <p className="text-xs text-[#A29E93] mt-0.5">
                Edit branding, switch palettes, or export standalone single-file HTML.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white"
              aria-label="Close customizer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center border-b border-white/10 px-6 bg-white/[0.02]">
            <button
              onClick={() => setActiveTab('live')}
              className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'live'
                  ? 'border-current text-white font-semibold'
                  : 'border-transparent text-[#A29E93] hover:text-white'
              }`}
              style={{ color: activeTab === 'live' ? palette.accent : undefined }}
            >
              Live Editor
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-current text-white font-semibold'
                  : 'border-transparent text-[#A29E93] hover:text-white'
              }`}
              style={{ color: activeTab === 'code' ? palette.accent : undefined }}
            >
              Config Snippet
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`py-3 px-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'guide'
                  ? 'border-current text-white font-semibold'
                  : 'border-transparent text-[#A29E93] hover:text-white'
              }`}
              style={{ color: activeTab === 'guide' ? palette.accent : undefined }}
            >
              Deployment Guide
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'live' && (
              <>
                {/* 1. Palette Switcher */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A29E93] mb-3 font-medium">
                    1. Choose Design Palette
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectPalette('gold')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        palette.id === 'gold' ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#C9A24D]" />
                        <span className="text-xs font-semibold text-white">Option A: Gold & Noir</span>
                      </div>
                      <p className="text-[11px] text-[#A29E93]">Deep black, warm gold, ivory</p>
                    </button>

                    <button
                      onClick={() => onSelectPalette('violet')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        palette.id === 'violet' ? 'border-purple-400 bg-purple-400/10' : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#7C5CFF]" />
                        <span className="text-xs font-semibold text-white">Option B: Electric Violet</span>
                      </div>
                      <p className="text-[11px] text-[#A29E93]">Midnight navy, electric violet, white</p>
                    </button>
                  </div>
                </div>

                {/* 2. Business Details */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <label className="block text-xs uppercase tracking-wider text-[#A29E93] font-medium">
                    2. Business & Founder Details
                  </label>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">Business Name</span>
                    <input
                      type="text"
                      value={customBusiness.name}
                      onChange={(e) => onUpdateBusiness({ name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">Founder / Creative Director</span>
                    <input
                      type="text"
                      value={customBusiness.founder}
                      onChange={(e) => onUpdateBusiness({ founder: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">Tagline</span>
                    <input
                      type="text"
                      value={customBusiness.tagline}
                      onChange={(e) => onUpdateBusiness({ tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">Location</span>
                    <input
                      type="text"
                      value={customBusiness.location}
                      onChange={(e) => onUpdateBusiness({ location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>
                </div>

                {/* 3. Contact Details */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <label className="block text-xs uppercase tracking-wider text-[#A29E93] font-medium">
                    3. Contact & WhatsApp
                  </label>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">Email Address</span>
                    <input
                      type="email"
                      value={customContact.email}
                      onChange={(e) => onUpdateContact({ email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">Phone Number</span>
                    <input
                      type="text"
                      value={customContact.phone}
                      onChange={(e) => onUpdateContact({ phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>

                  <div>
                    <span className="text-xs text-white/70 block mb-1">
                      WhatsApp Number (digits with country code, e.g. 442079460921)
                    </span>
                    <input
                      type="text"
                      value={customContact.whatsappNumber}
                      onChange={(e) => onUpdateContact({ whatsappNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-[#0B0B0F]/60 text-white text-xs focus:outline-none"
                      style={{ borderColor: palette.border }}
                    />
                  </div>
                </div>

                {/* 4. Single-file HTML Export Trigger */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={handleDownloadHtml}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:opacity-95"
                    style={{
                      backgroundColor: palette.accent,
                      color: '#0B0B0F',
                    }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Standalone HTML (.html)</span>
                  </button>
                  <p className="text-[11px] text-[#A29E93] mt-2 text-center">
                    Single file with HTML + CSS + JS combined. Opens directly in Chrome with zero setup!
                  </p>
                </div>
              </>
            )}

            {activeTab === 'code' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white">
                    Master Config Structure (src/config/siteConfig.ts)
                  </span>
                  <button
                    onClick={copyConfigSnippet}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white hover:bg-white/5"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-black/80 border border-white/10 text-[11px] text-[#F5F1E8] font-mono overflow-x-auto leading-relaxed max-h-[480px]">
{`/**
 * ✦ HOW TO ADD A NEW PROJECT TO THE PORTFOLIO ✦
 * Open /src/config/siteConfig.ts and add an object to the projects array:
 */
{
  id: 'project-slug',
  title: 'Project Name',
  category: 'branding', // 'branding' | 'logos' | 'posters' | 'social' | 'packaging'
  categoryLabel: 'Brand Identity',
  client: 'Client or Company Name',
  year: '2026',
  summary: '1-sentence overview for the grid card',
  image: '/src/assets/images/your-image.jpg',
  description: 'Full narrative shown inside the lightbox popup...',
  deliverables: ['Custom Mark', 'Packaging', 'Typography Guide'],
  metrics: 'e.g. +240% wholesale pre-orders in 30 days.'
}`}
                </pre>
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="space-y-6 text-xs text-[#A29E93] leading-relaxed">
                <div>
                  <h4 className="text-sm font-serif text-white mb-2">
                    How to Edit Your Business Details
                  </h4>
                  <p>
                    All text, contact links, colors, and project entries live inside{' '}
                    <code className="text-white px-1.5 py-0.5 rounded bg-white/10">
                      src/config/siteConfig.ts
                    </code>
                    . Change any string in quotes to update the entire site.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-serif text-white mb-2">
                    Adding or Removing Portfolio Items
                  </h4>
                  <p>
                    Navigate to <code className="text-white">projects: [...]</code> in{' '}
                    <code className="text-white">siteConfig.ts</code>. You can add as many items as
                    you wish. The filter buttons and lightbox automatically handle new entries!
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-serif text-white mb-2">
                    Publishing to the Web (Netlify, GitHub Pages, Vercel)
                  </h4>
                  <ol className="list-decimal pl-4 space-y-2 text-[#E5E2D9]">
                    <li>
                      <strong>Option 1 (Instant Single File):</strong> Click the "Download Standalone
                      HTML" button. Drag and drop the downloaded file directly to{' '}
                      <span className="text-white">app.netlify.com/drop</span> for an instant live
                      website in 10 seconds!
                    </li>
                    <li>
                      <strong>Option 2 (GitHub Pages / Vercel):</strong> Push the project repository to
                      GitHub and connect to Vercel or Netlify. Set the build command to{' '}
                      <code className="text-white">npm run build</code> and publish directory to{' '}
                      <code className="text-white">dist</code>.
                    </li>
                    <li>
                      <strong>Custom Domain:</strong> Add a CNAME record pointing to your host in
                      your domain registrar (e.g. GoDaddy, Namecheap, Google Domains).
                    </li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
