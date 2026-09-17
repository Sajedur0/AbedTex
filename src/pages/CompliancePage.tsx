import { useState } from 'react';
import { Award, ShieldCheck, HeartPulse, Flame, Check, Droplets } from 'lucide-react';
import { useApp } from '../App';
import PageHeader from '../components/PageHeader';

const complianceData = [
  {
    icon: ShieldCheck,
    titleEn: 'Labor Standards & Human Rights', titleBn: 'শ্রম মানদণ্ড ও মানবাধিকার',
    itemsEn: ['Strict No Child Labor policy', 'No Forced Labor', 'Guaranteed Minimum Wages', 'Standard 8-hour workday', '100% Voluntary Overtime', 'Paid Weekly Holidays', 'Festival Holidays & Bonuses', 'Comprehensive Maternity Protection'],
    itemsBn: ['কঠোর শিশুশ্রম বিরোধী নীতি', 'কোনো বাধ্যতামূলক শ্রম নয়', 'ন্যূনতম মজুরি নিশ্চিত', '৮ ঘণ্টার কর্মঘণ্টা', '১০০% স্বেচ্ছাসেবী ওভারটাইম', 'পেইড সাপ্তাহিক ছুটি', 'উৎসব ছুটি ও বোনাস', 'পেইড মাতৃত্বকালীন ছুটি']
  },
  {
    icon: HeartPulse,
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

const certifications = [
  { code: 'OEKO-TEX 100', title: 'Confidence in Textiles' },
  { code: 'ISO Certified', title: 'Quality Management' },
  { code: 'ATPML Certified', title: 'Abed Textile Processing' },
  { code: 'BTMEA Registered', title: 'Bangladesh Textile Exporters' },
  { code: 'NCCI Member', title: 'Narsingdi Chamber of Commerce' },
];

export default function CompliancePage() {
  const { lang } = useApp();
  const bn = lang === 'bn';
  const [idx, setIdx] = useState(0);
  const ActiveIcon = complianceData[idx].icon;

  return (
    <>
      <PageHeader
        eyebrowEn="Compliance & Social Responsibility"
        eyebrowBn="কমপ্লায়েন্স ও শ্রমিক কল্যাণ"
        titleEn="Global Standards & SA-8000 Compliance"
        titleBn="আন্তর্জাতিক মানদণ্ড ও SA-8000 কমপ্লায়েন্স"
        subEn="Ethical manufacturing is not a checkbox for us — it is the foundation of every yard we process."
        subBn="নৈতিক উৎপাদন আমাদের জন্য কেবল নিয়ম নয় — এটিই প্রতিটি গজ প্রসেসিংয়ের ভিত্তি।"
      />

      <section className="py-16 sm:py-20 bg-slate-50 textile-grid">
        <div className="container-x">
          {/* Certification badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14" data-reveal>
            {certifications.map((cert) => (
              <div key={cert.code} className="card card-hover p-5 text-center flex flex-col items-center justify-center group">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Award className="w-5 h-5" />
                </span>
                <div className="font-extrabold text-sm text-slate-900">{cert.code}</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">{cert.title}</div>
              </div>
            ))}
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-reveal>
            {complianceData.map((c, i) => {
              const Icon = c.icon;
              const active = idx === i;
              return (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-600/25 scale-[1.04]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-amber-300' : 'text-emerald-500'}`} />
                  {bn ? c.titleBn : c.titleEn}
                </button>
              );
            })}
          </div>

          {/* Active policy panel */}
          <div key={idx} className="card p-6 sm:p-9 shadow-2xl hero-animate">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-7 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/25">
                  <ActiveIcon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">{bn ? complianceData[idx].titleBn : complianceData[idx].titleEn}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{bn ? '১০০% কার্যকর ও নিয়মিত মনিটরিংকৃত' : '100% Implemented & audited on site'}</p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 text-xs font-bold">
                {(bn ? complianceData[idx].itemsBn : complianceData[idx].itemsEn).length} {bn ? 'টি ধারা' : 'Points'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {(bn ? complianceData[idx].itemsBn : complianceData[idx].itemsEn).map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-emerald-300 hover:bg-emerald-50/40 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-slate-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* ETP banner */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-sky-50 to-sky-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0">
                  <Droplets className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {bn ? 'পরিবেশ সুরক্ষা ও ইটিপি' : 'Environmental Protection & ETP'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {bn ? 'দৈনিক ২,৪০০ ঘনমিটার বায়োকেমিক্যাল ইটিপি' : '2,400 m³/day Biochemical Effluent Treatment'}
                  </p>
                </div>
              </div>
              <span className="px-4 py-2 rounded-xl bg-white text-emerald-700 text-xs font-black border border-emerald-200 shadow-sm whitespace-nowrap">
                16,000 Sq.Ft.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
