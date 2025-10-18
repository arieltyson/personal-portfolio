import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/profile";

const ExperienceSection = (): JSX.Element => {
  return (
    <section id="experience" className="section-anchor mt-24 space-y-12">
      <SectionHeader
        eyebrow="Career journey"
        title="Work Experience"
        description="Opportunities that have strengthened my craft across product, platform, and education."
      />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <GlassCard className="flex flex-col gap-6 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/8 p-2">
                    <img src={experience.icon} alt="" className="h-10 w-10 object-contain" loading="lazy" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{experience.role}</p>
                    <p className="text-sm text-slate-300/80">
                      {experience.company} • {experience.period}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-300/85">
                {experience.highlights.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
