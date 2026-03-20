import { motion } from "framer-motion";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { projects } from "@/data/profile";

const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" className="section-anchor space-y-12">
      <SectionHeader
        eyebrow="Projects"
        title="Featured Projects"
        description="A snapshot of products and experiments that highlight my love for design systems, performance, and delightful user journeys."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="flex h-full flex-col overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent transition-colors hover:text-accent-hover"
                    aria-label={`View ${project.name} repository`}
                  >
                    View repo &rarr;
                  </a>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.tags.map((tag) => (
                    <span key={tag.name} className="rounded-full bg-surface-secondary px-3 py-1 font-medium text-text-secondary">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 rounded-apple border border-separator bg-surface-secondary p-10 text-center">
        <h3 className="text-xl font-semibold text-text-primary">Looking for more?</h3>
        <p className="max-w-2xl text-sm text-text-secondary">
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
