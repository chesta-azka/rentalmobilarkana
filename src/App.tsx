import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FleetShowcase from './components/FleetShowcase';
import Advantages from './components/Advantages';
import BookingTimeline from './components/BookingTimeline';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import { ShieldCheck, Compass, Sparkles } from 'lucide-react';

export default function App() {
  // Theme Management (White Mode / Corporate Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // Default to elegant crisp light theme
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [targetCarId, setTargetCarId] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setTargetCarId(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithCar = (carId: string) => {
    setTargetCarId(carId);
    setIsBookingOpen(true);
  };

  // Pre-loading Animation Engine State
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 400); // Small delay for smooth exit fade
          return 100;
        }
        return prev + 8; // smooth steps
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  // Structured Data (JSON-LD Rich Schema for Auto-Rentals)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CarRentalBusiness",
    "name": "Arkana Rent Car",
    "alternateName": "Arkana Sewa Mobil Premium",
    "image": "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
    "description": "Perusahaan rental mobil nasional premium profesional dan terpercaya dengan pilihan unit Alphard, Innova Zenix, Fortuner, Palisade terbaru.",
    "@id": "https://arkanarentcar.com",
    "url": "https://arkanarentcar.com",
    "telephone": "+628123456789",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Mayjen Sungkono No. 182, Pakuwon Square",
      "addressLocality": "Surabaya",
      "addressRegion": "Jawa Timur",
      "postalCode": "60224",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.291244",
      "longitude": "112.696324"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0F172A] flex flex-col items-center justify-center text-white px-4 font-sans select-none">
        {/* Glowing Logo Circle */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#146AFF] to-blue-900 duration-1000 p-0.5 shadow-[0_0_50px_rgba(20,106,255,0.4)] animate-pulse-slow mb-6">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center border border-white/5">
            <span className="font-sans font-black text-4xl italic tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#146AFF]">
              A
            </span>
          </div>
        </div>

        {/* Text descriptions */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xl font-bold tracking-widest text-[#146AFF] font-mono leading-none">
            ARKANA RENT CAR
          </h2>
          <span className="text-[10px] md:text-xs text-slate-450 uppercase tracking-[0.3em] font-sans font-bold text-slate-400 block">
            Perjalanan Nyaman Dimulai Bersama Kami
          </span>
        </div>

        {/* Premium Progress Loading Bar */}
        <div className="w-48 h-[3px] bg-slate-800 rounded-full overflow-hidden relative border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#146AFF] to-amber-400 transition-all duration-100 ease-out rounded-full"
            style={{ width: `${loadPercent}%` }}
          />
        </div>
        
        <span className="text-[10px] text-slate-550 font-mono text-slate-500 font-bold tracking-widest mt-3.5">
          Memulai Mesin Premium... {loadPercent}%
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors selection:bg-[#146AFF] selection:text-white">
      {/* Dynamic SEO JSON-LD Structured Data Injector */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* 1. Header Navigation Bar (Sticky with desktop & mobile layout support) */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="relative">
        {/* 2. Hero Section (Feature Spotlight Tabs Alpha-Innova-Fortuner-Palisade) */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenBookingWithCar={handleOpenBookingWithCar}
        />

        {/* 3. Operational Counters Stats Trust Section */}
        <TrustIndicators />

        {/* 4. About Us Profiling block */}
        <AboutUs />

        {/* 5. Complete Corporate services grids */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 6. Dynamic Fleet Categories Filters Showcase with Drive-Price switches */}
        <FleetShowcase onOpenBookingWithCar={handleOpenBookingWithCar} />

        {/* 7. Corporate Values and Advantages Panel */}
        <Advantages />

        {/* 8. Renting Steps Roadmap Timeline */}
        <BookingTimeline />

        {/* 9. Testimonial interactive Slider Carousel */}
        <Testimonials />

        {/* 10. Partner brands social indicators slider */}
        <ClientLogos />

        {/* 11. FAQ Collapse Accordions grids */}
        <FAQ />

        {/* 12. Secondary Reservation Anchor Call to Action */}
        <CallToAction onOpenBooking={handleOpenBooking} />
      </main>

      {/* 13. Deep corporate footer directories and contacts info */}
      <Footer />

      {/* Modal overlays frames (Booking engine) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedCarId={targetCarId}
      />

      {/* Floating utility actions triggers (WA Quick Link + Back to top) */}
      <FloatingActions />
    </div>
  );
}
