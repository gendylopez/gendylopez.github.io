import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import AIChatbot from "./sections/Chatbot";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import TechStack from "./sections/TechStack";


/**
 * MAIN APP
 */
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 selection:bg-indigo-500 font-sans app-container">
      {/* GLOBAL STYLES INJECTION */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
        
        body { 
          margin: 0; 
          padding: 0; 
          background-color: #050505 !important; 
          color: #e2e8f0 !important; 
          font-family: 'Inter', sans-serif !important;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

        .app-container {
          overflow-x: hidden;
          width: 100%;
          min-height: 100vh;
          background-color: #050505;
        }

        .text-stroke {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .gradient-blur {
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
      `,
        }}
      />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 gradient-blur rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 gradient-blur rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "py-10 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-white">
          <div
            onClick={() => scrollTo("home")}
            className="font-black text-2xl cursor-pointer italic group flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-600/20 font-sans">
              G
            </div>
            <span className="tracking-tighter font-sans">Gen.dev</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
            {["about", "experience", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-white transition-all transform hover:scale-105 active:scale-95 font-sans"
              >
                {id}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {["home", "about", "experience", "projects", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-5xl font-black uppercase tracking-tighter text-slate-600 hover:text-white transition-colors italic font-sans"
                >
                  {id}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack/>
        <Contact />
      </main>

      <AIChatbot />

      <footer className="py-24 border-t border-white/5 text-center text-[10px] font-black text-slate-700 tracking-[0.5em] uppercase leading-loose relative z-10 font-sans">
        © {new Date().getFullYear()} // ENGINEERED BY GENDY LOPEZ // POWERED BY
        GEMINI AI ✨ <br />
        <span className="opacity-30 font-sans">
          BUILT WITH REACT, FRAMER MOTION, AND TAILWIND
        </span>
      </footer>
    </div>
  );
}
