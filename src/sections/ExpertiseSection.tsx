import { motion } from "framer-motion";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { aboutDescription, services, technologies } from "@/data/profile";
import { useCardGlow } from "@/hooks/useCardGlow";

const serviceHues = [210, 280, 170, 35];

const ExpertiseSection = (): JSX.Element => {
  const { onMouseMove } = useCardGlow();

  return (
    <section id="about" className="section-anchor space-y-12">
      <SectionHeader
        eyebrow="Get to know me"
        title="Introduction."
        description={aboutDescription}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            onMouseMove={onMouseMove}
          >
            <Card variant="glow" hue={serviceHues[index]} className="flex h-full flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-apple-sm bg-surface-secondary p-2">
                  <img src={item.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">{item.summary}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card variant="gradient" className="overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-text-primary">Toolbox</p>
            <p className="mt-2 max-w-xl text-sm text-text-secondary">
              A curated stack I lean on to craft reliable, user-friendly experiences across the web, mobile, and cloud.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="tech-pill inline-flex items-center gap-2 rounded-full bg-surface-secondary px-4 py-2 text-xs font-medium text-text-primary dark:bg-white/8"
              >
                <img src={tech.icon} alt="" className="h-5 w-5" loading="lazy" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ExpertiseSection;
