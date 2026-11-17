import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Zap, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0F0F14] border border-white/10 shadow-2xl shadow-purple-950/40 z-10 custom-scrollbar"
        >
          {/* Header Image / Media */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-[#0F0F14]/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 border border-white/10 transition-all z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Category Badge over gradient */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-mono mb-2">
                {project.category}
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Highlights Bar */}
            {project.metrics && (
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-sky-900/20 border border-purple-500/20 text-purple-200 text-sm font-mono">
                <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{project.metrics}</span>
              </div>
            )}

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Project Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Architecture Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Architecture Solution</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
