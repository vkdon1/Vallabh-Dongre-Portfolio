import React from 'react';
import { Github, Linkedin, Youtube, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Vallabh Dongre</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="http://www.linkedin.com/in/vallabh-dongre-286491262"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/vkdon1"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="http://www.youtube.com/@vallabhshub"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://leetcode.com/u/42_numbers/"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Vallabh Dongre. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;