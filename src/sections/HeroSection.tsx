import { motion } from "framer-motion";
import Button from "@/components/Button";
import { heroContent } from "@/data/profile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const pillHues = [210, 280, 170];

const HeroSection = (): JSX.Element => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const heading = (
    <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-display lg:text-hero">
      {heroContent.heading}{" "}
      <span className="text-accent">{heroContent.highlight}</span>
    </h1>
  );

  return (
    <section id="top" className="section-anchor flex flex-col items-center pt-12 text-center lg:pt-20">
      {prefersReducedMotion ? (
        heading
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {heading}
        </motion.div>
      )}

      <p className="mt-6 text-xl font-medium text-text-secondary sm:text-2xl">
        {heroContent.subheading}
      </p>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
        {heroContent.description}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {heroContent.meta.map((pill, index) => (
          <motion.span
            key={pill}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-pill relative overflow-hidden rounded-full border border-separator bg-surface px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-0.5 dark:bg-[#1d1d1f]"
            style={{ "--pill-hue": pillHues[index] } as React.CSSProperties}
          >
            {pill}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Button href="#projects">Explore Projects</Button>
        <Button href="#contact" variant="ghost">
          Let&apos;s Connect
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
