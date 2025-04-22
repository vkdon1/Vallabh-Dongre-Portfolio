import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Youtube, Code } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white animated-gradient"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white relative">
          Get In Touch
          <span className="block w-20 h-1 bg-white mx-auto mt-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 group-hover:bg-opacity-30 transition-all">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:vallabhdongre5@gmail.com"
                    className="hover:underline group-hover:text-blue-200 transition-colors"
                  >
                    vallabhdongre5@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 group-hover:bg-opacity-30 transition-all">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a 
                    href="tel:+918767905826" 
                    className="hover:underline group-hover:text-blue-200 transition-colors"
                  >
                    +91 8767905826
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-10 mb-6">Social Links</h3>
            <div className="flex space-x-4">
              <a
                href="http://www.linkedin.com/in/vallabh-dongre-286491262"
                className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/vkdon1"
                className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.youtube.com/@includevallabh.h"
                className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://leetcode.com/u/42_numbers/"
                className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="LeetCode"
              >
                <Code size={20} />
              </a>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white placeholder-opacity-70"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white placeholder-opacity-70"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white placeholder-opacity-70"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;