import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { toggleSound, getSoundEnabled, playHoverSound, playClickSound } from '../../utils/audio';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    playClickSound();
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#F5F3EE]/88 backdrop-blur-xl border-b border-[#DCD9D2] shadow-sm'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Minimal Luxury Logo */}
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-3 group text-left"
            data-cursor="KINETIX"
          >
            <div className="w-7 h-7 rounded-lg bg-[#171717] flex items-center justify-center font-mono font-bold text-xs text-[#F5F3EE]">
              K
            </div>
            <span className="font-display font-semibold text-lg tracking-wider text-[#171717] group-hover:text-[#6F6F6A] transition-colors">
              KINETIX<span className="text-[#B7A98F]">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={playHoverSound}
                className={`relative text-xs font-mono tracking-widest transition-colors py-1 ${
                  activeTab === item.id ? 'text-[#171717] font-semibold' : 'text-[#6F6F6A] hover:text-[#171717]'
                }`}
                data-cursor="NAVIGATE"
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#171717]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full glass-panel hover:border-[#171717]/40 text-[#6F6F6A] hover:text-[#171717] transition-all"
              title={audioMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {audioMuted ? <VolumeX className="w-4 h-4 text-[#6F6F6A]" /> : <Volume2 className="w-4 h-4 text-[#171717]" />}
            </button>

            {/* Primary Luxury CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              onMouseEnter={playHoverSound}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#26272B] text-[#F5F3EE] font-semibold text-xs tracking-wider uppercase transition-all hover:scale-[1.03]"
              data-cursor="START"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7A98F]" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl glass-panel text-[#171717]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#171717]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-[#F5F3EE] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest mb-4">NAVIGATION</div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left text-3xl font-semibold font-display tracking-tight transition-colors ${
                    activeTab === item.id ? 'text-[#171717]' : 'text-[#6F6F6A]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-[#DCD9D2]">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-4 rounded-full bg-[#171717] text-[#F5F3EE] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5 text-[#B7A98F]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
