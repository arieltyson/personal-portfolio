import { motion } from "framer-motion";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import { heroContent } from "@/data/profile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HeroSection = (): JSX.Element => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="top" className="section-anchor relative">
      <div className="absolute inset-x-0 -top-48 -z-10 flex justify-center blur-3xl">
        <div className="h-72 w-72 rounded-full bg-cyan-500/40" />
      </div>

      <GlassCard className="relative overflow-hidden rounded-2xl px-6 py-12 sm:px-10">
        <div className="absolute inset-0 -z-10 opacity-80">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.12),_rgba(56,189,248,0.06)_35%,_rgba(15,23,42,0.92)_75%)]" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-sm font-medium text-cyan-200/80">Software Engineer • iOS • AR/Cloud</p>
            {prefersReducedMotion ? (
              <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                <span className="text-cyan-300">{heroContent.heading}</span> {heroContent.highlight}
              </h1>
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl"
              >
                <span className="text-cyan-300">{heroContent.heading}</span> {heroContent.highlight}
              </motion.h1>
            )}
            <p className="text-lg font-medium text-slate-200 sm:text-xl">{heroContent.subheading}</p>
            <p className="max-w-xl text-base text-slate-300/85">{heroContent.description}</p>
            <div className="flex flex-wrap gap-3">
              {heroContent.meta.map((pill) => (
                <span key={pill} className="rounded-full bg-white/8 px-4 py-2 text-sm text-slate-200">
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="#projects">Explore Projects</Button>
              <Button href="#contact" variant="ghost">
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div className="relative hidden min-h-[320px] rounded-[34px] border border-white/8 bg-white/6 p-1 backdrop-blur-lg lg:block">
            <div className="relative flex h-full flex-col justify-between rounded-[28px] bg-slate-900/80 p-8 text-sm text-slate-300/85">
              <div>
                <h3 className="text-lg font-semibold text-white">Right now</h3>
                <p className="mt-2 text-slate-300/80">
                  Crafting guest mode systems at Twitch, mentoring future builders with Microsoft TEALS, and experimenting with
                  AR-driven accessibility tools.
                </p>
              </div>
              <div className="space-y-3 text-slate-200/80">
                <p>• Amazon (Twitch) · Software Engineer Intern</p>
                <p>• Apple Swift Student Challenge Winner · Focus AR</p>
                <p>• ColorStack SFU · Founder & President</p>
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">Let&apos;s create together</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default HeroSection;
