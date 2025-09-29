import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate frontend developer with 5+ years of experience creating 
              digital solutions that combine beautiful design with seamless functionality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in React, TypeScript, and modern web technologies. 
              My approach focuses on user experience, clean code, and attention to detail.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open source projects, or enjoying a good cup of coffee.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-6xl text-gray-400">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;