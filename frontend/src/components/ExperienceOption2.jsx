import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Maximize2 } from 'lucide-react';
import { experience } from '../data/mock';

/**
 * OPTION 2: Image Overlay with Reveal
 * - Images serve as subtle backgrounds with dark overlay
 * - Hover reveals more of the image
 * - Very cinematic and modern feel
 * - Content always readable
 */

const ExperienceOption2 = () => {
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
            Professional journey with immersive project visuals.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="relative overflow-hidden border border-gray-800 hover:border-gray-700 transition-all group">
              {/* Background Image with Overlay */}
              {exp.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={exp.image}
                    alt={exp.imageAlt}
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80"></div>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                      <span className="px-3 py-1 text-xs font-medium bg-gray-900/80 backdrop-blur-sm border border-gray-800">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 mb-6">
                      <Briefcase size={18} />
                      <span className="font-semibold text-lg">{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {exp.image && (
                    <button
                      onClick={() => setViewingImage(exp.id)}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 border border-gray-700 hover:border-gray-600 rounded"
                    >
                      <Maximize2 size={16} />
                      View Image
                    </button>
                  )}
                </div>

                <div className="max-w-4xl">
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-gray-500 mt-1 text-lg">→</span>
                        <span className="text-gray-200 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-gray-900/80 backdrop-blur-sm text-gray-300 border border-gray-800">
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
                        <><ChevronUp size={18} /> Show Less</>
                      ) : (
                        <><ChevronDown size={18} /> Show More Details</>
                      )}
                    </button>
                  )}

                  {expandedExp === exp.id && (
                    <ul className="space-y-3 mt-6 pt-6 border-t border-gray-800">
                      {exp.highlights.slice(4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-gray-500 mt-1 text-lg">→</span>
                          <span className="text-gray-200 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
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
              <p className="text-gray-400 text-sm mt-4 text-center">
                {experience.find(e => e.id === viewingImage)?.imageAlt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceOption2;