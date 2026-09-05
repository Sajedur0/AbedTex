import { useState } from 'react';
import { useApp } from '../App';
import { assets } from '../assets';

export default function UnitsPage() {
  const { lang, openLightbox } = useApp();
  const [activeUnit, setActiveUnit] = useState('weaving');

  const units: Record<string, any> = {
    weaving: {
      titleEn: 'Weaving Section', titleBn: 'উইভিং (বুনন) সেকশন',
      banner: assets.banners.weaving,
      shortEn: 'High-speed automated loom infrastructure producing premium greige fabric.', shortBn: 'উচ্চগতির স্বয়ংক্রিয় লুম পরিকাঠামো যা প্রিমিয়াম গ্রেজ ফ্যাব্রিক তৈরি করে।',
      fullEn: 'Our weaving division utilizes advanced high-speed looms with automated tension control and precision yarn alignment. We weave premium poplin, voile, twill, fine cotton, and blends tailored for sensitive printing and dyeing.',
      fullBn: 'আমাদের উইভিং বিভাগ স্বয়ংক্রিয় টেনশন কন্ট্রোল এবং সুনির্দিষ্ট সুতা সারিবদ্ধকরণ সহ উন্নত হাই-স্পিড লুম ব্যবহার করে।',
      stats: [{ val: '20s - 100s', labelEn: 'Yarn Count', labelBn: 'সুতার কাউন্ট' }, { val: 'Plain, Twill, Dobby', labelEn: 'Weave Types', labelBn: 'বুননের ধরন' }],
      gallery: assets.weaving
    },
    flatbed: {
      titleEn: 'Flat Bed Screen & Rotary Printing', titleBn: 'ফ্ল্যাট বেড স্ক্রিন ও রোটারি প্রিন্টিং',
      banner: assets.banners.flatbed,
      shortEn: 'Industrial heavy-duty flatbed and rotary screen printing lines.', shortBn: 'শিল্পমানের হেভি-ডিউটি ফ্ল্যাটবেড ও রোটারি প্রিন্টিং লাইন।',
      fullEn: 'Engineered for high-volume execution of Sarees, 3-Piece ladies wear, and boutique ethnic prints.',
      fullBn: 'শাড়ি, থ্রি-পিস লেডিস পোশাক এবং বুটিক এথনিক প্রিন্টের বিশাল পরিমাণের জন্য প্রস্তুত।',
      stats: [{ val: 'Up to 12 Colors', labelEn: 'Color Stations', labelBn: 'রঙের সক্ষমতা' }, { val: '80,000+ Yds', labelEn: 'Daily Output', labelBn: 'দৈনিক আউটপুট' }],
      gallery: assets.flatbed
    },
    digital: {
      titleEn: 'Digital Textile Printing', titleBn: 'ডিজিটাল টেক্সটাইল প্রিন্টিং',
      banner: assets.banners.digital,
      shortEn: 'Ultra high-definition direct-to-fabric digital printing.', shortBn: 'আল্ট্রা হাই-ডেফিনিশন ডিজিটাল প্রিন্টিং।',
      fullEn: 'Our digital printing wing offers unlimited color spectrums, photo-grade resolution (up to 2400 DPI).',
      fullBn: 'আমাদের ডিজিটাল প্রিন্টিং উইং ২৪০০ ডিপিআই পর্যন্ত রেজোলিউশন দেয়।',
      stats: [{ val: '2400 DPI', labelEn: 'Resolution', labelBn: 'রেজোলিউশন' }, { val: '16.7M Colors', labelEn: 'Color Depth', labelBn: 'কালার ডেপথ' }],
      gallery: assets.digital
    },
    dyeing: {
      titleEn: 'Dyeing & Pre-Treatment Section', titleBn: 'ডাইং ও প্রি-ট্রিটমেন্ট সেকশন',
      banner: assets.banners.dyeing,
      shortEn: 'Comprehensive Jigger, Pad Batch, and Mercerizing units.', shortBn: 'জিগার, প্যাড ব্যাচ এবং মার্সারাইজিং ইউনিট।',
      fullEn: 'Equipped with 39+ specialized jiggers for uniform shade consistency.',
      fullBn: '৩৯টিরও বেশি বিশেষায়িত জিগারে সজ্জিত।',
      stats: [{ val: '39 Units', labelEn: 'Total Jiggers', labelBn: 'মোট জিগার' }, { val: 'Grade 4-5', labelEn: 'Color Fastness', labelBn: 'কালার ফাস্টনেস' }],
      gallery: [assets.banners.dyeing, assets.gallery[3].src, assets.gallery[6].src, assets.gallery[8].src]
    },
    finishing: {
      titleEn: 'Finishing & Stenter Section', titleBn: 'ফিনিশিং ও স্টেন্টার সেকশন',
      banner: assets.banners.finishing,
      shortEn: 'Bruckner Stenters, Calendars, and Super Wash units.', shortBn: 'ব্রুকনার স্টেন্টার, ক্যালেন্ডার ও সুপার ওয়াশ।',
      fullEn: 'German-engineered Bruckner Stenters, Thermo Stenters, and Calendars.',
      fullBn: 'জার্মান প্রযুক্তির ব্রুকনার স্টেন্টার ও ক্যালেন্ডার।',
      stats: [{ val: '4 Lines', labelEn: 'Stenter Lines', labelBn: 'স্টেন্টার লাইন' }, { val: '< 2%', labelEn: 'Shrinkage', labelBn: 'শ্রিনকেজ' }],
      gallery: [assets.banners.finishing, assets.gallery[4].src, assets.gallery[7].src, assets.gallery[10].src]
    },
    etp: {
      titleEn: 'Effluent Treatment Plant (ETP)', titleBn: 'বর্জ্য পরিশোধনাগার (ইটিপি)',
      banner: assets.aboutBg,
      shortEn: '2,400 m³/day biochemical effluent treatment plant.', shortBn: 'দৈনিক ২৪০০ ঘনমিটার ইটিপি।',
      fullEn: 'A massive 16,000 sq.ft Biochemical ETP facility.',
      fullBn: '১৬,০০০ বর্গফুটের বিশাল বায়োকেমিক্যাল ইটিপি।',
      stats: [{ val: '2,400 m³/day', labelEn: 'Daily Capacity', labelBn: 'দৈনিক ক্ষমতা' }, { val: '16,000 Sq.Ft.', labelEn: 'Facility', labelBn: 'আয়তন' }],
      gallery: [assets.aboutBg, assets.gallery[12].src, assets.gallery[11].src]
    }
  };

  const currentUnitData = units[activeUnit];

  return (
    <section className="pt-28 pb-20 relative bg-white section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'উৎপাদন ও প্রসেসিং বিভাগ' : 'Full-Scale Manufacturing Wings'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'আমাদের সমন্বিত প্রোডাকশন সুবিধাসমূহ' : 'Integrated Industrial Production Infrastructure'}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {Object.keys(units).map((key) => {
            const u = units[key];
            return (
              <button key={key} onClick={() => setActiveUnit(key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${activeUnit === key ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-lg shadow-sky-500/25 scale-105' : 'bg-white/80 text-slate-700 border-slate-200 hover:border-slate-300'}`}>
                {lang === 'bn' ? u.titleBn : u.titleEn}
              </button>
            );
          })}
        </div>

        <div className="glass-card rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img src={currentUnitData.banner} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{lang === 'bn' ? 'বিভাগীয় পরিকাঠামো' : 'Specialized Facility Unit'}</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">{lang === 'bn' ? currentUnitData.titleBn : currentUnitData.titleEn}</h3>
                <p className="text-xs sm:text-sm text-slate-700 max-w-xl mt-1">{lang === 'bn' ? currentUnitData.shortBn : currentUnitData.shortEn}</p>
              </div>
              <div className="flex gap-2">
                {currentUnitData.stats.map((st: any, i: number) => (
                  <div key={i} className="px-3.5 py-2 rounded-xl glass-panel border border-sky-500/30 text-center">
                    <div className="text-xs sm:text-sm font-bold text-sky-600">{st.val}</div>
                    <div className="text-[10px] text-slate-600">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-lg font-bold text-slate-900">{lang === 'bn' ? 'কার্যক্রম ও প্রযুক্তিগত সক্ষমতা' : 'Operations & Technical Capacity'}</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{lang === 'bn' ? currentUnitData.fullBn : currentUnitData.fullEn}</p>
            </div>
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">{lang === 'bn' ? 'ইউনিটের ছবি' : 'Unit Gallery'}</h4>
              <div className="grid grid-cols-3 gap-2.5">
                {currentUnitData.gallery.map((img: string, idx: number) => (
                  <div key={idx} onClick={() => openLightbox(currentUnitData.gallery.map((g: string) => ({ src: g })), idx)}
                    className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 hover:border-sky-400 cursor-pointer group shadow-md">
                    <img src={img} alt="Thumb" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
