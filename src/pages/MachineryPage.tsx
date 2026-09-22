import { useState } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, Table2, MapPin, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function MachineryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const machineries = [
    { id: 2, name: 'Jumbo Jigger', count: 15, cat: 'Dyeing', origin: 'India / China', desc: 'High capacity automated jigger dyeing.' },
    { id: 4, name: 'Batch Mercerize', count: 4, cat: 'Pre-Treatment', origin: 'India', desc: 'Caustic soda impregnation for improving luster.' },
    { id: 5, name: 'Folding', count: 3, cat: 'Finishing', origin: 'Japan', desc: 'Automated fabric inspection and folding.' },
    { id: 7, name: 'Boiler Unit', count: 3, cat: 'Utilities', origin: 'Japan / India', desc: 'High-pressure clean steam generation.' },
    { id: 8, name: 'Bruckner Stenter', count: 2, cat: 'Finishing', origin: 'Germany / Japan', desc: 'World renowned stenter for heat setting.' },
    { id: 9, name: 'Single Folding', count: 2, cat: 'Finishing', origin: 'Japan', desc: 'Single sheet fabric rolling and measuring.' },
    { id: 10, name: 'Heavy Generator', count: 2, cat: 'Utilities', origin: 'Japan / Europe', desc: 'Uninterrupted 24/7 power backup.' },
    { id: 11, name: 'Auto Flat Bed Screen', count: 1, cat: 'Printing', origin: 'Taiwan', desc: 'High precision multi-color automatic screen printing.' },
    { id: 12, name: 'Auto Rotary Printing', count: 1, cat: 'Printing', origin: 'Japan', desc: 'Continuous high speed rotary printing.' },
    { id: 13, name: 'Thermo Stenter', count: 1, cat: 'Finishing', origin: 'Japan', desc: 'Thermostatic drying and curing.' },
    { id: 14, name: '(CC) Stenter', count: 1, cat: 'Finishing', origin: 'China', desc: 'Auxiliary stenter unit.' },
    { id: 15, name: 'Clip Mercerize', count: 1, cat: 'Pre-Treatment', origin: 'India', desc: 'Continuous clip chain mercerization.' },
    { id: 16, name: 'Roller Mercerize', count: 1, cat: 'Pre-Treatment', origin: 'India', desc: 'Roller tensioned yarn mercerizer.' },
    { id: 17, name: 'Finishing Calendar', count: 1, cat: 'Finishing', origin: 'Japan', desc: 'Hydraulic heavy-pressure rolling.' },
    { id: 18, name: 'Sharee Calendar', count: 1, cat: 'Finishing', origin: 'Japan', desc: 'Specially engineered calender for sarees.' },
    { id: 19, name: 'Pad Batch (CPP)', count: 1, cat: 'Dyeing', origin: 'Taiwan', desc: 'Cold pad-batch reactive dyeing.' },
    { id: 20, name: 'Super Wash', count: 1, cat: 'Finishing', origin: 'Taiwan', desc: 'Post-dyeing rapid washing.' },
    { id: 21, name: 'Cylinder Dryer', count: 1, cat: 'Finishing', origin: 'China', desc: 'Steam heated multi-cylinder drying.' }
  ];

  const filtered = machineries.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.origin.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || m.cat === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#d4a574]/[0.04] blur-[60px]" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10 relative">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/[0.05] border border-[#0f2a44]/[0.08] text-[#0f2a44] text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
                  State-of-the-Art Machineries
                </div>
                <h1 className="mt-4 text-[30px] sm:text-[40px] xl:text-[44px] font-[800] tracking-[-0.03em] leading-[0.93] text-[#0f2a44]">
                  42 heavy-duty units of world-class machinery
                </h1>
              </div>
              <div className="hidden lg:block text-right shrink-0">
                <div className="text-xs font-bold tracking-widest uppercase text-stone-400">Showing</div>
                <div className="text-2xl font-[800] text-[#0f2a44]">{filtered.reduce((a, b) => a + b.count, 0)} <span className="text-sm font-semibold text-stone-400">/ 42 units</span></div>
              </div>
            </div>
          </Reveal>

          {/* Controls */}
          <Reveal delay={100}>
            <div className="mt-7 bg-white border border-[#0f2a44]/[0.08] rounded-[20px] p-3 sm:p-4 flex flex-col lg:flex-row gap-3 sm:gap-4 shadow-sm">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search machine name, origin..."
                  value={search} onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:border-[#0f2a44]/20 focus:bg-white transition-colors"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="lg:hidden text-xs font-bold text-stone-600">
                  {filtered.reduce((a, b) => a + b.count, 0)} / 42
                </div>
                <div className="flex items-center gap-1 p-1 rounded-full bg-[#fdfbf7] border border-stone-200/80">
                  <button onClick={() => setViewMode('card')} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors duration-300 ${viewMode === 'card' ? 'bg-[#0f2a44] text-white shadow-sm' : 'text-stone-600 hover:text-[#0f2a44]'}`}>
                    <LayoutGrid size={14} /> Card
                  </button>
                  <button onClick={() => setViewMode('table')} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors duration-300 ${viewMode === 'table' ? 'bg-[#0f2a44] text-white shadow-sm' : 'text-stone-600 hover:text-[#0f2a44]'}`}>
                    <Table2 size={14} /> Table
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-4 flex flex-wrap gap-2">
              {['All', 'Dyeing', 'Printing', 'Finishing', 'Pre-Treatment', 'Utilities'].map((cat) => (
                <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-300 ${category === cat ? 'bg-[#0f2a44] text-white border-[#0f2a44] shadow-sm' : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:bg-stone-50'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {filtered.map((m, i) => (
                <Reveal key={m.id} delay={Math.min(i * 40, 300)}>
                  <div className="card-modern rounded-[20px] p-5 flex flex-col justify-between group h-full">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-[11px] font-bold tracking-wide text-[#0f2a44]">{m.cat}</span>
                        <span className="px-2.5 py-1 rounded-full bg-[#0f2a44] text-white text-xs font-[800] shadow-sm">{m.count} pcs</span>
                      </div>
                      <h4 className="mt-3 text-[15px] font-bold tracking-tight text-[#0f2a44] group-hover:text-[#071425] transition-colors leading-tight">{m.name}</h4>
                      <p className="text-[13px] leading-relaxed text-stone-600 mt-2 line-clamp-2">{m.desc}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                      <span className="inline-flex items-center gap-1 text-stone-500"><MapPin size={12} /> {m.origin}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700"><CheckCircle2 size={12} /> New</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card-modern rounded-[20px] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#fdfbf7] text-xs font-bold tracking-widest uppercase text-stone-500 border-b border-stone-200">
                      <tr>
                        <th className="px-6 py-3.5">#</th>
                        <th className="px-6 py-3.5">Machine Name</th>
                        <th className="px-6 py-3.5">Category</th>
                        <th className="px-6 py-3.5">Origin</th>
                        <th className="px-6 py-3.5 text-right">Qty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {filtered.map((m, i) => (
                        <tr key={m.id} className="hover:bg-[#fdfbf7]/60 transition-colors">
                          <td className="px-6 py-3.5 text-stone-400 text-xs">{String(i + 1).padStart(2, '0')}</td>
                          <td className="px-6 py-3.5">
                            <div className="font-semibold text-[#0f2a44]">{m.name}</div>
                          </td>
                          <td className="px-6 py-3.5"><span className="px-2.5 py-1 rounded-full bg-white border border-stone-200/80 text-xs font-semibold text-[#0f2a44]">{m.cat}</span></td>
                          <td className="px-6 py-3.5 text-stone-600 text-xs">{m.origin}</td>
                          <td className="px-6 py-3.5 text-right font-[800] text-[#0f2a44]">{m.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-6 flex items-center gap-2 text-xs text-stone-500">
            <SlidersHorizontal size={14} /> All machines 100% brand-new imported • Germany, Japan, Taiwan, India, China
          </div>
        </div>
      </section>
    </div>
  );
}
