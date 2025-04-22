import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Vallabh Dongre</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['home', 'about', 'skills', 'experience', 'projects', 'frontend-projects', 'education', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${
                activeSection === section ? 'text-blue-600 active' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col space-y-6 text-center">
          {['home', 'about', 'skills', 'experience', 'projects', 'frontend-projects', 'education', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white text-xl hover:text-blue-300 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;