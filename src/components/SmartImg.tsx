import { useEffect, useState } from 'react';
import type { Img } from '../assets';

interface SmartImgProps {
  img: Img;
  alt: string;
  /** Classes for the <img> itself (sizing / object-fit / hover effects). */
  className?: string;
  /** Layout hint for the responsive candidate picker, e.g. "(min-width:1024px) 33vw, 100vw". */
  sizes?: string;
  /** Above-the-fold images: load eagerly with high priority instead of lazily. */
  priority?: boolean;
}

/**
 * Responsive, progressively enhanced image.
 *
 * - `srcSet`/`sizes` lets the browser pick the smallest suitable WebP
 * - `loading="lazy"` + `decoding="async"` keeps off-screen work off the main thread
 * - the ~500 byte LQIP fills the frame instantly and cross-fades out once the real
 *   photo has decoded, so images never "pop in" while scrolling.
 *
 * The LQIP is absolutely positioned: whenever the image has a placeholder, its
 * parent element must be `relative` (or otherwise positioned) and wrap just the photo.
 */
export default function SmartImg({ img, alt, className = '', sizes, priority = false }: SmartImgProps) {
  const [loaded, setLoaded] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  // Drop the blurred placeholder from the DOM once the cross-fade has finished so
  // long galleries don't keep dozens of filtered layers alive.
  useEffect(() => {
    if (!fadingOut) return;
    const timer = window.setTimeout(() => setLoaded(true), 700);
    return () => window.clearTimeout(timer);
  }, [fadingOut]);

  return (
    <>
      {img.lqip && !loaded && (
        <img
          src={img.lqip}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onTransitionEnd={() => setLoaded(true)}
          className={`pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-500 ease-out ${
            fadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      <img
        src={img.src}
        srcSet={img.srcSet}
        sizes={img.srcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // React 18 warns about the camelCase prop, so set the lowercase attribute directly.
        {...({ fetchpriority: priority ? 'high' : 'auto' } as Record<string, string>)}
        onLoad={() => setFadingOut(true)}
        onError={() => setLoaded(true)}
        className={className}
      />
    </>
  );
}
