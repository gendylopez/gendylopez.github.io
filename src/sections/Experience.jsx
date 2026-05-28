import React from "react";
import { EXPERIENCE } from "../data/experience";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";

const Experience = () => (
  <Section id="experience">
    <Heading
      title="Professional"
      highlight="Timeline"
      subtitle="A trajectory defined by technical impact and project delivery."
    />
    <div className="space-y-10">
      {EXPERIENCE.map((exp, i) => (
        <div
          key={i}
          className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all transform hover:-translate-y-1 glass-panel"
        >
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-1 font-sans">
                {exp.company}
              </h3>
              <p className="text-indigo-400 font-bold uppercase text-xs tracking-widest font-sans">
                {exp.role}
              </p>
            </div>
            <span className="font-mono text-slate-500 font-bold text-sm bg-black/40 px-4 py-2 rounded-xl border border-white/5 self-start mt-4 md:mt-0">
              {exp.period}
            </span>
          </div>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-4xl font-sans">
            {exp.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 bg-white/5 text-slate-400 text-[10px] font-black rounded-xl border border-white/10 uppercase tracking-widest hover:border-indigo-500/50 hover:text-indigo-400 transition-colors font-sans"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
