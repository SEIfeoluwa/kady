"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Join Us-Apply Here", href: "/join-us-apply-here" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-black/10 shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/KadyGroup-Development-Construction-Custom-Homes.png"
            alt="Kady Group, Inc."
            width={36}
            height={36}
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-wide text-navy">
              Kady Group Inc.
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Builders | Developers
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-gold-dark ${
                  isActive ? "text-gold-dark" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-navy transition hover:text-gold-dark md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      <div
        className={`border-t border-black/5 bg-white px-5 pb-4 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-3 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors hover:text-gold-dark"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
