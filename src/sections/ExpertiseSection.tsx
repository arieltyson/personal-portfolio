import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { aboutDescription, services, technologies } from "@/data/profile";

const ExpertiseSection = (): JSX.Element => {
  return (
    <section id="about" className="section-anchor mt-24 space-y-12">
      <SectionHeader
        eyebrow="Get to know me"
        title="Introduction."
        description={aboutDescription}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <GlassCard className="flex h-full flex-col items-center gap-4 p-6 text-center">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 p-2">
                  <img src={item.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-300/85">{item.summary}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <GlassCard className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-100">Toolbox</p>
            <p className="mt-2 max-w-xl text-sm text-slate-300/80">
              A curated stack I lean on to craft reliable, user-friendly experiences across the web, mobile, and cloud.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200/80"
              >
                <img src={tech.icon} alt="" className="h-5 w-5" loading="lazy" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default ExpertiseSection;
