import React from 'react';
import Section from '../components/Section.tsx';

const Studio: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Section className="flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">The Studio</h1>
          <p className="text-zinc-400 text-lg">
            This is the future home of the Beast Creations studio information.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Studio;