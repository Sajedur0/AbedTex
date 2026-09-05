import { useState } from 'react';
import { useApp } from '../App';

const complianceData = [
  {
    titleEn: 'Labor Standards & Human Rights', titleBn: 'শ্রম মানদণ্ড ও মানবাধিকার',
    itemsEn: ['Strict No Child Labor policy', 'No Forced Labor', 'Guaranteed Minimum Wages', 'Standard 8-hour workday', '100% Voluntary Overtime', 'Paid Weekly Holidays', 'Festival Holidays & Bonuses', 'Comprehensive Maternity Protection'],
    itemsBn: ['কঠোর শিশুশ্রম বিরোধী নীতি', 'কোনো বাধ্যতামূলক শ্রম নয়', 'ন্যূনতম মজুরি নিশ্চিত', '৮ ঘণ্টার কর্মঘণ্টা', '১০০% স্বেচ্ছাসেবী ওভারটাইম', 'পেইড সাপ্তাহিক ছুটি', 'উৎসব ছুটি ও বোনাস', 'পেইড মাতৃত্বকালীন ছুটি']
  },
  {
    titleEn: 'Health, Safety & Environment', titleBn: 'স্বাস্থ্য, নিরাপত্তা ও পরিবেশ',
    itemsEn: ['100% full-time doctor & clinic', 'First Aid Boxes on all floors', 'Pure Drinking Water dispensers', 'Hygienic sanitation facilities', 'Workers Welfare Committee', 'Subsidized Canteen Service', 'Day Care Centre', 'Free recreational activities'],
    itemsBn: ['১০০% ফুল-টাইম ডাক্তার ও ক্লিনিক', 'সকল ফ্লোরে ফার্স্ট এইড বক্স', 'বিশুদ্ধ পানীয় পানি', 'স্বাস্থ্যকর স্যানিটারি সুবিধা', 'শ্রমিক কল্যাণ কমিটি', 'ভর্তুকিযুক্ত ক্যান্টিন', 'ডে কেয়ার সেন্টার', 'বিনামূল্যে বিনোদন']
  },
  {
    titleEn: 'Fire Prevention & Safety', titleBn: 'অগ্নি প্রতিরোধ ও নিরাপত্তা',
    itemsEn: ['Fire extinguishers on each floor', '12 fire drills per year', 'Emergency exit doors', 'PPE & safety boots', 'Industrial ventilation', 'LED illumination', '100% No-Smoking Zone', 'Metal detector security', 'Group Insurance coverage'],
    itemsBn: ['প্রতিটি ফ্লোরে ফায়ার এক্সটিংগুইশার', 'বছরে ১২ বার ফায়ার ড্রিল', 'জরুরি নির্গমন পথ', 'পিপিই ও সেফটি বুট', 'পর্যাপ্ত বায়ু চলাচল', 'বৈজ্ঞানিক আলোর ব্যবস্থা', 'সম্পূর্ণ ধূমপানমুক্ত', 'সুই ডিটেক্টর সুরক্ষা', 'গ্রুপ জীবন বীমা']
  }
];

export default function CompliancePage() {
  const { lang } = useApp();
  const [idx, setIdx] = useState(0);

  return (
    <section className="pt-28 pb-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'কমপ্লায়েন্স ও শ্রমিক কল্যাণ' : 'Compliance & Social Responsibility'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'আন্তর্জাতিক মানদণ্ড ও SA-8000 কমপ্লায়েন্স' : 'Global Standards & SA-8000 Compliance'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {[{ code: 'OEKO-TEX 100', title: 'Confidence in Textiles' }, { code: 'ISO Certified', title: 'Quality Management' }, { code: 'ATPML Certified', title: 'Abed Textile Processing' }, { code: 'BTMEA Registered', title: 'Bangladesh Textile Exporters' }, { code: 'NCCI Member', title: 'Narsingdi Chamber of Commerce' }].map((cert, i) => (
            <div key={i} className="glass-card p-4 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center">
              <span className="text-xl mb-1">🏅</span>
              <div className="font-extrabold text-sm text-slate-900">{cert.code}</div>
              <div className="text-[11px] text-slate-600 mt-0.5">{cert.title}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {complianceData.map((c, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${idx === i ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/25 scale-105' : 'bg-white/80 text-slate-700 border-slate-200'}`}>
              {lang === 'bn' ? c.titleBn : c.titleEn}
            </button>
          ))}
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{lang === 'bn' ? complianceData[idx].titleBn : complianceData[idx].titleEn}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{lang === 'bn' ? '১০০% কার্যকর ও নিয়মিত মনিটরিংকৃত' : '100% Implemented & audited on site'}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold">
              {(lang === 'bn' ? complianceData[idx].itemsBn : complianceData[idx].itemsEn).length} {lang === 'bn' ? 'টি ধারা' : 'Points'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(lang === 'bn' ? complianceData[idx].itemsBn : complianceData[idx].itemsEn).map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                <span className="text-xs sm:text-sm text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-emerald-50 via-slate-50 to-sky-50 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💧</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{lang === 'bn' ? 'পরিবেশ সুরক্ষা ও ইটিপি' : 'Environmental Protection & ETP'}</h4>
                <p className="text-xs text-slate-700">{lang === 'bn' ? 'দৈনিক ২৪০০ ঘনমিটার বায়োকেমিক্যাল ইটিপি' : '2,400 m³/day Biochemical ETP'}</p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-300">16,000 Sq.Ft.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
