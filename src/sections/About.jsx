import React from "react";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import { Award, Database, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <Section id="about">
      <Heading
        title="Engineering"
        highlight="Philosophy"
        subtitle="Bridging the gap between architecture and high-performance implementation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            As a{" "}
            <span className="text-white font-bold">Tech Lead at AirAsia</span>,
            I focus on building systems that don't just work, but scale. I lead
            cross-functional teams to deliver complex features like Customer 360
            and automated check-ins.
          </p>
          <p>
            I am a strong advocate for{" "}
            <span className="text-indigo-400">clean code</span> and{" "}
            <span className="text-purple-400">cloud-native architecture</span>.
            My career has been defined by transforming manual processes into
            automated, efficient modules that drive business growth.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
              <Database className="text-indigo-400 mb-3" size={24} />
              <h4 className="text-white font-bold text-sm">Persistence</h4>
              <p className="text-xs text-slate-500">
                PostgreSQL, BigQuery, Firestore, Datastore, Redis expert.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
              <Cloud className="text-purple-400 mb-3" size={24} />
              <h4 className="text-white font-bold text-sm">Deployment</h4>
              <p className="text-xs text-slate-500">
                Google Cloud Platform, Docker.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-500/5 to-transparent border border-white/10 rounded-[3rem] p-10 space-y-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Award size={20} className="text-indigo-400" /> Technical Arsenal
          </h3>
          <div className="space-y-6">
            {[
              {
                label: "Backend",
                tech: "Node.js, Python, TypeScript, Java, Go",
                progress: 95,
              },
              {
                label: "Frontend",
                tech: "React, Angular, React Native",
                progress: 90,
              },
              {
                label: "Cloud/DevOps",
                tech: "GCP, Docker",
                progress: 85,
              },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-200 font-bold uppercase tracking-widest">
                    {s.label}
                  </span>
                  <span className="text-slate-500">{s.tech}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
