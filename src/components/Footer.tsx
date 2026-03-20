import { navigation } from "@/data/profile";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-separator bg-surface-secondary px-6 py-8 text-sm text-text-secondary" aria-label="Footer navigation">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="font-semibold text-text-primary">Ariel Tyson</p>
            <p className="mt-2 text-sm text-text-secondary">
              Crafting software that balances performance, accessibility, and thoughtful design.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-separator pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Ariel Tyson. All rights reserved.</p>
          <p>Designed &amp; built with React, TypeScript, and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
