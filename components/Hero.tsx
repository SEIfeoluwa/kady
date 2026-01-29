type HeroProps = {
  title: string;
  backgroundImage?: string;
};

export default function Hero({ title, backgroundImage }: HeroProps) {
  return (
    <section
      className={`relative w-full border-b border-black/10 bg-cover bg-center ${
        backgroundImage
          ? ""
          : "bg-gradient-to-r from-amber-200 via-amber-100 to-slate-900"
      }`}
      style={
        backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined
      }
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
        <h1 className="text-center text-3xl font-semibold uppercase tracking-[0.3em] text-slate-800 md:text-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
