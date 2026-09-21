'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaUserTie,
  FaCalculator,
  FaChartLine,
  FaFileContract,
  FaLaptopCode,
  FaArrowRight,
  FaHandshake,
} from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Virat Singh',
    role: 'Founder & Owner',
    desc: 'Leading Radha Property with expert real estate dealing and vision.',
    icon: <FaUserTie />,
  },
  {
    name: 'Rachit',
    role: 'Lead Developer',
    desc: 'Managing the tech infrastructure, digital experience and platforms.',
    icon: <FaLaptopCode />,
  },
  {
    name: 'Rohit Sharma',
    role: 'Visitor Relations Manager',
    desc: 'Welcoming clients, managing site visits, and ensuring exceptional guest hospitality.',
    icon: <FaHandshake />,
  },
  {
    name: 'Finance Expert',
    role: 'Financial Advisor',
    desc: 'Guiding clients through smart property investments and loans.',
    icon: <FaChartLine />,
  },
  {
    name: 'Accountant',
    role: 'Accounts & Tax',
    desc: 'Handling seamless financial transparency, audits and ledgers.',
    icon: <FaCalculator />,
  },
  {
    name: 'Advocate',
    role: 'Legal Advisor',
    desc: 'Ensuring 100% legal verification, documentation and secure titles.',
    icon: <FaFileContract />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#f9f5ff] via-[#ffffff] to-[#f9f5ff] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Banner / Intro */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 bg-[#1a103c] text-white p-8 md:p-14 border border-purple-500/20">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl"
          >
            <span className="bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4 shadow-md shadow-purple-900/40">
              Established 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              About Radha Properties
            </h2>
            <p className="text-purple-100/90 text-base md:text-lg leading-relaxed">
              More than real estate, we build relationships, secure investments, and shape brighter futures under expert leadership.
            </p>
          </motion.div>
        </div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-lg shadow-purple-900/5 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a103c] mb-1">2026 July</h3>
            <p className="text-xs text-purple-600 font-semibold tracking-wider uppercase">Established Year</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-lg shadow-purple-900/5 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a103c] mb-1">97+</h3>
            <p className="text-xs text-purple-600 font-semibold tracking-wider uppercase">Properties Handled</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-lg shadow-purple-900/5 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a103c] mb-1">97+</h3>
            <p className="text-xs text-purple-600 font-semibold tracking-wider uppercase">Happy Clients</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-lg shadow-purple-900/5 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a103c] mb-1">92%</h3>
            <p className="text-xs text-purple-600 font-semibold tracking-wider uppercase">Legal Safety</p>
          </div>
        </motion.div>

        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a103c] mb-6 tracking-tight">
              Our Story & Vision
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Radha Property was founded in 2026 by Virat Singh with a crystal-clear vision: to make property buying, selling, and investing a seamless, transparent, and rewarding experience.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Backed by a multidisciplinary professional team covering finance, legal, guest hospitality, accounts, and advanced digital platforms led by Rachit, we guide families and investors with absolute honesty.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1a103c] text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-3 shadow-lg shadow-purple-950/20 hover:bg-[#2b1b58] transition"
            >
              Know Our Journey <FaArrowRight className="text-xs" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Office setup"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Meet Our Expert Team */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600 block mb-2">
              THE EXPERTS BEHIND US
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a103c] mb-3">
              Meet Our Expert Team
            </h3>
            <p className="text-gray-600 text-base">
              Professionals dedicated to safeguarding your investments and fulfilling your real estate dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-3xl border border-purple-100/80 shadow-lg shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#1a103c] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#1a103c] group-hover:text-white transition-all duration-300 shadow-inner">
                    {member.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1a103c] mb-1">{member.name}</h4>
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-3">{member.role}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-20 text-purple-100/60"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C60,35,140,55,220,58,255,59,290,58,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}