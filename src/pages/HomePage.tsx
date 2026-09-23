import { ArrowDown, ArrowUpRight, Check, Recycle } from 'lucide-react';
import { assets } from '../assets';
import { facts, products, customers } from '../profile';
import { Eyebrow, LinkArrow, Shell } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

const sectionCards = [
  { title: 'Printing', img: assets.banners.flatbed, text: 'Automatic flat bed screen and rotary printing.' },
  { title: 'Dyeing', img: assets.banners.dyeing, text: 'Jiggers, mercerizing and pad batch capability.' },
  { title: 'Finishing', img: assets.banners.finishing, text: 'Standers, calendars, folding and washing.' },
];

export default function HomePage() {
  return <div>
    <section className="relative min-h-[calc(100vh-112px)] overflow-hidden bg-[#182722] text-white">
      <SmartImg img={assets.hero} alt="Abed Textile factory" priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-45"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#182722] via-[#182722]/85 to-transparent"/>
      <Shell className="relative flex min-h-[calc(100vh-112px)] flex-col justify-between py-10 lg:py-14">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-[.2em] text-white/55"><span>Ghoradia · Narsingdi</span><span>23°55' N · 90°43' E</span></div>
        <div className="grid items-end gap-12 py-16 lg:grid-cols-[1fr_340px]">
          <div><Eyebrow light>Textile processing since 1993</Eyebrow><h1 className="display max-w-5xl text-[clamp(4rem,9.2vw,9rem)] leading-[.76] tracking-[-.065em]">Textiles,<br/><i className="text-[#ff9a55]">made to endure.</i></h1></div>
          <div className="pb-3"><p className="text-[15px] leading-7 text-white/70">An Oeko-Tex Certified, 100% export-oriented processing mill built around product quality, timed delivery, compliance and dedicated service.</p><div className="mt-7"><LinkArrow href="#/about" light>Discover our company</LinkArrow></div></div>
        </div>
        <div className="flex items-center justify-between border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-[.18em] text-white/50"><span>Scroll to explore</span><ArrowDown size={15}/></div>
      </Shell>
    </section>

    <section className="bg-[#e86d2a] text-white"><Shell className="grid grid-cols-2 divide-x divide-white/25 border-x border-white/25 lg:grid-cols-4">
      {[[facts.machines,'production machineries'],[facts.workforce,'employees'],[`${facts.capacity} yds`,'monthly capacity'],[facts.floor,'sq. ft. floor space']].map(([n,l])=><div key={l} className="px-5 py-8 lg:px-8 lg:py-10"><div className="display text-3xl md:text-5xl">{n}</div><div className="mt-2 text-[10px] font-bold uppercase tracking-[.15em] text-white/70">{l}</div></div>)}
    </Shell></section>

    <section className="bg-[#f7f3eb]"><Shell className="py-20 lg:py-28"><div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
      <Reveal><div><Eyebrow>What drives us</Eyebrow><h2 className="display text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">Quality is not a stage.<br/><i className="text-[#bc591f]">It is the system.</i></h2></div></Reveal>
      <Reveal delay={100}><div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
        {[['01','Product quality','High-standard Shari, 3 Pcs, Poplin, Voile, Knit Fabrics and Ladies Print.'],['02','Timed delivery','A production model focused on dependable delivery and long-term customer commitment.'],['03','Compliance','A policy grounded in SA-8000, local labor law, ILO standards and buyer codes.'],['04','Customer service','Closer working relationships that create mutually beneficial partnerships.']].map(([n,t,d])=><div className="bg-[#efe9df] p-7 md:p-9" key={n}><span className="text-xs font-bold text-[#e86d2a]">{n}</span><h3 className="mt-9 text-xl font-bold">{t}</h3><p className="mt-3 text-sm leading-6 text-[#626965]">{d}</p></div>)}
      </div></Reveal>
    </div></Shell></section>

    <section className="bg-[#182722] py-20 text-white lg:py-28"><Shell><Reveal><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><Eyebrow light>Our production</Eyebrow><h2 className="display text-5xl tracking-[-.04em] md:text-7xl">Print. Dye. Finish.</h2></div><LinkArrow href="#/units" light>Explore capabilities</LinkArrow></div></Reveal>
      <div className="grid gap-4 md:grid-cols-3">{sectionCards.map(({title,img,text},i)=><Reveal key={title} delay={i*80}><a href="#/units" className="group relative block aspect-[4/5] overflow-hidden"><SmartImg img={img} alt={title} sizes="(min-width:768px) 30vw, 100vw" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7"><div className="display text-4xl">{title}</div><p className="mt-2 text-sm text-white/60">{text}</p><ArrowUpRight className="absolute bottom-7 right-7"/></div></a></Reveal>)}
      </div>
    </Shell></section>

    <section className="bg-[#efe9df]"><Shell className="grid gap-14 py-20 lg:grid-cols-2 lg:py-28"><Reveal><div className="relative"><SmartImg img={assets.about} alt="Textile facility" sizes="(min-width:1024px) 46vw, 100vw" className="aspect-[4/3] w-full object-cover"/><div className="absolute -bottom-7 right-0 bg-[#e86d2a] p-6 text-white sm:right-8"><Recycle/><div className="mt-5 display text-3xl">{facts.etp}</div><div className="text-[10px] uppercase tracking-widest">Biochemical ETP</div></div></div></Reveal><Reveal delay={120}><div className="lg:pl-12"><Eyebrow>Responsibility in practice</Eyebrow><h2 className="display text-5xl leading-[.92] tracking-[-.04em] md:text-7xl">Built for the<br/><i className="text-[#bc591f]">long view.</i></h2><p className="mt-7 max-w-xl text-[15px] leading-7 text-[#5c645f]">A {facts.etpArea} effluent treatment facility uses a biochemical process and modern machinery imported from Ecotex Pte Ltd., Singapore.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{['SA-8000 based policy','ILO & labor law standards','Worker health care','12+ fire drills each year'].map(x=><div key={x} className="flex items-center gap-3 border-t border-black/15 py-3 text-sm font-semibold"><Check size={15} className="text-[#e86d2a]"/>{x}</div>)}</div><div className="mt-7"><LinkArrow href="#/compliance">Our responsibility</LinkArrow></div></div></Reveal></Shell></section>

    <section className="bg-[#f7f3eb]"><Shell className="py-20 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]"><div><Eyebrow>Product range</Eyebrow><p className="text-sm leading-6 text-[#626965]">Core products developed for the needs of specialty retailers and textile partners.</p></div><div className="border-t border-black/15">{products.map((p,i)=><a href="#/products" key={p} className="group flex items-center justify-between border-b border-black/15 py-5"><span className="display text-3xl transition group-hover:translate-x-2 md:text-5xl"><small className="mr-5 align-middle font-sans text-[10px] text-[#e86d2a]">0{i+1}</small>{p}</span><ArrowUpRight className="opacity-30 group-hover:opacity-100"/></a>)}</div></div>
      <div className="mt-20 border-t border-black/15 pt-8"><div className="mb-6 text-[10px] font-bold uppercase tracking-[.18em] text-[#7a7e7b]">Selected customers</div><div className="flex flex-wrap gap-x-9 gap-y-4">{customers.map(c=><span key={c} className="text-sm font-bold text-[#424945]">{c}</span>)}</div></div>
    </Shell></section>
  </div>;
}
