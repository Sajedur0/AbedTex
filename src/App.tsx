import { createContext, useContext, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { assets } from './assets';
import { Shell } from './components/Site';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UnitsPage from './pages/UnitsPage';
import MachineryPage from './pages/MachineryPage';
import ProductsPage from './pages/ProductsPage';
import CompliancePage from './pages/CompliancePage';
import LeadershipPage from './pages/LeadershipPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

type LightboxItem = { src: string; title?: string };
type AppContextType = { openLightbox: (items: LightboxItem[], index: number) => void };
export const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext);

const links = [
  ['/', 'Home'], ['/about', 'Company'], ['/units', 'Production'], ['/machinery', 'Machinery'],
  ['/products', 'Products'], ['/compliance', 'Responsibility'], ['/leadership', 'Directors'], ['/gallery', 'Gallery']
];

function ScrollTop() { const { pathname } = useLocation(); useEffect(() => window.scrollTo(0, 0), [pathname]); return null; }

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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f3eb]/95 backdrop-blur-xl">
      <Shell className="flex h-[76px] items-center justify-between gap-5">
        <a href="#/" className="flex items-center gap-3">
          <img src={assets.logo} alt="Abed Textile" className="h-11 w-11 object-contain" />
          <div className="leading-none"><div className="text-[15px] font-black tracking-[-.02em] text-[#182722]">ABED TEXTILE</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-[#a34d20]">Processing Mills Ltd.</div></div>
        </a>
        <nav className="hidden xl:flex items-center gap-5">{links.map(([to, label]) => <a key={to} href={`#${to}`} className={`nav-link text-[12px] font-bold ${pathname === to ? 'active' : ''}`}>{label}</a>)}</nav>
        <div className="flex items-center gap-2">
          <a href="#/contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#e86d2a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#c95820]">Start a conversation <ArrowUpRight size={14}/></a>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-[#182722] text-white xl:hidden">{open ? <X/> : <Menu/>}</button>
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
        <div><div className="display text-4xl leading-none md:text-6xl">Made with purpose.<br/><i className="text-[#ff9a55]">Processed with care.</i></div><p className="mt-6 max-w-xl text-sm leading-7 text-white/55">Quality merchandising, timely delivery, high compliance and dedicated customer service since 1993.</p></div>
        <div><div className="footer-label">Navigate</div><div className="mt-5 grid gap-3 text-sm text-white/70">{links.slice(1).map(([to,label]) => <a href={`#${to}`} key={to} className="hover:text-white">{label}</a>)}</div></div>
        <div><div className="footer-label">Factory</div><p className="mt-5 text-sm leading-7 text-white/70">Ghoradia, Narsingdi Sador<br/>Narsingdi-1602, Bangladesh</p><a href="tel:88029462750" className="mt-5 block text-xl font-bold">88-02-9462750</a><a href="mailto:info@nodibanglagroup.com" className="mt-2 block text-sm text-[#ff9a55]">info@nodibanglagroup.com</a></div>
      </div>
      <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[.16em] text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Abed Textile Processing Mills Ltd.</span><span>BTMEA & NCCI Member</span></div>
    </Shell>
  </footer>;
}

function Lightbox({ state, close, move }: { state: {items:LightboxItem[]; index:number}|null; close:()=>void; move:(n:number)=>void }) {
  useEffect(() => { document.body.style.overflow = state ? 'hidden' : ''; return () => { document.body.style.overflow=''; }; }, [state]);
  if (!state) return null;
  const item = state.items[state.index];
  return <div onClick={close} className="fixed inset-0 z-[100] grid place-items-center bg-[#101b18]/95 p-5"><button className="absolute right-5 top-5 text-white" onClick={close}><X/></button><button onClick={e=>{e.stopPropagation();move(-1)}} className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white"><ChevronLeft/></button><img onClick={e=>e.stopPropagation()} src={item.src} alt={item.title||''} className="max-h-[82vh] max-w-[86vw] object-contain"/><button onClick={e=>{e.stopPropagation();move(1)}} className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white"><ChevronRight/></button></div>;
}

export default function App() {
  const [lightbox, setLightbox] = useState<{items:LightboxItem[];index:number}|null>(null);
  const openLightbox = (items:LightboxItem[], index:number) => setLightbox({items,index});
  const move = (n:number) => setLightbox(s => s ? ({...s,index:(s.index+n+s.items.length)%s.items.length}) : s);
  return <AppContext.Provider value={{openLightbox}}><HashRouter><ScrollTop/><Navbar/><main><Routes>
    <Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/units" element={<UnitsPage/>}/><Route path="/machinery" element={<MachineryPage/>}/><Route path="/products" element={<ProductsPage/>}/><Route path="/compliance" element={<CompliancePage/>}/><Route path="/leadership" element={<LeadershipPage/>}/><Route path="/gallery" element={<GalleryPage/>}/><Route path="/contact" element={<ContactPage/>}/>
  </Routes></main><Footer/><Lightbox state={lightbox} close={()=>setLightbox(null)} move={move}/></HashRouter></AppContext.Provider>;
}
