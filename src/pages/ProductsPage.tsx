import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../App';
import PageHeader from '../components/PageHeader';

interface Product {
  nameEn: string; nameBn: string;
  catEn: string; catBn: string;
  descEn: string; descBn: string;
  badgeEn: string; badgeBn: string;
  specsEn: string[]; specsBn: string[];
  swatch: string;
  pattern: string;
}

const products: Product[] = [
  {
    nameEn: 'Exclusive Shari', nameBn: 'এক্সক্লুসিভ শাড়ি', catEn: 'Ethnic & Traditional Wear', catBn: 'ঐতিহ্যবাহী পোশাক',
    descEn: 'Renowned for exquisite print repeats, buttery soft fall, vibrant colorfast hues.', descBn: 'নিখুঁত প্রিন্ট রিপিট, মসৃণ ড্র্যাপ ও উজ্জ্বল রঙের জন্য সমাদৃত।',
    badgeEn: 'Best Seller', badgeBn: 'সর্বাধিক জনপ্রিয়',
    specsEn: ['100% Cotton, Voile, Silk Blend', 'Flatbed & Digital Print', '12-14 Haath length', 'Shrinkage controlled'],
    specsBn: ['১০০% কটন, ভয়েল, সিল্ক ব্লেন্ড', 'ফ্ল্যাটবেড ও ডিজিটাল প্রিন্ট', '১২-১৪ হাত দৈর্ঘ্য', 'শ্রিনকেজ মুক্ত'],
    swatch: 'linear-gradient(120deg, #7f1d1d 0%, #b91c1c 35%, #dc2626 60%, #f59e0b 100%)',
    pattern: 'pattern-wave',
  },
  {
    nameEn: 'Three-Piece Suits', nameBn: 'থ্রি-পিস ফেব্রিক্স', catEn: 'Ladies Fashion', catBn: 'লেডিস ফ্যাশন',
    descEn: 'Full matching sets of Kameez, Salwar, and Dupatta.', descBn: 'কামিজ, সালোয়ার ও ওড়নার সম্পূর্ণ ম্যাচিং সেট।',
    badgeEn: 'Trending', badgeBn: 'ট্রেন্ডিং',
    specsEn: ['Matching set', 'Fine yarn: 60s-80s', 'Anti-fading wash', 'Ultra-breathable'],
    specsBn: ['ম্যাচিং সেট', 'ফাইন কাউন্ট ৬০s-৮০s', 'অ্যান্টি-ফেডিং ওয়াশ', 'আরামদায়ক'],
    swatch: 'linear-gradient(120deg, #1e3a8a 0%, #1d4ed8 45%, #0ea5e9 100%)',
    pattern: 'pattern-check',
  },
  {
    nameEn: 'Premium Poplin', nameBn: 'প্রিমিয়াম পপলিন', catEn: 'Apparel & Shirting', catBn: 'পোশাক ও শার্টিং',
    descEn: 'Crisp, tightly woven plain weave cotton fabric.', descBn: 'উচ্চ ঘনত্বের পপলিন ফ্যাব্রিক।',
    badgeEn: 'Export Standard', badgeBn: 'রপ্তানি মানদণ্ড',
    specsEn: ['100% Combed Cotton', 'GSM: 100-140', 'Mercerized', 'Zero skew'],
    specsBn: ['১০০% কম্বড কটন', 'জিএসএম: ১০০-১৪০', 'মার্সারাইজড', 'নিখুঁত বুনন'],
    swatch: 'linear-gradient(120deg, #334155 0%, #64748b 50%, #cbd5e1 100%)',
    pattern: 'pattern-stripe',
  },
  {
    nameEn: 'Soft Voile', nameBn: 'নরম ভয়েল', catEn: 'Lightweight Textiles', catBn: 'হালকা টেক্সটাইল',
    descEn: 'Feather-light, semi-sheer plain weave with silky hand feel.', descBn: 'পালকের মতো হালকা, সিল্কি ভয়েল ফ্যাব্রিক।',
    badgeEn: 'Signature', badgeBn: 'সিগনেচার',
    specsEn: ['High-twist cotton', 'GSM: 65-85', 'Exceptional drape', 'Quick-drying'],
    specsBn: ['হাই-টুইস্ট কটন', 'জিএসএম: ৬৫-৮৫', 'চমৎকার ড্র্যাপ', 'দ্রুত শুকায়'],
    swatch: 'linear-gradient(120deg, #065f46 0%, #10b981 55%, #6ee7b7 100%)',
    pattern: 'pattern-dots',
  },
  {
    nameEn: 'Lillian Fabric', nameBn: 'লিলিয়ান ফেব্রিক', catEn: 'Fashion & Draped Wear', catBn: 'ফ্যাশন পোশাক',
    descEn: 'High-tenacity blended drape fabric with lustrous flow.', descBn: 'উচ্চ শক্তির ব্লেন্ডেড ড্র্যাপ ফ্যাব্রিক।',
    badgeEn: 'High Demand', badgeBn: 'ব্যাপক চাহিদা',
    specsEn: ['Polyester-Viscose blend', 'Reactive printed motifs', 'Silky wash finish', 'High vibrancy'],
    specsBn: ['পলিয়েস্টার-ভিসকোস ব্লেন্ড', 'রিয়্যাক্টিভ প্রিন্টেড', 'সিল্কি ওয়াশ ফিনিশ', 'উজ্জ্বল রঙ'],
    swatch: 'linear-gradient(120deg, #581c87 0%, #9333ea 50%, #e879f9 100%)',
    pattern: 'pattern-wave',
  },
  {
    nameEn: 'Knit Fabrics & Fancy Print', nameBn: 'নিট ফেব্রিক্স ও ফ্যান্সি প্রিন্ট', catEn: 'Knitwear', catBn: 'নিটওয়্যার',
    descEn: 'Single jersey, rib, interlock with supreme elasticity.', descBn: 'সিঙ্গেল জার্সি, রিব, ইন্টারলক।',
    badgeEn: 'Eco-Friendly', badgeBn: 'পরিবেশবান্ধব',
    specsEn: ['Single Jersey, Rib, Interlock', 'Reactive all-over print', 'Enzyme soft wash', 'Anti-pilling Grade 4'],
    specsBn: ['সিঙ্গেল জার্সি, রিব', 'রিয়্যাক্টিভ প্রিন্ট', 'এনজাইম সফট ওয়াশ', 'পিলিং মুক্ত'],
    swatch: 'linear-gradient(120deg, #ea580c 0%, #f59e0b 50%, #fde047 100%)',
    pattern: 'pattern-dots',
  },
];

export default function ProductsPage() {
  const { lang } = useApp();
  const bn = lang === 'bn';
  const [selected, setSelected] = useState(0);
  const active = products[selected];

  return (
    <>
      <PageHeader
        eyebrowEn="Premium Textile Portfolio"
        eyebrowBn="পণ্য ও টেক্সটাইল সম্ভার"
        titleEn="Our Manufactured Fabrics & Products"
        titleBn="আমাদের প্রস্তুতকৃত প্রিমিয়াম ফেব্রিক্স"
        subEn="Six signature collections — each backed by Oeko-Tex certified dyeing, printing and finishing."
        subBn="ছয়টি সিগনেচার কালেকশন — প্রতিটি Oeko-Tex সার্টিফাইড ডাইং, প্রিন্টিং ও ফিনিশিংয়ে সমৃদ্ধ।"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-x">
          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" data-reveal>
            {products.map((p, idx) => (
              <div
                key={p.nameEn}
                onClick={() => setSelected(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(idx)}
                className={`card card-hover overflow-hidden cursor-pointer group flex flex-col ${
                  selected === idx ? 'border-sky-400 shadow-card-hover ring-2 ring-sky-400/40' : ''
                }`}
              >
                <div className={`swatch h-36 ${p.pattern}`} style={{ backgroundImage: p.swatch }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur text-white text-[11px] font-bold tracking-wide">
                    {bn ? p.catBn : p.catEn}
                  </span>
                  {selected === idx && (
                    <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white text-sky-600 flex items-center justify-center shadow-lg">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {bn ? p.nameBn : p.nameEn}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-700 border border-amber-500/25 whitespace-nowrap shrink-0">
                      {bn ? p.badgeBn : p.badgeEn}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed flex-1">{bn ? p.descBn : p.descEn}</p>
                  <div className="pt-3 mt-3 border-t border-slate-100 space-y-1.5">
                    {(bn ? p.specsBn : p.specsEn).slice(0, 2).map((sp, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="card border-sky-200 shadow-2xl overflow-hidden" data-reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Swatch side */}
              <div className="lg:col-span-4">
                <div className={`swatch h-44 lg:h-full min-h-[220px] ${active.pattern}`} style={{ backgroundImage: active.swatch }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2 text-white/90 text-[11px] font-bold uppercase tracking-[0.16em]">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      {bn ? active.catBn : active.catEn}
                    </div>
                    <div className="text-white font-extrabold text-xl mt-1 leading-snug">{bn ? active.nameBn : active.nameEn}</div>
                  </div>
                </div>
              </div>

              {/* Details side */}
              <div className="lg:col-span-8 p-7 sm:p-9 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{bn ? active.nameBn : active.nameEn}</h3>
                  <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed">{bn ? active.descBn : active.descEn}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(bn ? active.specsBn : active.specsEn).map((sp, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[13px] text-slate-700 flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-sky-50 to-amber-50 rounded-xl p-4 border border-sky-100">
                  <div className="text-center sm:text-left">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {bn ? 'বাল্ক অর্ডার ও স্যাম্পল' : 'Bulk Order & Sampling'}
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {bn ? 'কাস্টমাইজড ফ্যাব্রিক কোটেশন চান?' : 'Need Custom Specifications?'}
                    </div>
                  </div>
                  <a href="#/contact" className="btn-primary !py-2.5 shrink-0">
                    {bn ? 'যোগাযোগ করুন' : 'Contact Us'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
