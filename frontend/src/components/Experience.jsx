import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);
  const [viewingImage, setViewingImage] = useState(null);

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
                  <div className={`grid ${exp.image ? 'md:grid-cols-3' : 'md:grid-cols-1'} gap-0`}>
                    {/* Main Content */}
                    <div className={`${exp.image ? 'md:col-span-2' : 'md:col-span-1'} p-8`}>
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

                      {/* Key Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-gray-600 mt-1">•</span>
                              <span className="text-gray-300 leading-relaxed text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies if available */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
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
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
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

                    {/* Image Sidebar - Subtle and Integrated */}
                    {exp.image && (
                      <div className="md:col-span-1 relative bg-zinc-900 border-t md:border-t-0 md:border-l border-gray-800">
                        <div className="h-full p-4 flex flex-col">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <ImageIcon size={14} />
                            Project Visual
                          </div>
                          <button
                            onClick={() => setViewingImage(viewingImage === exp.id ? null : exp.id)}
                            className="relative group overflow-hidden rounded border border-gray-700 hover:border-gray-600 transition-all flex-1 min-h-[200px]"
                          >
                            <img 
                              src={exp.image} 
                              alt={exp.imageAlt || `${exp.company} project`}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                              <span className="text-white text-xs font-medium">Click to view full size</span>
                            </div>
                          </button>
                        </div>
                      </div>
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

                {/* Full Image Modal */}
                {viewingImage === exp.id && (
                  <div 
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setViewingImage(null)}
                  >
                    <div className="relative max-w-6xl w-full">
                      <button
                        className="absolute -top-12 right-0 text-white hover:text-gray-300 text-sm"
                        onClick={() => setViewingImage(null)}
                      >
                        Close (ESC)
                      </button>
                      <img 
                        src={exp.image} 
                        alt={exp.imageAlt || `${exp.company} project`}
                        className="w-full h-auto rounded border border-gray-700"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;