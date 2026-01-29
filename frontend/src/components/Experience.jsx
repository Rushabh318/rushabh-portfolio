import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Professional journey spanning robotics engineering, computer vision, and technical leadership.
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
                <div className="border border-gray-800 p-8 bg-zinc-950 hover:border-gray-700 transition-colors">
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

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800">
                      {exp.type}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-gray-600 mt-1">•</span>
                        <span className="text-gray-300 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
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