import { useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../App';

export default function Lightbox() {
  const { lightbox, setLightbox } = useApp();

  const close = useCallback(() => setLightbox({ ...lightbox, open: false }), [lightbox, setLightbox]);
  const prev = useCallback(
    () => setLightbox({ ...lightbox, index: lightbox.index > 0 ? lightbox.index - 1 : lightbox.items.length - 1 }),
    [lightbox, setLightbox]
  );
  const next = useCallback(
    () => setLightbox({ ...lightbox, index: lightbox.index < lightbox.items.length - 1 ? lightbox.index + 1 : 0 }),
    [lightbox, setLightbox]
  );

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox.open, close, prev, next]);

  if (!lightbox.open) return null;

  const item = lightbox.items[lightbox.index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-[heroFadeInUp_0.35s_ease]"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10" onClick={(e) => e.stopPropagation()}>
        <div className="px-3 py-1.5 rounded-lg glass-dark text-white text-xs font-bold tracking-wider">
          {lightbox.index + 1} / {lightbox.items.length}
        </div>
        <button
          onClick={close}
          className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-sky-500/40 transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-sky-500/40 transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.title || 'Enlarged view'}
          className="max-h-[76vh] w-auto max-w-full rounded-2xl border border-white/15 shadow-2xl object-contain"
        />
        {(item.title || lightbox.items.length > 1) && (
          <div className="mt-4 text-center">
            {item.title && <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>}
            <div className="mt-1.5 flex justify-center gap-1.5">
              {lightbox.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ ...lightbox, index: i })}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === lightbox.index ? 'w-6 bg-sky-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
