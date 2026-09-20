import { useState } from 'react';
import { useApp } from '../App';
import { assets } from '../assets';
import { ArrowUpRight, Factory, Droplets, Printer, Layers, Sparkles, Recycle } from 'lucide-react';

export default function UnitsPage() {
  const { lang, openLightbox } = useApp();
  const [activeUnit, setActiveUnit] = useState('weaving');

  const units: Record<string, any> = {
    weaving: {
      titleEn: 'Weaving Section', titleBn: 'উইভিং (বুনন) সেকশন',
      banner: assets.banners.weaving,
      icon: Layers,
      shortEn: 'High-speed automated loom infrastructure producing premium greige fabric.', shortBn: 'উচ্চগতির স্বয়ংক্রিয় লুম পরিকাঠামো যা প্রিমিয়াম গ্রেজ ফ্যাব্রিক তৈরি করে।',
      fullEn: 'Our weaving division utilizes advanced high-speed looms with automated tension control and precision yarn alignment. We weave premium poplin, voile, twill, fine cotton, and blends tailored for sensitive printing and dyeing.',
      fullBn: 'আমাদের উইভিং বিভাগ স্বয়ংক্রিয় টেনশন কন্ট্রোল এবং সুনির্দিষ্ট সুতা সারিবদ্ধকরণ সহ উন্নত হাই-স্পিড লুম ব্যবহার করে।',
      stats: [{ val: '20s - 100s', labelEn: 'Yarn Count', labelBn: 'সুতার কাউন্ট' }, { val: 'Plain, Twill, Dobby', labelEn: 'Weave Types', labelBn: 'বুননের ধরন' }],
      gallery: assets.weaving
    },
    flatbed: {
      titleEn: 'Flat Bed Screen & Rotary', titleBn: 'ফ্ল্যাট বেড স্ক্রিন ও রোটারি',
      banner: assets.banners.flatbed,
      icon: Printer,
      shortEn: 'Industrial heavy-duty flatbed and rotary screen printing lines.', shortBn: 'শিল্পমানের হেভি-ডিউটি ফ্ল্যাটবেড ও রোটারি প্রিন্টিং লাইন।',
      fullEn: 'Engineered for high-volume execution of Sarees, 3-Piece ladies wear, and boutique ethnic prints.',
      fullBn: 'শাড়ি, থ্রি-পিস লেডিস পোশাক এবং বুটিক এথনিক প্রিন্টের বিশাল পরিমাণের জন্য প্রস্তুত।',
      stats: [{ val: 'Up to 12 Colors', labelEn: 'Color Stations', labelBn: 'রঙের সক্ষমতা' }, { val: '80,000+ Yds', labelEn: 'Daily Output', labelBn: 'দৈনিক আউটপুট' }],
      gallery: assets.flatbed
    },
    digital: {
      titleEn: 'Digital Textile Printing', titleBn: 'ডিজিটাল টেক্সটাইল প্রিন্টিং',
      banner: assets.banners.digital,
      icon: Sparkles,
      shortEn: 'Ultra high-definition direct-to-fabric digital printing.', shortBn: 'আল্ট্রা হাই-ডেফিনিশন ডিজিটাল প্রিন্টিং।',
      fullEn: 'Our digital printing wing offers unlimited color spectrums, photo-grade resolution (up to 2400 DPI).',
      fullBn: 'আমাদের ডিজিটাল প্রিন্টিং উইং ২৪০০ ডিপিআই পর্যন্ত রেজোলিউশন দেয়।',
      stats: [{ val: '2400 DPI', labelEn: 'Resolution', labelBn: 'রেজোলিউশন' }, { val: '16.7M Colors', labelEn: 'Color Depth', labelBn: 'কালার ডেপথ' }],
      gallery: assets.digital
    },
    dyeing: {
      titleEn: 'Dyeing & Pre-Treatment', titleBn: 'ডাইং ও প্রি-ট্রিটমেন্ট',
      banner: assets.banners.dyeing,
      icon: Droplets,
      shortEn: 'Comprehensive Jigger, Pad Batch, and Mercerizing units.', shortBn: 'জিগার, প্যাড ব্যাচ এবং মার্সারাইজিং ইউনিট।',
      fullEn: 'Equipped with 39+ specialized jiggers for uniform shade consistency.',
      fullBn: '৩৯টিরও বেশি বিশেষায়িত জিগারে সজ্জিত।',
      stats: [{ val: '39 Units', labelEn: 'Total Jiggers', labelBn: 'মোট জিগার' }, { val: 'Grade 4-5', labelEn: 'Color Fastness', labelBn: 'কালার ফাস্টনেস' }],
      gallery: [assets.banners.dyeing, assets.gallery[3].src, assets.gallery[6].src, assets.gallery[8].src]
    },
    finishing: {
      titleEn: 'Finishing & Stenter', titleBn: 'ফিনিশিং ও স্টেন্টার',
      banner: assets.banners.finishing,
      icon: Factory,
      shortEn: 'Bruckner Stenters, Calendars, and Super Wash units.', shortBn: 'ব্রুকনার স্টেন্টার, ক্যালেন্ডার ও সুপার ওয়াশ।',
      fullEn: 'German-engineered Bruckner Stenters, Thermo Stenters, and Calendars.',
      fullBn: 'জার্মান প্রযুক্তির ব্রুকনার স্টেন্টার ও ক্যালেন্ডার।',
      stats: [{ val: '4 Lines', labelEn: 'Stenter Lines', labelBn: 'স্টেন্টার লাইন' }, { val: '< 2%', labelEn: 'Shrinkage', labelBn: 'শ্রিনকেজ' }],
      gallery: [assets.banners.finishing, assets.gallery[4].src, assets.gallery[7].src, assets.gallery[10].src]
    },
    etp: {
      titleEn: 'Effluent Treatment Plant', titleBn: 'বর্জ্য পরিশোধনাগার (ইটিপি)',
      banner: assets.aboutBg,
      icon: Recycle,
      shortEn: '2,400 m³/day biochemical effluent treatment plant.', shortBn: 'দৈনিক ২৪০০ ঘনমিটার ইটিপি।',
      fullEn: 'A massive 16,000 sq.ft Biochemical ETP facility.',
      fullBn: '১৬,০০০ বর্গফুটের বিশাল বায়োকেমিক্যাল ইটিপি।',
      stats: [{ val: '2,400 m³/day', labelEn: 'Daily Capacity', labelBn: 'দৈনিক ক্ষমতা' }, { val: '16,000 Sq.Ft.', labelEn: 'Facility', labelBn: 'আয়তন' }],
      gallery: [assets.aboutBg, assets.gallery[12].src, assets.gallery[11].src]
    }
  };

  const current = units[activeUnit];
  const Icon = current.icon;

  return (
    <div className="pt-8 lg:pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
            {lang === 'bn' ? 'উৎপাদন ও প্রসেসিং বিভাগ' : 'Full-Scale Manufacturing Wings'}
          </div>
          <h1 className="mt-4 text-[30px] sm:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
            {lang === 'bn' ? 'আমাদের সমন্বিত প্রোডাকশন সুবিধাসমূহ' : 'Integrated industrial production infrastructure'}
          </h1>
        </div>

        {/* Tabs */}
        <div className="mt-7 flex flex-wrap gap-2">
          {Object.keys(units).map((key) => {
            const u = units[key];
            const active = activeUnit === key;
            return (
              <button
                key={key}
                onClick={() => setActiveUnit(key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold border transition-all ${active ? 'bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'}`}
              >
                {lang === 'bn' ? u.titleBn : u.titleEn}
              </button>
            );
          })}
        </div>

        {/* Main card */}
        <div className="mt-6 card-modern rounded-[24px] overflow-hidden">
          <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden bg-stone-200">
            <img src={current.banner} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-[#070d1a]/20 to-transparent" />
            {/* floating header */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                <div className="flex gap-4">
                  <div className="hidden sm:flex w-11 h-11 rounded-full bg-white text-[#0f2a44] items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/70">{lang === 'bn' ? 'বিভাগীয় পরিকাঠামো' : 'Specialized Facility Unit'}</div>
                    <h2 className="text-[24px] sm:text-[30px] font-[800] tracking-tight text-white mt-1 leading-none">{lang === 'bn' ? current.titleBn : current.titleEn}</h2>
                    <p className="text-sm text-white/75 max-w-xl mt-2 leading-relaxed">{lang === 'bn' ? current.shortBn : current.shortEn}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {current.stats.map((st: any, i: number) => (
                    <div key={i} className="px-4 py-3 rounded-2xl bg-white/95 backdrop-blur border border-white/20 text-center min-w-[110px]">
                      <div className="text-sm font-[800] text-[#0f2a44]">{st.val}</div>
                      <div className="text-[11px] font-medium text-stone-500">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a]">Operations & Technical Capacity</div>
              <h3 className="text-[18px] font-bold text-[#0f2a44] mt-2 leading-tight">{lang === 'bn' ? 'কার্যক্রম ও প্রযুক্তিগত সক্ষমতা' : 'Operations & Technical Capacity'}</h3>
              <p className="text-[14px] leading-relaxed text-stone-600 mt-3">{lang === 'bn' ? current.fullBn : current.fullEn}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#0f2a44]">
                <span className="w-6 h-6 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center"><ArrowUpRight size={12} /></span>
                {lang === 'bn' ? 'সকল মেশিন ১০০% ব্র্যান্ড নিউ আমদানিকৃত' : 'All machines 100% brand-new imported'}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[#0f2a44]">{lang === 'bn' ? 'ইউনিটের ছবি' : 'Unit gallery'}</h4>
                <span className="text-xs text-stone-400">{current.gallery.length} photos</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {current.gallery.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(current.gallery.map((g: string) => ({ src: g })), idx)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 bg-stone-100"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-[#0f2a44]/0 group-hover:bg-[#0f2a44]/10 transition-colors" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={12} className="text-[#0f2a44]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
