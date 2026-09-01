import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobApplicationForm from "@/components/JobApplicationForm";

const positions = [
  "Estimator",
  "Assistant Project Manager",
  "Project Manager",
  "Architect",
];

export default function JoinUsApplyHerePage() {
  return (
    <main>
      <Header />
      <Hero
        title="Join the Kady Group"
        backgroundImage="/images/003_2900_12TH_STREET_UNIT_301_329719_618357.jpg"
      />

      <section className="mx-auto w-full max-w-3xl px-5 py-16 text-center">
        <h2 className="text-3xl font-bold text-gold">Join Us – Apply Here</h2>
        <div className="mt-6 flex flex-col gap-3 text-base font-bold text-slate-900">
          <p>
            Are you looking to join a dynamic team of construction and
            development experts?
          </p>
          <p>
            We&apos;re always on the lookout for talented individuals who
            share our passion for excellence.
          </p>
          <p>Explore our career opportunities and be part of the Kady Group family.</p>
        </div>

        <hr className="mt-10 border-t-2 border-navy" />

        <h3 className="mt-10 text-xl font-bold text-gold">
          Positions we are hiring for:
        </h3>
        <ul className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-x-6 gap-y-2">
          {positions.map((position) => (
            <li key={position} className="text-lg font-bold text-navy">
              {position}
            </li>
          ))}
        </ul>

        <JobApplicationForm positions={positions} />
      </section>

      <Footer />
    </main>
  );
}
