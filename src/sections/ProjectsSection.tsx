import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { projects } from "@/data/profile";

const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" className="section-anchor mt-24 space-y-12">
      <SectionHeader
        eyebrow="Projects"
        title="Featured Projects"
        description="A snapshot of products and experiments that highlight my love for design systems, performance, and delightful user journeys."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <GlassCard className="flex h-full flex-col overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-950/80" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-200 transition hover:text-cyan-100"
                  >
                    View repo →
                  </a>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-300/85">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-200/80">
                  {project.tags.map((tag) => (
                    <span key={tag.name} className="rounded-full border border-white/12 bg-white/6 px-3 py-1">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-8 text-center backdrop-blur-lg">
        <h3 className="text-xl font-semibold text-white">Looking for more?</h3>
        <p className="max-w-2xl text-sm text-slate-300/80">
          I love discussing architecture, user experience, and teaching. If you&apos;d like to collaborate or review additional
          work, feel free to reach out.
        </p>
        <Button href="#contact" variant="ghost">
          Let&apos;s collaborate
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
