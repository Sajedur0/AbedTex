import { ArrowUpRight } from 'lucide-react';
import { assets, type Img } from '../assets';
import { facts } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow, LinkArrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

interface UnitSection {
  n: string;
  title: string;
  banner: Img;
  desc: string;
  stats: { label: string; val: string }[];
  gallery: { img: Img; title: string }[];
}

export default function UnitsPage() {
  const { openLightbox } = useApp();

  const units: UnitSection[] = [
    {
      n: '01',
      title: 'Weaving Section',
      banner: assets.banners.weaving,
      desc: 'Our weaving division utilizes advanced high-speed automated looms with precision yarn alignment and tension control. We produce premium greige fabric including poplin, voile, twill and fine cotton tailored for sensitive printing and dyeing.',
      stats: [
        { label: 'Yarn Count Range', val: '20s – 100s' },
        { label: 'Weave Types', val: 'Plain, Twill, Dobby' },
      ],
      gallery: assets.weaving.map((img, i) => ({
        img,
        title: `Automated Weaving Loom ${String(i + 1).padStart(2, '0')}`,
      })),
    },
    {
      n: '02',
      title: 'Flat Bed Screen & Rotary Printing',
      banner: assets.banners.flatbed,
      desc: 'Automatic flat bed screen printing and continuous rotary printing lines deliver vibrant colors and sharp multi-color registration. Engineered for high-volume execution of Sarees, 3-Piece ladies wear and boutique prints with reactive and pigment colors.',
      stats: [
        { label: 'Color Capability', val: 'Up to 12 Colors' },
        { label: 'Screen Precision', val: '100% Brand-New' },
      ],
      gallery: [
        ...assets.flatbed.map((img, i) => ({
          img,
          title: `Automatic Flatbed Print Unit ${String(i + 1).padStart(2, '0')}`,
        })),
        {
          img: assets.flatbedPrinting,
          title: 'Flat Bed Precision Rotary Print Line',
        },
      ],
    },
    {
      n: '03',
      title: 'Digital Textile Printing',
      banner: assets.banners.digital,
      desc: 'Ultra high-definition direct-to-fabric digital printing wing offering unlimited color spectrums, photorealistic gradients, and rapid turnaround with zero screen preparation time. Ideal for designer Sharees and luxury 3-piece collections.',
      stats: [
        { label: 'Print Resolution', val: 'Up to 2400 DPI' },
        { label: 'Color Spectrum', val: '16.7M Colors' },
      ],
      gallery: assets.digital.map((img, i) => ({
        img,
        title: i < 2 ? `Digital Textile Printer ${i + 1}` : `Digital Fabric Print Sample 0${i - 1}`,
      })),
    },
    {
      n: '04',
      title: 'Dyeing & Pre-Treatment Section',
      banner: assets.banners.dyeing,
      desc: 'Equipped with 39+ specialized Jiggers (Cover, Mini, Jumbo), Pad Batch (CPP), Foot Dyer, and Clip & Roller Mercerizing ranges. Delivers deep color penetration, uniform shade consistency, and Grade 4–5 color fastness.',
      stats: [
        { label: 'Total Jiggers', val: '39 Units' },
        { label: 'Color Fastness', val: 'Grade 4 – 5' },
      ],
      gallery: [
        { img: assets.gallery[3].thumb, title: 'High Volume Dyeing Jiggers' },
        { img: assets.gallery[6].thumb, title: 'Continuous Washing Line' },
        { img: assets.gallery[8].thumb, title: 'Roller Mercerizing Setup' },
        { img: assets.gallery[22].thumb, title: 'Desizing & Scouring Range' },
        { img: assets.gallery[23].thumb, title: 'Continuous Bleaching Line' },
        { img: assets.gallery[26].thumb, title: 'Jigger Dyeing Batch Process' },
      ],
    },
    {
      n: '05',
      title: 'Finishing & Stenter Section',
      banner: assets.banners.finishing,
      desc: 'German-engineered Bruckner Stenters, Thermo Stenters, Finishing Calendars, Sharee Calendars, Super Wash, and Cylinder Dryers provide silky peach-skin touch, smooth hand-feel, and strict dimensional shrinkage control (<2%).',
      stats: [
        { label: 'Stenter Lines', val: '4 Advanced Lines' },
        { label: 'Shrinkage Control', val: '< 2%' },
      ],
      gallery: [
        { img: assets.gallery[4].thumb, title: 'Modern Stenter Heat Setting' },
        { img: assets.gallery[7].thumb, title: 'Calendar Glazing Machine' },
        { img: assets.gallery[10].thumb, title: 'Export Packaging & Baling' },
        { img: assets.gallery[24].thumb, title: 'Mercerizing Tension Control' },
        { img: assets.gallery[28].thumb, title: 'Stenter Frame Heat Setting' },
        { img: assets.gallery[30].thumb, title: 'Calender Glazing Finish' },
      ],
    },
  ];

  return (
    <div>
      <PageHero
        kicker="Production / Integrated manufacturing wings"
        title="One integrated process."
        intro="Weaving, printing, dyeing and finishing operate across a modern 1,53,372 square foot industrial facility in Ghoradia, Narsingdi."
      />

      {/* Overview Grid */}
      <section className="bg-[#182722] py-16 text-white lg:py-24">
        <Shell>
          <div className="mb-12">
            <Eyebrow light>Overview</Eyebrow>
            <h2 className="display text-4xl md:text-6xl">Production Units</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {units.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <article className="group flex flex-col justify-between border border-white/15 bg-white/5 p-6 transition duration-300 hover:border-[#ff9a55]/50">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SmartImg
                        img={u.banner}
                        alt={u.title}
                        sizes="(min-width:1024px) 30vw, (min-width:768px) 46vw, 100vw"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-[#f7f3eb] px-3 py-1 text-xs font-bold text-[#182722]">
                        {u.n}
                      </span>
                    </div>
                    <h3 className="display mt-6 text-2xl lg:text-3xl">{u.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-white/60 line-clamp-3">{u.desc}</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                    {u.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-[10px] uppercase tracking-wider text-white/45">{s.label}</div>
                        <div className="text-xs font-bold text-[#ff9a55]">{s.val}</div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* In-Depth Showcases with Section Galleries */}
      <section className="bg-[#f7f3eb] py-20 lg:py-28">
        <Shell className="space-y-24">
          {units.map((u) => {
            const lightboxItems = u.gallery.map((g) => ({
              src: g.img.full || g.img.src,
              title: `${u.title} — ${g.title}`,
              thumb: g.img,
            }));

            return (
              <div key={u.n} id={u.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-24">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#e86d2a]">Unit {u.n}</span>
                    <h2 className="display mt-2 text-4xl lg:text-5xl">{u.title}</h2>
                    <p className="mt-5 text-[15px] leading-7 text-[#555e59]">{u.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      {u.stats.map((s) => (
                        <div key={s.label} className="border-l-2 border-[#e86d2a] pl-4">
                          <div className="display text-2xl text-[#182722]">{s.val}</div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#737975]">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Machinery Photo Grid */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#737975]">
                        Floor & Machinery Gallery ({u.gallery.length} photos)
                      </span>
                      <span className="text-[11px] text-[#737975]">Click to enlarge</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {u.gallery.map((g, idx) => (
                        <Reveal key={g.title} delay={idx * 50}>
                          <button
                            onClick={() => openLightbox(lightboxItems, idx)}
                            className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#182722] text-left shadow-sm"
                          >
                            <SmartImg
                              img={g.img}
                              alt={g.title}
                              sizes="(min-width:1024px) 18vw, (min-width:640px) 28vw, 45vw"
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                            <span className="absolute bottom-2 left-2 right-2 truncate text-[10px] font-medium text-white opacity-0 transition group-hover:opacity-100">
                              {g.title}
                            </span>
                            <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-[#182722] opacity-0 shadow-md transition group-hover:opacity-100">
                              <ArrowUpRight size={13} />
                            </span>
                          </button>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-16 h-px bg-black/10" />
              </div>
            );
          })}
        </Shell>
      </section>

      {/* ETP Section */}
      <section className="bg-[#efe9df]">
        <Shell className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <div className="relative">
              <SmartImg
                img={assets.about}
                alt="Effluent treatment facility"
                sizes="(min-width:1024px) 46vw, 100vw"
                className="aspect-[4/3] w-full object-cover shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-[#e86d2a] p-7 text-white">
                <div className="display text-4xl">{facts.etp}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest">Treatment capacity</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="lg:pl-10">
              <Eyebrow>Effluent Treatment Plant</Eyebrow>
              <h2 className="display text-5xl leading-[.95] md:text-7xl">
                A cleaner process,
                <br />
                <i className="text-[#bc591f]">by design.</i>
              </h2>
              <p className="mt-7 text-[15px] leading-8 text-[#555e59]">
                The biochemical ETP occupies about {facts.etpArea}. It was built for efficient task management and
                long-term use, with modern machinery imported brand-new from Ecotex Pte Ltd., Singapore.
              </p>
              <div className="mt-8 flex gap-4">
                <LinkArrow href="#/compliance">Explore compliance</LinkArrow>
                <LinkArrow href="#/gallery">View ETP photos</LinkArrow>
              </div>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* Utilization stats */}
      <section className="bg-[#f7f3eb]">
        <Shell className="py-16">
          <div className="grid gap-8 border-y border-black/15 py-9 sm:grid-cols-3">
            {[
              ['60–90 days', 'New orders'],
              ['30–45 days', 'Repeat orders'],
              [facts.utilization, 'Current utilization'],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="display text-4xl">{v}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#737975]">{l}</div>
              </div>
            ))}
          </div>
        </Shell>
      </section>
    </div>
  );
}
