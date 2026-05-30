import { Car, MessageSquare, CalendarCheck, CreditCard, Sparkles } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Pilih Armada',
    desc: 'Telusuri koleksi kendaraan premium kami di website. Tentukan mobil yang sesuai dengan selera, selera kelas, and kapasitas penumpang yang Anda butuhkan.',
    Icon: Car
  },
  {
    num: '02',
    title: 'Hubungi Tim Kami',
    desc: 'Lakukan pemesanan instan lewat formulir booking digital atau chat WhatsApp. Konsultan penunjang perjalanan kami siaga penuh membalas respon Anda.',
    Icon: MessageSquare
  },
  {
    num: '03',
    title: 'Konfirmasi Jadwal',
    desc: 'Selesaikan verifikasi data praktis (KTP & SIM A). Kami akan menjadwalkan titik serah-terima unit di bandara, hotel, rumah, ataupun kantor Anda.',
    Icon: CalendarCheck
  },
  {
    num: '04',
    title: 'Pembayaran Aman',
    desc: 'Selesaikan pelunasan sewa melalui transfer bank virtual account resmi perusahaan kami yang aman, terpercaya, dan tercatat otomatis.',
    Icon: CreditCard
  },
  {
    num: '05',
    title: 'Kendaraan Siap',
    desc: 'Mobil impian Anda diantarkan langsung ke lokasi penjemputan tepat waktu dalam kondisi bersih berkilau, disinfeksi steril, serta bensin terisi prima.',
    Icon: Sparkles
  }
];

export default function BookingTimeline() {
  return (
    <section
      id="alur"
      className="relative py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors overflow-hidden"
    >
      {/* Decorative background grid blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#146AFF]/5 dark:bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
            Cara Reservasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
            Proses Pemesanan Praktis & Mudah
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base">
            Hanya butuh 5 langkah mudah untuk menikmati perjalanan eksklusif bersama Arkana Rent Car. Sistem serba digital, tanpa ribet dan birokrasi panjang.
          </p>
          <div className="w-16 h-1 bg-[#146AFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connector Lane (Only visible on large screen) */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-[3px] bg-slate-100 dark:bg-slate-800 z-0">
            <div className="h-full bg-gradient-to-r from-[#146AFF] to-amber-500 w-[60%] rounded-full animate-pulse-slow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.Icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center md:items-start lg:items-center text-center md:text-left lg:text-center p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl lg:bg-transparent lg:border-none lg:p-0 group"
                  id={`timeline-step-${step.num}`}
                >
                  {/* Step bubble / order bullet */}
                  <div className="relative mb-5 flex items-center justify-center">
                    
                    {/* Circle Indicator */}
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-950 border-[3px] border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:border-[#146AFF] transition-all duration-300">
                      <StepIcon size={28} className="text-[#146AFF] font-bold" />
                    </div>

                    {/* Step Count bubble Badge */}
                    <div className="absolute -top-1 -right-1 bg-[#146AFF] text-white text-[10px] font-sans font-black tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {step.num}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-4 px-1.5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-sans group-hover:text-[#146AFF] transition-colors leading-none">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-sans font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
