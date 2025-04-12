import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2021 - Present',
      description: 'Leading development teams and implementing scalable solutions for enterprise clients.',
      achievements: [
        'Developed and maintained enterprise-level applications',
        'Implemented CI/CD pipelines for automated deployment',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Worked on various web applications and contributed to the development of new features.',
      achievements: [
        'Built responsive web applications using modern frameworks',
        'Optimized application performance and reduced load times',
        'Collaborated with designers to implement UI/UX improvements',
      ],
    },
    {
      company: 'WebTech Solutions',
      position: 'Junior Developer',
      period: '2017 - 2019',
      description: 'Started my career as a junior developer, learning and implementing web technologies.',
      achievements: [
        'Developed and maintained company websites',
        'Learned and implemented modern web technologies',
        'Participated in team projects and code reviews',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Experience</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-purple-500/20">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-500 -ml-2"></div>
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-light text-white">{exp.position}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 