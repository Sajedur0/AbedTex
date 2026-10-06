import { Phone, Mail, Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { assets } from '../assets';
import { leaders } from '../profile';
import { PageHero, Shell } from '../components/Site';
import Reveal from '../components/Reveal';
import SmartImg from '../components/SmartImg';

export default function LeadershipPage() {
  const leaderImgs: Record<string, typeof assets.leaders.abedAli> = {
    abedAli: assets.leaders.abedAli,
    monjurElahi: assets.leaders.monjurElahi,
    abdullahAlMamun: assets.leaders.abdullahAlMamun,
    mahbuburRahman: assets.leaders.mahbuburRahman,
  };

  return (
    <div className="bg-[#f7f3eb] text-[#182722]">
      <PageHero
        kicker="Leadership & Governance / Continuing the Legacy"
        title="Continuing the legacy with manufacturing & technology focus."
        intro="Abed Textile's leadership combines long-term manufacturing experience with a growing focus on industrial modernization, guiding expansion across textile processing, digital printing, and broader technology initiatives."
      />

      <section className="py-20 lg:py-28">
        <Shell>
          <div className="grid gap-10 md:grid-cols-2">
            {leaders.map((leader, idx) => {
              const image = leaderImgs[leader.imageKey];
              return (
                <Reveal key={leader.id} delay={idx * 80}>
                  <div className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between h-full">
                    <div>
                      {/* Image header */}
                      <div className="relative aspect-[16/11] overflow-hidden bg-[#182722]">
                        <SmartImg
                          img={image}
                          alt={leader.name}
                          sizes="(min-width:1024px) 45vw, 100vw"
                          className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-[#e86d2a] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                            0{idx + 1} · {leader.designation}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="display text-2xl lg:text-3xl font-bold">{leader.name}</h3>
                          <p className="text-xs text-[#ff9a55] font-semibold mt-0.5">{leader.role}</p>
                        </div>
                      </div>

                      {/* Bio content */}
                      <div className="p-6 sm:p-8 space-y-4">
                        <p className="text-sm leading-relaxed text-[#5c645f]">{leader.bio}</p>

                        {leader.philosophy && (
                          <div className="rounded-xl bg-[#fbf8f2] border border-black/5 p-4">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#a34d20] mb-2">Founder Philosophy</div>
                            <div className="flex flex-wrap gap-2">
                              {leader.philosophy.map((p) => (
                                <span key={p} className="rounded-md bg-white px-2.5 py-1 text-xs font-bold text-[#182722] border border-black/5">
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {leader.credentials && (
                          <div className="flex items-center gap-2 text-xs text-[#182722]">
                            <GraduationCap size={16} className="text-[#a34d20] shrink-0" />
                            <span><strong>Education:</strong> {leader.credentials}</span>
                          </div>
                        )}

                        {leader.experience && (
                          <div className="flex items-center gap-2 text-xs text-[#182722]">
                            <Briefcase size={16} className="text-[#a34d20] shrink-0" />
                            <span><strong>Business Experience:</strong> {leader.experience}</span>
                          </div>
                        )}

                        {leader.responsibility && (
                          <div className="flex items-center gap-2 text-xs text-[#182722]">
                            <Award size={16} className="text-[#a34d20] shrink-0" />
                            <span><strong>Affiliations:</strong> {leader.responsibility}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Direct Contact Bar */}
                    {(leader.mobile || leader.email) && (
                      <div className="border-t border-black/10 bg-[#efe9df] p-4 px-6 sm:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex flex-wrap gap-4 text-[#182722]">
                          {leader.mobile && (
                            <a href={`tel:${leader.mobile}`} className="flex items-center gap-1.5 font-bold hover:text-[#e86d2a]">
                              <Phone size={13} className="text-[#e86d2a]" /> {leader.mobile}
                            </a>
                          )}
                          {leader.email && (
                            <a href={`mailto:${leader.email}`} className="flex items-center gap-1.5 font-bold hover:text-[#e86d2a]">
                              <Mail size={13} className="text-[#e86d2a]" /> {leader.email}
                            </a>
                          )}
                        </div>
                        {leader.email && (
                          <a
                            href={`mailto:${leader.email}`}
                            aria-label={`Email ${leader.name}`}
                            className="grid h-8 w-8 place-items-center rounded-full bg-[#182722] text-white hover:bg-[#e86d2a] transition"
                          >
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Shell>
      </section>
    </div>
  );
}
