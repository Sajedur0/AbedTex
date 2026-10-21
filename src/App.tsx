import { Suspense, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { assets, type Img } from './assets';
import { Shell } from './components/Site';
import Seo from './components/Seo';
import { facts, contactInfo } from './profile';
import { prefetchLikelyRoutes, prefetchRoute } from './routes';
import HomePage from './pages/HomePage';
import { AboutPage, UnitsPage, MachineryPage, ProductsPage, CompliancePage, LeadershipPage, GalleryPage, ContactPage } from './routes';

type LightboxItem = { src: string; thumb?: Img; title?: string };
type AppContextType = { openLightbox: (items: LightboxItem[], index: number) => void };
export const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext);

const links = [
  ['/', 'Home'],
  ['/about', 'Company'],
  ['/units', 'Production Units'],
  ['/machinery', 'Machinery & Tech'],
  ['/products', 'Products & Services'],
  ['/compliance', 'Sustainability & Quality'],
  ['/leadership', 'Leadership'],
  ['/gallery', 'Gallery'],
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-[#f7f3eb]">
      <span className="h-1.5 w-16 animate-pulse rounded-full bg-[#182722]/15" role="status" aria-label="Loading page" />
    </div>
  );
}

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="bg-[#182722] text-[#efe9df]">
        <Shell className="flex h-9 items-center justify-between text-[10px] font-semibold uppercase tracking-[.16em]">
          <div className="flex items-center gap-4">
            <span className="text-[#ff9a55]">{facts.tagline}</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline">18,000 Workforce · 120,000 m/day Digital Printing</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Ghoradia, Narsingdi · Bangladesh</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href={`tel:${contactInfo.factory.mobile}`} className="hover:text-[#ff9a55] transition">{contactInfo.factory.mobile}</a>
          </div>
        </Shell>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f3eb]">
        <Shell className="flex h-[78px] items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-lg bg-white p-1 border border-black/10 shadow-sm flex items-center justify-center transition group-hover:border-[#e86d2a]">
              <img src={assets.logo.src} alt="Abed Textile Processing Mills Ltd." width={44} height={40} className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-black tracking-[-.02em] text-[#182722]">ABED TEXTILE</div>
              <div className="text-[9px] font-bold uppercase tracking-[.16em] text-[#a34d20]">Processing Mills Ltd.</div>
            </div>
          </a>

          <nav aria-label="Primary" className="hidden xl:flex items-center gap-4">
            {links.map(([to, label]) => (
              <a
                key={to}
                href={to}
                onMouseEnter={() => prefetchRoute(to)}
                onFocus={() => prefetchRoute(to)}
                onTouchStart={() => prefetchRoute(to)}
                aria-current={pathname === to ? 'page' : undefined}
                className={`nav-link text-[12px] font-bold tracking-tight px-2 py-1 rounded transition ${
                  pathname === to ? 'active text-[#e86d2a]' : 'text-[#182722] hover:text-[#e86d2a]'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/contact"
              onMouseEnter={() => prefetchRoute('/contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#e86d2a] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#c95820]"
            >
              Contact Us <ArrowUpRight size={14} />
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#182722] text-white xl:hidden shadow"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Shell>

        {open && (
          <Shell className="grid grid-cols-2 gap-px border-t border-black/10 py-4 bg-[#fbf8f2] xl:hidden">
            {[...links, ['/contact', 'Contact & Inquiry']].map(([to, label]) => (
              <a
                key={to}
                href={to}
                className={`border-b border-black/5 px-3 py-3 text-sm font-bold ${
                  pathname === to ? 'text-[#e86d2a]' : 'text-[#182722]'
                }`}
              >
                {label}
              </a>
            ))}
          </Shell>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#182722] text-[#efe9df]">
      <Shell className="py-14 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.5fr_0.8fr_0.9fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-lg bg-white/10 p-1 flex items-center justify-center">
                <img
                  src={assets.logo.src}
                  alt="Abed Textile Processing Mills Ltd."
                  width={36}
                  height={32}
                  className="h-full w-full object-contain brightness-0 invert"
                />
              </div>
              <div className="leading-tight">
                <div className="text-[15px] font-black tracking-[-.02em] text-white">ABED TEXTILE</div>
                <div className="text-[8px] font-bold uppercase tracking-[.16em] text-[#ff9a55]">Processing Mills Ltd.</div>
                <div className="text-[8px] text-white/50">Textile Expertise. Digital Progress.</div>
              </div>
            </div>
            <div className="display text-3xl leading-snug md:text-5xl text-white">
              Built on experience.<br />
              <i className="text-[#ff9a55] font-serif">Driven by progress.</i>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60">
              For more than three decades, Abed Textile Processing Mills Limited has evolved into an integrated manufacturing
              powerhouse in Narsingdi, Bangladesh. Combining 18,000 workforce, advanced single-pass digital printing, 89+ machines,
              and responsible biological effluent treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold text-white/70">
              <span className="rounded bg-white/10 px-3 py-1">120,000 m/day Printing</span>
              <span className="rounded bg-white/10 px-3 py-1">80,000 m/day Dyeing</span>
              <span className="rounded bg-white/10 px-3 py-1">280,000 m/day Washing</span>
              <span className="rounded bg-white/10 px-3 py-1">280,000 m/day Finishing</span>
            </div>
          </div>

          <div>
            <div className="footer-label font-bold uppercase tracking-wider text-xs text-[#ff9a55] mb-5">Navigation</div>
            <div className="grid gap-2.5 text-sm text-white/70">
              {links.map(([to, label]) => (
                <a
                  href={to}
                  key={to}
                  onMouseEnter={() => prefetchRoute(to)}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="text-[#ff9a55]/60 text-xs">›</span> {label}
                </a>
              ))}
              <a href="/contact" className="hover:text-white transition flex items-center gap-1.5 text-[#ff9a55]">
                <span className="text-[#ff9a55] text-xs">›</span> Contact & Factory Location
              </a>
            </div>
          </div>

          <div>
            <div className="footer-label font-bold uppercase tracking-wider text-xs text-[#ff9a55] mb-5">Factory & Office</div>
            <div className="space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff9a55] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Factory:</div>
                  <div>Ghoradia, Narsingdi Sadar, Narsingdi, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff9a55] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Corporate Office:</div>
                  <div>House 2 (Flat 5/A), Road 11, Sector 6, Uttara, Dhaka-1230</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#ff9a55] shrink-0" />
                <div>
                  <a href={`tel:${contactInfo.factory.mobile}`} className="hover:text-white block font-medium">
                    {contactInfo.factory.mobile}
                  </a>
                  <a href="tel:+88029462750" className="hover:text-white text-xs text-white/60 block">
                    +880 2 9462750-51
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#ff9a55] shrink-0" />
                <a href={`mailto:${contactInfo.factory.email}`} className="text-[#ff9a55] hover:underline">
                  {contactInfo.factory.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
              <img src={assets.qrCode.src} alt="Scan QR Code" className="h-16 w-16 bg-white p-1 rounded object-contain" />
              <div className="text-xs text-white/60">
                <div className="font-bold text-white">Scan QR Profile</div>
                <div>Instant contact & factory details on your mobile device</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[11px] uppercase tracking-[.16em] text-white/50 sm:flex-row sm:justify-between items-center">
          <span>© {new Date().getFullYear()} Abed Textile Processing Mills Ltd. All Rights Reserved.</span>
          <span>BTMA Member · Narsingdi, Bangladesh</span>
        </div>
      </Shell>
    </footer>
  );
}

function Lightbox({
  state,
  close,
  move,
}: {
  state: { items: LightboxItem[]; index: number } | null;
  close: () => void;
  move: (n: number) => void;
}) {
  useEffect(() => {
    document.body.style.overflow = state ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [state]);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') move(1);
      else if (e.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state, close, move]);

  useEffect(() => {
    if (!state || state.items.length < 2) return;
    const { items, index } = state;
    [items[(index + 1) % items.length], items[(index - 1 + items.length) % items.length]].forEach((item) => {
      const preload = new Image();
      preload.src = item.src;
    });
  }, [state]);

  if (!state) return null;
  const item = state.items[state.index];

  return (
    <div onClick={close} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#101b18]/95 p-5">
      <button
        aria-label="Close"
        className="absolute right-5 top-5 z-10 text-white transition hover:opacity-70 p-2 rounded-full bg-white/10"
        onClick={close}
      >
        <X size={24} />
      </button>
      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          move(-1);
        }}
        className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-[#182722] shadow-lg transition hover:scale-105"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="flex max-h-[85vh] max-w-[88vw] flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.title || ''}
          decoding="async"
          className="max-h-[75vh] max-w-[86vw] rounded-lg object-contain shadow-2xl"
        />
        {item.title && (
          <div className="mt-4 text-center text-white">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <span className="text-xs text-white/50">
              {state.index + 1} / {state.items.length}
            </span>
          </div>
        )}
      </div>
      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          move(1);
        }}
        className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-[#182722] shadow-lg transition hover:scale-105"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function App() {
  const [lightbox, setLightbox] = useState<{ items: LightboxItem[]; index: number } | null>(null);
  const openLightbox = useCallback((items: LightboxItem[], index: number) => setLightbox({ items, index }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const move = useCallback(
    (n: number) => setLightbox((s) => (s ? { ...s, index: (s.index + n + s.items.length) % s.items.length } : s)),
    []
  );

  useEffect(() => {
    if (document.readyState === 'complete') prefetchLikelyRoutes();
    else {
      const onLoad = () => prefetchLikelyRoutes();
      window.addEventListener('load', onLoad, { once: true });
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <AppContext.Provider value={{ openLightbox }}>
      <BrowserRouter>
        <ScrollTop />
        <Seo />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold">Skip to content</a>
        <Navbar />
        <main id="main">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/units" element={<UnitsPage />} />
              <Route path="/machinery" element={<MachineryPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Lightbox state={lightbox} close={closeLightbox} move={move} />
      </BrowserRouter>
    </AppContext.Provider>
  );
}
