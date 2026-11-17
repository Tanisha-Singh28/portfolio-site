import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-sky-500/20 border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              <span className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 group-hover:scale-105 transition-transform">
                {personalInfo.initials || 'TS'}
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0A] animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-semibold tracking-tight text-base sm:text-lg text-white group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:block">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#121216]/80 border border-white/10 backdrop-blur-md shadow-lg shadow-black/30">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-sky-600/30 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action / Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden shadow-md shadow-purple-600/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Let's Connect</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0D0D11]/95 border-b border-white/10 backdrop-blur-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for internships, hackathons & roles</span>
              </div>

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-purple-600/30"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
