import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Join Us-Apply Here", href: "/join-us-apply-here" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-navy-dark">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
          Kady Group, Inc.
        </h3>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.1em] text-slate-300 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-2 text-[11px] text-slate-400">
          Copyright {new Date().getFullYear()} Kady Group, Inc.
        </div>
      </div>
    </footer>
  );
}
