import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <Hero title="Kady Group Services" backgroundImage="/images/hero.jpg" />

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <h2 className="text-center text-2xl font-bold uppercase leading-snug text-navy md:text-3xl">
          Kady Group offers a comprehensive range of services throughout the
          real estate development process, from initial acquisition and
          planning to construction and customization.
        </h2>
        <p className="mt-6 text-center text-lg font-bold text-gold">
          This approach allows us to cater to various aspects of the real
          estate market, including luxury condominiums, single-family homes,
          and commercial properties, in the Nation&apos;s capital area.
        </p>
        <hr className="mt-8 border-t-2 border-gold" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex flex-col gap-6 text-sm leading-7 text-slate-600">
            <p>
              Kady Group Inc. focuses on the acquisition of real estate
              properties, including land and existing buildings as well as
              identifying investment opportunities and developing strategies
              for future projects.
            </p>
            <p>
              KGI is also responsible for the construction phase of real
              estate projects. They also handle the actual building and
              development of luxury condominiums, single-family homes, and
              commercial properties.
            </p>
            <p>
              Kady Group Inc. also specializes in building custom-designed
              single-family homes tailored to the specific preferences and
              needs of individual clients. We work closely with homeowners to
              create unique and personalized living spaces.
            </p>
          </div>

          <div className="rounded-md border-8 border-white bg-white p-1 shadow-lg">
            <Image
              src="/images/hero.jpg"
              alt="Kady Group interior"
              width={640}
              height={480}
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-navy-dark"
          >
            Contact Kady Group
          </Link>
        </div>

        <hr className="mt-12 border-t-2 border-gold" />
      </section>

      <Footer />
    </main>
  );
}
