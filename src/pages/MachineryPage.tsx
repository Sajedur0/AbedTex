import { useState, useMemo } from 'react';
import { Search, ArrowUpRight, Filter, CheckCircle2 } from 'lucide-react';
import { assets } from '../assets';
import { machineryTable } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow, LinkArrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const stages = ['All', 'Weaving', 'Pretreatment', 'Dyeing', 'Printing', 'Finishing'] as const;

const machineGallery = [
  { name: 'Single-Pass Industrial Digital Printer', stage: 'Printing', img: assets.machinery.digitalSinglePass },
  { name: 'Covered & Jumbo Dyeing Jiggers Battery', stage: 'Dyeing', img: assets.machinery.dyeingJiggers },
  { name: 'Multi-Chamber Bruckner Stenter Frame', stage: 'Finishing', img: assets.machinery.stenterFrame },
  { name: 'Hydraulic Calender Glazing Unit', stage: 'Finishing', img: assets.machinery.calenderMachine },
  { name: 'Cold Pad Batch (CPB) Coloration Range', stage: 'Dyeing', img: assets.machinery.coldPadBatch },
  { name: 'Clip & Roller Mercerizing Tension Range', stage: 'Pretreatment', img: assets.machinery.mercerizingRange },
  { name: 'High-Speed Automated Weaving Looms', stage: 'Weaving', img: assets.banners.weaving },
  { name: 'Precision Greige Fabric Light-Table Station', stage: 'Weaving', img: assets.machinery.fabricInspection },
];

export default function MachineryPage() {
  const { openLightbox } = useApp();
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMachinery = useMemo(() => {
    return machineryTable.filter((item) => {
      const matchStage = selectedStage === 'All' || item.stage === selectedStage;
      const matchSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stage.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStage && matchSearch;
    });
  }, [selectedStage, searchQuery]);

  const totalUnits = useMemo(() => {
    return filteredMachinery.reduce((acc, curr) => acc + curr.qty, 0);
  }, [filteredMachinery]);

  const lightboxItems = machineGallery.map((m) => ({
    src: m.img.full || m.img.src,
    title: m.name,
    thumb: m.img,
  }));

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Production Technology / Major Machinery"
        title="The machinery behind the process."
        intro="Principal machinery categories supporting weaving, pretreatment, dyeing, printing, and finishing at our Ghoradia, Narsingdi facility — engineered for high speed, design flexibility, and consistent execution."
      />

      {/* Summary KPI Strip */}
      <section className="bg-[#182722] text-white py-10 border-y border-white/10">
        <Shell>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['89+ Units', 'Total Major Machines', '10 Principal categories'],
              ['35 Jiggers', 'Dyeing Capacity', 'Single, double, jumbo & covered'],
              ['8 Digital Units', 'High-Speed Fleet', 'Single-pass Atexco, VEGA & RBR'],
              ['32 Looms', 'Weaving Capacity', 'Continuous greige formation'],
            ].map(([val, label, sub]) => (
              <div key={label} className="p-3">
                <div className="display text-2xl lg:text-3xl font-black text-[#ff9a55]">{val}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">{label}</div>
                <div className="text-[10px] text-white/50">{sub}</div>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* Machinery Table Section (Page 13) */}
      <section className="py-20 lg:py-28">
        <Shell>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Official Inventory</Eyebrow>
              <h2 className="display text-3xl md:text-5xl">Major Machinery & Quantities</h2>
              <p className="mt-2 text-sm text-[#5c645f]">
                Verified operational list directly extracted from the corporate profile documentation.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
                <input
                  type="text"
                  placeholder="Search machine or stage..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 rounded-full border border-black/15 bg-white py-2 pl-9 pr-4 text-xs font-medium focus:border-[#e86d2a] focus:outline-none shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Stage Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a34d20] mr-2 flex items-center gap-1">
              <Filter size={14} /> Stage:
            </span>
            {stages.map((stage) => (
              <button
                key={stage}
                onClick={() => setSelectedStage(stage)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  selectedStage === stage
                    ? 'bg-[#182722] text-white shadow'
                    : 'bg-[#efe9df] text-[#182722] hover:bg-[#e4ddcf]'
                }`}
              >
                {stage}
              </button>
            ))}
            <span className="ml-auto text-xs font-bold text-[#5c645f]">
              Showing {filteredMachinery.length} categories ({totalUnits} units)
            </span>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-black/10 bg-[#efe9df] text-[11px] font-bold uppercase tracking-wider text-[#182722]">
                  <tr>
                    <th className="py-4 px-6 w-16">No.</th>
                    <th className="py-4 px-6 w-36">Stage</th>
                    <th className="py-4 px-6">Machine Category & Specification</th>
                    <th className="py-4 px-6 w-32 text-right">Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#182722]">
                  {filteredMachinery.map((m) => (
                    <tr key={m.id} className="hover:bg-[#fbf8f2] transition">
                      <td className="py-5 px-6 font-mono font-bold text-xs text-[#a34d20]">{m.id}</td>
                      <td className="py-5 px-6">
                        <span className="rounded-full bg-[#182722]/5 px-3 py-1 text-[11px] font-bold text-[#182722]">
                          {m.stage}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="font-bold text-base text-[#182722]">{m.name}</div>
                        <div className="text-xs text-[#5c645f] mt-1 leading-relaxed">{m.description}</div>
                        {m.highlight && (
                          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#e86d2a]">
                            <CheckCircle2 size={13} /> {m.highlight}
                          </div>
                        )}
                      </td>
                      <td className="py-5 px-6 text-right">
                        <span className="display text-2xl font-black text-[#182722]">{m.qty}</span>
                        <span className="text-[10px] text-[#5c645f] block uppercase tracking-wider">Units</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Shell>
      </section>

      {/* Technology & New Investments (Page 14) */}
      <section className="bg-[#182722] py-20 text-white lg:py-28">
        <Shell>
          <Reveal>
            <div className="max-w-3xl mb-16">
              <Eyebrow light>Technology & New Investments</Eyebrow>
              <h2 className="display text-4xl md:text-6xl text-white">
                From textile processing to <i className="text-[#ff9a55] font-serif">printing technology.</i>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Technology delivers value when machinery, process knowledge, and skilled people work together. Our manufacturing
                platform combines established processing equipment with advanced digital printing systems designed for speed,
                flexibility, and consistent performance.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#ff9a55] text-xs font-bold uppercase tracking-wider mb-3">Pillar 01</div>
                  <h3 className="display text-2xl font-bold mb-3">Single-Pass Digital Printing</h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    Industrial digital printing designed for high production speed. Eliminates screen preparation, dramatically reduces
                    liquor waste, and allows instant changeover between complicated pattern variations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#ff9a55] font-semibold">
                  120,000 metres daily potential
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#ff9a55] text-xs font-bold uppercase tracking-wider mb-3">Pillar 02</div>
                  <h3 className="display text-2xl font-bold mb-3">Advanced Printhead Systems</h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    Micron-accurate ink delivery systems supporting detailed reproduction, smooth tonal gradations, and ultra-high-definition
                    geometric and photographic details on woven cotton fabrics.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#ff9a55] font-semibold">
                  Industrial Piezoelectric Arrays
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#ff9a55] text-xs font-bold uppercase tracking-wider mb-3">Pillar 03</div>
                  <h3 className="display text-2xl font-bold mb-3">Colour Management & RIP</h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    Closed-loop control of colour profiles, ink rheology, and printing parameters. Aligns digital screen rendering
                    perfectly with bulk production fabric output across repeated production batches.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#ff9a55] font-semibold">
                  Spectrophotometer Delta-E &lt; 0.5
                </div>
              </div>
            </Reveal>
          </div>

          {/* New Investment Strategic Roadmap (Page 14) */}
          <div className="rounded-2xl border border-white/15 bg-black/30 p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ff9a55] mb-3">New Investment Direction</div>
            <p className="text-sm text-white/80 max-w-3xl mb-6">
              Experience as a large-scale digital-printing user has encouraged the wider business to move beyond textile processing
              into technologies that support digital production itself.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                ['01. Processing', 'Textile Processing Heritage'],
                ['02. Experience', 'Digital Printing Experience'],
                ['03. Chemistry', 'Ink Technology (Rossa)'],
                ['04. Machinery', 'Printing Machinery (RBR)'],
                ['05. Capability', 'Local Technology Capability'],
              ].map(([tag, label]) => (
                <div key={tag} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-[#ff9a55] text-xs font-bold">{tag}</div>
                  <div className="text-xs font-bold text-white mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Machine Floor Gallery */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <Eyebrow>Visual Floor Tour</Eyebrow>
              <h2 className="display text-4xl md:text-6xl">Machinery in Operation</h2>
              <p className="mt-2 text-sm text-[#5c645f]">
                Photographs from our live factory floor showing high-speed digital printers, jiggers, stenters, and looms.
              </p>
            </div>
            <LinkArrow href="#/gallery">Explore all 39 factory images</LinkArrow>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {machineGallery.map((m, idx) => (
              <Reveal key={m.name} delay={idx * 60}>
                <button
                  onClick={() => openLightbox(lightboxItems, idx)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-[#182722] text-left shadow"
                >
                  <SmartImg
                    img={m.img}
                    alt={m.name}
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="rounded bg-[#e86d2a] px-2 py-0.5 text-[8px] font-bold uppercase">
                      {m.stage}
                    </span>
                    <div className="mt-1 font-bold text-xs line-clamp-1">{m.name}</div>
                  </div>
                  <span className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-white text-[#182722] opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={12} />
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
