import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, type Project } from '../data/agencyData';
import { ArrowUpRight, ExternalLink, X, Sparkles, Globe } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';
import { TiltCard } from '../components/common/TiltCard';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full pt-36 pb-28 px-8 space-y-12 max-w-7xl mx-auto bg-[#F5F3EE] text-[#171717]">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">[ PORTFOLIO ARCHIVE ]</span>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight font-display text-[#171717]">
          PROJECT ARCHIVE.
        </h1>
        <p className="text-[#6F6F6A] text-lg max-w-2xl font-light">
          An editorial showcase of live production platforms, bespoke web flagships, and autonomous software systems.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-b border-[#DCD9D2] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playClickSound();
              setActiveCategory(cat);
            }}
            onMouseEnter={playHoverSound}
            className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all border ${
              activeCategory === cat
                ? 'bg-[#171717] text-[#F5F3EE] font-semibold border-[#171717]'
                : 'glass-panel text-[#6F6F6A] border-[#DCD9D2] hover:border-[#171717]/40 hover:text-[#171717]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Showcase Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-3"
            >
              <TiltCard
                onClick={() => {
                  playClickSound();
                  setSelectedProject(project);
                }}
                onMouseEnter={playHoverSound}
                dataCursor="VIEW"
                className="glass-panel rounded-3xl overflow-hidden border border-[#DCD9D2] cursor-pointer group glass-panel-hover flex flex-col justify-between"
              >
                {/* Browser Mockup Window Bar */}
                <div className="bg-[#FAF8F5] px-6 py-3.5 border-b border-[#DCD9D2] flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                    </div>
                    <div className="bg-[#F0ECE1] px-3 py-1 rounded-md text-[10px] font-mono text-[#6F6F6A] border border-[#DCD9D2] flex items-center gap-1.5 truncate max-w-[250px] sm:max-w-[400px]">
                      <Globe className="w-3 h-3 text-[#171717]" />
                      <span className="truncate">{project.link ? new URL(project.link).hostname : project.title.toLowerCase()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#FAF8F5] text-[#171717] border border-[#DCD9D2]">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FAF8F5] text-[#6F6F6A] border border-[#DCD9D2]">
                      {project.year}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                        className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#171717] text-[#F5F3EE] text-[10px] font-mono font-semibold hover:bg-[#B7A98F] hover:text-[#171717] transition-all shadow-sm"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Full Desktop Screenshot Preview Container */}
                <div className="h-[360px] sm:h-[480px] w-full relative overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE] via-transparent to-transparent opacity-40" />
                </div>

                {/* Card Meta Description */}
                <div className="p-8 space-y-4 bg-[#FAF8F5] border-t border-[#DCD9D2]">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono text-[#6F6F6A]">PROJECT 0{idx + 1}</span>
                      <h3 className="text-2xl sm:text-3xl font-semibold font-display text-[#171717] group-hover:text-[#6F6F6A] transition-colors mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#DCD9D2] glass-panel flex items-center justify-center text-[#6F6F6A] group-hover:text-[#171717] group-hover:border-[#171717] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-[#6F6F6A] font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#DCD9D2]">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-[#6F6F6A] bg-[#F0ECE1] px-2.5 py-1 rounded border border-[#DCD9D2]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#171717] hover:text-[#B7A98F] transition-colors font-semibold"
                      >
                        <span>VISIT LIVE PRODUCTION SITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              className="max-w-5xl w-full max-h-[92vh] overflow-y-auto glass-panel bg-[#F5F3EE] rounded-3xl border border-[#DCD9D2] p-6 sm:p-10 space-y-8 relative shadow-2xl"
            >
              <button
                onClick={() => {
                  playClickSound();
                  setSelectedProject(null);
                }}
                onMouseEnter={playHoverSound}
                className="absolute top-6 right-6 z-10 p-3 rounded-full border border-[#DCD9D2] hover:border-[#171717] text-[#6F6F6A] hover:text-[#171717] transition-colors bg-[#FAF8F5]"
                data-cursor="CLOSE"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#DCD9D2]">
                  <div className="px-4 py-3 border-b border-[#DCD9D2] flex items-center justify-between bg-[#F0ECE1]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      <span className="text-xs font-mono text-[#6F6F6A] pl-2">{selectedProject.link}</span>
                    </div>

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 rounded bg-[#171717] text-[#F5F3EE] font-mono text-xs font-semibold flex items-center gap-1.5"
                      >
                        <span>VISIT LIVE SITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="h-[380px] sm:h-[500px] w-full relative overflow-hidden bg-[#FAF8F5]">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">
                      {selectedProject.client} — {selectedProject.year}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold font-display text-[#171717]">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <h4 className="text-sm font-mono text-[#6F6F6A] uppercase tracking-widest flex items-center gap-2 pt-2">
                    <Sparkles className="w-4 h-4 text-[#B7A98F]" /> PROJECT OVERVIEW
                  </h4>
                  <p className="text-[#6F6F6A] leading-relaxed font-light text-sm sm:text-base">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="text-xs font-mono text-[#6F6F6A] uppercase">TECHNOLOGIES & ARCHITECTURE</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded bg-[#FAF8F5] text-[#171717] font-mono text-xs border border-[#DCD9D2]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 glass-panel p-6 rounded-2xl border border-[#DCD9D2] bg-[#FAF8F5]">
                  <h4 className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">
                    KEY OUTCOMES
                  </h4>
                  {selectedProject.outcomes?.map((out, idx) => (
                    <div key={idx} className="border-b border-[#DCD9D2] pb-3 last:border-0 last:pb-0 space-y-0.5">
                      <div className="text-sm font-semibold text-[#171717] font-display">{out.label}</div>
                      <div className="text-xs font-mono text-[#6F6F6A]">{out.detail}</div>
                    </div>
                  ))}

                  <div className="pt-3 space-y-2">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 rounded-xl bg-[#171717] hover:bg-[#26272B] text-[#F5F3EE] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
                      >
                        <Globe className="w-4 h-4" />
                        <span>OPEN LIVE PRODUCTION SITE</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E3DD] text-[#171717] border border-[#DCD9D2] font-semibold text-xs uppercase tracking-wider text-center transition-colors"
                    >
                      CLOSE PREVIEW
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
