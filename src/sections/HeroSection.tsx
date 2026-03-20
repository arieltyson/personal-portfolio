import { motion } from "framer-motion";
import Button from "@/components/Button";
import { heroContent } from "@/data/profile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {heroContent.meta.map((pill) => (
          <span
            key={pill}
            className="rounded-full bg-surface-secondary px-4 py-2 text-sm text-text-secondary"
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="#projects">Explore Projects</Button>
        <Button href="#contact" variant="ghost">
          Let&apos;s Connect
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
