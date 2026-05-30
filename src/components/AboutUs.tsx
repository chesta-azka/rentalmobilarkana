import { Building2, ShieldCheck, MapPin, Users2, BadgeAlert, ArrowUpRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section
      id="tentang"
      className="relative py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors overflow-hidden"
    >
      {/* Subtle details */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collages (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Photo 1: Beautiful Modern Head Office Lobby */}
              <div className="space-y-4 pt-8">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                    referrerPolicy="no-referrer"
                    alt="Sleek Arkana Executive Office Lobby"
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 duration-500 transition-transform"
                    id="about-office-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-wider font-sans">
                      Lobi Kantor Pusat
                    </span>
                  </div>
                </div>
                
                {/* Micro Floating Info Box inside left column */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl space-y-2 border border-slate-800">
                  <div className="flex items-center space-x-2">
                    <Building2 className="text-[#146AFF]" size={18} />
                    <span className="text-xs font-black uppercase tracking-wider font-mono">Pusat Layanan</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                    Tersebar di kota-kota besar di Indonesia dengan armada pengganti siaga 24 jam.
                  </p>
                </div>
              </div>

              {/* Photo 2: Friendly Driver Greeting Customer */}
              <div className="space-y-4">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600"
                    referrerPolicy="no-referrer"
                    alt="Arkana Professional Drivers hospitality"
                    className="w-full h-72 md:h-96 object-cover group-hover:scale-110 duration-500 transition-transform"
                    id="about-drivers-image"
                  />
                  
                  {/* Floating Year Badge of Honor */}
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-[#146AFF] to-blue-850 text-white px-3 py-2 rounded-xl text-center shadow-lg pointer-events-none">
                    <span className="block text-xl font-sans font-black leading-none">10</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Tahun</span>
                  </div>
                </div>
                
                {/* Photo 3: Customer Satisfaction stamp */}
                <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-5 rounded-2xl shadow-lg flex items-center space-x-3">
                  <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-500">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Garansi Standard</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">ISO 9001:2015 Bersertifikat</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Back circle decoration behind images */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 dark:bg-slate-900 rounded-full z-[-1] pointer-events-none" />
          </div>

          {/* Right Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
                Profil Perusahaan
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
                Tentang Arkana Rent Car
              </h2>
              <div className="w-16 h-1 bg-[#146AFF] mt-1.5 rounded-full" />
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-relaxed">
              Arkana Rent Car adalah perusahaan transportasi darat nasional berlisensi hukum yang berkomitmen menghadirkan solusi sewa mobil premium kelas dunia di Indonesia. Kami berdiri dengan visi memberikan pengalaman berkendara yang aman, mulus, dan menyenangkan bagi setiap klien korporasi maupun individu.
            </p>

            <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
              Kami melayani kebutuhan perjalanan wisata, kunjungan dinas kenegaraan, mobil pernikahan mewah, logistik event berskala nasional, hingga kebutuhan sewa operasional bulanan korporasi. Dengan armada terbaru yang selalu dalam kondisi prima dan didukung tim driver ahli, kami pastikan perjalanan Anda terlaksana secara tepat waktu dan penuh kenyamanan batin.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 bg-blue-100 dark:bg-blue-900/40 p-1 rounded-md text-[#146AFF]">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Armada Resmi Berasuransi</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Asuransi All-Risk untuk perlindungan maksimal perjalanan Anda.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-0.5 bg-blue-100 dark:bg-blue-900/40 p-1 rounded-md text-[#146AFF]">
                  <Users2 size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Pilihan Driver Multibahasa</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Sopir khusus yang ramah, sopan, bersih, dan terlatih.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-0.5 bg-blue-100 dark:bg-blue-900/40 p-1 rounded-md text-[#146AFF]">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Jaringan Seluruh Indonesia</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Siap mengantar Anda dari perkotaan hingga destinasi pariwisata.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-0.5 bg-blue-100 dark:bg-blue-900/40 p-1 rounded-md text-[#146AFF]">
                  <BadgeAlert size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Legalitas Perusahaan Resmi</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Terdaftar secara PT resmi dengan tagihan perpajakan yang valid.</p>
                </div>
              </div>
            </div>

            {/* Quick action profile callout */}
            <div className="pt-2 flex">
              <a
                href="#armada"
                className="inline-flex items-center space-x-2 text-[#146AFF] hover:text-blue-700 font-bold text-sm tracking-wide group"
              >
                <span>Lihat Sertifikat & Pilihan Armada Kami</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
