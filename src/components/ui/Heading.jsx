

const Heading = ({ title, highlight, subtitle }) => (
  <div className="mb-16">
    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
      {title} <span className="text-indigo-500">{highlight}</span>
    </h2>
    <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
      {subtitle}
    </p>
    <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-8" />
  </div>
);
export default Heading;
