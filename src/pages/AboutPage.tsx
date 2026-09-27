import { ArrowUpRight } from 'lucide-react';
import { assets } from '../assets';
import { facts, values } from '../profile';
import { useApp } from '../App';
import { Eyebrow, PageHero, Shell, LinkArrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const facilityHighlights = [
  { img: assets.gallery[11].thumb, title: 'Factory Campus & Infrastructure', cat: 'Facility' },
  { img: assets.gallery[12].thumb, title: '2400 m³/day Biochemical ETP Plant', cat: 'Environment' },
  { img: assets.gallery[20].thumb, title: 'Modern Industrial Loom Shed', cat: 'Production' },
  { img: assets.gallery[13].thumb, title: 'Worker Safety & Training Zone', cat: 'Compliance' },
];

export default function AboutPage() {
  const { openLightbox } = useApp();

  const lightboxItems = facilityHighlights.map((f) => ({
    src: f.img.full || f.img.src,
    title: f.title,
    thumb: f.img,
  }));

  return (
    <div>
      <PageHero
        kicker="Company / Since 1993"
        title="Built on commitment."
        intro="We focus on quality merchandising, product quality, timed delivery, high standards of compliance and dedicated customer service."
      />

      {/* Story */}
      <section className="bg-[#f7f3eb]">
        <Shell className="grid gap-14 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="display text-5xl leading-[.95] md:text-7xl">
                From Narsingdi,
                <br />
                <i className="text-[#bc591f]">looking outward.</i>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-6 text-[15px] leading-8 text-[#555e59]">
              <p>
                Abed Textile Processing Mills Ltd. was established and began commercial production in 1993. The company
                operates in one of Bangladesh’s important industrial areas, while its Corporate Office is located in Dhaka.
              </p>
              <p>
                As the business expands globally, we remain fully committed to current clients. We continuously seek
                long-term, mutually beneficial relationships while improving the efficiency and sustainability of our
                services.
              </p>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* Numerical Facts */}
      <section className="bg-[#182722] text-white">
        <Shell className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [facts.floor, 'square feet'],
            [facts.machines, 'machineries'],
            [facts.workforce, 'employees'],
            [facts.capacity, 'yards / month'],
          ].map(([v, l]) => (
            <div key={l} className="border border-white/15 p-7">
              <div className="display text-4xl text-[#ff9a55]">{v}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[.16em] text-white/50">{l}</div>
            </div>
          ))}
        </Shell>
      </section>

      {/* Vision & Mission with Facility Photo */}
      <section className="bg-[#efe9df]">
        <Shell className="grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal className="relative h-full min-h-[420px]">
            <SmartImg
              img={assets.about}
              alt="Abed Textile facility"
              sizes="(min-width:1024px) 46vw, 100vw"
              className="h-full min-h-[420px] w-full object-cover shadow-lg"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#f7f3eb] p-8 md:p-12 shadow-sm">
              <Eyebrow>Vision</Eyebrow>
              <h2 className="display text-4xl leading-tight md:text-6xl">
                To become a market leader through productivity, innovation and absolute customer satisfaction.
              </h2>
              <div className="my-10 h-px bg-black/15" />
              <Eyebrow>Mission</Eyebrow>
              <ul className="space-y-5 text-sm leading-7 text-[#555e59]">
                <li>Manufacture high-standard Shari, 3 Pcs, Poplin, Voile, Knit Fabrics and Ladies Print.</li>
                <li>Become a leading provider to international specialty retailers.</li>
                <li>
                  Meet changing market needs through close partnerships, innovative processes and standard customer
                  service.
                </li>
              </ul>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* Facility Highlights Showcase */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow light>Infrastructure</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">Inside the Facility</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                1,53,372 sq. ft. of purpose-built production floors, clean utilities, and biological effluent treatment.
              </p>
            </div>
            <LinkArrow href="#/gallery" light>
              View all 39 gallery photos
            </LinkArrow>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((f, idx) => (
              <Reveal key={f.title} delay={idx * 80}>
                <button
                  onClick={() => openLightbox(lightboxItems, idx)}
                  className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden border border-white/10 bg-[#263a33] p-5 text-left transition duration-300 hover:border-[#ff9a55]/60"
                >
                  <SmartImg
                    img={f.img}
                    alt={f.title}
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="relative z-10">
                    <span className="rounded-full bg-[#ff9a55]/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ff9a55] border border-[#ff9a55]/30">
                      {f.cat}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-white leading-snug">{f.title}</h3>
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

      {/* Values */}
      <section className="bg-[#f7f3eb]">
        <Shell className="py-20 lg:py-28">
          <Eyebrow>Six values</Eyebrow>
          <div className="border-t border-black/15">
            {values.map((v, i) => (
              <Reveal key={v} delay={i * 50}>
                <div className="grid gap-3 border-b border-black/15 py-6 md:grid-cols-[100px_1fr]">
                  <span className="text-xs font-bold text-[#e86d2a]">0{i + 1}</span>
                  <h3 className="display text-3xl md:text-5xl">{v}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#626965]">
            All modern machinery is imported brand-new from Japan, India, China and Taiwan.
          </p>
        </Shell>
      </section>
    </div>
  );
}
