import { ArrowUpRight } from 'lucide-react';
import { assets, type Img } from '../assets';
import { customers, products } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow, LinkArrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const imagery: Img[] = [
  assets.gallery[14].thumb, // Shari
  assets.banners.weaving,    // Poplin
  assets.banners.flatbed,    // Voile
  assets.banners.dyeing,     // Lillian
  assets.flatbedPrinting,    // All Kinds of Print
  assets.digital[2],         // Ladies Fancy Print
];

const fabricPrints: { title: string; category: string; img: Img }[] = [
  { title: 'Digital Ethnic Bloom Collection', category: 'Digital Print', img: assets.digital[2] },
  { title: 'Royal Motif Voile Print', category: 'Digital Print', img: assets.digital[3] },
  { title: 'Heritage Paisley Ladies Print', category: 'Digital Print', img: assets.digital[4] },
  { title: 'Lustrous Floral Georgette', category: 'Digital Print', img: assets.digital[5] },
  { title: 'Contemporary Abstract Print', category: 'Digital Print', img: assets.digital[6] },
  { title: 'Vibrant Designer 3-Pcs Print', category: 'Digital Print', img: assets.digital[7] },
  { title: 'Automatic Flatbed Rotary Pattern', category: 'Flatbed Screen', img: assets.flatbedPrinting },
  { title: 'Finished Shari & 3-Pcs Output', category: 'Production Output', img: assets.gallery[14].thumb },
];

export default function ProductsPage() {
  const { openLightbox } = useApp();

  const printLightboxItems = fabricPrints.map((p) => ({
    src: p.img.full || p.img.src,
    title: `${p.category} — ${p.title}`,
    thumb: p.img,
  }));

  return (
    <div>
      <PageHero
        kicker="Product range / Six categories"
        title="Fabric with a purpose."
        intro="Our core business manufactures Shari, 3 Pcs, Poplin, Voile, Knit Fabrics and Ladies Fancy Print, with full flatbed screen, rotary and digital printing capability."
      />

      {/* 6 Core Categories */}
      <section className="bg-[#182722] text-white">
        <Shell className="py-16 lg:py-24">
          <div className="mb-10">
            <Eyebrow light>Categories</Eyebrow>
            <h2 className="display text-4xl md:text-6xl">Core Product Range</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <article className="group relative aspect-[4/3] overflow-hidden bg-[#263a33]">
                  <SmartImg
                    img={imagery[i]}
                    alt={p}
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 100vw"
                    className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101b18] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[10px] font-bold text-[#ff9a55]">0{i + 1}</span>
                    <h3 className="display mt-2 text-3xl md:text-4xl">{p}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Fabric & Print Showcase (Digital Print & Flatbed Print assets) */}
      <section className="bg-[#f7f3eb] py-20 lg:py-28">
        <Shell>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Fabric Showcase</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">Print & Pattern Library</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c645f]">
                High-definition digital prints and automated flatbed screen outputs crafted for premium Sharis, Three-Piece suits, and ladies boutique fashion.
              </p>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#7a7f7c]">
              Click any fabric to view in full resolution
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fabricPrints.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 60}>
                <button
                  onClick={() => openLightbox(printLightboxItems, idx)}
                  className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-xl bg-[#182722] p-5 text-left shadow-md transition duration-500 hover:shadow-xl"
                >
                  <SmartImg
                    img={p.img}
                    alt={p.title}
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="relative z-10">
                    <span className="rounded-full bg-[#ff9a55]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ff9a55] border border-[#ff9a55]/30">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-white leading-snug">{p.title}</h3>
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

      {/* Lead Time & Approach */}
      <section className="bg-[#efe9df]">
        <Shell className="grid gap-14 py-20 lg:grid-cols-[.7fr_1.3fr] lg:py-28">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="display text-5xl leading-[.95] md:text-7xl">
              Customer needs,
              <br />
              <i className="text-[#bc591f]">first.</i>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#5d6560]">
              We pursue high standards through closer relationships with business partners, innovative manufacturing processes, and dependable customer service.
            </p>
            <div className="mt-8">
              <LinkArrow href="#/contact">Discuss an order</LinkArrow>
            </div>
          </div>
          <div className="border-t border-black/15">
            {[
              ['Minimum production lead time', '60 days'],
              ['Maximum production lead time', '90 days'],
              ['Repeat order lead time', '30–45 days'],
            ].map(([l, v]) => (
              <div className="flex items-end justify-between border-b border-black/15 py-7" key={l}>
                <span className="text-sm font-bold">{l}</span>
                <span className="display text-3xl text-[#bc591f] md:text-5xl">{v}</span>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* Customers */}
      <section className="bg-[#f7f3eb]">
        <Shell className="py-20">
          <Eyebrow>Customers</Eyebrow>
          <div className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {customers.map((c) => (
              <div className="bg-[#f7f3eb] p-7 text-lg font-bold" key={c}>
                {c}
              </div>
            ))}
          </div>
        </Shell>
      </section>
    </div>
  );
}
