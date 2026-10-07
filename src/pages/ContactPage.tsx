import { ArrowUpRight, Mail, MapPin, Phone, Building2, Landmark, Factory } from 'lucide-react';
import { assets } from '../assets';
import { contactInfo, leaders, csrInstitutions, financialPartners } from '../profile';
import { PageHero, Shell, Eyebrow } from '../components/Site';
import GoogleMap from '../components/GoogleMap';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

export default function ContactPage() {
  const leaderImgs: Record<string, typeof assets.leaders.abedAli> = {
    abedAli: assets.leaders.abedAli,
    monjurElahi: assets.leaders.monjurElahi,
    abdullahAlMamun: assets.leaders.abdullahAlMamun,
    mahbuburRahman: assets.leaders.mahbuburRahman,
  };

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Contact & Locations / Factory & Corporate Office"
        title="Experience behind us. Technology ahead."
        intro="Reach our manufacturing plant in Ghoradia, Narsingdi or our corporate headquarters in Uttara, Dhaka. We welcome inquiries for dyed woven fabrics, digital printing programs, and commercial partnerships."
      />

      {/* Two Location Cards (Factory & Corporate Office) */}
      <section className="bg-[#182722] text-white py-16 lg:py-24">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Factory */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded bg-[#ff9a55] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#182722]">
                    Primary Manufacturing Plant
                  </span>
                  <Factory size={22} className="text-[#ff9a55]" />
                </div>
                <h2 className="display text-3xl md:text-4xl font-bold mb-4">{contactInfo.factory.title}</h2>
                <div className="flex items-start gap-3 text-sm text-white/70 mb-6">
                  <MapPin size={18} className="text-[#ff9a55] shrink-0 mt-1" />
                  <span>{contactInfo.factory.address}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#ff9a55]" />
                  <div className="flex flex-wrap gap-x-4">
                    <a href={`tel:${contactInfo.factory.mobile}`} className="font-bold hover:text-[#ff9a55]">
                      {contactInfo.factory.mobile}
                    </a>
                    <span className="text-white/40">|</span>
                    <a href="tel:+88029462750" className="hover:text-[#ff9a55]">
                      {contactInfo.factory.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#ff9a55]" />
                  <a href={`mailto:${contactInfo.factory.email}`} className="text-[#ff9a55] hover:underline">
                    {contactInfo.factory.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Headquarters
                  </span>
                  <Building2 size={22} className="text-[#ff9a55]" />
                </div>
                <h2 className="display text-3xl md:text-4xl font-bold mb-4">{contactInfo.corporate.title}</h2>
                <div className="flex items-start gap-3 text-sm text-white/70 mb-6">
                  <MapPin size={18} className="text-[#ff9a55] shrink-0 mt-1" />
                  <span>{contactInfo.corporate.address}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#ff9a55]" />
                  <a href={`tel:${contactInfo.corporate.phone}`} className="font-bold hover:text-[#ff9a55]">
                    {contactInfo.corporate.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#ff9a55]" />
                  <a href={`mailto:${contactInfo.corporate.email}`} className="text-[#ff9a55] hover:underline">
                    {contactInfo.corporate.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* Google Map of Factory at Ghoradia, Narsingdi */}
      <section id="map" className="py-20 lg:py-28 border-b border-black/10">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end mb-10">
            <div>
              <Eyebrow>Factory Location & Coordinates</Eyebrow>
              <h2 className="display text-4xl md:text-5xl">Visit Abed Textile Processing Mills Ltd.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5c645f]">
                Located in the heart of Narsingdi’s historic textile hub with dedicated arterial highway access to Dhaka and Chittagong.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono font-bold text-[#a34d20]">
                <span>Coordinates: {contactInfo.mapLocation.coords}</span>
                <span>Plus Code: {contactInfo.mapLocation.plusCode}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={contactInfo.mapLocation.directions}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e86d2a] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#c95820] shadow-sm"
              >
                Open in Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <Reveal className="overflow-hidden rounded-2xl border border-black/10 shadow-lg">
            <GoogleMap
              src={contactInfo.mapLocation.embed}
              title="Abed Textile Processing Mills Ltd., Ghoradia, Narsingdi"
              className="h-[360px] w-full sm:h-[460px] lg:h-[540px]"
            />
          </Reveal>
        </Shell>
      </section>

      {/* Direct Contact with Leadership */}
      <section className="bg-[#efe9df] py-20 lg:py-28">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <Eyebrow>Direct Engagement</Eyebrow>
              <h2 className="display text-4xl md:text-5xl">Speak with our leadership.</h2>
              <p className="mt-4 text-sm text-[#5c645f] leading-relaxed">
                Connect directly with our Board of Directors for strategic bulk contracts, technical development, or supply partnerships.
              </p>

              {/* QR Code widget */}
              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm flex items-center gap-4">
                <img src={assets.qrCode.src} alt="Scan QR Code" className="h-20 w-20 rounded-lg border border-black/10 p-1 object-contain shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-[#182722]">Instant Digital V-Card</div>
                  <div className="text-[#5c645f] mt-1 leading-snug">
                    Scan with your mobile camera to instantly save Abed Textile contacts and company profile.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm divide-y divide-black/10">
              {leaders.map((d) => (
                <div key={d.name} className="py-6 first:pt-0 last:pb-0 grid gap-4 sm:grid-cols-[auto_1fr_1.2fr_auto] sm:items-center">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-black/10 bg-[#182722]">
                    <SmartImg
                      img={leaderImgs[d.imageKey]}
                      alt={d.name}
                      className="h-full w-full object-cover object-top"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#182722]">{d.name}</div>
                    <div className="text-xs text-[#a34d20] font-semibold">{d.designation}</div>
                  </div>
                  <div className="text-xs text-[#5c645f] space-y-1">
                    {d.mobile && (
                      <a href={`tel:${d.mobile}`} className="hover:text-[#e86d2a] block font-medium">
                        {d.mobile}
                      </a>
                    )}
                    {d.email && (
                      <a href={`mailto:${d.email}`} className="hover:text-[#e86d2a] block">
                        {d.email}
                      </a>
                    )}
                  </div>
                  {d.email && (
                    <a
                      href={`mailto:${d.email}`}
                      aria-label={`Email ${d.name}`}
                      className="grid h-10 w-10 place-items-center rounded-full bg-[#182722] text-white hover:bg-[#e86d2a] transition shadow-sm"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Community Institutions & Financial Banking Partners (Page 18) */}
      <section className="py-20 lg:py-24 border-t border-black/10">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#a34d20] mb-2">Corporate Social Responsibility</div>
              <h3 className="display text-3xl font-bold mb-4">Supported Social Institutions (Narsingdi)</h3>
              <p className="text-sm text-[#5c645f] mb-6">
                Abed Textile actively partners with civic, health, and academic welfare programs in the greater Narsingdi region:
              </p>

              <div className="space-y-2.5">
                {csrInstitutions.map((inst, i) => (
                  <div key={inst.name} className="flex items-center justify-between rounded-xl border border-black/10 bg-white p-3.5 shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#a34d20]">0{i + 1}</span>
                      <span className="text-xs font-bold text-[#182722]">{inst.name}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#5c645f] bg-[#efe9df] px-2.5 py-0.5 rounded-full">
                      {inst.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#a34d20] mb-2">Financial Reliability</div>
              <h3 className="display text-3xl font-bold mb-4">Major Banking Partners</h3>
              <p className="text-sm text-[#5c645f] mb-6">
                Supported by premier financial institutions with seamless letter of credit (L/C) and export trade facilities:
              </p>

              <div className="space-y-4">
                {financialPartners.map((bank) => (
                  <div key={bank.name} className="rounded-xl border border-black/10 bg-white p-5 shadow-xs">
                    <div className="flex items-center gap-3">
                      <Landmark size={20} className="text-[#a34d20]" />
                      <h4 className="font-bold text-sm text-[#182722]">{bank.name}</h4>
                    </div>
                    <p className="mt-2 text-xs text-[#5c645f] leading-relaxed pl-8">{bank.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#e86d2a] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">Corporate Email</div>
                  <div className="display text-xl font-bold">abedtextilebd@yahoo.com</div>
                </div>
                <a
                  href="mailto:abedtextilebd@yahoo.com"
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#182722] hover:bg-[#efe9df] transition shadow"
                >
                  Compose Message
                </a>
              </div>
            </div>
          </div>
        </Shell>
      </section>
    </div>
  );
}
