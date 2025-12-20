import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Hero Section */}
      <Section className="text-center pb-0">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Our Work
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
            <Button href="/contact" withArrow>Start Your Project</Button>
          </motion.div>
        </div>
      </Section>

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
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800 mb-6 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
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
                    <span className="text-zinc-500 font-medium uppercase text-xs tracking-wider mr-2">Context</span>
                    {project.context}
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    <span className="text-zinc-500 font-medium uppercase text-xs tracking-wider mr-2">Outcome</span>
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Authority Statement */}
      <Section className="bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-zinc-300 leading-loose italic font-light">
            "Every project is built using a hybrid production model — combining cutting-edge AI generation with traditional post-production, cinematic pacing, and human storytelling. The result is work that feels intentional, polished, and emotionally resonant."
          </p>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="text-center py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
            Ready to create your <br/> cinematic AI video?
          </h2>
          <Button href="/contact" withArrow className="text-lg px-10 py-5">
            Start Your Project
          </Button>
          <p className="mt-6 text-sm text-zinc-500">
            We respond within 24 hours and guide you through the full production process.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Work;