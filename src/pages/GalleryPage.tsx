import { useState, useMemo } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { assets } from '../assets';
import { useApp } from '../App';
import { PageHero, Shell } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const categories = ['All', 'Production', 'Printing', 'Dyeing', 'Finishing', 'Quality', 'Sustainability', 'Facility', 'Compliance', 'Products'] as const;

export default function GalleryPage() {
  const { openLightbox } = useApp();
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredItems = useMemo(() => {
    if (selectedCat === 'All') return assets.gallery;
    return assets.gallery.filter((item) => item.cat === selectedCat);
  }, [selectedCat]);

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Visual Documentation / 39 Factory Records"
        title="Inside the manufacturing facility."
        intro="A comprehensive 39-image visual record of Abed Textile Processing Mills Limited — its automated loom sheds, high-speed digital printing lines, dyeing jiggers, continuous wash ranges, laboratory facilities, and biological effluent treatment plant."
      />

      <section className="bg-[#efe9df] border-b border-black/10 sticky top-[78px] z-30 shadow-xs">
        <Shell className="py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a34d20] mr-2 flex items-center gap-1">
              <Filter size={14} /> Category:
            </span>
            {categories.map((cat) => {
              const active = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    active
                      ? 'bg-[#182722] text-white shadow-sm'
                      : 'bg-white text-[#5c645f] hover:bg-white hover:text-black border border-black/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Shell>
      </section>

      <section className="py-12 lg:py-20">
        <Shell>
          <div className="mb-8 flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-[.18em] text-[#a34d20]">
              Showing {filteredItems.length} of {assets.gallery.length} verified facility records
            </div>
            {selectedCat !== 'All' && (
              <button
                onClick={() => setSelectedCat('All')}
                className="text-xs font-bold text-[#e86d2a] hover:underline"
              >
                Reset filter (Show all)
              </button>
            )}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredItems.map((item, i) => (
              <Reveal key={item.src + i} delay={(i % 3) * 50}>
                <button
                  onClick={() => openLightbox(filteredItems, i)}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-black/10 bg-[#182722] text-left shadow-sm hover:shadow-md transition"
                >
                  <SmartImg
                    img={item.thumb}
                    alt={item.title}
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 100vw"
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                      i % 4 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-block rounded-full bg-[#ff9a55]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ff9a55] border border-[#ff9a55]/30 mb-1.5">
                      {item.cat}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
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
    </div>
  );
}
