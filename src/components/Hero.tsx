import React, { useState } from 'react';
import { Star, ChevronRight, Fuel, Gauge, Shield, ShieldCheck } from 'lucide-react';
import { VEHICLES } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenBookingWithCar: (carId: string) => void;
}

export default function Hero({ onOpenBooking, onOpenBookingWithCar }: HeroProps) {
  // Filter highlight/premium vehicles for the Hero Spotlight showcase
  const heroVehicles = VEHICLES.filter((car) =>
    ['alphard', 'palisade', 'fortuner', 'zenix'].includes(car.id)
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const activeCar = heroVehicles[activeIdx] || heroVehicles[0];

  const handleScrollToFleet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#armada');
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
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col justify-center overflow-hidden transition-colors"
    >
      {/* Background Decorative Grid and Ambient Lights */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-300 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Apple-style floating top badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200">
              🇮🇩 Armada Nasional Premium Terlengkap & Terpercaya
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column (5 Cols) */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1 justify-center lg:justify-start text-amber-500 dark:text-amber-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-slate-600 dark:text-slate-300 text-xs font-bold ml-2 font-mono bg-slate-150 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                  4.9/5.0 Google Reviews
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black font-sans tracking-tight text-slate-900 dark:text-white leading-tight">
                Solusi Rental <span className="text-[#146AFF] bg-clip-text bg-gradient-to-r from-blue-500 to-[#146AFF]">Mobil Premium</span> untuk Setiap Perjalanan
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                "Perjalanan Nyaman Dimulai Bersama Kami". Nikmati pengalaman berkendara yang mewah, aman, dan profesional dengan armada terbaru serta standar pelayanan bintang lima.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBookingWithCar(activeCar.id)}
                className="w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-[#146AFF] to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/35 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2 text-base"
                id="hero-cta-sewa"
              >
                <span>Sewa Sekarang</span>
                <ChevronRight size={18} />
              </button>

              <button
                onClick={handleScrollToFleet}
                className="w-full sm:w-auto px-8 py-4.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:-translate-y-1 transition-all text-base hover:shadow-lg"
                id="hero-cta-armada"
              >
                Lihat Armada
              </button>
            </div>

            {/* Highlights stats or guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-slate-500 dark:text-slate-400">
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-black text-slate-900 dark:text-white font-sans">
                  100%
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider font-sans text-slate-500 dark:text-slate-400">
                  Higienis & Steril
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-black text-slate-900 dark:text-white font-sans">
                  99.8%
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider font-sans text-slate-500 dark:text-slate-400">
                  Tepat Waktu
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-black text-[#146AFF] dark:text-[#146AFF] font-sans">
                  Free
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider font-sans text-slate-500 dark:text-slate-400">
                  Antar Jemput
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column - Spotlight Car interactive card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* The Glass Spotlight Card Container */}
            <div className="relative bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Absolutes decorative lights */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#146AFF]/10 dark:bg-[#146AFF]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header inside Card */}
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-5 mb-5">
                <div>
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF]">
                    Spotlight Rental
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-1 text-slate-900 dark:text-white leading-none">
                    {activeCar.name}
                  </h3>
                </div>
                <div className="bg-[#146AFF]/10 dark:bg-[#146AFF]/25 px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-blue-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#146AFF] animate-pulse"></span>
                  <span className="text-[11px] font-bold text-[#146AFF] uppercase font-mono tracking-wider">
                    Ready Stock
                  </span>
                </div>
              </div>

              {/* Dynamic Car image with hover zoom */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-2 mb-6 shadow-inner cursor-zoom-in">
                <img
                  src={activeCar.image}
                  referrerPolicy="no-referrer"
                  alt={activeCar.name}
                  className="max-h-full object-contain md:max-h-[240px] transform hover:scale-110 duration-500 ease-out transition-transform rounded-xl"
                  id={`hero-spotlight-image-${activeCar.id}`}
                />
                
                {/* Tech specifications tags layer on bottom of image container */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
                  <span className="bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center space-x-1">
                    <Fuel size={12} className="text-amber-500" />
                    <span>{activeCar.fuel}</span>
                  </span>
                  <span className="bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center space-x-1">
                    <Gauge size={12} className="text-[#146AFF]" />
                    <span>{activeCar.transmission}</span>
                  </span>
                  <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center space-x-1 border border-slate-700/50">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span>Tahun {activeCar.year}</span>
                  </span>
                </div>
              </div>

              {/* Quick specs grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 px-4 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-100 lg:border-none dark:border-slate-800/40 mb-6">
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Harga Mulai Dari</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white font-sans">
                    Rp {activeCar.priceSelfDrive.toLocaleString('id-ID')}
                    <span className="text-xs font-medium text-slate-500">/hari</span>
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Kapasitas</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {activeCar.capacity} Penumpang
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Keunggulan Utama</span>
                  <span className="text-xs font-bold text-[#146AFF] truncate block">
                    {activeCar.features[0]} & {activeCar.features[1]}
                  </span>
                </div>
              </div>

              {/* CTA Booking specifically for this active spotlight car */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/60 dark:border-slate-800/60 pt-5">
                <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  *Tersedia opsi sewa lepas kunci maupun dengan sopir pariwisata profesional.
                </span>
                <button
                  onClick={() => onOpenBookingWithCar(activeCar.id)}
                  className="px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#146AFF] dark:hover:bg-[#146AFF] dark:hover:text-white transition-all transform hover:scale-105"
                  id={`spotlight-book-btn-${activeCar.id}`}
                >
                  Booking {activeCar.brand} Ini
                </button>
              </div>
            </div>

            {/* Small dynamic tab switchers for Hero spotlight cars */}
            <div className="grid grid-cols-4 gap-2.5">
              {heroVehicles.map((car, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={car.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isActive
                        ? 'border-[#146AFF] bg-[#146AFF]/10 dark:bg-blue-950/30 text-[#146AFF] font-bold shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300'
                    }`}
                    id={`hero-spotlight-switch-${car.id}`}
                  >
                    <span className="block text-xs md:text-sm font-sans font-bold leading-none truncate">
                      {car.name.split(' ')[1]}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-400 hidden sm:block uppercase tracking-wider mt-1">
                      {car.type}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
