import { useState } from 'react';
import { useApp } from '../App';
import { assets } from '../assets';

export default function AboutPage() {
  const { lang } = useApp();
  const [aboutTab, setAboutTab] = useState('about');

  return (
    <section className="pt-28 pb-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'আমাদের ইতিহাস ও পরিচিতি' : 'Corporate Identity & Legacy'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'তিন দশকের ধারাবাহিক উৎকর্ষ ও বিশ্বাস' : 'Three Decades of Continuous Excellence & Trust'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {lang === 'bn' ? '১৯৯৩ সাল থেকে আন্তর্জাতিক মানে টেক্সটাইল প্রসেসিংয়ে নেতৃত্ব দিয়ে আসছে আবেদ টেক্সটাইল।' : 'Leading the textile processing landscape with high compliance, modern machinery, and sustainable values.'}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="glass-panel p-1.5 rounded-xl inline-flex space-x-1 border border-slate-200">
            {(['about', 'vision', 'mission'] as const).map((tab) => (
              <button key={tab} onClick={() => setAboutTab(tab)} className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${aboutTab === tab ? 'bg-sky-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>
                {tab === 'about' ? (lang === 'bn' ? 'কোম্পানি সম্পর্কে' : 'About Company') : tab === 'vision' ? (lang === 'bn' ? 'আমাদের ভিশন (লক্ষ্য)' : 'Our Vision') : (lang === 'bn' ? 'আমাদের মিশন (উদ্দেশ্য)' : 'Our Mission')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              {aboutTab === 'about' && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'bn' ? 'ব্যবসায়িক মডেল ও পটভূমি' : 'Business Model & Inception'}</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {lang === 'bn'
                      ? "আমাদের ব্যবসায়িক মডেল মূলত গুণগত মানের মার্চেন্ডাইজিং ও পণ্যের গুণগত মান, সময়মতো ডেলিভারি, উচ্চমানের কমপ্লায়েন্স এবং নিবেদিত গ্রাহকসেবার উপর কেন্দ্রীভূত।\n\nকোম্পানিটি প্রতিষ্ঠিত হয় এবং বাণিজ্যিক উৎপাদন শুরু হয় ১৯৯৩ সালে। বর্তমানে আমাদের মোট ৭২টি উৎপাদন মেশিনারি এবং ১০০০ জন কর্মীর একটি কর্মীবাহিনী রয়েছে। আমাদের মাসিক মোট সমন্বিত উৎপাদন ক্ষমতা ৪৫,০০,০০০ গজ।"
                      : "Our business model focuses on Quality Merchandising and Product Quality, Timed Delivery, a High Standard of Compliance and Dedicated Customer Service.\n\nThe company was established and Commercial Production commenced in 1993. Currently we hold a total of 72 production machineries and a workforce of 1000 employees. Our Total Consolidated Production Capacity per month is 4,500,000 yards."}
                  </p>
                </div>
              )}
              {aboutTab === 'vision' && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'bn' ? 'আমাদের দীর্ঘমেয়াদী ভিশন' : 'Our Long-Term Vision'}</h3>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {lang === 'bn' ? "সর্বোচ্চ সমন্বিত সুবিধা অর্জন করা এবং উচ্চ উৎপাদনশীলতা, উন্নত প্রযুক্তিগত উদ্ভাবন এবং সম্পূর্ণ গ্রাহক সন্তুষ্টির অনুসরণের মাধ্যমে একটি বাজার নেতা হয়ে ওঠা।" : "To become a market leader through the pursuit of high productivity, advanced technological innovation & absolute customer satisfaction."}
                  </p>
                </div>
              )}
              {aboutTab === 'mission' && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'bn' ? 'আমাদের মিশন ও পরিচালনা লক্ষ্য' : 'Our Mission & Strategic Purpose'}</h3>
                  <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line">
                    {lang === 'bn' ? "উচ্চমানের শাড়ি, থ্রি-পিস, পপলিন, ভয়েল, নিট ফেব্রিক্স, লেডিস প্রিন্ট উৎপাদনের জন্য গ্রাহকদের চাহিদার উপর ক্রমাগত মনোযোগ দেওয়া।" : "To continuously focus on customer needs to manufacture quality fabrics of high standard."}
                  </p>
                </div>
              )}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-center">
                  <div className="text-sky-600 font-bold text-base sm:text-lg">1,53,372</div>
                  <div className="text-[11px] text-slate-600">{lang === 'bn' ? 'বর্গফুট কারখানা' : 'Sq.Ft. Floor'}</div>
                </div>
                <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-center">
                  <div className="text-amber-600 font-bold text-base sm:text-lg">60%</div>
                  <div className="text-[11px] text-slate-600">{lang === 'bn' ? 'ব্যবহার হার' : 'Utilization'}</div>
                </div>
                <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-center">
                  <div className="text-emerald-600 font-bold text-base sm:text-lg">45,00,000</div>
                  <div className="text-[11px] text-slate-600">{lang === 'bn' ? 'গজ মাসিক ক্ষমতা' : 'Yards/Month'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl relative">
              <img src={assets.aboutBg} alt="Factory Site" className="w-full h-80 sm:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8" data-reveal>
          <h3 className="text-2xl font-bold text-slate-900">{lang === 'bn' ? 'আমাদের মৌলিক মূল্যবোধ' : 'Our Core Values'}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { titleEn: 'Customer First', titleBn: 'গ্রাহকই সর্বাগ্রে', descEn: 'We place customer satisfaction at the core of all operations.', descBn: 'আমরা আমাদের সকল কার্যক্রমের কেন্দ্রে গ্রাহক সন্তুষ্টি অগ্রাধিকার দিই।' },
            { titleEn: 'Pursuit of Quality', titleBn: 'গুণগত মানের অনুসরণ', descEn: 'Relentless commitment to flawless processing and durability.', descBn: 'ত্রুটিমুক্ত প্রসেসিং ও দীর্ঘস্থায়িত্বের প্রতি অবিচল অঙ্গীকার।' },
            { titleEn: 'Teamwork & People', titleBn: 'টিমওয়ার্ক ও মূল্যবান মানবসম্পদ', descEn: 'People are our greatest assets; we foster growth.', descBn: 'মানুষই আমাদের সবচেয়ে বড় সম্পদ।' },
            { titleEn: 'Innovation & Diversity', titleBn: 'উদ্ভাবন ও বৈচিত্র্য', descEn: 'Adopting state-of-the-art global machinery.', descBn: 'অত্যাধুনিক বৈশ্বিক যন্ত্রপাতির সংযোজন।' },
            { titleEn: 'Efficiency & Cost Control', titleBn: 'দক্ষতা বৃদ্ধি ও ব্যয় নিয়ন্ত্রণ', descEn: 'Optimizing supply chains and lean production.', descBn: 'সাপ্লাই চেইন অপটিমাইজেশন ও অপচয়হীন উৎপাদন।' },
            { titleEn: 'Responsible Corporate Citizen', titleBn: 'দায়িত্বশীল কর্পোরেট নাগরিক', descEn: 'Strict adherence to SA-8000 and worker welfare.', descBn: 'SA-8000 কঠোর অনুসরণ ও শ্রমিকদের কল্যাণ।' }
          ].map((val, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200 group">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">0{i+1}</div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{lang === 'bn' ? val.titleBn : val.titleEn}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{lang === 'bn' ? val.descBn : val.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
