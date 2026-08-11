import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const stages = [
  { label: "Stage 1", description: "Meet with client to discuss their needs" },
  { label: "Stage 2", description: "Concept design with architect" },
  { label: "Stage 3", description: "Evaluation of client's plans and ideas" },
  {
    label: "Stage 4",
    description: "Schematics/ Project Development (develop an estimate and cost)",
  },
  { label: "Stage 5", description: "Construction" },
];

export default function OurProcessPage() {
  return (
    <main>
      <Header />
      <Hero title="Our Process" />

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 className="text-center text-2xl font-bold uppercase text-navy md:text-3xl">
          Bringing your construction and development dreams to life
        </h2>
        <hr className="mx-auto mt-8 border-t border-navy" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-gold">Kady Group Process</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {stages.map((stage) => (
                <li
                  key={stage.label}
                  className="flex items-start gap-2 text-sm font-semibold text-navy"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                  <span>
                    {stage.label}: <span className="font-medium">{stage.description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-navy-dark"
            >
              Contact Kady Group
            </Link>
          </div>

          <div className="rounded-md border-8 border-white bg-white p-1 shadow-lg">
            <Image
              src="/images/hero.jpg"
              alt="Kady Group process"
              width={640}
              height={480}
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
