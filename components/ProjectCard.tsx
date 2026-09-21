"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Lightbox from "@/components/Lightbox";
import type { Project } from "@/content/projects";

function MagnifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = [project.heroImage, ...project.gallery]
    .filter((src): src is string => Boolean(src))
    .map((src, i) => ({ src, alt: `${project.name} photo ${i + 1}` }));

  return (
    <div id={project.slug} className="scroll-mt-24">
      <h3 className="text-xl font-bold text-navy">{project.name}</h3>
      {project.subtitle && (
        <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>
      )}

      <div className="mt-4 overflow-hidden rounded-md">
        {project.heroImage ? (
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="group relative block w-full"
            aria-label={`View larger photo of ${project.name}`}
          >
            <ImagePlaceholder
              src={project.heroImage}
              alt={project.name}
              width={960}
              height={540}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
              <MagnifyIcon className="h-10 w-10 text-white/90 drop-shadow" />
            </div>
          </button>
        ) : (
          <ImagePlaceholder
            src={project.heroImage}
            alt={project.name}
            width={960}
            height={540}
            className="aspect-[16/9] w-full object-cover"
          />
        )}
      </div>

      {project.gallery.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {project.gallery.map((src, index) => {
            const photoIndex = index + 1; // offset by hero image at index 0
            return src ? (
              <button
                key={index}
                type="button"
                onClick={() => setLightboxIndex(photoIndex)}
                className="group relative block"
                aria-label={`View larger photo ${photoIndex + 1} of ${project.name}`}
              >
                <ImagePlaceholder
                  src={src}
                  alt={`${project.name} photo ${index + 1}`}
                  width={220}
                  height={160}
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-sm bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
                  <MagnifyIcon className="h-6 w-6 text-white/90 drop-shadow" />
                </div>
              </button>
            ) : (
              <ImagePlaceholder
                key={index}
                src={src}
                alt={`${project.name} photo ${index + 1}`}
                width={220}
                height={160}
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            );
          })}
        </div>
      )}

      {lightboxIndex !== null && photos.length > 0 && (
        <Lightbox
          images={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
