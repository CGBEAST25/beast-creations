import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, Video, Layers, ShieldCheck, Cpu } from 'lucide-react';
import Section from '../components/Section.tsx';
import Button from '../components/Button.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beast-blue/10 rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-beast-blue/5 border border-beast-blue/20 text-beast-blue text-xs tracking-widest uppercase mb-8">
              The Future of Production
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white tracking-tight leading-[1.1] mb-8">
              Cinematic AI Video <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-beast-blue">
                Production for Brands
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We blend next-generation AI with human-led post-production to create premium, brand-safe video ads that stand out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#/contact" withArrow>Start a Project</Button>
              <Button href="#work" variant="outline">View Our Work</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do / Work */}
      <Section id="work" className="border-t border-zinc-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Not Artificial. <br/> Just Enhanced.
            </h2>
          </div>
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Beast Creations produces high-end video content using a hybrid production model — combining AI-generated visuals with expert editing, sound design, and storytelling.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We don't just generate content; we craft it. Our outcome-focused approach ensures every frame is polished, emotionally engaging, and strategically aligned with your brand goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <div className="relative w-full overflow-hidden">
        {/* Background Visuals for Services */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beast-blue/10 rounded-full blur-[120px] opacity-30" />
        </div>
        
        <Section id="services" className="">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Services</h2>
            <p className="text-zinc-400">Tailored production tiers for every stage of growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8" />,
                title: "Social & Growth",
                desc: "Short-form and promotional videos designed for speed, clarity, and engagement on social platforms."
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Brand & Campaign",
                desc: "Cinematic brand videos with strong storytelling, pacing, and visual consistency for marketing campaigns."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Premium & Enterprise",
                desc: "High-impact, broadcast-ready productions built for large brands requiring maximum polish and safety."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 p-8 hover:border-beast-blue/50 transition-colors duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-beast-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Why Us */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 group transition-colors duration-500">
            <iframe 
              src="https://player.vimeo.com/video/1148451221?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Loopreel"
              style={{ pointerEvents: 'none' }}
            />
            
            {/* Dark Overlay for cinematic mood */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            {/* Gradient Overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-white font-display text-2xl font-bold">The Beast Standard</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Why Beast Creations</h2>
            <div className="space-y-6">
              {[
                "Hybrid AI + Traditional Post-Production",
                "Cinematic Quality, Not Generic AI Visuals",
                "Human Storytelling & Emotional Pacing",
                "Commercially Cleared, Brand-Safe Output",
                "Built for Real Businesses, Not Experiments"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-beast-blue shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Trust & Professionalism */}
      <Section className="bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <Cpu className="w-12 h-12 mx-auto mb-8 text-beast-blue" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Built on Trust & Technical Authority</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Professional Workflow</h3>
              <p className="text-zinc-600">We operate with the rigour of a traditional production house. Timelines are respected, deliverables are checked, and quality is guaranteed.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Brand Safety</h3>
              <p className="text-zinc-600">Our AI workflows are curated to ensure commercial safety. No copyright infringements, no hallucinations in final delivery.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <div className="relative w-full overflow-hidden">
        {/* Background Visuals for About */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beast-blue/10 rounded-full blur-[120px] opacity-30" />
        </div>

        <Section id="about">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">About The Studio</h2>
            <p className="text-2xl md:text-3xl text-white font-display leading-tight">
              Beast Creations is a pioneer in AI-powered video production in Nigeria. We are experts in craft and forward-thinking execution, dedicated to pushing the boundaries of what's possible in digital storytelling without losing the human touch.
            </p>
          </div>
        </Section>
      </div>

      {/* CTA */}
      <Section className="py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-8">
          Ready to create <br /> something powerful?
        </h2>
        <Button href="#/contact" withArrow className="text-lg px-10 py-5">
          Contact Beast Creations
        </Button>
      </Section>
    </div>
  );
};

export default Home;