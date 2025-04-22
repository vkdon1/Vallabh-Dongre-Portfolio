import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-3xl mx-auto fade-in">
          <p className="text-lg mb-6 leading-relaxed">
            Accomplished Full Stack Developer Intern with hands-on experience
            in designing and implementing RESTful APIs, and developing
            full-stack web applications using JavaScript, React, and Node.js.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Demonstrated expertise in cloud computing through a virtual
            internship at AWS Academy, specialising in AWS infrastructure
            management and deployment best practices.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Gained practical knowledge in Salesforce development during an
            8-week virtual internship at SmartInternz, earning Super Badges in
            Apex Specialist, Process Automation Specialist, and Developer
            Super Set.
          </p>
          <p className="text-lg leading-relaxed">
            Proficient in a wide range of technologies including C++, Core
            Java, Python, GitHub, HTML, CSS, Express.js, MySQL, MongoDB,
            Docker, Kubernetes, CI/CD pipelines and Tailwind CSS. Strong
            skills in effective communication, team collaboration,
            problem-solving and leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;