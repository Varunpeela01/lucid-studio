import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] pt-32 pb-20 md:pt-20 md:pb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
        
        {/* Animated Background Mesh Gradient */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Now contains all text and CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col text-left max-w-xl mx-auto lg:mx-0 w-full z-10 pt-10 lg:pt-0"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <span className="text-[11px] md:text-xs font-extrabold tracking-widest md:tracking-[0.5em] uppercase text-brand-secondary">
              Design Studio × Social Distribution
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[40px] leading-[1.05] sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight md:tracking-tighter md:leading-[0.9] mb-5 md:mb-8 text-white uppercase"
          >
            WE BUILD <br className="hidden md:block" />
            WHAT <br className="hidden md:block" />
            <span className="text-white/30">CONVERTS.</span> <br />
            THEN <br className="hidden md:block" />
            MULTIPLY <br className="hidden md:block" />
            <span className="text-white/30">WHO SEES IT.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col gap-6 md:gap-8 mt-2 md:mt-0">
            <p className="text-[15px] md:text-base font-medium text-brand-secondary max-w-sm leading-relaxed">
              A premium digital studio merging custom-coded experiences with social distribution strategy. We architect revenue through design.
            </p>
            <button className="group w-full max-w-[260px] sm:w-fit px-8 py-3.5 md:py-4 bg-white text-black text-sm font-bold md:text-base md:font-extrabold rounded-full md:rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              Start Your Project
              <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Liquid Chrome Animation (Visual Only) */}
        <div className="absolute right-[-30%] sm:right-0 top-[15%] md:top-[20%] lg:top-auto lg:relative w-[500px] h-[500px] lg:w-full lg:h-[800px] flex items-center justify-center scale-75 md:scale-90 lg:scale-100 opacity-20 sm:opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto z-0">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Liquid Chrome Container */}
            <div className="relative w-full h-full filter-chrome">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [
                      Math.random() * 60 - 30,
                      Math.random() * 60 - 30,
                      Math.random() * 60 - 30,
                    ],
                    y: [
                      Math.random() * 60 - 30,
                      Math.random() * 60 - 30,
                      Math.random() * 60 - 30,
                    ],
                    scale: [1, 1.3, 0.8, 1.2, 1],
                    rotate: [0, 120, 240, 360],
                    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                  }}
                  transition={{
                    duration: 12 + i * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 chrome-blob"
                  style={{
                    width: `${350 + i * 30}px`,
                    height: `${300 + i * 40}px`,
                    background: i % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0.4) 100%)'
                      : 'linear-gradient(225deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.5) 100%)',
                    boxShadow: 'inset 0 0 50px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            {/* High-Contrast Reflection Overlays */}
            <motion.div
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.1),transparent)] blur-2xl pointer-events-none"
            />
            
            {/* Central Specular Highlight */}
            <motion.div
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* SVG Filter for Chrome Gooey Effect */}
      <svg className="hidden">
        <defs>
          <filter id="chrome-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
            <feSpecularLighting in="goo" surfaceScale="5" specularConstant="1.2" specularExponent="40" lightingColor="#ffffff" result="specular">
              <fePointLight x="200" y="200" z="300" />
            </feSpecularLighting>
            <feComposite in="specular" in2="goo" operator="in" result="specularOut" />
            <feComposite in="SourceGraphic" in2="specularOut" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        .filter-chrome {
          filter: url('#chrome-goo');
        }
        .chrome-blob {
          mix-blend-mode: soft-light;
        }
      `}} />
    </section>
  );
}
