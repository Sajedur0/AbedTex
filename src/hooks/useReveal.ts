import { useEffect, useRef, useState } from 'react';

const callbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | undefined;

/**
 * One IntersectionObserver is shared by every `Reveal` on the page instead of one
 * per element — with ~40 revealing blocks per page that is a lot less scroll-time
 * bookkeeping. Targets are unobserved as soon as they have revealed.
 */
function observe(element: Element, onReveal: () => void) {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const reveal = callbacks.get(entry.target);
          callbacks.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
          reveal?.();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );
  }
  callbacks.set(element, onReveal);
  sharedObserver.observe(element);
  return () => {
    callbacks.delete(element);
    sharedObserver?.unobserve(element);
  };
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return observe(element, () => setVisible(true));
  }, []);

  return { ref, visible };
}
