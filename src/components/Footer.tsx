import { Phone, Mail, MapPin, ArrowUp, BadgeCheck } from 'lucide-react';
import { useApp } from '../App';
import { LogoBadge } from './Navbar';

export default function Footer() {
  const { lang } = useApp();

  const nav = [
    { href: '#/about', labelEn: 'About Us', labelBn: 'আমাদের সম্পর্কে' },
    { href: '#/units', labelEn: 'Production Units', labelBn: 'উৎপাদন ইউনিট' },
    { href: '#/machinery', labelEn: 'Machinery', labelBn: 'মেশিনারি' },
    { href: '#/products', labelEn: 'Products', labelBn: 'পণ্যসমূহ' },
    { href: '#/compliance', labelEn: 'Compliance', labelBn: 'কমপ্লায়েন্স' },
    { href: '#/leadership', labelEn: 'Leadership', labelBn: 'পরিচালনা পর্ষদ' },
    { href: '#/gallery', labelEn: 'Gallery', labelBn: 'গ্যালারি' },
    { href: '#/contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  const fabrics = [
    'Exclusive Shari (Sharee)',
    'Three-Piece (3 Pcs) Suits',
    'Poplin & Voile (Boil)',
    'Lillian & Knit Fancy Prints',
    'Flatbed Screen & Digital Prints',
  ];

  return (
    <footer className="relative bg-brand-950 text-slate-300 text-sm overflow-hidden">
      {/* Decorative top edge */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-amber-400 to-sky-500" />
      <div className="absolute inset-0 textile-grid-dark opacity-40 pointer-events-none" />
      <div className="glow-orb w-[420px] h-[420px] bg-sky-500/40 -top-40 -left-32" />
      <div className="glow-orb w-[360px] h-[360px] bg-amber-500/25 -bottom-40 -right-24" />

      <div className="relative container-x pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <LogoBadge />
              <div>
                <h3 className="font-extrabold text-white text-base leading-snug">
                  {lang === 'bn' ? 'আবেদ টেক্সটাইল প্রসেসিং মিলস লিঃ' : 'Abed Textile Processing Mills Ltd.'}
                </h3>
                <p className="text-[11px] text-amber-400 font-bold tracking-[0.16em] uppercase mt-0.5">
                  Nodi Bangla Group
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed">
              {lang === 'bn'
                ? '১৯৯৩ সাল থেকে Oeko-Tex সার্টিফাইড ১০০% রপ্তানিমুখী আধুনিক টেক্সটাইল প্রসেসিং মিলস — ডাইং, প্রিন্টিং ও ফিনিশিংয়ে বিশ্বমানের নাম।'
                : 'An Oeko-Tex Certified 100% export oriented textile processing mill since 1993 — a world-class name in dyeing, printing & finishing.'}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Oeko-Tex 100', 'ISO Certified', 'SA-8000'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300"
                >
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.16em] mb-4">
              {lang === 'bn' ? 'ন্যাভিগেশন' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 hover:text-sky-300 transition-colors">
                    {lang === 'bn' ? l.labelBn : l.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fabrics */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.16em] mb-4">
              {lang === 'bn' ? 'প্রধান পণ্যসমূহ' : 'Our Fabrics'}
            </h4>
            <ul className="space-y-2.5 text-[13px] text-slate-400">
              {fabrics.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-amber-400 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.16em] mb-4">
              {lang === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </h4>
            <ul className="space-y-3.5 text-[13px]">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sky-300" />
                </span>
                <span className="text-slate-400 leading-relaxed">
                  Ghoradia, Narsingdi Sador,<br />
                  {lang === 'bn' ? 'বাংলাদেশ' : 'Bangladesh'}
                </span>
              </li>
              <li>
                <a href="tel:+88029462750" className="flex items-center gap-3 text-slate-400 hover:text-sky-300 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-sky-300" />
                  </span>
                  <span>+88-02-9462750</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nodibanglagroup.com" className="flex items-center gap-3 text-slate-400 hover:text-amber-300 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-amber-300" />
                  </span>
                  <span className="truncate">info@nodibanglagroup.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {lang === 'bn' ? 'আবেদ টেক্সটাইল প্রসেসিং মিলস লিঃ' : 'Abed Textile Processing Mills Ltd.'}{' '}
            — {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-600">{lang === 'bn' ? '১৯৯৩ থেকে' : 'Since 1993'}</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400/40 transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'উপরে যান' : 'Back to Top'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
