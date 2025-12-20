import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Wand2, Film, Send, CheckCircle2, Zap, Monitor, Music, Layers } from 'lucide-react';
import Section from '../components/Section.tsx';
import Button from '../components/Button.tsx';

const Studio: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col w-full">
      {/* 1. INTRO SECTION */}
      <Section className="pb-0">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">The Studio</h1>
            <p className="text-2xl md:text-3xl text-zinc-300 font-display mb-8 leading-tight">
              Where cinematic storytelling meets next-generation AI.
            </p>
            <div className="w-20 h-1 bg-white mb-8 mx-auto md:mx-0" />
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Beast Creations is a cinematic AI production studio focused on building high-impact visuals for modern brands. We operate at the intersection of emerging AI technology and traditional post-production craftsmanship — delivering work that feels intentional, polished, and human.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 2. PHILOSOPHY SECTION */}
      <Section className="bg-zinc-900/20 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Our Philosophy</h2>
           </div>
           <div>
              <p className="text-lg text-zinc-300 leading-relaxed border-l-2 border-white pl-6">
                We believe AI is not a replacement for creativity — it is a tool. Real impact comes from how technology is guided, shaped, and refined by human judgment. Our work is built on clarity, emotional pacing, and cinematic discipline. Every project is designed to feel considered, not generated.
              </p>
           </div>
        </div>
      </Section>

      {/* 3. PROCESS SECTION */}
      <Section>
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Process</h2>
          <p className="text-zinc-400 mt-4">From concept to final master.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Lightbulb className="w-6 h-6" />,
              step: "01",
              title: "Concept & Strategy",
              desc: "Understanding the brand, message, and desired emotional response."
            },
            {
              icon: <Wand2 className="w-6 h-6" />,
              step: "02",
              title: "AI Generation",
              desc: "Custom AI-driven visuals built with consistency, realism, and narrative intent."
            },
            {
              icon: <Film className="w-6 h-6" />,
              step: "03",
              title: "Post-Production",
              desc: "Traditional editing, sound design, pacing, and finishing to achieve a cinematic result."
            },
            {
              icon: <Send className="w-6 h-6" />,
              step: "04",
              title: "Delivery",
              desc: "Final assets optimized for platform, quality, and commercial use."
            }
          ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-zinc-950 border border-zinc-900 p-8 flex flex-col relative group hover:border-zinc-700 transition-colors"
             >
                <div className="absolute top-8 right-8 text-zinc-800 text-4xl font-display font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. WHY TRUST BEAST CREATIONS */}
      <Section className="bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 text-center">Why Beast Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Hybrid AI + traditional post-production workflow",
              "Cinematic quality, not generic AI visuals",
              "Emotion-driven storytelling and pacing",
              "Built for modern brands and digital platforms",
              "Focus on consistency, polish, and brand safety"
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                <span className="text-zinc-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. STUDIO CAPABILITIES */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Studio Capabilities</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Our studio is built for speed, quality, and scalability. We combine advanced AI pipelines with professional post-production systems to deliver broadcast-ready content efficiently.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { icon: <Zap className="w-5 h-5" />, label: "AI Production" },
               { icon: <Layers className="w-5 h-5" />, label: "Cinematic Editing" },
               { icon: <Music className="w-5 h-5" />, label: "Sound Design" },
               { icon: <Monitor className="w-5 h-5" />, label: "Brand Storytelling" }
             ].map((cap, i) => (
               <div key={i} className="flex items-center space-x-3 bg-zinc-900/40 p-6 border border-zinc-800 rounded-sm hover:bg-zinc-900/60 transition-colors">
                 <span className="text-white">{cap.icon}</span>
                 <span className="text-zinc-200 font-medium">{cap.label}</span>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 6. BOTTOM CTA */}
      <Section className="text-center py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            Let’s Build Something <br/> Intentional.
          </h2>
          <p className="text-zinc-400 mb-8">Clear process. Cinematic results. Professional delivery.</p>
          <Button href="/contact" withArrow className="text-lg px-10 py-5">
            Start Your Project
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Studio;