import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  link: string;
}

const CertificatesSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'Full Stack Web Development Training',
      issuer: 'Devtown',
      description: 'Completed an intensive 3-month program, focusing on both front-end and back-end frameworks, gaining comprehensive skills in web development.',
      link: 'https://drive.google.com/file/d/1THpTpOquM2yocybdpLah2S3CSitdY6VB/view?usp=sharing',
    },
    {
      title: 'Cisco Networking Essentials',
      issuer: 'Cisco',
      description: 'Acquired foundational networking knowledge essential for managing and configuring network infrastructures.',
      link: 'https://drive.google.com/file/d/1tiNxXdvdOMczG45zZsG7UP-aaB26BIUD/view?usp=sharing',
    },
    {
      title: 'Advanced Software Engineering Job Simulation',
      issuer: 'Forage (Walmart)',
      description: 'Gained hands-on experience in Advanced Data Structures, Software Architecture, Relational Database Design, and Data Munging through a comprehensive job simulation program.',
      link: 'https://docs.google.com/document/d/1yRv63sh9NJLnesoXc2gWHfRbYnx5pubdWa1q19h7WlM/edit?usp=drive_link',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      description: 'Gained proficiency in online safety, understanding cybersecurity concepts, and addressing cyber threats and vulnerabilities.',
      link: 'https://drive.google.com/file/d/1mHbuLRgqF98yRzmSX7A5P4PfmzEpnIC3/view?usp=sharing',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-2 text-blue-700">{cert.title}</h3>
              <p className="text-gray-600 mb-2 font-medium">{cert.issuer}</p>
              <p className="text-gray-700 mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center transition-colors group"
              >
                <ExternalLink size={16} className="mr-1 group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:underline">View Certificate</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;