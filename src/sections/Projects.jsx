import React from "react";
import { PROJECTS } from "../data/project";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import { ChevronRight } from "lucide-react";

const Projects = () => (
    <Section id="projects">
    <Heading
      title="Key"
      highlight="Works"
      subtitle="Production-grade solutions in Aviation, Security, and Enterprise Finance."
    />
    <div className="grid md:grid-cols-2 gap-10">
      {PROJECTS.map((p, i) => (
        <div
          key={i}
          className="p-12 bg-white/5 border border-white/10 rounded-[4rem] transition-all hover:border-indigo-500/50 relative overflow-hidden group glass-panel"
        >
          <div
            className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${p.theme} flex items-center justify-center text-white mb-10 shadow-2xl group-hover:scale-110 transition-transform`}
          >
            {/* {p.icon} */}
          </div>
          <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2 font-sans">
            {p.cat}
          </p>
          <h3 className="text-4xl font-black text-white mb-4 italic tracking-tighter uppercase font-sans">
            {p.title}
          </h3>
          <p className="text-slate-400 leading-relaxed text-lg mb-10 font-sans">
            {p.desc}
          </p>
          <button className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 hover:text-indigo-400 transition-colors group/btn font-sans">
            Explore Case Study{" "}
            <ChevronRight
              size={14}
              className="group-hover/btn:translate-x-1 transition-transform font-sans"
            />
          </button>
          <div
            className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${p.theme} opacity-5 blur-[100px] rounded-full group-hover:opacity-10 transition-opacity`}
          />
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
