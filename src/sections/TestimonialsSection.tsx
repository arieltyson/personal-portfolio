import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data/profile";

const TestimonialsSection = (): JSX.Element => {
  return (
    <section id="testimonials" className="section-anchor mt-24 space-y-12">
      <SectionHeader
        eyebrow="Testimonials"
        title="Words from collaborators"
        description="Encouragement from teammates, mentors, and students who have shaped my journey."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <GlassCard className="h-full space-y-5 p-6">
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.company} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-slate-100">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">
                    {testimonial.title} • {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-300/85">
                “{testimonial.quote}”
              </blockquote>
            </GlassCard>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
