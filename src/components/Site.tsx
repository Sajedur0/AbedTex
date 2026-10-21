import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export function Shell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] ${light ? 'text-[#ffb15c]' : 'text-[#bc591f]'}`}><span className="h-px w-8 bg-current" />{children}</div>;
}

export function PageHero({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="page-hero border-b border-black/10 bg-[#efe9df]">
      <Shell className="py-12 sm:py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
          <div className="max-w-4xl">
            <Eyebrow>{kicker}</Eyebrow>
            <h1 className="display text-[clamp(2.25rem,8.5vw,7rem)] leading-[.95] sm:leading-[.88] lg:leading-[.84] text-[#182722]">{title}</h1>
          </div>
          <div>
            <p className="max-w-md text-[15px] leading-7 text-[#4d5752]">{intro}</p>
            {children}
          </div>
        </div>
      </Shell>
    </section>
  );
}

export function LinkArrow({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <a href={href} className={`group inline-flex items-center gap-3 text-sm font-bold ${light ? 'text-white' : 'text-[#182722]'}`}>{children}<span className={`grid h-9 w-9 place-items-center rounded-full transition-transform group-hover:translate-x-1 ${light ? 'bg-white text-[#182722]' : 'bg-[#e86d2a] text-white'}`}><ArrowRight size={15} /></span></a>;
}
