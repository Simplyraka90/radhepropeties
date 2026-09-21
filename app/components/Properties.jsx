'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaTimes,
  FaCompass,
  FaRegClock,
  FaPhoneAlt,
  FaCalendarAlt,
} from 'react-icons/fa';

const propertiesData = [
  {
    id: 1,
    title: 'Affordable Student PG in Civil Lines',
    location: 'Bareilly',
    price: '₹5,500 / mo',
    emi: 'All inclusive utilities',
    category: 'pg',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
    beds: 1,
    baths: 1,
    sqft: '250 sqft',
    facing: 'East Facing',
    status: 'Ready to Move',
    overview: 'Comfortable PG accommodation equipped with basic amenities, ideal for students and job seekers.',
    propertyType: 'PG',
    furnishing: 'Semi-Furnished',
    floor: '2nd Floor',
    age: '2 Years',
    society: 'Sai PG House',
    parking: 'Bike Parking',
  },
  {
    id: 2,
    title: 'Cozy 2 RK Independent Room Setup',
    location: 'Shahjhanpur',
    price: '₹7,500 / mo',
    emi: 'Electricity extra',
    category: 'room',
    badge: 'Budget Pick',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    beds: 2,
    baths: 1,
    sqft: '450 sqft',
    facing: 'North Facing',
    status: 'Ready to Move',
    overview: 'Simple and practical 2 RK set with a small kitchen space in a residential local area.',
    propertyType: '2 RK',
    furnishing: 'Unfurnished',
    floor: 'Ground Floor',
    age: '3 Years',
    society: 'Independent',
    parking: 'Available',
  },
  {
    id: 3,
    title: 'Simple 3 RK Independent Floor',
    location: 'Lucknow',
    price: '₹11,000 / mo',
    emi: 'Maintenance included',
    category: 'room',
    badge: 'Top Choice',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    beds: 3,
    baths: 2,
    sqft: '700 sqft',
    facing: 'East Facing',
    status: 'Ready to Move',
    overview: 'Standard family 3 RK unit with independent entry and utility space.',
    propertyType: '3 RK',
    furnishing: 'Semi-Furnished',
    floor: '1st Floor',
    age: '2 Years',
    society: 'Gomti Enclave',
    parking: 'Bike Space',
  },
  {
    id: 4,
    title: 'Standard Independent Family Ghar',
    location: 'Sitapur',
    price: '₹52 Lakh',
    emi: 'EMI from ₹26,000/month',
    category: 'residential',
    badge: 'Ghar (50L-56L)',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
    beds: 3,
    baths: 2,
    sqft: '1,500 sqft',
    facing: 'North-East',
    status: 'Ready to Move',
    overview: 'A standard brick-built independent house (Ghar) fitting nicely inside the 50 to 56 lakh budget bracket.',
    propertyType: 'Independent House / Ghar',
    furnishing: 'Unfurnished',
    floor: 'Ground Floor',
    age: '4 Years',
    society: 'Civil Lines Sitapur',
    parking: 'Car Parking',
  },
  {
    id: 5,
    title: 'Clear Title Residential Zameen / Plot',
    location: 'Moradabad',
    price: '₹12.5 Lakh',
    emi: 'EMI from ₹6,500/month',
    category: 'land',
    badge: 'Zameen (10L-15L)',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    beds: null,
    baths: null,
    sqft: '1,000 sqft',
    facing: 'East Facing',
    status: 'Ready for Construction',
    overview: 'Open plot zameen with registry papers cleared, priced precisely between 10 to 15 lakhs.',
    propertyType: 'Residential Plot / Zameen',
    furnishing: 'N/A',
    floor: 'Plot',
    age: 'New',
    society: 'Green Valley Plots',
    parking: 'N/A',
  },
  {
    id: 6,
    title: 'Standard 2 BHK Flat',
    location: 'Lucknow',
    price: '₹19.5 Lakh',
    emi: 'EMI from ₹10,000/month',
    category: 'flat',
    badge: 'Flat (~₹20L)',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop',
    beds: 2,
    baths: 1,
    sqft: '750 sqft',
    facing: 'West Facing',
    status: 'Ready to Move',
    overview: 'Simple budget apartment flat meeting your around ₹20 lakh target requirement.',
    propertyType: 'Apartment / Flat',
    furnishing: 'Unfurnished',
    floor: '2nd Floor',
    age: '2 Years',
    society: 'Lucknow Heights',
    parking: 'Bike Parking',
  },
  {
    id: 7,
    title: 'Student Room / PG Accommodation',
    location: 'Sidhauli',
    price: '₹6,000 / mo',
    emi: 'Food included option',
    category: 'pg',
    badge: 'Verified',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
    beds: 1,
    baths: 1,
    sqft: '280 sqft',
    facing: 'North Facing',
    status: 'Ready to Move',
    overview: 'Normal student hostel room setup with basic mess and utility support.',
    propertyType: 'PG',
    furnishing: 'Semi-Furnished',
    floor: 'Ground Floor',
    age: '1 Year',
    society: 'Balaji PG',
    parking: 'Available',
  },
  {
    id: 8,
    title: 'Standard 2 RK Unit Set',
    location: 'Cant',
    price: '₹8,000 / mo',
    emi: 'Maintenance extra',
    category: 'room',
    badge: '2 RK Unit',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    beds: 2,
    baths: 1,
    sqft: '500 sqft',
    facing: 'East Facing',
    status: 'Ready to Move',
    overview: 'Independent 2 RK rental unit located in a normal residential zone.',
    propertyType: '2 RK',
    furnishing: 'Semi-Furnished',
    floor: '1st Floor',
    age: '3 Years',
    society: 'Cantonment View',
    parking: 'Bike Parking',
  },
  {
    id: 9,
    title: 'Traditional Independent Ghar',
    location: 'Shahjhanpur',
    price: '₹55 Lakh',
    emi: 'EMI from ₹28,000/month',
    category: 'residential',
    badge: 'Ghar (50L-56L)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    beds: 3,
    baths: 2,
    sqft: '1,700 sqft',
    facing: 'East Facing',
    status: 'Ready to Move',
    overview: 'Solid family house (Ghar) layout falling right inside the 50 to 56 lakh price segment.',
    propertyType: 'Independent House / Ghar',
    furnishing: 'Semi-Furnished',
    floor: 'Ground Floor',
    age: '3 Years',
    society: 'Royal Enclave',
    parking: 'Car Space',
  },
  {
    id: 10,
    title: 'Local Residential Zameen Plot',
    location: 'Moholi',
    price: '₹14 Lakh',
    emi: 'EMI from ₹7,000/month',
    category: 'land',
    badge: 'Zameen (10L-15L)',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    beds: null,
    baths: null,
    sqft: '1,200 sqft',
    facing: 'North Facing',
    status: 'Ready for Construction',
    overview: 'Straightforward plot zameen ideal for immediate boundary and construction under 15 lakhs.',
    propertyType: 'Residential Plot / Zameen',
    furnishing: 'N/A',
    floor: 'Plot',
    age: 'New',
    society: 'Moholi Highway Plots',
    parking: 'N/A',
  },
  {
    id: 11,
    title: 'Budget 1 BHK Apartment Flat',
    location: 'Bareilly',
    price: '₹18 Lakh',
    emi: 'EMI from ₹9,000/month',
    category: 'flat',
    badge: 'Flat (~₹20L)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    beds: 1,
    baths: 1,
    sqft: '650 sqft',
    facing: 'East Facing',
    status: 'Ready to Move',
    overview: 'Low-cost apartment flat close to local market area under the 20 lakh limit.',
    propertyType: 'Apartment / Flat',
    furnishing: 'Unfurnished',
    floor: '3rd Floor',
    age: '2 Years',
    society: 'Bareilly Greens',
    parking: 'Bike Space',
  },
  {
    id: 12,
    title: 'Spacious 3 RK Unit Set',
    location: 'Kant',
    price: '₹9,500 / mo',
    emi: 'Water included',
    category: 'room',
    badge: '3 RK Set',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    beds: 3,
    baths: 1,
    sqft: '750 sqft',
    facing: 'North Facing',
    status: 'Ready to Move',
    overview: 'Simple independent 3 RK set with rooms and kitchen space.',
    propertyType: '3 RK',
    furnishing: 'Unfurnished',
    floor: '1st Floor',
    age: '2 Years',
    society: 'Kant Residency',
    parking: 'Available',
  },
];

export default function PropertiesSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);

  const toggleFavorite = (id, e) => {
    e?.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProperties =
    activeTab === 'all'
      ? propertiesData
      : propertiesData.filter((item) => {
          if (activeTab === 'flat') return item.category === 'flat';
          if (activeTab === 'residential') return item.category === 'residential';
          if (activeTab === 'land') return item.category === 'land';
          if (activeTab === 'pg') return item.category === 'pg';
          if (activeTab === 'room') return item.category === 'room';
          return true;
        });

  return (
    <section
      id="properties"
      className="bg-gradient-to-b from-[#1a103c] via-[#24154f] to-[#1a103c] py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-300 block mb-2">
              INDIA HOME PROPERTIES
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
              Explore Our <span className="italic font-normal text-purple-200">Properties</span>
            </h2>
            <p className="text-purple-200/80 text-sm md:text-base max-w-lg leading-relaxed">
              Browse standard rooms, PG, 2-3 RK units, Flats (~₹20L), Zameen (₹10L-15L), and Ghars (₹50L-56L).
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          {[
            { id: 'all', label: 'All Properties' },
            { id: 'room', label: 'Rooms / 2-3 RK / PG' },
            { id: 'flat', label: 'Flats (~₹20 Lakh)' },
            { id: 'land', label: 'Zameen (₹10L - ₹15L)' },
            { id: 'residential', label: 'Ghar (₹50L - ₹56L)' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-900/30 border border-purple-400/30'
                  : 'bg-[#281a52]/85 backdrop-blur-md text-purple-200/90 border border-purple-400/15 hover:bg-purple-800/40 hover:text-white'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-medium text-purple-200 bg-[#281a52]/60 border border-purple-400/15 px-4 py-1.5 rounded-full backdrop-blur-md">
            ✨ {filteredProperties.length} Properties Matching Your Criteria
          </p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                onClick={() => setSelectedProperty(property)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-[#231548]/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl shadow-black/20 hover:shadow-purple-900/30 transition-shadow duration-300 border border-purple-400/20 group flex flex-col cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden bg-purple-950/40">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-75" />

                  {property.badge && (
                    <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#281a52]/80 backdrop-blur-md text-purple-100 border border-purple-400/30 shadow-md tracking-wide">
                      {property.badge}
                    </span>
                  )}

                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={(e) => toggleFavorite(property.id, e)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md hover:bg-black/60 transition-colors"
                    aria-label="Save to favorites"
                  >
                    {favorites[property.id] ? (
                      <FaHeart className="text-red-400 text-base" />
                    ) : (
                      <FaRegHeart className="text-base text-purple-200" />
                    )}
                  </motion.button>

                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-2xl font-serif font-bold drop-shadow-sm text-purple-100">
                      {property.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between bg-transparent">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-purple-300 font-medium mb-1.5">
                      <FaMapMarkerAlt className="text-[11px]" />
                      <span>{property.location}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-200 line-clamp-1">
                      {property.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-purple-400/15 flex items-center justify-between text-xs text-purple-200/90 font-medium">
                    <div className="flex items-center gap-1.5 bg-[#2d1e59]/60 border border-purple-400/15 px-3 py-2 rounded-xl text-purple-100">
                      <FaBed className="text-purple-300" />
                      <span>{property.propertyType}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-[#2d1e59]/60 border border-purple-400/15 px-3 py-2 rounded-xl text-purple-100">
                      <FaRulerCombined className="text-purple-300" />
                      <span>{property.sqft}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1c103f] border border-purple-400/25 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col text-white"
            >
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
              >
                <FaTimes />
              </button>

              <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-purple-400/20">
                  <Image
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-400/20 pb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1.5">
                      {selectedProperty.title}
                    </h2>
                    <div className="flex items-center gap-2 text-purple-200 text-sm">
                      <FaMapMarkerAlt className="text-purple-300" />
                      <span>{selectedProperty.location}</span>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <div className="text-3xl font-serif font-bold text-purple-100">{selectedProperty.price}</div>
                    <div className="text-xs text-purple-300 mt-0.5">{selectedProperty.emi}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#26184f]/60 p-4 rounded-2xl border border-purple-400/20">
                  <div className="flex items-center gap-2 text-sm text-purple-100">
                    <FaBed className="text-purple-300" />
                    <span>{selectedProperty.propertyType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-100">
                    <FaRulerCombined className="text-purple-300" />
                    <span>{selectedProperty.sqft}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-100">
                    <FaCompass className="text-purple-300" />
                    <span>{selectedProperty.facing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-100">
                    <FaRegClock className="text-purple-300" />
                    <span>{selectedProperty.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3.5 px-6 rounded-2xl transition shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2"
                  >
                    <FaCalendarAlt /> Schedule a Visit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#281a52] border border-purple-400/25 text-purple-100 font-medium py-3.5 px-6 rounded-2xl hover:bg-purple-800/40 transition flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt /> Get a Call Back
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => toggleFavorite(selectedProperty.id, e)}
                    className="bg-[#281a52] border border-purple-400/25 text-purple-100 font-medium py-3.5 px-6 rounded-2xl hover:bg-purple-800/40 transition flex items-center justify-center gap-2"
                  >
                    <FaHeart className={favorites[selectedProperty.id] ? 'text-red-400' : 'text-purple-300'} />
                    {favorites[selectedProperty.id] ? 'Saved' : 'Save Property'}
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-white">Overview</h3>
                  <p className="text-purple-200/90 text-sm leading-relaxed">{selectedProperty.overview}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 pt-4 border-t border-purple-400/20 text-sm">
                    <div className="flex justify-between py-2 border-b border-purple-400/10">
                      <span className="text-purple-300/80">Property Type</span>
                      <span className="font-medium text-white">{selectedProperty.propertyType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-purple-400/10">
                      <span className="text-purple-300/80">Society / Area</span>
                      <span className="font-medium text-white">{selectedProperty.society}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-purple-400/10">
                      <span className="text-purple-300/80">Status</span>
                      <span className="font-medium text-white">{selectedProperty.status}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-purple-400/10">
                      <span className="text-purple-300/80">Furnishing</span>
                      <span className="font-medium text-white">{selectedProperty.furnishing}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}