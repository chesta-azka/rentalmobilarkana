import { useState } from 'react';
import { Users, Gauge, Fuel, Check, ChevronRight, Sparkles } from 'lucide-react';
import { VEHICLES } from '../data';
import { Vehicle } from '../types';

interface FleetShowcaseProps {
  onOpenBookingWithCar: (carId: string) => void;
}

export default function FleetShowcase({ onOpenBookingWithCar }: FleetShowcaseProps) {
  const [selectedFilter, setSelectedFilter] = useState<'Semua' | 'Luxury' | 'SUV' | 'MPV' | 'City Car'>('Semua');
  const [useDriverPrice, setUseDriverPrice] = useState<boolean>(false);

  // Filter cars based on selected category tab
  const filteredVehicles = selectedFilter === 'Semua'
    ? VEHICLES
    : VEHICLES.filter((car) => car.type === selectedFilter);

  const categories: ('Semua' | 'Luxury' | 'SUV' | 'MPV' | 'City Car')[] = [
    'Semua', 'MPV', 'SUV', 'Luxury', 'City Car'
  ];

  return (
    <section
      id="armada"
      className="relative py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-xl text-center lg:text-left space-y-4">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
              Koleksi Unggulan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
              Pilih Kendaraan Impian Anda
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
              Sewa mobil harian, mingguan, atau bulanan dengan kemudahan lepas kunci atau supir berpengalaman pariwisata.
            </p>
          </div>

          {/* Pricing Toggle: Self Drive vs With Driver */}
          <div className="mt-6 lg:mt-0 flex items-center justify-center space-x-3 bg-slate-100 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 w-fit mx-auto lg:mx-0 shadow-sm">
            <button
              onClick={() => setUseDriverPrice(false)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all leading-none ${
                !useDriverPrice
                  ? 'bg-[#146AFF] text-white shadow-md shadow-blue-500/10 scale-100'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#146AFF]'
              }`}
              id="toggle-self-drive"
            >
              Lepas Kunci
            </button>
            <button
              onClick={() => setUseDriverPrice(true)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all leading-none ${
                useDriverPrice
                  ? 'bg-[#146AFF] text-white shadow-md shadow-blue-500/10 scale-100'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#146AFF]'
              }`}
              id="toggle-with-driver"
            >
              Dengan Sopir
            </button>
          </div>
        </div>

        {/* Dynamic Category/Class Filters tabs */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10 border-b border-slate-100 dark:border-slate-900 pb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 shadow-md'
                  : 'bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 text-slate-700 dark:text-slate-350 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
              id={`fleet-filter-${cat.toLowerCase().replace(' ', '-')}`}
            >
              {cat}
            </button>
          ))}
          
          <div className="hidden xl:flex items-center space-x-1.5 ml-auto text-xs text-slate-400 font-bold font-sans">
            <Sparkles size={14} className="text-amber-500" />
            <span>Menampilkan {filteredVehicles.length} Unit Istimewa</span>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car: Vehicle) => {
            const displayPrice = useDriverPrice ? car.priceWithDriver : car.priceSelfDrive;
            return (
              <div
                key={car.id}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-850 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                id={`fleet-card-${car.id}`}
              >
                
                {/* Image Showcase Container */}
                <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Popular luxury tag badge */}
                  {car.isPopular && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-slate-950 font-sans font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center space-x-1">
                      <Sparkles size={10} fill="currentColor" />
                      <span>Best Seller</span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 z-10 bg-slate-900/65 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-mono font-bold px-3 py-1 rounded-full">
                    {car.type}
                  </div>

                  <img
                    src={car.image}
                    referrerPolicy="no-referrer"
                    alt={car.name}
                    className="max-h-full object-contain md:max-h-[160px] group-hover:scale-108 transition-transform duration-500 ease-out"
                    id={`fleet-image-${car.id}`}
                  />
                  
                  <div className="absolute bottom-2 left-4 text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    ID: AR-{car.id.toUpperCase()}
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#146AFF] tracking-widest">
                      {car.brand} • SERI {car.year}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-none">
                      {car.name}
                    </h3>
                  </div>

                  {/* Primary Tech badges */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800">
                    <div className="text-center">
                      <div className="flex justify-center items-center text-slate-500 dark:text-slate-400 mb-1">
                        <Users size={14} className="stroke-[2px]" />
                      </div>
                      <span className="block text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {car.capacity} Kursi
                      </span>
                    </div>

                    <div className="text-center border-x border-slate-100 dark:border-slate-800">
                      <div className="flex justify-center items-center text-slate-500 dark:text-slate-400 mb-1">
                        <Gauge size={14} className="stroke-[2px]" />
                      </div>
                      <span className="block text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">
                        {car.transmission}
                      </span>
                    </div>

                    <div className="text-center">
                      <div className="flex justify-center items-center text-slate-500 dark:text-slate-400 mb-1">
                        <Fuel size={14} className="stroke-[2px]" />
                      </div>
                      <span className="block text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {car.fuel}
                      </span>
                    </div>
                  </div>

                  {/* Features highlights bullet lines */}
                  <div className="space-y-1.5 pointer-events-none">
                    {car.features.slice(0, 3).map((feat, fidx) => (
                      <div key={fidx} className="flex items-center text-[11px] font-medium text-slate-600 dark:text-slate-350">
                        <Check size={12} className="text-emerald-500 mr-2 shrink-0 stroke-[3px]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and booking triggers */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                        {useDriverPrice ? 'DENGAN SUPIR' : 'LEPAS KUNCI'}
                      </span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Rp</span>
                        <span className="text-lg md:text-xl font-black text-slate-900 dark:text-white font-sans leading-none">
                          {displayPrice.toLocaleString('id-ID')}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">/hari</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBookingWithCar(car.id)}
                      className="px-4 py-3 bg-[#146AFF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-500/15 flex items-center space-x-1 group-hover:-translate-y-0.5 active:scale-95"
                      id={`fleet-booking-card-btn-${car.id}`}
                    >
                      <span>Booking</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
