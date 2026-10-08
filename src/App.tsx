/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG, ProjectItem } from './config/siteConfig';
import { CustomCursor } from './components/CustomCursor';
import { IntroOverlay } from './components/IntroOverlay';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { LightboxModal } from './components/LightboxModal';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConfigDrawer } from './components/ConfigDrawer';

export default function App() {
  // Theme Palette state (Option A: Gold & Noir, Option B: Navy & Electric Violet)
  const [currentPaletteId, setCurrentPaletteId] = useState<'gold' | 'violet'>(
    SITE_CONFIG.currentPalette
  );

  // Live editable state for business & contact
  const [businessData, setBusinessData] = useState(SITE_CONFIG.business);
  const [contactData, setContactData] = useState(SITE_CONFIG.contact);

  // Lightbox state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Contact form pre-fill state
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Config Drawer modal state
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const activePalette = SITE_CONFIG.palettes[currentPaletteId] || SITE_CONFIG.palettes.gold;

  const handleToggleTheme = () => {
    setCurrentPaletteId((prev) => (prev === 'gold' ? 'violet' : 'gold'));
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlanFromPricing = (planName: string) => {
    setPrefilledService(`Package: ${planName}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    setPrefilledService(`Similar to Project: ${projectTitle}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500 selection:bg-amber-400 selection:text-black"
      style={{
        backgroundColor: activePalette.bgDark,
        color: activePalette.textPrimary,
      }}
    >
      {/* 1. Page load intro reveal */}
      <IntroOverlay
        studioName={businessData.name}
        tagline={businessData.tagline}
        accentColor={activePalette.accent}
      />

      {/* 2. Custom animated cursor for desktop */}
      <CustomCursor accentColor={activePalette.accent} />

      {/* 3. Sticky top navigation bar */}
      <Navbar
        studioName={businessData.name}
        palette={activePalette}
        onOpenConfig={() => setIsConfigOpen(true)}
        onToggleTheme={handleToggleTheme}
      />

      {/* 4. Hero Section with dynamic text & motion */}
      <main>
        <HeroSection palette={activePalette} business={businessData} />

        {/* 5. About Section with count-up statistics & portrait */}
        <AboutSection
          palette={activePalette}
          founder={businessData.founder}
          role={businessData.role}
          stats={SITE_CONFIG.stats}
        />

        {/* 6. Capabilities & Services */}
        <ServicesSection
          palette={activePalette}
          services={SITE_CONFIG.services}
          onSelectService={handleSelectServiceFromCard}
        />

        {/* 7. Filterable Portfolio Bento Grid */}
        <PortfolioSection
          palette={activePalette}
          projects={SITE_CONFIG.projects}
          onOpenLightbox={(project) => setSelectedProject(project)}
        />

        {/* 8. Four-Stage Process Timeline */}
        <ProcessSection palette={activePalette} process={SITE_CONFIG.process} />

        {/* 9. Testimonials Carousel */}
        <TestimonialsSection
          palette={activePalette}
          testimonials={SITE_CONFIG.testimonials}
        />

        {/* 10. Transparent Investment Tiers */}
        <PricingSection
          palette={activePalette}
          pricing={SITE_CONFIG.pricing}
          onSelectPlan={handleSelectPlanFromPricing}
        />

        {/* 11. Contact Form, WhatsApp Desk, Map & Copy Triggers */}
        <ContactSection
          palette={activePalette}
          contact={contactData}
          prefilledService={prefilledService}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        palette={activePalette}
        studioName={businessData.name}
        tagline={businessData.tagline}
        socials={contactData.socials}
      />

      {/* 13. Lightbox Detail Modal */}
      <LightboxModal
        project={selectedProject}
        allProjects={SITE_CONFIG.projects}
        palette={activePalette}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      {/* 14. Live Customizer / Config Drawer & Standalone Exporter */}
      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        palette={activePalette}
        onSelectPalette={(id) => setCurrentPaletteId(id)}
        customBusiness={businessData}
        onUpdateBusiness={(updated) =>
          setBusinessData((prev) => ({ ...prev, ...updated }))
        }
        customContact={contactData}
        onUpdateContact={(updated) =>
          setContactData((prev) => ({ ...prev, ...updated }))
        }
      />
    </div>
  );
}
