import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function JoinUsApplyHerePage() {
  return (
    <main>
      <Header />
      <Hero title="Join Us" />
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <p className="max-w-2xl text-base text-slate-600">
          We are always looking for great people to join Kady Group, Inc. This
          page will include open roles and application details soon.
        </p>
      </section>
      <Footer />
    </main>
  );
}
