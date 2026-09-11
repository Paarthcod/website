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
    <footer className="bg-[#0D0D0C] border-t border-[#242321] pt-16 pb-12 relative overflow-hidden text-[#F4F1EA]">
      {/* Marquee Banner */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-[#242321] py-6 mb-16 bg-[#151514]">
        <div className="inline-flex animate-marquee gap-12 text-2xl sm:text-4xl font-semibold font-display tracking-tight text-[#918B80]">
          <span>WHERE WEBSITES BECOME BUSINESS ASSETS.</span>
          <span className="text-[#9A8064]">•</span>
          <span>INFRASTRUCTURE FOR DIGITAL GROWTH.</span>
          <span className="text-[#9A8064]">•</span>
          <span>WHERE WEBSITES BECOME BUSINESS ASSETS.</span>
          <span className="text-[#9A8064]">•</span>
          <span>INFRASTRUCTURE FOR DIGITAL GROWTH.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#242321] text-[#F4F1EA] font-mono font-bold text-xs flex items-center justify-center border border-[#9A8064]">
              K
            </div>
            <span className="font-display font-semibold text-2xl tracking-wider text-[#F4F1EA]">
              KINETIX<span className="text-[#9A8064]">.</span>
            </span>
          </div>
          <p className="text-[#918B80] text-sm max-w-sm leading-relaxed font-normal">
            Where Websites Become Business Assets. Engineering high-performance web systems and digital growth infrastructure.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={AGENCY_INFO.socials.twitter}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full border border-[#242321] bg-[#151514] text-[#918B80] hover:text-[#F4F1EA] hover:border-[#737565] transition-colors"
            >
              <IconTwitter className="w-4 h-4" />
            </a>
            <a
              href={AGENCY_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full border border-[#242321] bg-[#151514] text-[#918B80] hover:text-[#F4F1EA] hover:border-[#737565] transition-colors"
            >
              <IconLinkedin className="w-4 h-4" />
            </a>
            <a
              href={AGENCY_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full border border-[#242321] bg-[#151514] text-[#918B80] hover:text-[#F4F1EA] hover:border-[#737565] transition-colors"
            >
              <IconGithub className="w-4 h-4" />
            </a>
            <a
              href={AGENCY_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className="p-2.5 rounded-full border border-[#242321] bg-[#151514] text-[#918B80] hover:text-[#F4F1EA] hover:border-[#737565] transition-colors"
            >
              <IconInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="text-[#9A8064] uppercase tracking-widest font-semibold">NAVIGATION</div>
          <ul className="space-y-3">
            {['HOME', 'ABOUT', 'PROJECTS', 'BROCHURE', 'CONTACT'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab(item.toLowerCase());
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onMouseEnter={playHoverSound}
                  className="text-[#918B80] hover:text-[#F4F1EA] transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="text-[#9A8064] uppercase tracking-widest font-semibold">CAPABILITIES</div>
          <ul className="space-y-3 text-[#918B80]">
            <li>Business Websites</li>
            <li>Custom 3D WebGL</li>
            <li>Technical SEO</li>
            <li>Google & Meta Ads</li>
            <li>Monthly Optimization</li>
          </ul>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="text-[#9A8064] uppercase tracking-widest font-semibold">HQ LOCATION</div>
          <p className="text-[#918B80] leading-relaxed">
            Executive Suite 400<br />
            Innovation Tower<br />
            Tech District
          </p>
          <div className="pt-2 text-[#9A8064]">
            hello@kinetixgrowth.com
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-[#242321] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#918B80] gap-4">
        <div>© 2026 KINETIX DIGITAL PARTNERS. ALL RIGHTS RESERVED.</div>
        <button
          onClick={scrollToTop}
          onMouseEnter={playHoverSound}
          className="flex items-center gap-2 text-[#9A8064] hover:text-[#F4F4EA] transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
