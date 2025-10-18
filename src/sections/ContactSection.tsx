import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { contactChannels } from "@/data/profile";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const defaultState: ContactFormState = {
  name: "",
  email: "",
  message: ""
};

const ContactSection = (): JSX.Element => {
  const [formState, setFormState] = useState<ContactFormState>(defaultState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = encodeURIComponent(`${formState.message}\n\n— ${formState.name}`);
    const subject = encodeURIComponent("Let's build something together");
    window.open(`mailto:ariel.tyson@icloud.com?subject=${subject}&body=${body}`);
    setFormState(defaultState);
  };

  return (
    <section id="contact" className="section-anchor mt-24 space-y-12">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s connect"
        description="Whether you have a project in mind, want to collaborate, or just feel like saying hello, I’m always excited to chat."
        align="center"
      />

      <GlassCard className="p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Let&apos;s build something great together.</h3>
            <p className="text-sm text-slate-300/80">
              From product engineering to mentorship and speaking, I enjoy partnering with teams that value empathy, curiosity, and
              thoughtful craftsmanship.
            </p>
            <ul className="space-y-4 text-sm text-slate-200/85">
              {contactChannels.map((channel) => (
                <li key={channel.id} className="flex items-center justify-between gap-4 rounded-xl border border-white/12 bg-white/8 p-4">
                  <span className="font-medium text-white">{channel.label}</span>
                  <a href={channel.href} className="truncate text-cyan-200 hover:text-cyan-100" target="_blank" rel="noreferrer">
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-slate-200/90">Name</span>
                <input
                  required
                  name="name"
                  value={formState.name}
                  onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-slate-200/90">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                  placeholder="you@example.com"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/40"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-slate-200/90">Message</span>
              <textarea
                required
                name="message"
                value={formState.message}
                onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
                placeholder="Share a vision, challenge, or spark."
                rows={5}
                className="resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/40"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit">Compose message</Button>
              <p className="text-xs text-slate-400/80">Opens your preferred email client with a pre-drafted note.</p>
            </div>
          </form>
        </div>
      </GlassCard>
    </section>
  );
};

export default ContactSection;
