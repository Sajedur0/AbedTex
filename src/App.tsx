import { Suspense, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { assets, type Img } from './assets';
import { Shell } from './components/Site';
import { prefetchLikelyRoutes, prefetchRoute } from './routes';
import HomePage from './pages/HomePage';
import { AboutPage, UnitsPage, MachineryPage, ProductsPage, CompliancePage, LeadershipPage, GalleryPage, ContactPage } from './routes';

type LightboxItem = { src: string; thumb?: Img; title?: string };
type AppContextType = { openLightbox: (items: LightboxItem[], index: number) => void };
export const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext);

const links = [
  ['/', 'Home'], ['/about', 'Company'], ['/units', 'Production'], ['/machinery', 'Machinery'],
  ['/products', 'Products'], ['/compliance', 'Responsibility'], ['/leadership', 'Directors'], ['/gallery', 'Gallery']
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Jump instantly: the global `scroll-behavior: smooth` would otherwise animate
    // every navigation and feel sluggish.
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return <div className="grid min-h-[70vh] place-items-center bg-[#f7f3eb]">
    <span className="h-1.5 w-16 animate-pulse rounded-full bg-[#182722]/15" role="status" aria-label="Loading page" />
  </div>;
}

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <div className="bg-[#182722] text-[#efe9df]">
      <Shell className="flex h-9 items-center justify-between text-[10px] font-semibold uppercase tracking-[.16em]">
        <span>Oeko-Tex Certified · 100% Export Oriented</span><span className="hidden sm:block">Established 1993 · Bangladesh</span>
      </Shell>
    </div>
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f3eb]">
      <Shell className="flex h-[76px] items-center justify-between gap-5">
        <a href="#/" className="flex items-center gap-3">
          <img src={assets.logo.src} alt="Abed Textile" width={44} height={35} className="h-11 w-11 object-contain" />
          <div className="leading-none"><div className="text-[15px] font-black tracking-[-.02em] text-[#182722]">ABED TEXTILE</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-[#a34d20]">Processing Mills Ltd.</div></div>
        </a>
        <nav className="hidden xl:flex items-center gap-5">{links.map(([to, label]) => <a key={to} href={`#${to}`} onMouseEnter={()=>prefetchRoute(to)} onFocus={()=>prefetchRoute(to)} onTouchStart={()=>prefetchRoute(to)} aria-current={pathname===to?'page':undefined} className={`nav-link text-[12px] font-bold ${pathname === to ? 'active' : ''}`}>{label}</a>)}</nav>
        <div className="flex items-center gap-2">
          <a href="#/contact" onMouseEnter={()=>prefetchRoute('/contact')} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#e86d2a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#c95820]">Start a conversation <ArrowUpRight size={14}/></a>
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-[#182722] text-white xl:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
      </Shell>
      {open && <Shell className="grid grid-cols-2 gap-px border-t border-black/10 py-4 xl:hidden">{[...links, ['/contact','Contact']].map(([to,label]) => <a key={to} href={`#${to}`} className="border-b border-black/10 px-2 py-3 text-sm font-bold">{label}</a>)}</Shell>}
    </header>
  </>;
}

function Footer() {
  return <footer className="bg-[#182722] text-[#efe9df]">
    <Shell className="py-14 lg:py-20">
      <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.4fr_.6fr_.7fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <img src={assets.logo.src} alt="Abed Textile" width={40} height={32} className="h-10 w-10 object-contain brightness-0 invert" />
            <div className="leading-none">
              <div className="text-[14px] font-black tracking-[-.02em] text-white">ABED TEXTILE</div>
              <div className="mt-1 text-[8px] font-bold uppercase tracking-[.16em] text-[#ff9a55]">Processing Mills Ltd.</div>
            </div>
          </div>
          <div className="display text-4xl leading-none md:text-6xl">Made with purpose.<br/><i className="text-[#ff9a55]">Processed with care.</i></div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">Quality merchandising, timely delivery, high compliance and dedicated customer service since 1993.</p>
        </div>
        <div><div className="footer-label">Navigate</div><div className="mt-5 grid gap-3 text-sm text-white/70">{links.slice(1).map(([to,label]) => <a href={`#${to}`} key={to} onMouseEnter={()=>prefetchRoute(to)} className="hover:text-white">{label}</a>)}</div></div>
        <div><div className="footer-label">Factory</div><p className="mt-5 text-sm leading-7 text-white/70">Ghoradia, Narsingdi Sadar - 1602<br/>Dhaka, Bangladesh</p><a href="tel:88029462750" className="mt-5 block text-xl font-bold">88-02-9462750</a><a href="mailto:info@abed.com" className="mt-2 block text-sm text-[#ff9a55]">info@abed.com</a></div>
      </div>
      <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[.16em] text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Abed Textile Processing Mills Ltd.</span><span>BTMEA & NCCI Member</span></div>
    </Shell>
  </footer>;
}

function Lightbox({ state, close, move }: { state: {items:LightboxItem[]; index:number}|null; close:()=>void; move:(n:number)=>void }) {
  useEffect(() => { document.body.style.overflow = state ? 'hidden' : ''; return () => { document.body.style.overflow=''; }; }, [state]);

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

  // Warm up the neighbouring photos so paging through the gallery is instant.
  useEffect(() => {
    if (!state || state.items.length < 2) return;
    const { items, index } = state;
    [items[(index + 1) % items.length], items[(index - 1 + items.length) % items.length]]
      .forEach((item) => { const preload = new Image(); preload.src = item.src; });
  }, [state]);

  if (!state) return null;
  const item = state.items[state.index];
  return <div onClick={close} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#101b18]/95 p-5">
    {item.thumb?.lqip && <img src={item.thumb.lqip} alt="" aria-hidden="true" className="pointer-events-none absolute max-h-[82vh] max-w-[86vw] scale-105 object-contain blur-2xl"/>}
    <button aria-label="Close" className="absolute right-5 top-5 z-10 text-white transition hover:opacity-70" onClick={close}><X/></button>
    <button aria-label="Previous image" onClick={e=>{e.stopPropagation();move(-1)}} className="absolute left-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-[#182722] shadow-lg transition hover:scale-105"><ChevronLeft/></button>
    <div className="flex max-h-[85vh] max-w-[88vw] flex-col items-center" onClick={e=>e.stopPropagation()}>
      <img src={item.src} alt={item.title||''} decoding="async" className="max-h-[75vh] max-w-[86vw] rounded-lg object-contain shadow-2xl"/>
      {item.title && <div className="mt-4 text-center text-white">
        <h4 className="text-base font-semibold">{item.title}</h4>
        <span className="text-xs text-white/50">{state.index + 1} / {state.items.length}</span>
      </div>}
    </div>
    <button aria-label="Next image" onClick={e=>{e.stopPropagation();move(1)}} className="absolute right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-[#182722] shadow-lg transition hover:scale-105"><ChevronRight/></button>
  </div>;
}

export default function App() {
  const [lightbox, setLightbox] = useState<{items:LightboxItem[];index:number}|null>(null);
  const openLightbox = useCallback((items:LightboxItem[], index:number) => setLightbox({items,index}), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const move = useCallback((n:number) => setLightbox(s => s ? ({...s,index:(s.index+n+s.items.length)%s.items.length}) : s), []);

  // Warm the other page chunks once the first screen is done.
  useEffect(() => {
    if (document.readyState === 'complete') prefetchLikelyRoutes();
    else {
      const onLoad = () => prefetchLikelyRoutes();
      window.addEventListener('load', onLoad, { once: true });
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return <AppContext.Provider value={{openLightbox}}><HashRouter><ScrollTop/><Navbar/><main><Suspense fallback={<RouteFallback/>}><Routes>
    <Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/units" element={<UnitsPage/>}/><Route path="/machinery" element={<MachineryPage/>}/><Route path="/products" element={<ProductsPage/>}/><Route path="/compliance" element={<CompliancePage/>}/><Route path="/leadership" element={<LeadershipPage/>}/><Route path="/gallery" element={<GalleryPage/>}/><Route path="/contact" element={<ContactPage/>}/>
  </Routes></Suspense></main><Footer/><Lightbox state={lightbox} close={closeLightbox} move={move}/></HashRouter></AppContext.Provider>;
}
