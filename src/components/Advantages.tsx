import {
  ShieldCheck,
  Award,
  Sparkles,
  Smartphone,
  HeartHandshake,
  Clock,
  CheckCircle,
  Grid
} from 'lucide-react';
import { ADVANTAGES } from '../data';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  HeartHandshake: HeartHandshake,
  Clock: Clock,
  CheckCircle: CheckCircle,
  Grid: Grid
};

export default function Advantages() {
  return (
    <section
      id="keunggulan"
      className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
            Mengapa Arkana?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
            Keunggulan Layanan Bintang Lima
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base">
            Sebagai pionir rental mobil premium, kami memadukan armada berkelas tinggi dengan budaya pelayanan terbaik demi kenyamanan mutlak Anda.
          </p>
          <div className="w-16 h-1 bg-[#146AFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* 8 Advantages Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
                id={`advantage-card-${item.id}`}
              >
                {/* Accent glow corner */}
                <div className="absolute top-1 right-1 w-6 h-6 bg-[#146AFF]/5 rounded-bl-full group-hover:scale-150 transition-transform pointer-events-none" />

                {/* Animated icon box */}
                <div className="p-3 bg-[#146AFF]/5 dark:bg-[#146AFF]/10 border border-blue-500/10 text-[#146AFF] group-hover:bg-[#146AFF] group-hover:text-white group-hover:scale-110 rounded-2xl transition-all duration-300 shadow-sm">
                  <IconComp size={22} className="stroke-[2px]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-sans group-hover:text-[#146AFF] transition-colors leading-snug uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-405 text-xs font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
