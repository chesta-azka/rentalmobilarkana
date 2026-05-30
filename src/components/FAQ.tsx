import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first item
  const [activeTab, setActiveTab] = useState<'Semua' | 'Umum' | 'Persyaratan' | 'Pembayaran' | 'Lainnya'>('Semua');

  const filteredFAQs = activeTab === 'Semua'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeTab);

  const categories: ('Semua' | 'Umum' | 'Persyaratan' | 'Pembayaran' | 'Lainnya')[] = [
    'Semua', 'Umum', 'Persyaratan', 'Pembayaran', 'Lainnya'
  ];

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#146AFF] bg-blue-100/60 dark:bg-blue-900/30 px-3 py-1 rounded-md">
            Pusat Informasi FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base">
            Temukan jawaban cepat seputar persyaratan sewa lepas kunci, skema pembayaran dengan supir, asuransi, dan kebijakan pengembalian di Arkana Rent Car.
          </p>
          <div className="w-16 h-1 bg-[#146AFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs inside FAQ */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenId(null); // Reset when tab changes
              }}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat
                  ? 'bg-[#146AFF] text-white shadow-md shadow-blue-500/10 scale-100'
                  : 'bg-slate-50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              id={`faq-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#146AFF] bg-blue-50/10 dark:bg-blue-950/5 shadow-md shadow-blue-500/5'
                    : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900/50'
                }`}
                id={`faq-item-box-${faq.id}`}
              >
                {/* Accordion Trigger/Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 dark:text-white font-sans font-bold text-sm sm:text-base cursor-pointer hover:text-[#146AFF] transition-colors"
                  id={`faq-button-trigger-${faq.id}`}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle size={18} className="text-[#146AFF] shrink-0" />
                    <span className="leading-tight">{faq.question}</span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#146AFF]' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Accordion Expanded Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-slate-100 dark:border-slate-800' : 'max-h-0'
                  }`}
                  id={`faq-answer-container-${faq.id}`}
                >
                  <div className="p-5 text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-medium bg-slate-50/50 dark:bg-slate-950/20">
                    {faq.answer}
                    
                    {/* Tiny category label inside */}
                    <div className="mt-4 flex items-center space-x-1">
                      <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 roundedbg-slate-100 dark:bg-slate-800 text-slate-400">
                        Topik: {faq.category}
                      </span>
                    </div>
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
