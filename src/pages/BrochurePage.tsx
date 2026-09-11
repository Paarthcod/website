import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, ExternalLink, Layers, Cpu, Zap, LineChart, Globe } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const BrochurePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 8;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      playClickSound();
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageTitles = [
    '01 // Cover Page',
    '02 // Who We Are',
    '03 // Services Ecosystem',
    '04 // How We Work',
    '05 // Digital Growth Stack',
    '06 // Portfolio Showcase',
    '07 // Growth & Maintenance',
    '08 // Contact & Engagement',
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-8 max-w-6xl mx-auto min-h-screen">
      {/* Top Controls & Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-[#DCD9D2]">
        <div>
          <div className="text-xs font-mono tracking-widest text-[#B7A98F] uppercase mb-1">
            AGENCY CAPABILITY STATEMENT & INFRASTRUCTURE SPECIFICATION
          </div>
          <h1 className="font-display text-2xl font-semibold text-[#171717]">
            Interactive 8-Page Brand Brochure
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg border border-[#DCD9D2] bg-white hover:bg-[#F5F3EE] text-[#171717] transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-[#B7A98F]" />
            PRINT / SAVE AS PDF
          </button>
        </div>
      </div>

      {/* Page Tabs Header */}
      <div className="flex items-center justify-between bg-white border border-[#DCD9D2] rounded-xl p-2 mb-8 overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {pageTitles.map((title, idx) => {
            const pageNum = idx + 1;
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                onMouseEnter={playHoverSound}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#171717] text-[#F5F3EE] font-semibold shadow-sm'
                    : 'text-[#6F6F6A] hover:text-[#171717] hover:bg-[#F5F3EE]'
                }`}
              >
                Page {pageNum}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[#DCD9D2] text-xs font-mono text-[#6F6F6A]">
          <span>{currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-1 rounded hover:bg-[#F5F3EE] disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-1 rounded hover:bg-[#F5F3EE] disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Printed Canvas Sheet Container */}
      <div className="print-canvas-wrapper shadow-2xl rounded-2xl overflow-hidden border border-[#DCD9D2] bg-[#F5F3EE] min-h-[750px] transition-all">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-14 relative flex flex-col justify-between min-h-[750px]"
          >
            {/* Sheet Background Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#DCD9D2_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            {/* PAGE 1: COVER PAGE */}
            {currentPage === 1 && (
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[640px]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#171717] text-[#F5F3EE] font-mono font-bold text-sm flex items-center justify-center">
                      K
                    </div>
                    <span className="font-display font-semibold text-lg tracking-wider text-[#171717]">
                      KINETIX<span className="text-[#B7A98F]">.</span>
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#6F6F6A] tracking-wider">
                    VOL. 2026 // PRIVATE DISTRIBUTION
                  </div>
                </div>

                {/* Center Hero Block */}
                <div className="my-auto py-12 max-w-3xl">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#B7A98F]/15 border border-[#B7A98F]/40 text-[#171717] font-mono text-xs font-medium mb-6">
                    CAPABILITY STATEMENT & SYSTEM ARCHITECTURE
                  </div>
                  <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717] leading-[1.08] mb-6">
                    Infrastructure for Digital Growth.
                  </h1>
                  <div className="w-24 h-[2px] bg-[#B7A98F] mb-6" />
                  <p className="text-lg sm:text-xl font-medium text-[#171717] mb-4">
                    Where Websites Become Business Assets.
                  </p>
                  <p className="text-[#6F6F6A] text-sm sm:text-base leading-relaxed max-w-2xl">
                    We engineer high-performance web systems, precision advertising pipelines, and scalable digital assets designed to convert attention into measurable enterprise value.
                  </p>
                </div>

                {/* Footer Tagline Badge */}
                <div className="flex items-center justify-between pt-6 border-t border-[#DCD9D2]">
                  <span className="text-xs font-mono text-[#6F6F6A]">
                    DIGITAL GROWTH PARTNER
                  </span>
                  <div className="px-4 py-2 rounded-lg bg-white/80 border border-[#B7A98F] text-[#171717] font-mono text-xs font-semibold shadow-sm">
                    Where Websites Become Business Assets.
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2: WHO WE ARE */}
            {currentPage === 2 && (
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">02 // FOUNDATION & POSITIONING</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">WHO WE ARE</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#171717] leading-tight">
                  We Build Digital Infrastructure, Not Disposable Marketing Pages.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="p-6 rounded-xl bg-white/80 border border-[#B7A98F]/50 backdrop-blur-sm">
                      <div className="text-xs font-mono text-[#B7A98F] uppercase mb-2">Our Core Philosophy</div>
                      <h3 className="font-display text-lg font-semibold text-[#171717] mb-2">The Asset Mindset</h3>
                      <p className="text-xs text-[#6F6F6A] leading-relaxed">
                        A website is not an item on a marketing checklist. It is the primary nexus of your customer acquisition, brand value, and digital operations. When engineered as a high-grade business asset, it compounds in value over time.
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-7 space-y-6">
                    <p className="text-sm text-[#6F6F6A] leading-relaxed">
                      Most websites are built as static digital brochures that decay the day they launch. We operate differently. We are a specialized digital growth partner that architects, engineers, and scales digital infrastructure for ambitious businesses.
                    </p>

                    <div className="space-y-4 pt-2">
                      <h4 className="font-display text-sm font-semibold text-[#171717] uppercase tracking-wider">
                        Why Businesses Work With Us
                      </h4>
                      <div className="space-y-3">
                        {[
                          { title: 'Engineering-Led Precision', desc: 'We replace subjective design opinion with conversion architecture, high-speed code, and structured schema.' },
                          { title: 'End-to-End Ecosystem Alignment', desc: 'We interconnect your core web platform with search indexing, tag analytics, ad networks, and local visibility.' },
                          { title: 'Zero Technical Debt', desc: 'Clean codebase, custom asset pipelines, and zero bloated page builders ensure maximum load speeds.' },
                          { title: 'Outcome-Driven Execution', desc: 'Every structural pixel serves a clear commercial objective: higher engagement and lead quality.' },
                        ].map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-lg bg-white border border-[#DCD9D2] flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#B7A98F] mt-0.5 shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-[#171717]">{item.title}</div>
                              <div className="text-[11px] text-[#6F6F6A] leading-normal">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 3: SERVICES ECOSYSTEM */}
            {currentPage === 3 && (
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">03 // CAPABILITIES</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">SERVICES ECOSYSTEM</span>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-semibold text-[#171717] mb-2">
                    A Unified Framework for Digital Dominance.
                  </h2>
                  <p className="text-xs text-[#6F6F6A] max-w-2xl">
                    Digital growth requires a synchronized technical engine. We organize our services into six interconnected capabilities to construct, refine, scale, and protect your digital assets.
                  </p>
                </div>

                {/* 6 Bento Grid Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {[
                    {
                      pillar: 'BUILD',
                      title: 'Core Asset Architecture',
                      icon: Cpu,
                      services: ['Business Websites', 'Custom Website Development', 'Landing Pages', 'Lead Generation Websites'],
                    },
                    {
                      pillar: 'OPTIMIZE',
                      title: 'Performance & Search',
                      icon: Zap,
                      services: ['Website Redesign', 'Technical SEO', 'On-Page SEO', 'Website Speed Optimization'],
                    },
                    {
                      pillar: 'GROW',
                      title: 'Customer Acquisition',
                      icon: LineChart,
                      services: ['Google Ads Campaigns', 'Meta Ads Management', 'Conversion Funnel Strategy', 'Lead Capture Architecture'],
                    },
                    {
                      pillar: 'MEASURE',
                      title: 'Intelligence & Analytics',
                      icon: Layers,
                      services: ['Google Analytics (GA4)', 'Google Tag Manager (GTM)', 'Custom Event Tracking', 'Data Layer Architecture'],
                    },
                    {
                      pillar: 'LOCAL PRESENCE',
                      title: 'Market Dominance',
                      icon: Globe,
                      services: ['Google Business Profile Setup', 'Local Search Optimization', 'Map Ranking Structure', 'Local Authority Building'],
                    },
                    {
                      pillar: 'MAINTAIN',
                      title: 'Asset Preservation',
                      icon: ShieldCheck,
                      services: ['Website Maintenance', 'Monthly Optimization', 'Security Patching', 'Ongoing Technical Support'],
                    },
                  ].map((block, idx) => {
                    const BlockIcon = block.icon;
                    return (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-[#DCD9D2] hover:border-[#B7A98F] transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#B7A98F]/20 text-[#171717]">
                            {block.pillar}
                          </span>
                          <BlockIcon className="w-4 h-4 text-[#B7A98F]" />
                        </div>
                        <h3 className="font-display text-sm font-semibold text-[#171717] mb-2">{block.title}</h3>
                        <ul className="space-y-1">
                          {block.services.map((s, i) => (
                            <li key={i} className="text-[11px] text-[#6F6F6A] flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#B7A98F]" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* PAGE 4: HOW WE WORK */}
            {currentPage === 4 && (
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">04 // METHODOLOGY</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">HOW WE WORK</span>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-semibold text-[#171717] mb-2">
                    Predictable Engineering. Zero Guesswork.
                  </h2>
                  <p className="text-xs text-[#6F6F6A] max-w-2xl">
                    We eliminate the friction, delays, and ambiguity traditional agencies introduce. Our four-stage execution framework moves your project seamlessly from discovery to compounding digital growth.
                  </p>
                </div>

                {/* 4 Sequential Stages */}
                <div className="relative pt-4 space-y-4">
                  <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-[#B7A98F]/40" />

                  {[
                    {
                      num: '01',
                      title: 'AUDIT & DISCOVERY',
                      bullets: ['Strategic Business Alignment', 'Technical Code & SEO Health Audit', 'Blueprint & Stack Specification'],
                    },
                    {
                      num: '02',
                      title: 'ARCHITECTURE & ENGINEERING',
                      bullets: ['Conversion UI/UX Design System', 'Custom Clean Web Development', 'SEO Schema & GTM Tracking Integration'],
                    },
                    {
                      num: '03',
                      title: 'DEPLOYMENT & LAUNCH',
                      bullets: ['Multi-Viewport Quality Assurance', 'Google Core Web Vitals Pass', 'Zero-Downtime Domain & SSL Migration'],
                    },
                    {
                      num: '04',
                      title: 'MEASUREMENT & COMPOUNDING',
                      bullets: ['Paid Ads Campaign Activation', 'Google Business Profile Expansion', 'Continuous Monthly Maintenance & Updates'],
                    },
                  ].map((stage, idx) => (
                    <div key={idx} className="relative pl-12">
                      <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-[#F5F3EE] border-2 border-[#B7A98F] text-[#171717] font-mono font-bold text-xs flex items-center justify-center z-10">
                        {stage.num}
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-[#DCD9D2]">
                        <h3 className="font-display text-sm font-semibold text-[#171717] mb-2">{stage.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {stage.bullets.map((b, i) => (
                            <div key={i} className="text-[11px] text-[#6F6F6A] bg-[#F5F3EE] p-2 rounded border border-[#DCD9D2]/60">
                              • {b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 5: DIGITAL GROWTH STACK */}
            {currentPage === 5 && (
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">05 // INTEGRATION</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">DIGITAL GROWTH STACK</span>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-semibold text-[#171717] mb-2">
                    How Our Growth Stack Operates as a Connected System.
                  </h2>
                  <p className="text-xs text-[#6F6F6A] max-w-3xl">
                    Isolated tactics yield weak results. A standalone website without SEO fails to attract traffic; ad campaigns without tracking waste capital. We construct your digital presence as a fully integrated technical stack where every layer reinforces the next.
                  </p>
                </div>

                {/* System Architecture Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {[
                    { num: '01', name: 'Business Website', tag: 'THE CORE ENGINE', desc: 'High-speed custom web code engineered for instant loading, visual authority, and conversion.' },
                    { num: '02', name: 'Technical & On-Page SEO', tag: 'DISCOVERY LAYER', desc: 'Clean site structure and schema markup ensure high organic keyword indexation.' },
                    { num: '03', name: 'Google Business Profile', tag: 'LOCAL BEACON', desc: 'Captures hyper-local search intent, routing local buyers to your high-conversion site.' },
                    { num: '04', name: 'Google & Meta Ads', tag: 'THE ACCELERATOR', desc: 'Drives immediate, targeted commercial traffic directly into your asset pipeline.' },
                    { num: '05', name: 'Google Tag Manager', tag: 'NERVOUS SYSTEM', desc: 'Captures every click, scroll, form submission, and call trigger without code clutter.' },
                    { num: '06', name: 'Google Analytics (GA4)', tag: 'THE BRAIN', desc: 'Processes raw data into actionable intelligence, tracking user retention and ROAS.' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#DCD9D2] relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-[#B7A98F]">{item.num}</span>
                        <span className="text-[9px] font-mono tracking-wider text-[#6F6F6A] bg-[#F5F3EE] px-2 py-0.5 rounded border border-[#DCD9D2]">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-display text-sm font-semibold text-[#171717] mb-1">{item.name}</h3>
                      <p className="text-[11px] text-[#6F6F6A] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 6: PORTFOLIO SHOWCASE */}
            {currentPage === 6 && (
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">06 // PROVEN WORK</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">PORTFOLIO SHOWCASE</span>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-semibold text-[#171717] mb-2">
                    Engineering Value Across Diverse Industries.
                  </h2>
                  <p className="text-xs text-[#6F6F6A]">
                    Serving Tours & Travels, Education, Retail, Construction, Real Estate, Healthcare, Fitness, Restaurants, Professional Services, Manufacturers, Startups, and Local Businesses.
                  </p>
                </div>

                {/* 3 Case Studies */}
                <div className="space-y-4">
                  {[
                    {
                      title: 'Renuka Tour & Travels',
                      url: 'renukatourandtravels.com',
                      link: 'https://www.renukatourandtravels.com/',
                      industry: 'Tours, Travels & Fleet Logistics',
                      challenge: 'Outdated legacy web layout with poor mobile responsiveness and fragmented itinerary presentation.',
                      solution: 'Engineered a modern, high-speed web application with structured tour packages and intuitive booking flows.',
                      changed: 'Established a clean brand presence that instills traveler confidence and streamlines customer inquiries.',
                    },
                    {
                      title: 'Mhatre Traders',
                      url: 'mhatretraders.com',
                      link: 'https://www.mhatretraders.com/',
                      industry: 'Retail, Wholesale & Material Distribution',
                      challenge: 'Lack of structured product catalog made it difficult for buyers to explore inventory or request quotes.',
                      solution: 'Built a clean commercial web portal with categorized product architecture and clear inquiry actions.',
                      changed: 'Transformed an offline presence into an organized digital catalog asset that elevates business credibility.',
                    },
                    {
                      title: 'Natyasastra Gurukulam',
                      url: 'natyasastragurukulam.org',
                      link: 'https://natyasastragurukulam.org/',
                      industry: 'Education, Cultural Institution & Academy',
                      challenge: 'Needed a balance between rich traditional heritage and clean, accessible modern navigation for global patrons.',
                      solution: 'Developed an elegant web experience with typographic refinement and structured curriculum display.',
                      changed: 'Created an authoritative digital portal that honors institutional heritage while simplifying international enrollments.',
                    },
                  ].map((proj, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-[#DCD9D2] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCD9D2]/60 pb-2">
                        <div>
                          <h3 className="font-display text-base font-semibold text-[#171717]">{proj.title}</h3>
                          <span className="text-[11px] font-mono text-[#6F6F6A]">{proj.industry}</span>
                        </div>
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono text-[#B7A98F] hover:underline"
                        >
                          {proj.url} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
                        <div className="bg-[#F5F3EE] p-3 rounded border border-[#DCD9D2]/60">
                          <span className="font-bold text-[#171717] block mb-1 uppercase text-[9px] font-mono">CHALLENGE</span>
                          <span className="text-[#6F6F6A]">{proj.challenge}</span>
                        </div>
                        <div className="bg-[#F5F3EE] p-3 rounded border border-[#DCD9D2]/60">
                          <span className="font-bold text-[#171717] block mb-1 uppercase text-[9px] font-mono">SOLUTION</span>
                          <span className="text-[#6F6F6A]">{proj.solution}</span>
                        </div>
                        <div className="bg-[#F5F3EE] p-3 rounded border border-[#DCD9D2]/60">
                          <span className="font-bold text-[#171717] block mb-1 uppercase text-[9px] font-mono">WHAT CHANGED</span>
                          <span className="text-[#6F6F6A]">{proj.changed}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 7: MONTHLY GROWTH & MAINTENANCE */}
            {currentPage === 7 && (
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">07 // ASSET PRESERVATION</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">MONTHLY GROWTH & MAINTENANCE</span>
                </div>

                {/* Dark Banner */}
                <div className="p-6 rounded-xl bg-[#111214] text-[#F5F3EE] space-y-2 border border-[#171717]">
                  <div className="text-xs font-mono text-[#B7A98F] uppercase">Continuous Care Philosophy</div>
                  <h2 className="font-display text-2xl font-semibold text-white">
                    Protecting & Compounding Your Digital Capital.
                  </h2>
                  <p className="text-xs text-[#B7A98F]/90 leading-relaxed max-w-3xl">
                    High-performing digital infrastructure is not a one-time static purchase. Software standards evolve, browser engines update, and customer search behaviors shift. Ongoing maintenance is asset insurance and compounding optimization.
                  </p>
                </div>

                {/* 5 Maintenance Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: '01 // Code Hygiene',
                      items: ['Proactive CMS / Core codebase updates', 'PHP, Node, & DB version maintenance', 'SSL renewal & security monitoring', 'Automated cloud backups & recovery'],
                    },
                    {
                      title: '02 // Speed Guardrails',
                      items: ['Core Web Vitals monitoring (LCP, CLS)', 'Image asset re-compression', 'Database query optimization', 'Script cleanup & caching'],
                    },
                    {
                      title: '03 // Search Protection',
                      items: ['Search Console crawl error resolution', 'Broken link & 301 redirect management', 'Google Business Profile updates', 'Local post indexing'],
                    },
                    {
                      title: '04 // Tag & Analytics Health',
                      items: ['GTM data layer integrity validation', 'GA4 conversion tracking audits', 'Ad platform pixel verification', 'Funnel drop-off analysis'],
                    },
                    {
                      title: '05 // Developer Support',
                      items: ['Dedicated support hours', 'Content & layout updates', 'Priority SLA response times', 'Continuous UX enhancements'],
                    },
                  ].map((card, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#DCD9D2]">
                      <h3 className="font-display text-xs font-semibold text-[#171717] mb-2">{card.title}</h3>
                      <ul className="space-y-1.5">
                        {card.items.map((item, i) => (
                          <li key={i} className="text-[11px] text-[#6F6F6A] flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#B7A98F] mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 8: CONTACT PAGE */}
            {currentPage === 8 && (
              <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
                  <span className="text-xs font-mono text-[#B7A98F]">08 // STRATEGIC ENGAGEMENT</span>
                  <span className="text-xs font-mono text-[#6F6F6A]">CONTACT & NEXT STEPS</span>
                </div>

                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#171717] mb-4 leading-tight">
                    Ready to Upgrade Your Digital Infrastructure?
                  </h2>
                  <p className="text-sm text-[#6F6F6A] leading-relaxed max-w-2xl">
                    Your web presence is either actively building business equity or quietly losing market share to competitors who invest in better systems. Let’s construct a digital growth asset engineered for long-term dominance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Direct Access Channels */}
                  <div className="p-6 rounded-xl bg-white border border-[#DCD9D2] space-y-4">
                    <h3 className="font-mono text-xs font-bold text-[#B7A98F] uppercase tracking-wider">
                      DIRECT ACCESS CHANNELS
                    </h3>
                    <div className="space-y-3 text-xs font-mono">
                      <div>
                        <div className="text-[10px] text-[#6F6F6A]">DIRECT INQUIRIES</div>
                        <div className="text-[#171717] font-semibold">hello@kinetixgrowth.com</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6F6A]">STRATEGY DESK</div>
                        <div className="text-[#171717] font-semibold">+1 (555) 019-2834 / +91 98765 43210</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6F6A]">DIGITAL PORTAL</div>
                        <div className="text-[#171717] font-semibold">www.kinetixgrowth.com</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: What Happens Next */}
                  <div className="p-6 rounded-xl bg-white border border-[#DCD9D2] space-y-4">
                    <h3 className="font-mono text-xs font-bold text-[#B7A98F] uppercase tracking-wider">
                      WHAT HAPPENS NEXT
                    </h3>
                    <ol className="space-y-3 text-xs">
                      <li className="flex items-start gap-2">
                        <span className="font-mono font-bold text-[#171717]">1.</span>
                        <div>
                          <strong className="text-[#171717]">Initial Discovery Call (20 Mins):</strong>
                          <span className="text-[#6F6F6A]"> We review your current digital assets, business targets, and key bottlenecks.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono font-bold text-[#171717]">2.</span>
                        <div>
                          <strong className="text-[#171717]">Technical & Growth Audit:</strong>
                          <span className="text-[#6F6F6A]"> We analyze code, SEO indexability, speed metrics, and ad tracking.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono font-bold text-[#171717]">3.</span>
                        <div>
                          <strong className="text-[#171717]">Custom Asset Proposal:</strong>
                          <span className="text-[#6F6F6A]"> We deliver a complete architecture blueprint, timeline, and execution plan.</span>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Final Brand Footer */}
                <div className="pt-6 border-t border-[#DCD9D2] text-center">
                  <div className="inline-block px-6 py-2 rounded-full border border-[#B7A98F] bg-white text-[#171717] font-display font-semibold text-sm">
                    Where Websites Become Business Assets.
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Sheet Footer Page Counter */}
            <div className="pt-6 border-t border-[#DCD9D2]/60 flex items-center justify-between text-[11px] font-mono text-[#6F6F6A]">
              <span>KINETIX DIGITAL INFRASTRUCTURE SPECIFICATION</span>
              <span>PAGE {currentPage} OF {totalPages}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Selector Footer */}
      <div className="flex items-center justify-between mt-8 text-xs font-mono">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#DCD9D2] bg-white text-[#171717] hover:bg-[#F5F3EE] disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" /> PREVIOUS PAGE
        </button>

        <span className="text-[#6F6F6A]">Use tabs or arrows to flip through pages</span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#DCD9D2] bg-[#171717] text-[#F5F3EE] hover:bg-[#171717]/90 disabled:opacity-40"
        >
          NEXT PAGE <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
