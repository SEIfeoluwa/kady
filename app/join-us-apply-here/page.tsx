import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

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
      <Hero title="Join the Kady Group" />

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
        <ul className="mt-4 flex flex-col gap-2">
          {positions.map((position) => (
            <li key={position} className="text-lg font-bold text-navy">
              {position}
            </li>
          ))}
        </ul>

        <form className="mt-14 flex flex-col gap-6 text-left">
          <h3 className="text-xl font-bold text-gold">Apply Here</h3>

          <div>
            <label
              htmlFor="name"
              className="block text-sm text-slate-600"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-slate-600"
            >
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm text-slate-600"
            >
              Upload Resume
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              className="mt-2 text-sm text-slate-600"
            />
          </div>

          <div>
            <span className="block text-sm text-slate-600">
              Position Applying For:
            </span>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              {[...positions, "Other"].map((position) => (
                <label
                  key={position}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <input type="radio" name="position" value={position} />
                  {position}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark"
          >
            Send
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
