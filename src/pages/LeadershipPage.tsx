import { Phone, Mail, Crown } from 'lucide-react';
import { useApp } from '../App';
import { assets } from '../assets';
import PageHeader from '../components/PageHeader';

const leaders = [
  { nameEn: 'Alhaj Md. Abed Ali', nameBn: 'আলহাজ্ব মোঃ আবেদ আলী', roleEn: 'Founder & Visionary Pioneer', roleBn: 'প্রতিষ্ঠাতা ও স্বপ্নদ্রষ্টা', img: assets.leaders.abedAli, mobile: '+880 1713-562042', email: 'info@nodibanglagroup.com', bioEn: 'The visionary foundation of Abed Textile Processing Mills Ltd.', bioBn: 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেডের প্রতিষ্ঠাতা।', founder: true },
  { nameEn: 'Monjur Elahi', nameBn: 'মনজুর এলাহী', roleEn: 'Managing Director', roleBn: 'ব্যবস্থাপনা পরিচালক', img: assets.leaders.manjurElahi, mobile: '01713-562042', email: 'info@nodibanglagroup.com', bioEn: 'Dynamic leader steering towards international excellence.', bioBn: 'আন্তর্জাতিক উৎকর্ষের দিকে নিয়ে যাওয়ার দূরদর্শী কর্ণধার।', founder: false },
  { nameEn: 'Abdullah Al Mamun', nameBn: 'আব্দুল্লাহ আল মামুন', roleEn: 'Director', roleBn: 'পরিচালক', img: assets.leaders.abdulMamun, mobile: '01713-519783', email: 'abedmamun@hotmail.com', bioEn: 'Overseeing global operations and supply chain logistics.', bioBn: 'আন্তর্জাতিক কার্যক্রম ও সাপ্লাই চেইন পরিচালনায় অভিজ্ঞ।', founder: false },
  { nameEn: 'Mahbubur Rahman (Monir)', nameBn: 'মাহবুবুর রহমান (মনির)', roleEn: 'Director', roleBn: 'পরিচালক', img: assets.leaders.mahbuburRahman, mobile: '01711-707403', email: 'abedmonir@hotmail.com', bioEn: 'Leading technical innovations and machinery modernization.', bioBn: 'প্রযুক্তিগত উদ্ভাবন ও যন্ত্রপাতি উন্নয়নে অগ্রণী।', founder: false },
];

export default function LeadershipPage() {
  const { lang } = useApp();
  const bn = lang === 'bn';

  return (
    <>
      <PageHeader
        eyebrowEn="Board of Directors & Visionaries"
        eyebrowBn="পরিচালনা পর্ষদ ও নেতৃত্ব"
        titleEn="Guided by Decades of Leadership Excellence"
        titleBn="২৬ বছরেরও বেশি অভিজ্ঞতা ও দক্ষ দিকনির্দেশনা"
        subEn="The people behind three decades of trust, quality and growth."
        subBn="তিন দশকের আস্থা, মান ও প্রবৃদ্ধির আর্কিটেক্ট।"
        image={assets.homeBg}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal>
            {leaders.map((leader) => (
              <div key={leader.nameEn} className="card card-hover overflow-hidden flex flex-col group">
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={leader.img}
                    alt={leader.nameEn}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-transparent to-transparent" />
                  {leader.founder && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg">
                      <Crown className="w-3 h-3" />
                      {bn ? 'প্রতিষ্ঠাতা' : 'Founder'}
                    </span>
                  )}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-white font-extrabold text-[17px] leading-snug drop-shadow">
                      {bn ? leader.nameBn : leader.nameEn}
                    </h3>
                    <div className="text-amber-300 text-xs font-bold mt-0.5">{bn ? leader.roleBn : leader.roleEn}</div>
                  </div>
                </div>

                {/* Bio + contact */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">{bn ? leader.bioBn : leader.bioEn}</p>
                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2 text-xs">
                    <a
                      href={`tel:${leader.mobile.replace(/[^+\d]/g, '')}`}
                      className="flex items-center gap-2.5 text-slate-600 hover:text-sky-600 transition-colors font-medium"
                    >
                      <span className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5 text-sky-500" />
                      </span>
                      {leader.mobile}
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center gap-2.5 text-slate-600 hover:text-amber-600 transition-colors font-medium"
                    >
                      <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5 text-amber-500" />
                      </span>
                      <span className="truncate">{leader.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
