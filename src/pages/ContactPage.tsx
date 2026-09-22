import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Clock, Shield } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="w-full">
      <section className="w-full bg-white border-b border-[#0f2a44]/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#d4a574]/[0.04] blur-[60px]" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10 relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a44]/[0.05] border border-[#0f2a44]/[0.08] text-[#0f2a44] text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574]" />
                Get in Touch with Us
              </div>
              <h1 className="mt-4 text-[30px] sm:text-[40px] xl:text-[44px] font-[800] tracking-[-0.03em] leading-[0.93] text-[#0f2a44]">
                We are here to answer your queries
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-500">
                For Bulk Merchandising, Digital Printing, Blanket Orders, Knit Fabrics & Contact.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-[#fdfbf7]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Form — 7 cols */}
            <Reveal direction="left">
              <div className="lg:col-span-7 xl:col-span-7 card-modern rounded-[24px] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-[18px] font-bold tracking-tight text-[#0f2a44]">Drop us a message</h3>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500"><Clock size={12} /> Reply in 24h</span>
                </div>

                {formSent ? (
                  <div className="rounded-[20px] bg-emerald-50 border border-emerald-200 p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm shadow-emerald-600/20"><CheckCircle2 size={22} /></div>
                    <h4 className="mt-4 text-lg font-bold text-emerald-900">Message sent successfully!</h4>
                    <p className="mt-1 text-sm text-emerald-700">We will get back to you shortly.</p>
                    <button onClick={() => setFormSent(false)} className="mt-5 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold tracking-wide text-[#0f2a44] mb-1.5">Your full name</label>
                        <input type="text" required placeholder="Abul Hasan" className="w-full px-4 py-3 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:bg-white focus:border-[#0f2a44]/20 focus:shadow-sm transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-wide text-[#0f2a44] mb-1.5">Email address</label>
                        <input type="email" required placeholder="example@email.com" className="w-full px-4 py-3 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:bg-white focus:border-[#0f2a44]/20 focus:shadow-sm transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wide text-[#0f2a44] mb-1.5">Company name</label>
                      <input type="text" placeholder="Your company name" className="w-full px-4 py-3 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:bg-white focus:border-[#0f2a44]/20 focus:shadow-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wide text-[#0f2a44] mb-1.5">Subject</label>
                      <input type="text" required placeholder="Shari, Three-Piece Order" className="w-full px-4 py-3 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:bg-white focus:border-[#0f2a44]/20 focus:shadow-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wide text-[#0f2a44] mb-1.5">Your message or order</label>
                      <textarea required rows={4} placeholder="Describe your bulk requirements..." className="w-full px-4 py-3 rounded-[20px] bg-[#fdfbf7] border border-stone-200/80 text-sm text-[#0f2a44] placeholder-stone-400 focus:outline-none focus:bg-white focus:border-[#0f2a44]/20 focus:shadow-sm transition-all resize-none" />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0f2a44] text-white text-sm font-bold hover:bg-[#0c2238] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                      Send message <ArrowRight size={16} />
                    </button>
                    <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
                      <Shield size={12} /> Your information is kept confidential
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Right info — 5 cols */}
            <Reveal direction="right" delay={100}>
              <div className="lg:col-span-5 xl:col-span-5 space-y-4">
                <div className="card-modern rounded-[24px] overflow-hidden p-2">
                  <div className="rounded-[16px] overflow-hidden h-[260px] bg-stone-100 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1056543456789!2d90.4125!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjIiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" className="grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <a href="https://maps.app.goo.gl/YourLink" target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 px-3.5 py-2 rounded-full bg-white text-[#0f2a44] text-xs font-bold shadow-lg border border-stone-200 hover:bg-stone-50 transition-colors">
                      View map
                    </a>
                  </div>
                </div>

                <div className="card-modern rounded-[24px] p-6">
                  <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#b88a5a] mb-4">Contact details</div>
                  <div className="space-y-4">
                    <a href="tel:+8801713562042" className="flex items-center gap-3 group">
                      <span className="w-10 h-10 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm shadow-[#0f2a44]/20"><Phone size={16} /></span>
                      <div>
                        <div className="text-xs font-semibold tracking-wide uppercase text-stone-400">Phone</div>
                        <div className="text-sm font-bold text-[#0f2a44]">+880 1713-562042</div>
                      </div>
                    </a>
                    <a href="mailto:info@abedtextile.com" className="flex items-center gap-3 group">
                      <span className="w-10 h-10 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-[#0f2a44] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors"><Mail size={16} /></span>
                      <div>
                        <div className="text-xs font-semibold tracking-wide uppercase text-stone-400">Email</div>
                        <div className="text-sm font-bold text-[#0f2a44]">info@abedtextile.com</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#fdfbf7] border border-stone-200/80 text-[#0f2a44] flex items-center justify-center shrink-0"><MapPin size={16} /></span>
                      <div>
                        <div className="text-xs font-semibold tracking-wide uppercase text-stone-400">Factory & Office</div>
                        <div className="text-sm font-semibold text-[#0f2a44] leading-relaxed">459/A Madrampur, Taragona, Narsingdi Sadar, Bangladesh</div>
                        <div className="text-xs text-stone-500 mt-1">Ph: 88-02-9462750</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#0f2a44] p-6 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/[0.04] rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="text-xs font-bold tracking-[0.12em] uppercase text-white/50">Office hours</div>
                    <div className="mt-2 text-sm font-semibold">Sat — Thu • 9:00 AM — 6:00 PM</div>
                    <div className="text-xs text-white/55 mt-1">Friday closed • Emergency line available</div>
                    <div className="mt-4 h-[1px] bg-white/10" />
                    <div className="mt-4 flex items-center gap-2 text-xs text-white/65">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> We typically reply within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
