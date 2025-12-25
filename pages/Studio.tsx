import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Wand2, Film, Send, CheckCircle2, Zap, Monitor, Music, Layers, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section.tsx';
import Button from '../components/Button.tsx';

const Studio: React.FC = () => {
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

      {/* 1. INTRO SECTION */}
      <Section className="pb-0 pt-32">
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
            <div className="w-20 h-1 bg-beast-blue mb-8 mx-auto md:mx-0" />
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Beast Creations is a cinematic AI production studio focused on building high-impact visuals for modern brands. We operate at the intersection of emerging AI technology and traditional post-production craftsmanship — delivering work that feels intentional, polished, and human.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 2. PHILOSOPHY SECTION */}
      <div className="relative w-full overflow-hidden my-10">
        {/* Background Visuals for Philosophy */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-beast-blue/10 rounded-full blur-[100px] opacity-20" />
        </div>

        <Section className="relative z-10">
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
      </div>

      {/* 3. PROCESS SECTION */}
      <Section className="relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Process</h2>
          <p className="text-zinc-400 mt-4">From concept to final master.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Lightbulb className="w-5 h-5" />,
              step: "01",
              title: "Concept & Strategy",
              desc: "Understanding the brand, message, and desired emotional response.",
              image: "https://i.imgur.com/8MiQMN6.jpeg" // Concept & Strategy (Updated)
            },
            {
              icon: <Wand2 className="w-5 h-5" />,
              step: "02",
              title: "AI Generation",
              desc: "Custom AI-driven visuals built with consistency, realism, and narrative intent.",
              image: "https://i.imgur.com/SbxpQBT.jpeg" // AI Generation (Updated)
            },
            {
              icon: <Film className="w-5 h-5" />,
              step: "03",
              title: "Post-Production",
              desc: "Traditional editing, sound design, pacing, and finishing to achieve a cinematic result.",
              image: "https://i.imgur.com/GcpQ2Pl.jpeg" // Post-production A
            },
            {
              icon: <Send className="w-5 h-5" />,
              step: "04",
              title: "Delivery",
              desc: "Final assets optimized for platform, quality, and commercial use.",
              image: "https://i.imgur.com/MUy0zRr.jpeg" // Finished product on screen
            }
          ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col relative group"
              >
                {/* Image Card */}
                <div className="relative h-64 w-full overflow-hidden rounded-sm mb-6 bg-zinc-900 border border-zinc-900">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white font-display font-bold border border-white/10">
                        {item.step}
                    </div>
                </div>

                {/* Content */}
                <div className="flex items-start space-x-4">
                     <div className="w-10 h-10 shrink-0 bg-zinc-900 rounded-full flex items-center justify-center text-beast-blue group-hover:bg-beast-blue group-hover:text-white transition-colors">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
              </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. WHY TRUST BEAST CREATIONS - Tech Blue BG */}
      <Section className="bg-[#050a14] border-y border-beast-blue/20 relative overflow-hidden">
        {/* Tech Blue Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
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
                <CheckCircle2 className="w-5 h-5 text-beast-blue shrink-0 mt-1" />
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
            <div className="hidden lg:block w-12 h-1 bg-beast-blue mt-8" />
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { 
                   icon: <Zap className="w-5 h-5" />, 
                   label: "AI Production", 
                   image: "https://i.imgur.com/Q9Fkjgm.jpeg" // Gears
               },
               { 
                   icon: <Layers className="w-5 h-5" />, 
                   label: "Cinematic Editing", 
                   image: "https://i.imgur.com/YTgxOQn.jpeg" // Editor working 2
               },
               { 
                   icon: <Music className="w-5 h-5" />, 
                   label: "Sound Design", 
                   image: "https://i.imgur.com/w8A2FhH.jpeg" // Post-production B
               },
               { 
                   icon: <Monitor className="w-5 h-5" />, 
                   label: "Brand Storytelling", 
                   image: "https://i.imgur.com/7YVUhDj.jpeg" // Happy client A
               }
             ].map((cap, i) => (
               <div key={i} className="group relative h-48 sm:h-64 overflow-hidden rounded-sm border border-zinc-800">
                 {/* Background Image */}
                 <div className="absolute inset-0">
                    <img 
                        src={cap.image} 
                        alt={cap.label} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                 </div>

                 {/* Content Overlay */}
                 <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center space-x-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-beast-blue bg-black/50 p-2 rounded-full backdrop-blur-sm">{cap.icon}</span>
                        <span className="text-white font-bold font-display text-lg tracking-wide">{cap.label}</span>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 6. BOTTOM CTA */}
      <Section className="text-center py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            Let’s Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-beast-blue">
              Intentional.
            </span>
          </h2>
          <p className="text-zinc-400 mb-8">Clear process. Cinematic results. Professional delivery.</p>
          <Button href="#/contact" withArrow className="text-lg px-10 py-5">
            Start Your Project
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Studio;