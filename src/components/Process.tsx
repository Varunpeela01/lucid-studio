import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep-dive into your business, audience, and revenue goals. We map the conversion journey before touching a pixel."
  },
  {
    number: "02",
    title: "Design + Build",
    description: "Custom UI design and hand-coded development, running in parallel. You see real progress every 48 hours."
  },
  {
    number: "03",
    title: "Content Kit",
    description: "Social assets, launch creatives, and content calendar — all designed in sync with your website's visual language."
  },
  {
    number: "04",
    title: "Launch + Amplify",
    description: "Coordinated go-live: website deployment, social blitz, and influencer amplification. All channels fire together."
  }
];

export default function Process() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header - Left Aligned to match Services */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-extrabold tracking-[0.5em] uppercase text-brand-secondary mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            From brief to launch <br />
            <span className="text-white/40">in 14 days.</span>
          </motion.h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Step Number - Large & Subtle */}
              <div className="absolute top-4 right-8 text-6xl font-black text-white/[0.03] group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none">
                {step.number}
              </div>

              <div className="relative z-10">
                {/* Indicator */}
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-sm text-brand-secondary leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Connector (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/10 z-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
