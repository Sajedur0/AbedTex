import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
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

// Subtle paper texture backdrop instead of canvas
const AmbientBackdrop = () => (
  <div className="fixed inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[#fdfbf7]" />
    <div className="absolute inset-0 opacity-[0.035]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }} />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-[#0f2a44]/[0.03] to-transparent rounded-full blur-3xl" />
  </div>
);

function Lightbox() {
  const { lightbox, setLightbox } = useApp();
  useEffect(() => {
    if (lightbox.open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox.open]);
  if (!lightbox.open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070d1a]/90 backdrop-blur-xl p-4 md:p-8" onClick={() => setLightbox({ ...lightbox, open: false })}>
      <button onClick={() => setLightbox({ ...lightbox, open: false })} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 text-white flex items-center justify-center backdrop-blur">
        <X size={18} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index > 0 ? lightbox.index - 1 : lightbox.items.length - 1 }); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white text-[#0f2a44] flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
        <ChevronLeft size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index < lightbox.items.length - 1 ? lightbox.index + 1 : 0 }); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white text-[#0f2a44] flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
        <ChevronRight size={20} />
      </button>
      <div className="max-w-[92vw] md:max-w-5xl max-h-[86vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={lightbox.items[lightbox.index].src} alt="" className="max-h-[74vh] w-auto max-w-full rounded-2xl object-contain bg-white shadow-2xl" />
        <div className="mt-4 flex items-center gap-3 text-white/90">
          <span className="text-sm font-medium tracking-tight">{lightbox.items[lightbox.index].title || ''}</span>
          <span className="text-xs bg-white/15 px-2.5 py-1 rounded-full">{lightbox.index + 1} / {lightbox.items.length}</span>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav shadow-[0_1px_0_rgba(15,42,68,0.06),0_8px_24px_rgba(15,42,68,0.06)]' : 'bg-white/0 border-b border-transparent'}`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
            {/* Logo */}
            <a href="#/" className="flex items-center gap-3.5 group shrink-0">
              <div className="w-[42px] h-[42px] rounded-[12px] bg-white border border-[#0f2a44]/10 shadow-sm flex items-center justify-center p-1.5 group-hover:border-[#0f2a44]/15 transition-colors">
                <img src={assets.logo} alt="Abed Textile" className="w-full h-full object-contain" />
              </div>
              <div className="leading-none">
                <div className="font-[800] tracking-[-0.02em] text-[15px] lg:text-[16px] text-[#0f2a44]">ABED TEXTILE</div>
                <div className="text-[11px] font-semibold tracking-[0.14em] text-[#b88a5a] mt-0.5 uppercase">Processing Mills Ltd.</div>
              </div>
            </a>

            {/* Center nav - desktop */}
            <nav className="hidden xl:flex items-center gap-1 bg-white border border-[#0f2a44]/[0.06] rounded-full p-1 shadow-sm">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <a
                    key={link.to}
                    href={`#${link.to}`}
                    className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all ${active ? 'bg-[#0f2a44] text-white shadow-sm' : 'text-[#0f2a44]/70 hover:text-[#0f2a44] hover:bg-[#0f2a44]/5'}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <a href="#/contact" className="hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0f2a44] text-white text-[13px] font-semibold hover:bg-[#0c2238] transition-colors shadow-sm">
                Get Quote
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden w-9 h-9 rounded-full bg-white border border-[#0f2a44]/10 flex items-center justify-center text-[#0f2a44] shadow-sm">
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile drawer */}
        <div className={`xl:hidden overflow-hidden border-t border-[#0f2a44]/5 bg-white/95 backdrop-blur-xl transition-all ${mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className={`px-4 py-3 rounded-2xl text-sm font-medium border transition-colors ${location.pathname === link.to ? 'bg-[#0f2a44] text-white border-[#0f2a44]' : 'bg-[#fdfbf7] text-[#0f2a44] border-[#0f2a44]/10'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
      <div className="h-[68px] lg:h-[76px]" />
    </>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#070d1a] text-stone-300">
      {/* top accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5">
                <img src={assets.logo} alt="logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-white tracking-tight text-[15px]">Abed Textile Processing Mills Ltd.</div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#d4a574] font-semibold">Nodi Bangla Group • Since 1993</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-md">
              An Oeko-Tex Certified 100% Export Oriented Manufacturer of Quality Processing Mills since 1993. 4.5M yards monthly, 42 machines, 1000+ workforce.
            </p>
            <div className="flex gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-stone-300">Oeko-Tex 100</span>
              <span className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-stone-300">ISO Certified</span>
              <span className="px-3 py-1.5 rounded-full bg-[#d4a574] text-[#070d1a] text-xs font-bold">ATPML</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><a href="#/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#/units" className="hover:text-white transition-colors">Units</a></li>
              <li><a href="#/machinery" className="hover:text-white transition-colors">Machinery</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#/compliance" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#/gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white mb-4">Fabrics</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>Exclusive Shari</li>
              <li>Three-Piece Suits</li>
              <li>Poplin & Voile</li>
              <li>Lillian & Knit</li>
              <li>Flatbed & Digital</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">⌖</span>
                <span className="text-stone-300 leading-relaxed">Ghoradia, Narsingdi Sadar<br />Narsingdi, Bangladesh</span>
              </div>
              <div className="flex gap-3 items-center text-stone-300">
                <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 text-xs">✆</span>
                88-02-9462750
              </div>
              <div className="flex gap-3 items-center text-stone-400 text-[13px]">
                <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 text-xs">@</span>
                info@nodibanglagroup.com
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500">© {new Date().getFullYear()} Abed Textile Processing Mills Ltd. All rights reserved.</div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#070d1a] text-xs font-bold hover:bg-stone-100 transition-colors">
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#fdfbf7] font-sans selection:bg-[#0f2a44] selection:text-white">
      <AmbientBackdrop />
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
