import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Wrench, Gamepad2, Globe, Smartphone } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const [isInView, setIsInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        {
          name: "React",
          level: 90,
          gradient: "linear-gradient(135deg, #61DAFB 0%, #21759B 100%)",
          glow: "0 0 20px rgba(97, 218, 251, 0.6), 0 0 40px rgba(97, 218, 251, 0.4)"
        },
        {
          name: "JavaScript",
          level: 85,
          gradient: "linear-gradient(135deg, #F7DF1E 0%, #F0DB4F 100%)",
          glow: "0 0 20px rgba(247, 223, 30, 0.6), 0 0 40px rgba(247, 223, 30, 0.4)"
        },
        {
          name: "HTML/CSS",
          level: 95,
          gradient: "linear-gradient(135deg, #FF6B35 0%, #00D4FF 100%)",
          glow: "0 0 20px rgba(255, 107, 53, 0.6), 0 0 40px rgba(0, 212, 255, 0.4)"
        },
        {
          name: "Tailwind CSS",
          level: 88,
          gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
          glow: "0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)"
        },
        {
          name: "Bootstrap",
          level: 80,
          gradient: "linear-gradient(135deg, #7952B3 0%, #563D7C 100%)",
          glow: "0 0 20px rgba(121, 82, 179, 0.6), 0 0 40px rgba(121, 82, 179, 0.4)"
        }
      ]
    },
    {
      title: "Backend & Frameworks",
      icon: <Database className="w-6 h-6" />,
      skills: [
        {
          name: "Node.js",
          level: 75,
          gradient: "linear-gradient(135deg, #339933 0%, #68A063 100%)",
          glow: "0 0 20px rgba(51, 153, 51, 0.6), 0 0 40px rgba(51, 153, 51, 0.4)"
        },
        {
          name: "Next.js",
          level: 82,
          gradient: "linear-gradient(135deg, #00D9FF 0%, #0099CC 100%)",
          glow: "0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(0, 153, 204, 0.4)"
        },
        {
          name: "Express.js",
          level: 70,
          gradient: "linear-gradient(135deg, #00FF88 0%, #00CC6A 100%)",
          glow: "0 0 20px rgba(0, 255, 136, 0.6), 0 0 40px rgba(0, 204, 106, 0.4)"
        }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: "JavaScript",
          level: 85,
          gradient: "linear-gradient(135deg, #F7DF1E 0%, #F0DB4F 100%)",
          glow: "0 0 20px rgba(247, 223, 30, 0.6), 0 0 40px rgba(247, 223, 30, 0.4)"
        },
        {
          name: "TypeScript",
          level: 75,
          gradient: "linear-gradient(135deg, #3178C6 0%, #235A97 100%)",
          glow: "0 0 20px rgba(49, 120, 198, 0.6), 0 0 40px rgba(49, 120, 198, 0.4)"
        },
        {
          name: "C#",
          level: 70,
          gradient: "linear-gradient(135deg, #00FF9F 0%, #00B4FF 100%)",
          glow: "0 0 20px rgba(0, 255, 159, 0.6), 0 0 40px rgba(0, 180, 255, 0.4)"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        {
          name: "Git",
          level: 80,
          gradient: "linear-gradient(135deg, #F05032 0%, #C73E1D 100%)",
          glow: "0 0 20px rgba(240, 80, 50, 0.6), 0 0 40px rgba(240, 80, 50, 0.4)"
        },
        {
          name: "Vite",
          level: 85,
          gradient: "linear-gradient(135deg, #646CFF 0%, #747BFF 100%)",
          glow: "0 0 20px rgba(100, 108, 255, 0.6), 0 0 40px rgba(116, 123, 255, 0.4)"
        },
        {
          name: "Netlify",
          level: 75,
          gradient: "linear-gradient(135deg, #00C7B7 0%, #009A8B 100%)",
          glow: "0 0 20px rgba(0, 199, 183, 0.6), 0 0 40px rgba(0, 154, 139, 0.4)"
        },
        {
          name: "Unity",
          level: 70,
          gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
          glow: "0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 142, 83, 0.4)"
        }
      ]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-6 h-6" />,
      skills: [
        {
          name: "Unity",
          level: 70,
          gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
          glow: "0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 142, 83, 0.4)"
        },
        {
          name: "C# for Games",
          level: 68,
          gradient: "linear-gradient(135deg, #00FF9F 0%, #00B4FF 100%)",
          glow: "0 0 20px rgba(0, 255, 159, 0.6), 0 0 40px rgba(0, 180, 255, 0.4)"
        },
        {
          name: "Game Design",
          level: 75,
          gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
          glow: "0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(79, 70, 229, 0.4)"
        }
      ]
    },
    {
      title: "Mobile & Responsive",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        {
          name: "Responsive Design",
          level: 90,
          gradient: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
          glow: "0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(190, 24, 93, 0.4)"
        },
        {
          name: "Mobile-First",
          level: 85,
          gradient: "linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)",
          glow: "0 0 20px rgba(244, 63, 94, 0.6), 0 0 40px rgba(225, 29, 72, 0.4)"
        },
        {
          name: "Cross-Browser",
          level: 80,
          gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
          glow: "0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(5, 150, 105, 0.4)"
        }
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedWidth, setAnimatedWidth] = useState(0);
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const [isCountingActive, setIsCountingActive] = useState(false);

    useEffect(() => {
      if (isInView) {
        // Trigger visibility after section comes into view with staggered delay
        const visibilityTimer = setTimeout(() => {
          setIsVisible(true);
        }, index * 100); // Smoother, faster sequence

        // Start width and percentage animation with smooth easing
        const animationTimer = setTimeout(() => {
          setAnimatedWidth(skill.level);
          setIsCountingActive(true);

          // Animate percentage counter with easing
          const startTime = Date.now();
          const duration = 2000; // 2 seconds to match the progress bar

          const animateCounter = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out cubic)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentPercentage = Math.round(easedProgress * skill.level);

            setAnimatedPercentage(currentPercentage);

            if (progress < 1) {
              requestAnimationFrame(animateCounter);
            } else {
              setIsCountingActive(false);
            }
          };

          requestAnimationFrame(animateCounter);
        }, index * 100 + 200); // Slightly longer delay for animation start

        return () => {
          clearTimeout(visibilityTimer);
          clearTimeout(animationTimer);
        };
      }
    }, [isInView, index, skill.level]);

    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {skill.name}
          </span>
          <span className={`text-lg font-bold transition-all duration-200 ${
            darkMode ? 'text-white' : 'text-gray-800'
          } ${isCountingActive ? 'scale-110 text-blue-500' : animatedPercentage > 0 ? 'scale-105 text-green-500' : 'scale-100'}`}
          style={{
            textShadow: isCountingActive
              ? '0 0 15px rgba(59, 130, 246, 0.7)'
              : animatedPercentage > 0
                ? '0 0 10px rgba(34, 197, 94, 0.5)'
                : 'none'
          }}>
            {animatedPercentage}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className={`relative w-full rounded-full h-1.5 overflow-visible ${
          darkMode ? 'bg-gray-700/30' : 'bg-gray-200/30'
        }`}>
          {/* Background track with subtle glow */}
          <div className={`absolute inset-0 rounded-full ${
            darkMode ? 'bg-gradient-to-r from-gray-700/40 to-gray-600/40' : 'bg-gradient-to-r from-gray-200/40 to-gray-300/40'
          }`}
          style={{
            boxShadow: darkMode
              ? '0 0 8px rgba(75, 85, 99, 0.3)'
              : '0 0 8px rgba(229, 231, 235, 0.3)'
          }}></div>

          {/* Animated Progress Bar */}
          <div
            className={`relative h-full rounded-full transition-all duration-[2000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: `${animatedWidth}%`,
              background: skill.gradient,
              boxShadow: isVisible
                ? `${skill.glow}, 0 0 15px rgba(255, 255, 255, 0.1)`
                : 'none',
              transform: `scaleX(${isVisible ? 1 : 0})`,
              transformOrigin: 'left center',
              transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {/* Enhanced inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 via-white/10 to-transparent"></div>

            {/* Animated shimmer effect - only show when bar is visible */}
            {isVisible && (
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            )}

            {/* Enhanced pulse effect at the end of the bar */}
            {isVisible && (
              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/70 rounded-full animate-pulse"
                style={{
                  animationDelay: '1.5s',
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
                }}
              ></div>
            )}

            {/* Subtle end cap glow */}
            {isVisible && (
              <div
                className="absolute right-0 top-0 h-full w-3 rounded-full opacity-60"
                style={{
                  background: `radial-gradient(ellipse at center, ${skill.gradient.split(',')[0].split('(')[1]} 0%, transparent 70%)`,
                  filter: 'blur(2px)'
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={skillsRef} className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="skills">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80'}`}></div>

      {/* 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Cubes */}
        <div className={`absolute top-20 left-20 w-12 h-12 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
          <div className="cube">
            <div className={`cube-face front ${darkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></div>
            <div className={`cube-face back ${darkMode ? 'bg-purple-600' : 'bg-purple-700'}`}></div>
            <div className={`cube-face right ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
            <div className={`cube-face left ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
            <div className={`cube-face top ${darkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></div>
            <div className={`cube-face bottom ${darkMode ? 'bg-purple-600' : 'bg-purple-700'}`}></div>
          </div>
        </div>

        {/* Floating circles */}
        <div className={`absolute bottom-32 right-1/4 w-16 h-16 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/40'} backdrop-blur-sm`}></div>
        <div className={`absolute top-1/3 right-20 w-10 h-10 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-green-500/20' : 'bg-green-500/40'} backdrop-blur-sm`}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className={`absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
      <div className={`absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
      <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            Skills & Expertise
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>
            A comprehensive showcase of my technical skills and proficiency levels across various technologies and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-2xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 backdrop-blur-sm border ${
                darkMode
                  ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700/90'
                  : 'bg-white/90 border-white/50 hover:bg-white/95'
              }`}
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
              }}
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-xl mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300 ${
                  darkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
                }`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className={`mt-20 p-10 rounded-3xl shadow-2xl backdrop-blur-sm border transform hover:scale-105 transition-all duration-500 ${
          darkMode
            ? 'bg-gray-800/80 border-gray-700/50'
            : 'bg-white/90 border-white/50'
        }`}
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
        }}>
          <h3 className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
            Quick Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className={`p-6 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20' : 'bg-gradient-to-br from-blue-50 to-blue-100'
            }`}>
              <div className={`text-4xl font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-playfair`}>
                3+
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Years of Experience
              </div>
            </div>
            <div className={`p-6 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-green-600/20 to-green-800/20' : 'bg-gradient-to-br from-green-50 to-green-100'
            }`}>
              <div className={`text-4xl font-bold mb-3 ${darkMode ? 'text-green-400' : 'text-green-600'} font-playfair`}>
                15+
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Technologies
              </div>
            </div>
            <div className={`p-6 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20' : 'bg-gradient-to-br from-purple-50 to-purple-100'
            }`}>
              <div className={`text-4xl font-bold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-playfair`}>
                8+
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Projects Completed
              </div>
            </div>
            <div className={`p-6 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-orange-600/20 to-orange-800/20' : 'bg-gradient-to-br from-orange-50 to-orange-100'
            }`}>
              <div className={`text-4xl font-bold mb-3 ${darkMode ? 'text-orange-400' : 'text-orange-600'} font-playfair`}>
                100%
              </div>
              <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passion for Coding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
