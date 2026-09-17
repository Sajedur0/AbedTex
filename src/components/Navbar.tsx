import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Languages, ChevronRight } from 'lucide-react';
import { useApp } from '../App';
import { assets } from '../assets';

const navLinks = [
  { to: '/', labelEn: 'Home', labelBn: 'হোম' },
  { to: '/about', labelEn: 'About', labelBn: 'কোম্পানি' },
  { to: '/units', labelEn: 'Units', labelBn: 'প্রোডাকশন' },
  { to: '/machinery', labelEn: 'Machinery', labelBn: 'মেশিনারি' },
  { to: '/products', labelEn: 'Products', labelBn: 'পণ্যসমূহ' },
  { to: '/compliance', labelEn: 'Compliance', labelBn: 'কমপ্লায়েন্স' },
  { to: '/leadership', labelEn: 'Leadership', labelBn: 'পরিচালনা' },
  { to: '/gallery', labelEn: 'Gallery', labelBn: 'গ্যালারি' },
  { to: '/contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
];

export function LogoBadge({ size = 'md' }: { size?: 'md' | 'sm' }) {
  const dim = size === 'md' ? 'w-10 h-10' : 'w-9 h-9';
  return (
    <div className={`${dim} rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-amber-400 p-[2px] shadow-md`}>
      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-1">
        <img src={assets.logo} alt="Abed Textile logo" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang } = useApp();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'glass-panel shadow-lg shadow-slate-900/5'
          : 'bg-white/70 backdrop-blur-md border-b border-white/40'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-[68px]">
          {/* Brand */}
          <a href="#/" className="flex items-center gap-3 group shrink-0" aria-label="Abed Textile home">
            <LogoBadge />
            <div className="leading-tight">
              <span className="font-extrabold text-[17px] tracking-tight text-slate-900 block group-hover:text-sky-600 transition-colors">
                {lang === 'bn' ? 'আবেদ টেক্সটাইল' : 'ABED TEXTILE'}
              </span>
              <span className="text-[10px] font-bold tracking-[0.18em] text-amber-600 uppercase block">
                {lang === 'bn' ? 'প্রসেসিং মিলস লিঃ' : 'Processing Mills Ltd.'}
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5 text-[13px] font-semibold text-slate-700">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  className={`relative px-3 py-2 rounded-lg transition-colors ${
                    active ? 'text-sky-600' : 'hover:text-sky-600 hover:bg-sky-500/5'
                  }`}
                >
                  {lang === 'bn' ? link.labelBn : link.labelEn}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-[2.5px] rounded-full bg-gradient-to-r from-sky-500 to-amber-400 transition-all duration-300 ${
                      active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="px-3 py-2 rounded-lg bg-white border border-sky-500/30 text-xs font-bold text-sky-600 hover:bg-sky-500/10 hover:border-sky-500/60 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              aria-label="Switch language"
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-600 transition-all shadow-sm cursor-pointer"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? 'max-h-[calc(100vh-68px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass-panel border-t border-slate-200/70 px-4 sm:px-6 py-4 max-h-[calc(100vh-68px)] overflow-y-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navLinks.map((link, i) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.to} style={{ transitionDelay: `${i * 25}ms` }}>
                  <a
                    href={`#${link.to}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                        : 'text-slate-700 hover:bg-sky-500/10 hover:text-sky-600'
                    }`}
                  >
                    <span>{lang === 'bn' ? link.labelBn : link.labelEn}</span>
                    <ChevronRight className={`w-4 h-4 ${active ? 'opacity-80' : 'opacity-40'}`} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
            <span>{lang === 'bn' ? '১৯৯৩ সাল থেকে সেরা মানে' : 'Certified Excellence Since 1993'}</span>
            <span className="font-bold text-sky-600">Oeko-Tex ✓</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
