import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-40 bg-[#050505] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-extrabold tracking-[0.5em] uppercase text-blue-500 mb-6 block"
        >
          Ready?
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Let's build your <br />
          <span className="text-white/40">revenue engine.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-brand-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Book a free 30-minute strategy call. We'll map your conversion journey and show you exactly what we'd build.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-8 py-3.5 md:px-10 md:py-5 bg-white text-black rounded-full md:rounded-2xl text-sm font-bold md:font-black md:text-lg flex items-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-2xl shadow-white/10"
        >
          Book Strategy Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
