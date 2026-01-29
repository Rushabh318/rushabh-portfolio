import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                As a Robotics and Computer Vision Engineer, I specialize in building autonomous systems that bridge the gap between research and real-world deployment.
              </p>
              <p>
                My expertise spans the full stack of robotics development—from low-level sensor integration and embedded systems to high-level perception algorithms and cloud-based AI training pipelines.
              </p>
              <p>
                I've led technical initiatives from founding engineer roles to research positions, always focusing on delivering impactful solutions that solve real problems.
              </p>
              <p>
                Whether it's technical development, product strategy, or consulting on autonomous systems, I bring a unique combination of deep technical expertise and business acumen.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-gray-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-gray-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Key Highlights */}
          <div className="space-y-6">
            <div className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
              <div className="text-5xl font-bold text-white mb-2">4+</div>
              <div className="text-gray-400 text-lg">Years in Robotics & AI</div>
            </div>

            <div className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400 text-lg">Engineers Mentored</div>
            </div>

            <div className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
              <div className="text-5xl font-bold text-white mb-2">1</div>
              <div className="text-gray-400 text-lg">European Patent Co-Inventor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;