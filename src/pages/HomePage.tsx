import { useApp } from '../App';
import { assets } from '../assets';

export default function HomePage() {
  const { lang } = useApp();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={assets.homeBg} alt="Abed Textile Plant" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-6">
          <h1 className="hero-animate text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2]" style={{ animationDelay: '0.1s' }}>
            {lang === 'bn' ? 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেড' : 'Abed Textile Processing Mills Ltd.'}
          </h1>
          <p className="hero-animate text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed" style={{ animationDelay: '0.25s' }}>
            {lang === 'bn'
              ? '১৯৯৩ সাল থেকে বাংলাদেশের টেক্সটাইল শিল্পে আস্থার প্রতীক। ৭২টি আধুনিক মেশিনারি, ১০০০+ দক্ষ কর্মী এবং প্রতি মাসে ৪৫ লক্ষ গজ উৎপাদন ক্ষমতাসম্পন্ন সর্বাধুনিক ডাইং, প্রিন্টিং ও ফিনিশিং প্ল্যান্ট।'
              : 'A trusted name in Bangladesh textile processing since 1993. Empowered by 72 modern imported machineries, 1,000+ skilled workforce, and 4.5M yards monthly capacity for world-class Shari, 3-Pcs, Poplin & Fancy Fabrics.'}
          </p>
          <div className="hero-animate flex flex-wrap gap-4 pt-2" style={{ animationDelay: '0.4s' }}>
            <a href="#/units" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/30 transition-all flex items-center gap-2">
              <span>{lang === 'bn' ? 'উৎপাদন ইউনিটসমূহ দেখুন' : 'Explore Production Units'}</span>
              <span>→</span>
            </a>
            <a href="#/contact" className="px-5 py-3.5 rounded-xl bg-white/80 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 font-medium text-sm transition-all">
              <span>{lang === 'bn' ? 'ফ্যাক্টরি ও অফিস' : 'Factory & Offices'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
