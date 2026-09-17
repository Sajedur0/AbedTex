import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Watches every [data-reveal] element on the page and adds `.reveal-visible`
 * when it scrolls into view. Re-runs on route change.
 * (Without this, all [data-reveal] content stays permanently invisible.)
 */
export default function RevealController() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.reveal-visible)')
    );
    if (els.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
