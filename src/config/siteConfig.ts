/**
 * =========================================================================
 * ✦ ATELIER VANCE — MASTER SITE CONFIGURATION ✦
 * =========================================================================
 * 
 * WELCOME! This configuration file controls all the text, contact details,
 * colors, services, portfolio items, and testimonials across your website.
 * 
 * HOW TO EDIT:
 * 1. Change any string in quotes (e.g., "Atelier Vance" -> "Your Studio Name").
 * 2. To add a project, duplicate an item in the `projects` array below.
 * 3. To switch color themes, change `currentPalette` from "gold" to "violet".
 * 
 * That's it! The entire site updates automatically.
 * =========================================================================
 */

export interface ColorPalette {
  id: 'gold' | 'violet';
  name: string;
  bgDark: string;       // Main deep background
  bgCard: string;       // Surface cards and modals
  bgCardHover: string;  // Subtle highlight on card hover
  accent: string;       // Primary highlight (Gold or Electric Violet)
  accentHover: string;  // Hover state for primary action buttons
  accentMuted: string;  // Transparent tint for subtle glowing borders
  textPrimary: string;  // Crisp headlines and text
  textMuted: string;    // Subtitles and quiet metadata
  border: string;       // Hairline borders
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'branding' | 'logos' | 'posters' | 'social' | 'packaging';
  categoryLabel: string;
  client: string;
  year: string;
  summary: string;
  image: string;
  aspectRatio?: string;
  description: string;
  deliverables: string[];
  metrics?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  isPopular?: boolean;
  timeline: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export const SITE_CONFIG = {
  // -----------------------------------------------------------------------
  // 1. THEME PALETTES (Option A: Gold & Noir | Option B: Navy & Electric Violet)
  // -----------------------------------------------------------------------
  currentPalette: 'gold' as 'gold' | 'violet', // Choose: 'gold' or 'violet'

  palettes: {
    gold: {
      id: 'gold',
      name: 'Option A: Noir & Warm Gold',
      bgDark: '#0B0B0F',
      bgCard: '#13131A',
      bgCardHover: '#1A1A24',
      accent: '#C9A24D',
      accentHover: '#E5BF65',
      accentMuted: 'rgba(201, 162, 77, 0.15)',
      textPrimary: '#F5F1E8',
      textMuted: '#A29E93',
      border: 'rgba(201, 162, 77, 0.20)',
    },
    violet: {
      id: 'violet',
      name: 'Option B: Midnight Navy & Electric Violet',
      bgDark: '#0A1128',
      bgCard: '#101B3E',
      bgCardHover: '#162452',
      accent: '#7C5CFF',
      accentHover: '#957AFF',
      accentMuted: 'rgba(124, 92, 255, 0.18)',
      textPrimary: '#F7F7FB',
      textMuted: '#A5AABF',
      border: 'rgba(124, 92, 255, 0.22)',
    },
  } as Record<string, ColorPalette>,

  // -----------------------------------------------------------------------
  // 2. BUSINESS DETAILS & CORE BRAND IDENTITY
  // -----------------------------------------------------------------------
  business: {
    name: 'Atelier Vance',
    founder: 'Elena Vance',
    role: 'Principal Creative Director & Graphic Artist',
    badge: 'Available for Select Q3/Q4 Commissions',
    tagline: 'We turn ambitious ideas into unforgettable visuals',
    heroHeadlinePart1: 'Crafting Indelible',
    heroHeadlineHighlight: 'Visual Identities',
    heroHeadlinePart2: 'For Visionary Brands.',
    heroSubtext:
      'A boutique graphic design and brand direction atelier. We fuse architectural rigor, Swiss typography discipline, and high-fashion sensibility to elevate brands that refuse to be ignored.',
    location: 'London, UK · Global Remote Commissions',
    status: 'Bookings Open',
  },

  // -----------------------------------------------------------------------
  // 3. CONTACT & SOCIAL CHANNELS
  // -----------------------------------------------------------------------
  contact: {
    email: 'commissions@ateliervance.design',
    phone: '+44 20 7946 0921',
    whatsappNumber: '442079460921', // Country code without '+' or spaces for direct link
    whatsappMessage:
      'Hello Atelier Vance! I would love to discuss a graphic design commission for my brand.',
    address: '71 Charlotte Street, Fitzrovia, London W1T 4QG',
    hours: 'Monday – Friday, 9:00 AM – 6:00 PM GMT',
    socials: [
      { name: 'Instagram', handle: '@atelier.vance', url: 'https://instagram.com' },
      { name: 'Behance', handle: 'ateliervance', url: 'https://behance.net' },
      { name: 'Dribbble', handle: 'atelier-vance', url: 'https://dribbble.com' },
      { name: 'LinkedIn', handle: 'Elena Vance', url: 'https://linkedin.com' },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. KEY METRICS & PROOF
  // -----------------------------------------------------------------------
  stats: [
    { value: 140, suffix: '+', label: 'Curated Projects Delivered', sublabel: 'Across 18 Countries' },
    { value: 98, suffix: '%', label: 'Client Retention & Advocacy', sublabel: 'High-Touch Advisory' },
    { value: 8, suffix: '+', label: 'Years of Creative Mastery', sublabel: 'Excellence in Craft' },
    { value: 14, suffix: '', label: 'International Design Awards', sublabel: 'Awwwards & TDC Honors' },
  ],

  // -----------------------------------------------------------------------
  // 5. SERVICES
  // -----------------------------------------------------------------------
  services: [
    {
      id: 'branding',
      number: '01',
      title: 'Brand Identity Systems',
      tagline: 'Comprehensive visual architecture and brand ecosystems',
      description:
        'Complete identity foundations from logo marks and bespoke typography pairings to color theory, grid specifications, and comprehensive brand guideline books.',
      deliverables: [
        'Primary & Secondary Wordmarks',
        'Bespoke Brand Styleguide (50+ pages)',
        'Typography Hierarchy & Color Suites',
        'Stationery & Digital Assets',
      ],
      timeline: '4 – 6 Weeks',
      iconName: 'Sparkles',
    },
    {
      id: 'logos',
      number: '02',
      title: 'Bespoke Logos & Monograms',
      tagline: 'Distinctive iconography engineered for timeless memorability',
      description:
        'Iconic emblems, custom monograms, and minimalist wordmarks drawn with mathematical precision, balancing modern reduction with emotional gravity.',
      deliverables: [
        'Vector Marks (SVG, EPS, AI)',
        'Favicon & Social Avatar Kit',
        'Clear Space & Minimum Scale Rules',
        'Full Commercial Copyright Transfer',
      ],
      timeline: '2 – 3 Weeks',
      iconName: 'PenTool',
    },
    {
      id: 'packaging',
      number: '03',
      title: 'Luxury Packaging & Print',
      tagline: 'Tactile, high-end packaging that dominates retail shelves',
      description:
        'Structural box designs, bottle labels, bespoke hot-foil stamping, embossed textures, and premium tactile finishes crafted for fragrance, spirits, and luxury goods.',
      deliverables: [
        'Dieline Preparation & Print Spec',
        'Embossing & Foil Stamp Finishes',
        'Material & Paper Substrate Sourcing',
        'Photorealistic 3D Render Mockups',
      ],
      timeline: '3 – 5 Weeks',
      iconName: 'PackageCheck',
    },
    {
      id: 'posters',
      number: '04',
      title: 'Editorial & Exhibition Posters',
      tagline: 'Swiss-inspired layouts with arresting typographic weight',
      description:
        'Collector-grade posters, museum exhibition collateral, limited-edition vinyl sleeves, and architectural brochures built upon rigorous typographic grids.',
      deliverables: [
        'Large Format CMYK Print Files',
        'Bespoke Grid Layout System',
        'Archival Paper Recommendations',
        'Digital Screen Adaptations',
      ],
      timeline: '1 – 2 Weeks',
      iconName: 'Layers',
    },
    {
      id: 'social',
      number: '05',
      title: 'Social Media & Launch Suites',
      tagline: 'Cohesive campaign assets tailored for high-conversion engagement',
      description:
        'Curated Instagram grid systems, animated story templates, LinkedIn executive carousels, and motion snippets that uphold your brand luxury standard everywhere.',
      deliverables: [
        '30+ Editable Figma / Canva Templates',
        'Motion Teasers (MP4 / GIF)',
        'Story & Reel Cover Systems',
        'Asset Export Guidelines',
      ],
      timeline: '2 – 3 Weeks',
      iconName: 'LayoutGrid',
    },
    {
      id: 'uiux',
      number: '06',
      title: 'Digital Direction & UI/UX',
      tagline: 'Sculpted web aesthetics that turn visitors into devoted patrons',
      description:
        'Award-winning web interfaces, editorial landing pages, and digital brand experiences designed with fluid micro-interactions and cinematic presence.',
      deliverables: [
        'Full Responsive Figma Prototypes',
        'Component Library & Design Tokens',
        'Micro-interaction Choreography',
        'Developer Handoff Documentation',
      ],
      timeline: '4 – 7 Weeks',
      iconName: 'Compass',
    },
  ] as ServiceItem[],

  // -----------------------------------------------------------------------
  // 6. PORTFOLIO PROJECTS (EDITABLE ARRAY)
  // -----------------------------------------------------------------------
  projects: [
    {
      id: 'lumina-parfums',
      title: 'Lumina Haute Parfumerie',
      category: 'branding',
      categoryLabel: 'Brand Identity',
      client: 'Lumina Laboratories, Paris',
      year: '2026',
      summary: 'Complete brand architecture, bespoke monogram, and gold-foiled packaging for high-end niche perfumery.',
      image: '/src/assets/images/project_luxury_branding_1791446718133.jpg',
      description:
        'Lumina required a visual identity that echoed the ethereal nature of raw iris and ambergris. We developed a custom high-contrast serif typeface, paired with matte frosted obsidian glass containers and blind-debossed cotton paper packaging.',
      deliverables: ['Identity System', 'Monogram Design', 'Bottle Dielines', 'Printed Lookbook', 'Retail Packaging'],
      metrics: '340% increase in luxury boutique wholesale inquiries within first 90 days.',
    },
    {
      id: 'bauhaus-exhibition',
      title: 'Chronos Modernist Exhibition',
      category: 'posters',
      categoryLabel: 'Posters & Editorial',
      client: 'Zurich Center for Architecture',
      year: '2026',
      summary: 'Avant-garde typographic poster series and archival publication catalog celebrating Swiss typography.',
      image: '/src/assets/images/project_editorial_posters_1791446731701.jpg',
      description:
        'Commissioned by the Zurich Center for Architecture, this collection investigates tensions between algorithmic space and modernist grid structures. Hand-printed silk-screen posters with copper pigment on 350gsm G.F Smith paper.',
      deliverables: ['Exhibition Posters', '240-Page Hardcover Monograph', 'Gallery Signage', 'Motion Typography'],
      metrics: 'Selected for the International Typographic Biennale 2026.',
    },
    {
      id: 'botanique-apothecary',
      title: 'Botanique Rare Spirits & Elixirs',
      category: 'packaging',
      categoryLabel: 'Packaging',
      client: 'Distillerie de la Haute-Vallée',
      year: '2025',
      summary: 'Architectural label geometry, hand-engraved seals, and embossed gift packaging for small-batch spirits.',
      image: '/src/assets/images/project_botanical_packaging_1791446742210.jpg',
      description:
        'Each bottle features a unique numbered label with micro-embossed botanical illustrations inspired by 18th-century medicinal herbarium folios. Designed with FSC-certified recycled fiber and biodegradable hot-foil accents.',
      deliverables: ['Spirits Label Design', 'Custom Wooden Box Casings', 'Embossed Wax Seal Mark', 'Brand Narrative Book'],
      metrics: 'Sold out first limited batch of 5,000 bottles in under 48 hours.',
    },
    {
      id: 'atelier-heritage',
      title: 'Vance Archive & Atelier Identity',
      category: 'logos',
      categoryLabel: 'Logo & Monograms',
      client: 'Elena Vance Personal Archive',
      year: '2026',
      summary: 'Bespoke geometric monogram and editorial stationery system crafted for internal design monographs.',
      image: '/src/assets/images/hero_design_atelier_1791446678179.jpg',
      description:
        'An exercise in extreme reduction. A bespoke monogram formed from golden ratio proportions, engineered to hold legibility at both 8-millimeter jewelry stamps and 6-meter architectural facade engravings.',
      deliverables: ['Primary Emblem', 'Sub-Marks', 'Wax Seal Matrix', 'Archival Emboss Stamp'],
      metrics: 'Over 25,000 saves on typographic reference boards.',
    },
    {
      id: 'aurora-digital',
      title: 'Aura Spatial Acoustics',
      category: 'social',
      categoryLabel: 'Social Media',
      client: 'Aura Sound Lab, Copenhagen',
      year: '2025',
      summary: 'High-concept launch assets, generative soundwave graphics, and cohesive social campaign ecosystem.',
      image: '/src/assets/images/about_designer_portrait_1791446705569.jpg',
      description:
        'Crafted a cinematic multi-channel social launch for Nordic spatial audio hardware. Combining raw studio photography with minimalist line-drawn frequency graphs and micro-kinetic typography.',
      deliverables: ['Instagram Launch Grid', 'LinkedIn Editorial Teasers', 'Soundwave Brand Graphics', 'Motion Stories'],
      metrics: '+180,000 organic impressions in launch week with 9.2% engagement rate.',
    },
    {
      id: 'velour-atelier',
      title: 'Velour Haute Joaillerie',
      category: 'branding',
      categoryLabel: 'Brand Identity',
      client: 'Velour Fine Jewelry, Geneva',
      year: '2025',
      summary: 'End-to-end luxury identity, cert packaging, and digital lookbook for bespoke diamond ateliers.',
      image: '/src/assets/images/project_luxury_branding_1791446718133.jpg',
      description:
        'A discreet, ultra-luxurious visual suite for bespoke gemologists. Features custom-dyed dark velvet boxes, gold leaf warranty certificates, and an intimate editorial catalog printed on handmade Japanese washi paper.',
      deliverables: ['High-Jewelry Visual Identity', 'Certificate of Authenticity Design', 'Jewelry Box Liners', 'Digital Lookbook'],
      metrics: 'Acquired 12 private royal commissions post-rebrand.',
    },
  ] as ProjectItem[],

  // -----------------------------------------------------------------------
  // 7. OUR 4-STEP DESIGN PROCESS
  // -----------------------------------------------------------------------
  process: [
    {
      step: '01',
      title: 'Discovery & Strategic Brief',
      duration: 'Week 1',
      description:
        'We immerse ourselves in your brand heritage, market positioning, audience psychology, and aspirational benchmarks. We distill the core emotional truth of your enterprise into a clear Creative Direction Blueprint.',
      deliverable: 'Creative Direction & Strategy Document',
    },
    {
      step: '02',
      title: 'Concept & Aesthetic Exploration',
      duration: 'Week 2 – 3',
      description:
        'We develop 2 to 3 sharply differentiated, museum-grade aesthetic routes. Each route is presented with custom typography tests, color harmonies, real-world mockups, and tactile material studies.',
      deliverable: 'Interactive Concept Presentations & Moodboards',
    },
    {
      step: '03',
      title: 'Refinement & Precision Craft',
      duration: 'Week 4 – 5',
      description:
        'Once the winning concept is chosen, we polish every contour to mathematical perfection. We obsess over kerning, optical balancing, micro-embossing specs, print dielines, and responsive digital states.',
      deliverable: 'Comprehensive Production Specifications & Reviews',
    },
    {
      step: '04',
      title: 'Delivery & Brand Custodianship',
      duration: 'Week 6',
      description:
        'You receive your master design archive: organized vector assets in every format (AI, EPS, SVG, PDF, PNG), an exhaustive brand guideline manual, and a personal handoff walk-through.',
      deliverable: 'Master Production Archive & Forever License',
    },
  ],

  // -----------------------------------------------------------------------
  // 8. TESTIMONIALS
  // -----------------------------------------------------------------------
  testimonials: [
    {
      id: 'test-1',
      quote:
        'Working with Elena and Atelier Vance was transformative. They didn’t just design a logo; they created a visual universe that allowed our perfume house to command €280 per bottle without hesitation.',
      author: 'Camille Delacroix',
      role: 'Creative Director & Founder',
      company: 'Lumina Haute Parfumerie',
      location: 'Paris, France',
      rating: 5,
    },
    {
      id: 'test-2',
      quote:
        'The level of craft and typography sophistication is unmatched. Our architectural exhibition posters became collectors items that people were literally buying right off the gallery walls.',
      author: 'Dr. Henrik Lindqvist',
      role: 'Head of Curatorial Affairs',
      company: 'Zurich Center for Architecture',
      location: 'Zurich, Switzerland',
      rating: 5,
    },
    {
      id: 'test-3',
      quote:
        'Atelier Vance operates with an elegance and promptness rare in the creative world. The packaging they engineered for our small-batch spirits drove immediate retail placement in Harrods and Selfridges.',
      author: 'Julian Thorne',
      role: 'Master Distiller',
      company: 'Botanique Spirits',
      location: 'Edinburgh, UK',
      rating: 5,
    },
    {
      id: 'test-4',
      quote:
        'Rarely do you find a designer who balances classic editorial refinement with modern digital acuity so effortlessly. Every single asset delivered was flawless.',
      author: 'Sophia Chen',
      role: 'Managing Partner',
      company: 'Vanguard Venture Capital',
      location: 'San Francisco & London',
      rating: 5,
    },
  ] as TestimonialItem[],

  // -----------------------------------------------------------------------
  // 9. PRICING & INVESTMENT TIERS
  // -----------------------------------------------------------------------
  pricing: [
    {
      id: 'essentials',
      name: 'Essential Identity',
      tagline: 'Ideal for emerging boutique enterprises requiring flawless foundations.',
      price: '$2,800',
      timeline: '2 – 3 Weeks',
      features: [
        'Primary, secondary, and sub-mark vector logos',
        'Curated typography hierarchy & font licenses advice',
        'Custom 6-shade luxury color palette',
        'Essential stationery suite (Business cards & letterhead)',
        '30-page Brand Architecture Guidelines (PDF)',
        'Full commercial copyright transfer',
      ],
    },
    {
      id: 'signature',
      name: 'Complete Brand Elevation',
      tagline: 'Our signature full-spectrum brand design and collateral system.',
      price: '$5,400',
      isPopular: true,
      timeline: '4 – 6 Weeks',
      features: [
        'Everything in Essential Identity',
        'Bespoke monogram & custom icon set',
        'Packaging dielines or comprehensive digital marketing suite',
        'Complete social media launch pack (20+ editable templates)',
        'Print production supervision & paper sourcing',
        '65-page Master Brand Book + Interactive Figma kit',
        'Dedicated 60-day post-launch creative support',
      ],
    },
    {
      id: 'retainer',
      name: 'Bespoke Atelier Retainer',
      tagline: 'Dedicated monthly creative direction for established luxury leaders.',
      price: '$4,200 /mo',
      timeline: 'Ongoing Partnership',
      features: [
        'Dedicated monthly allocation of 35 design hours',
        'New campaign concepts, seasonal packaging, & posters',
        'Priority 48-hour turnarounds for key requests',
        'Bi-weekly strategic brand advisory calls with Elena',
        'Digital art direction and print vendor management',
        'Unlimited minor revisions and asset exports',
      ],
    },
  ] as PricingPlan[],

  // -----------------------------------------------------------------------
  // 10. FREQUENTLY ASKED QUESTIONS
  // -----------------------------------------------------------------------
  faqs: [
    {
      question: 'What is your typical turnaround timeline for an identity project?',
      answer:
        'Most comprehensive brand identity projects take between 4 to 6 weeks from kick-off to final asset handoff. We take on a strictly limited number of clients per quarter to ensure focused, artisanal attention on every detail.',
    },
    {
      question: 'Do you provide print production supervision?',
      answer:
        'Yes. We prepare print-ready press files according to ISO commercial standards, specify foil blocking dies, spot UV masks, and embossing vectors, and can liaise directly with your chosen fine-art printmaker.',
    },
    {
      question: 'What formats will I receive upon project completion?',
      answer:
        'You receive an organized master archive containing all source files in vector (AI, EPS, SVG), print-ready CMYK PDFs with crop marks, and high-resolution web formats (PNG, WebP, JPG) alongside an interactive Figma design kit.',
    },
    {
      question: 'How do payments and milestones work?',
      answer:
        'Standard engagements require a 50% commencement retainer to secure studio calendar time, with the remaining 50% payable upon final approval prior to master asset archive delivery.',
    },
  ],
};
