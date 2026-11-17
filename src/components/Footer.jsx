import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, ArrowUp, Heart, Mail, Sparkles } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0A0A0E] z-10 overflow-hidden">
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-display font-bold text-white text-sm shadow-md shadow-purple-600/30">
                {personalInfo.initials || 'TS'}
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Building modern web applications and exploring creative technologies with an enthusiasm for clean design and community collaboration.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for internships, hackathons & collaborations</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 font-mono">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-500 font-mono pt-2">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Crafted with precision & creativity.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/30 transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
