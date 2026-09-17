import { useState } from 'react';
import { Factory, Printer, Sparkles, Droplets, Wind, Recycle } from 'lucide-react';
import { useApp } from '../App';
import { assets } from '../assets';
import PageHeader from '../components/PageHeader';

const unitIcons: Record<string, typeof Factory> = {
  weaving: Factory,
  flatbed: Printer,
  digital: Sparkles,
  dyeing: Droplets,
  finishing: Wind,
  etp: Recycle,
};

const units: Record<string, any> = {
  weaving: {
    titleEn: 'Weaving Section', titleBn: 'উইভিং (বুনন) সেকশন',
    banner: assets.banners.weaving,
    shortEn: 'High-speed automated loom infrastructure producing premium greige fabric.', shortBn: 'উচ্চগতির স্বয়ংক্রিয় লুম পরিকাঠামো যা প্রিমিয়াম গ্রেজ ফ্যাব্রিক তৈরি করে।',
    fullEn: 'Our weaving division utilizes advanced high-speed looms with automated tension control and precision yarn alignment. We weave premium poplin, voile, twill, fine cotton, and blends tailored for sensitive printing and dyeing.',
    fullBn: 'আমাদের উইভিং বিভাগ স্বয়ংক্রিয় টেনশন কন্ট্রোল এবং সুনির্দিষ্ট সুতা সারিবদ্ধকরণ সহ উন্নত হাই-স্পিড লুম ব্যবহার করে। সেনসিটিভ প্রিন্টিং ও ডাইংয়ের উপযোগী প্রিমিয়াম পপলিন, ভয়েল, টুইল, ফাইন কটন ও ব্লেন্ড বুনন করা হয়।',
    stats: [{ val: '20s - 100s', labelEn: 'Yarn Count', labelBn: 'সুতার কাউন্ট' }, { val: 'Plain, Twill, Dobby', labelEn: 'Weave Types', labelBn: 'বুননের ধরন' }],
    gallery: assets.weaving
  },
  flatbed: {
    titleEn: 'Flat Bed Screen & Rotary Printing', titleBn: 'ফ্ল্যাট বেড স্ক্রিন ও রোটারি প্রিন্টিং',
    banner: assets.banners.flatbed,
    shortEn: 'Industrial heavy-duty flatbed and rotary screen printing lines.', shortBn: 'শিল্পমানের হেভি-ডিউটি ফ্ল্যাটবেড ও রোটারি প্রিন্টিং লাইন।',
    fullEn: 'Engineered for high-volume execution of Sarees, 3-Piece ladies wear, and boutique ethnic prints — up to 12 color stations with 80,000+ yards daily output.',
    fullBn: 'শাড়ি, থ্রি-পিস লেডিস পোশাক এবং বুটিক এথনিক প্রিন্টের বিশাল পরিমাণের জন্য প্রস্তুত — ১২টি পর্যন্ত রঙের স্টেশন ও দৈনিক ৮০,০০০+ গজ আউটপুট।',
    stats: [{ val: 'Up to 12 Colors', labelEn: 'Color Stations', labelBn: 'রঙের সক্ষমতা' }, { val: '80,000+ Yds', labelEn: 'Daily Output', labelBn: 'দৈনিক আউটপুট' }],
    gallery: assets.flatbed
  },
  digital: {
    titleEn: 'Digital Textile Printing', titleBn: 'ডিজিটাল টেক্সটাইল প্রিন্টিং',
    banner: assets.banners.digital,
    shortEn: 'Ultra high-definition direct-to-fabric digital printing.', shortBn: 'আল্ট্রা হাই-ডেফিনিশন ডিজিটাল প্রিন্টিং।',
    fullEn: 'Our digital printing wing offers unlimited color spectrums and photo-grade resolution up to 2400 DPI — perfect for intricate boutique and designer runs.',
    fullBn: 'আমাদের ডিজিটাল প্রিন্টিং উইং ২৪০০ ডিপিআই পর্যন্ত রেজোলিউশন ও আনলিমিটেড কালার স্পেকট্রাম দেয় — বুটিক ও ডিজাইনার প্রিন্টের জন্য আদর্শ।',
    stats: [{ val: '2400 DPI', labelEn: 'Resolution', labelBn: 'রেজোলিউশন' }, { val: '16.7M Colors', labelEn: 'Color Depth', labelBn: 'কালার ডেপথ' }],
    gallery: assets.digital
  },
  dyeing: {
    titleEn: 'Dyeing & Pre-Treatment Section', titleBn: 'ডাইং ও প্রি-ট্রিটমেন্ট সেকশন',
    banner: assets.banners.dyeing,
    shortEn: 'Comprehensive Jigger, Pad Batch, and Mercerizing units.', shortBn: 'জিগার, প্যাড ব্যাচ এবং মার্সারাইজিং ইউনিট।',
    fullEn: 'Equipped with 39+ specialized jiggers for uniform shade consistency, achieving grade 4-5 color fastness across every batch.',
    fullBn: '৩৯টিরও বেশি বিশেষায়িত জিগারে সজ্জিত — প্রতিটি ব্যাচে গ্রেড ৪-৫ কালার ফাস্টনেস নিশ্চিত করা হয়।',
    stats: [{ val: '39 Units', labelEn: 'Total Jiggers', labelBn: 'মোট জিগার' }, { val: 'Grade 4-5', labelEn: 'Color Fastness', labelBn: 'কালার ফাস্টনেস' }],
    gallery: [assets.banners.dyeing, assets.gallery[3].src, assets.gallery[6].src, assets.gallery[8].src]
  },
  finishing: {
    titleEn: 'Finishing & Stenter Section', titleBn: 'ফিনিশিং ও স্টেন্টার সেকশন',
    banner: assets.banners.finishing,
    shortEn: 'Bruckner Stenters, Calendars, and Super Wash units.', shortBn: 'ব্রুকনার স্টেন্টার, ক্যালেন্ডার ও সুপার ওয়াশ।',
    fullEn: 'German-engineered Bruckner Stenters, Thermo Stenters, and Calendars deliver dimensional stability with shrinkage under 2%.',
    fullBn: 'জার্মান প্রযুক্তির ব্রুকনার স্টেন্টার, থার্মো স্টেন্টার ও ক্যালেন্ডার — ২% এর কম শ্রিনকেজসহ মাত্রিক স্থিতিশীলতা নিশ্চিত করে।',
    stats: [{ val: '4 Lines', labelEn: 'Stenter Lines', labelBn: 'স্টেন্টার লাইন' }, { val: '< 2%', labelEn: 'Shrinkage', labelBn: 'শ্রিনকেজ' }],
    gallery: [assets.banners.finishing, assets.gallery[4].src, assets.gallery[7].src, assets.gallery[10].src]
  },
  etp: {
    titleEn: 'Effluent Treatment Plant (ETP)', titleBn: 'বর্জ্য পরিশোধনাগার (ইটিপি)',
    banner: assets.aboutBg,
    shortEn: '2,400 m³/day biochemical effluent treatment plant.', shortBn: 'দৈনিক ২,৪০০ ঘনমিটার বায়োকেমিক্যাল ইটিপি।',
    fullEn: 'A massive 16,000 sq.ft Biochemical ETP facility treats 2,400 m³ of effluent daily — keeping our water discharge clean and the environment safe.',
    fullBn: '১৬,০০০ বর্গফুটের বিশাল বায়োকেমিক্যাল ইটিপি দৈনিক ২,৪০০ ঘনমিটার বর্জ্য পরিশোধন করে — পরিবেশ সুরক্ষায় আমাদের অঙ্গীকার।',
    stats: [{ val: '2,400 m³/day', labelEn: 'Daily Capacity', labelBn: 'দৈনিক ক্ষমতা' }, { val: '16,000 Sq.Ft.', labelEn: 'Facility', labelBn: 'আয়তন' }],
    gallery: [assets.aboutBg, assets.gallery[12].src, assets.gallery[11].src]
  }
};

export default function UnitsPage() {
  const { lang, openLightbox } = useApp();
  const bn = lang === 'bn';
  const [activeUnit, setActiveUnit] = useState('weaving');
  const currentUnitData = units[activeUnit];
  const UnitIcon = unitIcons[activeUnit];

  return (
    <>
      <PageHeader
        eyebrowEn="Full-Scale Manufacturing Wings"
        eyebrowBn="উৎপাদন ও প্রসেসিং বিভাগ"
        titleEn="Integrated Industrial Production Infrastructure"
        titleBn="আমাদের সমন্বিত প্রোডাকশন সুবিধাসমূহ"
        subEn="Six specialized divisions — from yarn preparation to export-ready finished fabric."
        subBn="সুতা প্রস্তুতি থেকে রপ্তানি-উপযোগী ফেব্রিক পর্যন্ত ছয়টি বিশেষায়িত বিভাগ।"
        image={assets.banners.weaving}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-x">
          {/* Unit tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" data-reveal>
            {Object.keys(units).map((key) => {
              const u = units[key];
              const Icon = unitIcons[key];
              const active = activeUnit === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveUnit(key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-lg shadow-sky-500/25 scale-[1.04]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-amber-300' : 'text-sky-500'}`} />
                  {bn ? u.titleBn : u.titleEn}
                </button>
              );
            })}
          </div>

          {/* Active unit panel */}
          <div key={activeUnit} className="card overflow-hidden shadow-2xl hero-animate">
            {/* Banner */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <img src={currentUnitData.banner} alt={currentUnitData.titleEn} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/45 to-brand-950/10" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold text-amber-400 uppercase tracking-[0.18em]">
                    <UnitIcon className="w-4 h-4" />
                    {bn ? 'বিশেষায়িত সুবিধা ইউনিট' : 'Specialized Facility Unit'}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                    {bn ? currentUnitData.titleBn : currentUnitData.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-2 leading-relaxed">
                    {bn ? currentUnitData.shortBn : currentUnitData.shortEn}
                  </p>
                </div>
                <div className="flex gap-2.5">
                  {currentUnitData.stats.map((st: any, i: number) => (
                    <div key={i} className="glass-chip min-w-[110px]">
                      <div className="text-sm font-black text-sky-600 whitespace-nowrap">{st.val}</div>
                      <div className="text-[10px] text-slate-500 font-semibold mt-0.5">{bn ? st.labelBn : st.labelEn}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-9">
              <div className="lg:col-span-6 space-y-4">
                <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2.5">
                  <span className="w-8 h-1 rounded-full bg-gradient-to-r from-sky-500 to-amber-400 inline-block" />
                  {bn ? 'কার্যক্রম ও প্রযুক্তিগত সক্ষমতা' : 'Operations & Technical Capacity'}
                </h4>
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                  {bn ? currentUnitData.fullBn : currentUnitData.fullEn}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {currentUnitData.stats.map((st: any, i: number) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/5 border border-sky-500/20 text-[11px] font-bold text-sky-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {st.val} — {bn ? st.labelBn : st.labelEn}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  {bn ? 'ইউনিটের ছবি' : 'Unit Gallery'}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {currentUnitData.gallery.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(currentUnitData.gallery.map((g: string) => ({ src: g })), idx)}
                      className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 cursor-pointer zoom-img shadow-md hover:shadow-xl hover:border-sky-300 transition-all"
                    >
                      <img src={img} alt="Unit facility" className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-sky-500/0 hover:bg-sky-500/15 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
