import { useApp } from '../App';
import { assets } from '../assets';
import { Expand, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const { lang, openLightbox } = useApp();

  return (
    <div className="pt-8 lg:pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
            {lang === 'bn' ? 'ভিজ্যুয়াল শোকেস' : 'Factory Floor Visual Showcase'}
          </div>
          <h1 className="mt-4 text-[30px] sm:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
            {lang === 'bn' ? 'আমাদের কারখানা ও উৎপাদন গ্যালারি' : 'Abed textile production visual gallery'}
          </h1>
          <p className="mt-3 text-sm text-stone-500 flex items-center gap-2">
            <ImageIcon size={14} /> {assets.gallery.length} {lang === 'bn' ? 'টি ছবি • ক্লিক করে বড় করুন' : 'photos • click to expand'}
          </p>
        </div>

        <div className="mt-8 columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {assets.gallery.map((item, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(assets.gallery.map((g) => ({ src: g.src, title: lang === 'bn' ? g.titleBn : g.titleEn })), idx)}
              className="group relative w-full overflow-hidden rounded-[16px] border border-stone-200 bg-stone-100 break-inside-avoid text-left block"
            >
              <img
                src={item.src}
                alt={item.titleEn}
                className="w-full h-auto object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#0f2a44] text-xs font-bold shadow-lg leading-none max-w-[150px] truncate">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0">
                    <Expand size={12} className="text-[#0f2a44]" />
                  </span>
                </div>
                <span className="mt-1.5 inline-block px-2 py-0.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-[11px] font-semibold text-white">{item.cat}</span>
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-[#0f2a44] opacity-0 group-hover:opacity-0 transition-opacity">
                {item.cat}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
