import { useState } from 'react';
import { Images } from 'lucide-react';
import { useApp } from '../App';
import { assets } from '../assets';
import PageHeader from '../components/PageHeader';

const cats = ['All', ...Array.from(new Set(assets.gallery.map((g) => g.cat)))];

export default function GalleryPage() {
  const { lang, openLightbox } = useApp();
  const bn = lang === 'bn';
  const [cat, setCat] = useState('All');

  const items = cat === 'All' ? assets.gallery : assets.gallery.filter((g) => g.cat === cat);

  return (
    <>
      <PageHeader
        eyebrowEn="Factory Floor Visual Showcase"
        eyebrowBn="ভিজ্যুয়াল শোকেস"
        titleEn="Abed Textile Production Visual Gallery"
        titleBn="আমাদের কারখানা ও উৎপাদন গ্যালারি"
        subEn="An unfiltered look inside our weaving, dyeing, printing and finishing floors."
        subBn="আমাদের উইভিং, ডাইং, প্রিন্টিং ও ফিনিশিং ফ্লোরের সরাসরি দৃশ্য।"
        image={assets.gallery[2].src}
      />

      <section className="py-16 sm:py-20 bg-slate-50 textile-grid">
        <div className="container-x">
          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10" data-reveal>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  cat === c
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-md shadow-sky-500/25'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">
              <Images className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              {bn ? 'এই ক্যাটাগরিতে কোনো ছবি নেই।' : 'No images in this category.'}
            </div>
          ) : (
            <div className="masonry columns-2 sm:columns-3 lg:columns-4" data-reveal>
              {items.map((item) => {
                const globalIdx = assets.gallery.indexOf(item);
                return (
                  <div
                    key={item.src}
                    onClick={() => openLightbox(assets.gallery.map((g) => ({ src: g.src, title: bn ? g.titleBn : g.titleEn })), globalIdx)}
                    className="relative rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 cursor-pointer zoom-img shadow-card hover:shadow-card-hover transition-all group"
                  >
                    <img src={item.src} alt={item.titleEn} className="w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <span className="px-2.5 py-1.5 rounded-lg bg-white/95 text-slate-900 text-[10px] sm:text-xs font-bold shadow-lg inline-block max-w-full truncate">
                        {bn ? item.titleBn : item.titleEn}
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur text-white/90 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.cat}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
