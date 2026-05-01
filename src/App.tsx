import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Pricing />
      <Results />
      <CTA />
      <Footer />
    </main>
  );
}
