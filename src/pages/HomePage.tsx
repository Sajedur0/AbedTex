import { useApp } from '../App';
import { assets } from '../assets';
import { ArrowRight, CheckCircle2, Factory, Users, Layers } from 'lucide-react';

export default function HomePage() {
  const { lang } = useApp();
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-10 lg:pb-14">
          <div className="relative rounded-[28px] lg:rounded-[32px] overflow-hidden bg-[#0a1629] min-h-[560px] lg:min-h-[600px] flex flex-col lg:flex-row">
            {/* bg image */}
            <div className="absolute inset-0">
              <img src={assets.homeBg} alt="Abed Textile Plant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a]/90 via-[#070d1a]/70 to-[#070d1a]/10 lg:from-[#070d1a]/85 lg:via-[#070d1a]/55 lg:to-[#070d1a]/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/70 via-transparent to-transparent" />
              {/* subtle top grain */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`, backgroundSize: '18px 18px' }} />
            </div>

            {/* content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 lg:py-12">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white/90 text-xs font-semibold hero-animate" style={{ animationDelay: '0.05s' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {lang === 'bn' ? '১৯৯৩ থেকে • Oeko-Tex Certified' : 'Since 1993 • Oeko-Tex Certified • 100% Export Oriented'}
              </div>

              <h1 className="hero-animate mt-5 text-[32px] sm:text-[44px] lg:text-[56px] font-[800] tracking-[-0.03em] leading-[0.95] text-white text-balance" style={{ animationDelay: '0.12s' }}>
                {lang === 'bn' ? (
                  <>আবেদ টেক্সটাইল<br /><span className="font-light text-white/90">প্রোসেসিং মিলস লিমিটেড</span></>
                ) : (
                  <>Abed Textile<br /><span className="font-light text-white/85">Processing Mills Ltd.</span></>
                )}
              </h1>

              <p className="hero-animate mt-5 text-[15px] lg:text-[16px] leading-relaxed text-white/75 max-w-[560px]" style={{ animationDelay: '0.22s' }}>
                {lang === 'bn'
                  ? '১৯৯৩ সাল থেকে বাংলাদেশের টেক্সটাইল শিল্পে আস্থার প্রতীক। ৭২টি আধুনিক মেশিনারি, ১০০০+ দক্ষ কর্মী এবং প্রতি মাসে ৪৫ লক্ষ গজ উৎপাদন ক্ষমতাসম্পন্ন সর্বাধুনিক ডাইং, প্রিন্টিং ও ফিনিশিং প্ল্যান্ট।'
                  : 'A trusted name in Bangladesh textile processing since 1993. Empowered by 72 modern imported machineries, 1,000+ skilled workforce, and 4.5M yards monthly capacity for world-class Shari, 3-Pcs, Poplin & Fancy Fabrics.'}
              </p>

              <div className="hero-animate flex flex-wrap gap-3 mt-8" style={{ animationDelay: '0.32s' }}>
                <a href="#/units" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0f2a44] font-bold text-sm hover:bg-stone-100 transition-colors shadow-lg">
                  {lang === 'bn' ? 'উৎপাদন ইউনিটসমূহ দেখুন' : 'Explore Production Units'} <ArrowRight size={16} />
                </a>
                <a href="#/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
                  {lang === 'bn' ? 'ফ্যাক্টরি ও অফিস' : 'Factory & Offices'}
                </a>
              </div>

              {/* trust row */}
              <div className="hero-animate hidden sm:flex items-center gap-6 mt-10 pt-6 border-t border-white/10" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Oeko-Tex 100
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <CheckCircle2 size={14} className="text-emerald-400" /> SA-8000 Compliant
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <CheckCircle2 size={14} className="text-emerald-400" /> BTMEA Registered
                </div>
              </div>
            </div>

            {/* right stats card - desktop */}
            <div className="relative z-10 lg:w-[380px] shrink-0 p-4 lg:p-6 flex flex-col justify-end">
              <div className="hidden lg:block rounded-[24px] overflow-hidden bg-white shadow-2xl">
                <div className="p-6 pb-4">
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#b88a5a]">At a glance</div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-[800] tracking-tight text-[#0f2a44]">72</div>
                      <div className="text-[11px] font-medium text-stone-500 leading-tight">Machineries</div>
                    </div>
                    <div className="border-l border-stone-200 pl-4">
                      <div className="text-2xl font-[800] tracking-tight text-[#0f2a44]">1k+</div>
                      <div className="text-[11px] font-medium text-stone-500 leading-tight">Workforce</div>
                    </div>
                    <div className="border-l border-stone-200 pl-4">
                      <div className="text-2xl font-[800] tracking-tight text-[#0f2a44]">4.5M</div>
                      <div className="text-[11px] font-medium text-stone-500 leading-tight">Yards / mo</div>
                    </div>
                  </div>
                </div>
                <div className="mx-6 h-[1px] bg-stone-100" />
                <div className="p-6 pt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-3 text-center">
                    <Factory size={18} className="mx-auto text-[#0f2a44]/60" />
                    <div className="text-[11px] font-bold text-[#0f2a44] mt-1.5">1,53,372</div>
                    <div className="text-[10px] text-stone-500">Sq.Ft. Floor</div>
                  </div>
                  <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-3 text-center">
                    <Layers size={18} className="mx-auto text-[#b88a5a]" />
                    <div className="text-[11px] font-bold text-[#0f2a44] mt-1.5">60%</div>
                    <div className="text-[10px] text-stone-500">Utilization</div>
                  </div>
                  <div className="rounded-2xl bg-[#0f2a44] p-3 text-center text-white">
                    <Users size={18} className="mx-auto text-white/80" />
                    <div className="text-[11px] font-bold mt-1.5">1993</div>
                    <div className="text-[10px] text-white/60">Established</div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="rounded-full bg-stone-900 text-white text-xs font-semibold py-2.5 text-center">
                    {lang === 'bn' ? '১০০% রপ্তানিমুখী' : '100% Export Oriented • Narsingdi, BD'}
                  </div>
                </div>
              </div>

              {/* mobile stats */}
              <div className="lg:hidden grid grid-cols-3 gap-2 mt-2">
                <div className="rounded-2xl bg-white p-3 text-center shadow-lg">
                  <div className="text-lg font-[800] text-[#0f2a44]">72</div>
                  <div className="text-[10px] text-stone-500 font-medium">Machineries</div>
                </div>
                <div className="rounded-2xl bg-white p-3 text-center shadow-lg">
                  <div className="text-lg font-[800] text-[#0f2a44]">1k+</div>
                  <div className="text-[10px] text-stone-500 font-medium">Workforce</div>
                </div>
                <div className="rounded-2xl bg-[#0f2a44] p-3 text-center shadow-lg text-white">
                  <div className="text-lg font-[800]">4.5M</div>
                  <div className="text-[10px] text-white/70 font-medium">Yards/mo</div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom editorial bar */}
          <div className="mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 card-modern rounded-[20px] p-5 lg:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0">✦</div>
                <div>
                  <div className="text-sm font-bold text-[#0f2a44]">{lang === 'bn' ? 'প্রিমিয়াম শাড়ি, থ্রি-পিস, পপলিন ও ভয়েল' : 'Premium Shari, 3-Piece, Poplin & Voile — woven for export quality'}</div>
                  <div className="text-xs text-stone-500 mt-0.5">{lang === 'bn' ? 'ফ্ল্যাটবেড, রোটারি ও ডিজিটাল প্রিন্টিং • মার্সারাইজিং • স্টেন্টার ফিনিশিং' : 'Flatbed • Rotary • Digital • Mercerizing • Stenter Finishing • ETP 2,400 m³/day'}</div>
                </div>
              </div>
              <a href="#/products" className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#0f2a44]/10 bg-[#fdfbf7] text-xs font-bold text-[#0f2a44] hover:bg-white transition-colors">
                View fabrics <ArrowRight size={14} />
              </a>
            </div>
            <div className="lg:col-span-4 card-modern rounded-[20px] p-5 lg:p-6 bg-[#0f2a44] !border-[#0f2a44] text-white flex items-center justify-between">
              <div>
                <div className="text-xs tracking-[0.12em] uppercase font-bold text-white/60">Factory location</div>
                <div className="text-sm font-semibold mt-1">Ghoradia, Narsingdi Sadar</div>
                <div className="text-xs text-white/60">45 mins from Dhaka • 153k sq.ft.</div>
              </div>
              <a href="#/contact" className="w-9 h-9 rounded-full bg-white text-[#0f2a44] flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* subtle divider */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] bg-[#0f2a44]/[0.06]" />
      </div>

      {/* mini about teaser that links - keeps no extra info but gives modern closure */}
      <section className="py-10 lg:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" /> {lang === 'bn' ? 'নোদী বাংলা গ্রুপের একটি প্রতিষ্ঠান' : 'A concern of Nodi Bangla Group'}</span>
            <span className="hidden sm:inline-flex items-center gap-2"> Oeko-Tex • ISO • BTMEA • NCCI • SA-8000 </span>
            <a href="#/about" className="inline-flex items-center gap-1.5 font-semibold text-[#0f2a44] hover:gap-2 transition-all">Discover our story <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
