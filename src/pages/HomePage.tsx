import { assets } from '../assets';
import { ArrowRight, CheckCircle2, Factory, Users, Layers, Sparkles, ArrowUpRight, Award, Droplets, Printer } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ─── HERO — FULL BLEED, NO SIDE GUTTER WASTE ─── */}
      <section className="relative w-full overflow-hidden bg-[#070d1a]">
        {/* Background image — stretched 100vw */}
        <div className="absolute inset-0">
          <img src={assets.homeBg} alt="Abed Textile Plant" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a] via-[#070d1a]/80 to-[#070d1a]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
        </div>

        {/* Content — edge to edge, only 12px side padding on mobile, 48px on 2xl */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] py-8 lg:py-10">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs font-semibold hero-animate" style={{ animationDelay: '0.05s' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Since 1993 • Oeko-Tex Certified • 100% Export Oriented
              </div>

              <h1 className="hero-animate mt-5 text-[32px] sm:text-[44px] lg:text-[52px] xl:text-[60px] font-[800] tracking-[-0.03em] leading-[0.9] text-white text-balance" style={{ animationDelay: '0.12s' }}>
                Abed Textile<br />
                <span className="font-light text-white/90">Processing Mills Ltd.</span>
              </h1>

              <p className="hero-animate mt-5 text-[15px] lg:text-[17px] leading-relaxed text-white/70 max-w-[640px]" style={{ animationDelay: '0.22s' }}>
                A trusted name in Bangladesh textile processing since 1993. Empowered by 42 modern imported machineries, 1,000+ skilled workforce, and 4.5M yards monthly capacity — weaving world-class Shari, 3-Pcs, Poplin & Fancy Fabrics for global export.
              </p>

              <div className="hero-animate flex flex-wrap gap-3 mt-8" style={{ animationDelay: '0.32s' }}>
                <a href="#/units" className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white text-[#0f2a44] font-bold text-sm hover:bg-stone-100 transition-colors shadow-lg">
                  Explore Production Units <ArrowRight size={16} />
                </a>
                <a href="#/contact" className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
                  Factory & Offices
                </a>
              </div>

              <div className="hero-animate hidden sm:flex items-center gap-5 mt-10 pt-6 border-t border-white/10 flex-wrap" style={{ animationDelay: '0.4s' }}>
                <span className="inline-flex items-center gap-2 text-white/70 text-xs font-medium"><CheckCircle2 size={14} className="text-emerald-400" /> Oeko-Tex 100</span>
                <span className="inline-flex items-center gap-2 text-white/70 text-xs font-medium"><CheckCircle2 size={14} className="text-emerald-400" /> SA-8000 Compliant</span>
                <span className="inline-flex items-center gap-2 text-white/70 text-xs font-medium"><CheckCircle2 size={14} className="text-emerald-400" /> BTMEA Registered</span>
                <span className="inline-flex items-center gap-2 text-white/70 text-xs font-medium"><CheckCircle2 size={14} className="text-emerald-400" /> ISO Certified</span>
              </div>
            </div>

            {/* Right — 5 cols, stats panel */}
            <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-5 lg:pl-4 xl:pl-6">
              {/* Desktop stats card */}
              <div className="hidden lg:block rounded-[28px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/20">
                <div className="p-7 pb-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#b88a5a]">At a glance</div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">Live Capacity</span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-[30px] font-[800] tracking-tight text-[#0f2a44] leading-none">42</div>
                      <div className="text-[11px] font-semibold text-stone-500 leading-tight mt-1">Machineries</div>
                      <div className="text-[11px] text-stone-400">Imported Brand New</div>
                    </div>
                    <div className="border-l border-stone-200 pl-5">
                      <div className="text-[30px] font-[800] tracking-tight text-[#0f2a44] leading-none">1k+</div>
                      <div className="text-[11px] font-semibold text-stone-500 leading-tight mt-1">Workforce</div>
                      <div className="text-[11px] text-stone-400">Skilled Team</div>
                    </div>
                    <div className="border-l border-stone-200 pl-5">
                      <div className="text-[30px] font-[800] tracking-tight text-[#0f2a44] leading-none">4.5M</div>
                      <div className="text-[11px] font-semibold text-stone-500 leading-tight mt-1">Yards / mo</div>
                      <div className="text-[11px] text-stone-400">Capacity</div>
                    </div>
                  </div>
                </div>
                <div className="mx-7 h-[1px] bg-stone-100" />
                <div className="p-7 pt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-3.5 text-center">
                    <Factory size={18} className="mx-auto text-[#0f2a44]/60" />
                    <div className="text-[12px] font-[800] text-[#0f2a44] mt-1.5">1,53,372</div>
                    <div className="text-[10px] font-medium text-stone-500">Sq.Ft. Floor</div>
                  </div>
                  <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-3.5 text-center">
                    <Layers size={18} className="mx-auto text-[#b88a5a]" />
                    <div className="text-[12px] font-[800] text-[#0f2a44] mt-1.5">60%</div>
                    <div className="text-[10px] font-medium text-stone-500">Utilization</div>
                  </div>
                  <div className="rounded-2xl bg-[#0f2a44] p-3.5 text-center text-white">
                    <Users size={18} className="mx-auto text-white/80" />
                    <div className="text-[12px] font-bold mt-1.5">1993</div>
                    <div className="text-[10px] text-white/60">Established</div>
                  </div>
                </div>
                <div className="px-7 pb-7">
                  <div className="rounded-full bg-stone-900 text-white text-xs font-semibold py-3 text-center tracking-wide">
                    100% Export Oriented • Narsingdi, Bangladesh
                  </div>
                </div>
              </div>

              {/* Mobile stats — 3 cards */}
              <div className="lg:hidden grid grid-cols-3 gap-2">
                <div className="rounded-2xl bg-white p-3.5 text-center shadow-xl">
                  <div className="text-xl font-[800] text-[#0f2a44]">42</div>
                  <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wide">Machineries</div>
                </div>
                <div className="rounded-2xl bg-white p-3.5 text-center shadow-xl">
                  <div className="text-xl font-[800] text-[#0f2a44]">1k+</div>
                  <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wide">Workforce</div>
                </div>
                <div className="rounded-2xl bg-[#0f2a44] p-3.5 text-center shadow-xl text-white">
                  <div className="text-xl font-[800]">4.5M</div>
                  <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wide">Yards/mo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH FEATURE BAR — no wasted gutters ─── */}
      <section className="w-full bg-white border-y border-[#0f2a44]/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 lg:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#fdfbf7] border border-[#0f2a44]/[0.06] rounded-[18px] px-5 py-4">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0 text-sm">✦</div>
                <div>
                  <div className="text-sm font-bold text-[#0f2a44] leading-tight">Premium Shari, 3-Piece, Poplin & Voile — woven for export quality</div>
                  <div className="text-xs text-stone-500 mt-0.5">Flatbed • Rotary • Digital • Mercerizing • Stenter Finishing • ETP 2,400 m³/day</div>
                </div>
              </div>
              <a href="#/products" className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#0f2a44]/10 text-xs font-bold text-[#0f2a44] hover:bg-[#0f2a44] hover:text-white transition-colors shadow-sm">
                View fabrics <ArrowRight size={14} />
              </a>
            </div>
            <div className="lg:col-span-4 bg-[#0f2a44] rounded-[18px] px-6 py-4 flex items-center justify-between text-white">
              <div>
                <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-white/60">Factory location</div>
                <div className="text-sm font-semibold mt-1">Ghoradia, Narsingdi Sadar</div>
                <div className="text-xs text-white/60">45 mins from Dhaka • 153k sq.ft.</div>
              </div>
              <a href="#/contact" className="w-10 h-10 rounded-full bg-white text-[#0f2a44] flex items-center justify-center hover:scale-105 transition-transform shrink-0">
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS TICKER — full bleed ─── */}
      <section className="w-full bg-[#fdfbf7] border-b border-[#0f2a44]/[0.06]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { k: '4.5M yards', v: 'Monthly Capacity', d: 'Consolidated across 6 units' },
              { k: '42 Units', v: 'Imported Machines', d: 'Germany • Japan • Taiwan' },
              { k: '1000+', v: 'Skilled Workforce', d: 'SA-8000 compliant' },
              { k: '32 Years', v: 'Since 1993', d: 'Heritage & Trust' },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-[#0f2a44]/[0.07] rounded-[20px] p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44] shrink-0">
                  {i === 0 ? <Layers size={16} /> : i === 1 ? <Factory size={16} /> : i === 2 ? <Users size={16} /> : <Award size={16} />}
                </div>
                <div>
                  <div className="text-[17px] font-[800] tracking-tight text-[#0f2a44] leading-none">{s.k}</div>
                  <div className="text-xs font-bold text-[#0f2a44] mt-1">{s.v}</div>
                  <div className="text-xs text-stone-500">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UNITS PREVIEW — full width 6-col grid ─── */}
      <section className="w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-10 lg:py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" /> Integrated Manufacturing
              </div>
              <h2 className="mt-2 text-[26px] sm:text-[32px] font-[800] tracking-[-0.02em] text-[#0f2a44] leading-none">Six specialized production wings</h2>
              <p className="mt-2 text-sm text-stone-500 max-w-2xl">Weaving • Flatbed & Rotary • Digital • Dyeing • Finishing & Stenter • ETP — all under one 153,372 sq.ft. roof at Ghoradia.</p>
            </div>
            <a href="#/units" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f2a44] text-white text-sm font-semibold hover:bg-[#0c2238] transition-colors">
              View all units <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              { title: 'Weaving Section', desc: 'High-speed looms, 20s–100s yarn count, plain/twill/dobby.', icon: Layers, img: assets.banners.weaving },
              { title: 'Flatbed & Rotary', desc: '12-color stations, 80,000+ yds/day — Saree & 3-Pcs.', icon: Printer, img: assets.banners.flatbed },
              { title: 'Digital Printing', desc: '2400 DPI, 16.7M colors — unlimited photo-grade prints.', icon: Sparkles, img: assets.banners.digital },
              { title: 'Dyeing & Pre-Treatment', desc: '15 jiggers, mercerizing, pad-batch — Grade 4–5 fastness.', icon: Droplets, img: assets.banners.dyeing },
              { title: 'Finishing & Stenter', desc: 'Bruckner stenters, calendars — shrinkage <2%.', icon: Factory, img: assets.banners.finishing },
              { title: 'ETP — 2,400 m³/day', desc: '16,000 sq.ft. biochemical plant — full environmental compliance.', icon: Award, img: assets.aboutBg },
            ].map((u, i) => (
              <a key={i} href="#/units" className="group relative rounded-[20px] overflow-hidden bg-stone-100 border border-[#0f2a44]/10 h-[220px] flex flex-col justify-end p-5">
                <img src={u.img} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/85 via-[#070d1a]/30 to-transparent" />
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-white text-[#0f2a44] flex items-center justify-center">
                    <u.icon size={14} />
                  </div>
                  <h3 className="mt-3 text-[16px] font-bold text-white leading-tight">{u.title}</h3>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed line-clamp-2">{u.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS STRIP — full bleed ─── */}
      <section className="w-full bg-[#0f2a44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: '22px 22px' }} />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-10 lg:py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[#d4a574]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" /> Premium Portfolio
              </div>
              <h2 className="mt-2 text-[26px] sm:text-[32px] font-[800] tracking-[-0.02em] text-white leading-none">Fabrics trusted worldwide</h2>
            </div>
            <a href="#/products" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0f2a44] text-sm font-bold hover:bg-stone-100 transition-colors">
              Explore products <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4">
            {[
              'Exclusive Shari',
              'Three-Piece Suits',
              'Premium Poplin',
              'Soft Voile',
              'Lillian Fabric',
              'Knit & Fancy',
            ].map((name, i) => (
              <div key={i} className="rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 p-5 hover:bg-white hover:text-[#0f2a44] group transition-colors">
                <div className="text-xs font-bold tracking-widest uppercase text-[#d4a574] group-hover:text-[#b88a5a]">0{i + 1}</div>
                <div className="mt-2 text-[15px] font-bold leading-tight text-white group-hover:text-[#0f2a44]">{name}</div>
                <div className="mt-2 text-xs text-white/60 group-hover:text-stone-500">Export standard • Oeko-Tex</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA — full bleed ─── */}
      <section className="w-full bg-[#fdfbf7] border-t border-[#0f2a44]/[0.06]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10">
          <div className="rounded-[24px] bg-white border border-[#0f2a44]/10 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
            <div className="flex gap-4 items-center">
              <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#0f2a44] text-white items-center justify-center shrink-0">✦</div>
              <div>
                <div className="text-sm font-bold text-[#0f2a44]">Need bulk pricing or custom GSM?</div>
                <div className="text-sm text-stone-500 mt-0.5">Our merchandising team replies within 24 hours — sampling & FOB available.</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <a href="#/contact" className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0f2a44] text-white text-sm font-bold hover:bg-[#0c2238] transition-colors">
                Contact Merchandising <ArrowRight size={16} />
              </a>
              <a href="#/machinery" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#fdfbf7] border border-stone-200 text-[#0f2a44] text-sm font-semibold hover:bg-white transition-colors">
                View 42 Machines
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-between gap-3 text-xs text-stone-500">
            <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 32 years of export excellence</span>
            <span className="hidden sm:inline">Abed Textile Processing Mills Ltd. • Ghoradia, Narsingdi</span>
            <a href="#/about" className="inline-flex items-center gap-1.5 font-semibold text-[#0f2a44] hover:gap-2 transition-all">Discover our story <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
