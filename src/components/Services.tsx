import {
  Calendar,
  CalendarRange,
  CalendarDays,
  UserCheck,
  Key,
  PlaneTakeoff,
  Briefcase,
  Heart,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, any> = {
  Calendar: Calendar,
  CalendarRange: CalendarRange,
  CalendarDays: CalendarDays,
  UserCheck: UserCheck,
  Key: Key,
  PlaneTakeoff: PlaneTakeoff,
  Briefcase: Briefcase,
  Heart: Heart
};

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section
      id="layanan"
      className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
            Layanan Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
            Solusi Sewa Mobil Terlengkap
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base">
            Kami menyediakan beragam skema sewa kendaraan yang fleksibel dan berorientasi pada kepuasan pelanggan guna memenuhi kebutuhan individu, bisnis, pariwisata, hingga wedding.
          </p>
          <div className="w-16 h-1 bg-[#146AFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid - 4 Columns on large screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const IconComp = iconMap[srv.iconName] || Calendar;
            return (
              <div
                key={srv.id}
                className="relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                id={`service-card-${srv.id}`}
              >
                {/* Visual Glass highlights inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#146AFF]/5 to-transparent rounded-tr-3xl rounded-bl-full pointer-events-none group-hover:from-[#146AFF]/15 transition-all duration-300" />
                
                <div className="space-y-4">
                  {/* Icon Circle */}
                  <div className="inline-flex p-3 rounded-2xl bg-[#146AFF]/5 dark:bg-[#146AFF]/10 border border-blue-500/10 text-[#146AFF] group-hover:bg-[#146AFF] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <IconComp size={24} className="stroke-[2px]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-[#146AFF] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-sans font-medium line-clamp-3">
                      {srv.description}
                    </p>
                  </div>

                  {/* Bullet points benefits inside Card */}
                  <ul className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 pointer-events-none">
                    {srv.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 shrink-0"></span>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer details / quick interaction */}
                <div className="pt-5 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#146AFF] transition-colors uppercase font-mono tracking-widest">
                    Pesan Sewa
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="p-1 px-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-[#146AFF] group-hover:bg-[#146AFF] group-hover:text-white group-hover:border-[#146AFF] text-xs font-bold transition-all flex items-center space-x-1"
                    id={`service-book-btn-${srv.id}`}
                  >
                    <span>Pilih</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
