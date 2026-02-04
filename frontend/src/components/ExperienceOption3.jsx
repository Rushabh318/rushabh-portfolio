import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, ImageIcon } from 'lucide-react';
import { experience } from '../data/mock';

/**
 * OPTION 3: Compact Timeline with Image Gallery
 * - Traditional timeline on left
 * - Hoverable image thumbnails integrated inline
 * - Click to expand image in modal
 * - Most compact and information-dense option
 */

const ExperienceOption3 = () => {
  const [expandedExp, setExpandedExp] = useState(null);
  const [viewingImage, setViewingImage] = useState(null);

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Professional timeline with project documentation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-800" style={{ marginLeft: '1.5rem' }}></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-0 md:pl-16">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-0 top-2 w-3 h-3 bg-white rounded-full" style={{ marginLeft: '0.9375rem' }}></div>

                {/* Content Card */}
                <div className="border border-gray-800 bg-zinc-950 hover:border-gray-700 transition-colors">
                  <div className="p-8">
                    {/* Header */}
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

                    {/* Image Thumbnail (if exists) */}
                    {exp.image && (
                      <button
                        onClick={() => setViewingImage(exp.id)}
                        className="relative group w-full md:w-64 mb-6 overflow-hidden border border-gray-800 hover:border-gray-600 transition-all float-right ml-6 mb-6"
                      >
                        <div className="aspect-video relative">
                          <img
                            src={exp.image}
                            alt={exp.imageAlt}
                            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all flex items-center justify-center">
                            <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                          <p className="text-xs text-white">Click to view</p>
                        </div>
                      </button>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {exp.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-gray-600 mt-1">•</span>
                          <span className="text-gray-300 leading-relaxed text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4 clear-both">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expand Button */}
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
                  </div>

                  {/* Expanded Details */}
                  {expandedExp === exp.id && (
                    <div className="border-t border-gray-800 p-8 bg-black">
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
              <p className="text-gray-400 text-sm mt-4 text-center italic">
                {experience.find(e => e.id === viewingImage)?.imageAlt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceOption3;