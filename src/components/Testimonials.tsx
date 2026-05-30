import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIdx];

  return (
    <section
      id="testimoni"
      className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 transition-colors overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
            Apa Kata Mereka Tentang Kami?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base">
            Kepuasan para wisatawan, eksekutif bisnis, keluarga, dan corporate partner adalah bukti nyata dedikasi layanan premium tanpa kompromi dari kami.
          </p>
          <div className="w-16 h-1 bg-[#146AFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Big Interactive Spotlight Testimonial Cards Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-white dark:bg-slate-900 border border-slate-250/60 dark:border-slate-800/80 rounded-[32px] p-6 sm:p-12 shadow-xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* Quote watermark icon */}
            <Quote className="absolute -top-6 -right-6 text-slate-100 dark:text-slate-800/80 w-36 h-36 pointer-events-none stroke-[1px]" />

            <div className="space-y-6 relative z-10">
              {/* Stars rating */}
              <div className="flex items-center space-x-1 text-amber-500">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="stroke-[1px]" />
                ))}
              </div>

              {/* Narrated Review Message */}
              <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic">
                "{activeTestimonial.text}"
              </p>
            </div>

            {/* Client Bio Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 mt-6 border-t border-slate-100 dark:border-slate-800/80 relative z-10">
              <div className="flex items-center space-x-4">
                <img
                  src={activeTestimonial.avatar}
                  referrerPolicy="no-referrer"
                  alt={activeTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#146AFF]/20"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-sans font-black text-slate-900 dark:text-white leading-none">
                    {activeTestimonial.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block mt-1">
                    {activeTestimonial.role} — <span className="text-[#146AFF]">{activeTestimonial.company}</span>
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                DIPUBLIKASIKAN: {activeTestimonial.date}
              </div>
            </div>
          </div>

          {/* Selector Navigation Buttons on sides */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-350 hover:bg-[#146AFF] hover:text-white dark:hover:bg-[#146AFF] dark:hover:text-white transition-all shadow-md"
              aria-label="Previous Testimonial"
              id="prev-testimonial-btn"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Quick dots navigation indicator */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIdx === idx ? 'w-8 bg-[#146AFF]' : 'bg-slate-350 dark:bg-slate-800'
                  }`}
                  aria-label={`Jump to testimonial ${idx + 1}`}
                  id={`jump-testimonial-dot-${idx}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-350 hover:bg-[#146AFF] hover:text-white dark:hover:bg-[#146AFF] dark:hover:text-white transition-all shadow-md"
              aria-label="Next Testimonial"
              id="next-testimonial-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
