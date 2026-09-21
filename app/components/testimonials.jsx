'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviewsData = [
  {
    id: 1,
    name: 'Col. R.K. Tripathi (Retd.)',
    location: 'Cantt Lucknow',
    comment:
      'Lucknow Cantt area mein luxury villa rent par lene ke liye Radha Properties ka approach kafi professional raha. Fast response aur transparent dealing mili.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amitabh Saxena',
    location: 'Bareilly',
    comment:
      'Bareilly mein commercial property sell karni thi. Team ne sahi market price guide kiya aur mujhe sirf 2 hafte mein genuine buyer dhoond kar diya.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dharmendra Singh',
    location: 'Powayan',
    comment:
      'Powayan town ke andar plot buy karne ke liye sahi guidance mili. Prices thode aur kam ho sakte the, par overall deal theek rahi.',
    rating: 3,
  },
  {
    id: 4,
    name: 'Divya Dixit',
    location: 'Sitapur',
    comment:
      'Sitapur college ke paas PG room dhoondhna mushkil lag raha tha, lekin Radha Properties ki team ne budget mein ek accha aur safe room dila diya.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Alok Mishra',
    location: 'Shahjahanpur',
    comment:
      'Sadar bazaar ke paas rented PG chahiye tha. Location bohot achi hai aur owner bhi kafi cooperative hain. Good service!',
    rating: 4,
  },
  {
    id: 6,
    name: 'Sunil Kumar',
    location: 'Sidhauli',
    comment:
      'Sidhauli local areas mein residential properties ki achi range dikhayi gayi. Dealing process kaafi asan aur clear tha.',
    rating: 4,
  },
  {
    id: 7,
    name: 'Kavita Tiwari',
    location: 'Ramnagar',
    comment:
      'Ramnagar jaise chote area mein bhi aisi professional service milna achi baat hai. Mujhe mere budget mein hi accha room mil gaya.',
    rating: 4,
  },
  {
    id: 8,
    name: 'Geeta Rani',
    location: 'Bareilly',
    comment:
      'Ghar ke paas hi family ke liye rented room final karne mein Radha Properties ne bohot help ki. Sahi price par acchi location mil gayi.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Sandeep Kumar',
    location: 'Bilsanda',
    comment:
      'Bilsanda area mein agricultural land ki khoj thi. Saari legal verification aur details time par mil gayi thi.',
    rating: 4,
  },
  {
    id: 10,
    name: 'Shalini Sinha',
    location: 'Cantt Lucknow',
    comment:
      'Lucknow Cantt mein working professionals ke liye safe aur clean PG options mil gaye. Service thodi aur fast ho sakti thi par kaam ho gaya.',
    rating: 3,
  },
  {
    id: 11,
    name: 'Rahul Saxena',
    location: 'Bareilly',
    comment:
      'Civil Lines, Bareilly mein 2BHK flat purchase kiya. Radha Properties ki team ne sare legal documents verify karwane mein poori madad ki.',
    rating: 5,
  },
  {
    id: 12,
    name: 'Mukesh Kumar',
    location: 'Kaat',
    comment:
      'Kaat market mein property buy aur sell ke liye ab local mein hi ek bharosemand option mil gaya hai. Sahi daam par deal ho gayi.',
    rating: 4,
  },
  {
    id: 13,
    name: 'Tarun Joshi',
    location: 'Shahjahanpur / Sitapur',
    comment:
      'Shahjahanpur aur Sitapur dono jagah property options dekhne ko mile. Prices market ke hisab se kafi reasonable lage.',
    rating: 4,
  },
  {
    id: 14,
    name: 'Dr. Manoj Awasthi',
    location: 'Sitapur',
    comment:
      'Sitapur main city mein commercial property purchase ki hai. Radha Properties ki team ki local market knowledge kafi strong hai.',
    rating: 5,
  },
  {
    id: 15,
    name: 'Pooja Rathore',
    location: 'Shahjahanpur',
    comment:
      'Maine apna purana house sell karne ke liye property consultant se contact kiya tha, jaldi hi acche buyers se meeting fix ho gayi.',
    rating: 4,
  },
  {
    id: 16,
    name: 'Mahesh Chandra',
    location: 'Ramnagar',
    comment:
      'Ramnagar mein rent par room milne mein pehle thodi dikkat aa rahi thi, par direct coordination se jaldi hi room final ho gaya.',
    rating: 3,
  },
  {
    id: 17,
    name: 'Rakesh Kumar Mishra',
    location: 'Sidhauli',
    comment:
      'Sidhauli highway ke paas residential plot liya hai. Site visit se lekar registry tak ka safar kafi smooth raha.',
    rating: 5,
  },
  {
    id: 18,
    name: 'Neha Agarwal',
    location: 'Bareilly',
    comment:
      'Bareilly college ke paas single room search kar rahi thi. Sahi price par safe environment wali location mil gayi.',
    rating: 4,
  },
  {
    id: 19,
    name: 'Rajeshwari Devi',
    location: 'Bilsanda',
    comment:
      'Family ke liye Bilsanda mein rented room chahiye tha. Listing clear thi aur agent ka behaviour bhi kaafi polite tha.',
    rating: 4,
  },
  {
    id: 20,
    name: 'Major Ankit Vats',
    location: 'Cantt Lucknow',
    comment:
      'Lucknow mein property renting process kafi systematic laga. Time par saari formalities puri ho gayi thi.',
    rating: 5,
  },
  {
    id: 21,
    name: 'Manish Verma',
    location: 'Powayan',
    comment:
      'Powayan mein students ke liye PG rooms ki achi jankari aur options mil gaye. Service theek-thak thi.',
    rating: 3,
  },
  {
    id: 22,
    name: 'Abhishek Gupta',
    location: 'Lucknow / Bareilly',
    comment:
      'Investment ke liye multiple cities mein property dekhi. Radha Properties ka verification process kafi reliable laga.',
    rating: 5,
  },
  {
    id: 23,
    name: 'Vipin Kumar',
    location: 'Shahjahanpur',
    comment:
      'Shahjahanpur city mein plot lena tha, yahan ki market rates ke mutabiq best deal mil gayi. Transparent guidance mili.',
    rating: 4,
  },
  {
    id: 24,
    name: 'Sanjay Bajpai',
    location: 'Sitapur',
    comment:
      'Sitapur mein apna plot bina kisi extra hassle ke sell ho gaya. Proper documentation ke sath kaam hua.',
    rating: 4,
  },
  {
    id: 25,
    name: 'Satish Chandra',
    location: 'Kaat',
    comment:
      'Kaat market ke andar business ke liye rental space chahiye tha, jo ki timely mil gaya. Rates bhi market standard ke hisab se theek the.',
    rating: 4,
  },
  {
    id: 26,
    name: 'Priya Sharma',
    location: 'Bareilly',
    comment:
      'Rajendra Nagar, Bareilly mein ekdum affordable aur safe PG room mil gaya. Fooding aur environment dono ache hain.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-[#fcfbfc] to-purple-50/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto text-purple-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.7"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-auto text-purple-300/60 translate-y-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.5"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="absolute top-10 left-5 w-48 sm:w-64 h-48 sm:h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-5 w-48 sm:w-64 h-48 sm:h-64 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#7c3aed] uppercase bg-purple-100/70 border border-purple-200 px-3 sm:px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#4c1d95] px-2"
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 max-w-lg sm:max-w-xl mx-auto px-4">
            Trusted by home buyers, renters, and students across Bareilly, Lucknow,
            Sitapur, and neighboring regions.
          </p>
        </div>

        <div className="relative max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white/90 backdrop-blur-md border border-purple-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-purple-900/5 relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 sm:top-6 sm:right-8 text-purple-100/80 text-5xl sm:text-7xl pointer-events-none font-serif">
                <FaQuoteLeft />
              </div>

              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 drop-shadow-sm ${
                      i < currentReview.rating ? 'text-amber-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed italic mb-6 sm:mb-8 relative z-10">
                &ldquo;{currentReview.comment}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-purple-50 pt-4 gap-2">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4c1d95]">
                    {currentReview.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#7c3aed] uppercase tracking-wider block sm:inline mt-0.5 sm:mt-0">
                    📍 {currentReview.location}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">
                  Verified Customer
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-full bg-white border border-purple-200 text-[#581c87] shadow-md hover:bg-purple-50 transition active:scale-95 focus:outline-none"
              aria-label="Previous Review"
            >
              <FaChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[150px] sm:max-w-[200px] py-2 scrollbar-none">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                    currentIndex === idx ? 'w-5 sm:w-6 bg-[#7c3aed]' : 'w-1.5 sm:w-2 bg-purple-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-full bg-white border border-purple-200 text-[#581c87] shadow-md hover:bg-purple-50 transition active:scale-95 focus:outline-none"
              aria-label="Next Review"
            >
              <FaChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
