import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layers, 
  Cpu, 
  Zap, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  FileText,
  MousePointerClick
} from 'lucide-react';
import { personalInfo, coreServices, projectsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import ResumeModal from '../components/ResumeModal';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('code');

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="relative pt-24 sm:pt-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Typographic Heading */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-mono text-purple-400 font-medium">
                {personalInfo.heroGreeting}
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
                <span className="text-white">{personalInfo.name.split(' ')[0]} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.3)]">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
                <span className="text-purple-400">.</span>
              </h1>
            </div>

            {/* Subtitle / Role Tagline */}
            <p className="text-xl sm:text-2xl font-display font-semibold text-slate-200 leading-snug">
              I'm a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 font-bold">
                {personalInfo.heroRole}
              </span>
            </p>

            {/* Bio Narrative */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {personalInfo.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white font-medium text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-purple-500/40 font-medium text-sm transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-slate-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>

            {/* Tech Badges / Micro Tags */}
            <div className="pt-6 border-t border-white/[0.07] flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider">Focus:</span>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git/GitHub'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual: Interactive HUD / Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Glow behind the card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-sky-500/30 blur-2xl opacity-60 -z-10" />

            <div className="rounded-3xl bg-[#0F0F14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="px-5 py-3.5 bg-black/40 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">developer-node.ts</span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06]">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'code' ? 'bg-purple-600/30 text-purple-300' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    code
                  </button>
                  <button
                    onClick={() => setActiveTab('status')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'status' ? 'bg-purple-600/30 text-purple-300' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    status
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto min-h-[300px]">
                {activeTab === 'code' ? (
                  <div className="space-y-1.5 leading-relaxed">
                    <p className="text-slate-500">// Developer Profile</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-sky-300">developer</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">location:</span>{' '}
                      <span className="text-emerald-300">"Bengaluru, India"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.heroRole}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-amber-300">"open_for_hackathons_and_internships"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">skills:</span> [
                    </p>
                    <p className="pl-8 text-sky-300">
                      "React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "REST APIs", "Git"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-slate-400">passions:</span> [
                    </p>
                    <p className="pl-8 text-emerald-300">
                      "Hackathon Sprints", "Rapid MVPs", "Creative UI Craft"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-purple-400">deployGoal</span>: () =&gt; {'{'}
                    </p>
                    <p className="pl-8 text-slate-400">
                      return <span className="text-purple-300">"Build accessible & impactful real-world software"</span>;
                    </p>
                    <p className="pl-4">{'}'}</p>
                    <p>{'};'}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <span className="text-slate-400">System State</span>
                      <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Active & Building
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <span className="text-slate-400">Edge Response Latency</span>
                      <span className="text-sky-300 font-semibold">12ms (BLR / India)</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <span className="text-slate-400">Active Architecture</span>
                      <span className="text-purple-300 font-semibold">React 18 + Vite + Tailwind</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <span className="text-slate-400">Code Quality / Build</span>
                      <span className="text-emerald-400 font-semibold">Passing (100%)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Stat Badges over card footer */}
              <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                    15+ Projects
                  </p>
                  <p className="text-[11px] text-slate-400">Built & Explored</p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                    6+ Hackathons
                  </p>
                  <p className="text-[11px] text-slate-400">Team Sprints</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 group-hover:from-purple-300 group-hover:to-sky-300 transition-all">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED WORK PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Portfolio Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Selected Creations
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group rounded-3xl bg-[#111116] border border-white/[0.08] hover:border-purple-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              {/* Media Thumbnail with hover zoom */}
              <div className="relative h-52 overflow-hidden bg-black/60">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/30" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-purple-300">
                  {project.category}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-purple-600/90 hover:bg-purple-600 text-white shadow-lg transition-transform hover:scale-110"
                  aria-label="View case study"
                >
                  <MousePointerClick className="w-4 h-4" />
                </button>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="GitHub Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHAT I DO / CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Layers className="w-4 h-4" />
            <span>Architecture & Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Engineering Capabilities
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Bridging technical depth with user-centric design to deliver software that scales effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map((service, idx) => {
            const icons = {
              Layout: Code2,
              Server: Cpu,
              Sparkles: Sparkles,
              Zap: Zap,
            };
            const IconComponent = icons[service.icon] || Code2;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 hover:bg-white/[0.03] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/20 to-sky-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-2 mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-r from-purple-950/40 via-[#121218] to-indigo-950/40 border border-purple-500/20 text-center space-y-6">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
            Let's Collaborate
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-2xl mx-auto leading-tight">
            Ready to craft your next breakthrough product?
          </h2>

          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Whether you have a ground-up greenfield project, require frontend architecture leadership, or want to transform an existing experience, I'm here to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-base shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Initiate Project Chat</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-base font-medium transition-all"
            >
              <span>Learn My Background</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
