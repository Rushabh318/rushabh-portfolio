import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
        </div>

        {/* Education Items */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border border-gray-800 p-8 bg-zinc-950 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap size={24} className="text-gray-500 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-300 font-semibold">
                        {edu.university}
                      </p>
                    </div>
                  </div>
                  {edu.focus && (
                    <p className="text-gray-400 ml-9">
                      Focus: {edu.focus}
                    </p>
                  )}
                </div>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;