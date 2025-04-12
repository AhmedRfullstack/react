import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Modern E-commerce Platform',
      description: 'A sophisticated e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern web technologies for optimal performance and user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Advanced Task Management System',
      description: 'A feature-rich task management application with real-time collaboration, task prioritization, and progress tracking. Includes team management and detailed analytics dashboard.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Interactive Portfolio Platform',
      description: 'A dynamic portfolio website showcasing professional work with smooth animations and responsive design. Features project case studies and interactive elements.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
      demoLink: '#',
      codeLink: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Projects</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-purple-900/30 hover:bg-purple-900/40 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-purple-800/50 text-purple-300 rounded-full hover:bg-purple-800/70 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/90 to-purple-700/90 text-white rounded-sm hover:from-purple-700/90 hover:to-purple-800/90 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-500/30 text-gray-300 rounded-sm hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 