export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-slate-200">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Kady Group, Inc. All rights reserved.
      </div>
    </footer>
  );
}
