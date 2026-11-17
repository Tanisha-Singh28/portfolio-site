import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Heart, 
  Coffee, 
  Terminal, 
  Download, 
  Sparkles, 
  ChevronRight,
  CheckCircle2,
  FileText,
  MapPin,
  Calendar
} from 'lucide-react';
import { personalInfo, careerTimeline, skillsData, workPhilosophy } from '../data/portfolioData';
import ResumeModal from '../components/ResumeModal';

export default function AboutPage() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('frontend');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const categories = [
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'devops', label: 'DevOps & Cloud' },
    { key: 'tools', label: 'Tools & Workflow' },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
            <User className="w-4 h-4" />
            <span>Behind The Craft</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Engineering experiences with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
              intent & precision
            </span>
            .
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl mt-4 leading-relaxed">
            I'm a student developer and creative technologist based in Bengaluru, passionate about full-stack web development, hackathons, and real-world projects.
          </p>
        </motion.div>
      </section>

      {/* 2. BIO & NARRATIVE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-5">
              <h2 className="font-display font-bold text-2xl text-white">
                My Journey & Approach
              </h2>
              <p>
                I am an aspiring full-stack developer based in Bengaluru, India. My passion lies in building practical web applications, participating in hackathons, and constantly experimenting with new frontend frameworks and developer tools.
              </p>
              <p>
                Hackathons have shaped how I write code: turning ideas into working software within 24–36 hours taught me the importance of rapid prototyping, clean modular component design, and active teamwork under pressure.
              </p>
              <p>
                When I'm not coding, you'll find me exploring developer community events such as Google Developer Groups (GDG), collaborating with fellow students, and pushing code to GitHub.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Quick Persona / Stat Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#15151C] to-[#0E0E12] border border-white/10 space-y-6 shadow-xl">
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-sky-500 p-0.5 shadow-lg shadow-purple-500/20">
                  <div className="w-full h-full bg-[#0E0E12] rounded-[14px] flex items-center justify-center font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
                    {personalInfo.initials || 'TS'}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-purple-400">
                    {personalInfo.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Personal Quick Facts */}
              <div className="space-y-3 pt-2 border-t border-white/[0.06] text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Core Specialty</span>
                  <span className="text-slate-200">React & Frontend Development</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-slate-200">JavaScript, React, Node.js, HTML/CSS</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Timezone</span>
                  <span className="text-slate-200">India Standard Time (IST / UTC+5:30)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Location</span>
                  <span className="text-emerald-400">Bengaluru, India (Open to Remote)</span>
                </div>
              </div>

              {/* Personal Interests Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Passions Beyond Code
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Generative Art', 'Mechanical Keyboards', 'Specialty Coffee', 'Minimalist Architecture', 'Cycling'].map((hobby) => (
                    <span
                      key={hobby}
                      className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SKILLS & COMPETENCY MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Code className="w-4 h-4" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Skills & Proficiencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Demonstrated real-world experience across the modern software engineering lifecycle.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedSkillCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wide transition-all ${
                selectedSkillCategory === cat.key
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData[selectedSkillCategory].map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white text-sm">{skill.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-purple-300">
                    {skill.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-purple-400 font-bold">{skill.level}%</span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-sky-400 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CAREER TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career Path</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Experience & Milestones
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {careerTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-purple-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/40 hover:bg-white/[0.03] transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {item.role}
                    </h3>
                    <p className="text-purple-300 font-medium text-sm">
                      {item.company} • <span className="text-slate-400 font-normal">{item.location}</span>
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/[0.08] w-fit">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet achievements */}
                <ul className="space-y-2 pt-2">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. WORK PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Heart className="w-4 h-4" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Engineering Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workPhilosophy.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 transition-all space-y-3"
            >
              <span className="font-mono text-3xl font-bold text-purple-400/40 block">
                {item.number}
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
