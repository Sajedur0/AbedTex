import { useDeferredValue, useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { assets, type Img } from '../assets';
import { facts, machinery } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

interface MachineHighlight {
  name: string;
  category: string;
  img: Img;
}

const machineHighlights: MachineHighlight[] = [
  { name: 'High-Speed Automated Weaving Loom', category: 'Weaving', img: assets.weaving[0] },
  { name: 'Precision Yarn Loom Setup', category: 'Weaving', img: assets.weaving[1] },
  { name: 'Multi-Color Flat Bed Screen Printing Line', category: 'Printing', img: assets.flatbed[0] },
  { name: 'Automatic Flatbed Rotary Print System', category: 'Printing', img: assets.flatbed[1] },
  { name: 'High-Resolution Digital Textile Printer', category: 'Printing', img: assets.digital[0] },
  { name: 'High Volume Dyeing Jigger Line', category: 'Dyeing', img: assets.gallery[3].thumb },
  { name: 'Modern Bruckner Stenter Heat Setting', category: 'Finishing', img: assets.gallery[4].thumb },
  { name: 'Heavy Calendar Glazing Finishing Machine', category: 'Finishing', img: assets.gallery[7].thumb },
  { name: 'Continuous Fabric Washing Range', category: 'Dyeing', img: assets.gallery[6].thumb },
  { name: 'Roller Mercerizing Setup', category: 'Dyeing', img: assets.gallery[8].thumb },
  { name: 'Precision Inspection & Rolling Station', category: 'Quality', img: assets.gallery[31].thumb },
  { name: 'Automatic Bale Press Packaging Unit', category: 'Packaging', img: assets.gallery[32].thumb },
];

export default function MachineryPage() {
  const [q, setQ] = useState('');
  const { openLightbox } = useApp();

  // Keeps typing responsive: the (heavier) list re-render can lag a frame behind the keystroke.
  const deferredQ = useDeferredValue(q);
  const filtered = useMemo(() => {
    const needle = deferredQ.trim().toLowerCase();
    return needle ? machinery.filter(([n]) => n.toLowerCase().includes(needle)) : machinery;
  }, [deferredQ]);

  const highlightLightboxItems = machineHighlights.map((m) => ({
    src: m.img.full || m.img.src,
    title: `${m.category} — ${m.name}`,
    thumb: m.img,
  }));

  return (
    <div>
      <PageHero
        kicker="Machinery / 24 types"
        title="The production floor."
        intro="A total of 72 production machineries. Modern units were imported brand-new from Japan, India, China and Taiwan."
      />

      {/* Machinery Search & Specs List */}
      <section className="bg-[#f7f3eb]">
        <Shell className="py-14 lg:py-20">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_320px] md:items-end">
            <div>
              <span className="display text-6xl text-[#e86d2a]">{facts.machines}</span>
              <span className="ml-4 text-xs font-bold uppercase tracking-widest text-[#737975]">Total pieces</span>
            </div>
            <label className="flex items-center gap-3 border-b border-black/30 py-3">
              <Search size={17} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search equipment"
                aria-label="Search equipment"
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>
          </div>

          <div className="border-t-2 border-[#182722]">
            {filtered.map(([name, count], i) => (
              <div
                key={name}
                className="group grid grid-cols-[45px_1fr_70px] items-center border-b border-black/15 py-5 md:grid-cols-[100px_1fr_140px]"
              >
                <span className="text-[10px] font-bold text-[#a0a39f]">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-lg font-bold transition group-hover:translate-x-2 md:text-2xl">{name}</h2>
                <div className="text-right">
                  <span className="display text-3xl text-[#bc591f]">{count}</span>
                  <span className="ml-2 text-[10px] uppercase text-[#737975]">pcs</span>
                </div>
              </div>
            ))}
          </div>
          {!filtered.length && (
            <p className="py-16 text-center text-sm text-[#737975]">No machinery matches your search.</p>
          )}
        </Shell>
      </section>

      {/* Visual Machinery Photo Gallery */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow light>Floor Visuals</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">Machinery in Operation</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                Photographs from our weaving floor, automated printing lines, jigger dyehouses, and finishing ranges.
              </p>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/50">
              Click any machine to inspect
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {machineHighlights.map((m, idx) => (
              <Reveal key={m.name} delay={(idx % 4) * 60}>
                <button
                  onClick={() => openLightbox(highlightLightboxItems, idx)}
                  className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden border border-white/10 bg-[#263a33] p-4 text-left shadow-sm transition duration-300 hover:border-[#ff9a55]/60"
                >
                  <SmartImg
                    img={m.img}
                    alt={m.name}
                    sizes="(min-width:1280px) 22vw, (min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <span className="rounded-full bg-[#ff9a55]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ff9a55] border border-[#ff9a55]/30">
                      {m.category}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-white leading-snug line-clamp-2">{m.name}</h3>
                  </div>
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white text-[#182722] opacity-0 shadow-md transition group-hover:opacity-100">
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
