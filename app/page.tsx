import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Header />

      <section
        className="relative flex w-full items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-[70vh] min-h-[420px] w-full max-w-6xl items-center px-5 py-20 md:min-h-[520px]">
          <div className="max-w-xl text-left text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
              Kady Group, Inc.
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Building thoughtful spaces that move communities forward.
            </h1>
            <h2 className="mt-4 text-xl font-medium text-white/90 md:text-2xl">
              Planning, execution, and stewardship across every phase.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/80">
              We partner with clients to deliver projects with clarity, care,
              and accountability—bringing the right team together for every
              milestone.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-amber-500"
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section title="3 Companies Under One Distinct Roof">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-sm uppercase tracking-[0.3em] text-slate-400">
            Placeholder Image
          </div>
          <div className="flex flex-col gap-4">
            {["Company One", "Company Two", "Company Three"].map((label) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                  {label}
                </span>
                <button className="rounded-full border border-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 transition hover:bg-amber-100">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="w-full bg-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
          <p className="text-2xl font-semibold text-amber-200">
            Ready to plan your next project with confidence?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-400"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      <Section title="Our Services">
        <div className="grid gap-6 md:grid-cols-3">
          {["Service One", "Service Two", "Service Three"].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                {label}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Placeholder description for this service offering.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="w-full bg-slate-200">
        <div className="mx-auto h-48 w-full max-w-6xl px-5 py-16" />
      </section>

      <Section title="Our Projects">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-32 rounded-xl bg-slate-200"
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-400"
          >
            View All Projects
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
