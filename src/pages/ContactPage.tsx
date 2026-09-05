import { useState } from 'react';
import { useApp } from '../App';

export default function ContactPage() {
  const { lang } = useApp();
  const [formSent, setFormSent] = useState(false);

  return (
    <section className="pt-28 pb-20 relative bg-white section-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            {lang === 'bn' ? 'যোগাযোগ ও সেবা কেন্দ্র' : 'Get in Touch with Us'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === 'bn' ? 'আমাদের সাথে সরাসরি যোগাযোগ করুন' : 'We Are Here to Answer Your Queries'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {lang === 'bn' ? 'টেক্সটাইল কেনাকাটা, প্রিন্টিং ও প্রসেসিংয়ের জন্য সর্বোচ্চ মান ও পরিষেবার প্রতিশ্রুতি।' : 'For Bulk Merchandising, Digital Printing, Blanket Orders, Knit Fabrics & Contact.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl relative z-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{lang === 'bn' ? 'অনুগ্রহ করে আপনার তথ্য দিন' : 'Drop Us a Message'}</h3>

            {formSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="text-4xl">🎉</div>
                <h4 className="text-lg font-bold text-emerald-700">{lang === 'bn' ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!'}</h4>
                <p className="text-sm text-emerald-600">{lang === 'bn' ? 'আমরা দ্রুত আপনার সাথে যোগাযোগ করব।' : 'We will get back to you shortly.'}</p>
                <button onClick={() => setFormSent(false)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500">{lang === 'bn' ? 'নতুন বার্তা পাঠান' : 'Send Another'}</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">{lang === 'bn' ? 'আপনার নাম' : 'Your Full Name'}</label>
                    <input type="text" required className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-slate-400" placeholder={lang === 'bn' ? 'আবুল হাসান' : 'Abul Hasan'} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">{lang === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}</label>
                    <input type="email" required className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-slate-400" placeholder={lang === 'bn' ? 'example@email.com' : 'example@email.com'} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{lang === 'bn' ? 'কোম্পানির নাম' : 'Company Name'}</label>
                  <input type="text" required className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-slate-400" placeholder={lang === 'bn' ? 'আপনার কোম্পানির নাম' : 'Your Company Name'} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{lang === 'bn' ? 'বিষয়' : 'Subject'}</label>
                  <input type="text" required className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-slate-400" placeholder={lang === 'bn' ? 'শাড়ি, থ্রি-পিস অর্ডার' : 'Shari, Three-Piece Order'} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{lang === 'bn' ? 'আপনার বার্তা বা অর্ডার' : 'Your Message or Order'}</label>
                  <textarea required rows={4} className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-slate-400 resize-none" placeholder={lang === 'bn' ? 'বিস্তারিত অর্ডার বা প্রশ্ন লিখুন...' : 'Describe your bulk requirements...'} />
                </div>
                <button type="submit" className="w-full sm:w-auto px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold uppercase tracking-wider transition-all">
                  {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-5 relative z-0">
            <div className="glass-card p-5 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden h-48 bg-slate-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1056543456789!2d90.4125!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjIiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" className="rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500" />
              <a href="https://maps.app.goo.gl/YourLink" target="_blank" rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/90 text-sky-600 text-xs font-bold shadow-lg border border-sky-500/30 hover:bg-sky-50">{lang === 'bn' ? 'বড় মানচিত্র' : 'View Map'}</a>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-200 shadow-md">
              <div className="space-y-3.5">
                <a href="tel:+8801713562042" className="flex items-center gap-3.5 text-slate-800 hover:text-sky-600 transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center group-hover:scale-110 shadow-sm border border-sky-500/20">📱</span>
                  <span className="font-semibold text-sm">+880 1713-562042</span>
                </a>
                <a href="mailto:info@nodibanglagroup.com" className="flex items-center gap-3.5 text-slate-800 hover:text-amber-600 transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-110 shadow-sm border border-amber-500/20">✉️</span>
                  <span className="font-semibold text-sm truncate">info@nodibanglagroup.com</span>
                </a>
                <div className="flex items-start gap-3.5 text-slate-800">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shadow-sm border border-emerald-500/20">📍</span>
                  <span className="text-sm leading-relaxed font-medium">{lang === 'bn' ? '৪৫৯/এ মাদ্রাপুর, তারাগোনা, নরসিংদী' : '459/A Madrampur, Taragona, Narsingdi'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
