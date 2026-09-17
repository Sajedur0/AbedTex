import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UnitsPage from './pages/UnitsPage';
import MachineryPage from './pages/MachineryPage';
import ProductsPage from './pages/ProductsPage';
import CompliancePage from './pages/CompliancePage';
import LeadershipPage from './pages/LeadershipPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import RevealController from './components/RevealController';

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

// Layout
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-slate-900 bg-white font-sans flex flex-col">
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
      <Lightbox />
      <RevealController />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number; items: LightboxItem[] }>({
    open: false,
    index: 0,
    items: [],
  });

  const openLightbox = (items: LightboxItem[], index: number) => {
    setLightbox({ open: true, index, items });
  };

  // Set the document language for correct Bengali font + accessibility
  useEffect(() => {
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    document.title =
      lang === 'bn'
        ? 'আবেদ টেক্সটাইল প্রসেসিং মিলস লিঃ | আবেদ টেক্সটাইল'
        : 'Abed Textile Processing Mills Ltd. | আবেদ টেক্সটাইল প্রসেসিং মিলস লিঃ';
  }, [lang]);

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
