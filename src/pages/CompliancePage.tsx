import { Check, Droplets, Zap, Recycle, FlaskConical } from 'lucide-react';
import { assets } from '../assets';
import { sustainabilityPillars, rdFlow, qaFlow, testingParameters } from '../profile';
import { useApp } from '../App';
import { Eyebrow, PageHero, Shell, LinkArrow } from '../components/Site';
import Reveal from '../components/Reveal';

export default function CompliancePage() {
  const { openLightbox } = useApp();

  const showcaseImages = [
    { src: assets.sustainability.etpAeration.src, title: 'Biological ETP Aeration Tank & Clean Effluent', cat: 'ETP' },
    { src: assets.sustainability.waterTreatment.src, title: 'Industrial Water Clarification & Recycling Station', cat: 'Water' },
    { src: assets.technology.rdLab.src, title: 'Analytical Quality & Color Formulation Laboratory', cat: 'Quality' },
    { src: assets.sustainability.energyUtilities.src, title: 'High-Efficiency Boiler House & Thermal Plant', cat: 'Energy' },
  ];

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Sustainability, Quality & Responsibility"
        title="Better manufacturing through better resource use."
        intro="For a textile-processing enterprise, environmental responsibility is directly tied to disciplined management of water, energy, chemicals, and materials. We link verified operational data with continuous technological improvement."
      />

      {/* 8 Sustainability Action Areas (Page 16) */}
      <section className="py-20 lg:py-28">
        <Shell>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Sustainability Framework</Eyebrow>
            <h2 className="display text-4xl md:text-6xl">8 Pillars of Responsible Production</h2>
            <p className="mt-3 text-base text-[#5c645f]">
              Our approach prioritizes measurable manufacturing upgrades, rigorous MRSL compliance, and biological wastewater
              remediation over generic sustainability claims.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sustainabilityPillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 50}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow transition h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#a34d20]">Pillar 0{idx + 1}</span>
                    <h3 className="display text-xl font-bold mt-2 mb-3">{p.title}</h3>
                    <p className="text-xs text-[#5c645f] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sustainability Management Framework Cycle */}
          <div className="mt-16 rounded-2xl bg-[#182722] p-8 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ff9a55] mb-2">Management & Review Cycle</div>
            <h3 className="display text-2xl font-bold mb-4">Continuous Governance & Verification</h3>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/80">
              {['Management', 'Sustainability Leadership', 'Safety & Environment Teams', 'Audited Operational Data', 'KPI Targets', 'Quarterly Review', 'Technological Improvement'].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded bg-white/10 px-3 py-1.5 border border-white/10">{step}</span>
                  {i < 6 && <span className="text-[#ff9a55] font-bold">→</span>}
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Responsible Resource Management (Page 17) */}
      <section className="bg-[#efe9df] py-20 lg:py-28 border-y border-black/10">
        <Shell>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Resource Systems</Eyebrow>
            <h2 className="display text-4xl md:text-6xl">Every Resource Counts</h2>
            <p className="mt-3 text-base text-[#5c645f]">
              Responsible manufacturing begins with knowing what enters the factory, how it is consumed, and where recovery
              is achievable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#a34d20]/10 text-[#a34d20] flex items-center justify-center">
                    <FlaskConical size={20} />
                  </div>
                  <div>
                    <h3 className="display text-2xl font-bold">Chemicals & Dyes</h3>
                    <span className="text-xs font-bold text-[#a34d20] uppercase tracking-wider">MRSL Compliance</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[#5c645f]">
                  Strict supplier screening and comprehensive inventory tracking prevent hazardous chemicals from entering the
                  processing stream. Complete Safety Data Sheets (SDS) are verified prior to floor dispensing.
                </p>
                <div className="rounded-xl bg-[#f7f3eb] p-4 text-[11px] font-semibold text-[#182722] border border-black/5">
                  Supplier Approval → Chemical Review → SDS Verification → Safe Storage → Controlled Dosing → Inventory Tracking → Waste Neutralization
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#a34d20]/10 text-[#a34d20] flex items-center justify-center">
                    <Droplets size={20} />
                  </div>
                  <div>
                    <h3 className="display text-2xl font-bold">Water & Biological ETP</h3>
                    <span className="text-xs font-bold text-[#a34d20] uppercase tracking-wider">Measure · Reduce · Reuse · Treat</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[#5c645f]">
                  Our 2,400+ m³/day biochemical effluent treatment plant employs multi-stage aerobic aeration tanks, clarifiers, and
                  sand/carbon filtration. Treated effluent is safely returned to natural standards or recycled for factory utilities.
                </p>
                <div className="rounded-xl bg-[#f7f3eb] p-4 text-[11px] font-semibold text-[#182722] border border-black/5">
                  Flow Metres → Low Liquor Machines → Multi-Stage Aeration → Clarifier Settlement → Sand/Carbon Polishing → Utility Recycling
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#a34d20]/10 text-[#a34d20] flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="display text-2xl font-bold">Energy & Utilities</h3>
                    <span className="text-xs font-bold text-[#a34d20] uppercase tracking-wider">Thermal & Electrical Optimization</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[#5c645f]">
                  Boiler economizers recover exhaust heat to preheat feed water, variable-frequency drives (VFD) govern motor loads,
                  and automated pneumatic management eliminates compressed-air losses across all manufacturing floors.
                </p>
                <div className="rounded-xl bg-[#f7f3eb] p-4 text-[11px] font-semibold text-[#182722] border border-black/5">
                  Waste Heat Recovery → Thermal Insulation → Variable Speed Drives → Steam Trap Audits → Utility Monitoring
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm h-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#a34d20]/10 text-[#a34d20] flex items-center justify-center">
                    <Recycle size={20} />
                  </div>
                  <div>
                    <h3 className="display text-2xl font-bold">Waste & Circularity</h3>
                    <span className="text-xs font-bold text-[#a34d20] uppercase tracking-wider">Source Prevention & Recovery</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[#5c645f]">
                  Digital printing dramatically cuts dye liquor waste. Solid fabric selvedges and yarn scraps are sorted and baled
                  for downstream recycling, while ETP biosludge is dewatered responsibly.
                </p>
                <div className="rounded-xl bg-[#f7f3eb] p-4 text-[11px] font-semibold text-[#182722] border border-black/5">
                  Digital Precision Dosing → Fabric Offcut Segregation → Sludge Dewatering → Certified Waste Management
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* R&D & Quality Assurance (Page 12) */}
      <section className="bg-[#f7f3eb] py-20 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-2 items-start mb-16">
            <Reveal>
              <div className="space-y-6">
                <Eyebrow>R&D Flow</Eyebrow>
                <h2 className="display text-3xl md:text-5xl">Development Before Production</h2>
                <p className="text-sm leading-relaxed text-[#5c645f]">
                  Reliable bulk production begins with disciplined laboratory development. Our technical teams work across color,
                  chemistry, fabric preparation, and digital printhead parameters to convert concept requirements into repeatable bulk runs.
                </p>

                <div className="space-y-2">
                  {rdFlow.map((step, idx) => (
                    <div key={step} className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-xs">
                      <span className="h-6 w-6 rounded-full bg-[#e86d2a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#182722]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6">
                <Eyebrow>Quality Assurance</Eyebrow>
                <h2 className="display text-3xl md:text-5xl">Continuous In-Line Quality Control</h2>
                <p className="text-sm leading-relaxed text-[#5c645f]">
                  Quality is governed throughout the manufacturing cycle rather than checked only at the end. Laboratory standards,
                  chemical dosing, and machine parameters connect directly with buyer requirements.
                </p>

                <div className="space-y-2">
                  {qaFlow.map((step, idx) => (
                    <div key={step} className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-xs">
                      <span className="h-6 w-6 rounded-full bg-[#182722] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#182722]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* 9 Key Testing Areas Table (Page 12) */}
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#a34d20]">Laboratory Testing Facilities</div>
                <h3 className="display text-2xl font-bold mt-1">9 Certified Testing Parameters</h3>
              </div>
              <span className="rounded-full bg-[#182722]/5 px-4 py-1.5 text-xs font-bold text-[#182722]">
                Calibrated Testing Lab
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {testingParameters.map((t) => (
                <div key={t.name} className="rounded-xl border border-black/5 bg-[#fbf8f2] p-4">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#182722]">
                    <Check size={14} className="text-[#e86d2a]" /> {t.name}
                  </div>
                  <div className="text-[11px] text-[#5c645f] mt-1 font-mono">{t.standard}</div>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Visual Previews */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Eyebrow light>Verified Facility</Eyebrow>
              <h2 className="display text-4xl md:text-6xl text-white">Environmental & Quality Infrastructure</h2>
            </div>
            <LinkArrow href="#/gallery" light>Open full photo gallery</LinkArrow>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseImages.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => openLightbox(showcaseImages, idx)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#101b18] text-left shadow"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded bg-[#ff9a55] px-2 py-0.5 text-[9px] font-bold uppercase text-[#182722]">
                    {item.cat}
                  </span>
                  <div className="font-bold text-xs text-white mt-1 line-clamp-1">{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        </Shell>
      </section>
    </div>
  );
}
