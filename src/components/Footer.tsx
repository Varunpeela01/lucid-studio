import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Column 1 - Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">Lucid Studio</span>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            </div>
            <p className="text-sm text-brand-secondary leading-relaxed max-w-xs">
              A premium digital studio merging design excellence with mass distribution. We build what converts.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-8">Services</h4>
            <ul className="space-y-4">
              {["Web Experiences", "Social Distribution", "Revenue Architecture", "3D & Motion"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-secondary hover:text-blue-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-8">Company</h4>
            <ul className="space-y-4">
              {["About", "Process", "Case Studies", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-secondary hover:text-blue-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-8">Connect</h4>
            <ul className="space-y-4">
              <li><a href="mailto:hello@lucid.studio" className="text-sm text-brand-secondary hover:text-blue-500 transition-colors">hello@lucid.studio</a></li>
              <li><a href="#" className="text-sm text-brand-secondary hover:text-blue-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-brand-secondary hover:text-blue-500 transition-colors">YouTube</a></li>
              <li><a href="#" className="text-sm text-brand-secondary hover:text-blue-500 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-white/30 font-medium">
            © 2026 Lucid Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {[Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
