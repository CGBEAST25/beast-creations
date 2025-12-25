import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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
              <p className="text-zinc-400 mb-8">
                Thank you for reaching out to Beast Creations. <br />
                We'll be in touch shortly to discuss your project.
              </p>
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
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-lg focus:border-beast-blue focus:outline-none transition-colors rounded-none placeholder-zinc-700"
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
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-lg focus:border-beast-blue focus:outline-none transition-colors rounded-none placeholder-zinc-700"
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
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-white text-lg focus:border-beast-blue focus:outline-none transition-colors rounded-none placeholder-zinc-700 resize-none"
                  placeholder="Tell us about your goals, timeline, and requirements..."
                />
              </div>

              <div className="pt-8 text-center">
                <Button type="submit" className="w-full md:w-auto px-12">Submit Request</Button>
              </div>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Contact;