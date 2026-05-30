import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenBooking, isDarkMode, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Armada', href: '#armada' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Alur Sewa', href: '#alur' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#146AFF] to-[#0F172A] p-0.5 shadow-md shadow-blue-500/10">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center transition-colors">
                  <span className="font-sans font-black text-xl italic tracking-wider text-[#146AFF] group-hover:text-amber-500 transition-colors">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-sans tracking-wider text-slate-900 dark:text-white leading-none">
                  ARKANA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#146AFF] font-bold font-mono">
                  Rent Car
                </span>
              </div>
            </a>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#146AFF] dark:hover:text-[#146AFF] transition-colors"
                id={`nav-${item.href.replace('#', '')}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Area - Theme & Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
              id="theme-toggler"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            <a
              href="tel:+628123456789"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center space-x-1"
              title="Hubungi Kami"
              id="nav-phone-call"
            >
              <Phone size={16} className="text-[#146AFF]" />
              <span className="text-xs font-mono font-bold px-1">24H Hotline</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#146AFF] to-[#0A4BB5] hover:from-[#146AFF] hover:to-[#146AFF] text-white font-bold text-sm tracking-wide shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all"
              id="nav-btn-sewa"
            >
              Sewa Sekarang
            </button>
          </div>

          {/* Mobile Hamburg/Toggle Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme Mobile"
              id="theme-toggler-mobile"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              id="menu-toggle-mobile"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 shadow-2xl border-b border-slate-200 dark:border-slate-900 py-6 px-4 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="px-4 py-3 rounded-lg text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-[#146AFF] dark:hover:text-[#146AFF] transition-all"
                id={`nav-mobile-${item.href.replace('#', '')}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex flex-col space-y-3">
            <a
              href="tel:+628123456789"
              className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold border border-slate-200 dark:border-slate-800"
              id="mobile-phone-call"
            >
              <Phone size={18} className="text-[#146AFF]" />
              <span>Hotline 24 Jam (+62 812-3456-789)</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-xl bg-[#146AFF] text-white font-bold text-center shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all text-base"
              id="mobile-btn-sewa"
            >
              Sewa Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
