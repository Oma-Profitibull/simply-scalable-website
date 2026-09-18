
interface SectionHeaderProps {
  badge?: React.ReactNode;
  headline: string;
  subhead?: string;
  align?: 'center' | 'left';
}

export function SectionHeader({ badge, headline, subhead, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : '';

  return (
    <div className={`mb-8 ${alignClass}`}>
      {badge && <div className="mb-4">{badge}</div>}
      <h2 className={`font-display text-[36px] md:text-[52px] leading-[1.1] tracking-tight text-white ${align === 'center' ? 'max-w-4xl mx-auto' : 'max-w-3xl'}`}>
        {headline}
      </h2>
      {subhead && (
        <p className={`font-body text-[18px] text-mist mt-4 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subhead}
        </p>
      )}
    </div>
  );
}
