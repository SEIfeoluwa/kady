import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Hero title="About Kady Group" backgroundImage="/images/hero.jpg" />

      <section className="mx-auto w-full max-w-3xl px-5 py-16 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-[0.15em] text-navy">
          Mission Statement
        </h2>
        <p className="mt-4 text-2xl font-bold text-gold md:text-3xl">
          Bringing your construction and development dreams to life
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Kady Group Inc."
            width={80}
            height={80}
          />
          <span className="mt-2 text-3xl font-semibold text-navy">
            Kady Group Inc
          </span>
          <span className="text-sm uppercase tracking-[0.3em] text-navy">
            Builders / Developers
          </span>
        </div>

        <p className="mt-10 text-sm leading-7 text-slate-500">
          Kady Group, Inc. was founded in 2001 and is located in Lanham
          Seabrook, Maryland. With a specialization in Construction
          Management, Kady Group, Inc. plays a key role in overseeing and
          managing construction projects for various clients. We are
          responsible for planning, coordinating, and executing construction
          projects on behalf of our clients to ensure that projects are
          completed efficiently and within budget.
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-500">
          Our business associates &amp; homeowners know that we are
          committed to excellence in everything we do. We are dedicated to
          maintaining our brand attributes of quality, care &amp; value to
          ensure that we honor and build upon these relationships.
        </p>

        <hr className="mx-auto mt-10 w-2/3 border-t-2 border-navy" />
      </section>

      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(to bottom, #14213d 0%, #4b4258 55%, #d9a66a 100%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 py-20 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            A Portfolio of Accomplishment
          </h2>
          <p className="text-sm leading-7 text-white/90">
            The forward looking individuals &amp; organizations who provide
            our parcels, the business associates &amp; trade partners who
            help make Setting the Style a reality, and the homeowners who
            turn to us for a lasting legacy as well as a home are all
            members of an extended family we are privileged to work with
            &amp; serve.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-navy-dark"
          >
            View Kady Group Projects
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
