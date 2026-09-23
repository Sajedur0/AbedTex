import { ArrowUpRight } from 'lucide-react';
import { assets } from '../assets';
import { useApp } from '../App';
import { PageHero, Shell } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

export default function GalleryPage(){const {openLightbox}=useApp();const items=assets.gallery.map((x,i)=>({...x,title:`Facility view ${String(i+1).padStart(2,'0')}`}));return <div><PageHero kicker="Gallery / Inside the facility" title="The work, in view." intro="A visual record of Abed Textile Processing Mills Ltd. — its production environment, machinery, people and facility."/>
  <section className="bg-[#f7f3eb]"><Shell className="py-12 lg:py-20"><div className="columns-1 gap-5 sm:columns-2 lg:columns-3">{items.map((item,i)=><Reveal key={item.src} delay={(i%3)*60}><button onClick={()=>openLightbox(items,i)} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden bg-[#182722]"><SmartImg img={item.thumb} alt={item.title} sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 100vw" className={`w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80 ${i%4===0?'aspect-[4/5]':'aspect-[4/3]'}`}/><span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white">{item.title}</span><span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={15}/></span></button></Reveal>)}</div></Shell></section>
</div>}
