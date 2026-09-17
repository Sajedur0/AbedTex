import { useState } from 'react';
import { Search, LayoutGrid, List, Globe, BadgeCheck } from 'lucide-react';
import { useApp } from '../App';
import PageHeader from '../components/PageHeader';

const catColors: Record<string, string> = {
  Dyeing: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
  Printing: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
  Finishing: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  'Pre-Treatment': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  Utilities: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
};

const machineries = [
  { id: 1, nameEn: 'Mini Jigger', nameBn: 'মিনি জিগার', count: 17, cat: 'Dyeing', origin: 'Taiwan / India', descEn: 'Precision batch dyeing for sample and medium run fabrics.', descBn: 'স্যাম্পল ও মাঝারি পরিমাণের কাপড়ে সুষম রঙের জন্য জিগার।' },
  { id: 2, nameEn: 'Jumbo Jigger', nameBn: 'জাম্বো জিগার', count: 15, cat: 'Dyeing', origin: 'India / China', descEn: 'High capacity automated jigger dyeing.', descBn: 'বৃহৎ উৎপাদনের জন্য অটোমেটিক জিগার।' },
  { id: 3, nameEn: 'Cover Jigger', nameBn: 'কভার জিগার', count: 7, cat: 'Dyeing', origin: 'India', descEn: 'Enclosed pressurized dyeing environment.', descBn: 'এনক্লোজড প্রেশারাইজড ডাইং।' },
  { id: 4, nameEn: 'Batch Mercerize', nameBn: 'ব্যাচ মার্সারাইজ', count: 4, cat: 'Pre-Treatment', origin: 'India', descEn: 'Caustic soda impregnation for improving luster.', descBn: 'উজ্জ্বলতা বাড়াতে মার্সারাইজেশন।' },
  { id: 5, nameEn: 'Folding', nameBn: 'ফোল্ডিং মেশিন', count: 3, cat: 'Finishing', origin: 'Japan', descEn: 'Automated fabric inspection and folding.', descBn: 'স্বয়ংক্রিয় ফ্যাব্রিক পরিদর্শন ও ফোল্ডিং।' },
  { id: 6, nameEn: 'Semi Auto', nameBn: 'সেমি অটো', count: 3, cat: 'Utilities', origin: 'China', descEn: 'Semi-automated handling for intermediate processing.', descBn: 'মধ্যবর্তী প্রক্রিয়াকরণের জন্য সেমি-স্বয়ংক্রিয়।' },
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
  { id: 21, nameEn: 'Cylinder Dryer', nameBn: 'সিলিন্ডার ড্রায়ার', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Steam heated multi-cylinder drying.', descBn: 'বাষ্প উত্তপ্ত ড্রাইং।' },
  { id: 22, nameEn: 'Fell-Folding', nameBn: 'ফেল-ফোল্ডিং', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Specialized packaging fold machine.', descBn: 'বিশেষায়িত প্যাকেজিং ফোল্ড।' },
  { id: 23, nameEn: 'Foot Dyer', nameBn: 'ফুট ডায়ার', count: 1, cat: 'Dyeing', origin: 'India', descEn: 'Auxiliary dyeing station.', descBn: 'সহায়ক ডাইং স্টেশন।' },
  { id: 24, nameEn: 'Sun Frizzing', nameBn: 'সান ফ্রিজিং', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Surface texturing system.', descBn: 'সারফেস টেক্সচারিং।' },
];

const categories = ['All', 'Dyeing', 'Printing', 'Finishing', 'Pre-Treatment', 'Utilities'];

export default function MachineryPage() {
  const { lang } = useApp();
  const bn = lang === 'bn';
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const filtered = machineries.filter((m) => {
    const q = search.toLowerCase();
    const matchesSearch =
      m.nameEn.toLowerCase().includes(q) || m.nameBn.includes(search) || m.origin.toLowerCase().includes(q);
    const matchesCat = category === 'All' || m.cat === category;
    return matchesSearch && matchesCat;
  });

  const totalShown = filtered.reduce((a, b) => a + b.count, 0);

  return (
    <>
      <PageHeader
        eyebrowEn="State-of-the-Art Machineries"
        eyebrowBn="মেশিনারি ও প্রযুক্তি বহর"
        titleEn="72 Heavy-Duty Units of World-Class Machinery"
        titleBn="মোট ৭২টি আমদানিকৃত আধুনিক মেশিনারি"
        subEn="Brand-new machines from Japan, Germany, Taiwan, India and China — 100% imported, zero reconditioned."
        subBn="জাপান, জার্মানি, তাইওয়ান, ভারত ও চীন থেকে আমদানিকৃত সম্পূর্ণ নতুন মেশিনারি।"
      />

      <section className="py-16 sm:py-20 bg-slate-50 textile-grid">
        <div className="container-x">
          {/* Toolbar */}
          <div className="card p-4 sm:p-5 mb-8 space-y-4 shadow-lg" data-reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={bn ? 'মেশিনের নাম বা দেশ খুঁজুন...' : 'Search machine name, origin...'}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                />
              </div>
              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <div className="text-xs text-slate-600 font-medium">
                  {bn ? 'প্রদর্শিত:' : 'Showing:'}{' '}
                  <span className="font-black text-amber-600 text-base">{totalShown}</span> / 72
                </div>
                <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
                  <button
                    onClick={() => setViewMode('card')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      viewMode === 'card' ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    {bn ? 'কার্ড' : 'Card'}
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      viewMode === 'table' ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    {bn ? 'টেবিল' : 'Table'}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                    category === cat
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" data-reveal>
              {filtered.map((m) => (
                <div key={m.id} className="card card-hover p-5 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${
                          catColors[m.cat] || catColors.Utilities
                        }`}
                      >
                        {m.cat}
                      </span>
                      <span className="text-sm font-black px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 border border-amber-500/25 whitespace-nowrap">
                        {m.count} {bn ? 'টি' : 'Pcs'}
                      </span>
                    </div>
                    <h4 className="text-[15px] font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {bn ? m.nameBn : m.nameEn}
                    </h4>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">{bn ? m.nameEn : m.nameBn}</div>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{bn ? m.descBn : m.descEn}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Globe className="w-3.5 h-3.5 text-sky-500" />
                      {m.origin}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      {bn ? 'সম্পূর্ণ নতুন' : 'Brand-New'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card overflow-x-auto shadow-xl" data-reveal>
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-4">#</th>
                    <th className="px-5 py-4">{bn ? 'মেশিনের নাম' : 'Machine Name'}</th>
                    <th className="px-5 py-4">{bn ? 'ক্যাটাগরি' : 'Category'}</th>
                    <th className="px-5 py-4">{bn ? 'উৎপত্তি' : 'Origin'}</th>
                    <th className="px-5 py-4 text-right">{bn ? 'পরিমাণ' : 'Quantity'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((m, i) => (
                    <tr key={m.id} className="hover:bg-sky-500/5 transition-colors">
                      <td className="px-5 py-3.5 text-slate-400 font-semibold">{i + 1}</td>
                      <td className="px-5 py-3.5 font-bold text-slate-900">
                        <div>{bn ? m.nameBn : m.nameEn}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{bn ? m.nameEn : m.nameBn}</div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`px-2 py-1 rounded-md text-[11px] font-bold border ${catColors[m.cat] || catColors.Utilities}`}>
                          {m.cat}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">{m.origin}</td>
                      <td className="px-5 py-3.5 text-right font-black text-amber-600">{m.count} {bn ? 'টি' : 'Pcs'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              <Search className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              {bn ? 'কোনো মেশিন পাওয়া যায়নি — অন্য কিছু লিখে খুঁজুন।' : 'No machines found — try a different search.'}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
