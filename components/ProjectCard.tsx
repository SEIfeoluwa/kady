import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div id={project.slug} className="scroll-mt-24">
      <h3 className="text-xl font-bold text-navy">{project.name}</h3>

      <div className="mt-4 overflow-hidden rounded-md">
        <ImagePlaceholder
          src={project.heroImage}
          alt={project.name}
          width={960}
          height={540}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      {project.gallery.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {project.gallery.map((src, index) => (
            <ImagePlaceholder
              key={index}
              src={src}
              alt={`${project.name} photo ${index + 1}`}
              width={220}
              height={160}
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}
