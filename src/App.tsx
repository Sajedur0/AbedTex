import { createContext, useContext, useState, ReactNode, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
  lang: string;
  setLang: (l: string) => void;
  lightbox: { open: boolean; index: number; items: LightboxItem[] };
  setLightbox: (lb: { open: boolean; index: number; items: LightboxItem[] }) => void;
  openLightbox: (items: LightboxItem[], index: number) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useApp = () => useContext(AppContext);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const TextileCanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const node = canvasRef.current;
    if (!node) return;
    const ctx = node.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (node.width = window.innerWidth);
    let height = (node.height = window.innerHeight);

    const handleResize = () => {
      width = node.width = window.innerWidth;
      height = node.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let step = 0;
    const lines = 16;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.012;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const yOffset = (height / lines) * i;
        const alpha = 0.06 + (Math.sin(step + i * 0.4) + 1) * 0.03;
        ctx.strokeStyle = i % 2 === 0 ? `rgba(56, 189, 248, ${alpha})` : `rgba(245, 158, 11, ${alpha * 0.8})`;
        ctx.lineWidth = 1.2;
        for (let x = 0; x < width; x += 20) {
          const wave1 = Math.sin(x * 0.003 + step + i * 0.2) * 25;
          const wave2 = Math.cos(x * 0.006 - step * 0.8 + i) * 12;
          const y = yOffset + wave1 + wave2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
};

// Lightbox Component
function Lightbox() {
  const { lightbox, setLightbox } = useApp();
  if (!lightbox.open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
      onClick={() => setLightbox({ ...lightbox, open: false })}
    >
      <button
        onClick={() => setLightbox({ ...lightbox, open: false })}
        className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 text-white text-lg"
      >
        ✕
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLightbox({
            ...lightbox,
            index: lightbox.index > 0 ? lightbox.index - 1 : lightbox.items.length - 1,
          });
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white text-xl"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLightbox({
            ...lightbox,
            index: lightbox.index < lightbox.items.length - 1 ? lightbox.index + 1 : 0,
          });
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white text-xl"
      >
        ›
      </button>
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={lightbox.items[lightbox.index].src}
          alt="Enlarged"
          className="max-h-[75vh] w-auto max-w-full rounded-xl border border-white/20 shadow-2xl object-contain"
        />
        <div className="mt-3 text-center text-white">
          <h4 className="font-bold">{lightbox.items[lightbox.index].title || ''}</h4>
          <span className="text-xs text-slate-400">{lightbox.index + 1} / {lightbox.items.length}</span>
        </div>
      </div>
    </div>
  );
}

// Navbar
function Navbar() {
  const { lang, setLang } = useApp();
  const location = useLocation();

  const navLinks = [
    { to: '/', labelEn: 'Home', labelBn: 'হোম' },
    { to: '/about', labelEn: 'About', labelBn: 'কোম্পানি' },
    { to: '/units', labelEn: 'Units', labelBn: 'প্রোডাকশন' },
    { to: '/machinery', labelEn: 'Machinery', labelBn: 'মেশিনারি' },
    { to: '/products', labelEn: 'Products', labelBn: 'পণ্যসমূহ' },
    { to: '/compliance', labelEn: 'Compliance', labelBn: 'কমপ্লায়েন্স' },
    { to: '/leadership', labelEn: 'Leadership', labelBn: 'পরিচালনা পর্ষদ' },
    { to: '/gallery', labelEn: 'Gallery', labelBn: 'গ্যালারি' },
    { to: '/contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-panel py-3 shadow-2xl border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-1">
              <img src={assets.logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div>
            <span className="font-black text-lg tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600 bg-clip-text text-transparent block leading-tight">
              {lang === 'bn' ? 'আবেদ টেক্সটাইল' : 'ABED TEXTILE'}
            </span>
            <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase block -mt-0.5">
              {lang === 'bn' ? 'নোদী বাংলা গ্রুপ' : 'Processing Mills Ltd.'}
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center space-x-1 text-xs lg:text-sm font-medium text-slate-900">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                location.pathname === link.to
                  ? 'text-sky-600 bg-sky-500/10 font-bold'
                  : 'hover:text-sky-600 hover:bg-slate-900/5'
              }`}
            >
              {lang === 'bn' ? link.labelBn : link.labelEn}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="px-3 py-1.5 rounded-lg bg-white border border-sky-500/40 text-xs font-bold text-sky-600 hover:bg-sky-500/10 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span className="text-sm">🌐</span>
            <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// Footer
function Footer() {
  const { lang } = useApp();
  return (
    <footer className="relative bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-1">
                  <img src={assets.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  {lang === 'bn' ? 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিঃ' : 'Abed Textile Processing Mills Ltd.'}
                </h3>
                <p className="text-[11px] text-amber-600 font-medium">Nodi Bangla Group</p>
              </div>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              {lang === 'bn'
                ? '১৯৯৩ সাল থেকে Oeko-Tex সার্টিফাইড ১০০% রপ্তানিমুখী আধুনিক টেক্সটাইল প্রসেসিং মিলস।'
                : 'An Oeko-Tex Certified 100% Export Oriented Manufacturer of Quality Processing Mills since 1993.'}
            </p>
          </div>
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-bold text-sm text-slate-900 uppercase">{lang === 'bn' ? 'ন্যাভিগেশন' : 'Navigation'}</h4>
            <ul className="space-y-1.5">
              <li><a href="#/about" className="hover:text-sky-600">{lang === 'bn' ? 'পরিচিতি' : 'About'}</a></li>
              <li><a href="#/units" className="hover:text-sky-600">{lang === 'bn' ? 'ইউনিটসমূহ' : 'Units'}</a></li>
              <li><a href="#/machinery" className="hover:text-sky-600">{lang === 'bn' ? 'মেশিনারি' : 'Machinery'}</a></li>
              <li><a href="#/products" className="hover:text-sky-600">{lang === 'bn' ? 'পণ্যসমূহ' : 'Products'}</a></li>
              <li><a href="#/compliance" className="hover:text-sky-600">{lang === 'bn' ? 'কমপ্লায়েন্স' : 'Compliance'}</a></li>
              <li><a href="#/gallery" className="hover:text-sky-600">{lang === 'bn' ? 'গ্যালারি' : 'Gallery'}</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-bold text-sm text-slate-900 uppercase">{lang === 'bn' ? 'প্রধান পণ্যসমূহ' : 'Fabrics'}</h4>
            <ul className="space-y-1.5">
              <li>Exclusive Shari (Sharee)</li>
              <li>Three-Piece (3 Pcs) Suits</li>
              <li>Poplin & Voile (Boil)</li>
              <li>Lillian & Knit Fancy Prints</li>
              <li>Flatbed Screen & Digital Prints</li>
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-bold text-sm text-slate-900 uppercase">{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</h4>
            <div className="text-slate-700">Ghoradia, Narsingdi Sador, Bangladesh</div>
            <div>Ph: 88-02-9462750</div>
            <div>Email: info@nodibanglagroup.com</div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Abed Textile Processing Mills Ltd. All rights reserved.</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900"
          >
            ↑ {lang === 'bn' ? 'উপরে যান' : 'Back to Top'}
          </button>
        </div>
      </div>
    </footer>
  );
}

// Layout
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-slate-900 bg-white font-sans">
      <TextileCanvasComponent />
      <div className="glow-orb w-96 h-96 bg-sky-500/20 top-20 -left-20" />
      <div className="glow-orb w-96 h-96 bg-amber-500/15 top-[1200px] -right-20" />
      <Navbar />
      {children}
      <Footer />
      <Lightbox />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number; items: LightboxItem[] }>({ open: false, index: 0, items: [] });

  const openLightbox = (items: LightboxItem[], index: number) => {
    setLightbox({ open: true, index, items });
  };

  return (
    <AppContext.Provider value={{ lang, setLang, lightbox, setLightbox, openLightbox }}>
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
