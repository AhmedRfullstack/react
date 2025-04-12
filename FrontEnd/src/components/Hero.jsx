import React from 'react';
import profileImage from '../assets/WhatsApp Image 2025-02-14 at 15.07.56_0c5afcbf.jpg';

const Hero = () => {
  return (
    <section id="hero" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-light tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Ahmed</span>
              <br />
              <span className="text-4xl text-gray-300">Full Stack Developer</span>
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed font-light max-w-lg">
            Transforming ideas into elegant digital solutions. Specializing in modern web technologies and creating seamless user experiences.
          </p>
          <div className="flex space-x-6">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600/90 to-purple-700/90 text-white rounded-sm hover:from-purple-700/90 hover:to-purple-800/90 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40">
              View Projects
            </button>
            <button className="px-8 py-3 border border-purple-500/30 text-gray-300 rounded-sm hover:bg-purple-500/10 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-[400px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg transform rotate-2"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/20 rounded-lg transform -rotate-2"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-lg border border-purple-500/30 transform -rotate-2 transition duration-500 hover:rotate-0"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm text-purple-300">Based in</p>
              <p className="text-lg font-light">Your Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 