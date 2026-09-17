import { useApp } from '../App';

interface PageHeaderProps {
  eyebrowEn: string;
  eyebrowBn: string;
  titleEn: string;
  titleBn: string;
  subEn?: string;
  subBn?: string;
  image?: string;
}

/** Consistent decorative hero band used at the top of inner pages. */
export default function PageHeader({ eyebrowEn, eyebrowBn, titleEn, titleBn, subEn, subBn, image }: PageHeaderProps) {
  const { lang } = useApp();

  return (
    <div className="relative overflow-hidden bg-brand-950">
      {/* Background */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/85 to-brand-950" />
      <div className="absolute inset-0 textile-grid-dark opacity-50" />
      <div className="glow-orb w-[380px] h-[380px] bg-sky-500/50 -top-24 -left-24" />
      <div className="glow-orb w-[300px] h-[300px] bg-amber-500/35 top-10 -right-20" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

      <div className="relative container-x pt-36 pb-14 sm:pt-40 sm:pb-16 text-center">
        <span className="hero-animate eyebrow-dark" style={{ animationDelay: '0.05s' }}>
          {lang === 'bn' ? eyebrowBn : eyebrowEn}
        </span>
        <h1
          className="hero-animate mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-3xl mx-auto"
          style={{ animationDelay: '0.15s' }}
        >
          {lang === 'bn' ? titleBn : titleEn}
        </h1>
        {(subBn || subEn) && (
          <p
            className="hero-animate mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.28s' }}
          >
            {lang === 'bn' ? subBn : subEn}
          </p>
        )}
      </div>
    </div>
  );
}
