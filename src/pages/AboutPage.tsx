import { useState } from 'react';
import { assets } from '../assets';
import { Sparkles, Target, Compass, Users, Award, Leaf, ShieldCheck, Zap, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';

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
      {/* Header */}
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#d4a574]/[0.04] blur-[60px]" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10 relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/[0.05] border border-[#0f2a44]/[0.08] text-[#0f2a44] text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
                Corporate Identity & Legacy
              </div>
              <h1 className="mt-4 text-[32px] sm:text-[42px] xl:text-[48px] font-[800] tracking-[-0.03em] leading-[0.93] text-[#0f2a44] text-balance">
                Three decades of continuous excellence & trust
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-500 max-w-2xl">
                Leading the textile processing landscape with high compliance, modern machinery, and sustainable values since 1993.
              </p>
            </div>
          </Reveal>

          {/* Tabs */}
          <Reveal delay={120}>
            <div className="mt-8 inline-flex p-1 rounded-full bg-[#0f2a44]/[0.05] border border-[#0f2a44]/[0.08]">
              {([
                { key: 'about', label: 'About Company' },
                { key: 'vision', label: 'Our Vision' },
                { key: 'mission', label: 'Our Mission' }
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setAboutTab(tab.key)}
                  className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${aboutTab === tab.key ? 'bg-[#0f2a44] text-white shadow-sm shadow-[#0f2a44]/20' : 'text-stone-600 hover:text-[#0f2a44]'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main bento */}
      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
            {/* Left — 7 cols text */}
            <Reveal direction="left">
              <div className="lg:col-span-7 xl:col-span-7 card-modern rounded-[24px] p-6 sm:p-8 lg:p-9 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-[#fdfbf7] border border-[#0f2a44]/[0.08] flex items-center justify-center text-[#0f2a44]/70">
                    {aboutTab === 'about' ? <Compass size={16} /> : aboutTab === 'vision' ? <Target size={16} /> : <Sparkles size={16} />}
                  </div>
                  <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a]">
                    {aboutTab === 'about' ? 'Business Model & Inception' : aboutTab === 'vision' ? 'Our Long-Term Vision' : 'Our Mission & Purpose'}
                  </div>
                </div>

                {aboutTab === 'about' && (
                  <div>
                    <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">Business Model & Inception</h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-stone-600 whitespace-pre-line">
                      Our business model focuses on Quality Merchandising and Product Quality, Timed Delivery, a High Standard of Compliance and Dedicated Customer Service.

                      The company was established and Commercial Production commenced in 1993. Currently we hold a total of 42 production machineries and a workforce of 1000 employees. Our Total Consolidated Production Capacity per month is 4,500,000 yards.
                    </p>
                  </div>
                )}
                {aboutTab === 'vision' && (
                  <div>
                    <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">Our Long-Term Vision</h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-stone-600">
                      To become a market leader through the pursuit of high productivity, advanced technological innovation &amp; absolute customer satisfaction.
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.75] text-stone-500">We envision Abed Textile as the most trusted export partner for premium ethnic and fashion fabrics — driven by technology, sustainability and people.</p>
                  </div>
                )}
                {aboutTab === 'mission' && (
                  <div>
                    <h3 className="text-[22px] font-bold tracking-tight text-[#0f2a44]">Our Mission & Strategic Purpose</h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-stone-600">
                      To continuously focus on customer needs to manufacture quality fabrics of high standard. Every yard is inspected, every color is formulated for fastness, every delivery is on time.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-3 mt-auto pt-6 border-t border-stone-100">
                  <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200/80 p-4 text-center hover-ring">
                    <div className="text-xl font-[800] tracking-tight text-[#0f2a44]">1,53,372</div>
                    <div className="text-[11px] font-semibold text-stone-500 mt-1">Sq.Ft. Floor</div>
                  </div>
                  <div className="rounded-2xl bg-[#fdfbf7] border border-stone-200/80 p-4 text-center hover-ring">
                    <div className="text-xl font-[800] tracking-tight text-[#b88a5a]">60%</div>
                    <div className="text-[11px] font-semibold text-stone-500 mt-1">Utilization</div>
                  </div>
                  <div className="rounded-2xl bg-[#0f2a44] p-4 text-center text-white hover-ring">
                    <div className="text-xl font-[800] tracking-tight">4.5M</div>
                    <div className="text-[11px] font-semibold text-white/65 mt-1">Yards / Month</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — 5 cols image */}
            <Reveal direction="right" delay={100}>
              <div className="lg:col-span-5 xl:col-span-5">
                <div className="relative rounded-[24px] overflow-hidden bg-stone-200 h-[360px] lg:h-full min-h-[360px] border border-[#0f2a44]/[0.08] group">
                  <img src={assets.aboutBg} alt="Factory Site" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/75 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#0f2a44]/0 group-hover:bg-[#0f2a44]/5 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-[#0f2a44] shadow-lg">
                      <Leaf size={14} className="text-emerald-600" /> Ghoradia • Narsingdi
                    </div>
                    <div className="mt-3 text-white">
                      <div className="text-sm font-bold">153,372 sq.ft. integrated floor</div>
                      <div className="text-xs text-white/65">Dyeing • Printing • Finishing • ETP • Utilities — one campus</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-white border-t border-[#0f2a44]/[0.06]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-10 lg:py-12">
          <Reveal>
            <div className="flex items-end justify-between gap-4 mb-6">
              <h3 className="text-[22px] sm:text-[24px] font-bold tracking-tight text-[#0f2a44]">Our core values</h3>
              <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-[#0f2a44]/[0.08] to-transparent ml-6 mb-3" />
              <span className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-stone-400">6 pillars</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card-modern rounded-[20px] p-6 group h-full">
                  <div className="w-10 h-10 rounded-full bg-[#fdfbf7] border border-stone-200/80 flex items-center justify-center text-[#0f2a44]/70 group-hover:bg-[#0f2a44] group-hover:text-white group-hover:border-[#0f2a44] transition-all duration-400">
                    <v.icon size={16} />
                  </div>
                  <div className="mt-4 text-[11px] font-bold tracking-[0.08em] uppercase text-[#b88a5a]">0{i + 1}</div>
                  <h4 className="text-[16px] font-bold text-[#0f2a44] mt-1">{v.title}</h4>
                  <p className="text-[13px] leading-relaxed text-stone-500 mt-2">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
