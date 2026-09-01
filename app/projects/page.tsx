import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ParallaxSection from "@/components/ParallaxSection";
import { projectCategories as categories } from "@/content/projects";

const categoryImages: Record<string, string> = {
  "residential-projects": "/images/3826-1st-Street_6.jpg",
  "custom-homes": "/images/001_2715_TENNYSON_ST_NW_208044_288757.jpg",
  "commercial-projects": "/images/JesusHouse-Exterior.jpg",
  "past-properties": "/images/Kady-13465-Sorghum-Court.jpeg",
};

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <Hero
        title="Projects By Kady Group"
        backgroundImage="/images/1-web-or-mls-13-print-MAX_1607.jpg"
        backgroundPosition="center 25%"
      />

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
                <ImagePlaceholder
                  src={categoryImages[category.slug] ?? null}
                  alt={category.label}
                  width={480}
                  height={320}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="relative z-10 -mt-6 mx-6 border border-slate-200 border-b-4 border-b-gold bg-white p-4 text-center shadow-md">
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
            <ImagePlaceholder
              src="/images/Kady-Group-Solitude-Court-2.png"
              alt="Coming Soon"
              width={480}
              height={320}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="relative z-10 -mt-6 mx-6 border border-slate-200 border-b-4 border-b-gold bg-white p-4 text-center shadow-md">
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

      <ParallaxSection
        image="/images/kady-group-newton-street3.jpg"
        className="flex items-center justify-center py-48"
      >
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy shadow-lg transition hover:bg-gold-dark"
          >
            Contact Kady Group
          </Link>
        </div>
      </ParallaxSection>

      <Footer />
    </main>
  );
}
