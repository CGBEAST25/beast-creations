import React from 'react';
import { Aperture, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6 group">
            <Aperture className="w-6 h-6 text-white group-hover:rotate-45 transition-transform" />
            <span className="text-lg font-bold font-display tracking-tight text-white">BEAST</span>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Premium AI-powered video production for modern brands. Based in Nigeria, serving the world.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Studio</h4>
          <ul className="space-y-4">
            <li><a href="/#work" className="text-zinc-500 hover:text-white transition-colors text-sm">Work</a></li>
            <li><a href="/#services" className="text-zinc-500 hover:text-white transition-colors text-sm">Services</a></li>
            <li><a href="/#about" className="text-zinc-500 hover:text-white transition-colors text-sm">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/beastcreations.ai" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://x.com/Beast_creations" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Beast Creations. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built in Nigeria.</p>
      </div>
    </footer>
  );
};

export default Footer;