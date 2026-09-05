import { useState } from 'react';
import { useApp } from '../App';

const products = [
  { nameEn: 'Exclusive Shari', nameBn: 'এক্সক্লুসিভ শাড়ি', catEn: 'Ethnic & Traditional Wear', catBn: 'ঐতিহ্যবাহী পোশাক', descEn: 'Renowned for exquisite print repeats, buttery soft fall, vibrant colorfast hues.', descBn: 'নিখুঁত প্রিন্ট রিপিট, মসৃণ ড্র্যাপ ও উজ্জ্বল রঙের জন্য সমাদৃত।', badgeEn: 'Best Seller', badgeBn: 'সর্বাধিক জনপ্রিয়', specsEn: ['100% Cotton, Voile, Silk Blend', 'Flatbed & Digital Print', '12-14 Haath length', 'Shrinkage controlled'], specsBn: ['১০০% কটন, ভয়েল, সিল্ক ব্লেন্ড', 'ফ্ল্যাটবেড ও ডিজিটাল প্রিন্ট', '১২-১৪ হাত দৈর্ঘ্য', 'শ্রিনকেজ মুক্ত'] },
  { nameEn: 'Three-Piece Suits', nameBn: 'থ্রি-পিস ফেব্রিক্স', catEn: 'Ladies Fashion', catBn: 'লেডিস ফ্যাশন', descEn: 'Full matching sets of Kameez, Salwar, and Dupatta.', descBn: 'কামিজ, সালোয়ার ও ওড়নার সম্পূর্ণ ম্যাচিং সেট।', badgeEn: 'Trending', badgeBn: 'ট্রেন্ডিং', specsEn: ['Matching set', 'Fine yarn: 60s-80s', 'Anti-fading wash', 'Ultra-breathable'], specsBn: ['ম্যাচিং সেট', 'ফাইন কাউন্ট ৬০s-৮০s', 'অ্যান্টি-ফেডিং ওয়াশ', 'আরামদায়ক'] },
  { nameEn: 'Premium Poplin', nameBn: 'প্রিমিয়াম পপলিন', catEn: 'Apparel & Shirting', catBn: 'পোশাক ও শার্টিং', descEn: 'Crisp, tightly woven plain weave cotton fabric.', descBn: 'উচ্চ ঘনত্বের পপলিন ফ্যাব্রিক।', badgeEn: 'Export Standard', badgeBn: 'রপ্তানি মানদণ্ড', specsEn: ['100% Combed Cotton', 'GSM: 100-140', 'Mercerized', 'Zero skew'], specsBn: ['১০০% কম্বড কটন', 'জিএসএম: ১০০-১৪০', 'মার্সারাইজড', 'নিখুঁত বুনন'] },
  { nameEn: 'Soft Voile', nameBn: 'নরম ভয়েল', catEn: 'Lightweight Textiles', catBn: 'হালকা টেক্সটাইল', descEn: 'Feather-light, semi-sheer plain weave with silky hand feel.', descBn: 'পালকের মতো হালকা, সিল্কি ভয়েল ফ্যাব্রিক।', badgeEn: 'Signature', badgeBn: 'সিগনেচার', specsEn: ['High-twist cotton', 'GSM: 65-85', 'Exceptional drape', 'Quick-drying'], specsBn: ['হাই-টুইস্ট কটন', 'জিএসএম: ৬৫-৮৫', 'চমৎকার ড্র্যাপ', 'দ্রুত শুকায়'] },
  { nameEn: 'Lillian Fabric', nameBn: 'লিলিয়ান ফেব্রিক', catEn: 'Fashion & Draped Wear', catBn: 'ফ্যাশন পোশাক', descEn: 'High-tenacity blended drape fabric with lustrous flow.', descBn: 'উচ্চ শক্তির ব্লেন্ডেড ড্র্যাপ ফ্যাব্রিক।', badgeEn: 'High Demand', badgeBn: 'ব্যাপক চাহিদা', specsEn: ['Polyester-Viscose blend', 'Reactive printed motifs', 'Silky wash finish', 'High vibrancy'], specsBn: ['পলিয়েস্টার-ভিসকোস ব্লেন্ড', 'রিয়্যাক্টিভ প্রিন্টেড', 'সিল্কি ওয়াশ ফিনিশ', 'উজ্জ্বল রঙ'] },
  { nameEn: 'Knit Fabrics & Fancy Print', nameBn: 'নিট ফেব্রিক্স ও ফ্যান্সি প্রিন্ট', catEn: 'Knitwear', catBn: 'নিটওয়্যার', descEn: 'Single jersey, rib, interlock with supreme elasticity.', descBn: 'সিঙ্গেল জার্সি, রিব, ইন্টারলক।', badgeEn: 'Eco-Friendly', badgeBn: 'পরিবেশবান্ধব', specsEn: ['Single Jersey, Rib, Interlock', 'Reactive all-over print', 'Enzyme soft wash', 'Anti-pilling Grade 4'], specsBn: ['সিঙ্গেল জার্সি, রিব', 'রিয়্যাক্টিভ প্রিন্ট', 'এনজাইম সফট ওয়াশ', 'পিলিং মুক্ত'] }
];

export default function ProductsPage() {
  const { lang } = useApp();
  const [selected, setSelected] = useState(0);

  return (
    <section className="pt-28 pb-20 relative bg-white section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'পণ্য ও টেক্সটাইল সম্ভার' : 'Premium Textile Portfolio'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'আমাদের প্রস্তুতকৃত প্রিমিয়াম ফেব্রিক্স' : 'Our Manufactured Fabrics & Products'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((p, idx) => (
            <div key={idx} onClick={() => setSelected(idx)}
              className={`glass-card p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between tilt-card ${selected === idx ? 'border-sky-400 shadow-xl shadow-sky-500/20 bg-white/90' : 'border-slate-200'}`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">{lang === 'bn' ? p.catBn : p.catEn}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-700 border border-amber-500/30">{lang === 'bn' ? p.badgeBn : p.badgeEn}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{lang === 'bn' ? p.nameBn : p.nameEn}</h3>
                <p className="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed mb-4">{lang === 'bn' ? p.descBn : p.descEn}</p>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-1.5">
                {(lang === 'bn' ? p.specsBn : p.specsEn).slice(0, 2).map((sp, i) => (
                  <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span><span className="truncate">{sp}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded bg-sky-500/20 text-sky-700 text-xs font-bold uppercase">{lang === 'bn' ? products[selected].catBn : products[selected].catEn}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{lang === 'bn' ? products[selected].nameBn : products[selected].nameEn}</h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{lang === 'bn' ? products[selected].descBn : products[selected].descEn}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {(lang === 'bn' ? products[selected].specsBn : products[selected].specsEn).map((sp, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span><span>{sp}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 p-6 rounded-xl bg-white border border-slate-200 text-center space-y-3">
              <div className="text-xs font-semibold text-slate-600 uppercase">{lang === 'bn' ? 'বাল্ক অর্ডার ও স্যাম্পল' : 'Bulk Order & Sampling'}</div>
              <div className="text-base font-bold text-slate-900">{lang === 'bn' ? 'কাস্টমাইজড ফ্যাব্রিক কোটেশন চান?' : 'Need Custom Specifications?'}</div>
              <a href="#/contact" className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase block">{lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
