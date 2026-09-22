import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { assets } from './assets';

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

interface AppContextType {
  lightbox: { open: boolean; index: number; items: LightboxItem[] };
  setLightbox: (lb: { open: boolean; index: number; items: LightboxItem[] }) => void;
  openLightbox: (items: LightboxItem[], index: number) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Lightbox() {
  const { lightbox, setLightbox } = useApp();
  useEffect(() => {
    if (lightbox.open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox.open]);
  if (!lightbox.open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070d1a]/92 backdrop-blur-xl p-4 md:p-8" onClick={() => setLightbox({ ...lightbox, open: false })}>
      <button onClick={() => setLightbox({ ...lightbox, open: false })} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition-colors">
        <X size={18} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index > 0 ? lightbox.index - 1 : lightbox.items.length - 1 }); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white text-[#0f2a44] flex items-center justify-center shadow-xl hover:scale-105 hover:shadow-2xl transition-all">
        <ChevronLeft size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index < lightbox.items.length - 1 ? lightbox.index + 1 : 0 }); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white text-[#0f2a44] flex items-center justify-center shadow-xl hover:scale-105 hover:shadow-2xl transition-all">
        <ChevronRight size={20} />
      </button>
      <div className="max-w-[92vw] md:max-w-5xl max-h-[86vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={lightbox.items[lightbox.index].src} alt="" className="max-h-[74vh] w-auto max-w-full rounded-2xl object-contain bg-white shadow-2xl" />
        <div className="mt-4 flex items-center gap-3 text-white/90">
          <span className="text-sm font-medium tracking-tight">{lightbox.items[lightbox.index].title || ''}</span>
          <span className="text-xs bg-white/15 px-2.5 py-1 rounded-full backdrop-blur">{lightbox.index + 1} / {lightbox.items.length}</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────
function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/units', label: 'Units' },
    { to: '/machinery', label: 'Machinery' },
    { to: '/products', label: 'Products' },
    { to: '/compliance', label: 'Compliance' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top strip */}
      <div className="w-full bg-[#0f2a44] text-white/90 text-[12px] hidden lg:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 h-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Oeko-Tex Certified • Since 1993 • 100% Export Oriented
            </span>
            <span className="opacity-30">|</span>
            <span className="text-white/55">Ghoradia, Narsingdi — 153,372 sq.ft. • 45 mins from Dhaka</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+8802462750" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} /> 88-02-9462750
            </a>
            <a href="mailto:info@abedtextile.com" className="hover:text-white transition-colors">info@abedtextile.com</a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/[0.97] backdrop-blur-xl shadow-[0_1px_0_rgba(15,42,68,0.06),0_8px_28px_rgba(15,42,68,0.06)]' : 'bg-white border-b border-[#0f2a44]/[0.06]'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between h-[64px] lg:h-[68px] gap-4">
            {/* Logo */}
            <a href="#/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-[42px] h-[42px] rounded-[11px] bg-white border border-[#0f2a44]/[0.08] shadow-sm flex items-center justify-center p-1.5 group-hover:border-[#0f2a44]/15 group-hover:shadow-md transition-all">
                <img src={assets.logo} alt="Abed Textile" className="w-full h-full object-contain" />
              </div>
              <div className="leading-none">
                <div className="font-[800] tracking-[-0.02em] text-[15px] lg:text-[16px] text-[#0f2a44]">ABED TEXTILE</div>
                <div className="text-[11px] font-semibold tracking-[0.13em] text-[#b88a5a] mt-0.5 uppercase">Processing Mills Ltd.</div>
              </div>
            </a>

            {/* Center nav — desktop */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <a
                    key={link.to}
                    href={`#${link.to}`}
                    className={`relative px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300 ${active ? 'text-[#0f2a44]' : 'text-[#0f2a44]/55 hover:text-[#0f2a44]'}`}
                  >
                    {link.label}
                    {active && <span className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] bg-[#0f2a44] rounded-full" />}
                  </a>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2 text-xs">
                <span className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Production
                </span>
              </div>
              <a href="#/contact" className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0f2a44] text-white text-[13px] font-semibold hover:bg-[#0c2238] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Get Quote
              </a>
              <a href="tel:+8801713562042" className="hidden lg:inline-flex w-10 h-10 rounded-full bg-[#fdfbf7] border border-[#0f2a44]/[0.08] items-center justify-center text-[#0f2a44] hover:bg-white hover:border-[#0f2a44]/15 transition-all">
                <Phone size={16} />
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden w-10 h-10 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`xl:hidden overflow-hidden bg-white border-t border-[#0f2a44]/[0.05] transition-all duration-500 ease-out ${mobileOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="w-full px-4 py-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className={`px-4 py-3 rounded-2xl text-sm font-medium border transition-all duration-300 ${location.pathname === link.to ? 'bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm' : 'bg-[#fdfbf7] text-[#0f2a44] border-[#0f2a44]/[0.08] hover:border-[#0f2a44]/15'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="px-4 pb-4">
            <a href="#/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#0f2a44] text-white text-sm font-bold shadow-sm">
              Get Free Consultation <ArrowUp className="rotate-45" size={14} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative bg-[#070d1a] text-stone-300">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-12 lg:pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">
          {/* Brand — 5 cols */}
          <div className="xl:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                <img src={assets.logo} alt="logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-white tracking-tight text-[15px] leading-none">Abed Textile Processing Mills Ltd.</div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#d4a574] font-semibold mt-1">Since 1993 • 100% Export Oriented</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-[560px]">
              An Oeko-Tex Certified 100% Export Oriented Manufacturer of Quality Processing Mills since 1993. 4.5M yards monthly capacity, 42 modern imported machineries, 1000+ skilled workforce. Premium Shari, 3-Pcs, Poplin, Voile & Fancy Fabrics for global export.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-stone-300">Oeko-Tex 100</span>
              <span className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-stone-300">ISO Certified</span>
              <span className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-stone-300">BTMEA</span>
              <span className="px-3 py-1.5 rounded-full bg-[#d4a574] text-[#070d1a] text-xs font-bold">ATPML</span>
            </div>
          </div>

          {/* Explore — 2 cols */}
          <div className="xl:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white mb-4">Explore</h4>
            <ul className="grid grid-cols-2 xl:grid-cols-1 gap-2.5 text-sm text-stone-400">
              {[
                { href: '#/about', label: 'About Company' },
                { href: '#/units', label: 'Production Units' },
                { href: '#/machinery', label: 'Machineries (42)' },
                { href: '#/products', label: 'Products & Fabrics' },
                { href: '#/compliance', label: 'Compliance' },
                { href: '#/gallery', label: 'Gallery' },
                { href: '#/leadership', label: 'Leadership' },
              ].map((link) => (
                <li key={link.href}><a href={link.href} className="hover:text-white transition-colors duration-300 border-gradient">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Fabrics — 2 cols */}
          <div className="xl:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white mb-4">Our Fabrics</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {['Exclusive Shari', 'Three-Piece Suits', 'Poplin & Voile', 'Lillian & Fancy', 'Knit & Jersey', 'Digital • Flatbed • Rotary'].map((fabric) => (
                <li key={fabric} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#d4a574]" /> {fabric}</li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="xl:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white mb-4">Factory & Contact</h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex gap-3">
                <span className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 text-xs">⌖</span>
                <span className="text-stone-300 leading-relaxed">
                  459/A Madrampur, Taragona, Ghoradia<br />Narsingdi Sadar, Narsingdi, Bangladesh
                </span>
              </div>
              <div className="flex gap-3 items-center text-stone-300">
                <span className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 text-xs">✆</span>
                <span className="font-medium">88-02-9462750 • +880 1713-562042</span>
              </div>
              <a href="mailto:info@abedtextile.com" className="flex gap-3 items-center text-stone-400 hover:text-white transition-colors duration-300">
                <span className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 text-xs">@</span>
                info@abedtextile.com
              </a>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-xl bg-white/[0.05] border border-white/[0.08] p-3 text-center hover:bg-white/[0.08] transition-colors">
                <div className="text-white font-[800] text-sm">4.5M</div>
                <div className="text-[10px] text-stone-500 uppercase tracking-wide font-semibold">Yards/mo</div>
              </div>
              <div className="rounded-xl bg-white/[0.05] border border-white/[0.08] p-3 text-center hover:bg-white/[0.08] transition-colors">
                <div className="text-white font-[800] text-sm">42</div>
                <div className="text-[10px] text-stone-500 uppercase tracking-wide font-semibold">Machines</div>
              </div>
              <div className="rounded-xl bg-[#d4a574] p-3 text-center hover:bg-[#c99b68] transition-colors">
                <div className="text-[#070d1a] font-[800] text-sm">1993</div>
                <div className="text-[10px] text-[#070d1a]/65 uppercase tracking-wide font-bold">Since</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500 text-center lg:text-left">
            © {new Date().getFullYear()} Abed Textile Processing Mills Ltd. • All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-stone-500">Crafted for export excellence</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#070d1a] text-xs font-bold hover:bg-stone-100 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <ArrowUp size={14} /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#fdfbf7] font-sans selection:bg-[#0f2a44] selection:text-white">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <Lightbox />
    </div>
  );
}

export default function App() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number; items: LightboxItem[] }>({ open: false, index: 0, items: [] });
  const openLightbox = (items: LightboxItem[], index: number) => setLightbox({ open: true, index, items });
  return (
    <AppContext.Provider value={{ lightbox, setLightbox, openLightbox }}>
      <HashRouter>
        <ScrollToTop />
        <Layout>
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
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
}
