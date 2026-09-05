import { useState } from 'react';
import { useApp } from '../App';

export default function MachineryPage() {
  const { lang } = useApp();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState('card');

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
    { id: 24, nameEn: 'Sun Frizzing', nameBn: 'সান ফ্রিজিং', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Surface texturing system.', descBn: 'সারফেস টেক্সচারিং।' }
  ];

  const filtered = machineries.filter(m => {
    const matchesSearch = m.nameEn.toLowerCase().includes(search.toLowerCase()) || m.nameBn.toLowerCase().includes(search.toLowerCase()) || m.origin.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || m.cat === category;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="pt-28 pb-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'মেশিনারি ও প্রযুক্তি বহর' : 'State-of-the-Art Machineries'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'মোট ৭২টি আমদানিকৃত আধুনিক মেশিনারি' : '72 Heavy-Duty Units of World-Class Machinery'}
          </h2>
        </div>

        <div className="glass-panel p-4 rounded-2xl border border-slate-200 mb-8 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-80">
              <input type="text" placeholder={lang === 'bn' ? 'মেশিনের নাম বা দেশ খুঁজুন...' : 'Search machine name, origin...'}
                value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-white/80 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400" />
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="text-xs text-slate-700 font-medium">
                {lang === 'bn' ? 'প্রদর্শিত:' : 'Showing:'} <span className="font-bold text-amber-600 text-sm">{filtered.reduce((a, b) => a + b.count, 0)}</span> / 72
              </div>
              <div className="flex items-center p-1 rounded-xl bg-white border border-slate-200">
                <button onClick={() => setViewMode('card')} className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${viewMode === 'card' ? 'bg-sky-500 text-white' : 'text-slate-600'}`}>Card</button>
                <button onClick={() => setViewMode('table')} className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${viewMode === 'table' ? 'bg-sky-500 text-white' : 'text-slate-600'}`}>Table</button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/80">
            {['All', 'Dyeing', 'Printing', 'Finishing', 'Pre-Treatment', 'Utilities'].map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${category === cat ? 'bg-sky-500 text-white border-sky-400' : 'bg-white/60 text-slate-600 border-slate-200'}`}>{cat}</button>
            ))}
          </div>
        </div>

        {viewMode === 'card' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((m) => (
              <div key={m.id} className="glass-card p-5 rounded-xl border border-slate-200 hover:border-sky-500/40 flex flex-col justify-between group tilt-card">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 border border-sky-500/20">{m.cat}</span>
                    <span className="text-sm font-black px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 border border-amber-500/30">{m.count} {lang === 'bn' ? 'টি' : 'Pcs'}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{lang === 'bn' ? m.nameBn : m.nameEn}</h4>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">{lang === 'bn' ? m.nameEn : m.nameBn}</div>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed line-clamp-3">{lang === 'bn' ? m.descBn : m.descEn}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                  <span>🌐 {m.origin}</span>
                  <span className="text-emerald-600 font-semibold">✓ 100% Brand-New</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-2xl border border-slate-200 overflow-x-auto shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-white/90 text-xs font-bold uppercase text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3.5">#</th>
                  <th className="px-5 py-3.5">{lang === 'bn' ? 'মেশিনের নাম' : 'Machine Name'}</th>
                  <th className="px-5 py-3.5">{lang === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                  <th className="px-5 py-3.5">{lang === 'bn' ? 'উৎপত্তি' : 'Origin'}</th>
                  <th className="px-5 py-3.5 text-right">{lang === 'bn' ? 'পরিমাণ' : 'Quantity'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filtered.map((m, i) => (
                  <tr key={m.id} className="hover:bg-sky-500/5 transition-colors">
                    <td className="px-5 py-3.5 text-slate-500">{i + 1}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">
                      <div>{lang === 'bn' ? m.nameBn : m.nameEn}</div>
                      <div className="text-[11px] text-slate-600 font-normal">{lang === 'bn' ? m.nameEn : m.nameBn}</div>
                    </td>
                    <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded text-[11px] bg-white border border-slate-200 text-sky-600">{m.cat}</span></td>
                    <td className="px-5 py-3.5">{m.origin}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-amber-600">{m.count} Pcs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
