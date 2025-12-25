import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section.tsx';
import Button from '../components/Button.tsx';

const Work: React.FC = () => {
  const projects = [
    {
      title: "A Day with Music",
      context: "A cinematic lifestyle piece exploring rhythm, movement, and atmosphere through AI-enhanced visuals.",
      outcome: "Designed to evoke emotion and immerse viewers in a mood-driven narrative.",
      vimeoId: "1148351299"
    },
    {
      title: "PlugNG",
      context: "A modern AI-powered brand visual crafted for digital-first promotion.",
      outcome: "Built to increase brand appeal and position the product as contemporary and tech-forward.",
      vimeoId: "1148352048"
    },
    {
      title: "EPL Watch Party",
      context: "High-energy sports-themed visual designed to capture community, excitement, and live moments.",
      outcome: "Optimized for social engagement and event promotion.",
      vimeoId: "1148351983"
    },
    {
      title: "Depression",
      context: "An emotionally driven cinematic short exploring mental health through symbolic AI storytelling.",
      outcome: "Created to spark awareness, empathy, and emotional connection.",
      vimeoId: "1148351487"
    }
  ];

  return (
    <div className="pt-20 min-h-screen flex flex-col w-full relative">
      {/* Back Navigation */}
      <div className="absolute top-24 w-full z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="pointer-events-auto inline-flex items-center text-zinc-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Background */}
      <div className="relative w-full overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beast-blue/10 rounded-full blur-[120px] opacity-30" />
        </div>

        <Section className="text-center pb-0 pt-32">
          <div className="max-w-4xl mx-auto mb-16 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-beast-blue">
                Our Work
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-2xl mx-auto leading-relaxed"
            >
              Selected projects showcasing cinematic AI storytelling, crafted with human precision.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-zinc-500 uppercase tracking-widest mb-8"
            >
              High-impact visuals built for brands that want to stand out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="#/contact" withArrow>
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Video Showcase Section */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Video Wrapper */}
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800 mb-6 shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:border-beast-blue/30">
                <iframe 
                  src={`https://player.vimeo.com/video/${project.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1`} 
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  title={project.title}
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3 px-1">
                <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                
                <div className="space-y-1">
                  <p className="text-zinc-400 leading-relaxed">
                    <span className="text-beast-blue font-medium uppercase text-xs tracking-wider mr-2">Context</span>
                    {project.context}
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    <span className="text-beast-blue font-medium uppercase text-xs tracking-wider mr-2">Outcome</span>
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Authority Statement */}
      <Section>
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#050a14] border border-[#1e293b]/50 p-12 md:py-20 md:px-12 flex items-center justify-center">
           {/* Very subtle blue tint to match deep dark blue hue in image */}
           <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
           
           <div className="relative z-10 max-w-5xl mx-auto text-center">
             <p className="text-lg md:text-xl text-zinc-200 leading-relaxed italic font-light tracking-wide">
               "Every project is built using a hybrid production model — combining cutting-edge<br className="hidden md:block" />
               AI generation with traditional post-production, cinematic pacing, and human<br className="hidden md:block" />
               storytelling. The result is work that feels intentional, polished, and emotionally <br className="hidden md:block" />
               resonant."
             </p>
           </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="text-center py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
            Ready to create your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-beast-blue">
              cinematic AI video?
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#/contact" withArrow className="text-lg px-10 py-5">
              Start Your Project
            </Button>
            <Button 
              href="https://wa.me/message/5OMWC2DV3JRFC1" 
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-10 py-5 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            We respond within 24 hours and guide you through the full production process.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Work;