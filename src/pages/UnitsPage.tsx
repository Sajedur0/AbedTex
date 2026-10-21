import { ArrowUpRight } from 'lucide-react';
import { assets, type Img } from '../assets';
import { workflowSteps } from '../profile';
import { useApp } from '../App';
import { PageHero, Shell, Eyebrow } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

interface UnitSection {
  n: string;
  title: string;
  banner: Img;
  desc: string;
  capacity?: string;
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
      capacity: '32 Industrial Looms',
      desc: 'Our weaving division operates 32 high-speed automated weaving and repair looms. We produce pristine greige fabrics including Poplin, Voile, Twill, Lillian, and dense cotton sheeting with continuous greige inspection before wet processing.',
      stats: [
        { label: 'Looms Inventory', val: '32 Units' },
        { label: 'Primary Weaves', val: 'Poplin, Voile, Lillian, Twills' },
        { label: 'Quality Control', val: 'Continuous greige light-table check' },
      ],
      gallery: [
        { img: assets.banners.weaving, title: 'High Speed Loom Shed Panorama' },
        { img: assets.weaving.loomRow, title: 'Automated Weaving Loom Row & Cloth Beam' },
        { img: assets.weaving.loomClothBeam, title: 'Loom Shed Machine & Drive Detail' },
        { img: assets.weaving.warpThreading, title: 'Loom Warp Threading & Heddle Detail' },
        { img: assets.weaving.greigeRolls, title: 'Woven Greige Fabric Roll Output' },
        { img: assets.machinery.fabricInspection, title: 'Greige Fabric Inspection & Rolling' },
      ],
    },
    {
      n: '02',
      title: 'Pretreatment & Mercerizing Range',
      banner: assets.banners.pretreatment,
      capacity: 'Full Fabric Preparation',
      desc: 'Uniform dyeing and digital printing begin with immaculate fabric preparation. Our pretreatment facility features gas-fired singeing units, continuous scouring and desizing, and 2 dedicated mercerizing machines (clip and roller) for outstanding luster and dye uptake.',
      stats: [
        { label: 'Singeing Machines', val: '2 Gas-Fired Units' },
        { label: 'Mercerizing Machines', val: '2 (Clip & Roller Mercerize)' },
        { label: 'Core Functions', val: 'Lint elimination, desizing, lustering' },
      ],
      gallery: [
        { img: assets.banners.pretreatment, title: 'Pretreatment Continuous Bleaching Range' },
        { img: assets.machinery.mercerizingRange, title: 'Clip & Roller Mercerizer Tension Control' },
        { img: assets.gallery[8].thumb, title: 'Roller Mercerizing Setup' },
        { img: assets.gallery[22].thumb, title: 'Desizing & Scouring Continuous Range' },
        { img: assets.gallery[23].thumb, title: 'Continuous Bleaching & Cleansing' },
        { img: assets.gallery[24].thumb, title: 'Mercerizing Chemical Bath' },
      ],
    },
    {
      n: '03',
      title: 'Dyeing & Coloration Range',
      banner: assets.banners.dyeing,
      capacity: '80,000 Metres / Day',
      desc: 'Colour consistency starts with disciplined recipe control, automated temperature regulation, and liquor chemistry. The dyeing wing features 2 Cold Pad Batch (CPB) ranges and 35 dyeing jiggers (single, double, jumbo, and covered) for rich, level shades.',
      stats: [
        { label: 'Daily Capacity', val: '80,000 m/day' },
        { label: 'Dyeing Jiggers', val: '35 Machines (Single, Double, Jumbo, Covered)' },
        { label: 'Cold Pad Batch', val: '2 Low Liquor CPB Units' },
      ],
      gallery: [
        { img: assets.banners.dyeing, title: 'High Volume Dyeing Jiggers' },
        { img: assets.machinery.dyeingJiggers, title: 'Covered Jigger Dyeing Battery' },
        { img: assets.machinery.coldPadBatch, title: 'Cold Pad Batch Coloration Unit' },
        { img: assets.gallery[3].thumb, title: 'Dyeing Hall Jiggers in Operation' },
        { img: assets.gallery[25].thumb, title: 'Dyeing Color Formulation Lab' },
        { img: assets.gallery[26].thumb, title: 'Jigger Batch Dyeing Process' },
      ],
    },
    {
      n: '04',
      title: 'Digital Textile Printing Suite',
      banner: assets.banners.digital,
      capacity: '120,000 Metres / Day',
      desc: 'Digital printing is one of Abed Textile’s defining manufacturing assets. Our high-speed single-pass and multi-pass digital fleet includes Atexco, Atexco VEGA, BYDI, WILTOP, Hangzhou, and RBR Hybrid machines, delivering photographic resolution with near-zero setup time.',
      stats: [
        { label: 'Printing Capacity', val: '120,000 m/day' },
        { label: 'Digital Fleet', val: '8 Industrial High-Speed Printers' },
        { label: 'Key Platforms', val: 'Single-Pass Atexco, VEGA, BYDI, WILTOP, RBR' },
      ],
      gallery: [
        { img: assets.banners.digital, title: 'Industrial Digital Suite' },
        { img: assets.technology.singlePass, title: 'Single-Pass Ultra High-Speed Printing' },
        { img: assets.technology.printhead, title: 'Advanced Piezoelectric Printhead Array' },
        { img: assets.technology.colourManagement, title: 'Digital RIP & Colour Profiling Console' },
        { img: assets.products.digitalPrint1, title: 'High-Definition Floral Print Sample' },
        { img: assets.products.digitalPrint2, title: 'Vibrant Multi-Color Pattern Output' },
      ],
    },
    {
      n: '05',
      title: 'Conventional Screen & Serbo Printing',
      banner: assets.banners.conventionalPrinting,
      capacity: '80,000 Metres / Day',
      desc: 'For high-volume repeats, traditional sarees, and large print runs, we operate 5 serbo and flatbed screen printing machines paired with 2 high-capacity loop steamers for deep steam color fixation.',
      stats: [
        { label: 'Printing Capacity', val: '80,000 m/day' },
        { label: 'Serbo Machines', val: '5 Precision Printing Ranges' },
        { label: 'Fixation Steamers', val: '2 Continuous Loop Steamers' },
      ],
      gallery: [
        { img: assets.banners.conventionalPrinting, title: 'Automatic Screen & Rotary Print Line' },
        { img: assets.products.printedFabrics, title: 'Printed Fabric Roll Output' },
        { img: assets.gallery[2].thumb, title: 'Automatic Flatbed Serbo Print Line' },
        { img: assets.gallery[9].thumb, title: 'Screen Registration & Print Setup' },
      ],
    },
    {
      n: '06',
      title: 'Washing & Finishing Section',
      banner: assets.banners.finishing,
      capacity: '280,000 Metres / Day',
      desc: 'Final processing dictates fabric handle, luster, dimensional stability, and presentation. We operate continuous open-width wash ranges (280,000 m/day), 7 Bruckner and Babcock heat-setting stenters, and 4 heavy hydraulic calenders (bowl, saree felt, and poplin felt).',
      stats: [
        { label: 'Washing Capacity', val: '280,000 m/day' },
        { label: 'Finishing Capacity', val: '280,000 m/day' },
        { label: 'Stenter Machines', val: '7 Units (Bruckner & Babcock)' },
        { label: 'Calenders', val: '4 Units (Bowl, Saree Felt, Poplin Felt)' },
      ],
      gallery: [
        { img: assets.banners.finishing, title: 'Finishing Stenter & Calender Wing' },
        { img: assets.machinery.stenterFrame, title: 'Bruckner Stenter Frame Heat Setting' },
        { img: assets.machinery.calenderMachine, title: 'Heavy Calender Glazing Finish' },
        { img: assets.gallery[6].thumb, title: 'Continuous Open-Width Wash Range' },
        { img: assets.gallery[10].thumb, title: 'Hydraulic Export Baling & Packing' },
        { img: assets.gallery[28].thumb, title: 'Stenter Frame Heat Setting Multi-Chamber' },
      ],
    },
    {
      n: '07',
      title: 'Effluent Treatment Plant (ETP)',
      banner: assets.banners.etp,
      capacity: '2,400+ m³ / Day',
      desc: 'Our biological effluent treatment plant treats 100% of industrial wastewater using aerobic biochemical degradation. Multistage clarifiers and sand/carbon filtration ensure treated discharge meets strict environmental parameters, with water recycled for plant utilities.',
      stats: [
        { label: 'Process Type', val: 'Biochemical Aerobic Digestion' },
        { label: 'Filtration', val: 'Clarifiers, Sand & Activated Carbon' },
        { label: 'Sustainability', val: 'Clean discharge & utility water recycling' },
      ],
      gallery: [
        { img: assets.banners.etp, title: 'Biological ETP Aeration Facility' },
        { img: assets.sustainability.waterTreatment, title: 'Clarifier & Multi-Stage Filtration Unit' },
        { img: assets.gallery[12].thumb, title: 'ETP Aeration Basin Overview' },
        { img: assets.gallery[33].thumb, title: 'Biological Water Clarification Basin' },
        { img: assets.gallery[34].thumb, title: 'Recycled Water Quality Station' },
      ],
    },
  ];

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Production Units / Integrated Manufacturing"
        title="Connected processes. Consistent execution."
        intro="From raw yarn weaving and chemical pretreatment to single-pass digital printing, dyeing, open-width washing, and finishing — our Ghoradia mills coordinate every step under disciplined process control."
      />

      {/* Capacities Banner */}
      <section className="bg-[#182722] text-white py-10 border-y border-white/10">
        <Shell>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              ['120,000 m/day', 'Digital Printing', 'Single-pass & multi-pass'],
              ['80,000 m/day', 'Fabric Dyeing', 'Jiggers & CPB ranges'],
              ['80,000 m/day', 'Conventional Print', 'Serbo & screen printing'],
              ['280,000 m/day', 'Washing Range', 'Continuous open-width'],
              ['280,000 m/day', 'Finishing & Stenter', 'Bruckner / Babcock'],
            ].map(([val, label, sub]) => (
              <div key={label} className="p-3">
                <div className="display text-2xl lg:text-3xl font-black text-[#ff9a55]">{val}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">{label}</div>
                <div className="text-[11px] text-white/50">{sub}</div>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* Integrated Workflow (Page 8) */}
      <section className="bg-[#efe9df] py-16 lg:py-20 border-b border-black/10">
        <Shell>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Eyebrow>End-to-End Coordination</Eyebrow>
            <h2 className="display text-3xl md:text-5xl">9-Stage Manufacturing Platform</h2>
            <p className="mt-2 text-sm text-[#5c645f]">
              Direct coordination between laboratory development, production wings, finishing ranges, and quality inspection teams.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5">
            {workflowSteps.map((wf) => (
              <div key={wf.step} className="rounded-xl border border-black/10 bg-white p-3.5 shadow-sm">
                <div className="text-[#a34d20] font-black text-xs">{wf.step}</div>
                <div className="font-bold text-xs text-[#182722] mt-1">{wf.name}</div>
                <div className="text-[11px] text-[#5c645f] leading-tight mt-1">{wf.desc}</div>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* Deep-Dive into Each Unit */}
      <div className="divide-y divide-black/10">
        {units.map((unit) => {
          const lightboxList = unit.gallery.map((g) => ({
            src: g.img.full || g.img.src,
            title: g.title,
            thumb: g.img,
          }));

          return (
            <section key={unit.title} className="py-20 lg:py-28">
              <Shell>
                <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] items-center mb-12">
                  <Reveal>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-[#e86d2a] text-white font-mono font-bold text-xs px-3 py-1">
                          Stage {unit.n}
                        </span>
                        {unit.capacity && (
                          <span className="text-xs font-bold uppercase tracking-wider text-[#a34d20]">
                            {unit.capacity}
                          </span>
                        )}
                      </div>
                      <h2 className="display text-4xl leading-tight md:text-5xl">{unit.title}</h2>
                      <p className="text-base leading-relaxed text-[#5c645f]">{unit.desc}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {unit.stats.map((st) => (
                          <div key={st.label} className="rounded-xl border border-black/10 bg-white p-3.5 shadow-sm">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#a34d20]">{st.label}</div>
                            <div className="mt-1 font-bold text-xs text-[#182722]">{st.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={120}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 shadow-xl">
                      <SmartImg
                        img={unit.banner}
                        alt={unit.title}
                        sizes="(min-width:1024px) 50vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <div className="text-lg font-bold">{unit.title}</div>
                        <div className="text-xs text-white/70">Abed Textile Processing Mills Ltd.</div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Sub-gallery for the unit */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#a34d20] mb-4">
                    {unit.title} Gallery Showcase
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {unit.gallery.map((item, gIdx) => (
                      <button
                        key={item.title + gIdx}
                        onClick={() => openLightbox(lightboxList, gIdx)}
                        className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-[#182722] shadow text-left"
                      >
                        <SmartImg
                          img={item.img}
                          alt={item.title}
                          sizes="200px"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition" />
                        <div className="absolute bottom-2 left-2 right-2 text-white">
                          <div className="text-[11px] font-bold line-clamp-1">{item.title}</div>
                        </div>
                        <span className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-white text-[#182722] opacity-0 transition group-hover:opacity-100">
                          <ArrowUpRight size={12} />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </Shell>
            </section>
          );
        })}
      </div>
    </div>
  );
}
