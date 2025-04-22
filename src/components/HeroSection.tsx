import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white animated-gradient min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 fade-in visible">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vallabh Dongre
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Full Stack Developer | MERN Stack Developer | Software Engineer
          </h2>
          <p className="text-xl mb-8 max-w-xl">
            Passionate about building robust web applications and exploring
            new technologies to create impactful digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="btn-outline"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center fade-in visible" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 scale-110"></div>
            <div className="bg-white p-2 rounded-full shadow-xl relative z-10 transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://i.ibb.co/Zz18qL0K/PASS.jpg"
                alt="Vallabh Dongre"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;