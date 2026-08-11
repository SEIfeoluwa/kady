import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <Hero title="Contact Kady Group" backgroundImage="/images/hero.jpg" />

      <section className="mx-auto w-full max-w-3xl px-5 py-16 text-center">
        <p className="text-base font-bold text-slate-900">
          Do you have an existing house, land, or parcels that you&apos;re
          considering selling or developing?
        </p>
        <p className="mt-3 text-base font-bold text-slate-900">
          We&apos;re interested in hearing from you. Contact us today to
          discuss potential opportunities.
        </p>
      </section>

      <section className="w-full bg-navy">
        <div className="mx-auto w-full max-w-5xl px-5 py-16">
          <div className="grid gap-10 sm:grid-cols-[auto_1px_1fr]">
            <div className="flex flex-col gap-8 text-right">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                Address
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                Phone
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                Email
              </span>
            </div>
            <div className="hidden bg-white/20 sm:block" />
            <div>
              <h2 className="text-lg font-bold uppercase tracking-[0.15em] text-gold">
                Contact Information
              </h2>
              <div className="mt-8 flex flex-col gap-8 text-sm text-white/90">
                <span>
                  9324 Annapolis Rd, Lanham, MD 20706 &nbsp;|&nbsp; P.O. Box:
                  790, Lanham MD 20703
                </span>
                <span>(301) 429-5970</span>
                <a
                  href="mailto:info@kadygroup.com"
                  className="text-gold transition hover:text-gold-dark"
                >
                  info@kadygroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <iframe
          title="Kady Group location"
          src="https://www.google.com/maps?q=9324+Annapolis+Rd,+Lanham,+MD+20706&output=embed"
          className="h-80 w-full border-0"
          loading="lazy"
        />
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-slate-300" />
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-navy">
            Contact Us
          </h2>
          <span className="h-px w-16 bg-slate-300" />
        </div>

        <form className="mt-10 flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-600">
                Name <span className="text-red-500">*</span>
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
              <label htmlFor="email" className="block text-sm text-slate-600">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-slate-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
            />
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
