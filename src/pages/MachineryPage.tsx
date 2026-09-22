import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { facts, machinery } from '../profile';
import { PageHero, Shell } from '../components/Site';

export default function MachineryPage(){const [q,setQ]=useState('');const filtered=useMemo(()=>machinery.filter(([n])=>n.toLowerCase().includes(q.toLowerCase())),[q]);return <div>
  <PageHero kicker="Machinery / 24 types" title="The production floor." intro="A total of 72 production machineries. Modern units were imported brand-new from Japan, India, China and Taiwan."/>
  <section className="bg-[#f7f3eb]"><Shell className="py-14 lg:py-20"><div className="mb-10 grid gap-5 md:grid-cols-[1fr_320px] md:items-end"><div><span className="display text-6xl text-[#e86d2a]">{facts.machines}</span><span className="ml-4 text-xs font-bold uppercase tracking-widest text-[#737975]">Total pieces</span></div><label className="flex items-center gap-3 border-b border-black/30 py-3"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search equipment" className="w-full bg-transparent text-sm outline-none"/></label></div>
    <div className="border-t-2 border-[#182722]">{filtered.map(([name,count],i)=><div key={name} className="group grid grid-cols-[45px_1fr_70px] items-center border-b border-black/15 py-5 md:grid-cols-[100px_1fr_140px]"><span className="text-[10px] font-bold text-[#a0a39f]">{String(i+1).padStart(2,'0')}</span><h2 className="text-lg font-bold transition group-hover:translate-x-2 md:text-2xl">{name}</h2><div className="text-right"><span className="display text-3xl text-[#bc591f]">{count}</span><span className="ml-2 text-[10px] uppercase text-[#737975]">pcs</span></div></div>)}</div>
    {!filtered.length&&<p className="py-16 text-center text-sm text-[#737975]">No machinery matches your search.</p>}
  </Shell></section>
</div>}
