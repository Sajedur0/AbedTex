import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapProps {
  /** Keyless Google Maps embed URL (`…&output=embed`). */
  src: string;
  /** Accessible name for the frame. */
  title: string;
  /** Shown on the placeholder until the frame is mounted. */
  caption?: string;
  className?: string;
}

/**
 * A Google Maps frame that is only pulled in once it comes near the viewport.
 *
 * The embed is a heavy third-party document (its own JS runtime, map tiles and
 * fonts), so loading it eagerly would add a long task and hundreds of KB to a
 * contact-page visit — including for visitors who never scroll as far as the
 * map. Until then a lightweight placeholder holds exactly the same box, so
 * nothing shifts when the frame finally arrives.
 */
export default function GoogleMap({ src, title, caption = 'Loading map', className = '' }: GoogleMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setReady(true);
        io.disconnect();
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(element);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#ddd7cb] ${className}`}>
      {!ready && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <MapPin className="mx-auto text-[#e86d2a]" size={26} />
            <div className="mt-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#6d7570]">{caption}</div>
          </div>
        </div>
      )}
      {ready && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      )}
    </div>
  );
}
