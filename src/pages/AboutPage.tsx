import { useState } from 'react';
import { assets } from '../assets';
import { Sparkles, Target, Compass, Users, Award, Leaf, ShieldCheck, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
  const [aboutTab, setAboutTab] = useState('about');

  const values = [
    { icon: Heart, title: 'Customer First', desc: 'We place customer satisfaction at the core of all operations.' },
    { icon: Award, title: 'Pursuit of Quality', desc: 'Relentless commitment to flawless processing and durability.' },
    { icon: Users, title: 'Teamwork & People', desc: 'People are our greatest assets; we foster growth.' },
    { icon: Sparkles, title: 'Innovation & Diversity', desc: 'Adopting state-of-the-art global machinery.' },
    { icon: Zap, title: 'Efficiency & Cost Control', desc: 'Optimizing supply chains and lean production.' },
    { icon: ShieldCheck, title: 'Responsible Corporate Citizen', desc: 'Strict adherence to SA-8000 and worker welfare.' }
  ];

  return (
    <div className="w-full">
      {/* Header — full bleed */}
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
              Corporate Identity & Legacy
            </div>
            <h1 className="mt-4 text-[32px] sm:text-[42px] xl:text-[48px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44] text-balance">
              Three decades of continuous excellence & trust
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-500 max-w-2xl">
              Leading the textile processing landscape with high compliance, modern machinery, and sustainable values since 1993.
            </p>
          </div>

          {/* Tabs — pill */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10">
            {([
              { key: 'about', label: 'About Company' },
              { key: 'vision', label: 'Our Vision' },
              { key: 'mission', label: 'Our Mission' }
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setAboutTab(tab.key)}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all ${aboutTab === tab.key ? 'bg-[#0f2a44] text-white shadow-sm' : 'text-stone-600 hover:text-[#0f2a44]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main bento — full bleed grid with no wasted center */}
      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
            {/* Left — 7 cols text */}
            <div className="lg:col-span-7 xl:col-span-7 card-modern rounded-[24px] p-6 sm:p-8 lg:p-9 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#fdfbf7] border border-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44]">
                  {aboutTab === 'about' ? <Compass size={16} /> : aboutTab === 'vision' ? <Target size={16} /> : <Sparkles size={16} />}
                </div>
                <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a]">
                  {aboutTab === 'about' ? 'Business Model & Inception' : aboutTab === 'vision' ? 'Our Long-Term Vision' : 'Our Mission & Purpose'}
                </div>
              </div>

              {aboutTab === 'about' && (
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">Business Model & Inception</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600 whitespace-pre-line">
                    Our business model focuses on Quality Merchandising and Product Quality, Timed Delivery, a High Standard of Compliance and Dedicated Customer Service.

                    The company was established and Commercial Production commenced in 1993. Currently we hold a total of 42 production machineries and a workforce of 1000 employees. Our Total Consolidated Production Capacity per month is 4,500,000 yards.
                  </p>
                </div>
              )}
              {aboutTab === 'vision' && (
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">Our Long-Term Vision</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                    To become a market leader through the pursuit of high productivity, advanced technological innovation &amp; absolute customer satisfaction.
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-500">We envision Abed Textile as the most trusted export partner for premium ethnic and fashion fabrics — driven by technology, sustainability and people.</p>
                </div>
              )}
              {aboutTab === 'mission' && (
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">Our Mission & Strategic Purpose</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                    To continuously focus on customer needs to manufacture quality fabrics of high standard. Every yard is inspected, every color is formulated for fastness, every delivery is on time.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-stone-100">
                <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-4 text-center">
                  <div className="text-xl font-[800] tracking-tight text-[#0f2a44]">1,53,372</div>
                  <div className="text-[11px] font-semibold text-stone-500 mt-1">Sq.Ft. Floor</div>
                </div>
                <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200 p-4 text-center">
                  <div className="text-xl font-[800] tracking-tight text-[#b88a5a]">60%</div>
                  <div className="text-[11px] font-semibold text-stone-500 mt-1">Utilization</div>
                </div>
                <div className="rounded-2xl bg-[#0f2a44] p-4 text-center text-white">
                  <div className="text-xl font-[800] tracking-tight">4.5M</div>
                  <div className="text-[11px] font-semibold text-white/70 mt-1">Yards / Month</div>
                </div>
              </div>
            </div>

            {/* Right — 5 cols image, edge to edge */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden bg-stone-200 h-[360px] lg:h-full min-h-[360px] border border-[#0f2a44]/10">
                <img src={assets.aboutBg} alt="Factory Site" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-[#0f2a44] shadow-lg">
                    <Leaf size={14} className="text-emerald-600" /> Ghoradia • Narsingdi
                  </div>
                  <div className="mt-3 text-white">
                    <div className="text-sm font-bold">153,372 sq.ft. integrated floor</div>
                    <div className="text-xs text-white/70">Dyeing • Printing • Finishing • ETP • Utilities — one campus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — full width 3-col */}
      <section className="w-full bg-white border-t border-[#0f2a44]/[0.06]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-10 lg:py-12">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h3 className="text-[22px] sm:text-[24px] font-bold tracking-tight text-[#0f2a44]">Our core values</h3>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#0f2a44]/10 ml-6 mb-3" />
            <span className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-stone-400">6 pillars</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-modern rounded-[20px] p-6 group">
                <div className="w-10 h-10 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center text-[#0f2a44] group-hover:bg-[#0f2a44] group-hover:text-white group-hover:border-[#0f2a44] transition-colors">
                  <v.icon size={16} />
                </div>
                <div className="mt-4 text-[11px] font-bold tracking-[0.08em] uppercase text-[#b88a5a]">0{i + 1}</div>
                <h4 className="text-[16px] font-bold text-[#0f2a44] mt-1">{v.title}</h4>
                <p className="text-[13px] leading-relaxed text-stone-500 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
