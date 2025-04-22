import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface FrontendProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
}

const FrontendProjectsSection: React.FC = () => {
  const frontendProjects: FrontendProject[] = [
    {
      id: 1,
      title: 'Business Website (Tours & Travel Agency)',
      description:
        'A responsive portfolio website built with HTML, CSS, and JavaScript.',
      image:
        'https://images.pexels.com/photos/12185637/pexels-photo-12185637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      features: [
        'Responsive design for all screen sizes',
        'Interactive UI elements',
        'Contact form with validation',
        'Project showcase with filtering',
      ],
      github: 'https://github.com/vkdon1/portfolio-website',
      demo: 'https://fantastic-griffin-358434.netlify.app/',
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description:
        'A fully responsive e-commerce landing page with product showcase and animations.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      features: [
        'Product carousel',
        'Newsletter signup',
        'Mobile-first design',
        'Animated content sections',
      ],
      github: 'https://github.com/vkdon1/ecommerce-landing',
      demo: 'https://unique-llama-73d428.netlify.app/',
    },
  ];

  return (
    <section id="frontend-projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Frontend Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {frontendProjects.map((project, index) => (
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
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendProjectsSection;
