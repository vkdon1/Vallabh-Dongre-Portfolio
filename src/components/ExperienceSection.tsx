import React from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Web Developer Intern',
      company: 'BrainlyHood Technologies',
      period: '02/2025 to Present',
      responsibilities: [
        'Developing responsive web interfaces using HTML, CSS, JavaScript, and React.js.',
        'Utilizing Java for backend logic and integration with frontend components.',
        'Collaborating with design and development teams to enhance UI/UX and functionality.',
        'Implementing interactive features, performing code reviews, and ensuring cross-browser compatibility.'
      ],
    }
    ,{
      title: 'Full Stack Developer Intern',
      company: 'Innomatics Research Labs',
      period: '01/2025 to 04/2025',
      responsibilities: [
        'Exhibited strong commitment and recognized for punctuality in the Full Stack Developer internship.',
        'Collaborated with the development team to build and enhance web applications.',
        'Designed and implemented RESTful APIs, enabling effective communication between front-end and back-end systems.',
        ' Gained practical experience in frontend and backend development using modern frameworks',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Exposys Data Labs',
      period: '08/2024 to 09/2024',
      responsibilities: [
        'Exhibited strong commitment and recognized for punctuality in the Full Stack Developer internship.',
        'Enhanced knowledge in full-stack development while delivering impactful contributions to team initiatives.',
        'Designed and implemented RESTful APIs, enabling effective communication between front-end and back-end systems.',
        'Developed and maintained full-stack web applications using JavaScript, React, and Node.js, enhancing user experience and functionality.',
      ],
    },
    {
      title: 'Cloud Virtual Internship',
      company: 'AWS Academy',
      period: '07/2024 to 09/2024',
      responsibilities: [
        'Gained expertise in cloud computing through a 10-week AWS Academy virtual internship.',
        'Specialized in AWS infrastructure management and deployment best practices.',
        'Engaged in a virtual internship focusing on cloud computing with AWS Academy.',
      ],
    },
    {
      title: 'Salesforce Developer Virtual Internship',
      company: 'SmartInternz',
      period: '11/2023 to 01/2024',
      responsibilities: [
        'Company Overview: 8-week virtual internship, gaining practical knowledge in Salesforce development.',
        'Worked on Salesforce Trailhead modules covering Salesforce Fundamentals, Organizational Setup, Relationship & Process Automation, Apex coding, and Lightning Web Components (LWC).',
        'Earned Super Badges: Apex Specialist, Process Automation Specialist, and Developer Super Set.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative border-l-2 border-blue-500 pl-8 ${
                index !== experiences.length - 1 ? 'pb-12' : ''
              } fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-blue-700">{exp.title}</h3>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-700 mb-4 font-medium">{exp.company}</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="leading-relaxed">{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
