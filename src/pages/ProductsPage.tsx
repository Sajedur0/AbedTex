import { ArrowUpRight, Check } from 'lucide-react';
import { assets } from '../assets';
import { productSegments, servicesList } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const printLibrary = [
  {
    title: 'Digital Floral Bloom Haute Collection',
    category: 'Digital Print',
    desc: 'High-definition single-pass reactive digital print with photorealistic color transitions on fine cotton voile.',
    img: assets.products.digitalPrint1,
  },
  {
    title: 'Royal Ethnic Paisley & Geometric Pattern',
    category: 'Digital Print',
    desc: 'Intricate vector linework and intense multi-hue depth engineered for boutique three-piece dress collections.',
    img: assets.products.digitalPrint2,
  },
  {
    title: 'Contemporary Botanical Fusion Motif',
    category: 'Digital Print',
    desc: 'Subtle gradient washes, sharp micro-motifs, and excellent light-fastness on premium woven poplin.',
    img: assets.products.digitalPrint3,
  },
  {
    title: 'Modern Abstract Brushstroke Design',
    category: 'Digital Print',
    desc: 'Artistic multi-tonal print utilizing wide color gamut inks with soft hand-feel finishing.',
    img: assets.products.digitalPrint4,
  },
  {
    title: 'Heritage Traditional Festive Ornamental',
    category: 'Digital Print',
    desc: 'Dense ornamentation with sharp boundary registration on 100% combed cotton fabric.',
    img: assets.products.digitalPrint5,
  },
  {
    title: 'Vibrant Designer Sharee All-Over Motif',
    category: 'Digital Print',
    desc: 'Full-bleed continuous digital artwork with exceptional wash and rubbing fastness.',
    img: assets.products.digitalPrint6,
  },
  {
    title: 'Solid Dyed Poplin & Voile Fabric Range',
    category: 'Dyed Woven',
    desc: 'Level reactive coloration across delicate pastels, high-visibility brights, and deep navy/black shades.',
    img: assets.products.dyedFabrics,
  },
  {
    title: 'Conventionally Printed Floral Fabrics',
    category: 'Conventional Print',
    desc: 'Precision rotary screen and serbo flatbed continuous printing for high-volume retail programs.',
    img: assets.products.printedFabrics,
  },
];

export default function ProductsPage() {
  const { openLightbox } = useApp();

  const lightboxItems = printLibrary.map((item) => ({
    src: item.img.full || item.img.src,
    title: item.title,
    thumb: item.img,
  }));

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Products & Services / Diverse Capabilities"
        title="Flexible processing for diverse textile requirements."
        intro="Abed Textile supports customers through integrated processing and agile digital printing. Our production platform handles dyed, printed, and finished woven fabrics according to required fiber composition, construction, design, and end-use specifications."
      />

      {/* 5 Product Segments (Page 11) */}
      <section className="py-20 lg:py-28">
        <Shell>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Product Segments</Eyebrow>
            <h2 className="display text-4xl md:text-6xl">Engineered for Performance & Aesthetics</h2>
            <p className="mt-3 text-base text-[#5c645f]">
              Processed under calibrated laboratory standards to achieve exceptional hand-feel, shade consistency, and durability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productSegments.map((prod, idx) => (
              <Reveal key={prod.name} delay={idx * 70}>
                <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm hover:shadow transition flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#a34d20]">Segment 0{idx + 1}</span>
                      <span className="h-2 w-2 rounded-full bg-[#e86d2a]" />
                    </div>
                    <h3 className="display text-2xl font-bold mb-3">{prod.name}</h3>
                    <p className="text-xs text-[#5c645f] leading-relaxed mb-4">{prod.desc}</p>
                  </div>
                  <div className="border-t border-black/10 pt-4 text-[11px] font-bold text-[#a34d20]">
                    {prod.specs}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Print & Pattern Library */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
            <div>
              <Eyebrow light>Pattern & Print Showcase</Eyebrow>
              <h2 className="display text-4xl md:text-6xl text-white">
                Ultra-HD <i className="text-[#ff9a55] font-serif">Print Library.</i>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                Click any print to inspect high-definition single-pass detail, photographic color transitions, and precision
                registration in the fullscreen viewer.
              </p>
            </div>
            <div className="text-xs text-[#ff9a55] font-semibold">
              Showing 8 signature print collections
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {printLibrary.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60}>
                <button
                  onClick={() => openLightbox(lightboxItems, idx)}
                  className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-[#101b18] p-5 text-left transition duration-300 hover:border-[#ff9a55]"
                >
                  <SmartImg
                    img={item.img}
                    alt={item.title}
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 45vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="rounded bg-[#ff9a55] px-2.5 py-0.5 text-[9px] font-bold uppercase text-[#182722]">
                      {item.category}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-white line-clamp-1">{item.title}</h4>
                    <p className="mt-1 text-xs text-white/70 line-clamp-2 leading-snug">{item.desc}</p>
                  </div>
                  <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white text-[#182722] opacity-0 shadow-lg transition group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* 6 Technical Services (Page 11) */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Comprehensive Technical Services</Eyebrow>
            <h2 className="display text-4xl md:text-6xl">
              From initial shade matching to <i className="text-[#a34d20] font-serif">finished fabric.</i>
            </h2>
            <p className="mt-3 text-base text-[#5c645f]">
              We collaborate with buyers, designers, and garment manufacturers to ensure fast prototyping and flawless bulk delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 60}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow transition h-full flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-[#a34d20]/10 text-[#a34d20] flex items-center justify-center font-bold text-sm mb-4">
                      0{i + 1}
                    </div>
                    <h3 className="display text-xl font-bold mb-2">{svc.title}</h3>
                    <p className="text-xs text-[#5c645f] leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-2 text-[11px] font-bold text-[#e86d2a]">
                    <Check size={14} /> Fully integrated service
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-[#182722] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#ff9a55]">Custom Developments</div>
              <h3 className="display text-2xl font-bold mt-1">Need a specialized fabric construction or exclusive print?</h3>
              <p className="text-xs text-white/70 mt-1">Our technical development lab provides rapid lab dips and sample strike-offs.</p>
            </div>
            <a
              href="/contact"
              className="shrink-0 rounded-full bg-[#e86d2a] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#c95820]"
            >
              Request Fabric Samples
            </a>
          </div>
        </Shell>
      </section>
    </div>
  );
}
