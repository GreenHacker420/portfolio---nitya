import React, { useState } from 'react';
import { Download, Eye, X, FileText } from 'lucide-react';

const Resume = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  const resumeData = {
    pdfUrl: "/resume.pdf",
    previewImage: "/resume-preview.jpg",
    downloadUrl: "/resume.pdf",
    lastUpdated: "January 2025"
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeData.downloadUrl;
    link.download = 'Nitya_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="resume">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-green-50/80 via-blue-50/80 to-purple-50/80'}`}></div>

        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Document Shapes */}
          <div className={`absolute top-20 right-20 w-12 h-16 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className={`w-full h-full rounded-lg ${darkMode ? 'bg-green-400' : 'bg-green-500'} shadow-lg`}></div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-32 left-1/4 w-16 h-16 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/3 left-20 w-10 h-10 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-purple-500/20' : 'bg-purple-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300 ${
              darkMode ? 'bg-gradient-to-br from-green-500 to-blue-600' : 'bg-gradient-to-br from-green-400 to-blue-500'
            }`}>
              <FileText className="w-12 h-12 text-white" />
            </div>

            <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My Resume
            </h2>

            <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins leading-relaxed`}>
              Download my resume to learn more about my experience, skills, and educational background.
            </p>
          </div>

          <div className={`max-w-lg mx-auto rounded-3xl shadow-2xl overflow-hidden mb-12 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm border ${
            darkMode
              ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700/90'
              : 'bg-white/90 border-white/50 hover:bg-white/95'
          }`}
          style={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'
          }}>
            <div className="relative group cursor-pointer" onClick={openModal}>
              <img
                src={resumeData.previewImage}
                alt="Resume Preview"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/400x500/png?text=Resume+Preview';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                Nitya Jain - Resume
              </h3>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>
                Full Stack Developer & Game Developer
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last updated: {resumeData.lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              <Eye className="mr-3 w-6 h-6" />
              View Resume
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <Download className="mr-3 w-6 h-6" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className={`flex justify-between items-center p-4 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Resume Preview
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  title="Download Resume"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 h-[calc(90vh-80px)] overflow-auto">
              <iframe
                src={resumeData.pdfUrl}
                className="w-full h-full border-0"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
