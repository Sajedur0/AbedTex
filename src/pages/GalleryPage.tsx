import { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { assets } from '../assets';
import { useApp } from '../App';
import { PageHero, Shell } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const categories = ['All', 'Production', 'Printing', 'Dyeing', 'Finishing', 'Quality', 'Facility', 'Compliance', 'Products'] as const;

export default function GalleryPage() {
  const { openLightbox } = useApp();
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredItems = useMemo(() => {
    if (selectedCat === 'All') return assets.gallery;
    return assets.gallery.filter((item) => item.cat === selectedCat);
  }, [selectedCat]);

  return (
    <div>
      <PageHero
        kicker="Gallery / Inside the facility"
        title="The work, in view."
        intro="A comprehensive 39-image visual record of Abed Textile Processing Mills Ltd. — its production floor, state-of-the-art machinery, dedicated workforce, and modern facility."
      />

      <section className="bg-[#f7f3eb] border-b border-black/10">
        <Shell className="py-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7a7f7c] mr-2">Filter by:</span>
            {categories.map((cat) => {
              const active = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    active
                      ? 'bg-[#182722] text-white shadow-sm'
                      : 'bg-white/80 text-[#555e59] hover:bg-white hover:text-black border border-black/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Shell>
      </section>

      <section className="bg-[#f7f3eb]">
        <Shell className="py-12 lg:py-20">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-[.18em] text-[#7a7f7c]">
              Showing {filteredItems.length} of {assets.gallery.length} photos
            </div>
            {selectedCat !== 'All' && (
              <button
                onClick={() => setSelectedCat('All')}
                className="text-xs font-semibold text-[#e86d2a] hover:underline"
              >
                Reset filter
              </button>
            )}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredItems.map((item, i) => (
              <Reveal key={item.src} delay={(i % 3) * 60}>
                <button
                  onClick={() => openLightbox(filteredItems, i)}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden bg-[#182722] text-left"
                >
                  <SmartImg
                    img={item.thumb}
                    alt={item.title}
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 100vw"
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-85 ${
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
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white text-[#182722] opacity-0 shadow-md transition group-hover:opacity-100">
                    <ArrowUpRight size={15} />
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
