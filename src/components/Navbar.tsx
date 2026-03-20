import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import brandMark from "@/assets/logo.jpg";
import menuIcon from "@/assets/menu.svg";
import closeIcon from "@/assets/close.svg";
import { navigation } from "@/data/profile";
import { cn } from "@/lib/cn";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import Button from "./Button";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const Navbar = ({ theme, onToggleTheme }: NavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navigation.map((link) => link.href.replace("#", "")), []);
  const activeSection = useSectionObserver(sectionIds);

  const toggleMenu = () => setIsOpen((state) => !state);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-separator bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-text-primary">
          <img src={brandMark} alt="Ariel Tyson logo" className="h-8 w-8 rounded-lg object-cover" />
          <span className="hidden sm:inline-flex">Ariel Tyson</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigation.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm transition-opacity duration-200 text-text-primary/70 hover:text-text-primary",
                  isActive && "font-medium text-text-primary"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <Button href="#contact">Get in Touch</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-secondary"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-separator"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <img src={isOpen ? closeIcon : menuIcon} alt="" className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full border-b border-separator bg-surface p-4 shadow-lg md:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {navigation.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={cn(
                          "block rounded-apple-sm px-4 py-3 text-base text-text-primary/70 transition-colors hover:bg-surface-secondary hover:text-text-primary",
                          isActive && "font-medium text-text-primary"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <Button href="#contact" className="mt-3 w-full" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Button>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
