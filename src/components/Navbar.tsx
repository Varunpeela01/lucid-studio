import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-2 border-b border-white/0">
        {/* Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer shrink-0">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-md md:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
            <span className="text-[11px] md:text-xs font-black text-black">L</span>
          </div>
          <span className="text-[15px] md:text-lg font-bold tracking-tighter text-white uppercase whitespace-nowrap">
            Lucid Studio
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <button className="whitespace-nowrap px-5 py-2.5 md:px-6 md:py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5">
            Request Demo
          </button>
        </div>
      </div>
    </motion.header>
  );
}
