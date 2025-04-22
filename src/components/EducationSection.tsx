import React from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Prof. Ram Meghe Institute of Technology and Research',
      period: '2023 - Present',
      score: 'CGPA: 9.09',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sant Gadge Baba Amravati University (SGBAU)',
      period: '2020 - 2023',
      score: 'Percentage: 87.67',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Arts, Commerce, and Science College Kiran Nagar Amravati',
      period: '2019 - 2020',
      score: 'Percentage: 61.38',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Shri Ram Krishna Krida Vidyalaya Amravati',
      period: '2017 - 2018',
      score: 'Percentage: 81.20%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative border-l-2 border-blue-500 pl-8 ${
                index !== education.length - 1 ? 'pb-12' : ''
              } fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-blue-700">{edu.degree}</h3>
                  <span className="text-gray-600">{edu.period}</span>
                </div>
                <p className="text-gray-700 mb-2 font-medium">{edu.institution}</p>
                <p className="text-gray-700 font-semibold">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;