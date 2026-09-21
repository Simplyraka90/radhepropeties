'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight
} from 'react-icons/fa';

// ==========================================
// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL
// ==========================================
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyNcHY8rf5sUGtWeDYjjzD8OubxPgFu7VKo1WEmYDtk09KibSy85AWWwwqecEhm2qJq/exec';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (status.message) {
      setStatus({
        type: '',
        message: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    setStatus({
      type: '',
      message: ''
    });

    try {
      if (
        !GOOGLE_SCRIPT_URL ||
        GOOGLE_SCRIPT_URL ===
          'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
      ) {
        throw new Error(
          'Google Sheet connection URL is missing.'
        );
      }

      const response = await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type':
              'text/plain;charset=utf-8'
          },
          body: JSON.stringify(formData)
        }
      );

      // Google Apps Script receives the request.
      // no-cors prevents reading the response,
      // so successful request is treated as saved.
      setStatus({
        type: 'success',
        message:
          'Thank you! Your message has been sent successfully.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      console.error(
        'Google Sheet Error:',
        error
      );

      setStatus({
        type: 'error',
        message:
          'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#f9f5ff] via-[#ffffff] to-[#f4edff] py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -15
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-10 max-w-2xl"
        >
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest inline-block mb-3 shadow-sm">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a103c] mb-2 tracking-tight">
            Contact Us
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We&apos;re here to help you find the right property. Get in touch with our expert team today.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-purple-100/80 shadow-xl shadow-purple-950/[0.03] space-y-4">

              {/* Office */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#1a103c] flex items-center justify-center text-sm flex-shrink-0 shadow-inner">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-bold text-[#1a103c] text-xs sm:text-sm mb-0.5">
                    Our Office
                  </h4>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    Shahajhanpur Ganta Ghar petrol pump , Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#1a103c] flex items-center justify-center text-sm flex-shrink-0 shadow-inner">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-bold text-[#1a103c] text-xs sm:text-sm mb-0.5">
                    Call Us
                  </h4>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    +91 8303404461
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#1a103c] flex items-center justify-center text-sm flex-shrink-0 shadow-inner">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-bold text-[#1a103c] text-xs sm:text-sm mb-0.5">
                    Email Us
                  </h4>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    rachitrathour98@gmail.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#1a103c] flex items-center justify-center text-sm flex-shrink-0 shadow-inner">
                  <FaClock />
                </div>

                <div>
                  <h4 className="font-bold text-[#1a103c] text-xs sm:text-sm mb-0.5">
                    Working Hours
                  </h4>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-3 border-t border-purple-100/60">
                <span className="text-[10px] font-bold text-[#1a103c] uppercase tracking-wider block mb-2">
                  Follow Us
                </span>

                <div className="flex items-center gap-2">

                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 text-[#1a103c] flex items-center justify-center shadow-sm hover:bg-[#1a103c] hover:text-white transition"
                  >
                    <FaFacebookF className="text-xs" />
                  </a>

                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 text-[#1a103c] flex items-center justify-center shadow-sm hover:bg-[#1a103c] hover:text-white transition"
                  >
                    <FaInstagram className="text-xs" />
                  </a>

                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 text-[#1a103c] flex items-center justify-center shadow-sm hover:bg-[#1a103c] hover:text-white transition"
                  >
                    <FaLinkedinIn className="text-xs" />
                  </a>

                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 text-[#1a103c] flex items-center justify-center shadow-sm hover:bg-[#1a103c] hover:text-white transition"
                  >
                    <FaYoutube className="text-xs" />
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="lg:col-span-4 z-20"
          >
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-xl border border-purple-100/80 relative">

              <h3 className="text-xl font-bold text-[#1a103c] mb-4">
                Send Us a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >

                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    maxLength={100}
                    className="w-full px-3.5 py-3 rounded-xl border border-purple-100 text-xs sm:text-sm focus:outline-none focus:border-[#1a103c] bg-purple-50/20 text-gray-800 placeholder-gray-400 transition"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    maxLength={150}
                    className="w-full px-3.5 py-3 rounded-xl border border-purple-100 text-xs sm:text-sm focus:outline-none focus:border-[#1a103c] bg-purple-50/20 text-gray-800 placeholder-gray-400 transition"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    maxLength={20}
                    className="w-full px-3.5 py-3 rounded-xl border border-purple-100 text-xs sm:text-sm focus:outline-none focus:border-[#1a103c] bg-purple-50/20 text-gray-800 placeholder-gray-400 transition"
                  />

                </div>

                {/* Inquiry */}
                <div>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-3 rounded-xl border border-purple-100 text-xs sm:text-sm focus:outline-none focus:border-[#1a103c] bg-purple-50/20 text-gray-700 transition"
                  >
                    <option value="">
                      Select Inquiry Type
                    </option>

                    <option value="buy">
                      Buy Property
                    </option>

                    <option value="sell">
                      Sell Property
                    </option>

                    <option value="rent">
                      Rent / PG Rooms
                    </option>

                    <option value="commercial">
                      Commercial Space
                    </option>

                    <option value="legal">
                      Legal / Consultation Support
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Your Message"
                    required
                    maxLength={1000}
                    className="w-full px-3.5 py-3 rounded-xl border border-purple-100 text-xs sm:text-sm focus:outline-none focus:border-[#1a103c] bg-purple-50/20 text-gray-800 placeholder-gray-400 resize-none transition"
                  />
                </div>

                {/* Status */}
                {status.message && (
                  <div
                    className={`rounded-xl px-3 py-2.5 text-xs font-medium ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-red-50 text-red-700 border border-red-100'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  whileHover={{
                    scale: loading ? 1 : 1.01
                  }}
                  whileTap={{
                    scale: loading ? 1 : 0.98
                  }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a103c] text-white py-3.5 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-950/15 hover:bg-[#2b1b58] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading
                    ? 'Sending...'
                    : 'Submit Message'}

                  {!loading && (
                    <FaArrowRight className="text-xs" />
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="hidden lg:block lg:col-span-4 relative h-[420px] rounded-l-[80px] rounded-r-3xl overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
              alt="Interior background"
              fill
              className="object-cover brightness-[0.85]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a103c]/90 via-[#1a103c]/30 to-transparent flex flex-col justify-end p-8 text-white">

              <span className="font-serif italic text-2xl mb-0.5">
                Let&apos;s Find Your
              </span>

              <span className="font-serif italic text-3xl font-bold mb-2">
                Dream Space
              </span>

              <p className="text-xs text-purple-200">
                Our experts are just a message away.
              </p>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">

        <svg
          className="relative block w-full h-12 md:h-16 text-purple-200/40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>

      </div>

    </section>
  );
}