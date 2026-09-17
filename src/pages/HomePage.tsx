import { BadgeCheck, ArrowRight, ChevronDown, Award, Factory, ShieldCheck, Droplets, Sparkles } from 'lucide-react';
import { useApp } from '../App';
import { assets } from '../assets';
import CountUp from '../components/CountUp';
import SectionHeading from '../components/SectionHeading';

const heroChips = [
  { icon: BadgeCheck, labelEn: 'Oeko-Tex Certified', labelBn: 'Oeko-Tex সার্টিফাইড' },
  { icon: Sparkles, labelEn: 'Since 1993', labelBn: '১৯৯৩ সাল থেকে' },
  { icon: Award, labelEn: '100% Export Oriented', labelBn: '১০০% রপ্তানিমুখী' },
];

const heroStats = [
  { to: 72, suffix: '', labelEn: 'Modern Machineries', labelBn: 'আধুনিক মেশিনারি' },
  { to: 1000, suffix: '+', labelEn: 'Skilled Workforce', labelBn: 'দক্ষ কর্মীবাহিনী' },
  { to: 4500000, suffix: '', labelEn: 'Yards Monthly Capacity', labelBn: 'গজ মাসিক উৎপাদন' },
  { to: 33, suffix: '+', labelEn: 'Years of Excellence', labelBn: 'বছরের অভিজ্ঞতা' },
];

const certifications = [
  'OEKO-TEX Standard 100',
  'ISO Certified',
  'SA-8000 Compliant',
  'BTMEA Member',
  'ATPML Certified',
  'NCCI Member',
];

const homeUnits = [
  {
    key: 'weaving',
    img: assets.banners.weaving,
    titleEn: 'Weaving',
    titleBn: 'উইভিং',
    descEn: 'High-speed automated looms weaving premium greige fabric.',
    descBn: 'উচ্চগতির স্বয়ংক্রিয় লুমে প্রিমিয়াম গ্রেজ ফ্যাব্রিক বুনন।',
  },
  {
    key: 'printing',
    img: assets.banners.flatbed,
    titleEn: 'Flat Bed & Rotary Printing',
    titleBn: 'ফ্ল্যাটবেড ও রোটারি প্রিন্টিং',
    descEn: 'Industrial screen printing lines up to 12 color stations.',
    descBn: '১২ রঙের স্টেশনসহ শিল্পমানের স্ক্রিন প্রিন্টিং লাইন।',
  },
  {
    key: 'digital',
    img: assets.banners.digital,
    titleEn: 'Digital Printing',
    titleBn: 'ডিজিটাল প্রিন্টিং',
    descEn: 'Ultra HD direct-to-fabric printing up to 2400 DPI.',
    descBn: '২৪০০ ডিপিআই পর্যন্ত আল্ট্রা এইচডি ডিজিটাল প্রিন্টিং।',
  },
  {
    key: 'dyeing',
    img: assets.banners.dyeing,
    titleEn: 'Dyeing & Pre-Treatment',
    titleBn: 'ডাইং ও প্রি-ট্রিটমেন্ট',
    descEn: '39+ specialized jiggers with grade 4-5 color fastness.',
    descBn: '৩৯টির বেশি বিশেষায়িত জিগার, গ্রেড ৪-৫ কালার ফাস্টনেস।',
  },
  {
    key: 'finishing',
    img: assets.banners.finishing,
    titleEn: 'Finishing & Stenter',
    titleBn: 'ফিনিশিং ও স্টেন্টার',
    descEn: 'Bruckner stenters, calendars and super wash lines.',
    descBn: 'ব্রুকনার স্টেন্টার, ক্যালেন্ডার ও সুপার ওয়াশ লাইন।',
  },
  {
    key: 'etp',
    img: assets.aboutBg,
    titleEn: 'Effluent Treatment (ETP)',
    titleBn: 'বর্জ্য পরিশোধন (ইটিপি)',
    descEn: '2,400 m³/day biochemical effluent treatment plant.',
    descBn: 'দৈনিক ২,৪০০ ঘনমিটার বায়োকেমিক্যাল ইটিপি প্ল্যান্ট।',
  },
];

const homeProducts = [
  {
    nameEn: 'Exclusive Shari',
    nameBn: 'এক্সক্লুসিভ শাড়ি',
    badgeEn: 'Best Seller',
    badgeBn: 'সর্বাধিক জনপ্রিয়',
    swatch: 'linear-gradient(120deg, #7f1d1d 0%, #b91c1c 35%, #dc2626 60%, #f59e0b 100%)',
    pattern: 'pattern-wave',
  },
  {
    nameEn: 'Three-Piece Suits',
    nameBn: 'থ্রি-পিস ফেব্রিক্স',
    badgeEn: 'Trending',
    badgeBn: 'ট্রেন্ডিং',
    swatch: 'linear-gradient(120deg, #1e3a8a 0%, #1d4ed8 45%, #0ea5e9 100%)',
    pattern: 'pattern-check',
  },
  {
    nameEn: 'Premium Poplin',
    nameBn: 'প্রিমিয়াম পপলিন',
    badgeEn: 'Export Standard',
    badgeBn: 'রপ্তানি মানদণ্ড',
    swatch: 'linear-gradient(120deg, #334155 0%, #64748b 50%, #cbd5e1 100%)',
    pattern: 'pattern-stripe',
  },
  {
    nameEn: 'Soft Voile',
    nameBn: 'নরম ভয়েল',
    badgeEn: 'Signature',
    badgeBn: 'সিগনেচার',
    swatch: 'linear-gradient(120deg, #065f46 0%, #10b981 55%, #6ee7b7 100%)',
    pattern: 'pattern-dots',
  },
  {
    nameEn: 'Lillian Fabric',
    nameBn: 'লিলিয়ান ফেব্রিক',
    badgeEn: 'High Demand',
    badgeBn: 'ব্যাপক চাহিদা',
    swatch: 'linear-gradient(120deg, #581c87 0%, #9333ea 50%, #e879f9 100%)',
    pattern: 'pattern-wave',
  },
  {
    nameEn: 'Knit & Fancy Prints',
    nameBn: 'নিট ও ফ্যান্সি প্রিন্ট',
    badgeEn: 'Eco-Friendly',
    badgeBn: 'পরিবেশবান্ধব',
    swatch: 'linear-gradient(120deg, #ea580c 0%, #f59e0b 50%, #fde047 100%)',
    pattern: 'pattern-dots',
  },
];

const whyUs = [
  {
    icon: BadgeCheck,
    titleEn: 'Oeko-Tex Certified Quality',
    titleBn: 'Oeko-Tex সার্টিফাইড মান',
    descEn: 'Confidence in Textiles — every fabric tested against international safety standards.',
    descBn: 'প্রতিটি ফেব্রিক আন্তর্জাতিক নিরাপত্তা মানে পরীক্ষিত — Confidence in Textiles।',
  },
  {
    icon: Factory,
    titleEn: '72 Modern Imported Machines',
    titleBn: '৭২টি আমদানিকৃত আধুনিক মেশিন',
    descEn: 'State-of-the-art machinery from Japan, Germany, Taiwan and India.',
    descBn: 'জাপান, জার্মানি, তাইওয়ান ও ভারত থেকে সর্বাধুনিক যন্ত্রপাতি।',
  },
  {
    icon: ShieldCheck,
    titleEn: 'SA-8000 Compliance',
    titleBn: 'SA-8000 কমপ্লায়েন্স',
    descEn: 'Strict labor standards, worker welfare and full ethical manufacturing.',
    descBn: 'কঠোর শ্রম মানদণ্ড, শ্রমিক কল্যাণ ও সম্পূর্ণ নৈতিক উৎপাদন।',
  },
  {
    icon: Droplets,
    titleEn: 'Green Manufacturing',
    titleBn: 'সবুজ উৎপাদন',
    descEn: '16,000 sq.ft biochemical ETP treating 2,400 m³ of water daily.',
    descBn: '১৬,০০০ বর্গফুট ইটিপি — দৈনিক ২,৪০০ ঘনমিটার পানি পরিশোধন।',
  },
];

export default function HomePage() {
  const { lang } = useApp();
  const bn = lang === 'bn';

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-950" style={{ minHeight: '100svh' }}>
        <div className="absolute inset-0">
          <img
            src={assets.homeBg}
            alt="Abed Textile Processing Mills plant"
            className="w-full h-full object-cover animate-ken-burns will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/55 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="container-x pt-32 pb-16 w-full">
            <div className="max-w-3xl">
              <div className="hero-animate flex flex-wrap gap-2.5" style={{ animationDelay: '0.08s' }}>
                {heroChips.map((chip) => (
                  <span
                    key={chip.labelEn}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-dark text-[11px] sm:text-xs font-bold text-sky-100 tracking-wide"
                  >
                    <chip.icon className="w-4 h-4 text-amber-400" />
                    {bn ? chip.labelBn : chip.labelEn}
                  </span>
                ))}
              </div>

              <h1
                className="hero-animate mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight text-white leading-[1.12]"
                style={{ animationDelay: '0.2s' }}
              >
                {bn ? (
                  <>
                    আবেদ টেক্সটাইল <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-amber-300 bg-clip-text text-transparent">প্রসেসিং মিলস</span> লিমিটেড
                  </>
                ) : (
                  <>
                    Abed Textile{' '}
                    <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-amber-300 bg-clip-text text-transparent">
                      Processing Mills
                    </span>{' '}
                    Ltd.
                  </>
                )}
              </h1>

              <p
                className="hero-animate mt-6 text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed"
                style={{ animationDelay: '0.34s' }}
              >
                {bn
                  ? '১৯৯৩ সাল থেকে বাংলাদেশের টেক্সটাইল শিল্পে আস্থার প্রতীক। ৭২টি আধুনিক মেশিনারি, ১,০০০+ দক্ষ কর্মী এবং মাসিক ৪৫ লক্ষ গজ উৎপাদন ক্ষমতাসম্পন্ন সর্বাধুনিক ডাইং, প্রিন্টিং ও ফিনিশিং প্ল্যান্ট।'
                  : 'A trusted name in Bangladesh textile processing since 1993. Empowered by 72 modern imported machineries, 1,000+ skilled workforce, and 4.5M yards monthly capacity for world-class Shari, 3-Pcs, Poplin & Fancy Fabrics.'}
              </p>

              <div className="hero-animate mt-9 flex flex-wrap gap-3.5" style={{ animationDelay: '0.48s' }}>
                <a href="#/units" className="btn-primary">
                  <span>{bn ? 'উৎপাদন ইউনিটসমূহ দেখুন' : 'Explore Production Units'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#/contact" className="btn-ghost-dark">
                  {bn ? 'কোটেশনের জন্য যোগাযোগ' : 'Request a Quotation'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex justify-center pb-4">
          <ChevronDown className="w-6 h-6 text-white/60 animate-bounce-soft" aria-hidden />
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-white/10 bg-brand-950/60 backdrop-blur-md">
          <div className="container-x grid grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat, i) => (
              <div
                key={stat.labelEn}
                className={`py-6 sm:py-7 px-4 text-center ${i !== 0 ? 'border-l border-white/10' : ''} ${
                  i >= 2 ? 'border-t lg:border-t-0 border-white/10' : ''
                }`}
              >
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-sky-300/90">
                  {bn ? stat.labelBn : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATION MARQUEE ================= */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="container-x mb-4 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {bn ? 'সার্টিফাইড ও স্বীকৃত' : 'Certified & Recognized By'}
          </span>
        </div>
        <div className="marquee" aria-hidden>
          <div className="marquee-track items-center gap-4 pr-4">
            {[...certifications, ...certifications].map((cert, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 whitespace-nowrap"
              >
                <Award className="w-4 h-4 text-amber-500" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT TEASER ================= */}
      <section className="relative py-20 sm:py-24 bg-slate-50 textile-grid overflow-hidden">
        <div className="glow-orb w-96 h-96 bg-sky-400 top-10 -right-32" />
        <div className="relative container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images */}
          <div className="lg:col-span-6 relative" data-reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl zoom-img border border-white">
              <img src={assets.aboutBg} alt="Abed Textile factory site" className="w-full h-[300px] sm:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 glass-chip w-44 py-4 animate-float-slow">
              <div className="text-2xl font-black gradient-text">33+</div>
              <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mt-0.5">
                {bn ? 'বছরের অভিজ্ঞতা' : 'Years of Excellence'}
              </div>
            </div>
            <div className="absolute -top-5 -left-2 sm:left-6 glass-chip w-40 py-4 animate-floaty">
              <div className="text-2xl font-black text-emerald-600">2,400</div>
              <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mt-0.5">
                {bn ? 'm³/দিন ইটিপি' : 'm³/day ETP'}
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6" data-reveal>
            <span className="eyebrow-gold">{bn ? 'কোম্পানি পরিচিতি' : 'Who We Are'}</span>
            <h2 className="section-title mt-4">
              {bn ? (
                <>
                  তিন দশকের ঐতিহ্য ও <span className="gradient-text">আধুনিকতার</span> অনন্য সমন্বয়
                </>
              ) : (
                <>
                  Three Decades of Tradition,{' '}
                  <span className="gradient-text">Engineered with Modernity</span>
                </>
              )}
            </h2>
            <p className="section-sub">
              {bn
                ? '১৯৯৩ সালে বাণিজ্যিক উৎপাদন শুরু করে আজ আমরা বাংলাদেশের অন্যতম শীর্ষ টেক্সটাইল প্রসেসিং মিল। উচ্চমানের কমপ্লায়েন্স, সময়মতো ডেলিভারি ও নিবেদিত গ্রাহকসেবাই আমাদের পরিচয়।'
                : 'Beginning commercial production in 1993, we have grown into one of Bangladesh\u2019s leading textile processing mills — defined by high compliance, on-time delivery and dedicated customer service.'}
            </p>
            <ul className="mt-6 space-y-3">
              {(bn
                ? ['৭২টি আমদানিকৃত আধুনিক মেশিনারি', '১,০০০+ জনের দক্ষ কর্মীবাহিনী', '১,৫৩,৩৭২ বর্গফুট কারখানা ভবন']
                : ['72 imported modern machineries', 'A workforce of 1,000+ skilled people', '153,372 sq.ft. of factory floors']
              ).map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <BadgeCheck className="w-4 h-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#/about" className="btn-outline mt-8">
              {bn ? 'আরও জানুন' : 'More About Us'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= UNITS SHOWCASE ================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrowEn="Manufacturing Wings"
            eyebrowBn="উৎপাদন বিভাগসমূহ"
            titleEn="Integrated Production Facilities"
            titleBn="সমন্বিত প্রোডাকশন সুবিধাসমূহ"
            subEn="Six specialized divisions working as one seamless pipeline — from yarn to finished fabric."
            subBn="সুতা থেকে চূড়ান্ত ফেব্রিক পর্যন্ত ছয়টি বিশেষায়িত বিভাগের নিরবচ্ছিন্ন ধারাবাহিকতা।"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeUnits.map((unit) => (
              <a
                key={unit.key}
                href="#/units"
                className="card card-hover zoom-img overflow-hidden group flex flex-col"
              >
                <div className="relative h-44 shrink-0">
                  <img src={unit.img} alt={unit.titleEn} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 right-4 text-white font-bold text-[15px] drop-shadow">
                    {bn ? unit.titleBn : unit.titleEn}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[13px] text-slate-600 leading-relaxed flex-1">{bn ? unit.descBn : unit.descEn}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider group-hover:gap-3 transition-all">
                    {bn ? 'বিস্তারিত' : 'Explore'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS (dark) ================= */}
      <section className="relative py-20 sm:py-24 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-40" />
        <div className="glow-orb w-[420px] h-[420px] bg-sky-500/40 top-0 -left-32" />
        <div className="glow-orb w-[380px] h-[380px] bg-amber-500/25 bottom-0 -right-24" />

        <div className="relative container-x">
          <SectionHeading
            tone="dark"
            eyebrowEn="Premium Textile Portfolio"
            eyebrowBn="প্রিমিয়াম টেক্সটাইল সম্ভার"
            titleEn="Fabrics Crafted for the World"
            titleBn="বিশ্বের জন্য তৈরি প্রিমিয়াম ফেব্রিক"
            subEn="From heritage Sharis to export-grade poplin — every weave carries our signature finish."
            subBn="ঐতিহ্যবাহী শাড়ি থেকে রপ্তানি-মানের পপলিন — প্রতিটি বুননে আমাদের সিগনেচার ফিনিশ।"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeProducts.map((p) => (
              <a key={p.nameEn} href="#/products" className="group">
                <div className="card !bg-white/[0.04] !border-white/10 !shadow-none hover:!border-sky-400/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className={`swatch h-32 ${p.pattern}`} style={{ backgroundImage: p.swatch }}>
                    <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/40 to-transparent">
                      <span className="text-white font-extrabold text-base drop-shadow">{bn ? p.nameBn : p.nameEn}</span>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                      {bn ? 'ফেব্রিক কালেকশন' : 'Fabric Collection'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {bn ? p.badgeBn : p.badgeEn}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#/products" className="btn-light">
              {bn ? 'সব পণ্য দেখুন' : 'View All Products'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 sm:py-24 bg-slate-50 textile-grid">
        <div className="container-x">
          <SectionHeading
            eyebrowEn="Why Abed Textile"
            eyebrowBn='কেন "আবেদ টেক্সটাইল"'
            titleEn="Standards You Can Build a Brand On"
            titleBn="যে মানের উপর আপনি ব্র্যান্ড গড়তে পারেন"
            subEn="Quality, capacity, compliance and sustainability — the four pillars behind every order."
            subBn="মান, সক্ষমতা, কমপ্লায়েন্স ও সাসটেইনেবিলিটি — প্রতিটি অর্ডারের চার স্তম্ভ।"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal>
            {whyUs.map((f, i) => (
              <div key={f.titleEn} className="card card-hover p-6 relative overflow-hidden group">
                <span className="absolute -top-3 -right-1 text-[64px] font-black text-slate-900/[0.04] select-none leading-none">
                  0{i + 1}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/25 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[15px] leading-snug">{bn ? f.titleBn : f.titleEn}</h3>
                <p className="mt-2 text-[13px] text-slate-600 leading-relaxed">{bn ? f.descBn : f.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <div
            data-reveal
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900 px-6 py-14 sm:px-14 sm:py-16 text-center shadow-2xl"
          >
            <div className="absolute inset-0 textile-grid-dark opacity-40" />
            <div className="glow-orb w-80 h-80 bg-sky-400/40 -top-20 -left-16" />
            <div className="glow-orb w-72 h-72 bg-amber-400/30 -bottom-24 -right-10" />
            <div className="relative">
              <span className="eyebrow-dark">{bn ? 'RFQ — দ্রুত সাড়া পাবেন' : 'Request for Quotation'}</span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                {bn ? 'কাস্টম ফেব্রিক প্রসেসিং দরকার? আমরা প্রস্তুত।' : 'Need Custom Fabric Processing at Scale?'}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                {bn
                  ? 'বাল্ক অর্ডার, স্যাম্পল ডেভেলপমেন্ট বা যেকোনো প্রশ্নে — আমাদের মার্চেন্ডাইজিং টিম ২৪ ঘণ্টার মধ্যে সাড়া দেয়।'
                  : 'Bulk orders, sample development or any enquiry — our merchandising team responds within 24 hours.'}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <a href="#/contact" className="btn-gold">
                  {bn ? 'এখনই যোগাযোগ করুন' : 'Get in Touch'}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#/gallery" className="btn-ghost-dark">
                  {bn ? 'কারখানা দেখুন' : 'See the Factory'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
