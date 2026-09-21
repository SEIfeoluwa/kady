"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

type ParallaxSectionProps = {
  image: string;
  className?: string;
  overlayClassName?: string;
  children: ReactNode;
};

// Speed factor and buffer are tuned together: the buffer (how much taller
// the image layer is than the section) must comfortably exceed the max
// translate offset this factor produces while the section is in view.
const SPEED = 0.25;

export default function ParallaxSection({
  image,
  className,
  overlayClassName = "bg-black/65",
  children,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageEl = imageRef.current;
    if (!section || !imageEl) return;

    let ticking = false;

    function update() {
      ticking = false;
      if (!section || !imageEl) return;
      const rect = section.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2 + rect.height / 2) * SPEED;
      imageEl.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden ${className ?? ""}`}
    >
      <div
        ref={imageRef}
        className="absolute left-0 right-0 will-change-transform"
        style={{ top: "-40%", bottom: "-40%" }}
      >
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
