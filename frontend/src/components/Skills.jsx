import React from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Comprehensive technical skill set spanning robotics, computer vision, deep learning, and system integration.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="border border-gray-800 p-8 bg-black hover:border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm font-medium bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;