import { assets } from '../assets';
import { Phone, Mail, Crown } from 'lucide-react';

const leaders = [
  { name: 'Alhaj Md. Abed Ali', role: 'Founder & Visionary Pioneer', img: assets.leaders.abedAli, mobile: '+880 1713-562042', email: 'info@abedtextile.com', bio: 'The visionary foundation of Abed Textile Processing Mills Ltd.' },
  { name: 'Monjur Elahi', role: 'Managing Director', img: assets.leaders.manjurElahi, mobile: '01713-562042', email: 'info@abedtextile.com', bio: 'Dynamic leader steering towards international excellence.' },
  { name: 'Abdullah Al Mamun', role: 'Director', img: assets.leaders.abdulMamun, mobile: '01713-519783', email: 'abedmamun@hotmail.com', bio: 'Overseeing global operations and supply chain logistics.' },
  { name: 'Mahbubur Rahman (Monir)', role: 'Director', img: assets.leaders.mahbuburRahman, mobile: '01711-707403', email: 'abedmonir@hotmail.com', bio: 'Leading technical innovations and machinery modernization.' }
];

export default function LeadershipPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
              Board of Directors & Visionaries
            </div>
            <h1 className="mt-4 text-[30px] sm:text-[40px] xl:text-[44px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
              Guided by 32+ years of leadership excellence
            </h1>
            <p className="mt-3 text-sm text-stone-500">Family-led, professionally run — building textiles for the world since 1993.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-5 lg:gap-6">
            {leaders.map((leader, index) => (
              <div key={index} className="card-modern rounded-[24px] overflow-hidden flex flex-col group">
                <div className="relative h-[300px] bg-stone-100 overflow-hidden">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover object-top img-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/40 via-transparent to-transparent opacity-60" />
                  {index === 0 && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4a574] text-white text-xs font-bold shadow-lg">
                      <Crown size={12} /> Founder
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex px-3 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-bold text-[#0f2a44] shadow-sm">
                      {leader.role}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-[16px] font-bold tracking-tight text-[#0f2a44] leading-tight">{leader.name}</h3>
                  <p className="text-[13px] leading-relaxed text-stone-500 mt-2 line-clamp-3">{leader.bio}</p>
                </div>
                <div className="px-5 pb-5 space-y-2">
                  <a href={`tel:${leader.mobile}`} className="flex items-center gap-2.5 px-3 py-2.5 rounded-full bg-[#fdfbf7] border border-stone-200 text-xs font-semibold text-[#0f2a44] hover:bg-white transition-colors">
                    <span className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center"><Phone size={12} /></span>
                    {leader.mobile}
                  </a>
                  <a href={`mailto:${leader.email}`} className="flex items-center gap-2.5 px-3 py-2.5 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 hover:text-[#0f2a44] transition-colors truncate">
                    <span className="w-6 h-6 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center shrink-0"><Mail size={12} /></span>
                    <span className="truncate">{leader.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[20px] p-6 lg:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f2a44] text-white">
            <div className="text-sm leading-relaxed">
              <span className="font-bold">Abed Textile Processing Mills Ltd.</span> <span className="text-white/60">— Building textiles for the world since 1993. Family-led, professionally run.</span>
            </div>
            <a href="#/contact" className="shrink-0 px-5 py-2.5 rounded-full bg-white text-[#0f2a44] text-sm font-bold hover:bg-stone-100 transition-colors">
              Contact leadership
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
