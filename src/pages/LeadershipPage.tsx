import { useApp } from '../App';
import { assets } from '../assets';
import { Phone, Mail, Crown } from 'lucide-react';

const leaders = [
  { nameEn: 'Alhaj Md. Abed Ali', nameBn: 'আলহাজ্ব মোঃ আবেদ আলী', roleEn: 'Founder & Visionary Pioneer', roleBn: 'প্রতিষ্ঠাতা ও স্বপ্নদ্রষ্টা', img: assets.leaders.abedAli, mobile: '+880 1713-562042', email: 'info@nodibanglagroup.com', bioEn: 'The visionary foundation of Abed Textile Processing Mills Ltd.', bioBn: 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেডের প্রতিষ্ঠাতা।' },
  { nameEn: 'Monjur Elahi', nameBn: 'মনজুর এলাহী', roleEn: 'Managing Director', roleBn: 'ব্যবস্থাপনা পরিচালক', img: assets.leaders.manjurElahi, mobile: '01713-562042', email: 'info@nodibanglagroup.com', bioEn: 'Dynamic leader steering towards international excellence.', bioBn: 'আন্তর্জাতিক উৎকর্ষের দিকে নিয়ে যাওয়ার দূরদর্শী কর্ণধার।' },
  { nameEn: 'Abdullah Al Mamun', nameBn: 'আব্দুল্লাহ আল মামুন', roleEn: 'Director', roleBn: 'পরিচালক', img: assets.leaders.abdulMamun, mobile: '01713-519783', email: 'abedmamun@hotmail.com', bioEn: 'Overseeing global operations and supply chain logistics.', bioBn: 'আন্তর্জাতিক কার্যক্রম ও সাপ্লাই চেইন পরিচালনায় অভিজ্ঞ।' },
  { nameEn: 'Mahbubur Rahman (Monir)', nameBn: 'মাহবুবুর রহমান (মনির)', roleEn: 'Director', roleBn: 'পরিচালক', img: assets.leaders.mahbuburRahman, mobile: '01711-707403', email: 'abedmonir@hotmail.com', bioEn: 'Leading technical innovations and machinery modernization.', bioBn: 'প্রযুক্তিগত উদ্ভাবন ও যন্ত্রপাতি উন্নয়নে অগ্রণী।' }
];

export default function LeadershipPage() {
  const { lang } = useApp();
  return (
    <div className="pt-8 lg:pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
            {lang === 'bn' ? 'পরিচালনা পর্ষদ ও নেতৃত্ব' : 'Board of Directors & Visionaries'}
          </div>
          <h1 className="mt-4 text-[30px] sm:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
            {lang === 'bn' ? '২৬ বছরেরও বেশি অভিজ্ঞতা ও দক্ষ দিকনির্দেশনা' : 'Guided by 26+ years of leadership excellence'}
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.map((leader, index) => (
            <div key={index} className="card-modern rounded-[24px] overflow-hidden flex flex-col group">
              <div className="relative h-[280px] bg-stone-100 overflow-hidden">
                <img src={leader.img} alt={leader.nameEn} className="w-full h-full object-cover object-top img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/40 via-transparent to-transparent opacity-60" />
                {index === 0 && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4a574] text-white text-xs font-bold shadow-lg">
                    <Crown size={12} /> {lang === 'bn' ? 'প্রতিষ্ঠাতা' : 'Founder'}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex px-3 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-bold text-[#0f2a44] shadow-sm">
                    {lang === 'bn' ? leader.roleBn : leader.roleEn}
                  </div>
                </div>
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-[16px] font-bold tracking-tight text-[#0f2a44] leading-tight">{lang === 'bn' ? leader.nameBn : leader.nameEn}</h3>
                <p className="text-[13px] leading-relaxed text-stone-500 mt-2 line-clamp-3">{lang === 'bn' ? leader.bioBn : leader.bioEn}</p>
              </div>
              <div className="px-5 pb-5 space-y-2">
                <a href={`tel:${leader.mobile}`} className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#fdfbf7] border border-stone-200 text-xs font-semibold text-[#0f2a44] hover:bg-white transition-colors">
                  <span className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center"><Phone size={12} /></span>
                  {leader.mobile}
                </a>
                <a href={`mailto:${leader.email}`} className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 hover:text-[#0f2a44] transition-colors truncate">
                  <span className="w-6 h-6 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center shrink-0"><Mail size={12} /></span>
                  <span className="truncate">{leader.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-modern rounded-[20px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f2a44] !border-[#0f2a44] text-white">
          <div className="text-sm leading-relaxed">
            <span className="font-bold">Nodi Bangla Group</span> <span className="text-white/60">— Building textiles for the world since 1993. Family-led, professionally run.</span>
          </div>
          <a href="#/contact" className="shrink-0 px-5 py-2.5 rounded-full bg-white text-[#0f2a44] text-sm font-bold hover:bg-stone-100 transition-colors">
            {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact leadership'}
          </a>
        </div>
      </div>
    </div>
  );
}
