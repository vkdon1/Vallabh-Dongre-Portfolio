import React from 'react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AchievementsSection: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'Smart India Hackathon',
      description: 'Participated in Smart India Hackathon (SIH) 2024',
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'LeetCode Badge',
      description: 'Earned 100 days coding badge on LeetCode',
      icon: (
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Achievements</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-700">{achievement.title}</h3>
                </div>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;