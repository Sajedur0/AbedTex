import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SITE = 'Abed Textile Processing Mills Ltd.';

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: `${SITE} | Textile Expertise. Digital Progress.`,
    description:
      'Integrated weaving, dyeing, conventional & high-speed digital textile printing (120,000 m/day) in Ghoradia, Narsingdi, Bangladesh.',
  },
  '/about': {
    title: `Company | ${SITE}`,
    description: 'Three decades of textile processing experience, an 18,000 strong workforce and an integrated mill in Narsingdi.',
  },
  '/units': {
    title: `Production Units | ${SITE}`,
    description: 'Weaving, pretreatment, dyeing, printing, washing, finishing and effluent treatment under one roof.',
  },
  '/machinery': {
    title: `Machinery & Technology | ${SITE}`,
    description: 'Digital printing machines, jiggers, stenters, calenders and more — the full machinery list of our mill.',
  },
  '/products': {
    title: `Products & Services | ${SITE}`,
    description: 'Dyed woven fabrics, digital and screen printing programs, colour and print development, and finishing.',
  },
  '/compliance': {
    title: `Sustainability & Quality | ${SITE}`,
    description: 'Water stewardship, chemical management, effluent treatment and quality systems at Abed Textile.',
  },
  '/leadership': {
    title: `Leadership | ${SITE}`,
    description: 'Meet the founder, chairman, managing director and directors of Abed Textile Processing Mills Ltd.',
  },
  '/gallery': {
    title: `Gallery | ${SITE}`,
    description: 'Photographs of our weaving, dyeing, printing, finishing and sustainability facilities.',
  },
  '/contact': {
    title: `Contact & Inquiry | ${SITE}`,
    description: 'Factory in Ghoradia, Narsingdi and corporate office in Uttara, Dhaka. Send us your fabric or printing inquiry.',
  },
};

function setMeta(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

/**
 * Per-route <title>, description, canonical and Open Graph tags, plus
 * client-side navigation for internal links (plain <a href="/path">).
 */
export default function Seo() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const page = pages[pathname] ?? pages['/'];
    const url = `${window.location.origin}${pathname === '/' ? '/' : pathname}`;
    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return null;
}
