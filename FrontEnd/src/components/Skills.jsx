import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { BsFillLightbulbFill, BsPeopleFill, BsBookFill, BsSearch } from "react-icons/bs";

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, icon: <FaReact className="text-blue-500" /> },
    { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-green-500" /> },
    { name: 'HTML/CSS', level: 95, icon: <><FaHtml5 className="text-orange-500" /><FaCss3Alt className="text-blue-400" /></> },
    { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-600" /> },
    { name: 'Express', level: 80, icon: <SiExpress className="text-gray-400" /> },
    { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'AWS', level: 70, icon: <FaAws className="text-yellow-600" /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <BsFillLightbulbFill className="text-purple-400" /> },
    { name: 'Team Collaboration', icon: <BsPeopleFill className="text-blue-400" /> },
    { name: 'Continuous Learning', icon: <BsBookFill className="text-green-400" /> },
    { name: 'Attention to Detail', icon: <BsSearch className="text-yellow-400" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Skills</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {skills.slice(4).map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-light text-white">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 