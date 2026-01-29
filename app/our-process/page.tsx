import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function OurProcessPage() {
  return (
    <main>
      <Header />
      <Hero title="Our Process" />
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <p className="max-w-2xl text-base text-slate-600">
          We align on goals, map the scope, and deliver with care. This page will
          detail the Kady Group, Inc. process soon.
        </p>
      </section>
      <Footer />
    </main>
  );
}
