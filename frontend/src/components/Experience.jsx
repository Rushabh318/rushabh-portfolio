import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Maximize2, ExternalLink } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);
  const [viewingImage, setViewingImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Professional Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            Building autonomous systems from research to production. Each role represents a step in advancing robotics, 
            computer vision, and AI-driven perception technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with gradient */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800" style={{ marginLeft: '1.5rem' }}></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-0 md:pl-16 group">
                {/* Timeline Dot - Enhanced */}
                <div 
                  className="hidden md:block absolute left-0 top-3 w-4 h-4 bg-white rounded-full ring-4 ring-black transition-all duration-300 group-hover:ring-gray-800 group-hover:scale-125" 
                  style={{ marginLeft: '1.25rem' }}
                ></div>

                {/* Content Card - Modern styling */}
                <div className="border border-gray-800 bg-gradient-to-br from-zinc-950 to-black hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/50">
                  <div className="p-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        {/* Duration Badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-4 py-1.5 text-xs font-bold bg-white/10 text-gray-300 border border-gray-700 rounded-full backdrop-blur-sm">
                            {exp.duration}
                          </span>
                          <span className="px-4 py-1.5 text-xs font-bold bg-white/5 text-gray-400 border border-gray-800 rounded-full">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Briefcase size={20} className="text-gray-500" />
                          <span className="text-lg font-semibold">{exp.company}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-lg">{exp.location}</span>
                        </div>
                      </div>

                      {/* Image Thumbnail - Modern floating card */}
                      {exp.image && (
                        <div className="lg:w-80 flex-shrink-0">
                          <button
                            onClick={() => setViewingImage(exp.id)}
                            onMouseEnter={() => setHoveredImage(exp.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                            className="relative group/img w-full overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 rounded-sm shadow-lg hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1"
                          >
                            <div className="aspect-[4/3] relative bg-gray-900">
                              <img
                                src={exp.image}
                                alt={exp.imageAlt}
                                className={`w-full h-full object-cover transition-all duration-700 ${
                                  hoveredImage === exp.id ? 'scale-110 grayscale-0' : 'scale-100 grayscale opacity-80'
                                }`}
                              />
                              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                                hoveredImage === exp.id ? 'opacity-60' : 'opacity-80'
                              }`}>
                                <div className="absolute bottom-4 left-4 right-4">
                                  <div className={`flex items-center gap-2 text-white transition-all duration-300 ${
                                    hoveredImage === exp.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                                  }`}>
                                    <Maximize2 size={18} />
                                    <span className="text-sm font-medium">View Full Size</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>
                          <p className="text-xs text-gray-500 mt-3 italic leading-relaxed">{exp.imageAlt}</p>
                        </div>
                      )}
                    </div>

                    {/* Highlights - Refined spacing */}
                    <div className="mb-8 mt-6">
                      <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-gray-700"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.slice(0, 5).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-4 group/item">
                            <span className="text-gray-600 mt-1.5 transition-colors group-hover/item:text-gray-400">→</span>
                            <span className="text-gray-300 leading-relaxed text-base">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies - Modern pill design */}
                    {exp.technologies && (
                      <div className="mb-8">
                        <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 flex items-center gap-2">
                          <span className="w-8 h-px bg-gray-700"></span>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 text-xs font-semibold bg-white/5 text-gray-300 border border-gray-800 hover:border-gray-700 hover:bg-white/10 transition-all rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expand Button - Refined */}
                    {exp.highlights.length > 5 && (
                      <button
                        onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium group/btn"
                      >
                        {expandedExp === exp.id ? (
                          <>
                            <ChevronUp size={18} className="transition-transform group-hover/btn:-translate-y-0.5" /> 
                            Show Less Details
                          </>
                        ) : (
                          <>
                            <ChevronDown size={18} className="transition-transform group-hover/btn:translate-y-0.5" /> 
                            Show {exp.highlights.length - 5} More Details
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Expanded Details - Seamless integration */}
                  {expandedExp === exp.id && (
                    <div className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
                      <div className="p-10">
                        <h4 className="text-base font-bold text-white mb-6 flex items-center gap-3">
                          <span className="w-1 h-6 bg-gradient-to-b from-gray-600 to-gray-800"></span>
                          Additional Details
                        </h4>
                        <ul className="space-y-3">
                          {exp.highlights.slice(5).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-4 group/item">
                              <span className="text-gray-600 mt-1.5 transition-colors group-hover/item:text-gray-400">→</span>
                              <span className="text-gray-300 text-base">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Image Modal - Enhanced */}
      {viewingImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setViewingImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <button
              className="absolute -top-16 right-0 text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
              onClick={() => setViewingImage(null)}
            >
              Press ESC or click outside to close
              <ExternalLink size={16} />
            </button>
            <div className="border border-gray-700 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src={experience.find(e => e.id === viewingImage)?.image}
                alt={experience.find(e => e.id === viewingImage)?.imageAlt}
                className="w-full h-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mt-6 text-center italic leading-relaxed">
              {experience.find(e => e.id === viewingImage)?.imageAlt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;