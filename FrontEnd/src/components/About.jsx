import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">About</span> Me
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate Full Stack Developer with a strong focus on creating elegant and efficient solutions. 
              With expertise in both frontend and backend technologies, I bring ideas to life through clean code and 
              innovative design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development started with a fascination for creating digital experiences that make 
              a difference. I believe in continuous learning and staying updated with the latest technologies to 
              deliver cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <h3 className="text-3xl font-light text-purple-400">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light text-purple-400">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light text-purple-400">30+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-purple-900/30 rounded-lg border border-purple-500/20">
              <h3 className="text-purple-400 mb-2">Frontend Development</h3>
              <p className="text-gray-300">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-purple-900/30 rounded-lg border border-purple-500/20">
              <h3 className="text-purple-400 mb-2">Backend Development</h3>
              <p className="text-gray-300">Node.js, Express, MongoDB</p>
            </div>
            <div className="p-6 bg-purple-900/30 rounded-lg border border-purple-500/20">
              <h3 className="text-purple-400 mb-2">UI/UX Design</h3>
              <p className="text-gray-300">Figma, Adobe XD</p>
            </div>
            <div className="p-6 bg-purple-900/30 rounded-lg border border-purple-500/20">
              <h3 className="text-purple-400 mb-2">DevOps</h3>
              <p className="text-gray-300">Docker, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 