import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import brandMark from "@/assets/logo.svg";
import menuIcon from "@/assets/menu.svg";
import closeIcon from "@/assets/close.svg";
import { navigation } from "@/data/profile";
import { cn } from "@/lib/cn";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import Button from "./Button";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navigation.map((link) => link.href.replace("#", "")), []);
  const activeSection = useSectionObserver(sectionIds);

  const toggleMenu = () => setIsOpen((state) => !state);

  return (
    <header className="sticky top-6 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-xl border border-white/12 bg-slate-900/70 px-5 py-3 shadow-sm backdrop-blur-lg">
      <a href="#top" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-100">
        <img src={brandMark} alt="Ariel Tyson logo" className="h-8 w-8" />
        <span className="hidden sm:inline-flex">Ariel Tyson</span>
      </a>

      <nav className="hidden items-center gap-1 md:flex">
        {navigation.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white",
                isActive && "bg-white/15 text-white"
              )}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <div className="hidden md:block">
        <Button href="#contact">Let&apos;s Collaborate</Button>
      </div>

      <button
        type="button"
        className="rounded-full border border-white/12 p-2 md:hidden"
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        <img src={isOpen ? closeIcon : menuIcon} alt="Menu icon" className="h-8 w-8" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-16 w-full min-w-[260px] rounded-2xl border border-white/12 bg-slate-900/90 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navigation.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white",
                        isActive && "bg-white/15 text-white"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button href="#contact" className="mt-4 w-full" onClick={() => setIsOpen(false)}>
              Let&apos;s Collaborate
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
