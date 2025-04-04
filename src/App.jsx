import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Moon, Sun } from 'lucide-react';
import grwmImage from './assets/images/grwm.png';
import login from './assets/images/login.png';
import game from './assets/images/game.png';
import blog from './assets/images/blog.png';
import nitya from './assets/images/nitya.jpeg';
import bird from './assets/images/bird.png';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Get Ready With Me",
      description: "The one stop place to get a customised Drip - A fashion design platform",
      image: grwmImage,
      tags: ["HTML", "CSS", "javascript"],
      link: "https://atharvgit2005.github.io/DIY-fashion-design/"
    },
    {
      title: "Basic login page",
      description: "Nothing fancy, just a ridiculously simple login page made with HTML and CSS—because even hackers need a place to log in! 😆😅",
      image: login,
      tags: ["HTML", "javascript", "CSS"],
      link: "https://tubular-fenglisu-c83842.netlify.app/"
    },
    {
      title: "DRIFT RUN",
      description: "Adventerous car rougelike  game made using unity and C# ",
      image: game,
      tags: ["unity", "C#"],
      link: "https://curiouscoder.itch.io/driftrun-rougelike"
    },
    {
      title: "Blog Website",
      description: "A blog website :a one stop soluton to all blogs posts :made with react javascript and tailwind CSS",
      image: blog,
      tags: ["React", "javascript", "tailwind CSS"],
      link: "https://blog.curiouscoder.live/"
    },
    {
      title: "Flappy Bird",
      description: "A simple Flappy Bird game created using React and CSS, featuring smooth animations, dynamic obstacles, and score tracking. 🚀 Check it out!",
      image: bird,
      tags: ["React", "javascript", "CSS"],
      link: "https://flappybirdgame2025.netlify.app/"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold">Portfolio</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="#contact" className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden ${darkMode ? 'bg-gray-800' : ''}`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80'}`}></div>
        
        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Cube */}
          <div className={`absolute top-20 left-20 w-16 h-16 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="cube">
              <div className={`cube-face front ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
              <div className={`cube-face back ${darkMode ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
              <div className={`cube-face right ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <div className={`cube-face left ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <div className={`cube-face top ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
              <div className={`cube-face bottom ${darkMode ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
            </div>
          </div>

          {/* Pyramid */}
          <div className={`absolute top-40 right-32 w-16 h-16 animate-float-slow animation-delay-2000 ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="pyramid">
              <div className={`pyramid-face front ${darkMode ? 'border-b-purple-400' : 'border-b-purple-500'}`}></div>
              <div className={`pyramid-face right ${darkMode ? 'border-b-purple-500' : 'border-b-purple-600'}`}></div>
              <div className={`pyramid-face left ${darkMode ? 'border-b-purple-500' : 'border-b-purple-600'}`}></div>
              <div className={`pyramid-face back ${darkMode ? 'border-b-purple-600' : 'border-b-purple-700'}`}></div>
            </div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/4 right-1/4 w-12 h-12 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-yellow-500/20' : 'bg-yellow-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>
        
        {/* Content */}
        <div className={`relative w-full px-4 pt-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300 mx-auto md:mx-0">
                <img 
                  src={nitya}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = 'https://placehold.co/400x400/png'}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                  NITYA JAIN
                </h1>
                <h2 className="text-2xl md:text-3xl font-light italic mb-6 font-poppins">
                  Passionate programmer, Aspiring Full Stack Developer and Game developer
                </h2>
                <p className="text-xl md:text-2xl mb-8 font-poppins">
                  Passionate programmer who loves building websites, apps, and games. Aspiring full-stack and game developer, eager to create innovative and user-friendly projects.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://github.com/curiouscoder-cmd" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/nitya-jain-007908316/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
              </a>
              <a href="mailto:nitya@curiouscoder.live">
                <Mail className="w-6 h-6 hover:text-blue-500 transition-colors" />
              </a>
            </div>
            <div className="mt-16 flex justify-center">
              <a 
                href="#projects" 
                className="cursor-pointer hover:text-blue-500 transition-colors"
                aria-label="Scroll to Projects"
              >
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transform hover:-translate-y-2 transition-all duration-300`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className={`inline-flex items-center px-6 py-3 rounded-lg ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            Get in Touch
            <Mail className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;