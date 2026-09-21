'use client';

import { motion } from 'framer-motion';
import {
  FaHome,
  FaHandshake,
  FaBuilding,
  FaStore,
  FaUserTie,
  FaChartLine,
  FaShieldAlt,
  FaBed,
  FaCity,
  FaArrowRight,
} from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Buy Property',
    desc: 'Find your dream home, flats, or plots with verified and trusted listings.',
    icon: <FaHome />,
  },
  {
    id: 2,
    title: 'Sell Property',
    desc: 'Get the best market value for your flats, land, or commercial assets quickly.',
    icon: <FaHandshake />,
  },
  {
    id: 3,
    title: 'Flats Buy & Sell',
    desc: 'Specialized dealing in 1BHK, 2BHK, 3BHK and luxury ready-to-move flats.',
    icon: <FaCity />,
  },
  {
    id: 4,
    title: 'PG Rooms',
    desc: 'Affordable and comfortable paying guest accommodations for students and working professionals.',
    icon: <FaBed />,
  },
  {
    id: 5,
    title: 'Rent Property',
    desc: 'Wide range of verified rental options for residential houses, flats, and independent spaces.',
    icon: <FaBuilding />,
  },
  {
    id: 6,
    title: 'Commercial Spaces',
    desc: 'Prime offices, retail shops, and commercial spaces tailored for your growing enterprise.',
    icon: <FaStore />,
  },
  {
    id: 7,
    title: 'Property Consultation',
    desc: 'Expert dealer advice tailored specifically to your unique budget and location preferences.',
    icon: <FaUserTie />,
  },
  {
    id: 8,
    title: 'Investment Advisory',
    desc: 'Smart high-return investment opportunities in fast-developing real estate sectors.',
    icon: <FaChartLine />,
  },
  {
    id: 9,
    title: 'Legal Support',
    desc: 'Hassle-free documentation, title verification, and absolute legal safety by experts.',
    icon: <FaShieldAlt />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#1a103c] via-[#24154f] to-[#1a103c] pt-24 pb-36 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#281a52] border border-purple-400/30 text-purple-200 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-[0.25em] inline-block mb-4 shadow-md backdrop-blur-md"
          >
            ✦ What We Offer ✦
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Our <span className="italic font-normal text-purple-300">Services</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base md:text-lg">
            Complete Real Estate Solutions Under One Roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="bg-[#231548]/80 backdrop-blur-xl p-8 rounded-3xl border border-purple-400/20 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-purple-950/50 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-[#2d1e59] text-purple-200 border border-purple-400/30 flex items-center justify-center text-2xl mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-purple-900/40"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-purple-200/70 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-purple-300 group-hover:text-white transition-colors pt-4 border-t border-purple-400/15">
                <span className="tracking-wide uppercase">Explore Service</span>
                <FaArrowRight className="text-[10px] transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <motion.svg
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative block w-full h-16 md:h-24 text-[#201344]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </motion.svg>
      </div>
    </section>
  );
}
