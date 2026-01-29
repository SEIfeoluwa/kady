import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <Hero title="Projects" />
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <p className="max-w-2xl text-base text-slate-600">
          This page will feature recent and highlighted projects by Kady Group,
          Inc.
        </p>
      </section>
      <Footer />
    </main>
  );
}
