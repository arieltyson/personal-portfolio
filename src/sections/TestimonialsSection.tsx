import { motion } from "framer-motion";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data/profile";
import { useCardGlow } from "@/hooks/useCardGlow";

const TestimonialsSection = (): JSX.Element => {
  const { onMouseMove } = useCardGlow();

  return (
    <section id="testimonials" className="section-anchor space-y-12">
      <SectionHeader
        eyebrow="Testimonials"
        title="Words from collaborators"
        description="Encouragement from teammates, mentors, and students who have shaped my journey."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            onMouseMove={onMouseMove}
          >
            <Card variant="glow" hue={220 + index * 50} className="h-full space-y-5">
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.company} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.title} &middot; {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-text-secondary italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </Card>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
