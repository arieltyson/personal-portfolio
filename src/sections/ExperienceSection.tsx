import { motion } from "framer-motion";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/profile";
import { useCardGlow } from "@/hooks/useCardGlow";

const ExperienceSection = (): JSX.Element => {
  const { onMouseMove } = useCardGlow();

  return (
    <section id="experience" className="section-anchor space-y-12">
      <SectionHeader
        eyebrow="Career journey"
        title="Work Experience"
        description="Opportunities that have strengthened my craft across product, platform, and education."
      />

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
            onMouseMove={onMouseMove}
          >
            <Card variant="glow" hue={210 + index * 40} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-14 w-14 shrink-0 overflow-hidden rounded-apple-sm bg-white ring-1 ring-black/10 dark:ring-white/10">
                    <img src={experience.icon} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-text-primary">{experience.role}</p>
                    <p className="text-sm text-text-secondary">
                      {experience.company} &middot; {experience.period}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                {experience.highlights.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
