import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, PhoneCall } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollBack, setShowScrollBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBack(true);
      } else {
        setShowScrollBack(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-4">
      {/* Scroll to Top Trigger */}
      {showScrollBack && (
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#146AFF] dark:text-white rounded-full shadow-xl hover:bg-[#146AFF] hover:text-white dark:hover:bg-[#146AFF] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 animate-fadeIn"
          title="Kembali Ke Atas"
          aria-label="Back to Top"
          id="back-to-top-floating"
        >
          <ArrowUp size={18} className="stroke-[3px]" />
        </button>
      )}

      {/* Floating Sparkly WhatsApp Button with Pulse ring */}
      <a
        href="https://wa.me/628123456789?text=Halo%20Arkana%20Rent%20Car%2C%20saya%20tertarik%20ingin%20tanya%20mengenai%20sewa%20mobil%20premium."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
        title="Hubungi WhatsApp Kami"
        aria-label="Contact WhatsApp"
        id="whatsapp-floating"
      >
        {/* Soft pulse background ring waves */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        
        {/* Modern WhatsApp icon / alternative representation */}
        <MessageSquare size={22} className="relative z-10 font-bold" />
        
        {/* Hover label tooltip */}
        <span className="absolute right-full mr-3 bg-slate-900/90 text-white font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300 pointer-events-none whitespace-nowrap">
          Konsultasi Admin WA Siaga (24H)
        </span>
      </a>
    </div>
  );
}
