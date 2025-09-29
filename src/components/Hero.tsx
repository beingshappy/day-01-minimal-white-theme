import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
          codewithhappy
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
          Frontend Developer & UI Designer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Creating beautiful, functional digital experiences with clean code and thoughtful design
        </p>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;