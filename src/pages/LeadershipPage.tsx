import { useApp } from '../App';
import { assets } from '../assets';

const leaders = [
  { nameEn: 'Alhaj Md. Abed Ali', nameBn: 'আলহাজ্ব মোঃ আবেদ আলী', roleEn: 'Founder & Visionary Pioneer', roleBn: 'প্রতিষ্ঠাতা ও স্বপ্নদ্রষ্টা', img: assets.leaders.abedAli, mobile: '+880 1713-562042', email: 'info@nodibanglagroup.com', bioEn: 'The visionary foundation of Abed Textile Processing Mills Ltd.', bioBn: 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেডের প্রতিষ্ঠাতা।' },
  { nameEn: 'Monjur Elahi', nameBn: 'মনজুর এলাহী', roleEn: 'Managing Director', roleBn: 'ব্যবস্থাপনা পরিচালক', img: assets.leaders.manjurElahi, mobile: '01713-562042', email: 'info@nodibanglagroup.com', bioEn: 'Dynamic leader steering towards international excellence.', bioBn: 'আন্তর্জাতিক উৎকর্ষের দিকে নিয়ে যাওয়ার দূরদর্শী কর্ণধার।' },
  { nameEn: 'Abdullah Al Mamun', nameBn: 'আব্দুল্লাহ আল মামুন', roleEn: 'Director', roleBn: 'পরিচালক', img: assets.leaders.abdulMamun, mobile: '01713-519783', email: 'abedmamun@hotmail.com', bioEn: 'Overseeing global operations and supply chain logistics.', bioBn: 'আন্তর্জাতিক কার্যক্রম ও সাপ্লাই চেইন পরিচালনায় অভিজ্ঞ।' },
  { nameEn: 'Mahbubur Rahman (Monir)', nameBn: 'মাহবুবুর রহমান (মনির)', roleEn: 'Director', roleBn: 'পরিচালক', img: assets.leaders.mahbuburRahman, mobile: '01711-707403', email: 'abedmonir@hotmail.com', bioEn: 'Leading technical innovations and machinery modernization.', bioBn: 'প্রযুক্তিগত উদ্ভাবন ও যন্ত্রপাতি উন্নয়নে অগ্রণী।' }
];

export default function LeadershipPage() {
  const { lang } = useApp();
  return (
    <section className="pt-28 pb-20 relative bg-white section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'পরিচালনা পর্ষদ ও নেতৃত্ব' : 'Board of Directors & Visionaries'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? '২৬ বছরেরও বেশি অভিজ্ঞতা ও দক্ষ দিকনির্দেশনা' : 'Guided by 26+ Years of Leadership Excellence'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="glass-card rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500/50 flex flex-col justify-between group shadow-xl tilt-card">
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-white">
                  <img src={leader.img} alt={leader.nameEn} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                  {index === 0 && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-extrabold uppercase shadow-md">
                      {lang === 'bn' ? 'প্রতিষ্ঠাতা' : 'Founder'}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{lang === 'bn' ? leader.nameBn : leader.nameEn}</h3>
                  <div className="text-xs font-semibold text-amber-600 mt-0.5">{lang === 'bn' ? leader.roleBn : leader.roleEn}</div>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">{lang === 'bn' ? leader.bioBn : leader.bioEn}</p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-slate-200/80 mt-2 space-y-1.5 text-xs text-slate-700">
                <a href={`tel:${leader.mobile}`} className="flex items-center gap-2 py-1 text-slate-700 hover:text-sky-600 transition-colors"><span>📱</span><span className="font-medium">{leader.mobile}</span></a>
                <a href={`mailto:${leader.email}`} className="flex items-center gap-2 py-1 text-slate-700 hover:text-amber-600 transition-colors truncate"><span>✉️</span><span className="truncate">{leader.email}</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
