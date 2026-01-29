type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg font-medium text-slate-800">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
