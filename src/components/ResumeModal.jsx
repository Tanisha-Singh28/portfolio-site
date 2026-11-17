import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle, ExternalLink } from 'lucide-react';
import { personalInfo, careerTimeline, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generates a mock printable resume view or triggers window print
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#0D0D12] border border-white/10 shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Curriculum Vitae — {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Updated Q4 2024 • PDF & Printable Version
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
                aria-label="Close resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="py-6 space-y-6 text-sm">
            {/* Top overview */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-wrap justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white text-base">{personalInfo.name}</h4>
                <p className="text-purple-400 text-xs font-mono">{personalInfo.tagline}</p>
                <p className="text-slate-400 text-xs mt-1">{personalInfo.location}</p>
              </div>
              <div className="text-right text-xs text-slate-400 font-mono space-y-1">
                <p>{personalInfo.email}</p>
                <p>github.com/Tanisha-Singh28</p>
                <p>linkedin.com/in/tanishasingh</p>
              </div>
            </div>

            {/* Work History */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-purple-400 mb-3">
                Experience Timeline
              </h4>
              <div className="space-y-4">
                {careerTimeline.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-purple-500/30 pl-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-white">{item.role} • <span className="text-purple-300">{item.company}</span></h5>
                      <span className="text-xs font-mono text-slate-400">{item.period}</span>
                    </div>
                    <p className="text-xs text-slate-400">{item.description}</p>
                    <ul className="text-xs text-slate-300 space-y-0.5 list-disc list-inside pt-1">
                      {item.achievements.slice(0, 2).map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills Snapshot */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-purple-400 mb-2">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[...skillsData.frontend, ...skillsData.backend.slice(0, 4), ...skillsData.devops.slice(0, 3)].map((s) => (
                  <span key={s.name} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              References and detailed case studies available upon request.
            </span>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Copy</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
