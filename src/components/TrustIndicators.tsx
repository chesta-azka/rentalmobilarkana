import { useState, useEffect, useRef } from 'react';
import { Users, Car, Clock, Award } from 'lucide-react';
import { STATS } from '../data';

// Helper to provide nice icons for stats based on label keywords
const statIcons: Record<string, any> = {
  'Pelanggan Puas': Users,
  'Unit Armada': Car,
  'Customer Support': Clock,
  'Pengalaman': Award
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = value;
            // Short animation duration for user feedback
            const duration = 1200; 
            const startTime = performance.now();

            const animate = (timestamp: number) => {
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Ease out quad formula
              const easeProgress = progress * (2 - progress);
              const nextVal = Math.floor(easeProgress * (end - start) + start);
              
              setCurrent(nextVal);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCurrent(end);
              }
            };

            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef} className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white transition-colors">
      {current.toLocaleString('id-ID')}
      <span className="text-[#146AFF]">{suffix}</span>
    </span>
  );
}

export default function TrustIndicators() {
  return (
    <section className="relative py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 transition-colors">
      {/* Decorative horizontal thin pattern lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {STATS.map((stat, idx) => {
            const IconComponent = statIcons[stat.label] || Award;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors group"
                id={`stat-card-${idx}`}
              >
                {/* Icon Circle */}
                <div className="mb-4 p-3 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[#146AFF] group-hover:scale-110 group-hover:border-[#146AFF]/30 transition-all duration-300 shadow-sm">
                  <IconComponent size={24} className="stroke-[2px]" />
                </div>
                
                {/* Score */}
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                
                {/* Stat Title */}
                <span className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sans">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
