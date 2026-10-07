import { ArrowUpRight, CheckCircle2, Shield, HeartHandshake, Lightbulb, Target, BookOpen, Compass } from 'lucide-react';
import { assets } from '../assets';
import { journeyMilestones, coreValues, codeOfConduct } from '../profile';
import { useApp } from '../App';
import { Eyebrow, PageHero, Shell, LinkArrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const valueIcons = [Shield, CheckCircle2, Lightbulb, Target, HeartHandshake, BookOpen];

export default function AboutPage() {
  const { openLightbox } = useApp();

  const galleryItems = [
    { src: assets.heroMill.src, title: 'Abed Textile Processing Mills, Narsingdi', cat: 'Mill' },
    { src: assets.weaving.loomShed.src, title: 'Automated Loom Shed Floor', cat: 'Weaving' },
    { src: assets.technology.singlePass.src, title: 'Single-Pass Digital Production Line', cat: 'Digital' },
    { src: assets.sustainability.etpAeration.src, title: 'Biological ETP Aeration Facility', cat: 'ETP' },
  ];

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Company Profile / Since Early 1990s"
        title="Built on experience. Driven by progress."
        intro="For more than three decades, Abed Textile Processing Mills Limited has grown alongside Bangladesh's textile industry into an integrated manufacturing and digital printing powerhouse."
      />

      {/* Snapshot Narrative (Page 2) */}
      <section className="bg-[#f7f3eb] py-20 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="space-y-6">
                <Eyebrow>Company Snapshot</Eyebrow>
                <h2 className="display text-4xl leading-tight md:text-6xl">
                  From local textile base to <i className="text-[#a34d20] font-serif">digital excellence.</i>
                </h2>
                <p className="text-base leading-relaxed text-[#5c645f]">
                  Established in Narsingdi in the early 1990s, the company evolved from local textile manufacturing into an integrated
                  operation covering weaving, dyeing, printing, washing, finishing and digital textile printing — with 18,000 workforce.
                </p>
                <p className="text-base leading-relaxed text-[#5c645f]">
                  Today, Abed Textile combines established manufacturing knowledge with advanced digital printing technology and
                  continued investment in technical capability. The direction remains clear: strengthen local manufacturing, respond
                  faster to changing markets, and build for the next generation of textile production.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['1990s', 'Established', 'Over 3 decades of manufacturing'],
                  ['Haji Abed Ali Miah', 'Founder', 'Visionary industrial pioneer'],
                  ['Ghoradia, Narsingdi', 'Manufacturing Base', 'Integrated industrial plant'],
                  ['Textile Processing', 'Core Business', 'Weaving, Dyeing, Print, Finish'],
                  ['120,000 m/day', 'Printing Capacity', 'Single-pass & industrial fleet'],
                  ['18,000', 'Workforce', 'Engineers, technicians & staff'],
                ].map(([v, l, s]) => (
                  <div key={l} className="rounded-2xl border border-black/10 bg-[#efe9df] p-5 shadow-sm">
                    <div className="text-xl lg:text-2xl font-black text-[#182722]">{v}</div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#a34d20]">{l}</div>
                    <div className="mt-1 text-[10px] text-[#5c645f]">{s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* The Founder (Page 4) */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
            <Reveal>
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <SmartImg
                  img={assets.leaders.abedAli}
                  alt="Haji Abed Ali Miah, Founder"
                  sizes="(min-width:1024px) 35vw, 100vw"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#ff9a55]">The Founder</div>
                  <h3 className="display text-2xl font-bold">Haji Abed Ali Miah</h3>
                  <p className="text-xs text-white/70">Founder & Visionary Pioneer</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6">
                <Eyebrow light>A Legacy Built on Manufacturing</Eyebrow>
                <h2 className="display text-4xl leading-tight md:text-6xl text-white">
                  The Founder's <i className="text-[#ff9a55] font-serif">Vision.</i>
                </h2>
                <blockquote className="border-l-2 border-[#ff9a55] pl-6 text-lg italic leading-relaxed text-white/90">
                  “Abed Textile began with the vision of Haji Abed Ali Miah in Narsingdi in the early 1990s. At a time when Bangladesh
                  was developing its domestic textile base, he focused on building local manufacturing capability. That foundation later
                  expanded into a broader textile processing operation and, eventually, advanced digital textile printing.”
                </blockquote>

                <div className="pt-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#ff9a55] mb-4">Founder Philosophy</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      ['Produce locally.', 'Deep conviction in indigenous industrial capability.'],
                      ['Build capability.', 'Continual investment in equipment and skilled manpower.'],
                      ['Invest for future.', 'Pioneering early digital adoption before others.'],
                    ].map(([ph, exp]) => (
                      <div key={ph} className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <div className="text-sm font-bold text-white text-[#ff9a55]">{ph}</div>
                        <div className="mt-1 text-xs text-white/60">{exp}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <LinkArrow href="#/leadership" light>
                    Learn about current Board of Directors & Chairman
                  </LinkArrow>
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* Our Journey (Page 3) */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <Reveal>
            <div className="max-w-3xl mb-16">
              <Eyebrow>Our Journey</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">
                From local manufacturing to <i className="text-[#a34d20] font-serif">digital textile technology.</i>
              </h2>
              <p className="mt-4 text-base text-[#5c645f]">
                Over three decades of deliberate steps, investing in progressive technologies, skilled people, and integrated infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="relative border-l-2 border-[#a34d20]/30 pl-6 sm:pl-10 space-y-12">
            {journeyMilestones.map((m, i) => (
              <Reveal key={m.era} delay={i * 70}>
                <div className="relative group">
                  <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#a34d20] bg-white group-hover:bg-[#a34d20] transition" />
                  <div className="inline-block rounded bg-[#a34d20]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a34d20] mb-2">
                    {m.era}
                  </div>
                  <h3 className="display text-2xl font-bold text-[#182722]">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c645f] max-w-2xl">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Vision, Mission & Values (Page 5) */}
      <section className="bg-[#f7f3eb] py-20 lg:py-28 border-t border-black/10">
        <Shell>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Eyebrow>Principles & Purpose</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">
                Clear principles for growth & <i className="text-[#a34d20] font-serif">responsible conduct.</i>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <Reveal>
              <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a34d20] mb-3">
                    <Compass size={16} />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="display text-3xl font-bold mb-4">Leading with innovation and responsible production.</h3>
                  <p className="text-base leading-relaxed text-[#5c645f]">
                    To build a progressive textile manufacturing enterprise that combines industry experience, advanced technology,
                    responsible production and consistent quality for evolving customer and market needs.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a34d20] mb-3">
                    <Target size={16} />
                    <span>Our Mission</span>
                  </div>
                  <h3 className="display text-3xl font-bold mb-4">Five core commitments.</h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-[#5c645f]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e86d2a] font-bold">1.</span> Deliver reliable textile manufacturing and processing.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e86d2a] font-bold">2.</span> Strengthen technical and production capabilities.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e86d2a] font-bold">3.</span> Adopt technologies that improve efficiency and flexibility.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e86d2a] font-bold">4.</span> Develop people, knowledge and responsible resource management.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e86d2a] font-bold">5.</span> Create long-term value for customers and stakeholders.
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 6 Core Values */}
          <div className="mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#a34d20] mb-6">Our 6 Core Values</div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((val, idx) => {
                const IconComponent = valueIcons[idx] || Shield;
                return (
                  <Reveal key={val.title} delay={idx * 60}>
                    <div className="rounded-xl border border-black/10 bg-[#efe9df] p-6 shadow-sm hover:shadow transition">
                      <div className="h-10 w-10 rounded-lg bg-[#a34d20]/15 text-[#a34d20] flex items-center justify-center mb-4">
                        <IconComponent size={20} />
                      </div>
                      <h4 className="display text-xl font-bold text-[#182722]">{val.title}</h4>
                      <p className="mt-2 text-xs text-[#5c645f] leading-relaxed">{val.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="rounded-2xl border border-black/10 bg-[#182722] p-8 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ff9a55] mb-4">Our Code of Conduct</div>
            <p className="text-sm text-white/70 mb-6">
              Every employee, partner, and vendor in our operations aligns with these essential behavioral and ethical pillars:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {codeOfConduct.map((item, idx) => (
                <div key={item} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                  <span className="text-[#ff9a55] text-[10px]">0{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Facility Visuals & Lightbox */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Industrial Infrastructure</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">Inside the Ghoradia Mills</h2>
              <p className="mt-2 text-sm text-[#5c645f]">
                Integrated factory grounds spanning purpose-built production halls, biological ETP, and power backup.
              </p>
            </div>
            <LinkArrow href="#/gallery">Open full gallery ({assets.gallery.length} photos)</LinkArrow>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 80}>
                <button
                  onClick={() => openLightbox(galleryItems, idx)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-[#182722] text-left shadow"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded bg-[#e86d2a] px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                      {item.cat}
                    </span>
                    <div className="mt-1 font-bold text-xs text-white line-clamp-1">{item.title}</div>
                  </div>
                  <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white text-[#182722] opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>
    </div>
  );
}
