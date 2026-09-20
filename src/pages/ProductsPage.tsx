import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const products = [
  { name: 'Exclusive Shari', cat: 'Ethnic & Traditional Wear', desc: 'Renowned for exquisite print repeats, buttery soft fall, vibrant colorfast hues.', badge: 'Best Seller', specs: ['100% Cotton, Voile, Silk Blend', 'Flatbed & Digital Print', '12-14 Haath length', 'Shrinkage controlled'] },
  { name: 'Three-Piece Suits', cat: 'Ladies Fashion', desc: 'Full matching sets of Kameez, Salwar, and Dupatta.', badge: 'Trending', specs: ['Matching set', 'Fine yarn: 60s-80s', 'Anti-fading wash', 'Ultra-breathable'] },
  { name: 'Premium Poplin', cat: 'Apparel & Shirting', desc: 'Crisp, tightly woven plain weave cotton fabric.', badge: 'Export Standard', specs: ['100% Combed Cotton', 'GSM: 100-140', 'Mercerized', 'Zero skew'] },
  { name: 'Soft Voile', cat: 'Lightweight Textiles', desc: 'Feather-light, semi-sheer plain weave with silky hand feel.', badge: 'Signature', specs: ['High-twist cotton', 'GSM: 65-85', 'Exceptional drape', 'Quick-drying'] },
  { name: 'Lillian Fabric', cat: 'Fashion & Draped Wear', desc: 'High-tenacity blended drape fabric with lustrous flow.', badge: 'High Demand', specs: ['Polyester-Viscose blend', 'Reactive printed motifs', 'Silky wash finish', 'High vibrancy'] },
  { name: 'Knit Fabrics & Fancy Print', cat: 'Knitwear', desc: 'Single jersey, rib, interlock with supreme elasticity.', badge: 'Eco-Friendly', specs: ['Single Jersey, Rib, Interlock', 'Reactive all-over print', 'Enzyme soft wash', 'Anti-pilling Grade 4'] }
];

export default function ProductsPage() {
  const [selected, setSelected] = useState(0);
  const p = products[selected];

  return (
    <div className="pt-8 lg:pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
            Premium Textile Portfolio
          </div>
          <h1 className="mt-4 text-[30px] sm:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
            Our manufactured fabrics & products
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((prod, idx) => {
            const active = selected === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`text-left rounded-[20px] p-6 border transition-all flex flex-col justify-between min-h-[210px] group ${active ? 'bg-[#0f2a44] border-[#0f2a44] text-white shadow-xl' : 'card-modern hover:border-[#0f2a44]/15'}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-bold tracking-widest uppercase ${active ? 'text-white/60' : 'text-[#b88a5a]'}`}>{prod.cat}</span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${active ? 'bg-white text-[#0f2a44] border-white' : 'bg-[#fdfbf7] text-[#0f2a44] border-stone-200'}`}>{prod.badge}</span>
                  </div>
                  <h3 className={`mt-3 text-[18px] font-bold tracking-tight leading-tight ${active ? 'text-white' : 'text-[#0f2a44]'}`}>{prod.name}</h3>
                  <p className={`text-[13px] leading-relaxed mt-2 line-clamp-2 ${active ? 'text-white/70' : 'text-stone-600'}`}>{prod.desc}</p>
                </div>
                <div className={`mt-5 pt-4 border-t flex flex-col gap-1.5 ${active ? 'border-white/10' : 'border-stone-100'}`}>
                  {prod.specs.slice(0, 2).map((sp, i) => (
                    <div key={i} className={`inline-flex items-center gap-1.5 text-xs ${active ? 'text-white/80' : 'text-stone-700'}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
                        <Check size={12} />
                      </span>
                      <span className="truncate">{sp}</span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail */}
        <div className="mt-6 card-modern rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfbf7] border border-stone-200 text-xs font-bold tracking-wide text-[#0f2a44]">
              <Sparkles size={12} className="text-[#b88a5a]" /> {p.cat}
            </div>
            <h3 className="mt-3 text-[26px] sm:text-[30px] font-[800] tracking-tight text-[#0f2a44] leading-none">{p.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-600 max-w-2xl">{p.desc}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {p.specs.map((sp, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#fdfbf7] border border-stone-200">
                  <span className="w-7 h-7 rounded-full bg-white border border-stone-200 text-emerald-700 flex items-center justify-center shrink-0"><Check size={14} /></span>
                  <span className="text-sm font-medium text-[#0f2a44]">{sp}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 bg-[#0f2a44] p-6 sm:p-8 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="relative">
              <div className="text-xs font-bold tracking-[0.14em] uppercase text-white/60">Bulk order & sampling</div>
              <div className="mt-2 text-[20px] font-bold tracking-tight leading-tight">Need custom specifications?</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">Our merchandising team replies within 24 hours with GSM, count & pricing.</p>
              <a href="#/contact" className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-[#0f2a44] text-sm font-bold hover:bg-stone-100 transition-colors">
                Contact us <ArrowRight size={16} />
              </a>
              <div className="mt-3 text-center text-xs text-white/50">info@nodibanglagroup.com • 88-02-9462750</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
