import { useState } from 'react';
import { useApp } from '../App';
import { assets } from '../assets';
import { Sparkles, Target, Compass, Users, Award, Leaf, ShieldCheck, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
  const { lang } = useApp();
  const [aboutTab, setAboutTab] = useState('about');

  const values = [
    { icon: Heart, titleEn: 'Customer First', titleBn: 'গ্রাহকই সর্বাগ্রে', descEn: 'We place customer satisfaction at the core of all operations.', descBn: 'আমরা আমাদের সকল কার্যক্রমের কেন্দ্রে গ্রাহক সন্তুষ্টি অগ্রাধিকার দিই।' },
    { icon: Award, titleEn: 'Pursuit of Quality', titleBn: 'গুণগত মানের অনুসরণ', descEn: 'Relentless commitment to flawless processing and durability.', descBn: 'ত্রুটিমুক্ত প্রসেসিং ও দীর্ঘস্থায়িত্বের প্রতি অবিচল অঙ্গীকার।' },
    { icon: Users, titleEn: 'Teamwork & People', titleBn: 'টিমওয়ার্ক ও মূল্যবান মানবসম্পদ', descEn: 'People are our greatest assets; we foster growth.', descBn: 'মানুষই আমাদের সবচেয়ে বড় সম্পদ।' },
    { icon: Sparkles, titleEn: 'Innovation & Diversity', titleBn: 'উদ্ভাবন ও বৈচিত্র্য', descEn: 'Adopting state-of-the-art global machinery.', descBn: 'অত্যাধুনিক বৈশ্বিক যন্ত্রপাতির সংযোজন।' },
    { icon: Zap, titleEn: 'Efficiency & Cost Control', titleBn: 'দক্ষতা বৃদ্ধি ও ব্যয় নিয়ন্ত্রণ', descEn: 'Optimizing supply chains and lean production.', descBn: 'সাপ্লাই চেইন অপটিমাইজেশন ও অপচয়হীন উৎপাদন।' },
    { icon: ShieldCheck, titleEn: 'Responsible Corporate Citizen', titleBn: 'দায়িত্বশীল কর্পোরেট নাগরিক', descEn: 'Strict adherence to SA-8000 and worker welfare.', descBn: 'SA-8000 কঠোর অনুসরণ ও শ্রমিকদের কল্যাণ।' }
  ];

  return (
    <div className="relative">
      {/* Header */}
      <section className="pt-8 lg:pt-10 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
              {lang === 'bn' ? 'আমাদের ইতিহাস ও পরিচিতি' : 'Corporate Identity & Legacy'}
            </div>
            <h1 className="mt-4 text-[32px] sm:text-[42px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44] text-balance">
              {lang === 'bn' ? 'তিন দশকের ধারাবাহিক উৎকর্ষ ও বিশ্বাস' : 'Three decades of continuous excellence & trust'}
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-500 max-w-2xl">
              {lang === 'bn' ? '১৯৯৩ সাল থেকে আন্তর্জাতিক মানে টেক্সটাইল প্রসেসিংয়ে নেতৃত্ব দিয়ে আসছে আবেদ টেক্সটাইল।' : 'Leading the textile processing landscape with high compliance, modern machinery, and sustainable values since 1993.'}
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10">
            {(['about', 'vision', 'mission'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setAboutTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${aboutTab === tab ? 'bg-[#0f2a44] text-white shadow-sm' : 'text-stone-600 hover:text-[#0f2a44]'}`}
              >
                {tab === 'about' ? (lang === 'bn' ? 'কোম্পানি সম্পর্কে' : 'About Company') : tab === 'vision' ? (lang === 'bn' ? 'ভিশন' : 'Our Vision') : (lang === 'bn' ? 'মিশন' : 'Our Mission')}
              </button>
            ))}
          </div>

          {/* Main bento */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 card-modern rounded-[24px] p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#fdfbf7] border border-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                  {aboutTab === 'about' ? <Compass size={16} /> : aboutTab === 'vision' ? <Target size={16} /> : <Sparkles size={16} />}
                </div>
                <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a]">
                  {aboutTab === 'about' ? (lang === 'bn' ? 'Business Model & Inception' : 'Business Model & Inception') : aboutTab === 'vision' ? (lang === 'bn' ? 'Our Long-Term Vision' : 'Our Long-Term Vision') : (lang === 'bn' ? 'Our Mission & Purpose' : 'Our Mission & Purpose')}
                </div>
              </div>

              {aboutTab === 'about' && (
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight text-[#0f2a44]">{lang === 'bn' ? 'ব্যবসায়িক মডেল ও পটভূমি' : 'Business Model & Inception'}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600 whitespace-pre-line">
                    {lang === 'bn'
                      ? "আমাদের ব্যবসায়িক মডেল মূলত গুণগত মানের মার্চেন্ডাইজিং ও পণ্যের গুণগত মান, সময়মতো ডেলিভারি, উচ্চমানের কমপ্লায়েন্স এবং নিবেদিত গ্রাহকসেবার উপর কেন্দ্রীভূত।\n\nকোম্পানিটি প্রতিষ্ঠিত হয় এবং বাণিজ্যিক উৎপাদন শুরু হয় ১৯৯৩ সালে। বর্তমানে আমাদের মোট ৪২টি উৎপাদন মেশিনারি এবং ১০০০ জন কর্মীর একটি কর্মীবাহিনী রয়েছে। আমাদের মাসিক মোট সমন্বিত উৎপাদন ক্ষমতা ৪৫,০০,০০০ গজ।"
                      : "Our business model focuses on Quality Merchandising and Product Quality, Timed Delivery, a High Standard of Compliance and Dedicated Customer Service.\n\nThe company was established and Commercial Production commenced in 1993. Currently we hold a total of 42 production machineries and a workforce of 1000 employees. Our Total Consolidated Production Capacity per month is 4,500,000 yards."}
                  </p>
                </div>
              )}
              {aboutTab === 'vision' && (
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight text-[#0f2a44]">{lang === 'bn' ? 'আমাদের দীর্ঘমেয়াদী ভিশন' : 'Our Long-Term Vision'}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                    {lang === 'bn' ? "সর্বোচ্চ সমন্বিত সুবিধা অর্জন করা এবং উচ্চ উৎপাদনশীলতা, উন্নত প্রযুক্তিগত উদ্ভাবন এবং সম্পূর্ণ গ্রাহক সন্তুষ্টির অনুসরণের মাধ্যমে একটি বাজার নেতা হয়ে ওঠা।" : "To become a market leader through the pursuit of high productivity, advanced technological innovation & absolute customer satisfaction."}
                  </p>
                </div>
              )}
              {aboutTab === 'mission' && (
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight text-[#0f2a44]">{lang === 'bn' ? 'আমাদের মিশন ও পরিচালনা লক্ষ্য' : 'Our Mission & Strategic Purpose'}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600 whitespace-pre-line">
                    {lang === 'bn' ? "উচ্চমানের শাড়ি, থ্রি-পিস, পপলিন, ভয়েল, নিট ফেব্রিক্স, লেডিস প্রিন্ট উৎপাদনের জন্য গ্রাহকদের চাহিদার উপর ক্রমাগত মনোযোগ দেওয়া।" : "To continuously focus on customer needs to manufacture quality fabrics of high standard."}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-stone-100">
                <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-4 text-center">
                  <div className="text-xl font-[800] tracking-tight text-[#0f2a44]">1,53,372</div>
                  <div className="text-[11px] font-medium text-stone-500 mt-1">{lang === 'bn' ? 'বর্গফুট কারখানা' : 'Sq.Ft. Floor'}</div>
                </div>
                <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-4 text-center">
                  <div className="text-xl font-[800] tracking-tight text-[#b88a5a]">60%</div>
                  <div className="text-[11px] font-medium text-stone-500 mt-1">{lang === 'bn' ? 'ব্যবহার হার' : 'Utilization'}</div>
                </div>
                <div className="rounded-2xl bg-[#0f2a44] p-4 text-center text-white">
                  <div className="text-xl font-[800] tracking-tight">45,00,000</div>
                  <div className="text-[11px] font-medium text-white/70 mt-1">{lang === 'bn' ? 'গজ / মাস' : 'Yards / Month'}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden bg-stone-200 h-[340px] lg:h-full min-h-[340px] border border-[#0f2a44]/10">
                <img src={assets.aboutBg} alt="Factory Site" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-[#0f2a44] shadow-lg">
                    <Leaf size={14} className="text-emerald-600" /> Ghoradia • Narsingdi
                  </div>
                  <div className="mt-3 text-white">
                    <div className="text-sm font-bold">153,372 sq.ft. integrated floor</div>
                    <div className="text-xs text-white/70">Dyeing • Printing • Finishing • ETP • Utilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">{lang === 'bn' ? 'আমাদের মৌলিক মূল্যবোধ' : 'Our core values'}</h3>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#0f2a44]/10 ml-6 mb-3" />
            <span className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-stone-400">6 pillars</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={i} className="card-modern rounded-[20px] p-6 group">
                <div className="w-9 h-9 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center text-[#0f2a44] group-hover:bg-[#0f2a44] group-hover:text-white group-hover:border-[#0f2a44] transition-colors">
                  <v.icon size={16} />
                </div>
                <div className="mt-4 text-[12px] font-bold tracking-[0.08em] uppercase text-[#b88a5a]">0{i + 1}</div>
                <h4 className="text-[15px] font-bold text-[#0f2a44] mt-1">{lang === 'bn' ? v.titleBn : v.titleEn}</h4>
                <p className="text-[13px] leading-relaxed text-stone-500 mt-2">{lang === 'bn' ? v.descBn : v.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
