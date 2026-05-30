import { ClipboardCheck, PhoneCall, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export default function CallToAction({ onOpenBooking }: CallToActionProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="bg-gradient-to-br from-[#146AFF] via-blue-700 to-[#0F172A] rounded-[40px] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-400/20">
          
          {/* Glass lines elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Crown premium badge icon */}
            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 shadow-lg animate-bounce-slow">
              <Sparkles size={28} fill="currentColor" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight leading-tight">
              Siap Menemukan Kendaraan Terbaik untuk Perjalanan Anda?
            </h2>

            <p className="text-blue-100 font-medium text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Dapatkan promo harga khusus kuota terbatas bulan ini untuk sewa lepas kunci maupun dengan supir pribadi. Hubungi tim sales eksekutif kami sekarang.
            </p>

            {/* CTA controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4.5 bg-white text-[#146AFF] hover:bg-slate-50 font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all flex items-center justify-center space-x-2 text-base cursor-pointer"
                id="cta-booking-submit-now"
              >
                <ClipboardCheck size={18} />
                <span>Booking Sekarang</span>
              </button>

              <a
                href="https://wa.me/628123456789?text=Halo%20Arkana%20Rent%20Car%2C%20saya%20ingin%20tanya%20mengenai%20sewa%20mobil%20premium."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 bg-slate-900/40 backdrop-blur-md hover:bg-slate-900/60 text-white font-black rounded-2xl border border-white/20 hover:border-white/40 shadow-lg hover:scale-[1.03] transition-all flex items-center justify-center space-x-2 text-base"
                id="cta-whatsapp-consult"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>Konsultasi Hubungi Kami</span>
              </a>
            </div>

            {/* Core guarantees row */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-8 text-[11px] font-bold tracking-widest text-blue-200/80 uppercase font-mono">
              <span>✓ TANPA BIAYA TERSEMBUNYI</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ GRATIS ANTAR JEMPUT UNIT</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ DUKUNGAN DARURAT 24 JAM</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
