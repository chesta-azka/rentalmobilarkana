import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer
      id="kontak"
      className="bg-[#0F172A] border-t border-slate-800 text-slate-400 py-16 lg:py-20 font-sans transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Information Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & Company Address info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#146AFF] to-blue-900 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-sans font-black text-xl italic tracking-wider text-[#146AFF]">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white leading-none">
                  ARKANA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#146AFF] font-bold font-mono">
                  Rent Car
                </span>
              </div>
            </div>

            <p className="text-slate-400 font-sans font-medium text-xs sm:text-sm leading-relaxed">
              "Perjalanan Nyaman Dimulai Bersama Kami". Penyedia sewa mobil premium resmi bersertifikat nasional tepercaya, mengutamakan kenyamanan, kemewahan, dan keselamatan perjalanan bisnis serta wisata Anda.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm font-medium">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin size={18} className="text-[#146AFF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Mayjen Sungkono No. 182, Pakuwon Square, Dukuh Pakis, Surabaya, Jawa Timur 60224, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 lg:pl-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-[#146AFF] pl-3">
              Tautan Cepat
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollToTop(e, '#home')}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Beranda</span>
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  onClick={(e) => handleScrollToTop(e, '#tentang')}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Tentang Perusahaan</span>
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => handleScrollToTop(e, '#layanan')}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Layanan</span>
                </a>
              </li>
              <li>
                <a
                  href="#armada"
                  onClick={(e) => handleScrollToTop(e, '#armada')}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Armada Pilihan</span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScrollToTop(e, '#faq')}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Pusat FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-[#146AFF] pl-3">
              Hubungi Kami
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-medium text-slate-300">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#146AFF] shrink-0" />
                <a href="tel:+628123456789" className="hover:text-white font-mono font-bold leading-none">
                  +62 812-3456-789 (Hotline)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#146AFF] shrink-0" />
                <a href="tel:+628779998888" className="hover:text-white font-mono leading-none">
                  +62 31-567-8901 (Kantor)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#146AFF] shrink-0" />
                <a href="mailto:info@arkanarentcar.com" className="hover:text-white font-mono break-all leading-none">
                  info@arkanarentcar.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={16} className="text-[#146AFF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Jam Operasional</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5 leading-none">7 Hari Seminggu: 24 Jam Nonstop</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Corporate Connections */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-[#146AFF] pl-3">
              Sosial Media
            </h4>
            <p className="text-xs font-medium leading-relaxed">
              Ikuti media sosial resmi kami untuk mendapatkan tips perjalanan berkendara aman serta katalog promo harga menarik mingguan.
            </p>
            
            {/* Social circle buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-[#146AFF] transition-all transform hover:-translate-y-1"
                aria-label="Instagram Arkana"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-[#146AFF] transition-all transform hover:-translate-y-1"
                aria-label="Facebook Arkana"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-[#146AFF] transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn Arkana"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-[#146AFF] transition-all transform hover:-translate-y-1"
                aria-label="YouTube Arkana"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Micro partner seal stamp inside column */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-500 font-bold space-y-1">
              <span className="block text-slate-400 uppercase tracking-widest leading-none">PT ARKANA PRATAMA PERSADA</span>
              <span className="block leading-none">KEMENKUMHAM RI AHU-0012234.AH.01.01</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and certifications */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            &copy; {currentYear} <strong>Arkana Rent Car</strong>. Hak Cipta Dilindungi Undang-Undang.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#faq" onClick={(e) => handleScrollToTop(e, '#faq')} className="hover:text-slate-300">
              Syarat & Ketentuan Sewa
            </a>
            <span className="text-slate-850">•</span>
            <a href="#faq" onClick={(e) => handleScrollToTop(e, '#faq')} className="hover:text-slate-300">
              Kebijakan Privasi
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
