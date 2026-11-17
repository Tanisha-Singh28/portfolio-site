import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MapPin, 
  Clock, 
  Calendar, 
  Sparkles, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Twitter, 
  ChevronDown, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, faqs } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Frontend Web App',
    budget: 'Internship / Role',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  // Live India Standard Time (IST) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate network submission
    setTimeout(() => {
      setStatus('success');
      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#38bdf8', '#6366f1'],
      });
    }, 1200);
  };

  const projectTypes = [
    'Frontend Web App',
    'Hackathon Project',
    'Full-Stack Prototype',
    'UI / Landing Page',
    'Internship / Collab',
  ];

  const budgetTiers = [
    'Hackathon Collab',
    'Internship / Role',
    'Freelance Project',
    'Open-Source Sprint',
  ];

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
            <MessageSquare className="w-4 h-4" />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400">
              extraordinary
            </span>
            .
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl mt-4 leading-relaxed">
            Have an upcoming project, contract opportunity, or architectural question? Send a message and let's explore how we can collaborate.
          </p>
        </motion.div>
      </section>

      {/* 2. FORM & CONTACT DETAILS SPLIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F0F14] border border-white/[0.08] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="space-y-1">
                <h2 className="font-display font-bold text-2xl text-white">
                  Send a Message
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  I typically respond within 12–24 business hours.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-purple-300 font-semibold">{formData.name}</span>. Your inquiry has been received. I look forward to connecting with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Frontend Architecture',
                        budget: '$10k - $25k',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Project Nature / Scope
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            formData.projectType === type
                              ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-sm'
                              : 'bg-white/[0.02] text-slate-400 border border-white/[0.06] hover:bg-white/[0.05]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 rounded-xl text-xs font-mono text-center transition-all ${
                            formData.budget === tier
                              ? 'bg-sky-500/20 text-sky-200 border border-sky-400/40 shadow-sm'
                              : 'bg-white/[0.02] text-slate-400 border border-white/[0.06] hover:bg-white/[0.05]'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your timeline, tech stack, goals, and core challenges..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Note...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Direct Info & Availability Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Direct Inbox</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/40 border border-white/[0.06]">
                <span className="text-sm font-mono text-slate-200 truncate pr-2">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 transition-all flex items-center gap-1.5 text-xs font-mono shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Live Clock Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Base & Timezone</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white text-base">Bengaluru, Karnataka</h4>
                  <p className="text-xs text-slate-400">India Standard Time (IST / UTC+5:30)</p>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-sm font-mono text-purple-300 font-bold">
                    <Clock className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
                    <span>{currentTime || '12:00 PM'}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Bengaluru Time</span>
                </div>
              </div>
            </div>

            {/* Book a Call Shortcut */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300">
                <Calendar className="w-4 h-4" />
                <span>Prefer a live conversation?</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                Schedule a 15-Min Discovery Call
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Grab an open slot on my calendar to discuss project requirements, deliverables, or technical questions.
              </p>
              <a
                href={`mailto:${personalInfo.email}?subject=Introductory%20Call%20Request`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs shadow-md transition-all mt-2"
              >
                <span>Request Calendar Invite</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Hub */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Social Profiles & Networks
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-1 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-white transition-all"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-1 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-white transition-all"
                >
                  <Linkedin className="w-5 h-5 text-sky-400" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-1 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-white transition-all"
                >
                  <Twitter className="w-5 h-5 text-indigo-400" />
                  <span className="text-[11px] font-mono">Twitter/X</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.06]">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
            Common Inquiries
          </span>
          <h2 className="font-display font-bold text-3xl text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-purple-300 transition-colors"
                >
                  <span className="font-medium text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/[0.04] pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
