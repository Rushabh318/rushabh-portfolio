import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';
import { experience } from '../data/mock';

/**
 * OPTION 1: Alternating Image Layout
 * - Images alternate between left and right sides
 * - Creates visual rhythm and breaks monotony
 * - Images are prominent but don't overwhelm content
 */

const ExperienceOption1 = () => {
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
            Professional journey with key projects and visual documentation.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={exp.id} className="relative">
                {exp.image ? (
                  // Layout with image
                  <div className={`grid md:grid-cols-2 gap-8 items-start ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Content Side */}
                    <div className={`${isEven ? '' : 'md:col-start-2'}`}>
                      <div className="border border-gray-800 bg-zinc-950 p-8 hover:border-gray-700 transition-colors">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                          <span className="ml-auto px-3 py-1 text-xs font-medium bg-gray-900 border border-gray-800">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-6">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                          <span className="text-gray-600">•</span>
                          <span>{exp.location}</span>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {exp.highlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-gray-600 mt-1">•</span>
                              <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.technologies.slice(0, 6).map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {exp.highlights.length > 4 && (
                          <button
                            onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                          >
                            {expandedExp === exp.id ? (
                              <><ChevronUp size={16} /> Show Less</>
                            ) : (
                              <><ChevronDown size={16} /> Show More</>
                            )}
                          </button>
                        )}

                        {expandedExp === exp.id && (
                          <ul className="space-y-2 mt-6 pt-6 border-t border-gray-800">
                            {exp.highlights.slice(4).map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-gray-600 mt-1">•</span>
                                <span className="text-gray-300 text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                      <button
                        onClick={() => setViewingImage(exp.id)}
                        className="relative group w-full overflow-hidden border border-gray-800 hover:border-gray-600 transition-all"
                      >
                        <img
                          src={exp.image}
                          alt={exp.imageAlt}
                          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex items-center gap-2 text-white text-sm font-medium">
                            <ZoomIn size={20} />
                            <span>View Full Size</span>
                          </div>
                        </div>
                      </button>
                      <p className="text-xs text-gray-500 mt-2 italic">{exp.imageAlt}</p>
                    </div>
                  </div>
                ) : (
                  // Layout without image
                  <div className="max-w-3xl">
                    <div className="border border-gray-800 bg-zinc-950 p-8 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                        <span className="ml-auto px-3 py-1 text-xs font-medium bg-gray-900 border border-gray-800">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-6">
                        <Briefcase size={16} />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-gray-600 mt-1">•</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Full Image Modal */}
        {viewingImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setViewingImage(null)}
          >
            <div className="relative max-w-6xl w-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-sm"
              >
                Press ESC or click outside to close
              </button>
              <img 
                src={experience.find(e => e.id === viewingImage)?.image}
                alt={experience.find(e => e.id === viewingImage)?.imageAlt}
                className="w-full h-auto rounded border border-gray-700"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceOption1;