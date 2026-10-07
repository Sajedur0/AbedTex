import { ArrowDown, ArrowUpRight, Check, Sparkles, Cpu, Droplets, ExternalLink } from 'lucide-react';
import { assets } from '../assets';
import { workflowSteps, digitalAdvantages, affiliatedConcerns, csrInstitutions, financialPartners } from '../profile';
import { Eyebrow, LinkArrow, Shell } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const productionWings = [
  {
    title: 'Weaving Section',
    subtitle: '32 Looms',
    img: assets.banners.weaving,
    text: 'High-speed automated industrial loom shed producing premium greige cotton fabric.',
    link: '#/units',
  },
  {
    title: 'Dyeing & Pretreatment',
    subtitle: '80,000 m/day',
    img: assets.banners.dyeing,
    text: 'Singeing, clip/roller mercerizing, Cold Pad Batch and 35 single/jumbo jigger units.',
    link: '#/units',
  },
  {
    title: 'Digital Textile Printing',
    subtitle: '120,000 m/day',
    img: assets.banners.digital,
    text: 'Industrial single-pass Atexco, VEGA, BYDI, and RBR Hybrid printing suites.',
    link: '#/units',
  },
  {
    title: 'Conventional Printing',
    subtitle: '80,000 m/day',
    img: assets.banners.conventionalPrinting,
    text: 'Automatic rotary screen and serbo flatbed lines with high-temperature loop steamers.',
    link: '#/units',
  },
  {
    title: 'Washing & Finishing',
    subtitle: '280,000 m/day',
    img: assets.banners.finishing,
    text: 'Multi-chamber Bruckner & Babcock stenters, open-width wash ranges and calenders.',
    link: '#/units',
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-112px)] overflow-hidden bg-[#182722] text-white">
        <SmartImg
          img={assets.hero}
          alt="Abed Textile factory"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#182722] via-[#182722]/85 to-transparent" />

        <Shell className="relative flex min-h-[calc(100vh-112px)] flex-col justify-between py-10 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#ff9a55]">
            <span>Ghoradia, Narsingdi · Bangladesh</span>
            <span className="hidden sm:inline text-white/50">Established Early 1990s · 30+ Years Experience</span>
          </div>

          <div className="grid items-end gap-12 py-12 lg:grid-cols-[1.2fr_380px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff9a55]/30 bg-[#ff9a55]/10 px-4 py-1.5 text-xs font-semibold text-[#ff9a55] mb-6">
                <Sparkles size={14} />
                <span>Textile Expertise · Digital Progress</span>
              </div>
              <h1 className="display max-w-5xl text-[clamp(3.5rem,8.2vw,8rem)] leading-[.88] tracking-tight">
                Built on experience.<br />
                <i className="text-[#ff9a55] font-serif">Driven by progress.</i>
              </h1>
            </div>

            <div className="pb-3 bg-[#101b18]/70 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-[14px] leading-relaxed text-white/80">
                For more than three decades, <strong>Abed Textile Processing Mills Limited</strong> has grown into an integrated
                operation covering weaving, dyeing, printing, washing, finishing, and digital textile printing — with 18,000 workforce.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#/units"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e86d2a] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#c95820]"
                >
                  Production Units <ArrowUpRight size={14} />
                </a>
                <a
                  href="#/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  Our Journey
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-[.18em] text-white/50">
            <span>Scroll to explore capabilities</span>
            <ArrowDown size={15} className="animate-bounce" />
          </div>
        </Shell>
      </section>

      {/* Verified Daily Operational Capacities Bar */}
      <section className="bg-[#e86d2a] text-white shadow-inner">
        <Shell className="grid grid-cols-2 divide-x divide-white/20 border-x border-white/20 md:grid-cols-3 lg:grid-cols-6">
          {[
            ['120,000 m', 'Printing / Day', 'Digital & Rotary fleet'],
            ['80,000 m', 'Dyeing / Day', 'Jiggers & Cold Pad Batch'],
            ['80,000 m', 'Conventional Print', 'Screen & Serbo lines'],
            ['280,000 m', 'Washing / Day', 'Continuous open-width'],
            ['280,000 m', 'Finishing / Day', 'Stenters & heavy calenders'],
            ['18,000', 'Workforce', 'Integrated skilled team'],
          ].map(([val, label, sub]) => (
            <div key={label} className="px-4 py-6 text-center lg:text-left">
              <div className="display text-2xl lg:text-3xl font-black">{val}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/90">{label}</div>
              <div className="text-[10px] text-white/65 hidden sm:block">{sub}</div>
            </div>
          ))}
        </Shell>
      </section>

      {/* Snapshot & Founder Tribute */}
      <section className="bg-[#f7f3eb] py-20 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
            <Reveal>
              <div className="space-y-6">
                <Eyebrow>Company Snapshot</Eyebrow>
                <h2 className="display text-4xl leading-tight md:text-6xl">
                  Connecting legacy craftsmanship with <i className="text-[#a34d20] font-serif">digital technology.</i>
                </h2>
                <p className="text-base leading-relaxed text-[#5c645f]">
                  Abed Textile began with the vision of <strong>Haji Abed Ali Miah</strong> in Narsingdi in the early 1990s.
                  At a time when Bangladesh was developing its domestic textile base, he focused on building local manufacturing capability.
                  That foundation later expanded into a broader processing operation and, eventually, advanced digital textile printing.
                </p>

                <div className="rounded-2xl border border-black/10 bg-[#efe9df] p-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#a34d20]">Founder Philosophy</div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {['Produce locally.', 'Build capability.', 'Invest for the future.'].map((phil) => (
                      <div key={phil} className="rounded-lg bg-white/70 p-3 shadow-sm border border-black/5 font-bold text-xs text-[#182722]">
                        {phil}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <LinkArrow href="#/about">Read full company story & journey</LinkArrow>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-black/10">
                  <SmartImg
                    img={assets.heroLoom}
                    alt="High-speed digital textile printing line at the Ghoradia mills"
                    sizes="(min-width:1024px) 46vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#ff9a55]">Integrated Facility</div>
                    <div className="text-xl font-bold">Ghoradia, Narsingdi Sadar</div>
                    <div className="text-xs text-white/70">89+ Heavy Industrial Production Units</div>
                  </div>
                </div>

                {/* Floating founder badge */}
                <div className="absolute -bottom-6 -left-4 sm:left-6 flex items-center gap-4 rounded-xl bg-[#182722] p-4 text-white shadow-2xl border border-white/10 max-w-xs">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#ff9a55]">
                    <img src={assets.leaders.abedAli.src} alt="Haji Abed Ali Miah" className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#ff9a55]">Haji Abed Ali Miah</div>
                    <div className="text-white/60 text-[11px]">Founder & Pioneer</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* Integrated Manufacturing Platform (Page 8) */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-white/10 pb-8">
              <div>
                <Eyebrow light>Integrated Manufacturing Platform</Eyebrow>
                <h2 className="display text-4xl md:text-6xl text-white">
                  From fabric preparation to <i className="text-[#ff9a55] font-serif">final delivery.</i>
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                  Abed Textile has developed an integrated manufacturing platform connecting textile processing stages within one
                  coordinated operation. Connected processes. Better control. Consistent execution.
                </p>
              </div>
              <LinkArrow href="#/units" light>
                View all 5 wings & machinery
              </LinkArrow>
            </div>
          </Reveal>

          {/* Interactive 9-Step Flow */}
          <div className="mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ff9a55] mb-5">Coordinated 9-Stage Workflow</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
              {workflowSteps.map((wf) => (
                <div
                  key={wf.step}
                  className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/15 hover:border-[#ff9a55]"
                >
                  <div className="text-[#ff9a55] font-black text-xs">{wf.step}</div>
                  <div className="mt-1 text-xs font-bold text-white line-clamp-1">{wf.name}</div>
                  <div className="mt-1 text-[10px] text-white/50 leading-tight line-clamp-2">{wf.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Production Wings Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {productionWings.map((wing, i) => (
              <Reveal key={wing.title} delay={i * 80}>
                <a
                  href={wing.link}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-lg"
                >
                  <SmartImg
                    img={wing.img}
                    alt={wing.title}
                    sizes="(min-width:1280px) 18vw, (min-width:1024px) 30vw, (min-width:640px) 46vw, 100vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-block rounded bg-[#ff9a55] px-2.5 py-0.5 text-[10px] font-bold text-[#182722] mb-2">
                      {wing.subtitle}
                    </span>
                    <div className="display text-xl font-bold text-white">{wing.title}</div>
                    <p className="mt-2 text-xs text-white/70 line-clamp-2">{wing.text}</p>
                    <ArrowUpRight className="absolute bottom-5 right-5 text-white/70 transition group-hover:text-[#ff9a55]" size={18} />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Digital Textile Printing Spotlight (Page 10) */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e86d2a]/10 px-4 py-1.5 text-xs font-bold text-[#a34d20]">
                  <Cpu size={14} />
                  <span>High-Speed Digital Transformation</span>
                </div>
                <h2 className="display text-4xl leading-tight md:text-6xl">
                  Printing at <i className="text-[#a34d20] font-serif">digital speed.</i>
                </h2>
                <p className="text-base leading-relaxed text-[#5c645f]">
                  Digital textile printing has become one of Abed Textile’s defining manufacturing strengths. Investment in high-speed
                  digital systems supports design flexibility, quicker changeovers, and industrial-scale production while eliminating
                  lengthy screen preparation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {digitalAdvantages.map((adv) => (
                    <div key={adv.title} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#182722]">
                        <Check size={16} className="text-[#e86d2a]" />
                        {adv.title}
                      </div>
                      <p className="mt-1.5 text-xs text-[#5c645f] leading-relaxed">{adv.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#182722] p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff9a55]">Digital Capacity</div>
                    <div className="display text-2xl font-bold">120,000 Metres / Day</div>
                    <div className="text-xs text-white/60">Single-pass Atexco, VEGA, BYDI & RBR Hybrid</div>
                  </div>
                  <a
                    href="#/machinery"
                    className="shrink-0 rounded-full bg-[#e86d2a] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#c95820]"
                  >
                    View Machine Specs
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-black/10">
                  <SmartImg
                    img={assets.technology.singlePass}
                    alt="Single pass digital printing machine"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded bg-[#182722]/85 px-3 py-1 text-[10px] font-bold text-white">
                    Single-Pass High Speed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow border border-black/10">
                    <SmartImg
                      img={assets.technology.printhead}
                      alt="Advanced printhead systems"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                      Precision Printheads
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow border border-black/10">
                    <SmartImg
                      img={assets.products.digitalPrint1}
                      alt="Digital print floral output"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                      Finished Fabric Output
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* Technology Ecosystem & Affiliated Concerns (Page 15) */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Eyebrow light>Technology Ecosystem</Eyebrow>
              <h2 className="display text-4xl md:text-6xl text-white">
                Extending beyond fabric to <i className="text-[#ff9a55] font-serif">inks & machinery.</i>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                From fabric processing to printing inks and machinery manufacturing, our broader business develops an integrated
                connection with future-ready textile technologies.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {affiliatedConcerns.map((aff, i) => (
              <Reveal key={aff.id} delay={i * 80}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded bg-[#ff9a55]/20 text-[#ff9a55] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                        {aff.tagline}
                      </span>
                    </div>
                    <h3 className="display text-2xl font-bold text-white mb-2">{aff.name}</h3>
                    <p className="text-xs leading-relaxed text-white/65 mb-4">{aff.desc}</p>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between text-[11px] text-[#ff9a55]">
                    <span className="font-semibold">{aff.focus}</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Sustainability & Biological ETP (Page 16 & 17) */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-black/10">
                  <SmartImg
                    img={assets.sustainability.etpAeration}
                    alt="Biological ETP Plant Aeration"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#ff9a55] mb-1">
                      <Droplets size={16} />
                      <span>Water Stewardship</span>
                    </div>
                    <div className="text-2xl font-bold">Biochemical Effluent Treatment Plant</div>
                    <div className="text-xs text-white/70">Multi-stage aeration & multi-cycle water recycling</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6">
                <Eyebrow>Responsible Resource Management</Eyebrow>
                <h2 className="display text-4xl leading-tight md:text-6xl">
                  Better manufacturing through <i className="text-[#a34d20] font-serif">better resource use.</i>
                </h2>
                <p className="text-base leading-relaxed text-[#5c645f]">
                  For a textile-processing company, sustainability connects directly with how water, energy, chemicals, and production
                  resources are managed. Our approach links environmental responsibility with measurable operational improvement.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['Chemical Management', 'Strict MRSL, approved inventory & safe SDS storage'],
                    ['Water Stewardship', 'Measure, reduce, reuse, treat & continuous improvement'],
                    ['Energy Efficiency', 'Boiler heat recovery, variable drives & utility monitoring'],
                    ['Waste Reduction', 'Prevent at source, recover fabric & safe sludge management'],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-xl border border-black/10 bg-white p-4">
                      <div className="text-xs font-bold text-[#182722]">{title}</div>
                      <div className="mt-1 text-[11px] text-[#5c645f] leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <LinkArrow href="#/compliance">Explore our full sustainability & quality policy</LinkArrow>
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* People, CSR & Partners (Page 18) */}
      <section className="bg-[#f7f3eb] py-20 lg:py-24 border-t border-black/10">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Eyebrow>Community & CSR</Eyebrow>
              <h2 className="display text-3xl md:text-5xl">
                Manufacturing progress depends on <i className="text-[#a34d20] font-serif">people & community.</i>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5c645f]">
                Technology changes manufacturing, but people make it work. Abed Textile proudly supports 8 core civic, educational,
                and healthcare institutions across Narsingdi and Shibpur.
              </p>
              <div className="mt-6">
                <LinkArrow href="#/leadership">Meet our leadership team</LinkArrow>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#a34d20]">Affiliated Social Organizations (Narsingdi)</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {csrInstitutions.map((inst, idx) => (
                  <div key={inst.name} className="rounded-xl border border-black/10 bg-white p-3.5 shadow-sm">
                    <span className="text-[10px] font-bold text-[#e86d2a]">0{idx + 1}</span>
                    <div className="font-bold text-xs text-[#182722] mt-0.5">{inst.name}</div>
                    <div className="text-[10px] text-[#5c645f]">{inst.category}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10 pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#a34d20] mb-3">Major Financial Banking Partners</div>
                <div className="flex flex-wrap gap-3">
                  {financialPartners.map((bank) => (
                    <span key={bank.name} className="rounded-full bg-[#efe9df] px-4 py-2 text-xs font-bold text-[#182722] border border-black/10">
                      {bank.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>
    </div>
  );
}
