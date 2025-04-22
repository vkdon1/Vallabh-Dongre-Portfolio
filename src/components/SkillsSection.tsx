import React, { useEffect } from 'react';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  percentage: number;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', percentage: 85 },
        { name: 'Core Java', percentage: 80 },
        { name: 'Python', percentage: 75 },
        { name: 'JavaScript', percentage: 90 },
      ],
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', percentage: 85 },
        { name: 'HTML & CSS', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 80 },
        { name: 'Responsive Design', percentage: 85 },
      ],
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Express.js', percentage: 80 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'MySQL', percentage: 70 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', percentage: 70 },
        { name: 'Kubernetes', percentage: 65 },
        { name: 'CI/CD', percentage: 75 },
        { name: 'GitHub', percentage: 85 },
      ],
    },
    {
      title: 'Cloud Computing',
      skills: [
        { name: 'AWS', percentage: 75 },
        { name: 'Cloud Infrastructure', percentage: 70 },
        { name: 'Deployment', percentage: 80 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', percentage: 90 },
        { name: 'Team Collaboration', percentage: 85 },
        { name: 'Problem Solving', percentage: 90 },
        { name: 'Leadership', percentage: 80 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when they become visible
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar: Element, index: number) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).getAttribute('data-width') || '0%';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white p-6 rounded-lg shadow-md fade-in card-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress bg-blue-600"
                        data-width={`${skill.percentage}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;