import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Filter,
  CheckCircle,
  Zap,
  MousePointerClick
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'Frontend / UI', 'AI & Tools'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative pt-24 sm:pt-32 pb-24">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>Craft & Engineering</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Selected Works &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400">
              Architectures
            </span>
            .
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl mt-4 leading-relaxed">
            A curated portfolio of high-impact web applications, scalable developer tools, distributed backends, and creative interactive platforms.
          </p>
        </motion.div>
      </section>

      {/* 2. FILTERS & SEARCH TOOLBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="p-4 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 font-semibold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs font-mono"
              >
                clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 3. PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center space-y-4 rounded-3xl bg-white/[0.01] border border-white/[0.05]">
            <p className="font-display font-semibold text-xl text-slate-300">
              No projects found matching "{searchQuery}"
            </p>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Try adjusting your search terms or clearing the category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs font-mono hover:bg-purple-600/30 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group rounded-3xl bg-[#111116] border border-white/[0.08] hover:border-purple-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/25"
                >
                  {/* Thumbnail */}
                  <div className="relative h-56 overflow-hidden bg-black/60">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/30" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-purple-300">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute bottom-4 right-4 p-2.5 rounded-full bg-purple-600/90 hover:bg-purple-600 text-white shadow-lg transition-transform hover:scale-110"
                      aria-label="View case study"
                    >
                      <MousePointerClick className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Impact Metric Pill */}
                    {project.metrics && (
                      <div className="flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-xl">
                        <Zap className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="space-y-4 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
                        >
                          <span>Case Study Deep Dive</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="GitHub Repo"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Live Demo Link"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* 4. OPEN SOURCE & LABS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.06]">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/20 via-[#13131A] to-sky-950/20 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
              <Github className="w-4 h-4" />
              <span>Community & Code Repositories</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Building in public & sharing code
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore my open-source projects, hackathon solutions, and web development experiments directly on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Tanisha-Singh28?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm transition-all hover:scale-105 shrink-0"
          >
            <Github className="w-5 h-5" />
            <span>Explore Repositories</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
