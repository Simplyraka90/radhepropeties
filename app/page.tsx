import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertiesSection from './components/Properties';
import AboutSection from './components/About';
import ServicesSection from './components/Services';
import TestimonialsSection from './components/testimonials';
import ContactSection from './components/Contact';
import Footersection from './components/Footer';
import CustomCursor from './components/CustomCursor'; // <--- Yeh import add kiya hai

export default function Home() {
  return (
    <main>
      {/* Custom Cursor Component */}
      <CustomCursor />

      <Navbar />
      <Hero />
      <PropertiesSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footersection />
    </main>
  );
}