import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowUpRight, X, Grid, Sparkles, Layers, Cpu, Code2, Globe } from 'lucide-react';
import { toggleSound, getSoundEnabled, playHoverSound, playClickSound } from '../../utils/audio';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [audioMuted, setAudioMuted] = useState(!getSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const isEnabled = toggleSound();
    setAudioMuted(!isEnabled);
    if (isEnabled) playClickSound();
  };

  const navItems = [
    { id: 'home', label: 'HOME', code: '01', desc: 'Core Agency Infrastructure', visual: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { id: 'about', label: 'ABOUT', code: '02', desc: 'Studio Manifesto & Philosophy', visual: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { id: 'projects', label: 'WORK', code: '03', desc: 'Selected Digital Asset Portfolio', visual: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop' },
    { id: 'services', label: 'SERVICES', code: '04', desc: 'Ecosystem & Engineering Capabilities', visual: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop' },
    { id: 'process', label: 'PROCESS', code: '05', desc: 'Predictable 4-Stage Framework', visual: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { id: 'brochure', label: 'BROCHURE', code: '06', desc: 'Capability Specification PDF', visual: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
    { id: 'contact', label: 'CONTACT', code: '07', desc: 'Strategic Project Consultation', visual: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleNavClick = (id: string) => {
    playClickSound();
    setActiveTab(id);
    setIndexOpen(false);
    
    // Smooth scroll for in-page anchors if on home tab
    if (id === 'projects' || id === 'services' || id === 'process') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Asymmetric Header Navigation Rail */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#F4F1EA]/90 backdrop-blur-xl border-b border-[#B8B3A9]/40 shadow-sm'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Top-Left: Minimal Architectural Brand Mark */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick('home')}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-3 group text-left"
              data-cursor="KINETIX"
            >
              <div className="w-7 h-7 rounded bg-[#242321] text-[#F4F1EA] font-mono font-bold text-xs flex items-center justify-center border border-[#918B80]/40 group-hover:bg-[#737565] transition-colors">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-base tracking-wider text-[#242321] group-hover:text-[#737565] transition-colors">
                  KINETIX<span className="text-[#9A8064]">.</span>
                </span>
                <span className="text-[9px] font-mono text-[#918B80] tracking-widest uppercase hidden sm:inline-block">
                  CREATIVE TECH STUDIO / 2026
                </span>
              </div>
            </button>
          </div>

          {/* Center-Right Asymmetric Controls */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Audio Feedback Controller */}
            <button
              onClick={handleAudioToggle}
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full border border-[#B8B3A9]/50 bg-[#F4F1EA]/80 text-[#918B80] hover:text-[#242321] hover:border-[#737565] transition-all"
              title={audioMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#737565]" />}
            </button>

            {/* INDEX TRIGGER BUTTON (Sections 08 & 09) */}
            <button
              onClick={() => {
                playClickSound();
                setIndexOpen(!indexOpen);
              }}
              onMouseEnter={playHoverSound}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono tracking-widest uppercase transition-all shadow-sm ${
                indexOpen
                  ? 'bg-[#242321] text-[#F4F1EA] border-[#242321]'
                  : 'bg-[#F4F1EA]/80 border-[#B8B3A9] text-[#242321] hover:border-[#737565] hover:bg-[#E5E1D8]'
              }`}
              data-cursor="INDEX"
            >
              <Grid className={`w-3.5 h-3.5 ${indexOpen ? 'text-[#9A8064]' : 'text-[#737565]'}`} />
              <span>{indexOpen ? 'CLOSE INDEX' : 'INDEX'}</span>
            </button>

            {/* START A PROJECT BUTTON */}
            <button
              onClick={() => handleNavClick('contact')}
              onMouseEnter={playHoverSound}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#242321] text-[#F4F1EA] hover:bg-[#737565] active:bg-[#A47F68] font-semibold text-xs tracking-wider uppercase transition-all hover:scale-[1.03] shadow-sm"
              data-cursor="START"
            >
              <span>START PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#9A8064]" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN EXPERIMENTAL "SITE INDEX" OVERLAY (Prompt Section 09) */}
      <AnimatePresence>
        {indexOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#151514] text-[#F4F1EA] flex flex-col justify-between p-8 sm:p-16 overflow-hidden"
          >
            {/* Background Preview Canvas Reveal on Hover */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-all duration-700">
              {hoveredIndex && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.35, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-cover bg-center filter grayscale contrast-125"
                  style={{
                    backgroundImage: `url(${navItems.find((n) => n.id === hoveredIndex)?.visual})`,
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151514] via-[#151514]/70 to-transparent" />
            </div>

            {/* Top Index Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#B8B3A9]/20 pb-6 pt-20">
              <div className="text-xs font-mono text-[#9A8064] tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SITE INDEX & SYSTEM ARCHITECTURE</span>
              </div>
              <div className="text-xs font-mono text-[#918B80] tracking-widest">
                KINETIX // 2026
              </div>
            </div>

            {/* Giant Editorial Nav Menu List */}
            <div className="relative z-10 my-auto py-8 space-y-2 max-w-5xl">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.div
                    key={item.id}
                    onMouseEnter={() => {
                      playHoverSound();
                      setHoveredIndex(item.id);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleNavClick(item.id)}
                    className="group cursor-pointer flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#B8B3A9]/10 py-3 transition-colors"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-mono text-xs sm:text-sm text-[#9A8064] tracking-widest">
                        {item.code}
                      </span>
                      <h2
                        className={`font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-[#F4F1EA] underline decoration-[#9A8064] underline-offset-8'
                            : 'text-[#918B80] group-hover:text-[#F4F1EA] group-hover:translate-x-3'
                        }`}
                      >
                        {item.label}
                      </h2>
                    </div>

                    <div className="text-xs font-mono text-[#918B80] group-hover:text-[#737565] transition-colors mt-1 sm:mt-0">
                      {item.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Index Footer Metadata */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between border-t border-[#B8B3A9]/20 pt-6 gap-4 text-xs font-mono text-[#918B80]">
              <div className="flex items-center gap-4">
                <span>PARIS</span>
                <span>•</span>
                <span>TOKYO</span>
                <span>•</span>
                <span>NEW YORK</span>
              </div>
              <div>HOVER MENU ITEM TO INSPECT ARCHITECTURAL PREVIEW</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
