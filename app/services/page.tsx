import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <Hero title="Services" />
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <p className="max-w-2xl text-base text-slate-600">
          This page will outline the services Kady Group, Inc. provides.
        </p>
      </section>
      <Footer />
    </main>
  );
}
