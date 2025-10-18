import { navigation } from "@/data/profile";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 rounded-xl border border-white/12 bg-slate-900/70 p-6 text-sm text-slate-400 backdrop-blur-lg sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-semibold text-slate-100">Ariel Tyson</p>
          <p className="mt-2 text-sm text-slate-400">
            Crafting software that balances performance, accessibility, and a touch of glass-inspired delight.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-4 py-1.5 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Ariel Tyson. All rights reserved.</p>
        <p className="text-slate-500/80">Designed &amp; built with React, TypeScript, and glassmorphic care.</p>
      </div>
    </footer>
  );
};

export default Footer;
