import React from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  GitBranch,
  Monitor
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { icon: Code, name: 'React & TypeScript', description: 'Modern frontend development' },
    { icon: Palette, name: 'UI/UX Design', description: 'User-centered design approach' },
    { icon: Database, name: 'Backend Integration', description: 'RESTful APIs & databases' },
    { icon: Globe, name: 'Web Performance', description: 'Optimization & best practices' },
    { icon: Smartphone, name: 'Mobile First', description: 'Responsive design principles' },
    { icon: Zap, name: 'Modern Tools', description: 'Vite, Webpack, and more' },
    { icon: GitBranch, name: 'Version Control', description: 'Git workflows & collaboration' },
    { icon: Monitor, name: 'Cross-browser', description: 'Compatibility & testing' }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <skill.icon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;