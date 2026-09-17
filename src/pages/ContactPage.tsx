import { useState } from 'react';
import { Phone, Mail, MapPin, Send, PartyPopper, ExternalLink } from 'lucide-react';
import { useApp } from '../App';
import PageHeader from '../components/PageHeader';

const inputCls =
  'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 placeholder-slate-400 transition-all';

export default function ContactPage() {
  const { lang } = useApp();
  const bn = lang === 'bn';
  const [formSent, setFormSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrowEn="Get in Touch with Us"
        eyebrowBn="যোগাযোগ ও সেবা কেন্দ্র"
        titleEn="We Are Here to Answer Your Queries"
        titleBn="আমাদের সাথে সরাসরি যোগাযোগ করুন"
        subEn="For Bulk Merchandising, Digital Printing, Blanket Orders, Knit Fabrics & Contact."
        subBn="টেক্সটাইল কেনাকাটা, প্রিন্টিং ও প্রসেসিংয়ের জন্য সর্বোচ্চ মান ও পরিষেবার প্রতিশ্রুতি।"
      />

      <section className="py-16 sm:py-20 bg-slate-50 textile-grid">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7" data-reveal>
            <div className="card p-7 sm:p-9 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-amber-400" />

              {formSent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <span className="inline-flex w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 items-center justify-center">
                    <PartyPopper className="w-8 h-8" />
                  </span>
                  <h4 className="text-lg font-extrabold text-emerald-700">
                    {bn ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-sm text-emerald-600">
                    {bn ? 'আমরা দ্রুত আপনার সাথে যোগাযোগ করব।' : 'We will get back to you within 24 hours.'}
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="btn !py-2.5 bg-emerald-600 text-white hover:bg-emerald-500 text-xs cursor-pointer"
                  >
                    {bn ? 'নতুন বার্তা পাঠান' : 'Send Another'}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                    {bn ? 'অনুগ্রহ করে আপনার তথ্য দিন' : 'Drop Us a Message'}
                  </h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSent(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                          {bn ? 'আপনার নাম' : 'Your Full Name'}
                        </label>
                        <input type="text" required className={inputCls} placeholder={bn ? 'আবুল হাসান' : 'Abul Hasan'} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                          {bn ? 'ইমেইল ঠিকানা' : 'Email Address'}
                        </label>
                        <input type="email" required className={inputCls} placeholder="example@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                          {bn ? 'কোম্পানির নাম' : 'Company Name'}
                        </label>
                        <input type="text" required className={inputCls} placeholder={bn ? 'আপনার কোম্পানির নাম' : 'Your Company Name'} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                          {bn ? 'বিষয়' : 'Subject'}
                        </label>
                        <input type="text" required className={inputCls} placeholder={bn ? 'শাড়ি, থ্রি-পিস অর্ডার' : 'Shari, Three-Piece Order'} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                        {bn ? 'আপনার বার্তা বা অর্ডার' : 'Your Message or Order'}
                      </label>
                      <textarea
                        required
                        rows={5}
                        className={`${inputCls} resize-none`}
                        placeholder={bn ? 'বিস্তারিত অর্ডার বা প্রশ্ন লিখুন...' : 'Describe your bulk requirements...'}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      <Send className="w-4 h-4" />
                      {bn ? 'বার্তা পাঠান' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Side info */}
          <div className="lg:col-span-5 space-y-6" data-reveal>
            {/* Map */}
            <div className="card p-2.5 shadow-lg relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1056543456789!2d90.4125!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjIiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <a
                href="https://maps.app.goo.gl/YourLink"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/95 text-sky-600 text-xs font-bold shadow-lg border border-sky-500/30 hover:bg-sky-50 transition-colors"
              >
                {bn ? 'বড় মানচিত্র' : 'View Map'}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact cards */}
            <div className="card p-6 shadow-lg space-y-4">
              <a href="tel:+8801713562042" className="flex items-center gap-4 text-slate-800 hover:text-sky-600 transition-colors group">
                <span className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/25 transition-all">
                  <Phone className="w-5 h-5 text-sky-500 group-hover:text-white" />
                </span>
                <span>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">{bn ? 'মোবাইল' : 'Mobile'}</span>
                  <span className="font-bold text-sm">+880 1713-562042</span>
                </span>
              </a>
              <a href="mailto:info@nodibanglagroup.com" className="flex items-center gap-4 text-slate-800 hover:text-amber-600 transition-colors group">
                <span className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all">
                  <Mail className="w-5 h-5 text-amber-500 group-hover:text-white" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                  <span className="font-bold text-sm truncate block">info@nodibanglagroup.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4 text-slate-800">
                <span className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                </span>
                <span>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">{bn ? 'ঠিকানা' : 'Address'}</span>
                  <span className="font-bold text-sm leading-snug block">
                    {bn ? '৪৫৯/এ মাদ্রাপুর, তারাগোনা, নরসিংদী' : '459/A Madrampur, Taragona, Narsingdi'}
                  </span>
                </span>
              </div>
            </div>

            {/* Hours card */}
            <div className="card p-6 shadow-lg bg-gradient-to-br from-brand-950 to-slate-900 !border-white/10">
              <h4 className="text-white font-extrabold text-sm">{bn ? 'কর্ম সময়' : 'Working Hours'}</h4>
              <div className="mt-3 space-y-2 text-[13px]">
                <div className="flex justify-between text-slate-300">
                  <span>{bn ? 'শনি — বৃহস্পতি' : 'Sat — Thu'}</span>
                  <span className="font-bold text-sky-300">8:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{bn ? 'শুক্রবার' : 'Friday'}</span>
                  <span className="font-bold text-amber-300">{bn ? 'সাপ্তাহিক ছুটি' : 'Weekly Holiday'}</span>
                </div>
                <div className="pt-2 mt-2 border-t border-white/10 text-xs text-slate-400">
                  {bn ? 'জরুরি অর্ডারের জন্য সরাসরি মোবাইলে যোগাযোগ করুন।' : 'For urgent orders, reach us directly on mobile.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
