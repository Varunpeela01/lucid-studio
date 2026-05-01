import { motion } from 'motion/react';

const marqueeItems = [
  "Web Applications",
  "Social Strategy",
  "Brand Identity",
  "Content Production",
  "UI/UX Design",
  "3D & Motion",
  "Conversion Optimization",
  "Launch Campaigns"
];

export default function Marquee() {
  // Duplicate items for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center gap-12 pr-12"
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white/80 uppercase">
                {item}
              </span>
              <span className="text-xl text-white/20">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Fades for edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
}
