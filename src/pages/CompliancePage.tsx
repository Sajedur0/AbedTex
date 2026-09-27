import { ArrowUpRight, Check, HeartPulse, ShieldCheck, Sprout } from 'lucide-react';
import { assets } from '../assets';
import { compliance, facts } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const complianceVisuals = [
  { img: assets.gallery[13].thumb, title: 'Worker Safety & Training Zone', cat: 'Worker Welfare' },
  { img: assets.gallery[38].thumb, title: 'Fire Safety & Hydrant Network', cat: 'Life Safety' },
  { img: assets.gallery[33].thumb, title: '2400 m³/day Biological ETP Plant', cat: 'Environment' },
  { img: assets.gallery[34].thumb, title: 'Industrial Water Recycling System', cat: 'Sustainability' },
];

export default function CompliancePage() {
  const { openLightbox } = useApp();

  const lightboxItems = complianceVisuals.map((c) => ({
    src: c.img.full || c.img.src,
    title: `${c.cat} — ${c.title}`,
    thumb: c.img,
  }));

  return (
    <div>
      <PageHero
        kicker="Responsibility / People & planet"
        title="Standards made visible."
        intro="Our compliance policy is based on SA-8000, local Labor Laws and key buyer codes of conduct. The factory follows ILO and Bangladesh Labor Law standards."
      />

      {/* 3 Core Pillars */}
      <section className="bg-[#182722] text-white">
        <Shell className="grid gap-px bg-white/15 py-16 md:grid-cols-3 lg:py-24">
          {[
            [ShieldCheck, 'Fair work', 'No child labor, no forced labor, ensured wages and regulated hours.'],
            [HeartPulse, 'Worker welfare', 'Health care, maternity protection, welfare committee, day care and insurance.'],
            [Sprout, 'Safe environment', 'Protective clothing, ventilation, filtration, lighting and a no-smoking workplace.'],
          ].map(([Icon, t, d]: any) => (
            <div className="bg-[#182722] p-8" key={t}>
              <Icon className="text-[#ff9a55]" size={32} />
              <h2 className="display mt-10 text-4xl">{t}</h2>
              <p className="mt-4 text-sm leading-7 text-white/55">{d}</p>
            </div>
          ))}
        </Shell>
      </section>

      {/* Policy in Action Checkpoints */}
      <section className="bg-[#f7f3eb]">
        <Shell className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <Eyebrow>Policy in action</Eyebrow>
              <h2 className="display text-5xl leading-[.95]">A workplace built around dignity.</h2>
              <p className="mt-6 text-sm leading-7 text-[#626965]">
                Fire drills are conducted at least 12 times each year, with prevention and evacuation given top priority.
              </p>
            </div>
            <div className="grid gap-px bg-black/10 sm:grid-cols-2">
              {compliance.map((x) => (
                <Reveal key={x}>
                  <div className="flex h-full gap-3 bg-[#efe9df] p-5 text-sm font-semibold leading-6">
                    <Check size={16} className="mt-1 shrink-0 text-[#e86d2a]" />
                    {x}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Compliance Visuals */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow light>Verified Standards</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">Safety & Ecology On-Site</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                Direct evidence of our fire safety systems, worker protection zones, and biological effluent treatment plant.
              </p>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/50">
              Click to view inspection details
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {complianceVisuals.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 80}>
                <button
                  onClick={() => openLightbox(lightboxItems, idx)}
                  className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden border border-white/10 bg-[#263a33] p-5 text-left transition duration-300 hover:border-[#ff9a55]/60"
                >
                  <SmartImg
                    img={c.img}
                    alt={c.title}
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="relative z-10">
                    <span className="rounded-full bg-[#ff9a55]/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ff9a55] border border-[#ff9a55]/30">
                      {c.cat}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-white leading-snug">{c.title}</h3>
                  </div>
                  <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white text-[#182722] opacity-0 shadow-md transition group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Biochemical Treatment Banner */}
      <section className="bg-[#e86d2a] text-white">
        <Shell className="grid items-center gap-8 py-14 md:grid-cols-[1fr_auto]">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/65">Biochemical treatment</div>
            <h2 className="display mt-2 text-4xl md:text-6xl">
              {facts.etp} · {facts.etpArea}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/75">
            Modern ETP machinery imported from Ecotex Pte Ltd., Singapore.
          </p>
        </Shell>
      </section>
    </div>
  );
}
