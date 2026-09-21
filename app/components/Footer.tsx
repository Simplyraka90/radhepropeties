'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#130c27] text-gray-300 pt-14 pb-8 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-purple-950/50">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid - Compact & Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-purple-900/40">
          
          {/* Column 1: Brand / About (Col Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* Official Radha Property Logo */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image 
                    src="/log.png" /* Apne logo ka path yahan check kar lein agar public folder mein hai */
                    alt="Radha Property Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg tracking-wider">RADHA</h3>
                  <span className="text-[10px] text-[#D4A373] tracking-[0.2em] uppercase block -mt-1 font-medium">PROPERTY</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted partner in finding the perfect property. Homes, investments and opportunities — all under one roof.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/40 text-gray-300 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#130c27] transition">
                <FaFacebookF className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/40 text-gray-300 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#130c27] transition">
                <FaInstagram className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/40 text-gray-300 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#130c27] transition">
                <FaLinkedinIn className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/40 text-gray-300 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#130c27] transition">
                <FaYoutube className="text-xs" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-[#D4A373] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D4A373] transition">About</Link></li>
              <li><Link href="/properties" className="hover:text-[#D4A373] transition">Properties</Link></li>
              <li><Link href="/services" className="hover:text-[#D4A373] transition">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#D4A373] transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4A373] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services (Col Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Our Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="#" className="hover:text-[#D4A373] transition">Buy Property</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition">Sell Property</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition">Rent Property</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition">Commercial Spaces</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition">Investment Advisory</Link></li>
              <li><Link href="#" className="hover:text-[#D4A373] transition">Home Loan & Legal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Thank You Note (Col Span 3) */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wide mb-3">Contact Info</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-center gap-2.5 text-gray-300">
                  <FaPhoneAlt className="text-[#D4A373] text-xs flex-shrink-0" />
                  <span>+91 8303404461,9140104754</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300">
                  <FaEnvelope className="text-[#D4A373] text-xs flex-shrink-0" />
                  <span>rachitrathour98@gmail.com</span>
                </li>
                <li className="flex items-start gap-2.5 text-gray-300">
                  <FaMapMarkerAlt className="text-[#D4A373] text-xs flex-shrink-0 mt-0.5" />
                  <span>Shahajhanpur Ganta Ghar petrol pump, UP</span>
                </li>
              </ul>
            </div>

            {/* Cursive Thank You Note */}
            <div className="pt-2">
              <p className="font-serif italic text-[#D4A373] text-lg sm:text-xl font-medium tracking-wide">
                Thank you! <span className="block text-sm text-gray-400 font-sans not-italic">for visiting</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Radha Property. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-300 transition">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}