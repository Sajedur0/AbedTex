import { useState } from 'react';
import { ShieldCheck, Heart, Flame, Droplets, Award, Check } from 'lucide-react';
import Reveal from '../components/Reveal';

const complianceData = [
  {
    icon: Heart,
    title: 'Labor Standards & Human Rights',
    items: ['Strict No Child Labor policy', 'No Forced Labor', 'Guaranteed Minimum Wages', 'Standard 8-hour workday', '100% Voluntary Overtime', 'Paid Weekly Holidays', 'Festival Holidays & Bonuses', 'Comprehensive Maternity Protection']
  },
  {
    icon: ShieldCheck,
    title: 'Health, Safety & Environment',
    items: ['100% full-time doctor & clinic', 'First Aid Boxes on all floors', 'Pure Drinking Water dispensers', 'Hygienic sanitation facilities', 'Workers Welfare Committee', 'Subsidized Canteen Service', 'Day Care Centre', 'Free recreational activities']
  },
  {
    icon: Flame,
    title: 'Fire Prevention & Safety',
    items: ['Fire extinguishers on each floor', '12 fire drills per year', 'Emergency exit doors', 'PPE & safety boots', 'Industrial ventilation', 'LED illumination', '100% No-Smoking Zone', 'Metal detector security', 'Group Insurance coverage']
  }
];

export default function CompliancePage() {
  const [idx, setIdx] = useState(0);
  const ActiveIcon = complianceData[idx].icon;

  return (
    <div className="w-full">
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-emerald-400/[0.04] blur-[60px]" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10 relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Compliance & Social Responsibility
              </div>
              <h1 className="mt-4 text-[30px] sm:text-[40px] xl:text-[44px] font-[800] tracking-[-0.03em] leading-[0.93] text-[#0f2a44]">
                Global standards & SA-8000 compliance
              </h1>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">Audited, certified, and lived on the factory floor — not just on paper.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { code: 'OEKO-TEX 100', title: 'Confidence in Textiles' },
                { code: 'ISO Certified', title: 'Quality Management' },
                { code: 'ATPML Certified', title: 'Abed Textile Processing' },
                { code: 'BTMEA', title: 'Bangladesh Textile Exporters' },
                { code: 'NCCI Member', title: 'Narsingdi Chamber' }
              ].map((cert, i) => (
                <div key={i} className="card-modern rounded-[16px] p-5 text-center flex flex-col items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#fdfbf7] border border-stone-200/80 flex items-center justify-center text-[#0f2a44]/70">
                    <Award size={14} />
                  </div>
                  <div className="font-[800] text-sm tracking-tight text-[#0f2a44]">{cert.code}</div>
                  <div className="text-[11px] leading-tight text-stone-500">{cert.title}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {complianceData.map((c, i) => {
                const Icon = c.icon;
                const active = idx === i;
                return (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${active ? 'bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm shadow-[#0f2a44]/20' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'}`}
                  >
                    <Icon size={16} className={active ? 'text-white' : 'text-stone-400'} />
                    {c.title}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 card-modern rounded-[24px] overflow-hidden">
              <div className="px-6 sm:px-8 py-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fdfbf7]/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm shadow-emerald-600/20">
                    <ActiveIcon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold tracking-tight text-[#0f2a44]">{complianceData[idx].title}</h3>
                    <p className="text-xs text-stone-500 mt-0.5">100% Implemented & audited on site</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  {complianceData[idx].items.length} Points
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {complianceData[idx].items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-white border border-stone-200/80 hover:border-emerald-200 transition-colors">
                      <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm text-[#0f2a44] font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[16px] bg-[#0f2a44] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/[0.03] rounded-full blur-2xl" />
                  <div className="flex items-center gap-3 relative">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                      <Droplets size={18} className="text-emerald-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Environmental Protection & ETP</div>
                      <div className="text-xs text-white/55">2,400 m³/day Biochemical ETP • 16,000 sq.ft. facility</div>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-white text-[#0f2a44] text-xs font-[800] relative">16,000 Sq.Ft.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
