import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { getProjectCategory } from "@/content/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const category = getProjectCategory(slug);

  if (!category) {
    const title = slug.replace(/-/g, " ");
    return (
      <main>
        <Header />
        <Hero title={title} />
        <section className="mx-auto w-full max-w-5xl px-5 py-16">
          <p className="max-w-2xl text-base text-slate-600">
            Details for this project will be available soon.
          </p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Hero title={`${category.label} By Kady Group`} />

      <section className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-16 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-lg font-bold uppercase leading-snug text-navy">
            Our Top {category.label}
          </h2>
          <ul className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6">
            {category.projects.map((project) => (
              <li key={project.slug}>
                <a
                  href={`#${project.slug}`}
                  className="text-sm text-slate-600 transition hover:text-gold-dark"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-navy-dark"
          >
            Contact Kady Group
          </Link>
        </aside>

        <div>
          <h2 className="text-lg font-bold uppercase tracking-[0.15em] text-navy">
            {category.label}
          </h2>

          {category.projects.length > 0 ? (
            <div className="mt-8 flex flex-col gap-16">
              {category.projects.map((project) => (
                <div
                  key={project.slug}
                  className="border-b border-slate-200 pb-16 last:border-b-0 last:pb-0"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-8 max-w-2xl text-base text-slate-600">
              Details for this category will be available soon.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
