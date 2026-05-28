import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  MessageSquare,
  Bot,
} from "lucide-react";
/**
 * GEMINI API INTEGRATION
 */
const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Provided at runtime

const callGemini = async (
  prompt,
  systemInstruction = "",
  retries = 5,
  delay = 1000
) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: systemInstruction
      ? { parts: [{ text: systemInstruction }] }
      : undefined,
  };

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response generated."
      );
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) =>
        setTimeout(resolve, delay * Math.pow(2, i))
      );
    }
  }
};

const RESUME_CONTEXT = `
Gendy Lopez - Full Stack Developer and Tech Lead
Experience:
- AirAsia (Tech Lead): Led 8 engineers, architected Customer 360, increased revenue via personalization, Node.js, GCP, Python.
- Indra (Software Engineer): Health Travel Pass, contactless COVID clearance, Regula SDK, REST APIs.
- Denso Ten (Associate SE): Migrated C++ to C#, improved productivity by 42% via automation tools.
Skills: Node.js, React, Angular, Python, Java, GCP, AWS, PostgreSQL, MongoDB, Docker, Jenkins.
Education: BS IT from Polytechnic University of the Philippines.
`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Gendy's AI twin. Ask me anything about her experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);
    try {
      const res = await callGemini(
        userMsg,
        `You are Gendy's AI twin. Context: ${RESUME_CONTEXT}`
      );
      setMessages((prev) => [...prev, { role: "ai", text: res }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Offline temporarily. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[350px] md:w-[400px] h-[550px] bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col mb-4 overflow-hidden"
          >
            <div className="p-5 bg-indigo-600 flex justify-between items-center text-white font-bold">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <span>Gendy AI Twin</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-1 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-black/20"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                      m.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-white/5 text-slate-200 border border-white/5 rounded-tl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-white/10 bg-black/40 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Ask about Gendy's stack..."
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 bg-indigo-600 rounded-2xl text-white flex items-center justify-center hover:bg-indigo-500 transition-all shadow-lg active:scale-95 shadow-indigo-600/20"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-indigo-600/30"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default AIChatbot;