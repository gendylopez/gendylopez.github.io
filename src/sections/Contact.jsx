import React from "react";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import { Linkedin, Globe, Github, Mail } from "lucide-react";
const Contact = () => (
  <Section id="contact" className="text-center">
    <div className="max-w-4xl mx-auto py-20 bg-gradient-to-b from-indigo-500/10 to-transparent border border-white/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
      <Heading
        title="Hire"
        highlight="Expertise"
        subtitle="Looking for a Lead Engineer or a Full Stack Developer? Let's discuss your roadmap."
      />

      <div className="space-y-8 relative z-10">
        <a
          href="mailto:gendylopez08@gmail.com"
          className="text-2xl md:text-4xl font-black text-white hover:text-indigo-400 transition-colors block break-words"
        >
          gendylopez08@gmail.com
        </a>

        <div className="flex justify-center gap-6">
          {[
            {
              icon: <Linkedin size={28} />,
              href: "https://linkedin.com/in/gendylopez",
            },
            { icon: <Mail size={28} />, href: "mailto:gendylopez08@gmail.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="p-5 md:p-7 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:text-indigo-400 transition-all hover:-translate-y-2"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 p-10 opacity-5 text-white pointer-events-none">
        <Globe size={300} />
      </div>
    </div>
  </Section>
);

export default Contact;
