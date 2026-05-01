import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const stats = [
  { value: "47%", label: "Avg. Conversion Rate Increase" },
  { value: "2.1s", label: "Avg. Page Load Speed" },
  { value: "120K+", label: "Organic Social Reach" },
  { value: "98%", label: "Client Satisfaction Rate" }
];

export default function Results() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Stats Grid */}
        <div className="mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-extrabold tracking-[0.5em] uppercase text-brand-secondary mb-4 block"
          >
            Proof
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-16 leading-[1.1]"
          >
            Numbers don't lie.
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-brand-secondary font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
                {/* Decorative Line */}
                <div className="absolute -bottom-4 left-0 w-8 h-1 bg-blue-500/30 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[48px] bg-white/[0.02] border border-white/5 overflow-hidden"
        >
          {/* Decorative Quote Mark */}
          <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/[0.02] -rotate-12 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-12 tracking-tight">
              "They didn't just build us a website — they built us a launch system. Within 2 weeks of going live, we had more qualified leads than the previous 3 months combined."
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-black text-white shadow-xl shadow-blue-500/20">
                R
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">Rahul Mehra</div>
                <div className="text-sm text-brand-secondary uppercase tracking-widest font-bold">Founder, Nexus Properties</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
