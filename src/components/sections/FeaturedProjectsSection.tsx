import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, type Project } from '../../data/agencyData';
import { ExternalLink, X, Globe, ArrowUpRight, Compass } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-32 px-8 relative border-t border-[#B8B3A9]/40 bg-[#F4F1EA] text-[#242321] overflow-hidden">
      {/* Tactile Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8B3A9_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#B8B3A9]/50 pb-8">
          <div>
            <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ 04 // SELECTED ASSETS ]</span>
            <h2 className="text-4xl sm:text-6xl font-semibold font-display text-[#242321] mt-2 tracking-tight">
              PORTFOLIO SHOWCASE<span className="text-[#9A8064]">.</span>
            </h2>
          </div>
          <p className="text-[#918B80] text-sm max-w-md leading-relaxed">
            Real enterprise assets engineered for clarity, structural strength, and digital presence across diverse commercial sectors.
          </p>
        </div>

        {/* Unconventional Editorial Gallery Flow (Prompt Sections 14-16) */}
        <div className="space-y-20">
          {featuredProjects.map((project, idx) => {
            const projectNumber = `0${idx + 1} / 0${featuredProjects.length}`;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  playClickSound();
                  setSelectedProject(project);
                }}
                onMouseEnter={playHoverSound}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#B8B3A9]/40 pb-16"
                data-cursor="VIEW PROJECT"
              >
                {/* 70% Viewport Image Container */}
                <div className="lg:col-span-8 relative overflow-hidden rounded-2xl border border-[#B8B3A9]/60 shadow-lg bg-[#E5E1D8]">
                  <div className="bg-[#242321] px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#F4F1EA]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#737565]" />
                      <Globe className="w-3.5 h-3.5 text-[#9A8064]" />
                      <span>{project.link ? new URL(project.link).hostname : project.title.toLowerCase()}</span>
                    </div>
                    <span className="text-[#918B80] text-[10px] uppercase tracking-wider">{project.category}</span>
                  </div>

                  <div className="relative h-[340px] sm:h-[460px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151514]/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  </div>
                </div>

                {/* Vertical Edge Editorial Metadata Column */}
                <div className="lg:col-span-4 space-y-6 lg:pl-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#9A8064] tracking-widest">{projectNumber}</span>
                      <span className="w-8 h-[1px] bg-[#B8B3A9]" />
                      <span className="text-xs font-mono text-[#737565] uppercase">{project.category}</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#242321] group-hover:text-[#737565] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#918B80] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#242321] font-semibold group-hover:translate-x-2 transition-transform">
                      <span>INSPECT CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-[#9A8064]" />
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
                        className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242321] text-[#F4F1EA] text-xs font-mono font-medium hover:bg-[#737565] transition-colors"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-3 h-3 text-[#9A8064]" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#151514]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F4F1EA] border border-[#B8B3A9] text-[#242321] rounded-3xl max-w-4xl w-full p-8 sm:p-12 relative overflow-y-auto max-h-[90vh] shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-[#B8B3A9] text-[#918B80] hover:text-[#242321] hover:bg-[#E5E1D8] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#9A8064] uppercase tracking-widest">{selectedProject.category}</span>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#242321]">{selectedProject.title}</h3>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#B8B3A9] max-h-[400px]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold text-[#737565] uppercase">ARCHITECTURAL OVERVIEW</h4>
                <p className="text-sm text-[#918B80] leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#B8B3A9]/40 text-xs font-mono">
                <div>
                  <span className="text-[#918B80] block">TECH STACK</span>
                  <span className="text-[#242321] font-semibold">{selectedProject.tags.join(' • ')}</span>
                </div>
                <div>
                  <span className="text-[#918B80] block">PRODUCTION LINK</span>
                  {selectedProject.link ? (
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="text-[#9A8064] hover:underline font-semibold flex items-center gap-1">
                      {selectedProject.link} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[#242321]">Private Distribution</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
