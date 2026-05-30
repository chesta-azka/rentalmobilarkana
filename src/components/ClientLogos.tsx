import { CLIENT_BRANDS } from '../data';
import { ShieldAlert, Sparkles } from 'lucide-react';

export default function ClientLogos() {
  return (
    <section className="py-12 bg-slate-900 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header callout */}
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#146AFF] flex items-center justify-center space-x-1">
            <Sparkles size={11} fill="currentColor" className="mr-1" />
            <span>Kemitraan Korporasi Terpercaya (Official Partner)</span>
          </span>
        </div>

        {/* Brand Logos banner grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center opacity-70">
          {CLIENT_BRANDS.map((item, idx) => (
            <div
              key={idx}
              className="px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#146AFF]/20 hover:bg-white/10 flex items-center justify-center transition-all duration-300 w-full cursor-default group"
              id={`client-logo-card-${idx}`}
            >
              <span className="text-sm font-sans font-black tracking-widest text-slate-400 group-hover:text-white transition-colors uppercase italic">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
