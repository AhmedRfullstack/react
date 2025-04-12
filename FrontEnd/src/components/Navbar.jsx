import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      onLogout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-b border-purple-500/10 sticky top-0 z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center">
        <h1 
          className="text-2xl font-light tracking-wide text-white mb-4 md:mb-0 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold">Portfolio</span>
        </h1>
        <nav className="flex space-x-8 mb-4 md:mb-0">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleAuthClick}
            className="px-6 py-2 bg-gradient-to-r from-purple-600/90 to-purple-700/90 text-white rounded-sm hover:from-purple-700/90 hover:to-purple-800/90 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
          {!isAuthenticated && (
            <button 
              onClick={() => navigate('/signup')}
              className="px-6 py-2 border border-purple-500/30 text-gray-300 rounded-sm hover:bg-purple-500/10 transition-all duration-300"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;