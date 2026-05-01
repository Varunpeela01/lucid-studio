import { motion } from 'motion/react';
import { Code2, Share2, BarChart3, Box, Rocket, Palette } from 'lucide-react';

const services = [
  {
    title: "Custom Web Experiences",
    description: "Hand-coded, conversion-first websites that load fast, rank higher, and actually turn visitors into customers. No templates. No WordPress.",
    tags: ["Next.js", "React", "Tailwind"],
    icon: <Code2 className="w-6 h-6 text-white" />,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Social Distribution",
    description: "Content strategy, asset creation, and launch campaigns powered by 120K+ organic reach. Your brand, amplified through proven social channels.",
    tags: ["Instagram", "YouTube", "Reels"],
    icon: <Share2 className="w-6 h-6 text-white" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Revenue Architecture",
    description: "Full-stack conversion systems — landing pages, lead funnels, booking flows, and analytics dashboards — engineered around your business metrics.",
    tags: ["Analytics", "CRO", "Funnels"],
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: "from-emerald-500/20 to-blue-500/20"
  },
  {
    title: "3D & Motion Design",
    description: "Interactive 3D elements, product visualizations, and cinematic motion graphics that make your brand unforgettable in a sea of flat design.",
    tags: ["Three.js", "Blender", "Motion"],
    icon: <Box className="w-6 h-6 text-white" />,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Launch Campaigns",
    description: "Coordinated launch sequences combining website reveal, social content blitz, and influencer amplification for maximum Day-1 impact.",
    tags: ["Strategy", "Content", "Ads"],
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Brand Identity Systems",
    description: "Complete visual identity — logo, typography, color systems, brand guidelines — built to scale from business card to billboard.",
    tags: ["Logo", "Guidelines", "Assets"],
    icon: <Palette className="w-6 h-6 text-white" />,
    color: "from-pink-500/20 to-rose-500/20"
  }
];

export default function Services() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-extrabold tracking-[0.5em] uppercase text-brand-secondary mb-4 block"
          >
            What We Build
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            Design that performs. <br />
            <span className="text-white/40">Distribution that scales.</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-brand-secondary leading-relaxed mb-8 min-h-[80px]">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/60 tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t border-r border-white/20 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
