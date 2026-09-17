import { useState } from 'react';
import { HeartHandshake, BadgeCheck, Users, Sparkles, Target, Leaf, Check } from 'lucide-react';
import { useApp } from '../App';
import { assets } from '../assets';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CountUp from '../components/CountUp';

const values = [
  {
    icon: HeartHandshake,
    titleEn: 'Customer First',
    titleBn: 'গ্রাহকই সর্বাগ্রে',
    descEn: 'We place customer satisfaction at the core of all operations.',
    descBn: 'আমরা আমাদের সকল কার্যক্রমের কেন্দ্রে গ্রাহক সন্তুষ্টি অগ্রাধিকার দিই।',
  },
  {
    icon: BadgeCheck,
    titleEn: 'Pursuit of Quality',
    titleBn: 'গুণগত মানের অনুসরণ',
    descEn: 'Relentless commitment to flawless processing and durability.',
    descBn: 'ত্রুটিমুক্ত প্রসেসিং ও দীর্ঘস্থায়িত্বের প্রতি অবিচল অঙ্গীকার।',
  },
  {
    icon: Users,
    titleEn: 'Teamwork & People',
    titleBn: 'টিমওয়ার্ক ও মূল্যবান মানবসম্পদ',
    descEn: 'People are our greatest assets; we foster growth.',
    descBn: 'মানুষই আমাদের সবচেয়ে বড় সম্পদ; আমরা বিকাশে উৎসাহিত করি।',
  },
  {
    icon: Sparkles,
    titleEn: 'Innovation & Diversity',
    titleBn: 'উদ্ভাবন ও বৈচিত্র্য',
    descEn: 'Adopting state-of-the-art global machinery.',
    descBn: 'অত্যাধুনিক বৈশ্বিক যন্ত্রপাতির সংযোজন।',
  },
  {
    icon: Target,
    titleEn: 'Efficiency & Cost Control',
    titleBn: 'দক্ষতা বৃদ্ধি ও ব্যয় নিয়ন্ত্রণ',
    descEn: 'Optimizing supply chains and lean production.',
    descBn: 'সাপ্লাই চেইন অপটিমাইজেশন ও অপচয়হীন উৎপাদন।',
  },
  {
    icon: Leaf,
    titleEn: 'Responsible Corporate Citizen',
    titleBn: 'দায়িত্বশীল কর্পোরেট নাগরিক',
    descEn: 'Strict adherence to SA-8000 and worker welfare.',
    descBn: 'SA-8000 কঠোর অনুসরণ ও শ্রমিকদের কল্যাণ।',
  },
];

const quickStats = [
  { to: 153372, suffix: '', labelEn: 'Sq.Ft. Factory Floor', labelBn: 'বর্গফুট কারখানা', color: 'text-sky-600' },
  { to: 60, suffix: '%', labelEn: 'Utilization Rate', labelBn: 'ব্যবহার হার', color: 'text-amber-600' },
  { to: 4500000, suffix: '', labelEn: 'Yards / Month Capacity', labelBn: 'গজ মাসিক ক্ষমতা', color: 'text-emerald-600' },
];

type Tab = 'about' | 'vision' | 'mission';

export default function AboutPage() {
  const { lang } = useApp();
  const bn = lang === 'bn';
  const [aboutTab, setAboutTab] = useState<Tab>('about');

  const tabs: { key: Tab; labelEn: string; labelBn: string }[] = [
    { key: 'about', labelEn: 'About Company', labelBn: 'কোম্পানি সম্পর্কে' },
    { key: 'vision', labelEn: 'Our Vision', labelBn: 'আমাদের ভিশন' },
    { key: 'mission', labelEn: 'Our Mission', labelBn: 'আমাদের মিশন' },
  ];

  return (
    <>
      <PageHeader
        eyebrowEn="Corporate Identity & Legacy"
        eyebrowBn="আমাদের ইতিহাস ও পরিচিতি"
        titleEn="Three Decades of Continuous Excellence & Trust"
        titleBn="তিন দশকের ধারাবাহিক উৎকর্ষ ও বিশ্বাস"
        subEn="Leading the textile processing landscape with high compliance, modern machinery, and sustainable values since 1993."
        subBn="১৯৯৩ সাল থেকে আন্তর্জাতিক মানে টেক্সটাইল প্রসেসিংয়ে নেতৃত্ব দিয়ে আসছে আবেদ টেক্সটাইল।"
        image={assets.aboutBg}
      />

      <section className="py-16 sm:py-20 bg-slate-50 textile-grid">
        <div className="container-x">
          {/* Tabs */}
          <div className="flex justify-center mb-10" data-reveal>
            <div className="glass-panel p-1.5 rounded-2xl inline-flex flex-wrap justify-center gap-1 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setAboutTab(tab.key)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    aboutTab === tab.key
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                      : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  {bn ? tab.labelBn : tab.labelEn}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
            {/* Content card */}
            <div className="lg:col-span-7" data-reveal>
              <div className="card p-7 sm:p-9 space-y-5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-amber-400" />
                {aboutTab === 'about' && (
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                      {bn ? 'ব্যবসায়িক মডেল ও পটভূমি' : 'Business Model & Inception'}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">
                      {bn
                        ? 'আমাদের ব্যবসায়িক মডেল মূলত গুণগত মানের মার্চেন্ডাইজিং ও পণ্যের গুণগত মান, সময়মতো ডেলিভারি, উচ্চমানের কমপ্লায়েন্স এবং নিবেদিত গ্রাহকসেবার উপর কেন্দ্রীভূত।\n\nকোম্পানিটি প্রতিষ্ঠিত হয় এবং বাণিজ্যিক উৎপাদন শুরু হয় ১৯৯৩ সালে। বর্তমানে আমাদের মোট ৭২টি উৎপাদন মেশিনারি এবং ১০০০ জন কর্মীর একটি কর্মীবাহিনী রয়েছে। আমাদের মাসিক মোট সমন্বিত উৎপাদন ক্ষমতা ৪৫,০০,০০০ গজ।'
                        : 'Our business model focuses on Quality Merchandising and Product Quality, Timed Delivery, a High Standard of Compliance and Dedicated Customer Service.\n\nThe company was established and Commercial Production commenced in 1993. Currently we hold a total of 72 production machineries and a workforce of 1000 employees. Our Total Consolidated Production Capacity per month is 4,500,000 yards.'}
                    </p>
                  </div>
                )}
                {aboutTab === 'vision' && (
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                      {bn ? 'আমাদের দীর্ঘমেয়াদী ভিশন' : 'Our Long-Term Vision'}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                      {bn
                        ? 'সর্বোচ্চ সমন্বিত সুবিধা অর্জন করা এবং উচ্চ উৎপাদনশীলতা, উন্নত প্রযুক্তিগত উদ্ভাবন এবং সম্পূর্ণ গ্রাহক সন্তুষ্টির অনুসরণের মাধ্যমে একটি বাজার নেতা হয়ে ওঠা।'
                        : 'To become a market leader through the pursuit of high productivity, advanced technological innovation & absolute customer satisfaction.'}
                    </p>
                  </div>
                )}
                {aboutTab === 'mission' && (
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                      {bn ? 'আমাদের মিশন ও পরিচালনা লক্ষ্য' : 'Our Mission & Strategic Purpose'}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">
                      {bn
                        ? 'উচ্চমানের শাড়ি, থ্রি-পিস, পপলিন, ভয়েল, নিট ফেব্রিক্স, লেডিস প্রিন্ট উৎপাদনের জন্য গ্রাহকদের চাহিদার উপর ক্রমাগত মনোযোগ দেওয়া।'
                        : 'To continuously focus on customer needs to manufacture quality fabrics of high standard.'}
                    </p>
                  </div>
                )}

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-100">
                  {quickStats.map((st) => (
                    <div key={st.labelEn} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div className={`${st.color} font-black text-base sm:text-xl tracking-tight`}>
                        <CountUp to={st.to} />
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-1 leading-tight">
                        {bn ? st.labelBn : st.labelEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative" data-reveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl zoom-img border-4 border-white relative">
                <img src={assets.aboutBg} alt="Abed Textile factory site" className="w-full h-80 sm:h-[460px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass-dark rounded-xl px-4 py-3 flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-white text-xs font-semibold">
                      {bn ? '১০০% রপ্তানিমুখী — Oeko-Tex সার্টিফাইড সুবিধা' : '100% export oriented — Oeko-Tex certified facility'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core values */}
          <SectionHeading
            eyebrowEn="What Drives Us"
            eyebrowBn="আমাদের চালিকাশক্তি"
            titleEn="Our Core Values"
            titleBn="আমাদের মৌলিক মূল্যবোধ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal>
            {values.map((val, i) => (
              <div key={val.titleEn} className="card card-hover p-6 group relative overflow-hidden">
                <span className="absolute -top-3 -right-1 text-[60px] font-black text-slate-900/[0.04] select-none leading-none">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/25 transition-all">
                  <val.icon className="w-[22px] h-[22px]" />
                </div>
                <h4 className="text-[15px] font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                  {bn ? val.titleBn : val.titleEn}
                </h4>
                <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">{bn ? val.descBn : val.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
