import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, type Project } from '../../data/agencyData';
import { ArrowUpRight, ExternalLink, X, Sparkles, Globe } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';
import { TiltCard } from '../common/TiltCard';

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-28 px-8 relative border-t border-[#26272B] bg-[#111214] overflow-hidden text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26272B] pb-8">
          <div>
            <span className="text-xs font-mono text-[#B7A98F] uppercase tracking-widest">[ SELECTED WORK ]</span>
            <h2 className="text-4xl sm:text-6xl font-semibold font-display text-[#F5F3EE] mt-2">
              FEATURED PROJECTS.
            </h2>
          </div>
          <p className="text-[#9A9A94] text-sm max-w-md font-light">
            A curated showcase of live production websites, bespoke flagships, and enterprise software engineered for ambitious clients.
          </p>
        </div>

        {/* Projects Cards Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {featuredProjects.map((project, idx) => (
            <TiltCard
              key={project.id}
              onClick={() => {
                playClickSound();
                setSelectedProject(project);
              }}
              onMouseEnter={playHoverSound}
              dataCursor="VIEW PROJECT"
              className={`glass-panel-dark rounded-3xl overflow-hidden border border-[#26272B] cursor-pointer group glass-panel-dark-hover flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-3' : 'lg:col-span-1.5'
              }`}
            >
              {/* Sleek Browser Window Header Bar */}
              <div className="bg-[#18191D] px-5 py-3 border-b border-[#26272B] flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                  </div>
                  <div className="bg-[#111214] px-3 py-1 rounded-md text-[10px] font-mono text-[#9A9A94] border border-[#26272B] flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-[300px]">
                    <Globe className="w-3 h-3 text-[#B7A98F]" />
                    <span className="truncate">{project.link ? new URL(project.link).hostname : project.title.toLowerCase()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#111214] text-[#B7A98F] border border-[#B7A98F]/30">
                    {project.category}
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
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#B7A98F] text-[#111214] text-[10px] font-mono font-semibold hover:bg-[#FAF8F5] transition-all"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Full Desktop Preview Image */}
              <div className={`w-full relative overflow-hidden bg-[#18191D] ${
                idx === 0 ? 'h-[360px] sm:h-[480px]' : 'h-[300px] sm:h-[380px]'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent opacity-60" />
              </div>

              {/* Meta Card Details */}
              <div className="p-8 space-y-4 bg-[#141518]">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-[#B7A98F]">PROJECT 0{idx + 1}</span>
                    <h3 className="text-2xl sm:text-3xl font-semibold font-display text-[#F5F3EE] group-hover:text-[#B7A98F] transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#26272B] glass-panel-dark flex items-center justify-center text-[#9A9A94] group-hover:text-[#F5F3EE] group-hover:border-[#B7A98F]/50 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-[#9A9A94] font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#26272B]">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-[#9A9A94] bg-[#18191D] px-2.5 py-1 rounded border border-[#26272B]">
                        {tech}
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B7A98F] hover:text-[#F5F3EE] transition-colors font-medium"
                    >
                      <span>OPEN WEBSITE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Case Study Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111214]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              className="max-w-5xl w-full max-h-[92vh] overflow-y-auto glass-panel-dark rounded-3xl border border-[#26272B] p-6 sm:p-10 space-y-8 relative shadow-2xl"
            >
              <button
                onClick={() => {
                  playClickSound();
                  setSelectedProject(null);
                }}
                onMouseEnter={playHoverSound}
                className="absolute top-6 right-6 z-10 p-3 rounded-full border border-[#26272B] hover:border-[#B7A98F]/50 text-[#9A9A94] hover:text-[#F5F3EE] transition-colors bg-[#18191D]"
                data-cursor="CLOSE"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Browser Mockup Header */}
              <div className="space-y-3">
                <div className="bg-[#18191D] rounded-2xl overflow-hidden border border-[#26272B]">
                  <div className="px-4 py-3 border-b border-[#26272B] flex items-center justify-between bg-[#141518]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      <span className="text-xs font-mono text-[#9A9A94] pl-2">{selectedProject.link}</span>
                    </div>

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 rounded bg-[#B7A98F] text-[#111214] font-mono text-xs font-semibold flex items-center gap-1.5"
                      >
                        <span>VISIT LIVE PRODUCTION SITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="h-[380px] sm:h-[500px] w-full relative overflow-hidden bg-[#18191D]">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#B7A98F] uppercase tracking-widest">
                      {selectedProject.client} — {selectedProject.year}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-semibold font-display text-[#F5F3EE]">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <h4 className="text-sm font-mono text-[#B7A98F] uppercase tracking-widest flex items-center gap-2 pt-2">
                    <Sparkles className="w-4 h-4 text-[#B7A98F]" /> PROJECT OVERVIEW
                  </h4>
                  <p className="text-[#9A9A94] leading-relaxed font-light text-sm sm:text-base">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  <div className="pt-4 space-y-2">
                    <div className="text-xs font-mono text-[#9A9A94] uppercase">TECHNOLOGIES & ARCHITECTURE</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded bg-[#18191D] text-[#F5F3EE] font-mono text-xs border border-[#26272B]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 glass-panel-dark p-6 rounded-2xl border border-[#26272B] bg-[#141518]">
                  <h4 className="text-xs font-mono text-[#9A9A94] uppercase tracking-widest">
                    KEY OUTCOMES
                  </h4>
                  {selectedProject.outcomes?.map((out, idx) => (
                    <div key={idx} className="border-b border-[#26272B] pb-3 last:border-0 last:pb-0 space-y-0.5">
                      <div className="text-sm font-semibold text-[#F5F3EE] font-display">{out.label}</div>
                      <div className="text-xs font-mono text-[#9A9A94]">{out.detail}</div>
                    </div>
                  ))}
                  
                  <div className="pt-3 space-y-2">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 rounded-xl bg-[#B7A98F] hover:bg-[#C5B79D] text-[#111214] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
                      >
                        <Globe className="w-4 h-4" />
                        <span>OPEN LIVE PRODUCTION SITE</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 rounded-xl bg-[#F5F3EE] hover:bg-[#E5E3DD] text-[#171717] font-semibold text-xs uppercase tracking-wider text-center transition-colors"
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
    </section>
  );
};
