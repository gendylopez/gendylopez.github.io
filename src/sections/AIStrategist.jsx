import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AIStrategist = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const prompt = `Project requirements: ${input}. How does Gendy's background fit this?`;
    const sys = `Explain how Gendy's 7+ years experience (AirAsia, Indra) fits these needs. Context: ${RESUME_CONTEXT}`;
    try {
      const res = await callGemini(prompt, sys);
      setOutput(res);
    } catch (err) {
      setOutput("Error connecting to AI Strategist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 mb-20 relative overflow-hidden group shadow-2xl">
      <div className="relative z-10 max-w-3xl">
        <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3 italic">
          <Sparkles className="text-indigo-500" /> AI PROJECT STRATEGIST
        </h3>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your project needs..."
          className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-slate-200 mb-4 focus:outline-none focus:border-indigo-500 min-h-[120px] shadow-inner"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          {loading ? "Generating..." : "Consult AI"}
        </button>
        {output && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-8 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-slate-300 whitespace-pre-wrap leading-relaxed shadow-lg"
          >
            {output}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default AIStrategist;
