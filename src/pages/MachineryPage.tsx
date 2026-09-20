import { useState } from 'react';
import { useApp } from '../App';
import { Search, SlidersHorizontal, LayoutGrid, Table2, MapPin, CheckCircle2 } from 'lucide-react';

export default function MachineryPage() {
  const { lang } = useApp();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const machineries = [
    { id: 2, nameEn: 'Jumbo Jigger', nameBn: 'জাম্বো জিগার', count: 15, cat: 'Dyeing', origin: 'India / China', descEn: 'High capacity automated jigger dyeing.', descBn: 'বৃহৎ উৎপাদনের জন্য অটোমেটিক জিগার।' },
    { id: 4, nameEn: 'Batch Mercerize', nameBn: 'ব্যাচ মার্সারাইজ', count: 4, cat: 'Pre-Treatment', origin: 'India', descEn: 'Caustic soda impregnation for improving luster.', descBn: 'উজ্জ্বলতা বাড়াতে মার্সারাইজেশন।' },
    { id: 5, nameEn: 'Folding', nameBn: 'ফোল্ডিং মেশিন', count: 3, cat: 'Finishing', origin: 'Japan', descEn: 'Automated fabric inspection and folding.', descBn: 'স্বয়ংক্রিয় ফ্যাব্রিক পরিদর্শন ও ফোল্ডিং।' },
    { id: 7, nameEn: 'Boiler Unit', nameBn: 'বয়লার ইউনিট', count: 3, cat: 'Utilities', origin: 'Japan / India', descEn: 'High-pressure clean steam generation.', descBn: 'উচ্চ চাপের বাষ্প উৎপাদন।' },
    { id: 8, nameEn: 'Bruckner Stenter', nameBn: 'ব্রুকনার স্টেন্টার', count: 2, cat: 'Finishing', origin: 'Germany / Japan', descEn: 'World renowned stenter for heat setting.', descBn: 'হিট সেটিংয়ের জন্য বিশ্বমানের স্টেন্টার।' },
    { id: 9, nameEn: 'Single Folding', nameBn: 'সিঙ্গেল ফোল্ডিং', count: 2, cat: 'Finishing', origin: 'Japan', descEn: 'Single sheet fabric rolling and measuring.', descBn: 'একক শিট ফ্যাব্রিক রোলিং।' },
    { id: 10, nameEn: 'Heavy Generator', nameBn: 'হেভি জেনারেটর', count: 2, cat: 'Utilities', origin: 'Japan / Europe', descEn: 'Uninterrupted 24/7 power backup.', descBn: 'নিরবচ্ছিন্ন ২৪/৭ বিদ্যুৎ ব্যাকআপ।' },
    { id: 11, nameEn: 'Auto Flat Bed Screen', nameBn: 'অটো ফ্ল্যাট বেড স্ক্রিন', count: 1, cat: 'Printing', origin: 'Taiwan', descEn: 'High precision multi-color automatic screen printing.', descBn: 'উচ্চ নির্ভুলতার অটোমেটিক স্ক্রিন প্রিন্টিং।' },
    { id: 12, nameEn: 'Auto Rotary Printing', nameBn: 'অটো রোটারি প্রিন্টিং', count: 1, cat: 'Printing', origin: 'Japan', descEn: 'Continuous high speed rotary printing.', descBn: 'ধারাবাহিক উচ্চগতির রোটারি প্রিন্টিং।' },
    { id: 13, nameEn: 'Thermo Stenter', nameBn: 'থার্মো স্টেন্টার', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Thermostatic drying and curing.', descBn: 'থার্মোস্ট্যাটিক ড্রাইং।' },
    { id: 14, nameEn: '(CC) Stenter', nameBn: '(সিসি) স্টেন্টার', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Auxiliary stenter unit.', descBn: 'সহায়ক স্টেন্টার।' },
    { id: 15, nameEn: 'Clip Mercerize', nameBn: 'ক্লিপ মার্সারাইজ', count: 1, cat: 'Pre-Treatment', origin: 'India', descEn: 'Continuous clip chain mercerization.', descBn: 'ক্লিপ চেইন মার্সারাইজেশন।' },
    { id: 16, nameEn: 'Roller Mercerize', nameBn: 'রোলার মার্সারাইজ', count: 1, cat: 'Pre-Treatment', origin: 'India', descEn: 'Roller tensioned yarn mercerizer.', descBn: 'রোলার টেনশন মার্সারাইজার।' },
    { id: 17, nameEn: 'Finishing Calendar', nameBn: 'ফিনিশিং ক্যালেন্ডার', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Hydraulic heavy-pressure rolling.', descBn: 'হাইড্রোলিক ক্যালেন্ডার।' },
    { id: 18, nameEn: 'Sharee Calendar', nameBn: 'শাড়ি ক্যালেন্ডার', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Specially engineered calender for sarees.', descBn: 'শাড়ির জন্য বিশেষায়িত ক্যালেন্ডার।' },
    { id: 19, nameEn: 'Pad Batch (CPP)', nameBn: 'প্যাড ব্যাচ (সিপিপি)', count: 1, cat: 'Dyeing', origin: 'Taiwan', descEn: 'Cold pad-batch reactive dyeing.', descBn: 'কোল্ড প্যাড-ব্যাচ রিয়্যাক্টিভ ডাইং।' },
    { id: 20, nameEn: 'Super Wash', nameBn: 'সুপার ওয়াশ', count: 1, cat: 'Finishing', origin: 'Taiwan', descEn: 'Post-dyeing rapid washing.', descBn: 'ডাইং পরবর্তী দ্রুত ওয়াশিং।' },
    { id: 21, nameEn: 'Cylinder Dryer', nameBn: 'সিলিন্ডার ড্রায়ার', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Steam heated multi-cylinder drying.', descBn: 'বাষ্প উত্তপ্ত ড্রাইং।' }
  ];

  const filtered = machineries.filter(m => {
    const matchesSearch = m.nameEn.toLowerCase().includes(search.toLowerCase()) || m.nameBn.toLowerCase().includes(search.toLowerCase()) || m.origin.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || m.cat === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-8 lg:pt-10 pb-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/5 border border-[#0f2a44]/10 text-[#0f2a44] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
              {lang === 'bn' ? 'মেশিনারি ও প্রযুক্তি বহর' : 'State-of-the-Art Machineries'}
            </div>
            <h1 className="mt-4 text-[30px] sm:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95] text-[#0f2a44]">
              {lang === 'bn' ? 'মোট ৪২টি আমদানিকৃত আধুনিক মেশিনারি' : '42 heavy-duty units of world-class machinery'}
            </h1>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-xs font-bold tracking-widest uppercase text-stone-400">Showing</div>
            <div className="text-2xl font-[800] text-[#0f2a44]">{filtered.reduce((a, b) => a + b.count, 0)} <span className="text-sm font-semibold text-stone-400">/ 42 units</span></div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-7 card-modern rounded-[20px] p-4 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={lang === 'bn' ? 'মেশিনের নাম বা দেশ খুঁজুন...' : 'Search machine name, origin...'}
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#fdfbf7] border border-stone-200 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:border-[#0f2a44]/20 focus:bg-white transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="lg:hidden text-xs font-semibold text-stone-600">
              {filtered.reduce((a, b) => a + b.count, 0)} / 42
            </div>
            <div className="flex items-center gap-1 p-1 rounded-full bg-[#fdfbf7] border border-stone-200">
              <button onClick={() => setViewMode('card')} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${viewMode === 'card' ? 'bg-[#0f2a44] text-white' : 'text-stone-600'}`}>
                <LayoutGrid size={14} /> Card
              </button>
              <button onClick={() => setViewMode('table')} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${viewMode === 'table' ? 'bg-[#0f2a44] text-white' : 'text-stone-600'}`}>
                <Table2 size={14} /> Table
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {['All', 'Dyeing', 'Printing', 'Finishing', 'Pre-Treatment', 'Utilities'].map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${category === cat ? 'bg-[#0f2a44] text-white border-[#0f2a44]' : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'}`}>
              {cat}
            </button>
          ))}
        </div>

        {viewMode === 'card' ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((m) => (
              <div key={m.id} className="card-modern rounded-[20px] p-5 flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#fdfbf7] border border-stone-200 text-[11px] font-bold tracking-wide text-[#0f2a44]">{m.cat}</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#0f2a44] text-white text-xs font-[800]">{m.count} pcs</span>
                  </div>
                  <h4 className="mt-3 text-[15px] font-bold tracking-tight text-[#0f2a44] group-hover:text-black transition-colors leading-tight">{lang === 'bn' ? m.nameBn : m.nameEn}</h4>
                  <div className="text-xs text-stone-500 font-medium">{lang === 'bn' ? m.nameEn : m.nameBn}</div>
                  <p className="text-[13px] leading-relaxed text-stone-600 mt-3 line-clamp-2">{lang === 'bn' ? m.descBn : m.descEn}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1 text-stone-500"><MapPin size={12} /> {m.origin}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700"><CheckCircle2 size={12} /> New</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 card-modern rounded-[20px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#fdfbf7] text-xs font-bold tracking-widest uppercase text-stone-500 border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-3.5">#</th>
                    <th className="px-6 py-3.5">{lang === 'bn' ? 'মেশিনের নাম' : 'Machine Name'}</th>
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
                        <div className="font-semibold text-[#0f2a44]">{lang === 'bn' ? m.nameBn : m.nameEn}</div>
                        <div className="text-xs text-stone-500">{lang === 'bn' ? m.nameEn : m.nameBn}</div>
                      </td>
                      <td className="px-6 py-3.5"><span className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-[#0f2a44]">{m.cat}</span></td>
                      <td className="px-6 py-3.5 text-stone-600 text-xs">{m.origin}</td>
                      <td className="px-6 py-3.5 text-right font-[800] text-[#0f2a44]">{m.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center gap-2 text-xs text-stone-500">
          <SlidersHorizontal size={14} /> {lang === 'bn' ? 'সকল মেশিন ১০০% ব্র্যান্ড নিউ আমদানিকৃত • জার্মানি, জাপান, তাইওয়ান, ভারত' : 'All machines 100% brand-new imported • Germany, Japan, Taiwan, India, China'}
        </div>
      </div>
    </div>
  );
}
