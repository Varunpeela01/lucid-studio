import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "STARTER",
    label: "Launchpad",
    price: "₹75K",
    description: "For new brands ready to make a strong first impression online.",
    features: [
      "3–5 page custom website",
      "Mobile-first, fast-loading",
      "10 social creatives",
      "15-day content calendar",
      "Basic SEO setup",
      "10–14 day delivery"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "PRO",
    label: "Growth System",
    price: "₹2.5L",
    description: "The full revenue engine. Website + distribution in one package.",
    features: [
      "5–8 page custom site + hero interaction",
      "Lead capture & booking system",
      "15-piece social asset kit",
      "Launch reel (30–60s)",
      "30-day content calendar",
      "1× influencer collab post",
      "Analytics dashboard",
      "3–4 week delivery"
    ],
    buttonText: "Start Growing",
    popular: true
  },
  {
    name: "ENTERPRISE",
    label: "Revenue Engine",
    price: "₹5L+",
    description: "Full-scale digital transformation with ongoing amplification.",
    features: [
      "Custom web application",
      "3D / motion / advanced interactions",
      "30 social creatives + 3 reels",
      "3× influencer collab series",
      "Influencer seeding strategy",
      "90-day performance reviews",
      "6–8 week delivery"
    ],
    buttonText: "Let's Talk",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-extrabold tracking-[0.5em] uppercase text-brand-secondary mb-4 block"
          >
            Investment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            Transparent pricing. <br />
            <span className="text-white/40">No hidden fees.</span>
          </motion.h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[32px] border transition-all duration-500 ${
                tier.popular 
                ? 'bg-white/[0.04] border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)] scale-105 z-20' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-[10px] font-black tracking-widest text-white uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase block mb-2">
                  {tier.name}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.label}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-brand-secondary">/ project</span>
                </div>
                <p className="mt-4 text-sm text-brand-secondary leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3.5 md:py-4 rounded-full md:rounded-2xl font-bold md:font-extrabold text-sm md:text-base transition-all duration-300 ${
                tier.popular
                ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20'
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
