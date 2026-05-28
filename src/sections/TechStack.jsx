import React from "react";
import { Monitor, Cpu, Globe, Layers, Zap, Code2, Terminal, Github } from "lucide-react"; // Matching your existing icons
// import {TECH_CATEGORIES} from "../data/techstack"
import { motion, AnimatePresence } from "framer-motion";

const TechStack = () => {

const TECH_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Monitor size={20} />,
    skills: ["React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Cpu size={20} />,
    skills: ["Node.js", "Python", "Java", "C#", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe size={20} />,
    skills: ["GCP", "AWS", "Docker", "Jenkins", "Kubernetes"],
  },
  {
    title: "Data & Tools",
    icon: <Layers size={20} />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Automation"],
  },
];
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-12 text-center">
        Tech Stack & Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {[
          { n: "React", i: <Globe /> },
          { n: "React Native", i: <Globe /> },
          { n: "Angular", i: <Globe /> },

          { n: "Node.js", i: <Code2 /> },
          { n: "TypeScript", i: <Code2 /> },
          { n: "Java", i: <Code2 /> },
          { n: "Spring Boot", i: <Code2 /> },
          { n: "Python", i: <Code2 /> },
          { n: "Go", i: <Code2 /> },

          { n: "GCP", i: <Cpu /> },
          { n: "AWS", i: <Cpu /> },

          { n: "Jenkins", i: <Zap /> },
          { n: "Docker", i: <Zap /> },
          { n: "Redis", i: <Zap /> },

          { n: "PostgreSQL", i: <Layers /> },

          { n: "Git", i: <Github /> },
          { n: "GitLab", i: <Github /> },
          { n: "Jira", i: <Layers /> },
        ].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 grayscale hover:grayscale-0 transition-all cursor-default"
          >
            <div className="text-indigo-400 mb-2">{skill.i}</div>
            <span className="text-xs font-medium text-slate-400">
              {skill.n}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
