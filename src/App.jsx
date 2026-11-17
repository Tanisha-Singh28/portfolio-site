import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlowBackground from './components/GlowBackground';
import CustomCursor from './components/CustomCursor';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-slate-100 flex flex-col justify-between selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background Ambience & Custom Cursor */}
      <GlowBackground />
      <CustomCursor />
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Routes with AnimatePresence */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
