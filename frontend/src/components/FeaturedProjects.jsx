import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { featuredProjects, allProjects } from '../data/mock';

const FeaturedProjects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id="projects" className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base max-w-3xl">
            A selection of key projects demonstrating expertise in autonomous systems, computer vision, and robotics engineering.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 bg-black hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                      <span className="font-semibold">{project.company}</span>
                      <span className="text-gray-600">•</span>
                      <span>{project.role}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs">{project.duration}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {expandedProject === project.id ? (
                      <>
                        Show Less <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown size={18} />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Highlights */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Key Impact
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.impact.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gray-600 mt-1">→</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedProject === project.id && (
                <div className="border-t border-gray-800 p-6 bg-zinc-950">
                  <h4 className="text-base font-semibold text-white mb-3">
                    Technical Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.keyAchievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gray-600 mt-1">•</span>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* All Projects Section */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              Additional Projects
            </h3>
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {showAllProjects ? (
                <>
                  Show Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>

          {showAllProjects && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  className="border border-gray-800 p-5 bg-black hover:border-gray-700 transition-colors"
                >
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;