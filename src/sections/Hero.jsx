import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
} from "lucide-react";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const Hero = () => {
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-10 max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest uppercase">
          <Zap size={14} /> Available for Freelance Engineering
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white leading-[0.8] uppercase select-none font-sans">
          GENDY
          <br />
          <span className="text-stroke font-sans">LOPEZ.</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto font-light italic leading-relaxed font-sans">
          Architecting resilient full-stack systems for global scale and
          operational excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-12 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-white/5 font-sans"
          >
            View Projects <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-sans"
          >
            Let's Build Together
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
