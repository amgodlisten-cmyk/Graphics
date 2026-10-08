import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { ColorPalette } from '../config/siteConfig';

interface ContactSectionProps {
  palette: ColorPalette;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    address: string;
    hours: string;
    socials: Array<{ name: string; handle: string; url: string }>;
  };
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  palette,
  contact,
  prefilledService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledService || 'Brand Identity Systems',
    budget: '$5,000 – $10,000',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if prefilledService changes from parent click
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous clean booking receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span
            className="text-xs font-medium uppercase tracking-widest block mb-3"
            style={{ color: palette.accent }}
          >
            Initiate a Commission
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F5F1E8] tracking-tight">
            Let us build something unforgettable together.
          </h2>
          <p className="mt-4 text-base text-[#A29E93] leading-relaxed">
            Tell us about your brand vision, scope, and target launch date. We respond to all
            curated commission requests within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries, WhatsApp, Map & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Fast Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border transition-all duration-300 hover:scale-[1.01]"
                style={{
                  backgroundColor: palette.bgCard,
                  borderColor: palette.border,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      color: '#25D366',
                    }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white group-hover:text-white">
                      Instant WhatsApp Studio Desk
                    </h4>
                    <p className="text-xs text-[#A29E93]">Direct chat with Elena Vance</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A29E93] group-hover:text-white transition-colors" />
              </a>

              {/* Email Copy Card */}
              <div
                className="flex items-center justify-between p-5 rounded-xl border"
                style={{
                  backgroundColor: palette.bgCard,
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderColor: palette.border,
                      color: palette.accent,
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A29E93] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-white hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(contact.email, 'email')}
                  className="p-2 rounded-lg text-[#A29E93] hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / Office Card */}
              <div
                className="flex items-center justify-between p-5 rounded-xl border"
                style={{
                  backgroundColor: palette.bgCard,
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderColor: palette.border,
                      color: palette.accent,
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A29E93] block">
                      Studio Phone
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm font-medium text-white hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(contact.phone, 'phone')}
                  className="p-2 rounded-lg text-[#A29E93] hover:text-white transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Atelier Luxury Cartographic Visual (Map Placeholder) */}
            <div
              className="rounded-2xl border p-6 relative overflow-hidden shadow-xl"
              style={{
                backgroundColor: palette.bgCard,
                borderColor: palette.border,
              }}
            >
              {/* Minimalist Cartographic Coordinate Grids */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A29E93]">
                  <MapPin className="w-4 h-4" style={{ color: palette.accent }} />
                  <span>51.5194° N, 0.1360° W</span>
                </div>
                <span
                  className="text-[11px] uppercase tracking-wider font-semibold"
                  style={{ color: palette.accent }}
                >
                  London Atelier
                </span>
              </div>

              <div className="space-y-1 text-sm text-[#F5F1E8]">
                <p className="font-serif">{contact.address}</p>
                <p className="text-xs text-[#A29E93]">{contact.hours}</p>
              </div>

              {/* Styled Stylized Map Canvas */}
              <div className="mt-5 h-36 rounded-xl relative overflow-hidden bg-[#0A0D14] border border-white/10 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path
                        d="M 24 0 L 0 0 0 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  {/* Stylized river curve representing Thames */}
                  <path
                    d="M 0 90 Q 120 70 200 95 T 400 80"
                    fill="none"
                    stroke={palette.accent}
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                </svg>

                {/* Studio Location Pulse Marker */}
                <div className="relative flex items-center justify-center z-10">
                  <div
                    className="w-10 h-10 rounded-full animate-ping opacity-30 absolute"
                    style={{ backgroundColor: palette.accent }}
                  />
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-lg"
                    style={{ backgroundColor: palette.accent }}
                  />
                  <div className="ml-3 px-2.5 py-1 rounded-md bg-black/80 text-[11px] text-white border border-white/20 whitespace-nowrap">
                    Atelier Vance HQ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div
              className="rounded-2xl p-8 sm:p-10 border shadow-2xl relative"
              style={{
                backgroundColor: palette.bgCard,
                borderColor: palette.border,
              }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center border"
                    style={{
                      borderColor: palette.accent,
                      color: palette.accent,
                      backgroundColor: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-white">
                    Commission Request Received
                  </h3>
                  <p className="text-sm text-[#A29E93] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Elena
                    Vance and our lead designers will review your brief for{' '}
                    <span className="text-white font-medium">{formData.service}</span> and reach out
                    via <span className="text-white">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Brand Identity Systems',
                        budget: '$5,000 – $10,000',
                        message: '',
                      });
                    }}
                    className="mt-6 text-xs uppercase tracking-wider text-white underline hover:opacity-80"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif text-white mb-1">Commission Brief</h3>
                    <p className="text-xs text-[#A29E93]">
                      Please furnish details regarding your ambition and timeline.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A29E93] mb-2 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Thorne"
                        className="w-full px-4 py-3 rounded-lg border bg-[#0B0B0F]/60 text-white placeholder-white/20 text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A29E93] mb-2 font-medium">
                        Direct Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@domain.com"
                        className="w-full px-4 py-3 rounded-lg border bg-[#0B0B0F]/60 text-white placeholder-white/20 text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A29E93] mb-2 font-medium">
                        Primary Service Discipline
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border bg-[#0B0B0F] text-white text-sm focus:outline-none transition-colors cursor-pointer"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
                      >
                        <option value="Brand Identity Systems">Brand Identity Systems</option>
                        <option value="Bespoke Logos & Monograms">Bespoke Logos & Monograms</option>
                        <option value="Luxury Packaging & Print">Luxury Packaging & Print</option>
                        <option value="Editorial & Exhibition Posters">Editorial & Exhibition Posters</option>
                        <option value="Social Media & Launch Suites">Social Media & Launch Suites</option>
                        <option value="Digital Direction & UI/UX">Digital Direction & UI/UX</option>
                        <option value="Essential Identity ($2,800)">Package: Essential Identity</option>
                        <option value="Complete Brand Elevation ($5,400)">Package: Complete Brand Elevation</option>
                        <option value="Bespoke Atelier Retainer ($4,200/mo)">Package: Bespoke Atelier Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A29E93] mb-2 font-medium">
                        Estimated Investment Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border bg-[#0B0B0F] text-white text-sm focus:outline-none transition-colors cursor-pointer"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
                      >
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                        <option value="$25,000+">$25,000+ (Comprehensive Brand World)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A29E93] mb-2 font-medium">
                      Project Vision & Target Milestones *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your brand, existing aesthetic challenges, and what success looks like for this commission..."
                      className="w-full px-4 py-3 rounded-lg border bg-[#0B0B0F]/60 text-white placeholder-white/20 text-sm focus:outline-none transition-colors resize-none"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01]"
                    style={{
                      backgroundColor: palette.accent,
                      color: '#0B0B0F',
                    }}
                  >
                    {isSubmitting ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Commission Brief</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#A29E93]/70">
                    Confidentiality assured under standard reciprocal non-disclosure terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
