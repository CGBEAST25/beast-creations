import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Aperture } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Studio', id: 'about' },
  ];

  const handleNavClick = () => setIsMobileMenuOpen(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    handleNavClick();
    
    if (location.pathname !== '/') {
      navigate('/');
      // Use a timeout to allow the navigation to complete and component to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Show Home link only if not on homepage
  const showHomeLink = location.pathname !== '/';
  
  // Show Contact link only if not on contact page
  const showContactLink = location.pathname !== '/contact';

  // When menu is open, remove backdrop blur to prevent "containing block" issues for fixed children
  const navBackgroundClass = isMobileMenuOpen 
    ? 'bg-transparent' 
    : isScrolled 
      ? 'bg-beast-black/80 backdrop-blur-md border-b border-zinc-800' 
      : 'bg-transparent';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-50 group" onClick={handleNavClick}>
          <Aperture className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-180" />
          <span className="text-xl font-bold font-display tracking-tight text-white">BEAST CREATIONS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {showHomeLink && (
            <Link 
              to="/" 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </Link>
          )}
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          {showContactLink && (
            <Link 
              to="/contact" 
              className="text-sm font-medium bg-white text-black px-5 py-2 hover:bg-zinc-200 transition-colors"
            >
              Start Project
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-beast-black flex flex-col items-center justify-center md:hidden z-40"
            >
              <div className="flex flex-col items-center space-y-8">
                {showHomeLink && (
                  <Link 
                    to="/" 
                    className="text-3xl font-display font-medium text-white"
                    onClick={handleNavClick}
                  >
                    Home
                  </Link>
                )}
                {navLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={`#${link.id}`}
                    className="text-3xl font-display font-medium text-white"
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                ))}
                {showContactLink && (
                  <Link 
                    to="/contact" 
                    className="text-3xl font-display font-medium text-zinc-400"
                    onClick={handleNavClick}
                  >
                    Contact
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;