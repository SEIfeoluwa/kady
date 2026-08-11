import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-slate-300" />
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-navy">
          {title}
        </h2>
        <span className="h-px w-16 bg-slate-300" />
      </div>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  ); 
}

const companies = [
  { label: "Kady Development" },
  { label: "Kady Construction" },
  { label: "Kady Custom Homes" },
];

const services = [
  {
    label: "Development",
    description:
      "Our award-winning team of architects tackle each project with passion and creativity.",
  },
  {
    label: "Construction",
    description:
      "Our contractors and construction team deliver results with precision and accuracy.",
  },
  {
    label: "Custom Homes",
    description:
      "Trust our project managers to work with you 1-on-1, each step of the way.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section
        className="relative flex w-full items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-6xl items-center px-5 py-20">
          <div className="max-w-xl text-left text-white">
            <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
              A Team of Professionals
            </h1>
            <p className="mt-3 text-xl font-semibold md:text-2xl">
              Bringing your construction and development dreams to life
            </p>
            <p className="mt-5 text-sm leading-6 text-white/85">
              Kady Group Inc. (KGI) is a development and general contracting
              company based in Lanham, Maryland, with a focus on providing
              urban real estate services in the Washington DC metropolitan
              area, that is Washington DC, Maryland, and Virginia.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-navy-dark"
              >
                Contact Kady Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Companies */}
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            title="3 Companies Under One Distinct Roof"
            subtitle="Kady Development is responsible for the acquisition, master planning &amp; development of new parcels. Kady Construction builds out all projects &amp; manages all related activities. Kady Custom Homes oversees all the individual requirements of Kady custom homebuilding"
          />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden border-2 border-navy">
              <Image
                src="/images/hero.jpg"
                alt="Kady Group interior"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              {companies.map((company) => (
                <div
                  key={company.label}
                  className="flex items-center gap-4 border border-slate-200 border-b-4 border-b-gold bg-white px-5 py-5 shadow-sm"
                >
                  <Image
                    src="/logo.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="shrink-0"
                  />
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-navy">
                    {company.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founded banner */}
      <section className="w-full bg-navy">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 py-16 text-center">
          <p className="text-lg font-semibold leading-relaxed text-gold md:text-xl">
            Kady Group, Inc. was founded in 2001. The company is located in
            Lanham Seabrook and incorporated in Maryland. Kady Group, Inc.
            specializes in Construction Management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
          >
            Contact Kady Group
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            title="Our Services"
            subtitle="We specialize in real estate, from research, design, construction and development."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.label} className="flex flex-col">
                <Image
                  src="/images/hero.jpg"
                  alt={service.label}
                  width={480}
                  height={320}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="-mt-6 mx-4 border border-slate-200 border-b-4 border-b-gold bg-white p-5 shadow-md">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-navy">
                    {service.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setting the style */}
      <section
        className="relative flex w-full items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-5 py-24 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Setting the Style Around Town.
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-white/85">
            Kady Group offers a comprehensive range of services throughout
            the real estate development process, from initial acquisition
            and planning to construction and customization. This approach
            allows us to cater to various aspects of the real estate market,
            including luxury condominiums, single-family homes, and
            commercial properties, in the Nation&apos;s capital area.
          </p>
          <Link
            href="/about"
            className="mt-2 inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
          >
            About Kady Group
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-100 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            title="Our Projects"
            subtitle="We're lucky to have worked with such great partners, both commercial and residential."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Kady Group project"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-navy-dark"
            >
              Kady Group Top Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
