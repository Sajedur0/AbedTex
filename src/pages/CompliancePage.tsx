import { useState } from 'react';
import { useApp } from '../App';
import { ShieldCheck, Heart, Flame, Droplets, Award, Check } from 'lucide-react';

const complianceData = [
  {
    icon: Heart,
    titleEn: 'Labor Standards & Human Rights', titleBn: 'শ্রম মানদণ্ড ও মানবাধিকার',
    itemsEn: ['Strict No Child Labor policy', 'No Forced Labor', 'Guaranteed Minimum Wages', 'Standard 8-hour workday', '100% Voluntary Overtime', 'Paid Weekly Holidays', 'Festival Holidays & Bonuses', 'Comprehensive Maternity Protection'],
    itemsBn: ['কঠোর শিশুশ্রম বিরোধী নীতি', 'কোনো বাধ্যতামূলক শ্রম নয়', 'ন্যূনতম মজুরি নিশ্চিত', '৮ ঘণ্টার কর্মঘণ্টা', '১০০% স্বেচ্ছাসেবী ওভারটাইম', 'পেইড সাপ্তাহিক ছুটি', 'উৎসব ছুটি ও বোনাস', 'পেইড মাতৃত্বকালীন ছুটি']
  },
  {
    icon: ShieldCheck,
    titleEn: 'Health, Safety & Environment', titleBn: 'স্বাস্থ্য, নিরাপত্তা ও পরিবেশ',
    itemsEn: ['100% full-time doctor & clinic', 'First Aid Boxes on all floors', 'Pure Drinking Water dispensers', 'Hygienic sanitation facilities', 'Workers Welfare Committee', 'Subsidized Canteen Service', 'Day Care Centre', 'Free recreational activities'],
    itemsBn: ['১০০% ফুল-টাইম ডাক্তার ও ক্লিনিক', 'সকল ফ্লোরে ফার্স্ট এইড বক্স', 'বিশুদ্ধ পানীয় পানি', 'স্বাস্থ্যকর স্যানিটারি সুবিধা', 'শ্রমিক কল্যাণ কমিটি', 'ভর্তুকিযুক্ত ক্যান্টিন', 'ডে কেয়ার সেন্টার', 'বিনামূল্যে বিনোদন']
  },
  {
    icon: Flame,
    titleEn: 'Fire Prevention & Safety', titleBn: 'অগ্নি প্রতিরোধ ও নিরাপত্তা',
    itemsEn: ['Fire extinguishers on each floor', '12 fire drills per year', 'Emergency exit doors', 'PPE & safety boots', 'Industrial ventilation', 'LED illumination', '100% No-Smoking Zone', 'Metal detector security', 'Group Insurance coverage'],
    itemsBn: ['প্রতিটি ফ্লোরে ফায়ার এক্সটিংগুইশার', 'বছরে ১২ বার ফায়ার ড্রিল', 'জরুরি নির্গমন পথ', 'পিপিই ও সেফটি বুট', 'পর্যাপ্ত বায়ু চলাচল', 'বৈজ্ঞানিক আলোর ব্যবস্থা', 'সম্পূর্ণ ধূমপানমুক্ত', 'সুই ডিটেক্টর সুরক্ষা', 'গ্রুপ জীবন বীমা']
  }
];

export default function CompliancePage() {
  const { lang } = useApp();
  const [idx, setIdx] = useState(0);
  const ActiveIcon = complianceData[idx].icon;

  return (
    <div className="pt-8 lg:pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {lang === 'bn' ? 'কমপ্লায়েন্স ও শ্রমিক কল্যাণ' : 'Compliance & Social Responsibility'}
          </div>
          <h1 className="mt-4 text-[30px] sm:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
            {lang === 'bn' ? 'আন্তর্জাতিক মানদণ্ড ও SA-8000 কমপ্লায়েন্স' : 'Global standards & SA-8000 compliance'}
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { code: 'OEKO-TEX 100', title: 'Confidence in Textiles' },
            { code: 'ISO Certified', title: 'Quality Management' },
            { code: 'ATPML Certified', title: 'Abed Textile Processing' },
            { code: 'BTMEA', title: 'Bangladesh Textile Exporters' },
            { code: 'NCCI Member', title: 'Narsingdi Chamber' }
          ].map((cert, i) => (
            <div key={i} className="card-modern rounded-[16px] p-4 text-center flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center text-[#0f2a44]">
                <Award size={14} />
              </div>
              <div className="font-[800] text-sm tracking-tight text-[#0f2a44]">{cert.code}</div>
              <div className="text-[11px] leading-tight text-stone-500">{cert.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {complianceData.map((c, i) => {
            const Icon = c.icon;
            const active = idx === i;
            return (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${active ? 'bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'}`}
              >
                <Icon size={16} className={active ? 'text-white' : 'text-stone-400'} />
                {lang === 'bn' ? c.titleBn : c.titleEn}
              </button>
            );
          })}
        </div>

        <div className="mt-6 card-modern rounded-[24px] overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fdfbf7]/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <ActiveIcon size={18} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold tracking-tight text-[#0f2a44]">{lang === 'bn' ? complianceData[idx].titleBn : complianceData[idx].titleEn}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{lang === 'bn' ? '১০০% কার্যকর ও নিয়মিত মনিটরিংকৃত' : '100% Implemented & audited on site'}</p>
              </div>
            </div>
            <span className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              {(lang === 'bn' ? complianceData[idx].itemsBn : complianceData[idx].itemsEn).length} {lang === 'bn' ? 'টি ধারা' : 'Points'}
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {(lang === 'bn' ? complianceData[idx].itemsBn : complianceData[idx].itemsEn).map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-white border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#0f2a44] font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[16px] bg-[#0f2a44] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                  <Droplets size={18} className="text-emerald-300" />
                </div>
                <div>
                  <div className="text-sm font-bold">{lang === 'bn' ? 'পরিবেশ সুরক্ষা ও ইটিপি' : 'Environmental Protection & ETP'}</div>
                  <div className="text-xs text-white/60">{lang === 'bn' ? 'দৈনিক ২৪০০ ঘনমিটার বায়োকেমিক্যাল ইটিপি' : '2,400 m³/day Biochemical ETP • 16,000 sq.ft. facility'}</div>
                </div>
              </div>
              <span className="px-4 py-2 rounded-full bg-white text-[#0f2a44] text-xs font-[800]">16,000 Sq.Ft.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
