import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`w-full max-w-6xl mx-auto px-6 py-24 md:py-32 ${className}`}
  >
    {children}
  </motion.section>
);
export default Section;
