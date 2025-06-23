import React from 'react';
import { Play, Users, Video, Calendar, ExternalLink } from 'lucide-react';

const YouTube = ({ darkMode }) => {
  // YouTube channel data - update with your actual channel information
  const channelInfo = {
    name: "CuriousCoder",
    description: "Welcome to my coding journey! I share tutorials, project walkthroughs, and programming tips to help fellow developers learn and grow. From React tutorials to game development with Unity, join me as I explore the world of programming!",
    subscribers: "Coming Soon",
    videos: "Coming Soon",
    channelUrl: "https://youtube.com/@curiouscoder", // Update with your actual channel URL
    uploadSchedule: "New videos every week"
  };

  // Featured videos - update with your actual video data
  const featuredVideos = [
    {
      id: 1,
      title: "Building a React Portfolio Website",
      description: "Complete tutorial on creating a modern portfolio website using React and Tailwind CSS with responsive design and dark mode.",
      thumbnail: "https://placehold.co/480x360/4F46E5/FFFFFF/png?text=React+Portfolio+Tutorial",
      duration: "15:30",
      views: "Coming Soon",
      uploadDate: "Coming Soon",
      videoUrl: "#" // Update with actual video URL when available
    },
    {
      id: 2,
      title: "Unity Game Development Basics",
      description: "Learn the fundamentals of game development with Unity and C# - perfect for beginners starting their game dev journey.",
      thumbnail: "https://placehold.co/480x360/059669/FFFFFF/png?text=Unity+Game+Dev",
      duration: "22:45",
      views: "Coming Soon",
      uploadDate: "Coming Soon",
      videoUrl: "#" // Update with actual video URL when available
    },
    {
      id: 3,
      title: "JavaScript Tips and Tricks",
      description: "Essential JavaScript concepts, ES6+ features, and modern development practices every developer should master.",
      thumbnail: "https://placehold.co/480x360/F59E0B/FFFFFF/png?text=JavaScript+Tips",
      duration: "18:20",
      views: "Coming Soon",
      uploadDate: "Coming Soon",
      videoUrl: "#" // Update with actual video URL when available
    }
  ];

  const VideoCard = ({ video }) => (
    <div className={`rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${
      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
    }`}>
      <div className="relative group cursor-pointer">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x225/png?text=Video+Thumbnail';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {video.title}
        </h3>
        <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {video.description}
        </p>
        
        <div className={`flex justify-between items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <span>{video.views} views</span>
          <span>{video.uploadDate}</span>
        </div>
        
        <a
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-red-500 hover:text-red-600 transition-colors text-sm font-medium"
        >
          Watch Video <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <section className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} id="youtube">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-800' : 'bg-gradient-to-br from-red-50/80 via-pink-50/80 to-orange-50/80'}`}></div>

      {/* 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Play Button Shapes */}
        <div className={`absolute top-32 right-20 w-16 h-16 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
          <div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
          </div>
        </div>

        {/* Floating circles */}
        <div className={`absolute bottom-40 left-1/4 w-20 h-20 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-red-500/20' : 'bg-red-500/40'} backdrop-blur-sm`}></div>
        <div className={`absolute top-1/4 left-20 w-12 h-12 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-500/40'} backdrop-blur-sm`}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className={`absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
      <div className={`absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
      <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Channel Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center mb-8">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-full mr-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Play className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className={`text-4xl md:text-6xl font-bold font-playfair ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {channelInfo.name}
              </h2>
              <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>
                YouTube Channel
              </p>
            </div>
          </div>

          <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins leading-relaxed`}>
            {channelInfo.description}
          </p>

          {/* Channel Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className={`p-8 rounded-2xl shadow-2xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 backdrop-blur-sm border ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700/90'
                : 'bg-white/90 border-white/50 hover:bg-white/95'
            }`}
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
            }}>
              <Users className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
              <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                {channelInfo.subscribers}
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Subscribers
              </div>
            </div>

            <div className={`p-8 rounded-2xl shadow-2xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 backdrop-blur-sm border ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700/90'
                : 'bg-white/90 border-white/50 hover:bg-white/95'
            }`}
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
            }}>
              <Video className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
              <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                {channelInfo.videos}
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Videos
              </div>
            </div>

            <div className={`p-8 rounded-2xl shadow-2xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 backdrop-blur-sm border ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700/90'
                : 'bg-white/90 border-white/50 hover:bg-white/95'
            }`}
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
            }}>
              <Calendar className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
              <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                Weekly
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Upload Schedule
              </div>
            </div>
          </div>

          <a
            href={channelInfo.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Visit Channel <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Featured Videos */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Videos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 p-8 rounded-xl text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Stay Updated!
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Subscribe to my channel for the latest coding tutorials, project walkthroughs, and programming tips.
          </p>
          <a
            href={channelInfo.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Subscribe Now <Play className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
