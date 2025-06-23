import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Moon, Sun, Menu, X } from 'lucide-react';
import grwmImage from './assets/images/grwm.png';
import login from './assets/images/login.png';
import game from './assets/images/game.png';
import blog from './assets/images/blog.png';
import nj from './assets/images/nj.png';
import bird from './assets/images/bird.png';
import Text from './assets/images/Text.png';
import RE from './assets/images/RE.png';
import pizza from './assets/images/pizza.png';
import { InteractiveHoverButton } from "./component/button.jsx";
import Contact from './component/contact';
import Skills from './component/Skills';
import YouTube from './component/YouTube';
import Resume from './component/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (e) => {
    console.error('Error loading image:', e);
    setImageError(true);
    e.target.src = 'https://placehold.co/400x400/png';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleProjectHover = (project) => {
    setHoveredProject(project);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'Featured Projects', id: 'featured-projects' },
    { name: 'Other Projects', id: 'other-projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'YouTube', id: 'youtube' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  // Featured Projects
  const featuredProjects = [
    {
      title: "Rishabh Electronics",
      description: "A modern, responsive website for RISHABH ELECTRONICS, a trusted electronics and furniture store located in Baloda Bazar, Raipur, Chhattisgarh. Built with Next.js 14 and featuring beautiful 3D animations, modern UI design, and comprehensive business showcase.",
      image: RE,
      tags: ["React", "javascript", "next", "typescript"],
      link: "https://rishabhelectronics.curiouscoder.live/",
      featured: true
    },
    {
      title: "Pizza Dashboard",
      description: "The Pizza Dashboard is a full-featured management system designed specifically for pizza restaurants and delivery services. This application streamlines operations by providing an intuitive interface for managing customers, tracking orders, and scheduling deliveries.",
      image: pizza,
      tags: ["React", "javascript", "next"],
      link: "https://pizza.curiouscoder.live/dashboard/activity",
      featured: true
    },
    {
      title: "DRIFT RUN",
      description: "Adventerous car rougelike  game made using unity and C# ",
      image: game,
      tags: ["unity", "C#"],
      link: "https://curiouscoder.itch.io/driftrun-rougelike",
      featured: true
    }
  ];

  // Other Projects
  const otherProjects = [
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
    },
    {
      title: "Text Formatter",
      description: "A simple website created using React and js, enable to format text  Check it out!",
      image: Text,
      tags: ["React", "javascript", "BootStrap"],
      link: "https://nityavitereactpractice.netlify.app/"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold">Nitya's Portfolio</span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center relative overflow-hidden ${darkMode ? 'bg-gray-800' : ''}`}>
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
                  src={imageError ? 'https://placehold.co/400x400/png' : nj}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="eager"
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

      {/* Featured Projects Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="featured-projects">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80'}`}></div>

        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Shapes */}
          <div className={`absolute top-20 left-20 w-16 h-16 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="cube">
              <div className={`cube-face front ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'}`}></div>
              <div className={`cube-face back ${darkMode ? 'bg-indigo-600' : 'bg-indigo-700'}`}></div>
              <div className={`cube-face right ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
              <div className={`cube-face left ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
              <div className={`cube-face top ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'}`}></div>
              <div className={`cube-face bottom ${darkMode ? 'bg-indigo-600' : 'bg-indigo-700'}`}></div>
            </div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-32 right-1/4 w-20 h-20 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-purple-500/20' : 'bg-purple-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/3 right-20 w-12 h-12 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Featured Projects</h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins leading-relaxed`}>
              Showcase of my most significant and impactful projects that demonstrate my skills and expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-6 hover:scale-105 transition-all duration-500 relative backdrop-blur-sm border cursor-pointer ${
                  darkMode
                    ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700/90'
                    : 'bg-white/90 border-white/50 hover:bg-white/95'
                }`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
                }}
                onMouseEnter={() => handleProjectHover(project)}
                onMouseLeave={handleProjectLeave}
              >
                <div className="absolute top-6 right-6 z-10">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ FEATURED
                  </span>
                </div>
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>{project.title}</h3>
                  <p className={`mb-6 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-700'
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
                    className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    View Project <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`} id="other-projects">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-cyan-50/80 via-blue-50/80 to-indigo-50/80'}`}></div>

        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Shapes */}
          <div className={`absolute top-32 right-32 w-14 h-14 animate-float-slow animation-delay-1000 ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="pyramid">
              <div className={`pyramid-face front ${darkMode ? 'border-b-cyan-400' : 'border-b-cyan-500'}`}></div>
              <div className={`pyramid-face right ${darkMode ? 'border-b-cyan-500' : 'border-b-cyan-600'}`}></div>
              <div className={`pyramid-face left ${darkMode ? 'border-b-cyan-500' : 'border-b-cyan-600'}`}></div>
              <div className={`pyramid-face back ${darkMode ? 'border-b-cyan-600' : 'border-b-cyan-700'}`}></div>
            </div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-40 left-20 w-18 h-18 rounded-full animate-float-slow animation-delay-2000 ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/4 left-1/3 w-10 h-10 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Other Projects</h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins leading-relaxed`}>
              Additional projects that showcase my learning journey and diverse skill set.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="flip-card-container h-80"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Flip Card Container */}
                <div className="flip-card-inner">

                  {/* Front Side */}
                  <div className={`flip-card-front overflow-hidden shadow-xl backdrop-blur-sm border ${
                    darkMode
                      ? 'bg-gray-700/80 border-gray-600/50'
                      : 'bg-white/90 border-white/50'
                  }`}
                  style={{
                    background: darkMode
                      ? 'linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 0.9) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
                  }}>
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-bold font-playfair drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              darkMode ? 'bg-gray-600/80 text-gray-300' : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            darkMode ? 'bg-gray-600/80 text-gray-400' : 'bg-gray-100 text-gray-500'
                          }`}>
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={`flip-card-back overflow-hidden shadow-xl backdrop-blur-sm border ${
                    darkMode
                      ? 'bg-gradient-to-br from-cyan-900/90 to-blue-900/90 border-cyan-400/50'
                      : 'bg-gradient-to-br from-cyan-50/95 to-blue-50/95 border-cyan-400/50'
                  }`}>
                    <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                      {/* Project Icon/Symbol */}
                      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
                        darkMode ? 'bg-cyan-400/20' : 'bg-cyan-400/30'
                      }`}>
                        <ExternalLink className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                      </div>

                      {/* Project Title */}
                      <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                        {project.title}
                      </h3>

                      {/* All Tags */}
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              darkMode
                                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                                : 'bg-cyan-100 text-cyan-700 border border-cyan-300/50'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 w-full">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                            darkMode
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white'
                              : 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white'
                          } shadow-lg hover:shadow-xl`}
                        >
                          <ExternalLink className="mr-2 w-5 h-5" />
                          View Live Project
                        </a>

                        <div className={`text-sm ${darkMode ? 'text-cyan-300' : 'text-cyan-600'} font-medium`}>
                          Click to explore this project
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* YouTube Section */}
      <YouTube darkMode={darkMode} />

      {/* Resume Section */}
      <Resume darkMode={darkMode} />

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <Contact isdarkMode={darkMode} />
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Nitya Jain. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Preview Overlay */}
      {hoveredProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

          {/* Preview Tile */}
          <div className="relative preview-tile">
            <div className={`w-[600px] h-[400px] rounded-3xl shadow-2xl backdrop-blur-md border overflow-hidden ${
              darkMode
                ? 'bg-gray-800/10 border-gray-600/30'
                : 'bg-white/10 border-white/30'
            }`}
            style={{
              boxShadow: darkMode
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.2)'
                : '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.2)'
            }}>
              {/* Project Image Preview */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <img
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle overlay for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

                {/* Featured badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ FEATURED PROJECT
                  </span>
                </div>

                {/* Project title overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold font-playfair drop-shadow-lg">
                    {hoveredProject.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;