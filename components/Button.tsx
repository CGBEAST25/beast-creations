import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  withArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  withArrow = false,
  className = '',
  type = 'button',
  target,
  rel
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-beast-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-white border border-transparent",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-700 border border-transparent",
    outline: "bg-transparent text-white border border-zinc-700 hover:border-beast-blue hover:text-beast-blue focus:ring-beast-blue"
  };

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className} group`;

  if (href) {
    return (
      <motion.a 
        href={href} 
        target={target}
        rel={rel}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type}
      onClick={onClick} 
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;