'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaPlay, FaSmile, FaBuilding, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

// Array of Images for Automatic Background Slider
const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
];

// Counter Helper Component for Count-up Motion
function Counter({ value, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      let duration = 1500;
      let steps = 40;
      let increment = end / steps;
      let timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Image Slider Effect (changes every 3.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#fcfbfc] via-[#f7f3fc] to-[#fcfbfc] pt-32 pb-16 lg:pt-36 lg:pb-20 px-6 md:px-12">
      
      {/* Animated Motion SVG Waves in Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-50 z-0">
        <svg className="w-full h-[520px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <motion.path 
            d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
            fill="url(#animated_purple_wave)"
            animate={{
              d: [
                "M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,120L48,133.3C96,147,192,173,288,176C384,179,480,160,576,138.7C672,117,768,93,864,101.3C960,109,1056,149,1152,160C1248,171,1344,155,1392,146.7L1440,138L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="animated_purple_wave" x1="720" y1="0" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d8b4fe" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#fcfbfc" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-28 left-1/4 w-80 h-80 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#6b21a8] block mb-3">
              BUILD A
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#2e1065] leading-[1.1] mb-4">
              Better <br />
              <span className="italic font-normal text-[#7c3aed]">Tomorrow</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#4c1d95] mb-5">
              With Radha Properties
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              Premium Homes, Smarter Investments, Happier Lives. Find spaces curated exclusively for your comfort.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5">
              <motion.a 
                href="#properties"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#581c87] text-white px-8.5 py-4 rounded-full font-medium text-base flex items-center gap-3 shadow-xl shadow-purple-900/20 hover:bg-[#6b21a8] transition"
              >
                Explore Properties <FaArrowRight className="text-xs" />
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3.5 text-[#581c87] font-medium text-base py-2 group cursor-pointer"
              >
                <span className="w-12 h-12 rounded-full border-2 border-purple-300 flex items-center justify-center group-hover:bg-[#581c87] group-hover:text-white group-hover:border-transparent transition shadow-sm">
                  <FaPlay className="text-xs ml-0.5" />
                </span>
                Watch Video
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 relative flex justify-center items-center py-6"
          >
            <div className="relative w-full max-w-[720px] h-[480px] sm:h-[500px]">
              
              {/* Main Slider Image Frame */}
              <div className="absolute top-0 right-0 w-full h-[90%] rounded-t-[180px] rounded-bl-[180px] rounded-br-[120px] overflow-hidden shadow-2xl border-4 border-white bg-purple-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image 
                      src={heroImages[currentIndex]} 
                      alt="Modern Luxury Building Carousel" 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators / Dots */}
                <div className="absolute bottom-5 right-8 z-30 flex gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-full">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${currentIndex === idx ? 'bg-white w-6' : 'bg-white/50'}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Smaller Overlay Image 1 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-10 left-4 w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white z-20 bg-white"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" 
                  alt="Property Interior" 
                  fill 
                  className="object-cover"
                />
              </motion.div>

              {/* Smaller Overlay Image 2 */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-2 right-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white z-20 bg-white"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop" 
                  alt="Property Exterior" 
                  fill 
                  className="object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-purple-200/60"
        >
          {/* Box 1 */}
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-md border border-purple-100 flex items-center justify-around">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#581c87] flex items-center justify-center text-xl shadow-sm">
                <FaSmile />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2e1065]">
                  <Counter value="90" suffix="+" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Happy Families</p>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-purple-200" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#581c87] flex items-center justify-center text-xl shadow-sm">
                <FaBuilding />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2e1065]">
                  <Counter value="97" suffix="+" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Properties Sold</p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-md border border-purple-100 flex items-center justify-around">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#581c87] flex items-center justify-center text-xl shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2e1065]">
                  <Counter value="11" suffix="+" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Prime Locations</p>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-purple-200" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#581c87] flex items-center justify-center text-xl shadow-sm">
                <FaHeart />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2e1065]">
                  <Counter value="92" suffix="%" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}