import { useApp } from '../App';

interface SectionHeadingProps {
  eyebrowEn: string;
  eyebrowBn: string;
  titleEn: string;
  titleBn: string;
  subEn?: string;
  subBn?: string;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
}

/** Eyebrow + title + optional subtitle block used to open every section. */
export default function SectionHeading({
  eyebrowEn,
  eyebrowBn,
  titleEn,
  titleBn,
  subEn,
  subBn,
  tone = 'light',
  align = 'center',
}: SectionHeadingProps) {
  const { lang } = useApp();
  const dark = tone === 'dark';

  return (
    <div
      data-reveal
      className={`max-w-3xl ${align === 'center' ? 'text-center mx-auto' : ''} mb-12 sm:mb-14`}
    >
      <span className={dark ? 'eyebrow-dark' : 'eyebrow-sky'}>
        {lang === 'bn' ? eyebrowBn : eyebrowEn}
      </span>
      <h2 className={`section-title mt-4 ${dark ? 'text-white' : ''}`}>
        {lang === 'bn' ? titleBn : titleEn}
      </h2>
      {(subBn || subEn) && (
        <p className={`section-sub ${dark ? 'text-slate-300' : ''} ${align === 'center' ? 'mx-auto' : ''}`}>
          {lang === 'bn' ? subBn : subEn}
        </p>
      )}
    </div>
  );
}
