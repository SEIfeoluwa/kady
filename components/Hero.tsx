type HeroProps = {
  title: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  tone?: "gradient" | "muted";
};

export const GRADIENT =
  "linear-gradient(to bottom, #14213d 0%, #4b4258 55%, #d9a66a 100%)";

const TONE_BACKGROUNDS: Record<NonNullable<HeroProps["tone"]>, string> = {
  gradient: GRADIENT,
  muted: "#d4d2db",
};

export default function Hero({
  title,
  backgroundImage,
  backgroundPosition = "center",
  tone = "gradient",
}: HeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      className={`relative flex w-full items-center border-b border-black/10 bg-cover ${
        tone === "muted" && !hasImage ? "min-h-[280px]" : "min-h-[420px]"
      }`}
      style={
        hasImage
          ? { backgroundImage: `url('${backgroundImage}')`, backgroundPosition }
          : { background: TONE_BACKGROUNDS[tone] }
      }
    >
      {hasImage && <div className="absolute inset-0 bg-black/45" />}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
        <h1 className="text-center text-4xl font-bold uppercase tracking-wide text-white drop-shadow-md md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
