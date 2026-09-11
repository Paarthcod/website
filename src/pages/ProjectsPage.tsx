import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, type Project } from '../data/agencyData';
import { ExternalLink, X, Globe, ArrowUpRight } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full pt-36 pb-28 px-8 space-y-12 max-w-7xl mx-auto bg-[#F4F1EA] text-[#242321]">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ 04 // PORTFOLIO ARCHIVE ]</span>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight font-display text-[#242321]">
          PROJECT ARCHIVE<span className="text-[#9A8064]">.</span>
        </h1>
        <p className="text-[#918B80] text-lg max-w-2xl font-normal">
          An editorial showcase of live production platforms, bespoke web flagships, and autonomous digital growth infrastructure.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-b border-[#B8B3A9]/50 pb-6">
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
                ? 'bg-[#242321] text-[#F4F1EA] font-semibold border-[#242321] shadow-sm'
                : 'bg-white/60 text-[#918B80] border-[#B8B3A9]/50 hover:border-[#737565] hover:text-[#242321]'
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
              transition={{ duration: 0.4 }}
              onClick={() => {
                playClickSound();
                setSelectedProject(project);
              }}
              onMouseEnter={playHoverSound}
              className="bg-white border border-[#B8B3A9]/60 rounded-3xl overflow-hidden cursor-pointer group hover:border-[#737565] transition-all shadow-sm flex flex-col justify-between"
              data-cursor="VIEW PROJECT"
            >
              {/* Browser Window Header */}
              <div className="bg-[#242321] px-5 py-3 border-b border-[#242321] flex items-center justify-between z-10 text-xs font-mono text-[#F4F1EA]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#737565] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9A8064] inline-block" />
                  </div>
                  <div className="bg-[#151514] px-3 py-1 rounded-md text-[10px] text-[#918B80] border border-[#242321] flex items-center gap-1.5 truncate max-w-[200px]">
                    <Globe className="w-3 h-3 text-[#9A8064]" />
                    <span className="truncate">{project.link ? new URL(project.link).hostname : project.title.toLowerCase()}</span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#151514] text-[#9A8064] border border-[#9A8064]/30">
                  {project.category}
                </span>
              </div>

              {/* Preview Image */}
              <div className="w-full h-[280px] relative overflow-hidden bg-[#E5E1D8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
              </div>

              {/* Card Meta Details */}
              <div className="p-8 space-y-4 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-[#9A8064]">PROJECT 0{idx + 1}</span>
                    <h3 className="text-2xl font-semibold font-display text-[#242321] group-hover:text-[#737565] transition-colors mt-0.5">
                      {project.title}
                    </h3>
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
                      className="p-2 rounded-full border border-[#B8B3A9] text-[#918B80] hover:text-[#242321] hover:bg-[#F4F1EA] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-[#9A8064]" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-[#918B80] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-[#F4F1EA] text-[#242321] px-2.5 py-1 rounded border border-[#B8B3A9]/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
    </div>
  );
};
