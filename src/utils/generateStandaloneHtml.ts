import { SITE_CONFIG } from '../config/siteConfig';

/**
 * Generates a complete, single-file HTML document (HTML + CSS + JS together)
 * that opens directly in any modern browser without npm or server setup.
 */
export function generateStandaloneHtml(customConfig = SITE_CONFIG): string {
  const currentPal = customConfig.palettes[customConfig.currentPalette] || customConfig.palettes.gold;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${customConfig.business.name} — Graphic Design & Brand Identity</title>
  <meta name="description" content="${customConfig.business.heroSubtext}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          },
          colors: {
            brand: '${currentPal.accent}',
            dark: '${currentPal.bgDark}',
            card: '${currentPal.bgCard}',
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: ${currentPal.bgDark};
      color: ${currentPal.textPrimary};
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      overflow-x: hidden;
    }
    h1, h2, h3, .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: ${currentPal.bgDark}; }
    ::-webkit-scrollbar-thumb { background: #2A2A36; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: ${currentPal.accent}; }
  </style>
</head>
<body class="selection:bg-[${currentPal.accent}] selection:text-[${currentPal.bgDark}]">

  <!-- NAVBAR -->
  <header class="fixed top-0 left-0 right-0 z-40 py-5 bg-[${currentPal.bgDark}]/90 backdrop-blur-md border-b border-white/10">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a href="#top" class="text-2xl font-serif text-white">${customConfig.business.name}</a>
      <nav class="hidden md:flex items-center gap-8 text-sm text-[#A29E93]">
        <a href="#portfolio" class="hover:text-white transition">Work</a>
        <a href="#about" class="hover:text-white transition">About</a>
        <a href="#services" class="hover:text-white transition">Services</a>
        <a href="#process" class="hover:text-white transition">Process</a>
        <a href="#pricing" class="hover:text-white transition">Pricing</a>
        <a href="#contact" class="hover:text-white transition">Contact</a>
      </nav>
      <a href="#contact" class="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded bg-[${currentPal.accent}] text-[${currentPal.bgDark}] hover:opacity-90 transition">
        Get a Quote
      </a>
    </div>
  </header>

  <!-- HERO -->
  <section id="top" class="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative">
    <div class="max-w-4xl mx-auto text-center">
      <div class="text-xs uppercase tracking-widest text-[${currentPal.accent}] mb-4">
        ${customConfig.business.location} · ${customConfig.business.status}
      </div>
      <h1 class="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-tight">
        ${customConfig.business.heroHeadlinePart1}
        <span class="italic text-[${currentPal.accent}]">${customConfig.business.heroHeadlineHighlight}</span>
        ${customConfig.business.heroHeadlinePart2}
      </h1>
      <p class="mt-6 text-lg text-[#A29E93] max-w-2xl mx-auto leading-relaxed">
        ${customConfig.business.heroSubtext}
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#portfolio" class="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold bg-[${currentPal.accent}] text-[${currentPal.bgDark}]">
          View Selected Work
        </a>
        <a href="#contact" class="px-6 py-3.5 rounded text-xs uppercase tracking-wider border border-white/20 text-white hover:bg-white/5">
          Get a Quote
        </a>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="py-24 px-6 border-t border-white/10">
    <div class="max-w-5xl mx-auto">
      <div class="text-xs uppercase tracking-widest text-[${currentPal.accent}] mb-3">About the Atelier</div>
      <h2 class="text-3xl sm:text-4xl font-serif text-white max-w-2xl mb-12">
        Uncompromising visual standards for founders who refuse mediocrity.
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-center">
        ${customConfig.stats.map(s => `
          <div>
            <div class="text-4xl font-serif text-white">${s.value}${s.suffix}</div>
            <div class="text-xs text-[#A29E93] mt-1">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="py-24 px-6 border-t border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="text-xs uppercase tracking-widest text-[${currentPal.accent}] mb-3">Our Capabilities</div>
      <h2 class="text-3xl sm:text-4xl font-serif text-white mb-12">Precision disciplines built for brand impact.</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${customConfig.services.map(s => `
          <div class="p-6 rounded-xl border border-white/10 bg-[${currentPal.bgCard}]">
            <span class="text-xs font-mono text-[${currentPal.accent}]">${s.number}</span>
            <h3 class="text-xl font-serif text-white mt-2">${s.title}</h3>
            <p class="text-xs text-[#A29E93] mt-3 leading-relaxed">${s.description}</p>
            <div class="mt-4 pt-4 border-t border-white/5 text-xs text-white/60">
              Timeline: ${s.timeline}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section id="portfolio" class="py-24 px-6 border-t border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="text-xs uppercase tracking-widest text-[${currentPal.accent}] mb-3">Portfolio</div>
      <h2 class="text-3xl sm:text-4xl font-serif text-white mb-12">Selected commissioned case studies.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${customConfig.projects.map(p => `
          <div class="rounded-xl border border-white/10 bg-[${currentPal.bgCard}] overflow-hidden group">
            <img src="${p.image}" alt="${p.title}" class="w-full h-56 object-cover group-hover:scale-105 transition duration-500" loading="lazy">
            <div class="p-5">
              <span class="text-xs text-[${currentPal.accent}]">${p.categoryLabel} · ${p.year}</span>
              <h3 class="text-lg font-serif text-white mt-1">${p.title}</h3>
              <p class="text-xs text-[#A29E93] mt-2">${p.summary}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="py-24 px-6 border-t border-white/10">
    <div class="max-w-4xl mx-auto text-center">
      <div class="text-xs uppercase tracking-widest text-[${currentPal.accent}] mb-3">Start a Conversation</div>
      <h2 class="text-3xl sm:text-4xl font-serif text-white mb-6">Let's craft your next visual milestone.</h2>
      <p class="text-sm text-[#A29E93] mb-8">
        Email: <a href="mailto:${customConfig.contact.email}" class="text-white underline">${customConfig.contact.email}</a> · 
        Phone: ${customConfig.contact.phone}
      </p>
      <a href="https://wa.me/${customConfig.contact.whatsappNumber}?text=${encodeURIComponent(customConfig.contact.whatsappMessage)}" 
         class="inline-block px-6 py-3 rounded text-xs uppercase tracking-wider font-semibold bg-[#25D366] text-black">
        Chat via WhatsApp Desk
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-12 px-6 border-t border-white/10 text-center text-xs text-[#A29E93]">
    <div class="text-lg font-serif text-white mb-2">${customConfig.business.name}</div>
    <p>&copy; ${new Date().getFullYear()} ${customConfig.business.name}. All rights reserved.</p>
  </footer>

</body>
</html>`;
}
