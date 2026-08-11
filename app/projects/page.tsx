import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const categories = [
  {
    slug: "residential-projects",
    label: "Residential Projects",
    cta: "View Residential",
  },
  {
    slug: "custom-homes",
    label: "Custom Homes",
    cta: "View Custom Homes",
  },
  {
    slug: "commercial-projects",
    label: "Commercial Projects",
    cta: "View Commercial",
  },
  {
    slug: "past-properties",
    label: "Past Properties",
    cta: "View Past Projects",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <Hero title="Projects By Kady Group" tone="muted" />

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <p className="text-center text-base font-bold text-slate-900">
          Kady Group Inc. (KGI) is a development and general contracting
          company based in Lanham, Maryland, with a focus on providing urban
          real estate services in the Washington DC metropolitan area, that
          is Washington DC, Maryland, and Virginia.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category.slug} className="flex flex-col items-center">
              <Link
                href={`/projects/${category.slug}`}
                className="w-full max-w-md"
              >
                <Image
                  src="/images/hero.jpg"
                  alt={category.label}
                  width={480}
                  height={320}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="-mt-6 mx-6 border border-slate-200 border-b-4 border-b-gold bg-white p-4 text-center shadow-md">
                  <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-navy">
                    {category.label}
                  </h2>
                </div>
              </Link>
              <Link
                href={`/projects/${category.slug}`}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-navy-dark"
              >
                {category.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <Link href="/projects/coming-soon" className="w-full max-w-md">
            <Image
              src="/images/hero.jpg"
              alt="Coming Soon"
              width={480}
              height={320}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="-mt-6 mx-6 border border-slate-200 border-b-4 border-b-gold bg-white p-4 text-center shadow-md">
              <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-navy">
                Coming Soon
              </h2>
            </div>
          </Link>
          <Link
            href="/projects/coming-soon"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-navy-dark"
          >
            View Coming Soon Projects
          </Link>
        </div>
      </section>

      <section
        className="relative flex w-full items-center justify-center bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy shadow-lg transition hover:bg-gold-dark"
        >
          Contact Kady Group
        </Link>
      </section>

      <Footer />
    </main>
  );
}
