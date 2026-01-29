import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Professional journey spanning robotics engineering, computer vision, and technical leadership with key projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-800" style={{ marginLeft: '1.5rem' }}></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-0 md:pl-16">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-0 top-2 w-3 h-3 bg-white rounded-full" style={{ marginLeft: '0.9375rem' }}></div>

                {/* Content Card */}
                <div className="border border-gray-800 bg-zinc-950 hover:border-gray-700 transition-colors overflow-hidden">
                  {/* Header Section */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-400">
                          <span className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </span>
                          <span className="text-gray-600">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800">
                        {exp.type}
                      </span>
                    </div>

                    {/* Project Image if available */}
                    {exp.image && (
                      <div className="mb-6 rounded overflow-hidden border border-gray-800">
                        <img 
                          src={exp.image} 
                          alt={exp.imageAlt || `${exp.company} project`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.slice(0, 4).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-gray-600 mt-1">•</span>
                            <span className="text-gray-300 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies if available */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Show More/Less Button */}
                    {exp.highlights.length > 4 && (
                      <button
                        onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                        className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {expandedExp === exp.id ? (
                          <>
                            Show Less <ChevronUp size={18} />
                          </>
                        ) : (
                          <>
                            Show More Details <ChevronDown size={18} />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {expandedExp === exp.id && exp.highlights.length > 4 && (
                    <div className="border-t border-gray-800 p-8 bg-black">
                      <h4 className="text-base font-semibold text-white mb-4">
                        Additional Details
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.slice(4).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-gray-600 mt-1">•</span>
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;