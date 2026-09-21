'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ================= PRELOADER =================
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ================= SCROLL EFFECT =================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ================= NAV LINKS =================
  // Fix: Sabhi links ko proper section IDs ya routes par set kiya hai
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // ================= SMOOTH SCROLL =================
  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // Agar href '#' se start hota hai to smooth scroll karenge
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <>
      {/* =====================================================
          PRELOADER
      ====================================================== */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fcfbfc] px-4 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none" />

            {/* Welcome */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-2 sm:gap-2.5 mb-6 bg-purple-50/90 border border-purple-200/80 px-4 sm:px-6 py-2.5 rounded-full shadow-md backdrop-blur-md relative z-10"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C10.9 2 10 2.9 10 4V6H7C5.9 6 5 6.9 5 8V11C5 12.1 5.9 13 7 13H8V20C8 21.1 8.9 22 10 22H14C15.1 22 16 21.1 16 20V13H17C18.1 13 19 12.1 19 11V8C19 6.9 18.1 6 17 6H14V4C14 2.9 13.1 2 12 2M12 4C12.55 4 13 4.45 13 5V6H11V5C11 4.45 11.45 4 12 4M7 8H10V11H7V8M17 8V11H14V8H17M10 13H14V20H10V13Z" />
              </svg>

              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#581c87] uppercase">
                Welcome to Radha Properties
              </span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative w-20 h-20 sm:w-28 sm:h-28 mb-5 overflow-hidden drop-shadow-xl z-10"
            >
              <Image
                src="/log.png"
                alt="Radha Property Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Brand */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center flex flex-col items-center relative z-10"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-[0.15em] sm:tracking-widest text-[#4c1d95] leading-tight drop-shadow-sm">
                RADHA
              </span>

              <span className="text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.35em] sm:tracking-[0.4em] font-extrabold text-[#7c3aed] uppercase mt-1">
                Properties
              </span>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-40 sm:w-56 h-1.5 bg-purple-100 rounded-full mt-8 overflow-hidden relative z-10 shadow-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-[#581c87] via-[#7c3aed] to-purple-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#fcfbfc]/95 backdrop-blur-md shadow-md py-3 border-b border-purple-100/60'
            : 'bg-[#fcfbfc] py-3.5 sm:py-4 border-b border-purple-100/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 sm:gap-3.5 group text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden transition transform group-hover:scale-105 flex-shrink-0">
              <Image
                src="/log.png"
                alt="Radha Property Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-[#4c1d95] leading-tight">
                RADHA
              </span>

              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.3em] sm:tracking-[0.35em] font-bold text-[#7c3aed] uppercase">
                Properties
              </span>
            </div>
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative text-[#3b116d] font-medium text-sm tracking-wide transition hover:text-[#7c3aed] py-1 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7c3aed] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* ================= ENQUIRE BUTTON ================= */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => handleNavClick('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#581c87] text-white px-6 lg:px-7 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-md shadow-purple-900/15 hover:bg-[#6b21a8] transition duration-200 cursor-pointer"
            >
              Enquire Now
            </motion.button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#581c87] text-xl sm:text-2xl focus:outline-none p-2 sm:p-2.5 rounded-xl bg-purple-50 border border-purple-200 shadow-sm cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-[#fcfbfc] border-b border-purple-100 shadow-2xl overflow-hidden px-5 sm:px-6 py-6"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">

                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left text-[#3b116d] font-semibold text-base block py-2.5 border-b border-purple-50 hover:text-[#7c3aed] transition cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}

                {/* Mobile Enquire */}
                <div className="pt-3">
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full block text-center bg-[#581c87] text-white py-3.5 rounded-xl font-medium text-sm shadow-md shadow-purple-900/20 active:scale-95 transition-transform cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}