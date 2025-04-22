import React from 'react';

interface Video {
  id: string;
  title: string;
}

const YouTubeVideosSection: React.FC = () => {
  const videos: Video[] = [
    {
      id: 'cruFGY6PwJ4',
      title: 'YouTube video 1',
    },
    {
      id: 'dxqK_eI4Wlo',
      title: 'YouTube video 2',
    },
    {
      id: 'DHx9W2ZJ-Eg',
      title: 'YouTube video 3',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My YouTube Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?si=${video.id}`}
                  title={video.title}
                  className="w-full h-52 md:h-48 lg:h-52"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideosSection;