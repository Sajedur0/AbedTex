import { useApp } from '../App';
import { assets } from '../assets';

export default function GalleryPage() {
  const { lang, openLightbox } = useApp();

  return (
    <section className="pt-28 pb-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'ভিজ্যুয়াল শোকেস' : 'Factory Floor Visual Showcase'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'আমাদের কারখানা ও উৎপাদন গ্যালারি' : 'Abed Textile Production Visual Gallery'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {assets.gallery.map((item, idx) => (
            <div key={idx}
              onClick={() => openLightbox(assets.gallery.map((g) => ({ src: g.src })), idx)}
              className={`relative rounded-xl overflow-hidden border border-slate-200 hover:border-sky-400 cursor-pointer group shadow-md ${idx % 3 === 0 ? 'row-span-2 h-48 sm:h-full' : 'h-40 sm:h-48'}`}>
              <img src={item.src} alt={item.titleEn}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="px-2.5 py-1 rounded bg-white/90 text-slate-900 text-[10px] sm:text-xs font-bold shadow-md inline-block">{lang === 'bn' ? item.titleBn : item.titleEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
