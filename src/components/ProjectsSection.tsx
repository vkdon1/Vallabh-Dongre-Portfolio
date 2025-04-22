import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string | null;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'VD-LearnNest',
      description: 'A MERN-stack learning platform with authentication and authorization.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/vkdon1',
      demo: null,
    },
    {
      id: 2,
      title: 'Text Utils',
      description: 'TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting.',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['React', 'Bootstrap'],
      github: 'https://github.com/vkdon1/TextUtils',
      demo: 'https://text-utils-steel-mu.vercel.app/',
    },
    {
      id: 3,
      title: 'URL Shortener',
      description: 'A URL shortener application that generates unique short codes for long URLs.',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['HTML', 'CSS', 'Node.js', 'Express.js'],
      github: 'https://github.com/vkdon1/VD-Url-shortner',
      demo: null,
    },
    {
      id: 4,
      title: 'BURGUR Web Application',
      description: 'A food ordering web application with integrated database storage.',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/vkdon1/VD-Url-shortner',
      demo: 'https://vkdon1.github.io/Brugur_Web_application/',
    },
    {
      id: 5,
      title: 'Child Care Management System',
      description: 'A comprehensive web-based system to manage and track child care services and records.',
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1047&q=80',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/vkdon1',
      demo: null,
    },
    {
      id: 6,
      title: 'Zomato Landing Page',
      description: 'A fully responsive landing page for Zomato using HTML and CSS.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/vkdon1',
      demo: 'https://zomato-landing-page1.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{project.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;