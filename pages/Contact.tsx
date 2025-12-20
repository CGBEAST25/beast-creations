import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Section from '../components/Section.tsx';
import Button from '../components/Button.tsx';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Section className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">Start a Project</h1>
            <p className="text-zinc-400 mb-8">Tell us about your vision. We'll handle the rest.</p>
            
            <div className="flex justify-center">
              <Button 
                href="https://wa.me/message/5OMWC2DV3JRFC1" 
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900 border border-zinc-800 p-12 text-center rounded-sm"
            >
              <h3 className="text-2xl text-white font-bold mb-4">Message Sent</h3>
              <p className="text-zinc-400 mb-8">Thank you for contacting Beast Creations. We will be in touch shortly.</p>
              <Button href="/" variant="outline">Return Home</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-lg focus:border-white focus:outline-none transition-colors rounded-none placeholder-zinc-700"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-lg focus:border-white focus:outline-none transition-colors rounded-none placeholder-zinc-700"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-zinc-300 uppercase tracking-wide">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formState.description}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-lg focus:border-white focus:outline-none transition-colors rounded-none placeholder-zinc-700 resize-none"
                  placeholder="Tell us about your goals, timeline, and requirements..."
                />
              </div>

              <div className="pt-8 text-center">
                <Button type="submit" className="w-full md:w-auto px-12">Submit</Button>
                <p className="mt-4 text-xs text-zinc-500 font-medium">We'll respond within 24 hours.</p>
              </div>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Contact;