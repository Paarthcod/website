import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IconTwitter, IconLinkedin, IconGithub, IconInstagram } from '../common/SocialIcons';
import { AGENCY_INFO } from '../../data/agencyData';
import { playHoverSound, playClickSound } from '../../utils/audio';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F3EE] border-t border-[#DCD9D2] pt-16 pb-12 relative overflow-hidden text-[#171717]">
      {/* Slow Marquee Banner */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-[#DCD9D2] py-8 mb-16 bg-[#FAF8F5]">
        <div className="inline-flex animate-marquee gap-12 text-3xl sm:text-5xl font-semibold font-display tracking-tight text-[#171717]/80">
          <span>BUILD SOMETHING MEMORABLE.</span>
          <span className="text-[#B7A98F]">•</span>
          <span>WE BUILD DIGITAL EXPERIENCES.</span>
          <span className="text-[#B7A98F]">•</span>
          <span>BUILD SOMETHING MEMORABLE.</span>
          <span className="text-[#B7A98F]">•</span>
          <span>WE BUILD DIGITAL EXPERIENCES.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#171717] flex items-center justify-center font-mono font-bold text-xs text-[#F5F3EE]">
              K
            </div>
            <span className="font-display font-semibold text-2xl tracking-wider text-[#171717]">
              KINETIX<span className="text-[#B7A98F]">.</span>
            </span>
          </div>
          <p className="text-[#6F6F6A] text-sm max-w-sm leading-relaxed font-light">
            {AGENCY_INFO.subtagline}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={AGENCY_INFO.socials.twitter}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full glass-panel text-[#6F6F6A] hover:text-[#171717] hover:border-[#171717]/40 transition-colors"
            >
              <IconTwitter className="w-4 h-4" />
            </a>
            <a
              href={AGENCY_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full glass-panel text-[#6F6F6A] hover:text-[#171717] hover:border-[#171717]/40 transition-colors"
            >
              <IconLinkedin className="w-4 h-4" />
            </a>
            <a
              href={AGENCY_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full glass-panel text-[#6F6F6A] hover:text-[#171717] hover:border-[#171717]/40 transition-colors"
            >
              <IconGithub className="w-4 h-4" />
            </a>
            <a
              href={AGENCY_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full glass-panel text-[#6F6F6A] hover:text-[#171717] hover:border-[#171717]/40 transition-colors"
            >
              <IconInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="text-[#6F6F6A] uppercase tracking-widest font-semibold">NAVIGATION</div>
          <ul className="space-y-3">
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab(item.toLowerCase());
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onMouseEnter={playHoverSound}
                  className="text-[#6F6F6A] hover:text-[#171717] transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="text-[#6F6F6A] uppercase tracking-widest font-semibold">SERVICES</div>
          <ul className="space-y-3 text-[#6F6F6A]">
            <li>01 Website Design</li>
            <li>02 3D & Interactive</li>
            <li>03 AI & Automation</li>
            <li>04 Web Applications</li>
            <li>05 E-Commerce</li>
          </ul>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="text-[#6F6F6A] uppercase tracking-widest font-semibold">CONTACT</div>
          <div className="text-[#171717] font-semibold">{AGENCY_INFO.email}</div>
          <div className="text-[#6F6F6A]">{AGENCY_INFO.phone}</div>
          <div className="text-[#6F6F6A] pt-2">{AGENCY_INFO.address}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-[#DCD9D2] flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#6F6F6A] gap-4">
        <div>© 2026 KINETIX DIGITAL STUDIO. ALL RIGHTS RESERVED.</div>
        <button
          onClick={scrollToTop}
          onMouseEnter={playHoverSound}
          className="flex items-center gap-2 text-[#6F6F6A] hover:text-[#171717] transition-colors"
          data-cursor="TOP"
        >
          <span>BACK TO TOP</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
