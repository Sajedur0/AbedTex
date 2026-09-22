import { useState } from 'react';
import { useApp } from '../App';
import { assets } from '../assets';
import { ArrowUpRight, Factory, Droplets, Printer, Layers, Sparkles, Recycle } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function UnitsPage() {
  const { openLightbox } = useApp();
  const [activeUnit, setActiveUnit] = useState('weaving');

  const units: Record<string, any> = {
    weaving: {
      title: 'Weaving Section',
      banner: assets.banners.weaving,
      icon: Layers,
      short: 'High-speed automated loom infrastructure producing premium greige fabric.',
      full: 'Our weaving division utilizes advanced high-speed looms with automated tension control and precision yarn alignment. We weave premium poplin, voile, twill, fine cotton, and blends tailored for sensitive printing and dyeing.',
      stats: [{ val: '20s - 100s', label: 'Yarn Count' }, { val: 'Plain, Twill, Dobby', label: 'Weave Types' }],
      gallery: assets.weaving
    },
    flatbed: {
      title: 'Flat Bed Screen & Rotary',
      banner: assets.banners.flatbed,
      icon: Printer,
      short: 'Industrial heavy-duty flatbed and rotary screen printing lines.',
      full: 'Engineered for high-volume execution of Sarees, 3-Piece ladies wear, and boutique ethnic prints.',
      stats: [{ val: 'Up to 12 Colors', label: 'Color Stations' }, { val: '80,000+ Yds', label: 'Daily Output' }],
      gallery: assets.flatbed
    },
    digital: {
      title: 'Digital Textile Printing',
      banner: assets.banners.digital,
      icon: Sparkles,
      short: 'Ultra high-definition direct-to-fabric digital printing.',
      full: 'Our digital printing wing offers unlimited color spectrums, photo-grade resolution (up to 2400 DPI).',
      stats: [{ val: '2400 DPI', label: 'Resolution' }, { val: '16.7M Colors', label: 'Color Depth' }],
      gallery: assets.digital
    },
    dyeing: {
      title: 'Dyeing & Pre-Treatment',
      banner: assets.banners.dyeing,
      icon: Droplets,
      short: 'Comprehensive Jigger, Pad Batch, and Mercerizing units.',
      full: 'Equipped with 15 specialized jiggers for uniform shade consistency.',
      stats: [{ val: '15 Units', label: 'Total Jiggers' }, { val: 'Grade 4-5', label: 'Color Fastness' }],
      gallery: [assets.banners.dyeing, assets.gallery[3].src, assets.gallery[6].src, assets.gallery[8].src]
    },
    finishing: {
      title: 'Finishing & Stenter',
      banner: assets.banners.finishing,
      icon: Factory,
      short: 'Bruckner Stenters, Calendars, and Super Wash units.',
      full: 'German-engineered Bruckner Stenters, Thermo Stenters, and Calendars.',
      stats: [{ val: '4 Lines', label: 'Stenter Lines' }, { val: '< 2%', label: 'Shrinkage' }],
      gallery: [assets.banners.finishing, assets.gallery[4].src, assets.gallery[7].src, assets.gallery[10].src]
    },
    etp: {
      title: 'Effluent Treatment Plant',
      banner: assets.aboutBg,
      icon: Recycle,
      short: '2,400 m³/day biochemical effluent treatment plant.',
      full: 'A massive 16,000 sq.ft Biochemical ETP facility.',
      stats: [{ val: '2,400 m³/day', label: 'Daily Capacity' }, { val: '16,000 Sq.Ft.', label: 'Facility' }],
      gallery: [assets.aboutBg, assets.gallery[12].src, assets.gallery[11].src]
    }
  };

  const current = units[activeUnit];
  const Icon = current.icon;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-[#d4a574]/[0.04] blur-[50px]" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10 relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/[0.05] border border-[#0f2a44]/[0.08] text-[#0f2a44] text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
                Full-Scale Manufacturing Wings
              </div>
              <h1 className="mt-4 text-[30px] sm:text-[40px] xl:text-[44px] font-[800] tracking-[-0.03em] leading-[0.93] text-[#0f2a44]">
                Integrated industrial production infrastructure
              </h1>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">Six wings under one 153,372 sq.ft. campus at Ghoradia — tap to explore each unit.</p>
            </div>
          </Reveal>

          {/* Tabs */}
          <Reveal delay={100}>
            <div className="mt-7 flex flex-wrap gap-2">
              {Object.keys(units).map((key) => {
                const u = units[key];
                const active = activeUnit === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveUnit(key)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-semibold border transition-all duration-300 ${active ? 'bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm shadow-[#0f2a44]/20' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'}`}
                  >
                    {u.title}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main card */}
      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          <Reveal>
            <div className="card-modern rounded-[24px] overflow-hidden">
              <div className="relative h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden bg-stone-200 group">
                <img src={current.banner} alt="Banner" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1500ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/88 via-[#070d1a]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                    <div className="flex gap-4">
                      <div className="hidden sm:flex w-11 h-11 rounded-full bg-white text-[#0f2a44] items-center justify-center shrink-0 shadow-sm">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/65">Specialized Facility Unit</div>
                        <h2 className="text-[26px] sm:text-[32px] font-[800] tracking-tight text-white mt-1 leading-none">{current.title}</h2>
                        <p className="text-sm text-white/70 max-w-xl mt-2 leading-relaxed">{current.short}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {current.stats.map((st: any, i: number) => (
                        <div key={i} className="px-4 py-3 rounded-2xl bg-white/[0.95] backdrop-blur border border-white/30 text-center min-w-[110px] shadow-sm">
                          <div className="text-sm font-[800] text-[#0f2a44]">{st.val}</div>
                          <div className="text-[11px] font-medium text-stone-500">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                  <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a]">Operations & Technical Capacity</div>
                  <h3 className="text-[18px] font-bold text-[#0f2a44] mt-2 leading-tight">Operations & Technical Capacity</h3>
                  <p className="text-[14px] leading-[1.75] text-stone-600 mt-3">{current.full}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#0f2a44]">
                    <span className="w-6 h-6 rounded-full bg-[#fdfbf7] border border-stone-200/80 flex items-center justify-center"><ArrowUpRight size={12} /></span>
                    All machines 100% brand-new imported
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-[#0f2a44]">Unit gallery</h4>
                    <span className="text-xs text-stone-400">{current.gallery.length} photos</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {current.gallery.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => openLightbox(current.gallery.map((g: string) => ({ src: g })), idx)}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100"
                      >
                        <img src={img} alt="" className="w-full h-full object-cover img-zoom" />
                        <div className="absolute inset-0 bg-[#0f2a44]/0 group-hover:bg-[#0f2a44]/10 transition-colors duration-400" />
                        <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight size={12} className="text-[#0f2a44]" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
